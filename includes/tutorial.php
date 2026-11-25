<?php
/**
 * My Snooker: tutoriál (0.49.0). Lekcie a ich scény sa nastavujú v administrácii (My Snooker → Tutoriál).
 * Hrá sa v herni na zelenom stole. Každá scéna má úlohu (pevné typy), text po slovensky a anglicky, šípky
 * nápovedy pre mobil a PC a zvuky na začiatku a pri splnení. Keď hráč úlohu splní, ide sa na ďalšiu scénu.
 * Spustiť ho môžu len prihlásení; dokončené lekcie sa ukladajú pri účte (user meta mysn_tut).
 *
 * Typy úloh: text (len text a tlačidlo Ďalej), aim (otočiť mierenie o X° doľava aj doprava), look (rýchle
 * obzeranie sa: otočiť spolu o X°, na mobile v hornej polovici), pull (odtiahnuť tágo aspoň na X % ),
 * shoot (urobiť úder aspoň silou X %).
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/** Typy úloh: kľúč => [názov, význam parametra, predvolená hodnota parametra]. */
function mysn_tut_types() {
	return array(
		'text'  => array( 'Len text (tlačidlo Ďalej)', '', 0 ),
		'aim'   => array( 'Otočiť mierenie doľava aj doprava', 'uhol v stupňoch na každú stranu', 20 ),
		'look'  => array( 'Rýchle obzeranie sa (spolu otočiť o uhol)', 'uhol v stupňoch spolu', 120 ),
		'eye'    => array( 'Presné mierenie: držať pravé tlačidlo / oko', 'sekúnd držania spolu', 2 ),
		'eyeaim' => array( 'Presné mierenie: počas držania pravého tlačidla / oka pohnúť pohľadom (krúženie, priblíženie)', 'pohyb kamery v cm spolu', 40 ),
		'pull'  => array( 'Odtiahnuť tágo', 'najmenej % odtiahnutia', 40 ),
		'shoot' => array( 'Urobiť úder', 'najmenšia sila v %', 10 ),
		'soft'   => array( 'Jemný úder: biela sa zastaví bez dotyku mantinelu', 'najmenšia dráha bielej v cm', 30 ),
		'cushion' => array( 'Silný úder: biela trafí mantinel', 'počet odrazov bielej', 1 ),
		'pot'    => array( 'Potopiť guľu (Guľa), biela nespadne', '', 0 ),
		'view'   => array( 'Pohľad: 1 = zhora (Tab), 2 = voľný (medzerník, len PC), 0 = späť za tágo', 'pohľad', 1 ),
		'place'  => array( 'Položiť bielu v ruke do D', '', 0 ),
		'chalk'  => array( 'Nakriedovať tágo', '', 0 ),
		'stun'   => array( 'Stop: biela trafí Guľu a zastaví sa pri mieste zásahu', 'najviac cm od miesta zásahu', 8 ),
		'draw'   => array( 'Spodná falša: biela sa po zásahu Gule vráti späť', 'najmenej cm späť', 20 ),
		'follow' => array( 'Horná falša: biela po zásahu Gule ide ďalej', 'najmenej cm dopredu', 20 ),
		'lift'   => array( 'Zdvihnúť tágo (uhol tága)', 'najmenší uhol v °', 30 ),
		'hit'    => array( 'Trafiť ako prvú Guľu (napríklad zo snookra, cez mantinel alebo falšou)', '', 0 ),
		'break'  => array( 'Séria: potápať bez chyby', 'body série', 10 ),
		'open'   => array( 'Otvoriť predmet (Predmet) – hráč ho otvorí sám', '', 0 ),
		'back'   => array( 'Zavrieť predmet a vrátiť sa (k stolu, v kancelárii za stôl)', '', 0 ),
	);
}

/** Šípky nápovedy: kľúč => názov. */
function mysn_tut_hints() {
	return array(
		'm_top'   => 'Mobil: šípka ↔ v hornej polovici (rýchle obzeranie)',
		'm_bl'    => 'Mobil: šípka ↔ vľavo dole (mierenie)',
		'm_right' => 'Mobil: zvislá šípka ↕ vpravo v smere mierenia (tágo)',
		'm_eye'   => 'Mobil: zvýrazniť tlačidlo oko (presné mierenie)',
		'pc_h'    => 'PC: myš so šípkou ↔ (mierenie)',
		'pc_rmb'  => 'PC: myš so zvýrazneným pravým tlačidlom (presné mierenie)',
		'pc_v'    => 'PC: myš, drž ľavé tlačidlo a ťahaj ↕ (tágo)',
		'g_top'   => 'Mobil: zvýrazniť tlačidlo Pohľad zhora',
		'g_spin'  => 'Zvýrazniť Miesto úderu (bod na bielej, falša)',
		'g_cue'   => 'Zvýrazniť ikonku tága (uhol tága)',
		'g_chalk' => 'Zvýrazniť Kriedu v hornom riadku',
		'g_tools' => 'Mobil: zvýrazniť šípku ▲ dole (spodný panel s citlivosťou)',
	);
}

/** Predmety herne a kancelárie: úloha Otvoriť predmet, pri scéne Len text sa predmet ukáže sám. */
function mysn_tut_objs() {
	return array(
		''           => '—',
		'board'      => 'Herňa: nástenka s nápovedou (F1)',
		'rack'       => 'Herňa: stojan s tágami (F2)',
		'tools'      => 'Herňa: príslušenstvo (F3)',
		'score'      => 'Herňa: tabuľa so skóre (F4)',
		'chair'      => 'Herňa: kreslo s novinami (F7)',
		'trophies'   => 'Herňa: rebríček (F8)',
		'mixer'      => 'Herňa: rádio (F9)',
		'bar'        => 'Herňa: bar s telefónom (F10)',
		'roommap'    => 'Mapa miestností (M)',
		'o_help'     => 'Kancelária: nástenka s klávesmi (F1)',
		'o_cues'     => 'Kancelária: moje tágá do zápasu (F2)',
		'o_calendar' => 'Kancelária: kalendár sezóny (F3)',
		'o_results'  => 'Kancelária: tabuľky líg (F4)',
		'o_notebook' => 'Kancelária: notebook – moje zápasy (F7)',
		'o_card'     => 'Kancelária: červená vizitka – registrácia (F8)',
		'o_map'      => 'Kancelária: mapa hráčov (F10)',
	);
}

/** Guľa pre úlohy pot, stun, draw, follow, hit. */
function mysn_tut_balls() {
	return array(
		''       => 'ľubovoľná',
		'red'    => 'červená',
		'colour' => 'ľubovoľná farba',
		'yellow' => 'žltá',
		'green'  => 'zelená',
		'brown'  => 'hnedá',
		'blue'   => 'modrá',
		'pink'   => 'ružová',
		'black'  => 'čierna',
	);
}

/** Predvolený tutoriál: lekcie 1 až 10. */
function mysn_tut_default() {
	$sc = function ( $id, $type, $param, $sk, $en, $hints = array(), $ball = '', $setup = '', $in = 'tut-step', $ok = 'tut-ok', $obj = '' ) {
		return array( 'id' => $id, 'type' => $type, 'param' => $param, 'text_sk' => $sk, 'text_en' => $en, 'hints' => $hints, 'snd_in' => $in, 'snd_ok' => 'text' === $type ? '' : $ok, 'ball' => $ball, 'setup' => $setup, 'obj' => $obj );
	};
	// prehliadka: otvoriť predmet ($t = open) alebo ho ukázať pri texte ($t = text)
	$ob = function ( $id, $t, $obj, $sk, $en, $setup = '' ) use ( $sc ) {
		return $sc( $id, $t, 0, $sk, $en, array(), '', $setup, 'tut-step', 'tut-ok', $obj );
	};
	$bk = function ( $id, $sk = 'Vráť sa: Esc alebo znova ten istý kláves (mobil: tlačidlo ← Späť k stolu).', $en = 'Go back: Esc or the same key again (mobile: the ← Back to the table button).' ) use ( $sc ) {
		return $sc( $id, 'back', 0, $sk, $en );
	};
	$end = function ( $id, $sk, $en ) use ( $sc ) {
		return $sc( $id, 'text', 0, $sk, $en, array(), '', '', 'tut-done' );
	};
	$more = array(
		array(
			'id'       => 'l3',
			'title_sk' => 'Prvý úder',
			'title_en' => 'The first shot',
			'scenes'   => array(
				$sc( 's1', 'text', 0, 'Sila úderu závisí od toho, ako rýchlo tágo pohneš dopredu. Na PC drž ľavé tlačidlo, potiahni myš k sebe a potom ňou pohni dopredu. Na mobile vpravo dole ťahaj prstom dole a potom hore. Pohneš pomaly – biela pôjde kúsok, pohneš rýchlo – biela pôjde ďaleko.', 'The power depends on how fast you push the cue forward. On PC hold the left button, pull the mouse towards you and then push it forward. On mobile drag your finger down and then up in the bottom right. Move slowly – the cue ball goes a little, move fast – it goes far.', array( 'm_right', 'pc_v' ), '', 'white -100 0' ),
				$sc( 's2', 'soft', 30, 'Pomalý úder: pohni tágom dopredu pomaly. Pošli bielu aspoň 30 cm dopredu tak, aby sa zastavila skôr, ako sa dotkne mantinelu.', 'Slow shot: push the cue forward slowly. Send the cue ball at least 30 cm forward so that it stops before it touches a cushion.', array( 'm_right', 'pc_v' ), '', 'white -100 0' ),
				$sc( 's3', 'cushion', 1, 'Rýchly úder: pohni tágom dopredu rýchlo, nech biela dôjde až k mantinelu a odrazí sa späť. Čím rýchlejší pohyb, tým väčšia sila – pri rozbíjaní a dlhých úderoch sa to hodí.', 'Fast shot: push the cue forward fast so the cue ball reaches a cushion and bounces back. The faster the movement, the more power – useful for the break and long shots.', array( 'm_right', 'pc_v' ), '', 'white -100 0' ),
				$sc( 's4', 'text', 0, 'Citlivosť si nastavíš sám. Na mobile ťukni na šípku ▲ dole v strede: Otáčanie prstom (mierenie a obzeranie sa), Ťahanie tága (ako rýchlo pribúda sila), Oko a Priblíženie. Na PC drž Ctrl: Otáčanie myšou, Ťahanie tága, Pravé tlačidlo a Priblíženie. Keď je sila príliš citlivá alebo tágo ide ťažko, uprav Ťahanie tága.', 'You can set the sensitivity yourself. On mobile tap the ▲ arrow at the bottom centre: Finger rotation (aiming and looking around), Cue stroke (how fast the power builds up), Oko (eye) and Zoom. On PC hold Ctrl: Mouse rotation, Cue stroke, Right button and Zoom. If the power is too sensitive or the cue moves too slowly, adjust Cue stroke.', array( 'g_tools' ) ),
				$end( 's5', 'Výborne! Už vieš dávkovať silu – pomalým aj rýchlym pohybom tága. Ďalej sa naučíš, ako potopiť guľu do jamky.', 'Well done! You can now control the power – with a slow and a fast cue movement. Next you will learn how to pot a ball into a pocket.' ),
			),
		),
		array(
			'id'       => 'l4',
			'title_sk' => 'Potopenie gule',
			'title_en' => 'Potting a ball',
			'scenes'   => array(
				$sc( 's1', 'text', 0, 'Guľa ide po zásahu v smere spojnice stredov bielej a gule v okamihu dotyku. Pomôže ti čiara mierenia a šípka na guli, ktorá ukazuje, kam guľa pôjde.', 'After the hit the ball travels along the line joining the centres of the cue ball and the ball at the moment of contact. The aiming line and the arrow on the ball show where it will go.' ),
				$sc( 's2', 'pot', 0, 'Rovný úder: červená stojí priamo pred strednou jamkou. Mier na stred gule a udri stredne silno – guľa pôjde rovno do jamky.', 'Straight shot: the red is right in front of the middle pocket. Aim at the centre of the ball and hit with medium power – it goes straight in.', array(), 'red', 'white 0 42; red 0 60' ),
				$sc( 's3', 'pot', 0, 'Úder pod uhlom: potop červenú do strednej jamky. Mier tak, aby šípka na guli ukazovala do jamky.', 'Cut shot: pot the red into the middle pocket. Aim so the arrow on the ball points into the pocket.', array(), 'red', 'white -40 20; red 0 60' ),
				$sc( 's4', 'pot', 0, 'Čierna do rohu: potop čiernu do rohovej jamky. Čierna má najvyššiu hodnotu – 7 bodov – a v zápase často rozhoduje frame.', 'Black into the corner: pot the black into the corner pocket. The black is worth the most – 7 points – and often decides the frame in a match.', array(), 'black', 'white 139 -19; black 146 0' ),
				$end( 's5', 'Výborne, gule padajú! Rovné aj šikmé údery sú základ celej hry. Ďalej: pohľady a kamera – ako si prezrieť celý stôl.', 'Well done, the balls are going in! Straight and cut shots are the basis of the whole game. Next: views and camera – how to look over the whole table.' ),
			),
		),
		array(
			'id'       => 'l5',
			'title_sk' => 'Pohľady a kamera',
			'title_en' => 'Views and camera',
			'scenes'   => array(
				$sc( 's1', 'view', 1, 'Pohľad zhora ukáže celý stôl – hodí sa, keď hľadáš, ktorú guľu hrať. Na PC stlač Tab, na mobile ťukni na tlačidlo Pohľad zhora (šípka nad stolom).', 'The top view shows the whole table – useful when you are looking for the ball to play. On PC press Tab, on mobile tap the Top view button (the arrow above the table).', array( 'g_top' ), '', 'rack' ),
				$sc( 's2', 'view', 0, 'Vráť sa späť za tágo: na PC znova Tab, na mobile ťukni na to isté tlačidlo pohľadu zhora vľavo – teraz bliká na žlto. Mieriť sa dá len z pohľadu za tágom.', 'Go back behind the cue: on PC press Tab again, on mobile tap the same top view button on the left – now it blinks yellow. You can only aim from the view behind the cue.', array( 'g_top' ) ),
				$sc( 's3', 'view', 2, 'Voľný pohľad: na PC ťa medzerník prepne do voľného pohľadu – chodíš klávesmi W A S D a myšou sa rozhliadaš, medzerníkom sa vrátiš. Na mobile ťukni na tlačidlo panáčik vľavo – chodíš ovládačom a prstom sa rozhliadaš.', 'Free view: on PC Space switches to free view – walk with W A S D and look around with the mouse, Space takes you back. On mobile tap the little man button on the left – walk with the joystick and look around with your finger.' ),
				$sc( 's4', 'view', 0, 'Vo voľnom pohľade chodíš po herni ako hráč a všetko si môžeš prezrieť zblízka. Na PC: W A S D alebo šípky = chôdza, myš = rozhliadanie, E alebo držané pravé tlačidlo = hore, Q alebo držané ľavé tlačidlo = dole, Shift = rýchlejšie, krátky klik = otvorí predmet v strede obrazovky (rádio, noviny, stojan s tágami). Na mobile: ovládač vľavo dole = chôdza, ťahanie prstom = rozhliadanie, ▲ ▼ = hore a dole, ťuknutie na predmet ho otvorí. Hrá sa však vždy zo stola – vráť sa za tágo: na PC znova medzerník, na mobile znova panáčik.', 'In free view you walk around the club room like a player and can look at everything up close. On PC: W A S D or arrows = walk, mouse = look around, E or holding the right button = up, Q or holding the left button = down, Shift = faster, a short click = opens the object in the middle of the screen (radio, newspaper, cue rack). On mobile: the joystick in the bottom left = walk, dragging your finger = look around, ▲ ▼ = up and down, tapping an object opens it. But you always play from the table – go back behind the cue: on PC Space again, on mobile the little man again.' ),
				$end( 's5', 'Na PC ešte: F1 nástenka s nápovedou, F2 stojan s tágami, F4 tabuľa so skóre. Na mobile je všetko v menu ☰.', 'On PC also: F1 help board, F2 cue rack, F4 scoreboard. On mobile everything is in the ☰ menu.' ),
			),
		),
		array(
			'id'       => 'l6',
			'title_sk' => 'Pravidlá: červená a farba',
			'title_en' => 'Rules: red and colour',
			'scenes'   => array(
				$sc( 's1', 'text', 0, 'Snooker: striedavo potápaš červenú (1 bod) a farbu: žltá 2, zelená 3, hnedá 4, modrá 5, ružová 6, čierna 7. Farba sa vráti na svoj spot, červené ostávajú v jamkách.', 'Snooker: you alternate between a red (1 point) and a colour: yellow 2, green 3, brown 4, blue 5, pink 6, black 7. A colour goes back on its spot, reds stay down.' ),
				$sc( 's2', 'pot', 0, 'Najprv červená: potop červenú do strednej jamky. Za červenú je 1 bod a potom môžeš hrať na ľubovoľnú farbu.', 'Red first: pot the red into the middle pocket. A red is worth 1 point and then you may play any colour.', array(), 'red', 'colours; white -20 55; red -10 72' ),
				$sc( 's3', 'pot', 0, 'Teraz farba: potop ružovú do rohu (6 bodov). Po potopení sa farba vráti na svoj spot, kým sú na stole červené.', 'Now a colour: pot the pink into the corner (6 points). After potting, the colour goes back on its spot while there are reds on the table.', array(), 'colour', 'colours; white 75 -14' ),
				$end( 's4', 'Keď sú všetky červené dole, farby sa potápajú po poradí od žltej po čiernu. Ďalej: biela v ruke.', 'When all reds are down, the colours are potted in order from yellow to black. Next: ball in hand.' ),
			),
		),
		array(
			'id'       => 'l7',
			'title_sk' => 'Biela v ruke a D',
			'title_en' => 'Ball in hand and the D',
			'scenes'   => array(
				$sc( 's1', 'text', 0, 'Na začiatku framu a keď biela spadne, máš bielu v ruke: položíš ju kamkoľvek do polkruhu D. Na PC ju posúvaš myšou a Enter ju položí, na mobile ju posúvaš prstom a ťukneš Hotovo.', 'At the start of a frame and after the cue ball is potted you have ball in hand: place it anywhere in the semicircle D. On PC move it with the mouse and press Enter, on mobile move it with your finger and tap Done.' ),
				$sc( 's2', 'place', 0, 'Polož bielu kamkoľvek do polkruhu D. Na PC ju posúvaš myšou a položíš Enterom, na mobile ju posúvaš prstom a ťukneš Hotovo.', 'Place the cue ball anywhere in the semicircle D. On PC move it with the mouse and place it with Enter, on mobile move it with your finger and tap Done.', array(), '', 'white D; red -30 70' ),
				$sc( 's3', 'pot', 0, 'Potop červenú do strednej jamky. Ak treba, vezmi bielu znova do ruky a polož ju lepšie: na PC klávesom B, na mobile ☰ → Biela do ruky.', 'Pot the red into the middle pocket. If needed take the cue ball in hand again and place it better: on PC with B, on mobile ☰ → Ball in hand.', array(), 'red' ),
				$end( 's4', 'Výborne! Biela v ruke ti dá výhodu – polož ju tam, odkiaľ máš najľahší úder. Ďalej: falše a krieda.', 'Well done! Ball in hand is an advantage – place it where you have the easiest shot. Next: spin and chalk.' ),
			),
		),
		array(
			'id'       => 'l8',
			'title_sk' => 'Falše a krieda',
			'title_en' => 'Spin and chalk',
			'scenes'   => array(
				$sc( 's1', 'text', 0, 'Miesto úderu (bod na bielej guli) určuje falšu: dole = biela sa vráti, hore = ide ďalej, do strany = mení odraz. Na PC drž koliesko myši a pohni myšou, na mobile posúvaj bod na bielej v kruhu.', 'The contact point (the dot on the cue ball) sets the spin: low = the cue ball comes back, high = it runs on, side = changes the bounce. On PC hold the mouse wheel and move the mouse, on mobile drag the dot on the cue ball.', array( 'g_spin' ) ),
				$sc( 's2', 'chalk', 0, 'Bez kriedy sa pri falši tágo ľahko šmykne. Nakrieduj tágo: na PC F3 a potom 1, na mobile ťukni na modrý štvorček vľavo (príslušenstvo) a vyber Krieda.', 'Without chalk the cue easily miscues with spin. Chalk the cue: on PC press F3 and then 1, on mobile tap the blue square on the left (accessories) and choose Chalk.', array( 'g_chalk' ) ),
				$sc( 's3', 'stun', 12, 'Stop: posuň bod na bielej mierne pod stred a udri dosť rýchlo do červenej. Biela sa má po zásahu zastaviť (najviac 12 cm od miesta zásahu). Pri údere stredom alebo pomalom údere sa biela stihne roztočiť a ide ďalej.', 'Stun: move the dot on the cue ball slightly below the centre and hit the red quite fast. The cue ball should stop after the hit (at most 12 cm from the contact point). With a centre hit or a slow shot the cue ball starts rolling and runs on.', array( 'g_spin' ), 'red', 'white -25 0; red 0 0' ),
				$sc( 's4', 'draw', 20, 'Spodná falša (draw): posuň bod na bielej dole a udri stredne silno. Biela sa má po zásahu vrátiť aspoň 20 cm späť – tak si pripravíš ďalší úder.', 'Draw: move the dot on the cue ball down and hit with medium power. The cue ball should come back at least 20 cm after the hit – that is how you set up the next shot.', array( 'g_spin' ), 'red', 'white -40 0; red 0 0' ),
				$sc( 's5', 'follow', 20, 'Horná falša (follow): posuň bod hore a udri. Biela má ísť po zásahu aspoň 20 cm ďalej za guľou.', 'Follow: move the dot up and hit. The cue ball should run on at least 20 cm after the ball.', array( 'g_spin' ), 'red', 'white -40 0; red 0 0' ),
				$end( 's6', 'Výborne! Falšou riadiš, kde biela po údere skončí – to je základ každej série. Ďalej: fauly, snooker a voľná guľa.', 'Well done! With spin you control where the cue ball ends up after the shot – the basis of every break. Next: fouls, snooker and free ball.' ),
			),
		),
		array(
			'id'       => 'l9',
			'title_sk' => 'Fauly, snooker a voľná guľa',
			'title_en' => 'Fouls, snooker and free ball',
			'scenes'   => array(
				$sc( 's1', 'text', 0, 'Faul: biela netrafí žiadnu guľu, ako prvú trafí zlú guľu, spadne biela alebo zlá guľa. Súper dostane aspoň 4 body (viac pri modrej, ružovej a čiernej) a vyberie, kto hrá.', 'Foul: the cue ball misses all balls, hits the wrong ball first, or the cue ball or a wrong ball is potted. The opponent gets at least 4 points (more with blue, pink and black) and chooses who plays.' ),
				$sc( 's2', 'hit', 0, 'Si zasnookrovaný: modrá stojí medzi bielou a červenou. Traf ako prvú červenú – cez mantinel alebo falšou.', 'You are snookered: the blue is between the cue ball and the red. Hit the red first – off a cushion or with spin.', array( 'g_top' ), 'red', 'white -40 0; blue 0 0; red 40 0' ),
				$end( 's3', 'Voľná guľa: ak ťa súper po fauli nechá zasnookrovaného, môžeš si vybrať ľubovoľnú farbu namiesto červenej. Ďalej: uhol tága a séria.', 'Free ball: if the opponent leaves you snookered after a foul, you can nominate any colour instead of the red. Next: cue elevation and a break.' ),
			),
		),
		array(
			'id'       => 'l10',
			'title_sk' => 'Uhol tága a séria',
			'title_en' => 'Cue elevation and a break',
			'scenes'   => array(
				$sc( 's1', 'lift', 30, 'Uhol tága: na PC Shift a koliesko myši, na mobile ťahaj ikonku tága. Zdvihni tágo aspoň na 30°.', 'Cue elevation: on PC Shift and the mouse wheel, on mobile drag the cue icon. Raise the cue to at least 30°.', array( 'g_cue' ), '', 'white -40 0; blue -5 0; red 40 0' ),
				$sc( 's2', 'hit', 0, 'Massé: modrá stojí v ceste k červenej, tak ju obídeš oblúkom. 1) Zdvihni tágo na 55° (na PC Shift a koliesko, na mobile ikonka tága). 2) Bod na bielej posuň úplne vľavo – úder do ľavej časti gule. 3) Zamier asi o 30° vpravo vedľa modrej. 4) Udri stredne rýchlo, asi na 50 % sily. Biela pôjde vpravo okolo modrej a oblúkom sa stočí doľava na červenú. Keď udrieš slabšie, zamier viac vpravo; keď silnejšie, menej.', 'Massé: the blue stands in the way to the red, so you go round it in a curve. 1) Raise the cue to 55° (on PC Shift and the mouse wheel, on mobile the cue icon). 2) Move the dot on the cue ball all the way to the left – hit the left side of the ball. 3) Aim about 30° to the right of the blue. 4) Hit at medium speed, about 50 % power. The cue ball goes right round the blue and curves left onto the red. If you hit softer, aim further right; if harder, less.', array( 'g_cue', 'g_spin' ), 'red', 'white -40 0; blue -5 0; red 40 0' ),
				$sc( 's3', 'break', 3, 'Séria: potop 3 gule po sebe bez chyby. Šesť červených leží blízko jamiek – vyber si ľahkú, zamier podľa šípky na guli a udri stredne silno. Keď sa netrafíš, séria začne znova.', 'Break: pot 3 balls in a row without a miss. Six reds lie close to the pockets – pick an easy one, aim by the arrow on the ball and hit with medium power. If you miss, the break starts again.', array(), '', 'white 40 0; red 0 70; red 0 -70; red 150 70; red 150 -65; red -120 65; red -120 -65' ),
				$end( 's4', 'V skutočnej sérii striedaš červenú a farbu a falšou si pripravuješ bielu na ďalšiu guľu. Základy máš hotové! Ďalej: herňa, výbava a liga.', 'In a real break you alternate red and colour and use spin to set up the cue ball for the next ball. You have the basics! Next: the hall, equipment and the league.' ),
			),
		),
		array(
			'id'       => 'l11',
			'title_sk' => 'Herňa',
			'title_en' => 'The hall',
			'scenes'   => array(
				$sc( 's1', 'text', 0, 'Herňa je tvoja miestnosť so stolom. Predmety v nej otvoríš klávesmi F1 až F10 alebo podržíš Ctrl a klikneš na predmet. Na mobile sú v menu ☰ v časti Herňa.', 'The hall is your room with the table. Open its objects with the keys F1 to F10, or hold Ctrl and click an object. On mobile they are in the ☰ menu under Club room.', array(), '', 'home' ),
				$ob( 's2', 'open', 'board', 'Otvor nástenku s nápovedou: F1 (mobil: ☰ → Herňa → Nápoveda). Na nástenke listuješ šípkami ← → alebo číslami 1 až 6.', 'Open the help board: F1 (mobile: ☰ → Club room → Help). Turn the pages with ← → or the numbers 1 to 6.' ),
				$bk( 's3' ),
				$ob( 's4', 'open', 'score', 'Tabuľa so skóre: F4 (mobil: ☰ → Herňa → Skóre). Ukazuje body, aktuálnu sériu, najlepšiu sériu a štatistiku tvojho tréningu.', 'The scoreboard: F4 (mobile: ☰ → Club room → Score). It shows the points, the current and best break and your practice statistics.' ),
				$bk( 's5' ),
				$ob( 's6', 'open', 'chair', 'Kreslo: F7 (mobil: ☰ → Herňa → Kreslo). Sadneš si a oddýchneš – čítaš noviny Hedlajner (C) a správy z RSS (V). Pri hre o skóre sa čas v kresle zastaví.', 'The armchair: F7 (mobile: ☰ → Club room → Armchair). Sit down and relax – read the Hedlajner newspaper (C) and the RSS news (V). In high-score play the clock stops in the armchair.' ),
				$bk( 's7' ),
				$ob( 's8', 'open', 'mixer', 'Rádio: F9 (mobil: ☰ → Herňa → Rádio). Šípkami ← → meníš stanicu, ↑ ↓ hlasitosť, P zapne alebo vypne. Hrá z reproduktorov v miestnosti.', 'The radio: F9 (mobile: ☰ → Club room → Radio). Change the station with ← →, the volume with ↑ ↓, P turns it on or off. It plays from the speakers in the room.' ),
				$bk( 's8b' ),
				$end( 's9', 'Ďalej v herni: F6 dvere (otvorené = tvoju partiu môžu sledovať iní), M mapa miestností, F8 rebríček a F10 bar s telefónom (T: účet, úspechy a skúsenosti).', 'More in the hall: F6 the door (open = others can watch your game), M the room map, F8 the leaderboard and F10 the bar with the phone (T: account, achievements and XP).' ),
			),
		),
		array(
			'id'       => 'l12',
			'title_sk' => 'Tágo a výbava',
			'title_en' => 'Cue and equipment',
			'scenes'   => array(
				$ob( 's1', 'open', 'rack', 'Stojan s tágami: F2 alebo Ctrl a klik na stojan (mobil: ☰ → Herňa → Tágá). Tu si vyberáš, akým tágom hráš.', 'The cue rack: F2 or Ctrl and click the rack (mobile: ☰ → Club room → Cues). Here you choose which cue you play with.', 'home' ),
				$sc( 's2', 'text', 0, 'V stojane je 10 tág. Šípkami ← → vyberáš, pri každom vidíš silu, dĺžku, falše a či má jemné mierenie so Shift. Z ktoréhokoľvek si spravíš vlastné tágo. Vyberieš si aj kriedu a farbu podsvietenia stojana.', 'The rack holds 10 cues. Choose with ← →; each shows its power, length, spin and whether it has fine aiming with Shift. You can make your own cue from any of them. You also pick the chalk and the colour of the rack lights.' ),
				$bk( 's3' ),
				$ob( 's4', 'open', 'tools', 'Príslušenstvo: F3 (mobil: modrý štvorček vľavo). Otvára sa len pri stole, keď mieriš.', 'Accessories: F3 (mobile: the blue square on the left). It only opens at the table while you are aiming.' ),
				$sc( 's5', 'text', 0, 'V príslušenstve: 1 krieda, 2 krížik, 3 a 4 pavúk na vzdialené gule, 5 nové postavenie, 6 a 7 predĺženie tága (dlhšie tágo je menej presné). Dole vľavo vidíš stav špice – opotrebuje sa a mení sa v stojane.', 'Accessories: 1 chalk, 2 cross rest, 3 and 4 spider for distant balls, 5 new rack, 6 and 7 cue extension (a longer cue is less accurate). Bottom left shows the tip condition – it wears out and is replaced in the rack.' ),
				$bk( 's6', 'Zavri príslušenstvo: Esc alebo F3.', 'Close the accessories: Esc or F3.' ),
				$end( 's7', 'Výborne! Poznáš tágá aj príslušenstvo. Ďalej: kancelária a registrácia do ligy.', 'Well done! You know the cues and accessories. Next: the office and league registration.' ),
			),
		),
		array(
			'id'       => 'l13',
			'title_sk' => 'Kancelária a registrácia do ligy',
			'title_en' => 'The office and league registration',
			'scenes'   => array(
				$sc( 's1', 'text', 0, 'Toto je tvoja kancelária. Prídeš sem tlačidlom Liga v menu, cez mapu miestností (M) alebo dverami z chodby. Tu sa registruješ do ligy a odtiaľto ideš na zápas.', 'This is your office. You get here with League in the menu, the room map (M) or through the door from the corridor. Here you register for the league and go to a match from here.', array(), '', 'office' ),
				$ob( 's2', 'open', 'o_card', 'Na stole leží červená vizitka – registrácia do ligy. Otvor ju: F8 alebo Ctrl a klik (mobil: ☰ → Kancelária → Vizitka). Vyplniť ju môžeš hneď alebo neskôr.', 'A red card lies on the desk – the league registration. Open it: F8 or Ctrl and click (mobile: ☰ → Office → Business card). You can fill it in now or later.' ),
				$bk( 's3', 'Zavri vizitku: Esc.', 'Close the card: Esc.' ),
				$ob( 's4', 'open', 'o_results', 'Tabuľky líg: F4 (mobil: ☰ → Kancelária → Výsledky). Sú 4 ligy, každý začína so 147 bodmi, výhra pridáva, prehra uberá.', 'The league tables: F4 (mobile: ☰ → Office → Results). There are 4 leagues, everyone starts with 147 points, a win adds and a loss takes points away.' ),
				$bk( 's5', 'Späť za stôl: Esc alebo znova F4.', 'Back to the desk: Esc or F4 again.' ),
				$ob( 's6', 'open', 'o_map', 'Mapa hráčov: F10 (mobil: ☰ → Kancelária → Hráči ligy). Vidíš, z ktorých krajín a miest sú hráči ligy.', 'The player map: F10 (mobile: ☰ → Office → League players). See which countries and towns the league players come from.' ),
				$bk( 's7', 'Späť za stôl: Esc alebo znova F10.', 'Back to the desk: Esc or F10 again.' ),
				$ob( 's8', 'open', 'o_cues', 'Moje tágá: F2 (mobil: ☰ → Kancelária → Moje tágá). Vyberieš 4 tágá, ktoré si berieš na ligový zápas, a kriedu.', 'My cues: F2 (mobile: ☰ → Office → My cues). Choose the 4 cues you take to a league match, and the chalk.' ),
				$bk( 's9', 'Zavri tágá: Esc alebo znova F2.', 'Close the cues: Esc or F2 again.' ),
				$ob( 's10', 'text', 'o_calendar', 'Kalendár (F3) ukazuje sezónu – trvá rok a na konci sa vyhlási víťaz. Lampa na stole (F12): zasvietená = si online a dá sa ťa vyzvať, zhasnutá = nie si k dispozícii.', 'The calendar (F3) shows the season – it lasts a year and ends with a champion. The desk lamp (F12): on = you are online and can be challenged, off = you are not available.' ),
				$end( 's11', 'Výborne! Vieš, kde sa registruješ a kde nájdeš tabuľky. Ďalej: ako sa hrá ligový zápas.', 'Well done! You know where to register and where to find the tables. Next: how a league match is played.' ),
			),
		),
		array(
			'id'       => 'l14',
			'title_sk' => 'Hranie ligy',
			'title_en' => 'Playing the league',
			'scenes'   => array(
				$sc( 's1', 'text', 0, 'Zápas začneš dverami kancelárie (F9) – hra ti nájde súpera z ligy. S priateľom hráš cez Hrať s priateľom v menu alebo pozvánkou. Keď sa súper nájde, prijmeš zápas Enterom a ideš na štadión.', 'Start a match through the office door (F9) – the game finds you a league opponent. Play a friend with Play a friend in the menu or an invitation. When an opponent is found, accept with Enter and go to the stadium.', array(), '', 'office' ),
				$sc( 's2', 'text', 0, 'Na štadióne najprv žreb kameň, papier, nožnice (1 až 3) – víťaz si vyberie, kto rozbíja. Potom sa hrá podľa pravidiel: na úder máš časový limit, hodiny vidíš hore.', 'At the stadium there is first a rock, paper, scissors draw (1 to 3) – the winner chooses who breaks. Then you play by the rules: each shot has a time limit, the clock is at the top.' ),
				$sc( 's3', 'text', 0, 'Po súperovom fauli si vyberieš: 1 hrám ja, 2 nech hrá súper. V zápase môžeš písať do chatu partie (ikonka chatu) – chat sa uloží k zápasu. Zápas môžeš prerušiť alebo vzdať v menu.', 'After the opponent\'s foul you choose: 1 I play, 2 the opponent plays. During the match you can write in the match chat (chat icon) – it is saved with the match. You can pause or concede in the menu.' ),
				$ob( 's4', 'text', 'o_results', 'Po zápase sa body prepíšu do tabuľky ligy. Víťaz získa body od porazeného – čím silnejší súper, tým viac.', 'After the match the points go into the league table. The winner takes points from the loser – the stronger the opponent, the more.' ),
				$ob( 's5', 'text', 'o_notebook', 'Na notebooku (F7) sú tvoje zápasy: výsledky, prehratie partie úder po údere a chat partie.', 'The notebook (F7) holds your matches: results, a shot-by-shot replay and the match chat.' ),
				$end( 's6', 'Gratulujeme, poznáš celú hru! Trénuj v herni, skús hru o skóre, založ si lobby s priateľom a ukáž sa v lige. Veľa šťastia!', 'Congratulations, you know the whole game! Practise in the hall, try high-score play, create a lobby with a friend and show yourself in the league. Good luck!' ),
			),
		),
	);
	return array_merge(
		array(
		array(
			'id'       => 'l1',
			'title_sk' => 'Otáčanie a mierenie',
			'title_en' => 'Turning and aiming',
			'scenes'   => array(
				array(
					'id'      => 's1',
					'type'    => 'text',
					'param'   => 0,
					'text_sk' => 'Vitaj v tutoriáli! Krok za krokom sa naučíš mieriť, obzerať sa po stole, pracovať s tágom a nakoniec aj hrať ligu. Každá scéna má úlohu – keď ju splníš, ide sa ďalej. Ťukni na Ďalej.',
					'text_en' => 'Welcome to the tutorial! Step by step you will learn to aim, look around the table, use the cue and finally play the league. Each scene has a task – complete it and you move on. Tap Next.',
					'hints'   => array(),
					'snd_in'  => 'tut-step',
					'snd_ok'  => '',
				),
				array(
					'id'      => 's2',
					'type'    => 'aim',
					'param'   => 8,
					'text_sk' => 'Mierenie: ťahaj prstom vľavo dole doľava a doprava (na PC pohni myšou). Otoč tágo na obe strany.',
					'text_en' => 'Aiming: drag your finger left and right in the bottom left (on PC move the mouse). Turn the cue both ways.',
					'hints'   => array( 'm_bl', 'pc_h' ),
					'snd_in'  => 'tut-step',
					'snd_ok'  => 'tut-ok',
				),
				array(
					'id'      => 's3',
					'type'    => 'look',
					'param'   => 120,
					'text_sk' => 'Rýchle obzeranie okolo seba – rozhliadneš sa po celom stole a nájdeš gule na druhej strane. Na mobile ťahaj prstom v hornej polovici obrazovky: tam sa pohľad otáča trikrát rýchlejšie ako pri mierení vľavo dole (rýchle otáčanie je len na mobile). Na PC jednoducho rýchlo pohni myšou doľava alebo doprava – čím rýchlejšie, tým viac sa otočíš.',
					'text_en' => 'Quick look-around – look over the whole table and find the balls on the far side. On mobile drag your finger in the top half of the screen: there the view turns three times faster than when aiming in the bottom left (fast turning is mobile only). On PC simply move the mouse quickly left or right – the faster you move, the further you turn.',
					'hints'   => array( 'm_top', 'pc_h' ),
					'snd_in'  => 'tut-step',
					'snd_ok'  => 'tut-ok',
				),
				array(
					'id'      => 's4',
					'type'    => 'pull',
					'param'   => 40,
					'text_sk' => 'Tágo: vpravo ťahaj prstom dole v smere mierenia – odtiahneš tágo (na PC drž ľavé tlačidlo a ťahaj myš dole). Zatiaľ nestrieľaj.',
					'text_en' => 'The cue: on the right drag your finger down along the aim – you draw the cue back (on PC hold the left button and drag the mouse down). Do not shoot yet.',
					'hints'   => array( 'm_right', 'pc_v' ),
					'snd_in'  => 'tut-step',
					'snd_ok'  => 'tut-ok',
				),
				array(
					'id'      => 's5',
					'type'    => 'text',
					'param'   => 0,
					'text_sk' => 'Výborne, prvá lekcia je hotová! Vieš mieriť, rýchlo sa obzrieť a odtiahnuť tágo. V ďalšej lekcii sa naučíš presné mierenie s pohľadom priamo na guľu.',
					'text_en' => 'Well done, the first lesson is complete! You can aim, look around quickly and draw the cue back. In the next lesson you will learn precise aiming with a view right onto the ball.',
					'hints'   => array(),
					'snd_in'  => 'tut-done',
					'snd_ok'  => '',
				),
			),
		),
		array(
			'id'       => 'l2',
			'title_sk' => 'Presné mierenie',
			'title_en' => 'Precise aiming',
			'scenes'   => array(
				array(
					'id'      => 's1',
					'type'    => 'text',
					'param'   => 0,
					'text_sk' => 'Na presné mierenie sa pohľad priblíži ku guli, ktorú chceš trafiť. Na PC na to slúži pravé tlačidlo myši, na mobile tlačidlo oko.',
					'text_en' => 'For precise aiming the view zooms in on the ball you want to hit. On PC use the right mouse button, on mobile the eye button.',
					'hints'   => array( 'm_eye', 'pc_rmb' ),
					'snd_in'  => 'tut-step',
					'snd_ok'  => '',
				),
				array(
					'id'      => 's2',
					'type'    => 'eye',
					'param'   => 2,
					'text_sk' => 'Drž pravé tlačidlo myši (na mobile drž prst na oku). Pohľad sa priblíži ku guli. Pusti a pohľad sa vráti za tágo.',
					'text_en' => 'Hold the right mouse button (on mobile hold your finger on the eye). The view zooms in on the ball. Release and the view returns behind the cue.',
					'hints'   => array( 'm_eye', 'pc_rmb' ),
					'snd_in'  => 'tut-step',
					'snd_ok'  => 'tut-ok',
				),
				array(
					'id'      => 's3',
					'type'    => 'eyeaim',
					'param'   => 40,
					'text_sk' => 'Počas držania pohni pohľadom: na PC drž pravé tlačidlo a pohni myšou, na mobile polož prst na oko a ťahaj ním. Doľava a doprava kamera krúži okolo gule, hore sa priblíži, dole oddiali. Tak vidíš, kam guľa pôjde.',
					'text_en' => 'Move the view while holding: on PC hold the right button and move the mouse, on mobile put your finger on the eye and drag it. Left and right circles around the ball, up zooms in, down zooms out. This shows you where the ball will go.',
					'hints'   => array( 'm_eye', 'pc_rmb' ),
					'snd_in'  => 'tut-step',
					'snd_ok'  => 'tut-ok',
				),
				array(
					'id'      => 's4',
					'type'    => 'text',
					'param'   => 0,
					'text_sk' => 'Výborne! Keď pustíš, pohľad sa vráti za tágo. Mierenie potom dolaď: na PC so Shift jemnejšie, na mobile vľavo dole (jemné mierenie v nastaveniach). Pri mierení sa skryjú hlásenia, aby ťa nerušili.',
					'text_en' => 'Well done! When you release, the view returns behind the cue. Then fine-tune the aim: on PC with Shift, on mobile in the bottom left (fine aiming in the settings). Messages hide while you aim so they do not distract you.',
					'hints'   => array(),
					'snd_in'  => 'tut-done',
					'snd_ok'  => '',
				),
			),
		),
		),
		$more
	);
}

/** Uložený tutoriál (alebo predvolený). */
function mysn_tutorial() {
	$t = get_option( 'mysn_tutorial', null );
	if ( ! is_array( $t ) || ! $t ) {
		return mysn_tut_fill_hi( mysn_tut_fill_voice( mysn_tut_default() ) );
	}
	// nové predvolené lekcie z novších verzií sa pridajú aj k uloženému tutoriálu (zmazané v administrácii ostanú zmazané)
	$known = (array) get_option( 'mysn_tut_known', array() );
	$have  = wp_list_pluck( $t, 'id' );
	foreach ( mysn_tut_default() as $l ) {
		if ( ! in_array( $l['id'], $have, true ) && ! in_array( $l['id'], $known, true ) ) {
			$t[] = $l;
		}
	}
	return mysn_tut_fill_hi( mysn_tut_fill_voice( $t, mysn_tut_default() ) ); // 0.54.0 hindské texty, 0.55.0 hlas a dlhšie texty
}

/** Konfigurácia pre hru (len prihlásený): lekcie, scény a postup hráča. */
function mysn_tutorial_cfg( $uid ) {
	if ( ! $uid ) {
		return null;
	}
	$prog = get_user_meta( $uid, 'mysn_tut', true );
	$prog = is_array( $prog ) ? $prog : array();
	$les  = mysn_tut_voice_urls( mysn_tutorial() );
	// 0.56.0: novému hráčovi sú prvé 3 lekcie povinné (hneď po uvítaní), potom si vyberie
	$must = 0;
	if ( function_exists( 'mysn_welcome_is_new' ) && mysn_welcome_is_new( $uid ) ) {
		foreach ( array_slice( $les, 0, 3 ) as $l ) {
			if ( empty( $prog[ $l['id'] ]['done'] ) ) {
				$must = min( 3, count( $les ) );
			}
		}
	}
	return array(
		'lessons'  => $les,
		'progress' => $prog,
		'must'     => $must,
		'idle'     => function_exists( 'mysn_tutv_idle_urls' ) ? mysn_tutv_idle_urls() : array(), // 0.64.3 hlas „stlač Ďalej“
	);
}

/** POST /tutorial/progress {lesson, done}: dokončená lekcia (a posledná scéna) pri účte. */
function mysn_rest_tut_progress( $req ) {
	$uid = get_current_user_id();
	$l   = sanitize_key( (string) $req->get_param( 'lesson' ) );
	if ( '' === $l ) {
		return mysn_err( 'Chýba lekcia.' );
	}
	$p       = get_user_meta( $uid, 'mysn_tut', true );
	$p       = is_array( $p ) ? $p : array();
	$p[ $l ] = array(
		'done'  => $req->get_param( 'done' ) ? 1 : ( ! empty( $p[ $l ]['done'] ) ? 1 : 0 ),
		'scene' => (int) $req->get_param( 'scene' ),
		't'     => time(),
	);
	update_user_meta( $uid, 'mysn_tut', $p );
	return array( 'progress' => $p );
}

add_action(
	'rest_api_init',
	function () {
		register_rest_route(
			'my-snooker/v1',
			'/tutorial/progress',
			array(
				'methods'             => 'POST',
				'callback'            => 'mysn_rest_tut_progress',
				'permission_callback' => 'is_user_logged_in',
			)
		);
	}
);

/* ---------- administrácia ---------- */

add_action(
	'admin_menu',
	function () {
		add_submenu_page( 'my-snooker', 'My Snooker: Tutoriál', 'Tutoriál', 'manage_options', 'my-snooker-tutorial', 'mysn_admin_tutorial' );
	},
	30
);

/** Spracovanie formulára: uloženie, pridanie lekcie a scény, mazanie, poradie, obnova predvoleného. */
function mysn_tut_save_post() {
	$types  = mysn_tut_types();
	$hintsK = array_keys( mysn_tut_hints() );
	$in     = isset( $_POST['tut'] ) && is_array( $_POST['tut'] ) ? wp_unslash( $_POST['tut'] ) : array(); // phpcs:ignore WordPress.Security.ValidatedSanitizedInput
	$out    = array();
	foreach ( $in as $lk => $L ) {
		if ( ! empty( $L['del'] ) ) {
			continue;
		}
		$scenes = array();
		foreach ( (array) ( $L['scenes'] ?? array() ) as $S ) {
			if ( ! empty( $S['del'] ) ) {
				continue;
			}
			$type     = isset( $types[ $S['type'] ?? '' ] ) ? $S['type'] : 'text';
			$scenes[] = array(
				'id'      => sanitize_key( $S['id'] ?? '' ) ? sanitize_key( $S['id'] ) : 's' . wp_rand( 1000, 9999 ),
				'order'   => (float) ( $S['order'] ?? 0 ),
				'type'    => $type,
				'param'   => (float) ( $S['param'] ?? 0 ),
				'text_sk' => sanitize_textarea_field( $S['text_sk'] ?? '' ),
				'text_en' => sanitize_textarea_field( $S['text_en'] ?? '' ),
				'text_hi' => sanitize_textarea_field( $S['text_hi'] ?? '' ),
				'voice_sk' => sanitize_text_field( $S['voice_sk'] ?? '' ),
				'voice_en' => sanitize_text_field( $S['voice_en'] ?? '' ),
				'hints'   => array_values( array_intersect( $hintsK, array_map( 'sanitize_key', (array) ( $S['hints'] ?? array() ) ) ) ),
				'snd_in'  => sanitize_key( $S['snd_in'] ?? '' ),
				'snd_ok'  => sanitize_key( $S['snd_ok'] ?? '' ),
				'ball'    => array_key_exists( $S['ball'] ?? '', mysn_tut_balls() ) ? $S['ball'] : '',
				'setup'   => sanitize_textarea_field( $S['setup'] ?? '' ),
				'obj'     => array_key_exists( $S['obj'] ?? '', mysn_tut_objs() ) ? $S['obj'] : '',
			);
		}
		usort(
			$scenes,
			function ( $a, $b ) {
				return $a['order'] <=> $b['order'];
			}
		);
		foreach ( $scenes as &$s ) {
			unset( $s['order'] );
		}
		unset( $s );
		if ( isset( $_POST['add_scene'] ) && (string) $_POST['add_scene'] === (string) $lk ) { // phpcs:ignore
			$scenes[] = array(
				'id'      => 's' . wp_rand( 1000, 9999 ),
				'type'    => 'text',
				'param'   => 0,
				'text_sk' => '',
				'text_en' => '',
				'hints'   => array(),
				'snd_in'  => 'tut-step',
				'snd_ok'  => 'tut-ok',
			);
		}
		$out[] = array(
			'id'       => sanitize_key( $L['id'] ?? '' ) ? sanitize_key( $L['id'] ) : 'l' . wp_rand( 1000, 9999 ),
			'order'    => (float) ( $L['order'] ?? 0 ),
			'title_sk' => sanitize_text_field( $L['title_sk'] ?? '' ),
			'title_en' => sanitize_text_field( $L['title_en'] ?? '' ),
			'title_hi' => sanitize_text_field( $L['title_hi'] ?? '' ),
			'scenes'   => $scenes,
		);
	}
	usort(
		$out,
		function ( $a, $b ) {
			return $a['order'] <=> $b['order'];
		}
	);
	foreach ( $out as &$l ) {
		unset( $l['order'] );
	}
	unset( $l );
	if ( isset( $_POST['add_lesson'] ) ) { // phpcs:ignore
		$out[] = array(
			'id'       => 'l' . wp_rand( 1000, 9999 ),
			'title_sk' => 'Nová lekcia',
			'title_en' => 'New lesson',
			'scenes'   => array(),
		);
	}
	update_option( 'mysn_tutorial', $out, false );
	update_option( 'mysn_tut_known', wp_list_pluck( mysn_tut_default(), 'id' ), false );
}

function mysn_admin_tutorial() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	if ( 'POST' === ( $_SERVER['REQUEST_METHOD'] ?? '' ) && check_admin_referer( 'mysn_tut' ) ) { // phpcs:ignore
		if ( isset( $_POST['reset'] ) ) { // phpcs:ignore
			delete_option( 'mysn_tutorial' );
		} else {
			mysn_tut_save_post();
		}
		mysn_tutv_save_post();
		echo '<div class="notice notice-success"><p>Tutoriál je uložený.</p></div>';
	}
	$T      = mysn_tut_voice_urls( mysn_tutorial() );
	$types  = mysn_tut_types();
	$hints  = mysn_tut_hints();
	$slots  = function_exists( 'mysn_sound_slots' ) ? mysn_sound_slots() : array();
	$sndSel = function ( $name, $cur ) use ( $slots ) {
		$h = '<select name="' . esc_attr( $name ) . '"><option value="">— bez zvuku —</option>';
		foreach ( $slots as $id => $x ) {
			$h .= '<option value="' . esc_attr( $id ) . '"' . selected( $cur, $id, false ) . '>' . esc_html( $x[0] . ': ' . $x[1] ) . '</option>';
		}
		return $h . '</select>';
	};
	?>
	<div class="wrap">
		<h1>Tutoriál</h1>
		<p>Tutoriál sa spúšťa v hre z hlavného menu (tlačidlo Tutoriál vedľa Pomocníka), len pre prihlásených. Hrá sa v herni na zelenom stole. Scény idú po poradí: keď hráč splní úlohu scény, ukáže sa ďalšia. Text sa zobrazí podľa jazyka hry (bez anglického textu sa ukáže slovenský). Zvuky sa vyberajú zo <a href="<?php echo esc_url( admin_url( 'admin.php?page=my-snooker-sounds' ) ); ?>">Zvukov</a> (skupina Tutoriál má vlastné sloty; bez nahrávky hrá krátky generovaný tón).</p>
		<details style="background:#fff;border:1px solid #c3c4c7;border-radius:6px;padding:8px 16px"><summary><b>Typy úloh a rozostavenie stola</b></summary>
			<table class="widefat striped" style="margin:8px 0"><thead><tr><th>Úloha</th><th>Hodnota</th></tr></thead><tbody>
			<?php foreach ( $types as $k => $t ) : ?>
				<tr><td><?php echo esc_html( $t[0] ); ?></td><td><?php echo esc_html( $t[1] ? $t[1] . ' (predvolene ' . $t[2] . ')' : '–' ); ?></td></tr>
			<?php endforeach; ?>
			</tbody></table>
			<p><b>Rozostavenie</b> sa nastaví na začiatku scény. Prázdne = stôl ostane ako je. Položky oddelené bodkočiarkou alebo novým riadkom:<br>
			<code>white -100 0</code> guľa a poloha v cm od stredu stola (x: −178 baulk až 178 pri čiernej, z: −89 až 89); farby <code>red yellow green brown blue pink black</code>, červených môže byť viac;<br>
			<code>office</code> prejsť do kancelárie, <code>home</code> späť k stolu v herni; <code>white D</code> biela v ruke v D; <code>colours</code> všetky farby na spotoch; <code>reds</code> 15 červených v trojuholníku; <code>rack</code> celé nové rozostavenie (biela v D).<br>
			Gule, ktoré v rozostavení nie sú, idú zo stola (len keď rozostavenie obsahuje nejakú guľu). Scéna Len text s vybraným Predmetom ho sama otvorí (prehliadka). Úlohy so strelou (jemný a silný úder, potopiť, stop, falše, trafiť) sa pri nevydarenom pokuse vrátia do rozostavenia scény a hráč skúša znova.</p>
		</details>
		<form method="post">
			<?php wp_nonce_field( 'mysn_tut' ); ?>
			<?php mysn_tutv_admin_box( $T ); ?>
			<?php foreach ( $T as $li => $L ) : ?>
				<?php $pre = 'tut[' . $li . ']'; ?>
				<div style="background:#fff;border:1px solid #c3c4c7;border-radius:6px;padding:12px 16px;margin:16px 0">
					<h2 style="margin-top:0">Lekcia <?php echo (int) $li + 1; ?></h2>
					<input type="hidden" name="<?php echo esc_attr( $pre ); ?>[id]" value="<?php echo esc_attr( $L['id'] ); ?>">
					<p>
						<label>Poradie <input type="number" step="1" name="<?php echo esc_attr( $pre ); ?>[order]" value="<?php echo (int) $li + 1; ?>" style="width:60px"></label>
						<label>Názov SK <input type="text" name="<?php echo esc_attr( $pre ); ?>[title_sk]" value="<?php echo esc_attr( $L['title_sk'] ); ?>" class="regular-text"></label>
						<label>Názov EN <input type="text" name="<?php echo esc_attr( $pre ); ?>[title_en]" value="<?php echo esc_attr( $L['title_en'] ); ?>" class="regular-text"></label>
						<label>Názov HI <input type="text" name="<?php echo esc_attr( $pre ); ?>[title_hi]" value="<?php echo esc_attr( $L['title_hi'] ?? '' ); ?>" class="regular-text"></label>
						<label style="color:#b32d2e"><input type="checkbox" name="<?php echo esc_attr( $pre ); ?>[del]" value="1"> zmazať lekciu</label>
					</p>
					<table class="widefat striped">
						<thead><tr><th style="width:60px">Poradie</th><th style="width:250px">Úloha, hodnota, guľa, rozostavenie</th><th>Text SK / EN / HI</th><th style="width:250px">Šípky</th><th style="width:230px">Zvuky</th><th style="width:60px">Zmazať</th></tr></thead>
						<tbody>
						<?php foreach ( (array) $L['scenes'] as $si => $S ) : ?>
							<?php $sp = $pre . '[scenes][' . $si . ']'; ?>
							<tr>
								<td><input type="hidden" name="<?php echo esc_attr( $sp ); ?>[id]" value="<?php echo esc_attr( $S['id'] ); ?>"><input type="number" step="1" name="<?php echo esc_attr( $sp ); ?>[order]" value="<?php echo (int) $si + 1; ?>" style="width:56px"></td>
								<td>
									<select name="<?php echo esc_attr( $sp ); ?>[type]">
										<?php foreach ( $types as $k => $t ) : ?>
											<option value="<?php echo esc_attr( $k ); ?>" <?php selected( $S['type'], $k ); ?>><?php echo esc_html( $t[0] ); ?></option>
										<?php endforeach; ?>
									</select>
									<p><label>Hodnota <input type="number" step="1" min="0" name="<?php echo esc_attr( $sp ); ?>[param]" value="<?php echo esc_attr( $S['param'] ); ?>" style="width:70px"></label></p>
									<p><label>Guľa <select name="<?php echo esc_attr( $sp ); ?>[ball]"><?php foreach ( mysn_tut_balls() as $bk => $bn ) : ?><option value="<?php echo esc_attr( $bk ); ?>" <?php selected( $S['ball'] ?? '', $bk ); ?>><?php echo esc_html( $bn ); ?></option><?php endforeach; ?></select></label></p>
									<p><label>Predmet <select name="<?php echo esc_attr( $sp ); ?>[obj]" style="max-width:230px"><?php foreach ( mysn_tut_objs() as $ok => $on ) : ?><option value="<?php echo esc_attr( $ok ); ?>" <?php selected( $S['obj'] ?? '', $ok ); ?>><?php echo esc_html( $on ); ?></option><?php endforeach; ?></select></label></p>
									<p><label>Rozostavenie<br><textarea name="<?php echo esc_attr( $sp ); ?>[setup]" rows="2" style="width:100%;font-family:monospace;font-size:11px" placeholder="prázdne = stôl ostane"><?php echo esc_textarea( $S['setup'] ?? '' ); ?></textarea></label></p>
								</td>
								<td>
									<textarea name="<?php echo esc_attr( $sp ); ?>[text_sk]" rows="3" class="large-text" placeholder="Text po slovensky"><?php echo esc_textarea( $S['text_sk'] ); ?></textarea>
									<textarea name="<?php echo esc_attr( $sp ); ?>[text_en]" rows="3" class="large-text" placeholder="Text in English"><?php echo esc_textarea( $S['text_en'] ); ?></textarea>
									<textarea name="<?php echo esc_attr( $sp ); ?>[text_hi]" rows="3" class="large-text" placeholder="हिन्दी (Hindi)"><?php echo esc_textarea( $S['text_hi'] ?? '' ); ?></textarea>
									<p style="margin:4px 0 0"><b>Hlas</b> (krátka veta, hovorí ju muž)<br><input type="text" name="<?php echo esc_attr( $sp ); ?>[voice_sk]" value="<?php echo esc_attr( $S['voice_sk'] ?? '' ); ?>" class="large-text" placeholder="Hlas SK"><input type="text" name="<?php echo esc_attr( $sp ); ?>[voice_en]" value="<?php echo esc_attr( $S['voice_en'] ?? '' ); ?>" class="large-text" placeholder="Voice EN"><?php if ( ! empty( $S['vo'] ) ) { foreach ( $S['vo'] as $vl => $vu ) { echo ' <a href="' . esc_url( $vu ) . '" target="_blank">▶ ' . esc_html( strtoupper( $vl ) ) . '</a>'; } } ?></p>
								</td>
								<td>
									<?php foreach ( $hints as $hk => $hn ) : ?>
										<label style="display:block"><input type="checkbox" name="<?php echo esc_attr( $sp ); ?>[hints][]" value="<?php echo esc_attr( $hk ); ?>" <?php checked( in_array( $hk, (array) $S['hints'], true ) ); ?>> <?php echo esc_html( $hn ); ?></label>
									<?php endforeach; ?>
								</td>
								<td>
									<p>Na začiatku scény<br><?php echo $sndSel( $sp . '[snd_in]', $S['snd_in'] ); // phpcs:ignore ?></p>
									<p>Pri splnení úlohy<br><?php echo $sndSel( $sp . '[snd_ok]', $S['snd_ok'] ); // phpcs:ignore ?></p>
								</td>
								<td><input type="checkbox" name="<?php echo esc_attr( $sp ); ?>[del]" value="1"></td>
							</tr>
						<?php endforeach; ?>
						</tbody>
					</table>
					<p><button type="submit" class="button" name="add_scene" value="<?php echo (int) $li; ?>">+ Pridať scénu</button></p>
				</div>
			<?php endforeach; ?>
			<p>
				<button type="submit" class="button button-primary">Uložiť tutoriál</button>
				<button type="submit" class="button" name="add_lesson" value="1">+ Pridať lekciu</button>
				<button type="submit" class="button" name="reset" value="1" onclick="return confirm('Obnoviť predvolený tutoriál? Tvoje úpravy sa zmažú.')">Obnoviť predvolený</button>
			</p>
		</form>
	</div>
	<?php
}
