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
		'label' => 'Home',
		'url'   => '/',
		'kind'  => 'custom',
	] ),
	nb_block( 'core/navigation-submenu', [
		'label'          => 'About',
		'url'            => '/about',
		'kind'           => 'post-type',
		'type'           => 'page',
		'id'             => 12,
		'novablocksBadge' => 'New',
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
nb_assert_same( [], $home['classes'], 'home no classes' );
nb_assert_same( [], $home['children'], 'home no children' );

// 2. About (post_type submenu with badge + child)
$about = $descriptors[1];
nb_assert_same( 'About', $about['title'], 'about title' );
nb_assert_same( 'post_type', $about['type'], 'about type' );
nb_assert_same( 'page', $about['object'], 'about object' );
nb_assert_same( 12, $about['object_id'], 'about object_id' );
nb_assert_same( 'New', $about['badge'], 'about badge' );
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

if ( $failures > 0 ) {
	fwrite( STDERR, "\nheader nav projection contract: {$failures} failure(s)\n" );
	exit( 1 );
}

echo "header nav projection contract ok\n";
