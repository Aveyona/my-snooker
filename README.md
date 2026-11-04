# My Snooker

3D snooker v prehliadači ako doplnok pre WordPress. Beží na adrese [hedlajner.sk/my-snooker](https://hedlajner.sk/my-snooker/) (neskôr snooker.hedlajner.sk). Autor: Aveyona.

Hra je napísaná v JavaScripte nad knižnicou [three.js](https://threejs.org/), stôl má skutočné rozmery snookerového stola a fyzika počíta kĺzanie a kotúľanie gúľ po súkne, falše, nárazy gúľ a odrazy od mantinelov.

## Čo už funguje

- 3D stôl so zaoblenými čeľusťami jamiek, mantinely so šikmým prierezom, drevený rám a lampy nad stolom
- herňa 10 x 7,5 m: drevené obloženie, tmavozelená tapeta, strop s trámami, nástenné svietidlá, podlaha z dosiek, otvorené dvere do chodby, kreslá, barový stolík, obrazy, nástenné hodiny: pri tréningu skutočný miestny čas, inak merajú čas hrania od 11:30 (pri hre o skóre čas framu, po obnovení stránky pokračujú)
- nástenka s nápovedou (F1), stojan s 10 tágami (F2), kriedovanie tága (F3), tabuľa so skóre (F4), pohľad zhora (Tab)
- priehľadná 3D šípka vo farbe trafenej gule ukazuje, kam guľa pôjde
- rádio so stanicami z My Player: retro rádio na komode, mixpult a dva reproduktory pri pravej stene, priestorový zvuk z reproduktorov, mixpult mení hlasitosť, basy, výšky a vyváženie (F9)
- barový stolík s telefónom (Môj účet, F10) a dvoma pohármi s vodou
- konferenčný stolík s novinami a časopisom; v pohľade z kresla (F7) vpravo titulka webu Hedlajner a správy z RSS, C a V ich otvoria na celú obrazovku, koliesko približuje pohľad
- O najlepšie skóre: jeden hráč hrá celý frame podľa pravidiel (fauly sa odpočítajú), rebríček prihlásených hráčov podľa bodov a pri rovnosti kratšieho celkového času; v herni polica s pohármi troch najlepších a tabuľka 4. až 10. miesta (F8), na konci framu slávnostné ukončenie
- fyzika gúľ: kĺzanie, kotúľanie, guľa dopredu, guľa späť, zastavenie a bočná falša
- ovládanie myšou ako tágo (myš sa zachytí v okne, Esc otvorí hlavné menu), prstom a klávesnicou
- detail dotyku gúľ zhora (uhol a plnosť zásahu) a zvýraznenie gule, na ktorú sa mieri
- zvuky nárazov, mantinelov a jamiek
- tréning (prvá položka menu, stôl s červeným súknom v tej istej herni): farby sa vracajú na spoty, biela do ruky, vrátenie úderu, body a série
- hrať môžu len prihlásení používatelia webu, neprihlásený vidí v menu tlačidlo Prihlásiť sa
- Poslať výzvu: partia alebo spoločný tréning cez internet s hráčom, ktorý je práve v hre (pozri nižšie)
- Liga: kancelária hráča (Liga v menu) a nástenka Liga v herni (F12), pozri nižšie

## Liga

- Sezóna trvá rok. Každý registrovaný hráč začína so 147 bodmi, víťaz ligovej partie získa toľko bodov, koľko nahral, a presne toľko stratí porazený (neklesne pod 0).
- Štyri ligy podľa poradia: 1. liga top 10, 2. liga 11. až 30. miesto, 3. liga 31. až 70. miesto, 4. liga ostatní. Výhra nad hráčom z vyššej ligy sa ráta 1,5-krát, pri vzdaní má víťaz najmenej 30 bodov. Kým je hráčov málo, môže hrať každý registrovaný hráč s každým a počet partií za deň nie je obmedzený.
- Klik na Liga v menu otvorí kanceláriu: sedíš za stolom a myšou sa rozhliadaš (koliesko približuje, Ctrl drž: voľná myš, Esc späť do herne). Kancelária má drevenú podlahu a drevené steny a nemá bočný panel.
- Klávesy v kancelárii: F1 nástenka s klávesmi na stene za hráčom, F2 tágá do ligového zápasu (kamera pri stojane, dole karty tág ako v herni, klik zoberie alebo odoberie, pod nimi nastavenia tága), F3 kalendár, F4 tabuľa výsledkov líg (klik na ňu ju tiež priblíži), F6 otvoriť alebo zatvoriť okno za hráčom (výhľad na večerné mesto a štadión), F7 notebook Moja liga, F8 vizitka (registrácia, moje údaje), F9 vyhľadať zápas, F10 mapa hráčov. Druhé stlačenie alebo Esc vráti pohľad za stôl.
- Dvere ŠTADIÓN za hráčom vpravo (alebo F9) spustia vyhľadávanie ligového zápasu: hráč sa zaradí do fronty a hrá s kýmkoľvek, kto je vo fronte. Keď sa súper nájde, obaja prejdú na štadión.
- Registrácia do ligy je červená vizitka na stole, klik ju otvorí (krajina povinná, mesto, prezývka, ruka, obľúbené tágo, o mne). Neregistrovaný hráč ligu nehrá.
- V kancelárii: kalendár sezóny a notebook na stole, výsledková tabuľa štyroch líg na zadnej stene, mapa sveta s hráčmi na ľavej stene (klik na ikonku ukáže hráča), stojan s mojimi tágami na pravej stene. Do zápasu si vyberieš 4 tágá a každé si môžeš upraviť (názov, farby, sila a falše).
- Ligu ukladajú tabuľky `my_snooker_seasons` a `my_snooker_league`, údaje hráča sú v používateľskom poli `mysn_player`.
- Ligové zápasy na štadióne (modrý stôl, traja diváci) prídu v ďalšej verzii.

## Poslať výzvu (partia alebo tréning cez internet)

- V menu je tlačidlo Poslať výzvu. Hráča sa dá vyzvať na partiu alebo pozvať na spoločný tréning, vyzvaný hráč vidí Boli ste vyzvaný a môže prijať alebo odmietnuť.
- Spoločný tréning sa hrá na stole s červeným súknom: bez faulov, kto potopí, pokračuje, inak je na rade druhý, farby sa vracajú na spoty, kým sú na stole červené, tréning skončí pri prázdnom stole.

- V hlavnom menu (Esc) je zoznam hráčov, ktorí sú práve v hre My Snooker. Ostatní používatelia webu sa nezobrazujú.
- Pozvánka príde súperovi do menu a ako správa navrchu, môže ju prijať alebo odmietnuť.
- Hrá sa jeden frame podľa pravidiel snookeru: červená, farba, na konci farby od žltej po čiernu; fauly (minutie, nesprávna prvá guľa, nesprávna guľa v jamke, biela v jamke) dávajú súperovi aspoň 4 body, po spadnutej bielej má súper bielu v ruke v D.
- Súper vidí moje tágo pri mierení, úder sa prehrá u oboch hráčov. Na lište je skóre, kto je na rade, na akú guľu sa hrá a séria, na tabuli (F4) aj zostávajúce body.
- Partia sa ukladá po každom údere do vlastných tabuliek vo WordPresse (`my_snooker_matches`, `my_snooker_moves`, `my_snooker_presence`; rebríček o najlepšie skóre v `my_snooker_scores`). Pri výpadku internetu alebo obnovení stránky sa pokračuje tam, kde sa skončilo.
- Keď je súper preč dlhšie ako 10 minút, partia sa preruší. Dokončiť sa dá neskôr v ponuke Poslať výzvu, Rozohrané partie. V menu partie je aj Prerušiť partiu a Vzdať partiu.
- Prehľad partií je v administrácii (My Snooker, Hra).

## Ovládanie myšou

| Akcia | Ovládanie |
| --- | --- |
| Mierenie | pohyb myši bez tlačidla (so Shift jemnejšie, len pokročilé a majstrovské tágá) |
| Úder | drž ľavé tlačidlo, myš k sebe tágo odtiahne, pohyb dopredu vystrelí |
| Miesto úderu na bielej | drž koliesko a hýb myšou, dvojklik kolieskom = stred |
| Posun pohľadu | drž pravé tlačidlo a hýb myšou |
| Priblíženie | otáčanie kolieska |
| Hlavné menu | Esc |
| Voľná myš (kurzor, klikanie), po pustení späť na tágo | drž Ctrl |
| Nápoveda na nástenke | F1 |
| Stojan s tágami | F2 (výber myšou alebo šípkami) |
| Kriedovanie špičky | F3 (falše 5x silnejšie na 3 údery) |
| Tabuľa so skóre | F4 |
| Dvere herne otvoriť alebo zatvoriť | F6 (so zvukom) |
| Pohľad z kresla so správami (rozhliadanie myšou, koliesko priblíženie, C noviny Hedlajner, V správy z RSS) | F7 |
| Rebríček: polica s pohármi a tabuľka 4. až 10. miesta | F8 |
| Mixpult a rádio (šípky stanica a hlasitosť, P zapnúť alebo vypnúť) | F9 |
| Pohľad z baru (rozhliadanie myšou, koliesko priblíženie; Ctrl drž a klik na telefón alebo M: Môj účet) | F10 |
| Nástenka Liga (štyri ligy, sezóna, moje miesto) | F12 |
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
2. Pravidlá snookeru (hotové v partii cez internet) a 2 hráči na jednom zariadení
3. Hra proti počítaču (3 úrovne)
4. 2 hráči cez internet (prvá verzia hotová)
5. Rebríček, história zápasov a dokumentácia

Podrobný plán je aj priamo v doplnku: administrácia WordPressu, My Snooker, Plán vývoja.

## Štruktúra

- `my-snooker.php`, `includes/`: doplnok pre WordPress (stránka hry, nastavenia, plán vývoja, články do novín, tabuľky partií `db.php`, REST rozhranie `rest.php` pod `my-snooker/v1`)
- `src/`: zdrojové moduly hry (physics, rules, table, room, board, newspaper, cues, balls, cue, camera, controls, audio, ui, training, match, online, main)
- `assets/`: zostavená hra (`snooker.js`) a štýly (`snooker.css`)

## Zostavenie a testy

```
npm install
npm run build   # src/main.js do assets/snooker.js
npm test        # testy fyziky a pravidiel
```

Na web sa nahrávajú len súbory doplnku (`my-snooker.php`, `uninstall.php`, `includes/`, `assets/`), priečinky `src` a `node_modules` nie.

## Licencia

GPL-2.0-or-later, pozri súbor [LICENSE](LICENSE). Copyright © 2026 Aveyona, s. r. o.

Zostavená hra obsahuje knižnicu three.js (licencia MIT, poznámka v `assets/snooker.js.LEGAL.txt`).
