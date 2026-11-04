# My Snooker

3D snooker v prehliadači ako doplnok pre WordPress. Beží na adrese [hedlajner.sk/my-snooker](https://hedlajner.sk/my-snooker/) (neskôr snooker.hedlajner.sk). Autor: Aveyona.

Hra je napísaná v JavaScripte nad knižnicou [three.js](https://threejs.org/), stôl má skutočné rozmery snookerového stola a fyzika počíta kĺzanie a kotúľanie gúľ po súkne, falše, nárazy gúľ a odrazy od mantinelov.

## Čo už funguje (1. etapa: tréning)

- 3D stôl so zaoblenými čeľusťami jamiek, mantinely so šikmým prierezom, drevený rám a lampy nad stolom
- herňa 10 x 7,5 m: drevené obloženie, tmavozelená tapeta, strop s trámami, nástenné svietidlá, podlaha z dosiek, otvorené dvere do chodby, kreslá, barový stolík, obrazy
- nástenka s nápovedou (F1), stojan s 10 tágami (F2), kriedovanie tága (F3), tabuľa so skóre (F4), pohľad zhora (Tab)
- priehľadná 3D šípka vo farbe trafenej gule ukazuje, kam guľa pôjde
- fyzika gúľ: kĺzanie, kotúľanie, guľa dopredu, guľa späť, zastavenie a bočná falša
- ovládanie myšou ako tágo (myš sa zachytí v okne, Esc otvorí hlavné menu), prstom a klávesnicou
- detail dotyku gúľ zhora (uhol a plnosť zásahu) a zvýraznenie gule, na ktorú sa mieri
- zvuky nárazov, mantinelov a jamiek
- tréning: farby sa vracajú na spoty, biela do ruky, vrátenie úderu, body a série

## Ovládanie myšou

| Akcia | Ovládanie |
| --- | --- |
| Mierenie | pohyb myši bez tlačidla (so Shift jemnejšie, len pokročilé a majstrovské tágá) |
| Úder | drž ľavé tlačidlo, myš k sebe tágo odtiahne, pohyb dopredu vystrelí |
| Miesto úderu na bielej | drž koliesko a hýb myšou, dvojklik kolieskom = stred |
| Posun pohľadu | drž pravé tlačidlo a hýb myšou |
| Priblíženie | otáčanie kolieska |
| Hlavné menu | Esc |
| Nápoveda na nástenke | F1 |
| Stojan s tágami | F2 (výber myšou alebo šípkami) |
| Kriedovanie špičky | F3 (falše 5x silnejšie na 3 údery) |
| Tabuľa so skóre | F4 |
| Dvere herne otvoriť alebo zatvoriť | F6 (so zvukom) |
| Pohľad na stôl zhora | Tab |

## Tágá

| Tágo | Kategória | Špička | Najväčšia sila | Dĺžka | Jemné mierenie (Shift) |
| --- | --- | --- | --- | --- | --- |
| Klubové (predvolené) | Základné | stredná | 80 % | 145 cm | nie |
| Krátke | Základné | tvrdá | 90 % | 137 cm | nie |
| Kompaktné | Základné | stredná | 75 % | 130 cm | nie |
| Prerážacie | Základné | veľmi tvrdá | 100 % | 145 cm | nie |
| Mäkké | Pokročilé | mäkká | 65 % | 147 cm | áno |
| Dlhé | Pokročilé | stredná | 85 % | 158 cm | áno |
| Ebenové | Pokročilé | stredne tvrdá | 90 % | 149 cm | áno |
| Majstrovské | Majstrovské | stredne tvrdá | 100 % | 150 cm | áno |
| Turnajové | Majstrovské | tvrdá | 100 % | 147 cm | áno |
| Citlivé | Majstrovské | mäkká | 72 % | 160 cm | áno, najjemnejšie |

Dlhšie tágo treba ťahať myšou viac, sila sa tak dávkuje jemnejšie. Tvrdá špička horšie drží falše. Bez kriedy majú falše len pätinu účinku, kriedovanie (F3) vydrží 3 údery.

## Plán vývoja

1. 3D stôl, fyzika a tréning (hotové, dolaďuje sa)
2. Pravidlá snookeru a 2 hráči na jednom zariadení
3. Hra proti počítaču (3 úrovne)
4. 2 hráči cez internet
5. Rebríček, história zápasov a dokumentácia

Podrobný plán je aj priamo v doplnku: administrácia WordPressu, My Snooker, Plán vývoja.

## Štruktúra

- `my-snooker.php`, `includes/`: doplnok pre WordPress (stránka hry, nastavenia, plán vývoja)
- `src/`: zdrojové moduly hry (physics, table, room, board, cues, balls, cue, camera, controls, audio, ui, training, main)
- `assets/`: zostavená hra (`snooker.js`) a štýly (`snooker.css`)

## Zostavenie a testy

```
npm install
npm run build   # src/main.js do assets/snooker.js
npm test        # testy fyziky
```

Na web sa nahrávajú len súbory doplnku (`my-snooker.php`, `uninstall.php`, `includes/`, `assets/`), priečinky `src` a `node_modules` nie.

## Licencia

GPL-2.0-or-later, pozri súbor [LICENSE](LICENSE). Copyright © 2026 Aveyona, s. r. o.

Zostavená hra obsahuje knižnicu three.js (licencia MIT, poznámka v `assets/snooker.js.LEGAL.txt`).
