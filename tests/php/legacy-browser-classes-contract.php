<?php
/**
 * Contract: server-printed classes for browsers without container style
 * queries or `:has()` (GitHub #685, Firefox 115 ESR).
 *
 * 1. `nb-content-inset-explicit` joins the body classes exactly when Style
 *    Manager emits the Content Inset signal, never in a Customizer preview.
 * 2. `nb-image--has-caption` marks a core/image figure that renders a
 *    caption (the #681 caption fit), and nothing else.
 * 3. A rule-on Sidecar prints `nb-sidecar--has-{left,right}-content` for each
 *    rail area with an element child — the `:has(> rail > *)` test — and a
 *    rule-off Sidecar prints neither.
 *
 * The CSS side of each row is pinned in
 * packages/core/src/scss/legacy-firefox.test.js.
 */

define( 'ABSPATH', __DIR__ );

$root = dirname( __DIR__, 2 );

require __DIR__ . '/support/wp-html-api.php';
if ( ! nb_load_wp_html_api() ) {
	echo "legacy-browser-classes-contract: SKIPPED (no local WordPress install for the HTML API)\n";
	exit( 0 );
}

function nb_expect( $condition, $message ) {
	if ( ! $condition ) {
		fwrite( STDERR, "legacy-browser-classes-contract FAILED: $message\n" );
		exit( 1 );
	}
}

$GLOBALS['nb_filters'] = [];
function add_filter( $hook, $callback, $priority = 10, $accepted_args = 1 ) {
	$GLOBALS['nb_filters'][ $hook ][] = $callback;
	return true;
}

$GLOBALS['nb_customize_preview'] = false;
$GLOBALS['nb_sm_explicit']       = null; // null: Style Manager not active.
function is_customize_preview() {
	return $GLOBALS['nb_customize_preview'];
}

require $root . '/lib/legacy-browser-classes.php';

// 1. Body class.
nb_expect( in_array( 'novablocks_content_inset_body_class', $GLOBALS['nb_filters']['body_class'] ?? [], true ), 'The body class filter must be registered.' );
nb_expect( [ 'home' ] === novablocks_content_inset_body_class( [ 'home' ] ), 'Without Style Manager there is no class.' );

function style_manager_content_inset_is_explicit() {
	return (bool) $GLOBALS['nb_sm_explicit'];
}

$GLOBALS['nb_sm_explicit'] = false;
nb_expect( [ 'home' ] === novablocks_content_inset_body_class( [ 'home' ] ), 'No saved Content Inset, no class.' );
$GLOBALS['nb_sm_explicit'] = true;
nb_expect( [ 'home', 'nb-content-inset-explicit' ] === novablocks_content_inset_body_class( [ 'home' ] ), 'A saved Content Inset prints the class.' );
$GLOBALS['nb_customize_preview'] = true;
nb_expect( [ 'home' ] === novablocks_content_inset_body_class( [ 'home' ] ), 'A Customizer preview never prints the class.' );
$GLOBALS['nb_customize_preview'] = false;

// 2. Captioned core/image.
nb_expect( in_array( 'novablocks_render_image_caption_class', $GLOBALS['nb_filters']['render_block_core/image'] ?? [], true ), 'The core/image filter must be registered.' );
$captioned = '<figure class="wp-block-image size-large is-resized"><img src="a.jpg" alt="" style="width:190px"/><figcaption class="wp-element-caption">A caption</figcaption></figure>';
nb_expect(
	'<figure class="wp-block-image size-large is-resized nb-image--has-caption"><img src="a.jpg" alt="" style="width:190px"/><figcaption class="wp-element-caption">A caption</figcaption></figure>' === novablocks_render_image_caption_class( $captioned, [] ),
	'A captioned image gets the class.'
);
$linked = '<figure class="wp-block-image"><a href="#"><img src="a.jpg" alt=""/></a><figcaption class="wp-element-caption">Linked</figcaption></figure>';
nb_expect( false !== strpos( novablocks_render_image_caption_class( $linked, [] ), 'wp-block-image nb-image--has-caption' ), 'A linked, captioned image gets the class.' );
$plain = '<figure class="wp-block-image size-large"><img src="a.jpg" alt=""/></figure>';
nb_expect( $plain === novablocks_render_image_caption_class( $plain, [] ), 'An image without a caption is byte-identical.' );
$other = '<div class="not-an-image"><figcaption>x</figcaption></div>';
nb_expect( $other === novablocks_render_image_caption_class( $other, [] ), 'Only a wp-block-image figure is marked.' );

// 3. Sidecar rail content.
require $root . '/packages/block-library/src/blocks/sidecar/init.php';

$area = function ( $side, $inner ) {
	return '<div class="nb-sidecar-area nb-sidecar-area--sidebar nb-sidecar-area--sidebar-' . $side . '">' . $inner . '</div>';
};
$content_area = function ( $inner ) {
	return '<div class="nb-sidecar-area nb-sidecar-area--content nb-content-layout-grid">' . $inner . '</div>';
};

nb_expect( [ 'left' => false, 'right' => true ] === novablocks_get_sidecar_rail_content( $content_area( '<p>Text</p>' ) . "\n" . $area( 'right', '<p>Rail</p>' ) ), 'A right rail with a paragraph has content.' );
nb_expect( [ 'left' => false, 'right' => false ] === novablocks_get_sidecar_rail_content( $content_area( '<p>Text</p>' ) . $area( 'right', "\n  <!-- comment -->\n  " ) ), 'Whitespace and comments are not content (as `> *`).' );
nb_expect( [ 'left' => false, 'right' => false ] === novablocks_get_sidecar_rail_content( $area( 'right', 'bare text' ) ), 'Bare text is not an element child.' );
nb_expect( [ 'left' => true, 'right' => false ] === novablocks_get_sidecar_rail_content( $area( 'left', '<img src="a.jpg">' ) . $content_area( '' ) . $area( 'right', '' ) ), 'A void element counts, per side.' );
// A nested Sidecar's rails inside the content area are not this Sidecar's.
$nested = $content_area( '<div class="nb-sidecar">' . $content_area( '<p>x</p>' ) . $area( 'right', '<p>Inner rail</p>' ) . '</div>' ) . $area( 'right', '' );
nb_expect( [ 'left' => false, 'right' => false ] === novablocks_get_sidecar_rail_content( $nested ), 'Only top-level rail areas count.' );
$nested_then_text = $content_area( '<div class="nb-sidecar">' . $area( 'right', '<p>Inner rail</p>' ) . '</div><p>After the nested Sidecar</p>' ) . $area( 'right', '' );
nb_expect( [ 'left' => false, 'right' => false ] === novablocks_get_sidecar_rail_content( $nested_then_text ), 'A nested rail does not make the content that follows it rail content.' );
// An unclosed paragraph (implicitly closed) does not shift the areas.
nb_expect( [ 'left' => false, 'right' => true ] === novablocks_get_sidecar_rail_content( $content_area( '<p>unclosed' ) . $area( 'right', '<p>Rail</p>' ) ), 'Implicitly closed tags keep the depth.' );

echo "legacy-browser-classes-contract: all assertions passed\n";
