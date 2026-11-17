# Predvolené zvuky série (My Snooker): kovový "cink" v štýle kill zvukov, každý stupeň vyšší a plnší.
import numpy as np, subprocess, sys, os
SR = 44100
out = sys.argv[1]
rng = np.random.default_rng(7)

def env(t, a, d):
    e = np.minimum(1, t / a) * np.exp(-t / d)
    return e

def bell(f, t, d, amp=1.0, chirp=0.0):
    # kovový zvonček: neharmonické alikvoty, rýchly cvak na začiatku, jemný chirp nahor
    fr = f * (1 + chirp * np.exp(-t / 0.02))
    ph = 2 * np.pi * np.cumsum(fr) / SR
    parts = [(1.0, 1.0, 1.0), (2.0, 0.45, 0.6), (2.76, 0.3, 0.4), (5.4, 0.16, 0.22), (8.93, 0.08, 0.12)]
    s = np.zeros_like(t)
    for m, a, dm in parts:
        s += a * np.sin(ph * m) * env(t, 0.002, d * dm)
    return amp * s

def level(n):
    peak = n >= 8
    dur = 0.75 + 0.05 * n + (0.6 if peak else 0)
    t = np.arange(int(SR * dur)) / SR
    steps = [0, 2, 4, 5, 7, 9, 11, 12, 14, 16]   # durová stupnica: každý stupeň vyššie
    f0 = 660 * 2 ** (steps[n - 1] / 12)
    d = 0.16 + 0.02 * n + (0.25 if peak else 0)
    s = bell(f0, t, d, 1.0, chirp=0.06)
    # vrstvy: od 3. kvinta, od 5. oktáva, od 7. tercia hore (plnší akord)
    if n >= 3: s += bell(f0 * 1.5, t, d * 0.9, 0.45)
    if n >= 5: s += bell(f0 * 2, t, d * 0.8, 0.35)
    if n >= 7: s += bell(f0 * 2.52, t, d * 0.7, 0.25)
    # druhý úder (ozvena "ting-ting") od 4. stupňa, oneskorený
    if n >= 4:
        dl = int(SR * 0.075)
        e2 = np.zeros_like(s); e2[dl:] = bell(f0 * 2, t[:-dl], d * 0.7, 0.3 + 0.03 * n)
        s += e2
    # úderový "punch": krátky šum + nízky ťuk
    nz = rng.standard_normal(len(t)) * env(t, 0.0005, 0.012) * (0.35 + 0.03 * n)
    sub = np.sin(2 * np.pi * 110 * t * (1 + np.exp(-t / 0.03))) * env(t, 0.001, 0.05) * (0.25 + 0.04 * n)
    s += nz + sub
    if peak:
        # vrchol: výbuch (filtrovaný šum s dozvukom) a dlhý zvonivý akord nahor
        burst = rng.standard_normal(len(t))
        burst = np.convolve(burst, np.ones(6) / 6, mode='same') * env(t, 0.003, 0.18) * (0.5 + 0.1 * (n - 8))
        s += burst
        for k, m in enumerate([1.0, 1.25, 1.5, 2.0]):
            dl = int(SR * (0.12 + 0.05 * k))
            e3 = np.zeros_like(s); e3[dl:] = bell(f0 * m * 2, t[:-dl], 0.5, 0.22)
            s += e3
    # jednoduchý dozvuk (niekoľko ozvien)
    for dly, g in [(0.031, 0.25), (0.047, 0.18), (0.071, 0.12), (0.113, 0.08)]:
        dl = int(SR * dly); r = np.zeros_like(s); r[dl:] = s[:-dl] * g; s = s + r
    # koniec do ticha, normalizácia na −3 dBFS špičku, mierne saturovanie
    fade = np.ones_like(s); fl = int(SR * 0.08); fade[-fl:] = np.linspace(1, 0, fl)
    s = np.tanh(s / np.max(np.abs(s)) * 1.3) * fade
    s = s / np.max(np.abs(s)) * 0.7
    return s

for n in range(1, 11):
    d = os.path.join(out, f'streak-{n}')
    os.makedirs(d, exist_ok=True)
    wav = f'/tmp/streak-{n}.wav'
    import wave
    a = (level(n) * 32767).astype(np.int16)
    with wave.open(wav, 'wb') as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes(a.tobytes())
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', wav, '-c:a', 'libvorbis', '-q:a', '5', os.path.join(d, f'streak-{n}.ogg')], check=True)
print('ok')
