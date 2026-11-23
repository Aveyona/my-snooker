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
	$sc = function ( $id, $type, $param, $sk, $en, $hints = array(), $ball = '', $setup = '', $in = 'tut-step', $ok = 'tut-ok' ) {
		return array( 'id' => $id, 'type' => $type, 'param' => $param, 'text_sk' => $sk, 'text_en' => $en, 'hints' => $hints, 'snd_in' => $in, 'snd_ok' => 'text' === $type ? '' : $ok, 'ball' => $ball, 'setup' => $setup );
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
				$sc( 's1', 'text', 0, 'Sila úderu závisí od toho, ako rýchlo tágo pohneš dopredu. Na PC drž ľavé tlačidlo, potiahni myš k sebe a potom ňou pohni dopredu. Na mobile vpravo dole ťahaj prstom dole a potom hore. Pomaly = jemne, rýchlo = silno.', 'The power depends on how fast you push the cue forward. On PC hold the left button, pull the mouse towards you and then push it forward. On mobile drag your finger down and then up in the bottom right. Slow = soft, fast = hard.', array( 'm_right', 'pc_v' ), '', 'white -100 0' ),
				$sc( 's2', 'soft', 30, 'Jemný úder: pošli bielu aspoň 30 cm dopredu tak, aby sa zastavila skôr, ako sa dotkne mantinelu.', 'Soft shot: send the cue ball at least 30 cm forward so that it stops before it touches a cushion.', array( 'm_right', 'pc_v' ), '', 'white -100 0' ),
				$sc( 's3', 'cushion', 1, 'Silný úder: udri silnejšie, nech sa biela odrazí od mantinelu.', 'Hard shot: hit harder so the cue ball bounces off a cushion.', array( 'm_right', 'pc_v' ), '', 'white -100 0' ),
				$end( 's4', 'Výborne! Už vieš dávkovať silu. Ďalej: potopenie gule.', 'Well done! You can control the power now. Next: potting a ball.' ),
			),
		),
		array(
			'id'       => 'l4',
			'title_sk' => 'Potopenie gule',
			'title_en' => 'Potting a ball',
			'scenes'   => array(
				$sc( 's1', 'text', 0, 'Guľa ide po zásahu v smere spojnice stredov bielej a gule v okamihu dotyku. Pomôže ti čiara mierenia a šípka na guli, ktorá ukazuje, kam guľa pôjde.', 'After the hit the ball travels along the line joining the centres of the cue ball and the ball at the moment of contact. The aiming line and the arrow on the ball show where it will go.' ),
				$sc( 's2', 'pot', 0, 'Rovný úder: potop červenú do strednej jamky. Mier na stred gule a udri stredne silno.', 'Straight shot: pot the red into the middle pocket. Aim at the centre of the ball and hit with medium power.', array(), 'red', 'white 0 42; red 0 60' ),
				$sc( 's3', 'pot', 0, 'Úder pod uhlom: potop červenú do strednej jamky. Mier tak, aby šípka na guli ukazovala do jamky.', 'Cut shot: pot the red into the middle pocket. Aim so the arrow on the ball points into the pocket.', array(), 'red', 'white -40 20; red 0 60' ),
				$sc( 's4', 'pot', 0, 'Čierna do rohu: potop čiernu do rohovej jamky.', 'Black into the corner: pot the black into the corner pocket.', array(), 'black', 'white 139 -19; black 146 0' ),
				$end( 's5', 'Výborne, gule padajú! Ďalej: pohľady a kamera.', 'Well done, the balls are going in! Next: views and camera.' ),
			),
		),
		array(
			'id'       => 'l5',
			'title_sk' => 'Pohľady a kamera',
			'title_en' => 'Views and camera',
			'scenes'   => array(
				$sc( 's1', 'view', 1, 'Pohľad zhora ukáže celý stôl. Na PC stlač Tab, na mobile ťukni na tlačidlo Pohľad zhora.', 'The top view shows the whole table. On PC press Tab, on mobile tap the Top view button.', array( 'g_top' ), '', 'rack' ),
				$sc( 's2', 'view', 0, 'Vráť sa späť za tágo: na PC znova Tab, na mobile znova tlačidlo.', 'Go back behind the cue: on PC press Tab again, on mobile tap the button again.', array( 'g_top' ) ),
				$sc( 's3', 'view', 2, 'Na PC: medzerník prepne do voľného pohľadu – chodíš klávesmi W A S D a myšou sa rozhliadaš. Medzerníkom sa vrátiš. (Na mobile sa táto úloha splní sama.)', 'On PC: Space switches to free view – walk with W A S D and look around with the mouse. Space takes you back. (On mobile this task completes by itself.)' ),
				$sc( 's4', 'view', 0, 'Vráť sa za tágo (medzerník).', 'Go back behind the cue (Space).' ),
				$end( 's5', 'Na PC ešte: F1 nástenka s nápovedou, F2 stojan s tágami, F4 tabuľa so skóre. Na mobile je všetko v menu ☰.', 'On PC also: F1 help board, F2 cue rack, F4 scoreboard. On mobile everything is in the ☰ menu.' ),
			),
		),
		array(
			'id'       => 'l6',
			'title_sk' => 'Pravidlá: červená a farba',
			'title_en' => 'Rules: red and colour',
			'scenes'   => array(
				$sc( 's1', 'text', 0, 'Snooker: striedavo potápaš červenú (1 bod) a farbu: žltá 2, zelená 3, hnedá 4, modrá 5, ružová 6, čierna 7. Farba sa vráti na svoj spot, červené ostávajú v jamkách.', 'Snooker: you alternate between a red (1 point) and a colour: yellow 2, green 3, brown 4, blue 5, pink 6, black 7. A colour goes back on its spot, reds stay down.' ),
				$sc( 's2', 'pot', 0, 'Najprv červená: potop červenú.', 'Red first: pot the red.', array(), 'red', 'colours; white -20 55; red -10 72' ),
				$sc( 's3', 'pot', 0, 'Teraz farba: potop ružovú do rohu. Po potopení sa vráti na svoj spot.', 'Now a colour: pot the pink into the corner. Afterwards it goes back on its spot.', array(), 'colour', 'colours; white 75 -14' ),
				$end( 's4', 'Keď sú všetky červené dole, farby sa potápajú po poradí od žltej po čiernu. Ďalej: biela v ruke.', 'When all reds are down, the colours are potted in order from yellow to black. Next: ball in hand.' ),
			),
		),
		array(
			'id'       => 'l7',
			'title_sk' => 'Biela v ruke a D',
			'title_en' => 'Ball in hand and the D',
			'scenes'   => array(
				$sc( 's1', 'text', 0, 'Na začiatku framu a keď biela spadne, máš bielu v ruke: položíš ju kamkoľvek do polkruhu D. Na PC ju posúvaš myšou a Enter ju položí, na mobile ju posúvaš prstom a ťukneš Hotovo.', 'At the start of a frame and after the cue ball is potted you have ball in hand: place it anywhere in the semicircle D. On PC move it with the mouse and press Enter, on mobile move it with your finger and tap Done.' ),
				$sc( 's2', 'place', 0, 'Polož bielu do D.', 'Place the cue ball in the D.', array(), '', 'white D; red -30 70' ),
				$sc( 's3', 'pot', 0, 'Potop červenú do strednej jamky. Ak treba, vráť bielu do ruky klávesom B a polož ju lepšie.', 'Pot the red into the middle pocket. If needed take the cue ball in hand with B and place it better.', array(), 'red' ),
				$end( 's4', 'Výborne! Ďalej: falše a krieda.', 'Well done! Next: spin and chalk.' ),
			),
		),
		array(
			'id'       => 'l8',
			'title_sk' => 'Falše a krieda',
			'title_en' => 'Spin and chalk',
			'scenes'   => array(
				$sc( 's1', 'text', 0, 'Miesto úderu (bod na bielej guli) určuje falšu: dole = biela sa vráti, hore = ide ďalej, do strany = mení odraz. Na PC drž koliesko myši a pohni myšou, na mobile posúvaj bod na bielej v kruhu.', 'The contact point (the dot on the cue ball) sets the spin: low = the cue ball comes back, high = it runs on, side = changes the bounce. On PC hold the mouse wheel and move the mouse, on mobile drag the dot on the cue ball.', array( 'g_spin' ) ),
				$sc( 's2', 'chalk', 0, 'Bez kriedy sa pri falši tágo ľahko šmykne. Nakrieduj tágo: na PC F3 a potom 1, na mobile ťukni na Krieda v hornom riadku.', 'Without chalk the cue easily miscues with spin. Chalk the cue: on PC press F3 and then 1, on mobile tap Chalk in the top row.', array( 'g_chalk' ) ),
				$sc( 's3', 'stun', 8, 'Stop: udri bielu stredom a dosť silno do červenej. Biela sa má po zásahu zastaviť (najviac 8 cm od miesta zásahu). Pomalá biela sa stihne roztočiť a ide ďalej.', 'Stun: hit the cue ball in the centre, firmly, into the red. It should stop after the hit (at most 8 cm from the contact point). A slow cue ball starts rolling and runs on.', array( 'g_spin' ), 'red', 'white -40 0; red 0 0' ),
				$sc( 's4', 'draw', 20, 'Spodná falša: posuň bod dole a udri. Biela sa má po zásahu vrátiť aspoň 20 cm späť.', 'Draw: move the dot down and hit. The cue ball should come back at least 20 cm after the hit.', array( 'g_spin' ), 'red', 'white -40 0; red 0 0' ),
				$sc( 's5', 'follow', 20, 'Horná falša: posuň bod hore a udri. Biela má ísť po zásahu aspoň 20 cm ďalej.', 'Follow: move the dot up and hit. The cue ball should run on at least 20 cm after the hit.', array( 'g_spin' ), 'red', 'white -40 0; red 0 0' ),
				$end( 's6', 'Výborne! Falšou riadiš, kde biela skončí – to je základ série. Ďalej: fauly.', 'Well done! With spin you control where the cue ball ends up – the basis of a break. Next: fouls.' ),
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
				$sc( 's1', 'lift', 30, 'Uhol tága: na PC Shift a koliesko myši, na mobile ťahaj ikonku tága. Zdvihni tágo aspoň na 30°.', 'Cue elevation: on PC Shift and the mouse wheel, on mobile drag the cue icon. Raise the cue to at least 30°.', array( 'g_cue' ), '', 'white -40 0; blue -31 0; red 40 0' ),
				$sc( 's2', 'hit', 0, 'Zdvihnuté tágo s bočnou falšou zatočí bielu (swerve, od 45° massé), silný úder zhora ju preskočí. Obíď alebo preskoč modrú a traf červenú.', 'A raised cue with side spin curves the cue ball (swerve, massé from 45°), a hard downward shot makes it jump. Go round or over the blue and hit the red.', array( 'g_cue', 'g_spin' ), 'red', 'white -40 0; blue -31 0; red 40 0' ),
				$sc( 's3', 'break', 10, 'Séria: potápaj bez chyby, kým nemáš aspoň 10 bodov. Červená, farba, červená… a mysli na to, kde biela skončí.', 'Break: keep potting without a miss until you have at least 10 points. Red, colour, red… and think about where the cue ball ends up.', array(), '', 'colours; white D; red 140 60; red 140 -60; red 20 75; red 20 -75; red -60 40; red 100 0' ),
				$end( 's4', 'Gratulujeme, tutoriál je hotový! Teraz skús Hrať o skóre, zahraj si s priateľom alebo sa prihlás do Ligy.', 'Congratulations, the tutorial is complete! Now try Play for score, play a friend or join the League.' ),
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
					'text_sk' => 'Vitaj v tutoriáli! Naučíš sa mieriť, obzerať sa a pracovať s tágom. Ťukni na Ďalej.',
					'text_en' => 'Welcome to the tutorial! You will learn to aim, look around and use the cue. Tap Next.',
					'hints'   => array(),
					'snd_in'  => 'tut-step',
					'snd_ok'  => '',
				),
				array(
					'id'      => 's2',
					'type'    => 'aim',
					'param'   => 20,
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
					'text_sk' => 'Rýchle obzeranie: ťahaj prstom v hornej polovici obrazovky – otáča sa trikrát rýchlejšie (na PC rýchlo pohni myšou).',
					'text_en' => 'Quick look-around: drag your finger in the top half of the screen – it turns three times faster (on PC move the mouse quickly).',
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
					'text_sk' => 'Výborne, prvá lekcia je hotová! Ďalej: presné mierenie.',
					'text_en' => 'Well done, the first lesson is complete! Next: precise aiming.',
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
		return mysn_tut_default();
	}
	// nové predvolené lekcie z novších verzií sa pridajú aj k uloženému tutoriálu (zmazané v administrácii ostanú zmazané)
	$known = (array) get_option( 'mysn_tut_known', array() );
	$have  = wp_list_pluck( $t, 'id' );
	foreach ( mysn_tut_default() as $l ) {
		if ( ! in_array( $l['id'], $have, true ) && ! in_array( $l['id'], $known, true ) ) {
			$t[] = $l;
		}
	}
	return $t;
}

/** Konfigurácia pre hru (len prihlásený): lekcie, scény a postup hráča. */
function mysn_tutorial_cfg( $uid ) {
	if ( ! $uid ) {
		return null;
	}
	$prog = get_user_meta( $uid, 'mysn_tut', true );
	return array(
		'lessons'  => mysn_tutorial(),
		'progress' => is_array( $prog ) ? $prog : array(),
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
				'hints'   => array_values( array_intersect( $hintsK, array_map( 'sanitize_key', (array) ( $S['hints'] ?? array() ) ) ) ),
				'snd_in'  => sanitize_key( $S['snd_in'] ?? '' ),
				'snd_ok'  => sanitize_key( $S['snd_ok'] ?? '' ),
				'ball'    => array_key_exists( $S['ball'] ?? '', mysn_tut_balls() ) ? $S['ball'] : '',
				'setup'   => sanitize_textarea_field( $S['setup'] ?? '' ),
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
		echo '<div class="notice notice-success"><p>Tutoriál je uložený.</p></div>';
	}
	$T      = mysn_tutorial();
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
			<code>white D</code> biela v ruke v D; <code>colours</code> všetky farby na spotoch; <code>reds</code> 15 červených v trojuholníku; <code>rack</code> celé nové rozostavenie (biela v D).<br>
			Gule, ktoré v rozostavení nie sú, idú zo stola. Úlohy so strelou (jemný a silný úder, potopiť, stop, falše, trafiť) sa pri nevydarenom pokuse vrátia do rozostavenia scény a hráč skúša znova.</p>
		</details>
		<form method="post">
			<?php wp_nonce_field( 'mysn_tut' ); ?>
			<?php foreach ( $T as $li => $L ) : ?>
				<?php $pre = 'tut[' . $li . ']'; ?>
				<div style="background:#fff;border:1px solid #c3c4c7;border-radius:6px;padding:12px 16px;margin:16px 0">
					<h2 style="margin-top:0">Lekcia <?php echo (int) $li + 1; ?></h2>
					<input type="hidden" name="<?php echo esc_attr( $pre ); ?>[id]" value="<?php echo esc_attr( $L['id'] ); ?>">
					<p>
						<label>Poradie <input type="number" step="1" name="<?php echo esc_attr( $pre ); ?>[order]" value="<?php echo (int) $li + 1; ?>" style="width:60px"></label>
						<label>Názov SK <input type="text" name="<?php echo esc_attr( $pre ); ?>[title_sk]" value="<?php echo esc_attr( $L['title_sk'] ); ?>" class="regular-text"></label>
						<label>Názov EN <input type="text" name="<?php echo esc_attr( $pre ); ?>[title_en]" value="<?php echo esc_attr( $L['title_en'] ); ?>" class="regular-text"></label>
						<label style="color:#b32d2e"><input type="checkbox" name="<?php echo esc_attr( $pre ); ?>[del]" value="1"> zmazať lekciu</label>
					</p>
					<table class="widefat striped">
						<thead><tr><th style="width:60px">Poradie</th><th style="width:250px">Úloha, hodnota, guľa, rozostavenie</th><th>Text SK / EN</th><th style="width:250px">Šípky</th><th style="width:230px">Zvuky</th><th style="width:60px">Zmazať</th></tr></thead>
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
									<p><label>Rozostavenie<br><textarea name="<?php echo esc_attr( $sp ); ?>[setup]" rows="2" style="width:100%;font-family:monospace;font-size:11px" placeholder="prázdne = stôl ostane"><?php echo esc_textarea( $S['setup'] ?? '' ); ?></textarea></label></p>
								</td>
								<td>
									<textarea name="<?php echo esc_attr( $sp ); ?>[text_sk]" rows="3" class="large-text" placeholder="Text po slovensky"><?php echo esc_textarea( $S['text_sk'] ); ?></textarea>
									<textarea name="<?php echo esc_attr( $sp ); ?>[text_en]" rows="3" class="large-text" placeholder="Text in English"><?php echo esc_textarea( $S['text_en'] ); ?></textarea>
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
