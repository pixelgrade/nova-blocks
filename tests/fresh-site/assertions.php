<?php
/**
 * Fresh-site seam assertions, run by bin/run-fresh-site-smoke.sh inside a
 * brand-new WordPress with the stack just activated (wp eval-file).
 *
 * Rule: one assertion per fresh-site incident. Say WHICH seam broke.
 */

$failures = [];

$assert = function ( $condition, $label ) use ( &$failures ) {
	if ( $condition ) {
		echo "  ok    {$label}\n";
	} else {
		echo "  FAIL  {$label}\n";
		$failures[] = $label;
	}
};

// --- Stack is actually active -------------------------------------------------
$assert( 'anima' === get_stylesheet(), 'anima is the active theme' );
$assert( is_plugin_active( 'style-manager/style-manager.php' ), 'style-manager active' );
$assert( is_plugin_active( 'nova-blocks/nova-blocks.php' ), 'nova-blocks active' );

// --- The empty-header incident (Anima header patterns registered at an init
// --- priority before Nova Blocks' patterns exist → header resolves empty on
// --- the FIRST fresh-site render, when the template part is generated) --------
$header = get_block_template( get_stylesheet() . '//header', 'wp_template_part' );
$assert( $header && '' !== trim( (string) $header->content ), 'header template part has content' );

if ( $header && '' !== trim( (string) $header->content ) ) {
	$rendered = do_blocks( $header->content );
	$rendered = trim( preg_replace( '/<!--.*?-->/s', '', $rendered ) );
	$assert( '' !== $rendered, 'header template part RENDERS non-empty (init-priority seam)' );
}

// --- Every header pattern offered in the Site Editor must parse to real
// --- blocks (a pattern referencing an unregistered pattern parses hollow) -----
$hollow_patterns = [];
foreach ( WP_Block_Patterns_Registry::get_instance()->get_all_registered() as $pattern ) {
	$block_types = (array) ( $pattern['blockTypes'] ?? [] );
	if ( ! in_array( 'core/template-part/header', $block_types, true ) ) {
		continue;
	}
	$rendered = trim( preg_replace( '/<!--.*?-->/s', '', do_blocks( $pattern['content'] ) ) );
	if ( '' === $rendered ) {
		$hollow_patterns[] = $pattern['name'];
	}
}
$assert(
	empty( $hollow_patterns ),
	'all header patterns render non-empty' . ( $hollow_patterns ? ' (hollow: ' . implode( ', ', $hollow_patterns ) . ')' : '' )
);

// --- Nova Blocks' own registration seams ---------------------------------------
$assert( function_exists( 'novablocks_get_color_signal_classes' ), 'nova-blocks core functions loaded' );
$assert(
	! empty( WP_Block_Type_Registry::get_instance()->get_registered( 'novablocks/supernova' ) ),
	'novablocks/supernova block registered'
);

// --- Front page renders through the full template stack -------------------------
$front = get_block_template( get_stylesheet() . '//index', 'wp_template' )
	?: get_block_template( get_stylesheet() . '//home', 'wp_template' );
$assert( $front && '' !== trim( (string) $front->content ), 'front template resolves with content' );

// ---------------------------------------------------------------------------------
if ( $failures ) {
	echo 'FRESH-SITE ASSERTIONS FAILED: ' . count( $failures ) . "\n";
	exit( 1 );
}
echo "FRESH-SITE ASSERTIONS PASSED\n";
