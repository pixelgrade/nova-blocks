<?php
/**
 * Contract test for the header navigation projection APPLY step.
 *
 * Mocks the WordPress nav-menu API and verifies that a flattened row set is
 * written into a Nova-owned classic menu with correct parent linking, special
 * item classes, badge meta, location assignment, and ownership stamping.
 *
 * Run: <local-php-8.2> tests/php/header-nav-projection-apply-contract.php
 */

define( 'ABSPATH', dirname( __DIR__, 2 ) . '/' );

/* ----- minimal WP doubles ------------------------------------------------ */

class WP_Term {
	public $term_id;
	public $name;
	public function __construct( int $term_id, string $name = '' ) {
		$this->term_id = $term_id;
		$this->name    = $name;
	}
}

class WP_Error {}

$GLOBALS['store'] = [
	'nav_menus'          => [],   // WP_Term[]
	'term_meta'          => [],   // [term_id][key] => value
	'menu_items'         => [],   // [menu_id] => array of objects with ->db_id
	'item_args'          => [],   // [item_id] => args (last write)
	'item_order'         => [],   // insertion order of item ids
	'post_meta'          => [],   // [post_id][key] => value
	'deleted'            => [],   // deleted post ids
	'locations'          => [],   // nav_menu_locations
	'next_term_id'       => 100,
	'next_item_id'       => 1000,
];

function __( $text, $domain = 'default' ) { return $text; }
function apply_filters( $hook, $value ) { return $value; }
function is_wp_error( $thing ) { return $thing instanceof WP_Error; }
function wp_list_pluck( $list, $field ) {
	return array_map( static function ( $item ) use ( $field ) {
		return is_object( $item ) ? $item->$field : $item[ $field ];
	}, $list );
}
function wp_get_nav_menus() { return $GLOBALS['store']['nav_menus']; }
function get_term_meta( $term_id, $key, $single = false ) {
	return $GLOBALS['store']['term_meta'][ $term_id ][ $key ] ?? '';
}
function update_term_meta( $term_id, $key, $value ) {
	$GLOBALS['store']['term_meta'][ $term_id ][ $key ] = $value;
	return true;
}
function wp_create_nav_menu( $name ) {
	$id = ++$GLOBALS['store']['next_term_id'];
	$GLOBALS['store']['nav_menus'][] = new WP_Term( $id, $name );
	return $id;
}
function wp_get_nav_menu_object( $id ) {
	foreach ( $GLOBALS['store']['nav_menus'] as $menu ) {
		if ( $menu->term_id === $id ) {
			return $menu;
		}
	}
	return null;
}
function wp_get_nav_menu_items( $menu_id ) {
	return $GLOBALS['store']['menu_items'][ $menu_id ] ?? [];
}
function wp_update_nav_menu_item( $menu_id, $item_id, $args ) {
	// Test hook: fail for a specific title to exercise the error path.
	if ( isset( $GLOBALS['store']['fail_on_title'] ) && ( $args['menu-item-title'] ?? '' ) === $GLOBALS['store']['fail_on_title'] ) {
		return new WP_Error();
	}
	if ( ! $item_id ) {
		$item_id = ++$GLOBALS['store']['next_item_id'];
		$GLOBALS['store']['item_order'][] = $item_id;
	}
	$GLOBALS['store']['item_args'][ $item_id ] = $args;
	return $item_id;
}
function update_post_meta( $post_id, $key, $value ) {
	$GLOBALS['store']['post_meta'][ $post_id ][ $key ] = $value;
	return true;
}
function wp_delete_post( $post_id, $force = false ) {
	$GLOBALS['store']['deleted'][] = $post_id;
	return true;
}
function get_nav_menu_locations() { return $GLOBALS['store']['locations']; }
function set_theme_mod( $key, $value ) {
	if ( 'nav_menu_locations' === $key ) {
		$GLOBALS['store']['locations'] = $value;
	}
	return true;
}

require_once dirname( __DIR__ ) . '/../lib/header-nav-projection.php';

/* ----- tiny assert helpers ----------------------------------------------- */

$failures = 0;
function nb_assert( bool $c, string $m ): void {
	global $failures;
	if ( ! $c ) { $failures++; fwrite( STDERR, "FAIL: {$m}\n" ); }
}
function nb_assert_same( $e, $a, string $m ): void {
	if ( $e !== $a ) {
		$m .= ' (expected ' . var_export( $e, true ) . ', got ' . var_export( $a, true ) . ')';
	}
	nb_assert( $e === $a, $m );
}
function nb_args_by_title( string $title ): ?array {
	foreach ( $GLOBALS['store']['item_args'] as $id => $args ) {
		if ( ( $args['menu-item-title'] ?? '' ) === $title ) {
			return [ 'id' => $id, 'args' => $args ];
		}
	}
	return null;
}

/* ----- build rows via the real mapper, then apply ------------------------ */

function nb_block( string $name, array $attrs = [], array $inner = [] ): array {
	return [ 'blockName' => $name, 'attrs' => $attrs, 'innerBlocks' => $inner, 'innerHTML' => '' ];
}

$tree = [
	nb_block( 'core/navigation-link', [ 'label' => 'Home', 'url' => '/', 'kind' => 'custom' ] ),
	nb_block( 'core/navigation-submenu', [
		'label' => 'About', 'url' => '/about', 'kind' => 'post-type', 'type' => 'page', 'id' => 12, 'novablocksBadge' => 'New',
	], [
		nb_block( 'core/navigation-link', [ 'label' => 'Team', 'url' => '/about/team', 'kind' => 'post-type', 'type' => 'page', 'id' => 13 ] ),
	] ),
	nb_block( 'novablocks/navigation-search' ),
	nb_block( 'novablocks/navigation-cart' ),
];

$rows = novablocks_header_nav_flatten_descriptors(
	novablocks_header_nav_blocks_to_descriptors( $tree )
);

$ok = novablocks_header_nav_apply_rows_to_menu( $rows, 'primary' );
nb_assert( $ok, 'apply returns true' );

// A generated menu was created and stamped as owned.
nb_assert_same( 1, count( $GLOBALS['store']['nav_menus'] ), 'one generated menu created' );
$menu_id = $GLOBALS['store']['nav_menus'][0]->term_id;
nb_assert_same( 'primary', get_term_meta( $menu_id, '_novablocks_generated_for', true ), 'menu stamped with ownership for the location' );

// Five rows -> five menu items written.
nb_assert_same( 5, count( $GLOBALS['store']['item_order'] ), 'five menu items written' );

// Parent linking: Team's parent-id is About's created id.
$about = nb_args_by_title( 'About' );
$team  = nb_args_by_title( 'Team' );
nb_assert( null !== $about && null !== $team, 'about + team items written' );
nb_assert_same( $about['id'], $team['args']['menu-item-parent-id'], 'team parent-id points to about item id' );
nb_assert_same( 0, $about['args']['menu-item-parent-id'], 'about is top-level (parent 0)' );

// Post type mapping carried through.
nb_assert_same( 'post_type', $about['args']['menu-item-type'], 'about type post_type' );
nb_assert_same( 'page', $about['args']['menu-item-object'], 'about object page' );
nb_assert_same( 12, $about['args']['menu-item-object-id'], 'about object id' );

// Badge meta written on the About item.
nb_assert_same( 'New', $GLOBALS['store']['post_meta'][ $about['id'] ]['_menu_item_badge'] ?? null, 'about badge meta written' );

// Special item classes preserved (the 1:1 hook for the Anima walker / CSS).
$search = nb_args_by_title( 'Search' );
nb_assert_same( 'menu-item--search', $search['args']['menu-item-classes'], 'search keeps its CSS class' );
nb_assert_same( '#search', $search['args']['menu-item-url'], 'search url' );

$cart = nb_args_by_title( 'Cart' );
nb_assert_same( 'menu-item--cart', $cart['args']['menu-item-classes'], 'cart keeps its CSS class' );

// Location assignment.
nb_assert_same( $menu_id, $GLOBALS['store']['locations']['primary'] ?? null, 'generated menu assigned to the location' );

/* ----- second apply reuses the same menu (ownership, no duplicates) ------ */

$ok2 = novablocks_header_nav_apply_rows_to_menu( $rows, 'primary' );
nb_assert( $ok2, 'second apply returns true' );
nb_assert_same( 1, count( $GLOBALS['store']['nav_menus'] ), 'second apply reuses the generated menu (no duplicate)' );

// visual_style meta written (Anima fidelity): search default is label_icon.
nb_assert_same( 'label_icon', $GLOBALS['store']['post_meta'][ $search['id'] ]['_menu_item_visual_style'] ?? null, 'search visual_style meta written' );

/* ----- isolated edge scenarios ------------------------------------------- */

function nb_reset_store(): void {
	$GLOBALS['store'] = [
		'nav_menus' => [], 'term_meta' => [], 'menu_items' => [], 'item_args' => [],
		'item_order' => [], 'post_meta' => [], 'deleted' => [], 'locations' => [],
		'next_term_id' => 100, 'next_item_id' => 1000,
	];
}

// A failed write aborts WITHOUT deleting surplus (no corruption / no orphans).
nb_reset_store();
$GLOBALS['store']['nav_menus'][] = new WP_Term( 200, 'gen' );
$GLOBALS['store']['term_meta'][200]['_novablocks_generated_for'] = 'primary';
$GLOBALS['store']['menu_items'][200] = [
	(object) [ 'db_id' => 9001, 'menu_order' => 1 ],
	(object) [ 'db_id' => 9002, 'menu_order' => 2 ],
	(object) [ 'db_id' => 9003, 'menu_order' => 3 ],
];
$GLOBALS['store']['fail_on_title'] = 'Home';
$rows_err = novablocks_header_nav_flatten_descriptors( novablocks_header_nav_blocks_to_descriptors( [
	nb_block( 'core/navigation-link', [ 'label' => 'Top', 'url' => '/', 'kind' => 'custom' ] ),
	nb_block( 'core/navigation-link', [ 'label' => 'Home', 'url' => '/home', 'kind' => 'custom' ] ),
] ) );
nb_assert_same( false, novablocks_header_nav_apply_rows_to_menu( $rows_err, 'primary' ), 'apply returns false when a write fails' );
nb_assert_same( 0, count( $GLOBALS['store']['deleted'] ), 'no surplus deletion after a failed write' );

// An empty entity is a safe no-op, never a full wipe.
nb_reset_store();
$GLOBALS['store']['nav_menus'][] = new WP_Term( 300, 'gen' );
$GLOBALS['store']['term_meta'][300]['_novablocks_generated_for'] = 'primary';
$GLOBALS['store']['menu_items'][300] = [ (object) [ 'db_id' => 7001, 'menu_order' => 1 ] ];
nb_assert_same( true, novablocks_header_nav_apply_rows_to_menu( [], 'primary' ), 'empty rows is a safe no-op' );
nb_assert_same( 0, count( $GLOBALS['store']['deleted'] ), 'empty rows never deletes existing items' );

// Surplus items from a previous, longer projection are removed.
nb_reset_store();
$GLOBALS['store']['nav_menus'][] = new WP_Term( 400, 'gen' );
$GLOBALS['store']['term_meta'][400]['_novablocks_generated_for'] = 'primary';
$GLOBALS['store']['menu_items'][400] = [
	(object) [ 'db_id' => 6001, 'menu_order' => 1 ],
	(object) [ 'db_id' => 6002, 'menu_order' => 2 ],
	(object) [ 'db_id' => 6003, 'menu_order' => 3 ],
];
$rows_short = novablocks_header_nav_flatten_descriptors( novablocks_header_nav_blocks_to_descriptors( [
	nb_block( 'core/navigation-link', [ 'label' => 'Only', 'url' => '/', 'kind' => 'custom' ] ),
] ) );
novablocks_header_nav_apply_rows_to_menu( $rows_short, 'primary' );
nb_assert_same( [ 6002, 6003 ], $GLOBALS['store']['deleted'], 'surplus items deleted, first item reused' );

if ( $failures > 0 ) {
	fwrite( STDERR, "\nheader nav projection apply contract: {$failures} failure(s)\n" );
	exit( 1 );
}

echo "header nav projection apply contract ok\n";
