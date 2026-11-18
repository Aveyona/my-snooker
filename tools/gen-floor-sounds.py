# Predvolené zvuky gule, ktorá vyletí zo stola a dopadne na zem (My Snooker):
# ball-floor-carpet = koberec v herni (tlmený dopad, slabé odskoky, krátke dogúľanie),
# ball-floor-hard = tvrdá lesklá podlaha na štadióne (ostré ťuknutia, viac odskokov, dlhšie gúľanie).
import numpy as np, subprocess, sys, os, wave
SR = 44100
out = sys.argv[1]

def env(t, a, d):
    return np.minimum(1, t / a) * np.exp(-t / d)

def lp(x, n):
    return np.convolve(x, np.ones(n) / n, mode='same')

def hit(t, amp, hard, rng):
    # jeden dopad: nízky ťuk (telo gule a podlahy) + šum (povrch); na tvrdej podlahe zvonivý klik
    s = np.sin(2 * np.pi * (140 if hard else 95) * t * (1 + 0.6 * np.exp(-t / 0.01))) * env(t, 0.0008, 0.035 if hard else 0.05)
    nz = rng.standard_normal(len(t))
    nz = (nz - lp(nz, 6)) if hard else lp(nz, 14)
    s += nz * env(t, 0.0004, 0.012 if hard else 0.02) * (0.9 if hard else 0.5)
    if hard:
        for f, a, d in [(1850, 0.35, 0.03), (3100, 0.2, 0.02), (720, 0.3, 0.05)]:
            s += a * np.sin(2 * np.pi * f * t) * env(t, 0.0005, d)
    return amp * s

def make(hard, seed):
    rng = np.random.default_rng(seed)
    dur = 2.4 if hard else 1.4
    n = int(SR * dur)
    s = np.zeros(n)
    t0 = 0.0
    v = 4.0 * (0.95 + 0.1 * rng.random())  # rýchlosť dopadu z výšky stola
    e = 0.55 if hard else 0.28              # odraz: tvrdá podlaha viac, koberec málo
    amp = 1.0
    while v > 0.35 and t0 < dur - 0.2:
        i = int(t0 * SR)
        tt = np.arange(n - i) / SR
        s[i:] += hit(tt, amp, hard, rng)
        v *= e
        amp *= e * (1.25 if hard else 1.1)
        t0 += 2 * v / 9.81
    # dogúľanie po podlahe
    i = int(t0 * SR)
    tt = np.arange(n - i) / SR
    roll = rng.standard_normal(n - i)
    roll = lp(roll, 3 if hard else 20) - lp(roll, 60 if hard else 120)
    rlen = 1.1 if hard else 0.45
    s[i:] += roll * np.minimum(1, tt / 0.03) * np.clip(1 - tt / rlen, 0, 1) ** 1.5 * (0.28 if hard else 0.16)
    # mierny dozvuk priestoru
    for dly, g in ([(0.043, 0.22), (0.067, 0.16), (0.11, 0.1), (0.17, 0.06)] if hard else [(0.021, 0.12), (0.034, 0.07)]):
        d = int(SR * dly)
        r = np.zeros_like(s)
        r[d:] = s[:-d] * g
        s = s + r
    s = s / np.max(np.abs(s)) * 0.8
    fade = np.ones_like(s)
    fl = int(SR * 0.1)
    fade[-fl:] = np.linspace(1, 0, fl)
    return s * fade

for slot, hard in [('ball-floor-carpet', False), ('ball-floor-hard', True)]:
    d = os.path.join(out, slot)
    os.makedirs(d, exist_ok=True)
    for k in range(1, 4):
        wav = f'/tmp/{slot}-{k}.wav'
        a = (make(hard, 10 * k + (1 if hard else 0)) * 32767).astype(np.int16)
        with wave.open(wav, 'wb') as w:
            w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes(a.tobytes())
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', wav, '-c:a', 'libvorbis', '-q:a', '5', os.path.join(d, f'{slot}-0{k}.ogg')], check=True)
print('ok')
