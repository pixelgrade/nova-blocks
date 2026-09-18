<?php
/**
 * Contract for the legacy Logo's per-instance title/tagline policy.
 */

define( 'ABSPATH', __DIR__ );
class WP_Block {}

$GLOBALS['nb_logo_fixture'] = [
	'title'       => 'Site & Title',
	'tagline'     => 'A <tagline>',
	'header_text' => true,
	'logo'        => false,
	'front_page'  => false,
	'home'        => false,
	'preview'     => false,
];

function do_action() {}
function novablocks_maybe_enqueue_block_frontend_scripts() {}
function novablocks_get_attributes_from_json( $path ) {
	return json_decode( file_get_contents( dirname( __DIR__, 2 ) . '/' . $path ), true );
}
function esc_attr( $value ) { return htmlspecialchars( (string) $value, ENT_QUOTES, 'UTF-8' ); }
function esc_html( $value ) { return esc_attr( $value ); }
function esc_url( $value ) { return esc_attr( $value ); }
function sanitize_html_class( $value ) { return preg_replace( '/[^A-Za-z0-9_-]/', '', $value ); }
function has_custom_logo() { return $GLOBALS['nb_logo_fixture']['logo']; }
function get_custom_logo() { return '<a class="custom-logo-link"><img src="logo.png" alt="Logo"></a>'; }
function apply_filters( $name, $value ) { return $value; }
function get_bloginfo( $key, $filter = '' ) { return $GLOBALS['nb_logo_fixture'][ 'name' === $key ? 'title' : 'tagline' ]; }
function bloginfo( $key ) { echo esc_html( get_bloginfo( $key ) ); }
function get_theme_mod( $name, $default = false ) { return $GLOBALS['nb_logo_fixture']['header_text']; }
function home_url( $path ) { return 'https://example.test' . $path; }
function is_front_page() { return $GLOBALS['nb_logo_fixture']['front_page']; }
function is_home() { return $GLOBALS['nb_logo_fixture']['home']; }
function is_customize_preview() { return $GLOBALS['nb_logo_fixture']['preview']; }

require dirname( __DIR__, 2 ) . '/packages/block-library/src/blocks/logo/init.php';

function nb_logo_expect( $condition, $message ) {
	if ( ! $condition ) {
		throw new RuntimeException( $message );
	}
}
function nb_logo_render( $attributes = [] ) {
	return novablocks_render_logo_block( $attributes, '', new WP_Block() );
}
function nb_logo_expect_text( $html, $title, $tagline, $label ) {
	nb_logo_expect( $title === ( false !== strpos( $html, 'class="site-title"' ) ), $label . ': title policy.' );
	nb_logo_expect( $tagline === ( false !== strpos( $html, 'class="site-description"' ) ), $label . ': tagline policy.' );
	nb_logo_expect( ( $title || $tagline ) === ( false !== strpos( $html, 'class="site-info"' ) ), $label . ': no empty text wrapper.' );
}

// SHA-256 snapshots were captured from the unmodified renderer before siteText.
$legacy_visible = nb_logo_render();
$GLOBALS['nb_logo_fixture']['header_text'] = false;
$legacy_hidden = nb_logo_render();
nb_logo_expect( 'ae79b1477b95488b2c4060eaf672500c0c1199c6ab32dcdc80994b09a2b26cdb' === hash( 'sha256', $legacy_visible ), 'Legacy visible output must remain byte-identical.' );
nb_logo_expect( '7a09413c1c2edd0dbf86fd898772c14058211809c19aff220929001eab19c6c5' === hash( 'sha256', $legacy_hidden ), 'Legacy hidden output must remain byte-identical.' );

$schema = novablocks_get_logo_attributes();
nb_logo_expect(
	[ 'type' => 'string', 'enum' => [ 'inherit', 'title-tagline', 'title', 'tagline', 'none' ], 'default' => 'inherit' ] === ( $schema['siteText'] ?? null ),
	'Logo siteText must register the five local choices with an inherit default.'
);

$policies = [
	'title-tagline' => [ true, true ],
	'title'         => [ true, false ],
	'tagline'       => [ false, true ],
	'none'          => [ false, false ],
];
foreach ( [ true, false ] as $global ) {
	$GLOBALS['nb_logo_fixture']['header_text'] = $global;
	$legacy = nb_logo_render();
	nb_logo_expect( $legacy === nb_logo_render( [ 'siteText' => 'inherit' ] ), 'Explicit inherit must preserve legacy HTML byte for byte.' );
	foreach ( [ 'unknown', '', null, 1, [], true ] as $invalid ) {
		nb_logo_expect( $legacy === nb_logo_render( [ 'siteText' => $invalid ] ), 'Invalid siteText must inherit the global policy.' );
	}
	nb_logo_expect_text( $legacy, $global, $global, 'Inherited global ' . (int) $global );
	foreach ( $policies as $mode => $expected ) {
		$before = $GLOBALS['nb_logo_fixture'];
		$rendered = nb_logo_render( [ 'siteText' => $mode ] );
		nb_logo_expect_text( $rendered, $expected[0], $expected[1], $mode . ' with global ' . (int) $global );
		nb_logo_expect( ( 'none' !== $mode ) === ( false !== strpos( $rendered, 'nb-logo--site-text-explicit' ) ), 'Only explicitly visible text modes carry the theme-skin override class.' );
		nb_logo_expect( $before === $GLOBALS['nb_logo_fixture'], 'Local rendering must not mutate site settings.' );
	}
}

// Independent instances use local choices while the global switch stays off.
$GLOBALS['nb_logo_fixture']['header_text'] = false;
nb_logo_expect_text( nb_logo_render( [ 'siteText' => 'title' ] ), true, false, 'First instance' );
nb_logo_expect_text( nb_logo_render( [ 'siteText' => 'tagline' ] ), false, true, 'Second instance' );
nb_logo_expect_text( nb_logo_render(), false, false, 'Third inherited instance' );

foreach ( [ 'front_page', 'home' ] as $context ) {
	$GLOBALS['nb_logo_fixture'][$context] = true;
	nb_logo_expect( false !== strpos( nb_logo_render( [ 'siteText' => 'title' ] ), '<h1 class="site-title">' ), 'Home/front page must keep the semantic title heading.' );
	$GLOBALS['nb_logo_fixture'][$context] = false;
}
nb_logo_expect( false !== strpos( nb_logo_render( [ 'siteText' => 'title' ] ), '<p class="site-title">' ), 'An ordinary page must keep the title paragraph.' );
nb_logo_expect( false !== strpos( nb_logo_render( [ 'siteText' => 'title' ] ), 'Site &amp; Title' ), 'Title output remains escaped.' );
nb_logo_expect( false !== strpos( nb_logo_render( [ 'siteText' => 'tagline' ] ), 'A &lt;tagline&gt;' ), 'Tagline output remains escaped.' );

$GLOBALS['nb_logo_fixture']['title'] = '';
nb_logo_expect_text( nb_logo_render( [ 'siteText' => 'title' ] ), false, false, 'Missing title' );
nb_logo_expect_text( nb_logo_render( [ 'siteText' => 'title-tagline' ] ), false, true, 'Missing title with both selected' );
$GLOBALS['nb_logo_fixture']['tagline'] = '';
nb_logo_expect_text( nb_logo_render( [ 'siteText' => 'title-tagline' ] ), false, false, 'Both strings missing outside Customizer' );
$GLOBALS['nb_logo_fixture']['preview'] = true;
nb_logo_expect_text( nb_logo_render( [ 'siteText' => 'tagline' ] ), false, true, 'Customizer keeps a selected empty tagline placeholder' );
nb_logo_expect_text( nb_logo_render( [ 'siteText' => 'title-tagline' ] ), false, true, 'Customizer both mode keeps tagline placeholder' );
nb_logo_expect_text( nb_logo_render( [ 'siteText' => 'title' ] ), false, false, 'Customizer title-only never adds tagline' );
nb_logo_expect_text( nb_logo_render( [ 'siteText' => 'none' ] ), false, false, 'Customizer explicit none keeps all text hidden' );
nb_logo_expect_text( nb_logo_render(), false, false, 'Customizer inherit preserves the global hidden policy' );

$GLOBALS['nb_logo_fixture']['title'] = 'Site & Title';
$GLOBALS['nb_logo_fixture']['header_text'] = true;
nb_logo_expect_text( nb_logo_render(), true, true, 'Customizer inherit with title keeps the existing empty tagline placeholder' );
$GLOBALS['nb_logo_fixture']['title'] = '';
nb_logo_expect_text( nb_logo_render(), false, false, 'Customizer inherit keeps existing no-string behavior' );

$GLOBALS['nb_logo_fixture']['logo'] = true;
$with_logo = nb_logo_render( [ 'siteText' => 'none', 'className' => 'custom-logo-class second' ] );
nb_logo_expect( false !== strpos( $with_logo, '<div class="c-logo site-logo">' ), 'Hiding text must preserve the image logo.' );
nb_logo_expect( false !== strpos( $with_logo, 'c-branding site-branding custom-logo-class second' ), 'Rendering preserves custom classes.' );

echo "logo site text contract ok\n";
