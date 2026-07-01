<?php
/**
 * Contract test for the header navigation projection mapper.
 *
 * Verifies the pure block-tree -> menu-item-descriptor mapping that lets the
 * core/navigation editor entity be projected into a classic menu while keeping
 * the frontend (wp_nav_menu) output 1:1 with today (Anima walker + special
 * items + badges).
 *
 * Run: <local-php-8.2> tests/php/header-nav-projection-contract.php
 */

define( 'ABSPATH', dirname( __DIR__, 2 ) . '/' );

require_once dirname( __DIR__ ) . '/../lib/header-nav-projection.php';

$failures = 0;

function nb_assert( bool $condition, string $message ): void {
	global $failures;
	if ( ! $condition ) {
		$failures++;
		fwrite( STDERR, "FAIL: {$message}\n" );
	}
}

function nb_assert_same( $expected, $actual, string $message ): void {
	$ok = $expected === $actual;
	if ( ! $ok ) {
		$message .= ' (expected ' . var_export( $expected, true ) . ', got ' . var_export( $actual, true ) . ')';
	}
	nb_assert( $ok, $message );
}

/**
 * Helper: build a parsed-block array the way parse_blocks() would.
 */
function nb_block( string $name, array $attrs = [], array $inner = [] ): array {
	return [
		'blockName'   => $name,
		'attrs'       => $attrs,
		'innerBlocks' => $inner,
		'innerHTML'   => '',
	];
}

$tree = [
	nb_block( 'core/navigation-link', [
		'label'     => 'Home',
		'url'       => '/',
		'kind'      => 'custom',
		'className' => 'is-cta-button is-external-link is-cta-button',
	] ),
	nb_block( 'core/navigation-submenu', [
		'label'          => 'About',
		'url'            => '/about',
		'kind'           => 'post-type',
		'type'           => 'page',
		'id'             => 12,
		'novablocksBadge' => 'New',
		'className'      => 'is-external-link',
	], [
		nb_block( 'core/navigation-link', [
			'label' => 'Team',
			'url'   => '/about/team',
			'kind'  => 'post-type',
			'type'  => 'page',
			'id'    => 13,
			'opensInNewTab' => true,
			'rel'   => 'noopener',
		] ),
	] ),
	nb_block( 'novablocks/navigation-search' ),
	nb_block( 'novablocks/navigation-cart' ),
	nb_block( 'novablocks/navigation-dark-mode' ),
	// Unknown block must be skipped, not crash.
	nb_block( 'core/spacer' ),
];

$descriptors = novablocks_header_nav_blocks_to_descriptors( $tree );

// Five known items, the unknown core/spacer dropped.
nb_assert_same( 5, count( $descriptors ), 'maps the five known items and drops unknown blocks' );

// 1. Home (custom link)
$home = $descriptors[0];
nb_assert_same( 'Home', $home['title'], 'home title' );
nb_assert_same( '/', $home['url'], 'home url' );
nb_assert_same( 'custom', $home['type'], 'home type' );
nb_assert_same( 'custom', $home['object'], 'home object' );
nb_assert_same( 0, $home['object_id'], 'home object_id' );
nb_assert_same( '', $home['badge'], 'home no badge' );
nb_assert_same( [ 'is-cta-button', 'is-external-link' ], $home['classes'], 'home custom classes' );
nb_assert_same( [], $home['children'], 'home no children' );

// 2. About (post_type submenu with badge + child)
$about = $descriptors[1];
nb_assert_same( 'About', $about['title'], 'about title' );
nb_assert_same( 'post_type', $about['type'], 'about type' );
nb_assert_same( 'page', $about['object'], 'about object' );
nb_assert_same( 12, $about['object_id'], 'about object_id' );
nb_assert_same( 'New', $about['badge'], 'about badge' );
nb_assert_same( [ 'is-external-link' ], $about['classes'], 'about custom classes' );
nb_assert_same( 1, count( $about['children'] ), 'about has one child' );

$team = $about['children'][0];
nb_assert_same( 'Team', $team['title'], 'team title' );
nb_assert_same( 'page', $team['object'], 'team object' );
nb_assert_same( 13, $team['object_id'], 'team object_id' );
nb_assert_same( '_blank', $team['target'], 'team opens in new tab' );
nb_assert_same( 'noopener', $team['xfn'], 'team rel -> xfn' );

// 3. Search special item
$search = $descriptors[2];
nb_assert_same( 'custom', $search['type'], 'search is custom' );
nb_assert_same( '#search', $search['url'], 'search url' );
nb_assert_same( [ 'menu-item--search' ], $search['classes'], 'search classes' );

// 4. Cart special item (url resolved later at apply time -> empty token here)
$cart = $descriptors[3];
nb_assert_same( [ 'menu-item--cart' ], $cart['classes'], 'cart classes' );
nb_assert_same( 'novablocks/navigation-cart', $cart['source_block'], 'cart keeps its source block for url resolution' );

// 5. Dark mode special item
$dark = $descriptors[4];
nb_assert_same( [ 'menu-item--dark-mode', 'js-sm-dark-mode-toggle' ], $dark['classes'], 'dark mode classes' );

// Flattening to ordered rows with parent links (what the apply step walks).
// Depth-first 1-based `index`; `parent_index` 0 means top-level.
$rows = novablocks_header_nav_flatten_descriptors( $descriptors );
nb_assert_same( 6, count( $rows ), 'flatten yields six rows (5 top-level + 1 child)' );
nb_assert_same( 1, $rows[0]['index'], 'first row index is 1' );
nb_assert_same( 0, $rows[0]['parent_index'], 'top-level rows have parent_index 0' );

$about_row = null;
$team_row  = null;
foreach ( $rows as $row ) {
	if ( 'About' === $row['title'] ) {
		$about_row = $row;
	}
	if ( 'Team' === $row['title'] ) {
		$team_row = $row;
	}
}
nb_assert( null !== $team_row, 'team row present after flatten' );
nb_assert_same( $about_row['index'], $team_row['parent_index'], 'team parent_index points to the About row index' );

/* ----- edge cases (regression guards from the adversarial review) -------- */

// #5: a post-type link with no concrete object id must NOT become a dangling
// menu item (object_id 0); it falls back to a plain custom URL item.
$dangling = novablocks_header_nav_block_to_descriptor(
	nb_block( 'core/navigation-link', [ 'label' => 'Loose', 'url' => '/loose', 'kind' => 'post-type', 'type' => 'page' ] )
);
nb_assert_same( 'custom', $dangling['type'], 'post-type link without id falls back to custom' );
nb_assert_same( 'custom', $dangling['object'], 'post-type link without id has custom object' );
nb_assert_same( 0, $dangling['object_id'], 'post-type link without id has object_id 0 as custom' );

// post_type_archive fidelity (e.g. WooCommerce "All Products" -> shop archive):
// preserved as a real archive both ways, so wp_nav_menu keeps the type class +
// regenerates the URL (no degraded custom item).
$arch_desc = novablocks_header_nav_block_to_descriptor(
	nb_block( 'core/navigation-link', [ 'label' => 'All Products', 'url' => '/shop', 'kind' => 'post-type-archive', 'type' => 'product' ] )
);
nb_assert_same( 'post_type_archive', $arch_desc['type'], 'archive descriptor type' );
nb_assert_same( 'product', $arch_desc['object'], 'archive descriptor object is the post type' );
nb_assert_same( 0, $arch_desc['object_id'], 'archive descriptor has no object id' );

$arch_block = novablocks_header_nav_item_to_block(
	[ 'title' => 'All Products', 'url' => '/shop', 'type' => 'post_type_archive', 'object' => 'product' ]
);
nb_assert_same( 'post-type-archive', $arch_block['attrs']['kind'], 'archive item rebuilds as post-type-archive' );
nb_assert_same( 'product', $arch_block['attrs']['type'], 'archive item keeps its post type' );

// #4 fidelity: special items carry their Anima visual-style default.
$search_desc = novablocks_header_nav_block_to_descriptor( nb_block( 'novablocks/navigation-search' ) );
nb_assert_same( 'label_icon', $search_desc['visual_style'], 'search default visual style' );
$dark_desc = novablocks_header_nav_block_to_descriptor( nb_block( 'novablocks/navigation-dark-mode' ) );
nb_assert_same( 'icon', $dark_desc['visual_style'], 'dark-mode default visual style' );
nb_assert_same( '#color-scheme-switcher', $dark_desc['url'], 'dark-mode canonical url' );

// #7: a normal link that merely reuses ONE marker class is not misclassified.
$not_special = novablocks_header_nav_item_to_block( [
	'title'   => 'My Dark Page',
	'url'     => '/dark',
	'type'    => 'custom',
	'classes' => [ 'menu-item--dark-mode' ], // missing js-sm-dark-mode-toggle
] );
nb_assert_same( 'core/navigation-link', $not_special['blockName'], 'partial marker class stays a normal link' );
nb_assert( ! isset( $not_special['attrs']['className'] ), 'projection-owned marker class is stripped from normal link className' );

$styled_link = novablocks_header_nav_item_to_block( [
	'title'        => 'Styled Link',
	'url'          => '/styled',
	'type'         => 'custom',
	'classes'      => [ 'is-cta-button', 'icon-only', 'is-external-link', 'no-icon', 'is-cta-button' ],
	'visual_style' => 'icon',
] );
nb_assert_same( 'core/navigation-link', $styled_link['blockName'], 'custom classes do not make a link special' );
nb_assert_same( 'is-cta-button is-external-link', $styled_link['attrs']['className'] ?? null, 'seed keeps custom classes and strips projection-owned classes' );

// Serialization guard: a submenu rebuilt from items must carry an innerContent
// placeholder per child, or serialize_blocks() drops the children (self-closing).
$child_block   = [ 'blockName' => 'core/navigation-link', 'attrs' => [], 'innerBlocks' => [], 'innerHTML' => '', 'innerContent' => [] ];
$submenu_block = novablocks_header_nav_item_to_block(
	[ 'title' => 'Shop', 'url' => '/shop', 'type' => 'post_type', 'object' => 'page', 'object_id' => 140 ],
	[ $child_block ]
);
nb_assert_same( 'core/navigation-submenu', $submenu_block['blockName'], 'item with children becomes a submenu' );
nb_assert_same( 1, count( $submenu_block['innerBlocks'] ), 'submenu keeps its child block' );
nb_assert_same( [ null ], $submenu_block['innerContent'], 'submenu innerContent has one placeholder per child' );

$leaf_block = novablocks_header_nav_item_to_block( [ 'title' => 'Home', 'url' => '/', 'type' => 'custom' ], [] );
nb_assert_same( [], $leaf_block['innerContent'], 'a childless item has empty innerContent' );

// A real special item (all classes present) IS recognised.
$real_dark = novablocks_header_nav_item_to_block( [
	'title'   => 'Dark Mode',
	'url'     => '#color-scheme-switcher',
	'type'    => 'custom',
	'classes' => [ 'menu-item--dark-mode', 'js-sm-dark-mode-toggle' ],
] );
nb_assert_same( 'novablocks/navigation-dark-mode', $real_dark['blockName'], 'full marker classes recognised as special' );

if ( $failures > 0 ) {
	fwrite( STDERR, "\nheader nav projection contract: {$failures} failure(s)\n" );
	exit( 1 );
}

echo "header nav projection contract ok\n";
