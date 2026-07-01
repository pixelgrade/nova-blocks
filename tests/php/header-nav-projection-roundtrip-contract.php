<?php
/**
 * Round-trip contract test for the header navigation projection pair.
 *
 * Proves that seeding (classic items -> blocks) and projection (blocks ->
 * descriptors) are lossless: forward(reverse(forward(tree))) === forward(tree).
 * This is what guarantees an existing menu can be adopted into the editing
 * entity and projected back without drift.
 *
 * Run: <local-php-8.2> tests/php/header-nav-projection-roundtrip-contract.php
 */

define( 'ABSPATH', dirname( __DIR__, 2 ) . '/' );

require_once dirname( __DIR__ ) . '/../lib/header-nav-projection.php';

$failures = 0;
function nb_assert( bool $c, string $m ): void {
	global $failures;
	if ( ! $c ) { $failures++; fwrite( STDERR, "FAIL: {$m}\n" ); }
}

function nb_block( string $name, array $attrs = [], array $inner = [] ): array {
	return [ 'blockName' => $name, 'attrs' => $attrs, 'innerBlocks' => $inner, 'innerHTML' => '' ];
}

/**
 * Build normalised classic menu items from flattened rows, as if they had been
 * written to (and read back from) a classic menu.
 */
function nb_rows_to_items( array $rows ): array {
	$items = [];

	foreach ( $rows as $row ) {
		$items[] = [
			'id'          => $row['index'],
			'parent'      => $row['parent_index'],
			'order'       => $row['index'],
			'title'       => $row['title'],
			'url'         => $row['url'],
			'type'        => $row['type'],
			'object'      => $row['object'],
			'object_id'   => $row['object_id'],
			'target'      => $row['target'],
			'xfn'         => $row['xfn'],
			'description' => $row['description'],
			'attr_title'  => $row['attr_title'],
			'classes'     => $row['classes'],
			'badge'       => $row['badge'],
			'visual_style' => $row['visual_style'],
		];
	}

	return $items;
}

$tree = [
	nb_block( 'core/navigation-link', [ 'label' => 'Home', 'url' => '/', 'kind' => 'custom', 'className' => 'is-cta-button is-external-link' ] ),
	nb_block( 'core/navigation-submenu', [
		'label' => 'About', 'url' => '/about', 'kind' => 'post-type', 'type' => 'page', 'id' => 12, 'novablocksBadge' => 'New', 'className' => 'is-external-link',
	], [
		nb_block( 'core/navigation-link', [ 'label' => 'Team', 'url' => '/about/team', 'kind' => 'post-type', 'type' => 'page', 'id' => 13, 'opensInNewTab' => true, 'rel' => 'noopener' ] ),
		nb_block( 'core/navigation-link', [ 'label' => 'Docs', 'url' => 'https://docs.example.com', 'kind' => 'custom', 'className' => 'is-external-link' ] ),
	] ),
	nb_block( 'core/navigation-link', [ 'label' => 'Blog', 'url' => '/blog', 'kind' => 'post-type', 'type' => 'page', 'id' => 20 ] ),
	nb_block( 'novablocks/navigation-search' ),
	nb_block( 'novablocks/navigation-cart', [ 'novablocksBadge' => '3' ] ),
	nb_block( 'novablocks/navigation-dark-mode' ),
];

// Forward once.
$forward1 = novablocks_header_nav_blocks_to_descriptors( $tree );
$rows     = novablocks_header_nav_flatten_descriptors( $forward1 );

// Reverse (seed) from the projected rows, then forward again.
$items    = nb_rows_to_items( $rows );
$blocks2  = novablocks_header_nav_menu_items_to_blocks( $items );
$forward2 = novablocks_header_nav_blocks_to_descriptors( $blocks2 );

nb_assert( $forward1 === $forward2, 'round-trip is lossless: forward(reverse(forward(tree))) === forward(tree)' );

if ( $forward1 !== $forward2 ) {
	fwrite( STDERR, "--- forward1 ---\n" . var_export( $forward1, true ) . "\n" );
	fwrite( STDERR, "--- forward2 ---\n" . var_export( $forward2, true ) . "\n" );
}

// Spot-check the reconstructed structure independently of equality.
nb_assert( 6 === count( $blocks2 ), 'reverse rebuilds six top-level blocks' );
nb_assert( 'core/navigation-submenu' === $blocks2[1]['blockName'], 'About rebuilt as a submenu' );
nb_assert( 2 === count( $blocks2[1]['innerBlocks'] ), 'About submenu keeps its two children' );
nb_assert( 'is-cta-button is-external-link' === ( $blocks2[0]['attrs']['className'] ?? null ), 'Home custom classes survive reverse rebuild' );
nb_assert( 'is-external-link' === ( $blocks2[1]['attrs']['className'] ?? null ), 'submenu custom classes survive reverse rebuild' );
nb_assert( 'is-external-link' === ( $blocks2[1]['innerBlocks'][1]['attrs']['className'] ?? null ), 'child link custom classes survive reverse rebuild' );
nb_assert( 'novablocks/navigation-cart' === $blocks2[4]['blockName'], 'cart special item recognised by its class' );
nb_assert( '3' === ( $blocks2[4]['attrs']['novablocksBadge'] ?? null ), 'cart badge preserved through the round-trip' );

if ( $failures > 0 ) {
	fwrite( STDERR, "\nheader nav projection round-trip contract: {$failures} failure(s)\n" );
	exit( 1 );
}

echo "header nav projection round-trip contract ok\n";
