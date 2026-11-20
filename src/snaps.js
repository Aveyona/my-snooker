/*
 * My Snooker: snímky obrazovky pri podozrení (0.41.0, ochrana proti podvádzaniu – fáza E).
 * Hráč so skóre podozrenia od 30 pred partiou cez internet alebo hrou o skóre súhlasí so snímaním celej obrazovky
 * (inak len tréning). Hra potom v náhodných chvíľach (20 – 90 s a pred niektorými údermi) pošle snímku obrazovky
 * a vnútorný obrázok hry na server (includes/snaps.php). Zastavenie zdieľania = partia zrušená, frame neplatný.
 */

const TEXT = (days) =>
	`Pri tvojom účte je potrebné overenie férovej hry. Počas partie budeme v náhodných chvíľach robiť snímky celej obrazovky. Snímky slúžia len na kontrolu podvádzania, uchovávame ich ${days} dní a vidí ich iba správca. Bez súhlasu môžeš hrať tréning.`;

export class Snaps {
	constructor(net, root, toast) {
		this.net = net;
		this.root = root;
		this.toast = toast || (() => {});
		this.stream = null;
		this.video = null;
		this.ref = '';
		this.shot = 0;
		this.timer = 0;
		this.gameCanvas = null;
		this._wantGame = null;
		this.busy = false;
	}

	/** Dialóg súhlasu: Súhlasím / Len tréning. */
	ask(days) {
		return new Promise((res) => {
			const el = document.createElement('div');
			el.className = 'mysn-choice mysn-snapask';
			el.style.zIndex = '60';
			el.innerHTML = '<div class="mysn-choice-t"></div><div class="mysn-choice-b"><button type="button" data-a="1">Súhlasím</button><button type="button" data-a="0">Len tréning</button></div>';
			el.querySelector('.mysn-choice-t').textContent = TEXT(days);
			el.addEventListener('click', (e) => {
				const b = e.target.closest('button');
				if (b) {
					el.remove();
					res(b.dataset.a === '1');
				}
			});
			this.root.appendChild(el);
		});
	}

	/**
	 * Pred partiou (ref m123) alebo frame-om hry o skóre (ref f…): ak server žiada snímky, vyžiada súhlas a zdieľanie
	 * celej obrazovky. Vráti true, ak sa môže hrať (snímky netreba alebo bežia), false = len tréning.
	 */
	async ensure(ref) {
		let st = null;
		try {
			st = await this.net.call('snap/state?t=' + Date.now(), null, 'GET');
		} catch (e) {
			return true; // bez spojenia rozhodne server pri zápise
		}
		if (!st || !st.need) {
			this.stop(false);
			return true;
		}
		this.ref = ref;
		this.shot = 0;
		if (this.stream && this.stream.active) {
			this.schedule();
			return true;
		}
		if (!st.consent) {
			const yes = await this.ask(st.days || 30);
			this.net.call('snap/consent', { yes: yes ? 1 : 0 }).catch(() => {});
			if (!yes) {
				return false;
			}
		}
		if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
			this.toast('Overenie férovej hry potrebuje snímanie obrazovky, ktoré tento prehliadač nevie (mobil). Hrať môžeš tréning.');
			return false;
		}
		try {
			const s = await navigator.mediaDevices.getDisplayMedia({ video: { displaySurface: 'monitor', frameRate: 1 }, audio: false });
			const tr = s.getVideoTracks()[0];
			const set = tr && tr.getSettings ? tr.getSettings() : {};
			if (set.displaySurface && set.displaySurface !== 'monitor') {
				s.getTracks().forEach((t) => t.stop());
				this.toast('Treba zdieľať celú obrazovku, nie okno ani kartu.');
				return false;
			}
			this.stream = s;
			this.video = document.createElement('video');
			this.video.muted = true;
			this.video.srcObject = s;
			await this.video.play().catch(() => {});
			tr.addEventListener('ended', () => this.stop(true));
			this.schedule();
			setTimeout(() => this.capture(), 3000); // prvá snímka hneď na začiatku
			return true;
		} catch (e) {
			this.toast('Bez zdieľania celej obrazovky sa výsledok nezapíše. Hrať môžeš tréning.');
			return false;
		}
	}

	schedule() {
		clearTimeout(this.timer);
		this.timer = setTimeout(() => {
			this.capture();
			this.schedule();
		}, 20000 + Math.random() * 70000);
	}

	/** Pred úderom: snímka asi pri každom treťom. */
	onShot() {
		this.shot++;
		if (this.stream && this.stream.active && Math.random() < 0.3) {
			this.capture();
		}
	}

	/** Zastavenie (hráč ukončil zdieľanie: server sa dozvie a partia sa zruší alebo frame bude neplatný). */
	stop(byUser) {
		clearTimeout(this.timer);
		if (this.stream) {
			this.stream.getTracks().forEach((t) => t.stop());
		}
		this.stream = null;
		const ref = (this.refFn && this.refFn()) || this.ref;
		if (byUser && ref) {
			this.net.call('snap/stop', { ref }).catch(() => {});
			this.toast('Zdieľanie obrazovky sa skončilo: výsledok tejto hry sa nezapíše.');
		}
	}

	/** Hlavná slučka po vykreslení: vnútorný obrázok hry (WebGL plátno treba čítať hneď po vykreslení). */
	afterRender(canvas) {
		if (this._wantGame) {
			const f = this._wantGame;
			this._wantGame = null;
			try {
				f(canvas.toDataURL('image/jpeg', 0.7), canvas.getBoundingClientRect());
			} catch (e) {
				f(null, null);
			}
		}
	}

	async capture() {
		if (this.busy || !this.stream || !this.stream.active || !this.video || !this.video.videoWidth) {
			return;
		}
		this.busy = true;
		try {
			const [gameUrl, rect] = await new Promise((res) => {
				this._wantGame = (u, r) => res([u, r]);
				setTimeout(() => res([null, null]), 1500);
			});
			const v = this.video;
			const k = Math.min(1, 1920 / v.videoWidth);
			const c = document.createElement('canvas');
			c.width = Math.round(v.videoWidth * k);
			c.height = Math.round(v.videoHeight * k);
			c.getContext('2d').drawImage(v, 0, 0, c.width, c.height);
			const screenBlob = await new Promise((r) => c.toBlob(r, 'image/jpeg', 0.6));
			const fd = new FormData();
			const ref = (this.refFn && this.refFn()) || this.ref;
			if (!ref) {
				this.busy = false;
				return;
			}
			fd.append('ref', ref);
			fd.append('shot', String(this.shot));
			fd.append('screen', screenBlob, 's.jpg');
			if (gameUrl) {
				fd.append('game', await (await fetch(gameUrl)).blob(), 'g.jpg');
			}
			if (rect) {
				// poloha hry na obrazovke (body obrazovky): okno + rámy prehliadača + plátno
				const bx = window.screenX + Math.max(0, (window.outerWidth - window.innerWidth) / 2);
				const by = window.screenY + Math.max(0, window.outerHeight - window.innerHeight - Math.max(0, (window.outerWidth - window.innerWidth) / 2));
				fd.append('gx', String(bx + rect.left));
				fd.append('gy', String(by + rect.top));
				fd.append('gw', String(rect.width));
				fd.append('gh', String(rect.height));
				fd.append('sw', String(window.screen.width));
				fd.append('sh', String(window.screen.height));
			}
			await fetch(this.net.base + 'snap/up', { method: 'POST', body: fd, credentials: 'same-origin', headers: { 'X-WP-Nonce': this.net.nonce } });
		} catch (e) {
			/* ďalšia snímka o chvíľu */
		}
		this.busy = false;
	}
}
