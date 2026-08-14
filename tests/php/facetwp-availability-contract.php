<?php
/**
 * FacetWP availability contract.
 *
 * Standalone: run with the Local PHP CLI; no WordPress bootstrap is required.
 */

declare( strict_types=1 );

define( 'ABSPATH', __DIR__ . '/../../' );

$GLOBALS['nb_test_facetwp_available'] = false;
$GLOBALS['nb_test_enqueue_calls']     = 0;
$GLOBALS['nb_test_shortcode_calls']   = [];
$GLOBALS['nb_test_failures']          = [];
$GLOBALS['nb_test_facets']            = [
	[ 'name' => 'categories', 'label' => 'Categories', 'type' => 'radio' ],
	[ 'name' => 'projects_year', 'label' => 'Year', 'type' => 'checkboxes' ],
	[ 'name' => 'projects_program', 'label' => 'Program', 'type' => 'checkboxes' ],
	[ 'name' => 'projects_status', 'label' => 'Status', 'type' => 'checkboxes' ],
	[ 'name' => 'projects_architects', 'label' => 'Architects', 'type' => 'checkboxes' ],
	[ 'name' => 'projects_client', 'label' => 'Client', 'type' => 'checkboxes' ],
	[ 'name' => 'projects_scale', 'label' => 'Scale', 'type' => 'checkboxes' ],
	[ 'name' => 'projects_type', 'label' => 'Type', 'type' => 'checkboxes' ],
	[ 'name' => 'pager', 'label' => 'Pager', 'type' => 'pager' ],
];

class WP_Block {}

function add_filter( ...$args ): void {}
function add_action( ...$args ): void {}
function has_filter( ...$args ) { return false; }
function apply_filters( $hook, $value, ...$args ) { return $value; }
function esc_html__( string $text ): string { return $text; }
function esc_attr__( string $text ): string { return $text; }
function esc_html( string $text ): string { return htmlspecialchars( $text, ENT_QUOTES ); }
function esc_attr( string $text ): string { return htmlspecialchars( $text, ENT_QUOTES ); }
function esc_attr_e( string $text ): void { echo esc_attr( $text ); }
function admin_url( string $path = '' ): string { return 'https://example.test/wp-admin/' . ltrim( $path, '/' ); }
function shortcode_exists( string $tag ): bool { return 'facetwp' === $tag && $GLOBALS['nb_test_facetwp_available']; }
function get_option( string $name, $default = false ) {
	if ( 'facetwp_settings' !== $name ) {
		return $default;
	}

	return json_encode( [ 'facets' => $GLOBALS['nb_test_facets'] ] );
}
function do_shortcode( string $shortcode ): string {
	$GLOBALS['nb_test_shortcode_calls'][] = $shortcode;

	if ( ! shortcode_exists( 'facetwp' ) ) {
		return $shortcode;
	}

	if ( false !== strpos( $shortcode, 'selections=' ) ) {
		return '<div class="facetwp-selections">Selections</div>';
	}

	preg_match( '/facet="([^"]+)"/', $shortcode, $matches );

	return '<div class="facetwp-facet">facet-rendered:' . ( $matches[1] ?? '' ) . '</div>';
}
function novablocks_merge_attributes_from_array( array $paths ): array { return []; }
function novablocks_get_attributes_with_defaults( array $attributes, array $config ): array {
	return array_merge(
		[
			'align'       => 'wide',
			'facet'       => '',
			'hideCounts'  => false,
			'hideLabels'  => false,
			'orientation' => 'horizontal',
			'sectionType' => 'visible',
			'text'        => '',
		],
		$attributes
	);
}
function novablocks_get_space_and_sizing_css( array $attributes ): array { return []; }
function novablocks_maybe_enqueue_block_frontend_scripts( WP_Block $block ): void {
	$GLOBALS['nb_test_enqueue_calls']++;
}
function wp_enqueue_script( string $handle ): void {
	$GLOBALS['nb_test_enqueue_calls']++;
}

function nb_expect_same( $expected, $actual, string $message ): void {
	if ( $expected !== $actual ) {
		$GLOBALS['nb_test_failures'][] = $message . "\nExpected: " . var_export( $expected, true ) . "\nActual: " . var_export( $actual, true );
	}
}

function nb_expect_contains( string $needle, string $haystack, string $message ): void {
	if ( false === strpos( $haystack, $needle ) ) {
		$GLOBALS['nb_test_failures'][] = $message . "\nMissing: " . $needle . "\nActual: " . $haystack;
	}
}

require_once __DIR__ . '/../../lib/block-editor-settings.php';

foreach ( [ 'filter', 'facet', 'toggle', 'title', 'selections', 'pager' ] as $block_name ) {
	require_once __DIR__ . '/../../packages/block-library/src/blocks/facetwp-' . $block_name . '/init.php';
}

$block = new WP_Block();

// FacetWP absent: imported settings do not make the integration available and no public block leaks.
$GLOBALS['nb_test_facetwp_available'] = false;
nb_expect_same( [], novablocks_get_facets(), 'Unavailable FacetWP must not expose imported facet definitions as active facets.' );

$settings = novablocks_settings_add_facetwp_facets( [] );
nb_expect_same( false, $settings['facetwp_available'] ?? null, 'Editor settings must explicitly report FacetWP unavailable.' );
nb_expect_same( false, array_key_exists( 'facetwp_facets', $settings ), 'Unavailable editor settings must not advertise saved facets as usable.' );
nb_expect_contains( 'page=pixelgrade&tab=plugins&section=advanced-filtering', $settings['facetwp_setup_url'] ?? '', 'Editor settings must provide a safe Site Setup hand-off.' );

$unavailable_markup = [
	'filter'     => novablocks_render_facetwp_filter_block( [ 'sectionType' => 'visible' ], '<span>inner controls</span>', $block ),
	'facet'      => novablocks_render_facetwp_facet_block( [ 'facet' => 'categories' ], '', $block ),
	'toggle'     => novablocks_render_facetwp_toggle_block( [ 'text' => '+ More Filters' ], '', $block ),
	'title'      => novablocks_render_facetwp_title_block( [ 'text' => 'Filter projects' ], '', $block ),
	'selections' => novablocks_render_facetwp_selections_block( [], '', $block ),
	'pager'      => novablocks_render_facetwp_pager_block( [ 'facet' => 'pager' ], '', $block ),
];

foreach ( $unavailable_markup as $name => $markup ) {
	nb_expect_same( '', $markup, 'Unavailable FacetWP ' . $name . ' block must render no public markup.' );
}
nb_expect_same( 0, $GLOBALS['nb_test_enqueue_calls'], 'Unavailable FacetWP must not enqueue filtering behavior.' );
nb_expect_same( [], $GLOBALS['nb_test_shortcode_calls'], 'Unavailable FacetWP must never call do_shortcode().' );

// FacetWP active: preserve the established renderer and enqueue paths.
$GLOBALS['nb_test_facetwp_available'] = true;
$GLOBALS['nb_test_enqueue_calls']     = 0;
$GLOBALS['nb_test_shortcode_calls']   = [];

nb_expect_same( 9, count( novablocks_get_facets() ), 'Active FacetWP must keep all saved facet definitions.' );
$active_settings = novablocks_settings_add_facetwp_facets( [] );
nb_expect_same( true, $active_settings['facetwp_available'] ?? null, 'Editor settings must explicitly report FacetWP active.' );
nb_expect_same( 9, count( $active_settings['facetwp_facets'] ?? [] ), 'Active editor settings must preserve all saved facets.' );

$filter_markup = novablocks_render_facetwp_filter_block( [ 'sectionType' => 'visible' ], '<span>inner controls</span>', $block );
nb_expect_contains( 'nb-facetwp-filter', $filter_markup, 'Active parent filter markup must remain present.' );
nb_expect_contains( '<span>inner controls</span>', $filter_markup, 'Active parent filter must preserve its rendered children.' );
nb_expect_same( 1, $GLOBALS['nb_test_enqueue_calls'], 'Active parent filter must keep enqueueing its frontend behavior once.' );

nb_expect_contains( 'facet-rendered:categories', novablocks_render_facetwp_facet_block( [ 'facet' => 'categories' ], '', $block ), 'Active FacetWP facet output must remain rendered.' );
nb_expect_contains( '+ More Filters', novablocks_render_facetwp_toggle_block( [ 'text' => '+ More Filters' ], '', $block ), 'Active toggle output must remain rendered.' );
nb_expect_contains( 'Filter projects', novablocks_render_facetwp_title_block( [ 'text' => 'Filter projects' ], '', $block ), 'Active title output must remain rendered.' );
nb_expect_contains( 'facetwp-selections', novablocks_render_facetwp_selections_block( [], '', $block ), 'Active selections output must remain rendered.' );
nb_expect_contains( 'facet-rendered:pager', novablocks_render_facetwp_pager_block( [ 'facet' => 'pager' ], '', $block ), 'Active pager output must remain rendered.' );

if ( $GLOBALS['nb_test_failures'] ) {
	fwrite( STDERR, implode( "\n\n", $GLOBALS['nb_test_failures'] ) . "\n" );
	exit( 1 );
}

echo "FacetWP availability contract OK\n";
