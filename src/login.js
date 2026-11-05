/*
 * My Snooker: prihlásenie a registrácia priamo v hre (okno v štýle stránky Prihlásenie z doplnku My Users).
 * Formulár ide na prihlasovaciu stránku webu (tie isté kontroly, ochranný kód, obmedzenie pokusov),
 * odpoveď sa prečíta na pozadí: chyba sa ukáže v okne, po prihlásení sa hra načíta znova už s účtom.
 * auth: { page, google, email, register, terms, privacy, news } z MYSN_CONFIG (page.php).
 */
const esc = (t) => String(t || '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

const GOOGLE_SVG =
	'<svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>';

export class LoginBox {
	constructor(root, auth) {
		this.auth = auth;
		this.tab = 'login';
		this.busy = false;
		this.el = document.createElement('div');
		this.el.className = 'mysn-login mysn-hidden';
		this.el.setAttribute('role', 'dialog');
		this.el.setAttribute('aria-modal', 'true');
		this.el.setAttribute('aria-label', 'Prihlásenie');
		// písanie do polí nesmie ovládať hru; Esc zavrie okno
		this.el.addEventListener('keydown', (e) => {
			e.stopPropagation();
			if (e.key === 'Escape') {
				this.close();
			}
		});
		for (const t of ['keyup', 'keypress', 'mousedown', 'pointerdown', 'wheel', 'click']) {
			this.el.addEventListener(t, (e) => e.stopPropagation());
		}
		this.el.addEventListener('mousedown', (e) => {
			if (e.target === this.el) {
				this.close(); // klik mimo okna
			}
		});
		root.appendChild(this.el);
	}

	isOpen() {
		return !this.el.classList.contains('mysn-hidden');
	}

	open(tab = 'login') {
		this.tab = tab;
		this.msg = null;
		this.render();
		this.el.classList.remove('mysn-hidden');
		const first = this.el.querySelector('input[type=email]');
		if (first) {
			setTimeout(() => first.focus(), 30);
		}
	}

	close() {
		this.el.classList.add('mysn-hidden');
	}

	render() {
		const a = this.auth;
		const tab = this.tab;
		const reg = tab === 'register';
		const values = this.values || {};
		const msg = this.msg ? `<div class="mysn-lg-alert${this.msg.ok ? ' mysn-lg-ok' : ''}" role="${this.msg.ok ? 'status' : 'alert'}">${esc(this.msg.text)}</div>` : '';
		let body = '';
		if (tab === 'sent') {
			body = `<div class="mysn-lg-body mysn-lg-sent"><h3>Skontroluj si e-mail</h3><p>${esc(this.sentText)}</p>
				<button type="button" class="mysn-lg-btn" data-tab="login">Späť na prihlásenie</button></div>`;
		} else if (tab === 'lost') {
			body = `<div class="mysn-lg-body"><h3>Zabudnuté heslo</h3>${msg}<p class="mysn-lg-sub">Pošleme ti odkaz na nastavenie nového hesla.</p>
				<form class="mysn-lg-form" data-action="lost" novalidate>
					<label for="mysn-lg-lemail">E-mail</label>
					<input id="mysn-lg-lemail" type="email" name="mu_email" autocomplete="email" required value="${esc(values.email)}">
					<button type="submit" class="mysn-lg-btn">Poslať odkaz</button>
				</form>
				<p class="mysn-lg-switch"><a href="#" data-tab="login">Späť na prihlásenie</a></p></div>`;
		} else {
			const terms = a.terms ? `<a href="${esc(a.terms)}" target="_blank" rel="noopener">podmienkami používania</a>` : 'podmienkami používania';
			const privacy = a.privacy ? `<a href="${esc(a.privacy)}" target="_blank" rel="noopener">spracovaním osobných údajov</a>` : 'spracovaním osobných údajov';
			body = `<div class="mysn-lg-body">
				<h3>${reg ? 'Vytvor si účet' : 'Vitaj späť'}</h3>
				<p class="mysn-lg-sub">${reg ? 'Zaregistruješ sa cez Google alebo e-mailom.' : 'Prihlás sa cez Google alebo e-mailom a heslom.'}</p>
				${msg}
				${a.google ? `<a class="mysn-lg-google" href="${esc(a.google)}">${GOOGLE_SVG}<span>Pokračovať cez Google</span></a>` : ''}
				${a.google && a.email ? '<div class="mysn-lg-or"><span>alebo e-mailom</span></div>' : ''}
				${
					a.email
						? `<form class="mysn-lg-form" data-action="${reg ? 'register' : 'login'}" novalidate>
					${reg ? `<label for="mysn-lg-name">Meno a priezvisko</label><input id="mysn-lg-name" type="text" name="mu_name" autocomplete="name" value="${esc(values.name)}">` : ''}
					<label for="mysn-lg-email">E-mail</label>
					<input id="mysn-lg-email" type="email" name="mu_email" autocomplete="email" required value="${esc(values.email)}">
					<div class="mysn-lg-row"><label for="mysn-lg-pass">Heslo</label>${reg ? '' : '<a href="#" data-tab="lost">Zabudnuté heslo?</a>'}</div>
					<input id="mysn-lg-pass" type="password" name="mu_pass" required autocomplete="${reg ? 'new-password' : 'current-password'}">
					${
						reg
							? `<p class="mysn-lg-hint">Aspoň 8 znakov.</p>
					<label class="mysn-lg-check"><input type="checkbox" name="mu_terms" value="1"><span>Súhlasím s ${terms} a so ${privacy}. (povinné)</span></label>
					${a.news ? '<label class="mysn-lg-check"><input type="checkbox" name="mu_news" value="1"><span>Chcem dostávať novinky e-mailom. (nepovinné)</span></label>' : ''}`
							: '<label class="mysn-lg-check"><input type="checkbox" name="mu_remember" value="1" checked><span>Zapamätať si ma</span></label>'
					}
					<button type="submit" class="mysn-lg-btn">${reg ? 'Vytvoriť účet' : 'Prihlásiť sa'}</button>
				</form>
				${a.register ? `<p class="mysn-lg-switch">${reg ? 'Už máš účet? <a href="#" data-tab="login">Prihlás sa</a>' : 'Ešte nemáš účet? <a href="#" data-tab="register">Zaregistruj sa</a>'}</p>` : ''}`
						: ''
				}
				${!a.google && !a.email ? '<p class="mysn-lg-sub">Prihlásenie je momentálne vypnuté.</p>' : ''}
			</div>`;
		}
		const tabs =
			(tab === 'login' || tab === 'register') && a.register
				? `<div class="mysn-lg-tabs" role="tablist"><button type="button" role="tab" data-tab="login" aria-selected="${!reg}">Prihlásiť sa</button><button type="button" role="tab" data-tab="register" aria-selected="${reg}">Zaregistrovať sa</button></div>`
				: '';
		this.el.innerHTML = `<div class="mysn-lg-wrap">
			<button type="button" class="mysn-lg-close" aria-label="Zavrieť" title="Zavrieť (Esc)">×</button>
			<h2 class="mysn-lg-title">Prihlásenie</h2>
			<div class="mysn-lg-card">${tabs}${body}</div>
			${a.google && tab !== 'lost' && tab !== 'sent' ? '<p class="mysn-lg-foot">Pri prvom prihlásení cez Google sa účet vytvorí automaticky a súhlasíš s podmienkami používania. Uložíme meno, e-mail a fotku z Google účtu.</p>' : ''}
		</div>`;
		this.el.querySelector('.mysn-lg-close').addEventListener('click', () => this.close());
		for (const t of this.el.querySelectorAll('[data-tab]')) {
			t.addEventListener('click', (e) => {
				e.preventDefault();
				this.keep();
				this.msg = null;
				this.tab = t.dataset.tab;
				this.render();
			});
		}
		const f = this.el.querySelector('form');
		if (f) {
			f.addEventListener('submit', (e) => {
				e.preventDefault();
				this.submit(f);
			});
		}
	}

	/** Zapamätá e-mail a meno pri prepnutí karty. */
	keep() {
		const f = this.el.querySelector('form');
		if (f) {
			const fd = new FormData(f);
			this.values = { ...(this.values || {}), email: fd.get('mu_email') || (this.values || {}).email || '', name: fd.get('mu_name') || (this.values || {}).name || '' };
		}
	}

	async submit(f) {
		if (this.busy) {
			return;
		}
		const action = f.dataset.action;
		const btn = f.querySelector('button[type=submit]');
		const label = btn.textContent;
		this.keep();
		this.busy = true;
		btn.disabled = true;
		btn.textContent = 'Chvíľu…';
		try {
			// čerstvý ochranný kód z prihlasovacej stránky (stránka hry môže byť v cache)
			const page = await fetch(this.auth.page, { credentials: 'same-origin', cache: 'no-store' });
			const pdoc = new DOMParser().parseFromString(await page.text(), 'text/html');
			const nonce = pdoc.querySelector('input[name=mu_nonce]');
			if (!nonce) {
				// prihlasovacia stránka už formulár neukazuje: používateľ je prihlásený (napr. v inej karte)
				if (!pdoc.querySelector('.mu-auth')) {
					location.reload();
					return;
				}
				throw new Error('Prihlasovací formulár sa nenačítal. Skús to znova.');
			}
			const fd = new FormData(f);
			fd.set('mu_action', action);
			fd.set('mu_nonce', nonce.value);
			fd.set('redirect_to', location.href.split('#')[0]);
			const r = await fetch(this.auth.page, { method: 'POST', body: fd, credentials: 'same-origin', cache: 'no-store' });
			const doc = new DOMParser().parseFromString(await r.text(), 'text/html');
			const box = doc.querySelector('.mu-auth');
			const sent = box && box.querySelector('.mu-sent');
			const alert = box && box.querySelector('.mu-alert');
			if (sent) {
				const p = sent.querySelector('p');
				this.sentText = p ? p.textContent.trim() : 'Poslali sme ti e-mail.';
				this.tab = 'sent';
				this.render();
			} else if (alert) {
				this.msg = { ok: alert.classList.contains('mu-alert-ok'), text: alert.textContent.replace(/Poslať odkaz znova/, '').trim() };
				if (action !== 'lost' && !this.msg.ok) {
					const err = box.querySelector('.mu-body');
					const t = err && err.dataset.tab;
					if (t === 'login' || t === 'register') {
						this.tab = t;
					}
				}
				this.render();
			} else if (!box || !box.querySelector('.mu-form')) {
				// prihlásený (alebo účet hneď aktívny): hra sa načíta znova už s účtom
				this.msg = { ok: true, text: 'Prihlásené, načítavam hru…' };
				this.render();
				location.reload();
				return;
			} else {
				throw new Error('Niečo sa nepodarilo. Skús to znova.');
			}
		} catch (e) {
			this.msg = { ok: false, text: e.message || 'Spojenie zlyhalo. Skús to znova.' };
			this.render();
		}
		this.busy = false;
		if (btn.isConnected) {
			btn.disabled = false;
			btn.textContent = label;
		}
	}
}
