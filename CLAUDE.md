# My Snooker – pokyny pre vývoj

- Komunikácia s majiteľom (Aveyona) vždy po slovensky; dokumentácia, README a texty v hre po slovensky.
- Tento repozitár je **hlavný zdroj** My Snookeru. Doplnok sa upravuje len tu, nie v repozitári Aveyona/hedlajner-my.
- Povinné doplnky My (My Users, My Chat, My Rooms, My AI Writer, My Player) sú v repozitári Aveyona/hedlajner-my; hlavička `Requires Plugins` v `my-snooker.php` ich musí uvádzať.
- Pri každej zmene: zvýšiť verziu (hlavička `Version` aj `MYSN_VERSION`), pridať riadok do `mysn_changelog()` v `includes/roadmap.php`, `npm run build` ak sa menil `src/`, `npm test`.
- Zmena fyziky/pravidiel: skopírovať `src/physics.js`, `rules.js`, `training.js`, `match.js` do `server/snkverify/game/`.
- Po commite sa zmena prenesie do hedlajner-my (`plugins/my-snooker`, `server/snkverify`) a odtiaľ nahrá na hosting nástrojom `tools/upload.py` (pozri README hedlajner-my). Otestované zmeny sa na web nahrávajú hneď, bez čakania na súhlas.
- V repozitári nesmú byť heslá ani kľúče (sú v nastaveniach WordPressu a vo `wp-config.php`).
