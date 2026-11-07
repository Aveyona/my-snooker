<?php
/**
 * My Snooker: zvuky. Admin v My Snooker → Zvuky priradí ku každému zvuku (slotu) súbory z knižnice médií
 * (viac súborov = varianty, hrá sa náhodne) a doladí hlasitosť, tón, farbu, náhodnosť a citlivosť na silu.
 * Hra si nastavenie prevezme v MYSN_CONFIG.sounds; prázdny slot hrá zabudovaný syntetizovaný zvuk.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/** Sloty zvukov: id => [skupina, názov, čo nahrať]. Poradie = poradie v administrácii. */
function mysn_sound_slots() {
	$T = 'Hrá z miesta na stole (3D). ';
	return array(
		'cue-soft'       => array( 'Stôl', 'Úder tága: jemný', $T . 'Úder tága do bielej pri slabej sile (do tretiny). Hra plynulo prelína jemný, stredný a tvrdý podľa sily. Ťažšie tágo znie hlbšie, mäkká špica tupšie, tvrdá ostrejšie, bez kriedy trochu ostrejšie.', 'Špica jemne do bielej, krátky tichý ťuk. Bez ozveny, 4 až 6 variantov.' ),
		'cue-medium'     => array( 'Stôl', 'Úder tága: stredný', $T . 'Bežný úder tága do bielej (stredná sila). Mení sa ako jemný úder.', 'Bežný úder s plným ťuknutím. 4 až 6 variantov.' ),
		'cue-hard'       => array( 'Stôl', 'Úder tága: tvrdý', $T . 'Silný úder tága (od dvoch tretín sily). Pri rozbití sa hrá zvuk Rozbitie, ak je nahraný.', 'Prudký úder, ostrý a plný. 4 až 6 variantov.' ),
		'cue-miscue'     => array( 'Stôl', 'Šmyk tága (miscue)', $T . 'Keď opotrebovaná špica skĺzne po bielej (nad 90 % opotrebenia pri údere s falšou). Hrá namiesto bežného úderu.', 'Cvak so škrípnutím, slabší a nečistý. 2 až 3 varianty.' ),
		'ball-soft'      => array( 'Stôl', 'Guľa do gule: jemne', $T . 'Náraz dvoch gúľ pri malej rýchlosti. Vrstvy jemne, stredne, tvrdo sa prelínajú podľa rýchlosti nárazu, tvrdší je hlasnejší a jasnejší.', 'Pomalý dotyk dvoch gúľ, tiché cvaknutie. 4 až 6 variantov.' ),
		'ball-medium'    => array( 'Stôl', 'Guľa do gule: stredne', $T . 'Bežný náraz gúľ (stredná rýchlosť).', 'Jasné cvaknutie gúľ. 4 až 6 variantov.' ),
		'ball-hard'      => array( 'Stôl', 'Guľa do gule: tvrdo', $T . 'Prudký náraz gúľ, napríklad pri rozbití alebo silnom údere.', 'Ostré hlasné cvaknutie. 4 až 6 variantov.' ),
		'ball-kiss'      => array( 'Stôl', 'Guľa do gule: tenký dotyk', $T . 'Úplne jemný dotyk dvoch gúľ (skoro stojace gule, kiss). Hrá namiesto vrstiev pri najmenšej rýchlosti.', 'Veľmi tiché ťuknutie. 2 až 3 varianty.' ),
		'cushion-soft'   => array( 'Stôl', 'Mantinel: jemne', $T . 'Guľa narazí do mantinelu pomaly. Vrstvy jemne, stredne, tvrdo sa prelínajú podľa rýchlosti.', 'Tupé ťuknutie do gumy. 3 varianty.' ),
		'cushion-medium' => array( 'Stôl', 'Mantinel: stredne', $T . 'Bežný odraz od mantinelu.', 'Tupý úder do gumy s dreveným dozvukom rámu. 3 varianty.' ),
		'cushion-hard'   => array( 'Stôl', 'Mantinel: tvrdo', $T . 'Prudký odraz od mantinelu.', 'Hlasný tupý úder, rám zadunie. 3 varianty.' ),
		'pot-corner'     => array( 'Stôl', 'Jamka: rohová', 'Hrá z rohovej jamky (3D). Guľa padne do rohovej jamky; rýchlejšia guľa je hlasnejšia.', 'Guľa padne do jamky a dokotúľa sa v sieťke alebo žľabe. 3 varianty.' ),
		'pot-middle'     => array( 'Stôl', 'Jamka: stredná', 'Hrá zo strednej jamky (3D). Bez nahrávky sa použije rohová jamka.', 'Pád do strednej jamky. 3 varianty.' ),
		'pot-jaws'       => array( 'Stôl', 'Jamka: drkotanie v čeľustiach', 'Hrá z jamky tesne pred pádom, keď guľa ide do jamky rýchlo (zadrkoce o čeľuste).', 'Guľa zadrkoce o čeľuste jamky. 3 varianty.' ),
		'roll'           => array( 'Stôl', 'Gúľanie po súkne (slučka)', 'Šuchot gúľajúcich sa gúľ, hlasitosť podľa rýchlosti (pripravujeme, etapa Stôl).', 'Guľa sa gúľa po súkne, 5 až 10 s, plynulo opakovateľné.' ),
		'chalk'          => array( 'Stôl', 'Kriedovanie tága', 'Hrá pri kriedovaní (F3, 1) zo špice tága.', 'Krieda o špicu, krátke škrípanie. 2 až 3 varianty.' ),
		'place'          => array( 'Stôl', 'Položenie gule rukou', 'Guľa položená na súkno: farba na spot, biela do ruky (pripravujeme).', 'Mäkké ťuknutie gule o súkno. 3 varianty.' ),
		'rest'           => array( 'Stôl', 'Položenie nádstavca', 'Hrá, keď vezmeš krížik alebo pavúk (F3, 2 až 4).', 'Kovový alebo drevený nádstavec položený na súkno. 2 varianty.' ),
		'rack-fill'      => array( 'Rozostavenie', 'Gule do trojuholníka', 'Hrá pri novom rozostavení, keď sa objaví trojuholník okolo červených.', 'Červené sa vkladajú do trojuholníka a cvakajú, 1 až 3 s.' ),
		'rack-lift'      => array( 'Rozostavenie', 'Zdvihnutie trojuholníka', 'Hrá, keď sa trojuholník zdvíha zo stola.', 'Trojuholník sa zdvihne, drevo alebo plast jemne ťukne.' ),
		'break'          => array( 'Rozostavenie', 'Rozbitie', 'Hrá namiesto úderu tága pri prvom silnom údere do neporušenej zostavy (nárazy gúľ sa ozvú aj tak).', 'Tvrdý úder bielej do zostavy, celé rozbitie, 1 až 2 s. 2 varianty.' ),
		'amb-herna'      => array( 'Miestnosti', 'Ambient: herňa (slučka)', 'Hrá stále v herni, pri presune do inej miestnosti sa prelína. Stereo, nie je v 3D.', 'Tiché pozadie miestnosti: vzdialené mesto, vetranie, 30 až 90 s, plynulo opakovateľné, stereo.' ),
		'amb-office'     => array( 'Miestnosti', 'Ambient: kancelária (slučka)', 'Hrá v kancelárii ligy.', 'Tiché pozadie, tikanie hodín, 30 až 90 s, stereo.' ),
		'amb-stadium'    => array( 'Miestnosti', 'Ambient: štadión (slučka)', 'Hrá na štadióne.', 'Šum veľkej haly s usadeným publikom, šepot, 60 až 90 s, stereo.' ),
		'door-creak'     => array( 'Miestnosti', 'Dvere: vŕzganie', 'Hrá pri otváraní dverí.', 'Vŕzganie pántov, 1 s.' ),
		'door-shut'      => array( 'Miestnosti', 'Dvere: zatvorenie', 'Hrá pri zatvorení dverí.', 'Buchnutie dverí a cvaknutie zámku.' ),
		'beep'           => array( 'Miestnosti', 'Pípnutie pred ťahom', 'Pípnutie v kresle, keď prídeš na rad (pripravujeme).', 'Krátky príjemný signál, do 0,3 s.' ),
		'ref-foul'       => array( 'Rozhodca', 'Faul', 'Hlas rozhodcu z miesta, kde stojí (3D), pri faule. Ak sú nahraté Faul 4 až 7, hrajú namiesto tohto (pripravujeme).', 'Pokojný zreteľný hlas: Foul (alebo Faul).' ),
		'ref-foul-4'     => array( 'Rozhodca', 'Faul, 4 body', 'Faul za 4 body.', 'Foul, four.' ),
		'ref-foul-5'     => array( 'Rozhodca', 'Faul, 5 bodov', 'Faul za 5 bodov (modrá).', 'Foul, five.' ),
		'ref-foul-6'     => array( 'Rozhodca', 'Faul, 6 bodov', 'Faul za 6 bodov (ružová).', 'Foul, six.' ),
		'ref-foul-7'     => array( 'Rozhodca', 'Faul, 7 bodov', 'Faul za 7 bodov (čierna).', 'Foul, seven.' ),
		'ref-freeball'   => array( 'Rozhodca', 'Voľná guľa', 'Po faule, keď súper dostane voľnú guľu.', 'Free ball.' ),
		'ref-again'      => array( 'Rozhodca', 'Hrá znova', 'Keď hráč po faule pošle súpera hrať znova.', 'Napríklad: Player to play again.' ),
		'ref-time'       => array( 'Rozhodca', 'Čas', 'Keď v lige vyprší čas na úder.', 'Time.' ),
		'ref-frame'      => array( 'Rozhodca', 'Koniec framu', 'Koniec framu (pri zápase na viac framov).', 'Frame.' ),
		'ref-match'      => array( 'Rozhodca', 'Koniec zápasu', 'Koniec zápasu.', 'Frame and match.' ),
		'ref-start'      => array( 'Rozhodca', 'Začiatok zápasu', 'Začiatok zápasu na štadióne.', 'Uvítanie a ohlásenie rozbíjajúceho hráča.' ),
		'ref-steps'      => array( 'Rozhodca', 'Kroky rozhodcu', 'Kroky pri chôdzi rozhodcu okolo stola (3D).', 'Tiché kroky po koberci, slučka 3 až 5 s.' ),
		'ref-gloves'     => array( 'Rozhodca', 'Vyberanie gule z jamky', 'Rozhodca vyberie farbu z jamky a položí na spot.', 'Guľa vybratá zo sieťky a položená na súkno.' ),
		'player-drink'   => array( 'Hráč', 'Napitie sa vody', 'Hráč v kresle sa napije z pohára (kláves, pripravujeme). Hrá z miesta hráča (3D), počujú ho súper aj diváci.', 'Dúšok vody a položenie pohára na stolík.' ),
		'player-burp'    => array( 'Hráč', 'Grgnutie', 'Zábavný zvuk hráča alebo diváka (kláves, pripravujeme). Hrá z jeho miesta (3D), počujú ho všetci.', 'Grgnutie, krátke.' ),
		'player-fart'    => array( 'Hráč', 'Prdnutie', 'Zábavný zvuk hráča alebo diváka (kláves, pripravujeme). Hrá z jeho miesta (3D), počujú ho všetci.', 'Prdnutie, krátke.' ),
		'applause-small' => array( 'Diváci', 'Potlesk: zdvorilý', 'Diváci na štadióne a v herni: po potopenej guli a peknom údere (sami) alebo F2 online diváka. Na štadióne zo všetkých strán.', 'Krátky potlesk menšej skupiny, 2 až 4 s, stereo. 3 varianty.' ),
		'applause-big'   => array( 'Diváci', 'Potlesk: silný', 'Po veľmi peknom údere, dlhej sérii.', 'Silný potlesk, 3 až 5 s, stereo. 3 varianty.' ),
		'ovation'        => array( 'Diváci', 'Ovácie', 'Koniec framu, stovka (century).', 'Ovácie s jasotom, 4 až 8 s, stereo.' ),
		'crowd-ooh'      => array( 'Diváci', 'Jooooj (sklamanie)', 'Guľa tesne minie jamku, chyba (F3 online diváka).', 'Sklamané vzdychnutie publika, 1 až 2 s, stereo. 3 varianty.' ),
		'crowd-wow'      => array( 'Diváci', 'Óóó (údiv)', 'Ťažký potopený úder, šikovné odohranie zo snookra.', 'Obdivné óóó, 1 až 2 s, stereo.' ),
		'laugh'          => array( 'Diváci', 'Smiech', 'Keď vedúci hráč zahrá somarinu (netrafí nič, faul pri ľahkom údere).', 'Krátky smiech publika, stereo.' ),
		'whistle'        => array( 'Diváci', 'Pískanie', 'Uznanie (online divák).', 'Uznanlivé pískanie.' ),
		'cough'          => array( 'Diváci', 'Kašľanie', 'Občas v tichu na štadióne.', 'Jedno zakašľanie, mono stačí.' ),
		'shush'          => array( 'Diváci', 'Pšššt', 'Prosba o ticho (online divák).', 'Pšššt jedného diváka.' ),
	);
}

/** Predvolené doladenie slotu. */
function mysn_sound_defaults() {
	return array(
		'ids'   => array(),
		'vol'   => 100, // hlasitosť %
		'pitch' => 0,   // tón v poltónoch (−12 až +12)
		'color' => 0,   // farba −100 (tmavší, tlmený) až +100 (jasnejší, ostrejší)
		'vary'  => 4,   // náhodná zmena tónu pri každom prehraní, %
		'sens'  => 100, // citlivosť na silu úderu, % (0 = vždy rovnako hlasno a jasne)
		'room'  => 100, // dozvuk miestnosti, %
	);
}

/** Uložené nastavenie všetkých slotov (doplnené predvolenými hodnotami). */
function mysn_sounds() {
	$saved = get_option( 'mysn_sounds', array() );
	$out   = array();
	foreach ( mysn_sound_slots() as $id => $x ) {
		$out[ $id ] = array_merge( mysn_sound_defaults(), isset( $saved[ $id ] ) && is_array( $saved[ $id ] ) ? $saved[ $id ] : array() );
	}
	return $out;
}

/**
 * Konfigurácia pre hru: slot => { urls, vol, pitch, color, vary, sens, room }. Adresy súborov sú len cesta
 * (bez domény), aby sa načítali z tej istej adresy ako hra (subdoména) a WebAudio ich mohlo dekódovať.
 */
function mysn_sounds_config() {
	$cfg = array();
	foreach ( mysn_sounds() as $id => $s ) {
		$urls = array();
		foreach ( (array) $s['ids'] as $aid ) {
			$u = wp_get_attachment_url( (int) $aid );
			if ( $u ) {
				$urls[] = (string) wp_parse_url( $u, PHP_URL_PATH );
			}
		}
		$c = array(
			'urls'  => $urls,
			'vol'   => (int) $s['vol'],
			'pitch' => (float) $s['pitch'],
			'color' => (int) $s['color'],
			'vary'  => (int) $s['vary'],
			'sens'  => (int) $s['sens'],
			'room'  => (int) $s['room'],
		);
		$same = true;
		foreach ( mysn_sound_defaults() as $k => $v ) {
			if ( 'ids' !== $k && (float) $c[ $k ] !== (float) $v ) {
				$same = false;
			}
		}
		if ( ! $urls && $same ) {
			continue; // nič nenastavené: hra použije svoj zvuk s predvolenými hodnotami
		}
		$cfg[ $id ] = $c;
	}
	return (object) $cfg;
}

add_action( 'admin_menu', function () {
	add_submenu_page( 'my-snooker', 'My Snooker: Zvuky', 'Zvuky', 'manage_options', 'my-snooker-sounds', 'mysn_admin_sounds_page' );
}, 20 );

add_action( 'admin_post_mysn_sounds', function () {
	if ( ! current_user_can( 'manage_options' ) ) {
		wp_die( 'Nemáš oprávnenie.' );
	}
	check_admin_referer( 'mysn_sounds' );
	$in  = isset( $_POST['snd'] ) && is_array( $_POST['snd'] ) ? wp_unslash( $_POST['snd'] ) : array(); // phpcs:ignore WordPress.Security.ValidatedSanitizedInput
	$out = array();
	$lim = array(
		'vol'   => array( 0, 300 ),
		'pitch' => array( -12, 12 ),
		'color' => array( -100, 100 ),
		'vary'  => array( 0, 30 ),
		'sens'  => array( 0, 200 ),
		'room'  => array( 0, 200 ),
	);
	foreach ( mysn_sound_slots() as $id => $x ) {
		$r   = isset( $in[ $id ] ) && is_array( $in[ $id ] ) ? $in[ $id ] : array();
		$ids = array_values( array_filter( array_map( 'absint', explode( ',', isset( $r['ids'] ) ? (string) $r['ids'] : '' ) ) ) );
		$s   = array( 'ids' => array_slice( $ids, 0, 20 ) );
		foreach ( $lim as $k => $mm ) {
			$v       = isset( $r[ $k ] ) ? (float) $r[ $k ] : mysn_sound_defaults()[ $k ];
			$s[ $k ] = 'pitch' === $k ? round( max( $mm[0], min( $mm[1], $v ) ), 1 ) : (int) max( $mm[0], min( $mm[1], $v ) );
		}
		$out[ $id ] = $s;
	}
	update_option( 'mysn_sounds', $out, false );
	wp_safe_redirect( admin_url( 'admin.php?page=my-snooker-sounds&saved=1' ) );
	exit;
} );

/** Administrácia: My Snooker → Zvuky. */
function mysn_admin_sounds_page() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	wp_enqueue_media();
	wp_enqueue_script( 'mysn-sound-admin', MYSN_URL . 'assets/sound-admin.js', array( 'jquery' ), mysn_asset_ver( 'sound-admin.js' ), true );
	$slots = mysn_sound_slots();
	$snd   = mysn_sounds();
	$files = array();
	foreach ( $snd as $id => $s ) {
		foreach ( (array) $s['ids'] as $aid ) {
			$u = wp_get_attachment_url( (int) $aid );
			if ( $u ) {
				$files[ (int) $aid ] = array( 'url' => $u, 'name' => basename( (string) get_attached_file( (int) $aid ) ) );
			}
		}
	}
	wp_add_inline_script( 'mysn-sound-admin', 'window.mysnSoundFiles = ' . wp_json_encode( (object) $files ) . ';', 'before' );
	$params = array(
		'vol'   => array( 'Hlasitosť', 0, 300, 1, '%', 'Celková hlasitosť zvuku (100 % = ako je nahraný).' ),
		'pitch' => array( 'Tón', -12, 12, 0.5, ' pt', 'Posun výšky v poltónoch: mínus hlbší, plus vyšší.' ),
		'color' => array( 'Farba', -100, 100, 1, '', 'Mínus tmavší a tlmený, plus jasnejší a ostrejší.' ),
		'vary'  => array( 'Náhodnosť', 0, 30, 1, '%', 'Pri každom prehraní sa tón trochu zmení, aby rovnaké údery nezneli ako stroj.' ),
		'sens'  => array( 'Citlivosť na silu', 0, 200, 5, '%', 'Ako veľmi sila úderu mení hlasitosť a farbu (0 = vždy rovnako).' ),
		'room'  => array( 'Dozvuk', 0, 200, 5, '%', 'Koľko ozveny miestnosti sa pridá (štadión zvučí viac ako herňa).' ),
	);
	?>
	<div class="wrap mysn-snd">
		<?php mysn_admin_head( 'Zvuky hry: ku každému zvuku vyber súbory z knižnice médií (viac súborov = varianty, hrajú sa náhodne) a dolaď ich. Zvuk bez súboru hrá zabudovaný generovaný zvuk. Zmeny sa v hre prejavia po obnovení stránky hry.' ); ?>
		<?php if ( isset( $_GET['saved'] ) ) : // phpcs:ignore WordPress.Security.NonceVerification ?>
			<div class="notice notice-success is-dismissible"><p>Zvuky sú uložené.</p></div>
		<?php endif; ?>
		<style>
			.mysn-snd table{border-collapse:collapse;width:100%;background:#fff;margin:0 0 22px}
			.mysn-snd th,.mysn-snd td{border-bottom:1px solid #e2e4e7;padding:8px;vertical-align:top;text-align:left}
			.mysn-snd td.n{width:340px}.mysn-snd td.n b{display:block}.mysn-snd td.n small{display:block;color:#50575e;margin-top:3px}.mysn-snd td.n small.rec{color:#2271b1}.mysn-snd td.n small.rec b{display:inline}
			.mysn-snd .files{min-width:200px}.mysn-snd .files span{display:inline-block;background:#f0f0f1;border-radius:3px;padding:1px 6px;margin:0 4px 4px 0;font-size:12px}
			.mysn-snd .files span a{color:#b32d2e;text-decoration:none;margin-left:4px}
			.mysn-snd .p{display:grid;grid-template-columns:repeat(3,minmax(150px,1fr));gap:4px 14px}
			.mysn-snd .p label{font-size:12px;color:#50575e}.mysn-snd .p input{width:100%}
			.mysn-snd .p output{float:right;font-weight:600;color:#1d2327}
			.mysn-snd .test{position:sticky;top:32px;z-index:5;background:#fff;border:1px solid #c3c4c7;padding:8px 12px;margin:0 0 14px;display:flex;gap:16px;align-items:center;flex-wrap:wrap}
		</style>
		<div class="card" style="max-width:none;margin:0 0 14px">
			<h2 style="margin-top:6px">Ako dodávať zvuky</h2>
			<ul style="list-style:disc;margin-left:18px">
				<li><b>Formát:</b> WAV (48 kHz, 24 bitov) alebo MP3 (320 kbps), aj OGG. Nahraj do Médií a vyber tlačidlom Vybrať súbory.</li>
				<li><b>Kvalita:</b> profesionálne nahrávky, minimálne stereo. Zvuky stola sa v hre umiestnia do priestoru (3D na slúchadlách, výrazné stereo na reproduktoroch); ambient a diváci hrajú v plnom sterei.</li>
				<li><b>Čisté nahrávky:</b> bez ozveny miestnosti (dozvuk pridá hra podľa miestnosti), bez šumu, krátke ticho na začiatku a konci (do 50 ms).</li>
				<li><b>Varianty:</b> pri každom zvuku 3 až 6 súborov, hra ich strieda náhodne, aby rovnaké údery nezneli ako stroj.</li>
				<li><b>Hlasitosť:</b> podobná úroveň všetkých súborov (okolo −18 LUFS); jemné a tvrdé vrstvy nahraj prirodzene, hra ich prelína podľa sily.</li>
				<li>Zvuky môžeš dopĺňať postupne. Prázdny zvuk hrá generovanú náhradu. Keď budú všetky hotové, spravíme kompiláciu (zjednotenie hlasitosti, orezanie, menšie súbory).</li>
			</ul>
		</div>
		<div class="test">
			<b>Skúška:</b>
			<label>Sila úderu <input type="range" id="mysn-snd-vel" min="0" max="100" value="60"> <output id="mysn-snd-velo">60 %</output></label>
			<label>Miestnosť <select id="mysn-snd-room"><option value="herna">Herňa</option><option value="office">Kancelária</option><option value="stadium">Štadión</option></select></label>
			<span class="description">Tlačidlo Prehrať pri zvuku ho zahrá s aktuálnym doladením (aj neuloženým), bez súboru zahrá generovaný zvuk.</span>
		</div>
		<form method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
			<input type="hidden" name="action" value="mysn_sounds">
			<?php wp_nonce_field( 'mysn_sounds' ); ?>
			<?php
			$group = '';
			foreach ( $slots as $id => $x ) :
				$s = $snd[ $id ];
				if ( $group !== $x[0] ) :
					if ( $group ) {
						echo '</tbody></table>';
					}
					$group = $x[0];
					echo '<h2>' . esc_html( $group ) . '</h2><table><tbody>';
				endif;
				?>
				<tr data-slot="<?php echo esc_attr( $id ); ?>">
					<td class="n"><b><?php echo esc_html( $x[1] ); ?></b><small><?php echo esc_html( $x[2] ); ?></small><small class="rec"><b>Nahrávka:</b> <?php echo esc_html( $x[3] ); ?></small></td>
					<td class="files">
						<input type="hidden" name="snd[<?php echo esc_attr( $id ); ?>][ids]" value="<?php echo esc_attr( implode( ',', array_map( 'intval', (array) $s['ids'] ) ) ); ?>">
						<div class="list"></div>
						<button type="button" class="button button-small pick">Vybrať súbory</button>
						<button type="button" class="button button-small play">Prehrať</button>
					</td>
					<td><div class="p">
						<?php foreach ( $params as $k => $p ) : ?>
							<label title="<?php echo esc_attr( $p[5] ); ?>"><?php echo esc_html( $p[0] ); ?> <output><?php echo esc_html( $s[ $k ] . $p[4] ); ?></output>
								<input type="range" name="snd[<?php echo esc_attr( $id ); ?>][<?php echo esc_attr( $k ); ?>]" data-k="<?php echo esc_attr( $k ); ?>" data-u="<?php echo esc_attr( $p[4] ); ?>" min="<?php echo esc_attr( $p[1] ); ?>" max="<?php echo esc_attr( $p[2] ); ?>" step="<?php echo esc_attr( $p[3] ); ?>" value="<?php echo esc_attr( $s[ $k ] ); ?>">
							</label>
						<?php endforeach; ?>
					</div></td>
				</tr>
			<?php endforeach; ?>
			</tbody></table>
			<p><button class="button button-primary button-large">Uložiť zvuky</button> <span class="description">Na kompiláciu (keď budú všetky zvuky hotové) stačí poslať súbory, zvyšok spravíme spolu.</span></p>
		</form>
	</div>
	<?php
}
