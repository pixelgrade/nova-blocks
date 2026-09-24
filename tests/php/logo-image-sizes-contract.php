<?php
/**
 * Contract for the Logo image `sizes` (#644).
 *
 * The logo is shown at the Header's Logo Height (desktop) / Mobile Logo Height
 * (below lap), so `sizes` must describe that rendered width instead of WordPress's
 * default master width; otherwise browsers download a file several times larger
 * than the logo on screen. Every image rendered inside the Logo block gets it,
 * including a theme's extra copies (Anima's inverted logo), and nothing outside.
 */

define( 'ABSPATH', __DIR__ );

class WP_Block {
	public $context = [];

	public function __construct( array $context = [] ) {
		$this->context = $context;
	}
}

$GLOBALS['nb_filters']  = [];
$GLOBALS['nb_metadata'] = [
	5 => [ 'width' => 1784, 'height' => 424 ],
	6 => [ 'width' => 400, 'height' => 400 ],
];

function add_filter( $name, $callback, $priority = 10, $args = 1 ) {
	$GLOBALS['nb_filters'][ $name ][ $priority ][] = [ $callback, $args ];
	return true;
}
function remove_filter( $name, $callback, $priority = 10 ) {
	foreach ( $GLOBALS['nb_filters'][ $name ][ $priority ] ?? [] as $index => $entry ) {
		if ( $entry[0] === $callback ) {
			unset( $GLOBALS['nb_filters'][ $name ][ $priority ][ $index ] );
			return true;
		}
	}
	return false;
}
function apply_filters( $name, $value, ...$args ) {
	$callbacks = $GLOBALS['nb_filters'][ $name ] ?? [];
	ksort( $callbacks );
	foreach ( $callbacks as $entries ) {
		foreach ( $entries as $entry ) {
			$value = call_user_func_array( $entry[0], array_slice( array_merge( [ $value ], $args ), 0, $entry[1] ) );
		}
	}
	return $value;
}

function do_action() {}
function novablocks_maybe_enqueue_block_frontend_scripts() {}
function novablocks_get_attributes_from_json( $path ) {
	return json_decode( file_get_contents( dirname( __DIR__, 2 ) . '/' . $path ), true );
}
function esc_attr( $value ) { return htmlspecialchars( (string) $value, ENT_QUOTES, 'UTF-8' ); }
function esc_html( $value ) { return esc_attr( $value ); }
function esc_url( $value ) { return esc_attr( $value ); }
function sanitize_html_class( $value ) { return preg_replace( '/[^A-Za-z0-9_-]/', '', $value ); }
function has_custom_logo() { return true; }
function wp_get_attachment_metadata( $id ) { return $GLOBALS['nb_metadata'][ $id ] ?? false; }
function get_bloginfo( $key, $filter = '' ) { return 'Site'; }
function bloginfo( $key ) { echo 'Site'; }
function get_theme_mod( $name, $default = false ) { return false; }
function home_url( $path ) { return 'https://example.test' . $path; }
function is_front_page() { return false; }
function is_home() { return false; }
function is_customize_preview() { return false; }

// A stand-in for wp_get_attachment_image(): WordPress computes the default
// `sizes`, then runs `wp_get_attachment_image_attributes`.
function nb_image( $id, $sizes = null ) {
	$width = $GLOBALS['nb_metadata'][ $id ]['width'] ?? 1784;
	$attr  = [ 'src' => "logo-$id.png", 'srcset' => "logo-$id.png {$width}w" ];
	$attr['sizes'] = $sizes ?? "(max-width: {$width}px) 100vw, {$width}px";
	$attr = apply_filters( 'wp_get_attachment_image_attributes', $attr, (object) [ 'ID' => $id ], 'full' );
	return '<img sizes="' . esc_attr( $attr['sizes'] ) . '">';
}
function get_custom_logo() { return '<a class="custom-logo-link">' . nb_image( 5 ) . '</a>'; }

require dirname( __DIR__, 2 ) . '/packages/block-library/src/blocks/logo/init.php';

function nb_sizes_expect( $condition, $message ) {
	if ( ! $condition ) {
		fwrite( STDERR, $message . PHP_EOL );
		exit( 1 );
	}
}
function nb_sizes_of( $html ) {
	preg_match_all( '/sizes="([^"]*)"/', $html, $matches );
	return $matches[1];
}
$header = [ 'novablocks/logoHeight' => 30, 'novablocks/mobileLogoHeight' => 24 ];
$render = static function ( array $context = [] ) {
	return novablocks_render_logo_block( [], '', new WP_Block( $context ) );
};

// 1. Registration: the Header hands its logo heights to the Logo through block context.
$header_json = json_decode( file_get_contents( dirname( __DIR__, 2 ) . '/packages/block-library/src/blocks/header/block.json' ), true );
$logo_json   = json_decode( file_get_contents( dirname( __DIR__, 2 ) . '/packages/block-library/src/blocks/logo/block.json' ), true );
nb_sizes_expect( 'logoHeight' === ( $header_json['providesContext']['novablocks/logoHeight'] ?? null ), 'Header must provide novablocks/logoHeight.' );
nb_sizes_expect( 'mobileLogoHeight' === ( $header_json['providesContext']['novablocks/mobileLogoHeight'] ?? null ), 'Header must provide novablocks/mobileLogoHeight.' );
foreach ( [ 'novablocks/logoHeight', 'novablocks/mobileLogoHeight' ] as $key ) {
	nb_sizes_expect( in_array( $key, $logo_json['usesContext'] ?? [], true ), "Logo must use {$key}." );
}

// 2. Inside a Header: rendered width = height x aspect ratio (1784x424 at 30px = 127px, at 24px = 101px).
nb_sizes_expect( [ '(max-width: 1023px) 101px, 127px' ] === nb_sizes_of( $render( $header ) ), 'Logo sizes must match the rendered logo: ' . implode( ' | ', nb_sizes_of( $render( $header ) ) ) );

// Equal heights need no media condition.
nb_sizes_expect( [ '127px' ] === nb_sizes_of( $render( [ 'novablocks/logoHeight' => 30, 'novablocks/mobileLogoHeight' => 30 ] ) ), 'Equal heights must give a single width.' );

// 3. The theme's extra copies (Anima's inverted logo, another attachment) get their own aspect ratio.
add_filter( 'novablocks/logo_markup', static function () {
	return get_custom_logo() . nb_image( 6 );
} );
nb_sizes_expect( [ '(max-width: 1023px) 101px, 127px', '(max-width: 1023px) 24px, 30px' ] === nb_sizes_of( $render( $header ) ), 'Every image in the Logo block must get its own sizes: ' . implode( ' | ', nb_sizes_of( $render( $header ) ) ) );
$GLOBALS['nb_filters']['novablocks/logo_markup'] = [];

// 4. The filter is scoped to the Logo render: images elsewhere keep WordPress's default.
$render( $header );
nb_sizes_expect( [ '(max-width: 1784px) 100vw, 1784px' ] === nb_sizes_of( nb_image( 5 ) ), 'Images outside the Logo block must keep their sizes.' );

// 5. Lazy images keep WordPress's `auto` keyword in front.
add_filter( 'novablocks/logo_markup', static function () {
	return nb_image( 5, 'auto, (max-width: 1784px) 100vw, 1784px' );
} );
nb_sizes_expect( [ 'auto, (max-width: 1023px) 101px, 127px' ] === nb_sizes_of( $render( $header ) ), 'The auto keyword must be preserved.' );
$GLOBALS['nb_filters']['novablocks/logo_markup'] = [];

// 6. No Header context (Logo used elsewhere), no dimensions, or no height: unchanged markup.
$default = [ '(max-width: 1784px) 100vw, 1784px' ];
nb_sizes_expect( $default === nb_sizes_of( $render() ), 'Without Header context the logo keeps WordPress sizes.' );
nb_sizes_expect( $default === nb_sizes_of( $render( [ 'novablocks/logoHeight' => 0, 'novablocks/mobileLogoHeight' => 0 ] ) ), 'A zero height must not produce 0px sizes.' );
unset( $GLOBALS['nb_metadata'][5] );
nb_sizes_expect( $default === nb_sizes_of( $render( $header ) ), 'Missing dimensions must keep WordPress sizes.' );

echo "logo image sizes contract ok\n";
