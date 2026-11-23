#!/usr/bin/env python3
"""
My Snooker 0.46.0: indické postavy pre Uličku. Z textúr divákov (Rocketbox, assets/models/divakN) vyrobí
assets/models/indN: hnedá pleť, čierne vlasy, oblečenie prefarbené na indické (kurta, kameez, salwar,
pajama; časť mužov si nechá rifle), ženy bindi, časť mužov fúzy. Model (FBX) a normálové mapy sa berú
z pôvodného priečinka divakN (v hre MODEL_OF v realPerson.js).

Pleť sa hľadá podľa farby tváre tej istej postavy (vzorka zo stredu textúry hlavy): pixel je pleť, ak má
podobný farebný tón (a, b v Lab). Tak sa nepomýli ružová košeľa ani blond vlasy.
Spustenie: python3 tools/indianize.py
"""
import os
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = os.path.join(os.path.dirname(__file__), '..', 'assets', 'models')
FEMALE = {2, 4, 6, 8, 10}
# pleť (R, G, B) – rôzne odtiene hnedej
SKINS = [(206, 154, 116), (196, 144, 106), (214, 164, 124), (184, 132, 96), (202, 150, 112), (212, 160, 120), (188, 138, 100), (204, 152, 114), (194, 142, 104), (216, 166, 128)]  # pšeničná až hnedá (v nočnom svetle uličky vyzerá tmavšia)
# oblečenie: horná časť (kurta / kameez), dolná časť (None = rifle ostanú)
MEN = [((236, 230, 214), (238, 234, 224)), ((214, 120, 40), (236, 232, 220)), ((120, 36, 40), (232, 228, 216)), ((60, 90, 130), None), ((226, 218, 196), (190, 178, 150))]
WOMEN = [((214, 40, 110), (240, 200, 60)), ((30, 150, 140), (240, 236, 226)), ((240, 180, 30), (200, 40, 60)), ((120, 50, 150), (230, 120, 170)), ((40, 120, 60), (240, 220, 140))]


def to_lab(rgb):
	c = rgb / 255.0
	c = np.where(c > 0.04045, ((c + 0.055) / 1.055) ** 2.4, c / 12.92)
	M = np.array([[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]])
	xyz = c @ M.T / np.array([0.9505, 1.0, 1.089])
	f = np.where(xyz > 0.008856, np.cbrt(xyz), 7.787 * xyz + 16 / 116)
	L = 116 * f[..., 1] - 16
	a = 500 * (f[..., 0] - f[..., 1])
	b = 200 * (f[..., 1] - f[..., 2])
	return np.stack([L, a, b], -1)


def luma(rgb):
	return (rgb @ np.array([0.299, 0.587, 0.114])) / 255.0


def recolor(rgb, mask, col, contrast):
	"""Prefarbí pixely masky na farbu col, tieňovanie (jas voči priemeru) ostane."""
	if not mask.any():
		return
	L = luma(rgb)
	m = L[mask].mean()
	k = np.clip(1 + (L - m) / max(m, 0.05) * contrast, 0.15, 1.6)
	out = np.clip(k[..., None] * np.array(col, float), 0, 255)
	rgb[mask] = out[mask]


def skin_ref(head):
	h, w, _ = head.shape
	patch = head[int(h * 0.3):int(h * 0.42), int(w * 0.44):int(w * 0.56)].reshape(-1, 3)
	return to_lab(patch.astype(float)).mean(0)


def skin_mask(rgb, ref, tol=11):
	lab = to_lab(rgb)
	d = np.hypot(lab[..., 1] - ref[1], lab[..., 2] - ref[2])
	return (d < tol) & (lab[..., 0] > ref[0] - 45) & (lab[..., 0] < ref[0] + 25) & (rgb.max(-1) > 18)


def process(i):
	src = os.path.join(ROOT, f'divak{i}')
	dst = os.path.join(ROOT, f'ind{i}')
	os.makedirs(dst, exist_ok=True)
	fem = i in FEMALE
	skin = SKINS[i - 1]
	top, bottom = (WOMEN if fem else MEN)[(i - 1) // 2 % 5]
	head = np.asarray(Image.open(os.path.join(src, 'head.jpg')).convert('RGB')).astype(float)
	ref = skin_ref(head)
	# ---- telo
	body = np.asarray(Image.open(os.path.join(src, 'body.jpg')).convert('RGB')).astype(float)
	used = body.max(-1) > 18
	sk = skin_mask(body, ref)
	lab = to_lab(body)
	hue = np.degrees(np.arctan2(lab[..., 2], lab[..., 1])) % 360
	chroma = np.hypot(lab[..., 1], lab[..., 2])
	jeans = used & ~sk & (hue > 190) & (hue < 300) & (chroma > 4)
	cloth = used & ~sk & ~jeans
	recolor(body, sk, skin, 0.9)
	if bottom:
		recolor(body, jeans, bottom, 0.6)
	recolor(body, cloth, top, 0.7)
	im = Image.fromarray(body.astype(np.uint8))
	# jemná potlač (bodky ako ručná potlač) na oblečení žien
	if fem:
		d = ImageDraw.Draw(im)
		acc = tuple(min(255, int(c * 0.55 + 110)) for c in top)
		H, W = cloth.shape
		for y in range(4, H, 14):
			for x in range(4 + (y // 14) % 2 * 7, W, 14):
				if cloth[y, x]:
					d.ellipse([x - 1.5, y - 1.5, x + 1.5, y + 1.5], fill=acc)
	im.save(os.path.join(dst, 'body.jpg'), quality=88)
	# ---- hlava: pleť na hnedo, vlasy na čierno (oči, zuby a jazyk dole vľavo ostanú)
	H, W, _ = head.shape
	used = head.max(-1) > 18
	yy, xx = np.mgrid[0:H, 0:W]
	# oblasti textúry hlavy Rocketbox: hore a po bokoch vlasy, v strede tvár, dole krk; dole vľavo oči, zuby
	# a jazyk (ostanú), dole vpravo kúsky vlasov (chvost, cop)
	face = ((xx / W - 0.5) / 0.31) ** 2 + ((yy / H - 0.37) / 0.29) ** 2 < 1
	eyes = (yy > H * 0.66) & (xx < W * 0.4)
	hairbits = (yy > H * 0.6) & (xx > W * 0.66)
	neck = (yy > H * 0.46) & ~eyes & ~hairbits
	lab = to_lab(head)
	near = np.hypot(lab[..., 1] - ref[1], lab[..., 2] - ref[2]) < 18
	sk = used & ((skin_mask(head, ref, 13) & face) | (neck & near & (lab[..., 0] > ref[0] - 22)))
	lips = face & ~sk & used & (yy > H * 0.3)  # pery a kútiky
	eyeball = ((xx / W - 0.25) / 0.07) ** 2 + ((yy / H - 0.92) / 0.07) ** 2 < 1
	strands = eyes & ~eyeball & (lab[..., 1] < 20)  # kúsky vlasov dole vľavo (nie červené ústa, nie oko)
	hair = used & ~sk & (~eyes | strands) & ~lips
	recolor(head, sk, skin, 0.85)
	recolor(head, lips, tuple(int(c * 0.72) for c in skin), 0.6)
	v = 14 + luma(head) * 70
	head[hair] = np.stack([v + 4, v + 2, v], -1)[hair]
	hd = Image.fromarray(np.clip(head, 0, 255).astype(np.uint8))
	d = ImageDraw.Draw(hd)
	if fem:
		cx, cy = W * 0.5, H * 0.205  # bindi na čele
		d.ellipse([cx - 4, cy - 4, cx + 4, cy + 4], fill=(170, 20, 30))
	elif i in (1, 5, 9):
		m = Image.new('L', (W, H), 0)  # fúzy nad perou
		d2 = ImageDraw.Draw(m)
		cx, cy = W * 0.5, H * 0.372
		d2.ellipse([cx - 22, cy - 5, cx - 1, cy + 5], fill=200)
		d2.ellipse([cx + 1, cy - 5, cx + 22, cy + 5], fill=200)
		hd.paste((22, 18, 15), (0, 0), m.filter(ImageFilter.GaussianBlur(2)))
	hd.save(os.path.join(dst, 'head.jpg'), quality=90)
	# ---- priehľadné vlasy, obočie, mihalnice: na čierno
	hp = os.path.join(src, 'hair.png')
	if os.path.exists(hp):
		hr = np.asarray(Image.open(hp).convert('RGBA')).astype(float)
		v = 12 + luma(hr[..., :3]) * 60
		hr[..., 0], hr[..., 1], hr[..., 2] = v + 3, v + 2, v
		Image.fromarray(hr.astype(np.uint8), 'RGBA').save(os.path.join(dst, 'hair.png'))
	with open(os.path.join(dst, 'LICENSE.txt'), 'w') as f:
		f.write(f'Indická postava pre Uličku: textúry prefarbené z divak{i} (Microsoft Rocketbox, MIT), model a normálové mapy sa berú z divak{i}.\n\n')
		f.write(open(os.path.join(src, 'LICENSE.txt')).read())


if __name__ == '__main__':
	for i in range(1, 11):
		process(i)
	print('ind1 – ind10 hotové')
