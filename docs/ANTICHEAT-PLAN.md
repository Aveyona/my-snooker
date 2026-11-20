# My Snooker – plán ochrany proti podvádzaniu (anti-cheat)

Zadanie spísané 19. 11. 2026 podľa dohody s Aveyonom. Nadväzuje na krok 1 (0.34.0 – 0.34.1, `includes/anticheat.php`).

## Prečo

Test 18. – 19. 11. 2026 ukázal dva typy podvodu:

1. **AI hráč z konzoly.** Skript v konzole prehliadača naklonoval fyziku hry (`new Physics(kópia gúľ)`), pred každým úderom
   nasimuloval stovky variantov (smer, sila, falša) a cez `game.shoot()` zahral najlepší. Výsledok: frame 126 bodov
   bez chyby, 1. miesto v rebríčku, server výsledok overil (prehral frame, nekontroloval, kto hral).
   → Krok 1 (0.34.0) už hru skryl z konzoly a chytá okrúhlu silu úderov. Šikovnejší podvodník však pridá k sile šum.
2. **Čiary predikcie.** Skript nakreslil na priehľadné plátno nad hrou dráhu bielej aj zasiahnutej gule (počítané
   rovnakou fyzikou, presné na milimeter). Človek s nimi trafí aj ťažký strih za 5 sekúnd. Úder robí rukou, takže
   kontrola okrúhlej sily ho nezachytí.

Žiadna kontrola v prehliadači nie je nepriestrelná (kód beží u hráča). Ochrana sa preto skladá z vrstiev
a rozhodujúce vyhodnotenie je na serveri.

## Prehľad postupu

```
bežný hráč ──► hrá bez dialógu
                │  server a klient zbierajú skóre podozrenia
                ▼
skóre ≥ prah „čiastočne podozrivý" ──► dialóg: overenie anti-cheatom, povoliť snímanie obrazovky
                │                                   │
          súhlasí                              nesúhlasí ──► len tréning (s čiarami predikcie)
                ▼
rankované partie sa snímajú ──► predkontrola rozdielu ──► vlastný model na čiary ──► admin rozhodne
                │
séria čistých partií ──► skóre klesne pod prah ──► snímanie sa vypne
```

Rankované režimy: liga, výzvy (partie cez internet), hra o najlepšie skóre. Tréning je vždy bez kontroly.

## Krok 2: Skóre podozrenia

- Číslo 0 – 100 pri každom hráčovi (user meta), s časom poslednej zmeny.
- Zdroje (každý pridá body, váhy v nastaveniach):
  - okrúhla sila úderov (krok 1),
  - **presnosť podľa obtiažnosti**: server z logu úderu vypočíta obtiažnosť (uhol strihu, vzdialenosť biela → guľa
    a guľa → jamka, šírka jamky z uhla, blokovanie). Porovná úspešnosť ťažkých úderov s bežným hráčom.
    Rozdiel je štatisticky jasný po 20 – 30 úderoch,
  - telemetria mierenia (krok 3),
  - výsledok skrytej kontroly klienta (krok 3) – zlá alebo chýbajúca odpoveď,
  - nadväzuje na „presnosť hráčov (dlhé údery)“ z 0.11.2.
- Pokles: každá čistá rankovaná partia uberie body, skóre časom klesá.
- Prahy (nastaviteľné): **čiastočne podozrivý** (napr. 30) → dialóg na snímanie; **podozrivý** (napr. 70) →
  doterajší postup z kroku 1 (suspendácia, prípad v administrácii Podvádzanie).

## Krok 3: Skrytá kontrola klienta za behu

Hash súboru `snooker.js` nestačí – podvod z testu súbor vôbec neupravil, kód pridal až za behu.

- **Výzva servera s nonce:** v náhodnom momente partie server pošle náhodné číslo a zoznam kontrol (v odpovedi na bežnú
  požiadavku, nie samostatným volaním). Klient vypočíta rýchly hash (FNV-1a alebo xxHash) z nonce a z výsledkov kontrol
  a pošle ho späť s ďalšou bežnou požiadavkou. Nesedí alebo chýba → skóre podozrenia.
- **Kontroly:**
  - `toString()` kľúčových funkcií (shoot, step, advance, release, update ovládania) – prepísanie alebo obalenie zmení hash,
  - cudzie prvky nad hrou: `MutationObserver` na `document.body` – nový `<canvas>`, `<svg>` alebo prvok s vysokým `z-index`
    nad plátnom hry (čiary z testu by chytil hneď),
  - nečakané globálne premenné na `window`,
  - prepísané `HTMLCanvasElement.prototype.toDataURL`, `navigator.mediaDevices.getDisplayMedia`, `requestAnimationFrame`,
  - úder bez predchádzajúceho ťahu tága z ovládania (myš, prst) – `shoot()` zavolaný priamo.
- **Telemetria mierenia:** krátky záznam smeru tága za posledné 2 – 3 s pred úderom (vzorky po ~50 ms). Človek mieri
  „tam a späť“ s dolaďovaním; s čiarami vidno pomalé skenovanie a zastavenie presne na uhle. Vyhodnotenie na serveri.
- Kontrolný kód minifikovať spolu s hrou, názvy nenápadné; meniť ho pri vydaniach.

## Krok 4: Dialóg súhlasu so snímaním obrazovky

- Zobrazí sa len hráčovi so skóre ≥ prah „čiastočne podozrivý“, pred štartom rankovanej partie.
- Text (návrh): *„Pri tvojom účte je potrebné overenie férovej hry. Počas partie budeme v náhodných chvíľach robiť snímky
  celej obrazovky. Snímky slúžia len na kontrolu podvádzania, uchovávame ich N dní a vidí ich iba správca. Bez súhlasu
  môžeš hrať tréning.“* + Súhlasím / Len tréning.
- Súhlas sa zapíše (čas, verzia textu, user id).
- Technicky: `navigator.mediaDevices.getDisplayMedia({ video: { displaySurface: 'monitor' } })`.
  - Po povolení kontrola `track.getSettings().displaySurface === 'monitor'` – zdieľanie karty alebo okna sa odmietne.
  - Udalosť `ended` (hráč zastavil zdieľanie): liga – prerušenie ako pri výpadku spojenia, hra o skóre – výsledok neplatný.
  - Mobil (iOS Safari, Android Chrome) `getDisplayMedia` nepodporuje → podozrivý hráč na mobile môže hrať len tréning.

## Krok 5: Snímanie a ukladanie

- Snímky v náhodných intervaloch (20 – 90 s) a pred náhodne vybranými údermi; JPEG, kvalita ~0,6, max. šírka 1920 px.
- Ku každej snímke aj **vnútorný obrázok hry** (`renderer.domElement` hneď po vykreslení snímky, alebo
  `preserveDrawingBuffer`) a metadáta: čas, číslo úderu, smer a sila tága, veľkosť a poloha okna.
- Odoslanie cez REST do **neverejného priečinka** (mimo verejného `uploads`, alebo `deny from all`), zoradené podľa partie.
- Automatické mazanie po N dňoch (nastavenie, predvolene 30) cez WP-Cron.

## Krok 6: Predkontrola rozdielu (server)

- Hra vie, čo má byť na obrazovke. Server nájde oblasť okna hry v snímke obrazovky (podľa metadát), zmenší ju na veľkosť
  vnútorného obrázka a porovná pixely v oblasti stola.
- Rozdiel nad prah (tenké čiary, krúžky, text) → snímka „podozrivá“ → pošle sa modelu. Inak sa model nevolá (šetrí výkon).

## Krok 7: Vlastný model na hľadanie čiar

- Model beží u nás (adresa a kľúč v nastaveniach WordPressu, nie v repozitári).
- Vstup: snímka obrazovky, vnútorný obrázok, metadáta. Výstup: `{ verdict: clean|lines|other, confidence, boxes[] }`.
- Volá sa pre snímky z predkontroly a pre všetky snímky partií, ktoré štatistika označí ako podozrivé.
- Výsledok sa pridá k partii a zvýši alebo zníži skóre podozrenia.

## Krok 8: Trénovacie dáta pre model

- Nástroj pre admina v tréningu: pri náhodných rozloženiach a kamerách uloží dvojice snímok **so čiarami / bez čiar**.
- Variácie čiar: farba, hrúbka 1 – 4 px, priehľadnosť 20 – 100 %, plné aj prerušované, len dráha bielej, len cieľová guľa,
  krúžok miesta dotyku, text so silou, bodky namiesto čiar.
- Pridať aj „iné“ prekryvy (okná, OBS, chat), aby model nehlásil všetko ako čiary.

## Krok 9: Administrácia – Kontrola partií

Pod existujúcou stránkou My Snooker → Podvádzanie:

- zoznam všetkých snímaných partií (hráč, režim, dátum, skóre podozrenia, verdikt),
- detail partie: **galéria všetkých snímok** s časovou osou a číslom úderu, vedľa vnútorný obrázok a mapa rozdielu,
  verdikt modelu s vyznačenými oblasťami, log úderov a presnosť podľa obtiažnosti,
- tlačidlá Potvrdiť výsledok / Zamietnuť (podvod) – zamietnutie použije postup z kroku 1,
- admin si môže pozrieť snímky z každej snímanej partie.

## Krok 10: Čiary predikcie v tréningu

- Oficiálna pomôcka len v tréningu, tlačidlo Čiary: ZAP/VYP, nikdy v rankovaných režimoch.
- Kópia stola sa simuluje tým istým kódom fyziky (`src/physics.js`) pri zmene smeru alebo sily (najviac ~10× za sekundu),
  dráhy sa kreslia na prekryv: biela prerušovane, zasiahnutá guľa plnou čiarou vo svojej farbe, bodka kde guľa zastane,
  krúžok miesta dotyku, text „spadne: …“.
- Kým hráč neťahá tágo, počíta sa s predvolenou silou; počas ťahu so skutočnou. Zahrnúť aj falšu a uhol tága.
- Prekryv z tréningu musí kontrola z kroku 3 poznať a v rankovanom režime nesmie existovať.

## GDPR

- Snímky obrazovky sú osobné údaje (môžu zachytiť aj iné okná). Informovať v dialógu a v zásadách ochrany súkromia:
  účel (férová hra), rozsah, doba uchovania, kto má prístup.
- Uložiť záznam súhlasu, umožniť jeho odvolanie (= len tréning) a zmazanie snímok na žiadosť.

## Obmedzenia

- Druhý monitor, druhé zariadenie alebo mobil vedľa počítača snímky nezachytia → preto štatistika presnosti.
- Skúsený programátor vie obísť kontroly v prehliadači → ich úloha je zvýšiť námahu a dať signál do skóre podozrenia.

## Test obídenia ochrany 0.34 – 0.36 (19. 11. 2026, v noci)

Na požiadanie Aveyona robot (plánovač nad naklonovanou fyzikou z konzoly, účet admina) hral hru o skóre
a „maskoval sa“. Každý krok ochrany sa dal obísť niekoľkými riadkami JavaScriptu:

| Ochrana | Ako sa obišla | Návrh opravy |
|---|---|---|
| Okrúhla sila (0.34) | plánovač skúša sily s náhodnými desatinami (`0.2 + rand·0.02 + rand·1e-4`) | ponechať ako lacný filter; rozhodovať podľa sily vypočítanej zo záznamu ťahu (nižšie) |
| Presnosť v okne (0.35) | robot si sám vypočíta okno (rovnaký algoritmus ako `precision.mjs`) a zahrá náhodne v polohe c = 0,3 – 0,8 → priemer ~0,5 ako človek | sledovať aj **mieru netrafenia ťažkých úderov** – robot netrafí nikdy (0 chýb z ~30), človek pri okne < 1° často; rozdelenie c porovnať s hráčom, nielen priemer |
| Úder rukou (0.36) | `game._tm = { k: 'm', n: 12, ov: 0, tp: 0, aj: 40, at: 2500 }` pred `game.shoot()` – údaje sú na objekte hry a dajú sa zapísať | údaje ťahu držať v closure (WeakMap), posielať **surový priebeh ťahu** (vzorky rýchlosti myši) a server z neho prepočíta silu – musí sedieť so silou úderu × tágo × špica |
| Priebeh mierenia (0.36) | plynulé natáčanie `game.dir` s prekmitom a šumom (30 – 55 krokov, 45 – 80 ms), náhodné pauzy 1,5 – 4,5 s | porovnať priebeh mierenia s pohybmi myši (`pointermove` udalosti, `isTrusted`); `dir` bez udalostí myši = program |
| Prepísané funkcie (0.36) | nič sa neprepisuje – simulácia beží cez `S.shoot.call(falošnýObjekt)` a `new Physics(kópia)` | samotná kópia fyziky sa zistiť nedá; dôležité je, aby k hre nebol prístup (pozri nižšie) |
| Cudzie plátno (0.36) | robot čiary nekreslí; čiary sa dajú kresliť aj do iného okna, na druhý monitor, pod 20 % plochy alebo s priehľadnosťou < 0,05 | v poriadku ako signál; snímky obrazovky pri podozrení (kroky 4 – 7) |
| Skrytie z konzoly (0.34) | test bežal pod účtom admina (`window.MySnooker` dostupný); bežný hráč sa k hre dostane cez zarážku (breakpoint) v DevTools v minifikovanom kóde | ponechať; doplniť skrytú kontrolu s nonce (krok 3) |

Záver: kontroly v prehliadači zvyšujú námahu, ale rozhodovať musí server – prepočet sily zo surového ťahu,
miera netrafenia ťažkých úderov a pri podozrení snímky obrazovky.

## Krok 3b: Výzva zo servera pri najmenšom podozrení (plán, 19. 11. 2026)

Rozhodnutie Aveyona: výzva sa pošle **pri najmenšom podozrení**. Cieľ: hra musí dokázať, že beží nezmenený kód
a že úder urobila ruka. Upravená hra odpovie zle, hra s vyhodenými kontrolami neodpovie vôbec.

### Spúšťače (stačí jeden)

- úder z novej hry bez údajov o ruke, prekryv nad hrou, prepísaná funkcia (0.36),
- jedna „neľudská“ sila (okrúhla, nie plný úder ani šmyk),
- presnosť v okne: aspoň 5 ťažkých úderov s priemerom pod 0,3,
- séria ťažkých úderov bez netrafenia (napr. 6 za sebou s oknom pod 0,5°),
- mierenie bez pohybov myši alebo prsta (`dir` sa mení, `pointermove` nie),
- úder do 1,5 s od začiatku mierenia pri ťažkej guli,
- skóre podozrenia > 0 (krok 2), nový účet v prvých 3 hrách,
- **náhodná kontrola** pre každého (napr. 1 zo 10 hier), aby sa spúšťače nedali vyčítať – na rozhodnutie Aveyona.

### Priebeh

1. Server vytvorí výzvu: náhodné číslo (nonce, 128 bitov), náhodný výber kontrol zo zásobníka, lehota.
   Uloží ju u seba (hráč + partia alebo frame), nikdy neodíde do prehliadača zoznam správnych odpovedí.
2. Výzva ide **v bežnej odpovedi** (úder, stav partie, rebríček) pod nenápadným názvom, nie samostatným volaním.
3. Hra vypočíta odpoveď: odtlačok (HMAC s nonce) z výsledkov kontrol a priloží ju k **ďalšej bežnej požiadavke**.
4. Server odpoveď porovná. Lehota: do 2 ďalších požiadaviek alebo 30 s.

### Kontroly v zásobníku

- **Odtlačok kódu:** `toString()` kľúčových funkcií (úder, fyzika `step`/`advance`/`strike`, ovládanie, kontrola,
  odosielanie na server). Očakávané odtlačky vytvorí build (`npm run build` → `includes/fingerprints.php`, len na
  serveri). Kontrola aj toho, že samotné `Function.prototype.toString` nie je prepísané.
- **Surový záznam ťahu** posledného úderu (vzorky polohy myši alebo prsta s časom, len `isTrusted` udalosti).
  Server z neho prepočíta silu tým istým vzorcom ako hra × tágo × špica – musí sedieť so silou úderu (návrh
  testovacieho agenta: zapísané `_tm` už nestačí).
- **Mierenie vs. myš:** počet `pointermove` udalostí počas mierenia a ich súvis so zmenami smeru.
- **Prostredie:** cudzie plátno, neznáme globálne premenné, počet plátien, či je hra prístupná z `window`.
- Údaje kontroly sú v closure (WeakMap), nie na objekte hry.
- Kód výzvy sa pri každej verzii mení (iné poradie, iné názvy, iný výber kontrol).

### Vyhodnotenie

| Výsledok | Následok |
|---|---|
| správna odpoveď | podozrenie mierne klesne, hra pokračuje |
| zlý odtlačok kódu | **podvod hneď**: partia zrušená, hra o skóre 0, suspendácia 7 dní, prípad |
| sila nesedí so záznamom ťahu | podvod hneď (ako vyššie) |
| bez odpovede v lehote | 1. raz nová výzva; 2. raz podvod |
| stará verzia hry | hra sa musí obnoviť (stránka sa načíta znova), až potom rankovaná hra |
| admin | len zápis (výskum), súper vidí upozornenie |
| tréning | len zápis |

### Hra o skóre

Frame beží v prehliadači bez spojenia so serverom. Doplní sa tichý „tep“ (každých ~10 úderov alebo 60 s),
ktorým server môže poslať výzvu; frame bez tepu sa pri odoslaní neprijme do rebríčka.

### Administrácia

Pri prípade: história výziev (kedy, prečo, ktoré kontroly, čo nesedelo), záznam ťahu vs. sila úderu.

### Fázy

1. Infraštruktúra výzvy v partiách: vytvorenie, doručenie, odpoveď, odtlačky z buildu, následky.
2. Surový záznam ťahu + prepočet sily na serveri; mierenie vs. myš.
3. Tep a výzva v hre o skóre.
4. Spúšťače zo štatistiky (netrafenie ťažkých úderov, rýchle údery) a náhodná kontrola.
5. Test s testovacím agentom: vyhodiť kontroly, prepísať `toString`, lokálna úprava súboru, robot cez `_tm`.

### Obmedzenia

Kto rozlúšti kód výzvy, môže počítať správne odpovede z pôvodného kódu a hrať upraveným (alebo robotom,
ktorý funkcie neprepisuje). Výzva to výrazne predraží a každou verziou sa mení. Robota, ktorý hýbe skutočnou
myšou zvonku (program v počítači), zachytí len štatistika a snímky obrazovky (kroky 2, 4 – 7).

## Dokončenie – podrobný plán (20. 11. 2026)

Stav: hotové kroky 1 (okrúhla sila, 0.34), presnosť v okne (0.35), kontrola klienta – ruka, prekryv, prepísané
funkcie, mierenie (0.36), prípady a suspendácia v administrácii Podvádzanie. Test 19. 11. ukázal, že všetko
v prehliadači sa dá obísť pár riadkami. Dokončenie preto presúva rozhodovanie na server v šiestich fázach.
Každá fáza je samostatná verzia, po každej krátky test testovacím agentom (nie dlhé testy, hrá Aveyona).

### Fáza A – spevnenie klienta a surový záznam ťahu (0.40.0)

Cieľ: údaj „úder rukou“ sa nedá len zapísať, server si silu prepočíta sám.

- `src/integrity.js`: údaje ťahu a mierenia v uzávere modulu (WeakMap podľa hry), nie na `game._tm`.
  Hra si ich pri úderi vypýta funkciou, ktorá nie je na žiadnom globálnom objekte.
- `src/controls.js`: pri ťahu tága (myš, prst) zapisovať **surové vzorky** `[čas ms, odtiahnutie]` za posledných
  ~400 ms pred úderom (najviac 40 vzoriek) a len z udalostí `isTrusted`. Ukazovateľ sily (`k: 'b'`) posiela
  priebeh nabíjania.
- Počítadlo `pointermove`/`touchmove` (`isTrusted`) počas mierenia a počet zmien smeru – mierenie bez udalostí = program.
- Server (`includes/anticheat.php`): **prepočet sily** – port funkcie `strokeSpeed()` do PHP (posledných 80 ms,
  dopredný pohyb), × sila tága × druh špice (mäkká 0,97 / stredná 1 / tvrdá 1,03), × 0,35 pri šmyku, orez 0,03 – 1.
  Tágo a špica sa berú zo servera (vlastníctvo tág v `cues.php`), nie od hráča. Rozdiel > 2 % = **podvod hneď**.
- Pri partiách: kontrola pri každom úderi (`/match/shot`). Pri hre o skóre: v zázname frame-u (`vlog`) pri overení.
- Admin = výskum (len zápis), tréning = len zápis.

### Fáza B – výzva zo servera v partiách (0.40.1)

- **Odtlačky kódu z buildu:** `tools/fingerprints.mjs` po `npm run build` načíta hotový `assets/snooker.js` v Node
  (jsdom ako náhrada prehliadača), vypočíta FNV-1a z `toString()` kľúčových funkcií (úder, `Physics.step/advance`,
  ovládanie ťahu, integrity, odosielanie úderu) a zapíše `includes/fingerprints.php` (pole verzia → odtlačky).
  Kontrola aj natívnosti `Function.prototype.toString`.
- **Výzva:** server pri spúšťači (fáza D) alebo náhodne uloží do transientu `{nonce 128 bit, výber kontrol, lehota}`
  a pošle ju v **bežnej odpovedi** `/match/state` alebo `/match/shot` pod nenápadným kľúčom.
- **Odpoveď:** hra spočíta `FNV(nonce + výsledky kontrol)` a priloží ju k ďalšej bežnej požiadavke (hlavička).
  Lehota 2 požiadavky alebo 30 s.
- **Následky** (tabuľka v kroku 3b): zlý odtlačok = podvod hneď; bez odpovede 1. raz nová výzva, 2. raz podvod;
  stará verzia hry = vynútené obnovenie stránky pred rankovanou hrou.
- História výziev pri hráčovi (user meta, posledných 50) – pre administráciu.

### Fáza C – tep a výzva v hre o skóre (0.40.2)

- Nový endpoint `/solo/beat`: každých ~10 úderov alebo 60 s pošle hra priebežný záznam úderov (hash + posledné údery).
  Server vráti token tepu a prípadne výzvu (rovnaký mechanizmus ako fáza B).
- Pri odoslaní výsledku (`/scores`) server overí reťaz tepov: frame bez tepov alebo s chýbajúcou odpoveďou na výzvu
  sa do rebríčka neprijme (hráčovi sa ukáže 0 ako doteraz pri podvode, záznam ostane na kontrolu).
- Prepočet sily zo surového ťahu aj tu (fáza A) pri overení frame-u na overovači.

### Fáza D – skóre podozrenia a spúšťače (0.40.3)

- Skóre 0 – 100 pri hráčovi (`mysn_susp_score` + čas), pokles −5 za čistú rankovanú partiu, −1 za deň.
- Zdroje bodov (váhy v nastaveniach):

  | Signál | Body |
  |---|---|
  | jedna okrúhla sila (nie plný úder ani šmyk) | +10 |
  | úder bez ruky / prekryv / prepísaná funkcia (jednotlivo) | +15 |
  | mierenie bez pohybov myši pri úderi | +10 |
  | séria 6 ťažkých úderov (okno < 0,5°) bez netrafenia | +20 |
  | miera netrafenia ťažkých úderov (okno < 1°) pod 10 % po 20 úderoch | +30 |
  | rozdelenie polohy v okne odlišné od hráča (test K-S, p < 0,01) | +20 |
  | úder do 1,5 s od začiatku mierenia pri ťažkej guli | +5 |
  | nový účet – prvé 3 rankované hry | +10 |

- **Spúšťač výzvy:** skóre > 0, ktorýkoľvek signál vyššie alebo **náhodná kontrola 1 z 10 hier** pre každého.
- Prahy: 30 = „čiastočne podozrivý“ (fáza E – snímky), 70 = podozrivý (prípad + suspendácia ako doteraz).
- Overovač (`server/snkverify`) už počíta okno úderu; doplní sa obtiažnosť a netrafenie.

### Fáza E – snímky obrazovky pri podozrení (0.41.0)

- Dialóg súhlasu pred rankovanou hrou pri skóre ≥ 30 (text z kroku 4, verzia textu + čas súhlasu do user meta).
  Bez súhlasu len tréning. Mobil (bez `getDisplayMedia`) pri skóre ≥ 30 len tréning.
- `getDisplayMedia` – len celá obrazovka (`displaySurface === 'monitor'`), zastavenie zdieľania = partia prerušená
  (liga, výzva) alebo neplatný frame (hra o skóre).
- Snímky v náhodných intervaloch 20 – 90 s a pred náhodnými údermi: JPEG 0,6, šírka max. 1920, + vnútorný obrázok hry
  a metadáta. Upload do **neverejného** priečinka `uploads/mysn-snaps/` (`.htaccess deny`), mazanie po 30 dňoch (WP-Cron).
- Predkontrola na serveri (PHP GD): výrez okna hry, zmenšenie, rozdiel s vnútorným obrázkom v oblasti stola →
  „podozrivá snímka“ (tenké čiary, krúžky). Vlastný model (krok 7) sa zapojí neskôr, keď bude bežať.

### Fáza F – administrácia a označenia (0.41.1)

- My Snooker → Podvádzanie: nový zoznam **Podozriví hráči** (skóre, signály, posledná výzva), detail prípadu s históriou
  výziev, záznamom ťahu vs. silou úderu a galériou snímok (časová os, číslo úderu, mapa rozdielu).
- Tlačidlá: Potvrdiť / Zamietnuť (podvod) / Zrušiť podozrenie / Vynulovať skóre.
- Označenie „kontrolovaný“ pri zápasoch v zoznamoch, prehrávačoch a rebríčku; filter bez podozrivých.

### Priebežne – rotácia kontrol pri každej verzii

- Build (`tools/fingerprints.mjs`) zamieša podľa verzie poradie kontrol, názvy kľúčov vo výzve a výber funkcií
  pre odtlačok; server číta rovnaké nastavenie z `includes/fingerprints.php`. Obídenie jednej verzie neplatí v ďalšej.

### Testy po fázach (testovací agent, krátko)

- A: robot zapíše `_tm` a volá `shoot()` → sila nesedí so záznamom ťahu → podvod.
- B: prepísaná funkcia, prepísaný `toString`, vyhodené kontroly → zlý odtlačok / bez odpovede → podvod.
- C: frame bez tepov → neprijatý.
- D: robot s „ľudským“ šumom → skóre stúpa po 20 – 30 úderoch → výzva → snímky.
- Poctivá hra Aveyonu → skóre zostane 0 (bez falošných poplachov).

### Rozhodnutia pre Aveyonu

1. Náhodná kontrola: 1 z 10 hier (návrh).
2. Snímky obrazovky uchovávať 30 dní (návrh).
3. Mobil pri podozrení len tréning (návrh).
4. Vlastný model na čiary (krok 7) – zatiaľ len predkontrola rozdielu a posúdenie správcom.
