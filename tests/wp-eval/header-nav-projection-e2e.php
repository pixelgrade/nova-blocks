<?php
/**
 * End-to-end test for the header navigation projection pipeline, run against a
 * live WordPress + the active theme (so the real Anima nav walker, special-item
 * classes, and badge rendering are exercised).
 *
 * It builds a scratch classic menu, seeds it into a wp_navigation editing
 * entity, projects it back to a generated classic menu, edits the entity and
 * re-projects, then renders wp_nav_menu and asserts the markup is what the
 * frontend needs (submenu children, special-item class, badge span, edits).
 * Everything it creates is removed on the way out.
 *
 * Run (WP must be loaded — assumes a wp-eval context):
 *   PHPRC="<Local run>/conf/php" <local-php> -r '
 *     define("WP_USE_THEMES", false); require "wp-load.php";
 *     require "wp-content/plugins/nova-blocks/tests/wp-eval/header-nav-projection-e2e.php";'
 */

if ( ! defined( 'ABSPATH' ) ) {
	fwrite( STDERR, "E2E must run in a loaded WordPress context.\n" );
	exit( 1 );
}

// Exercise the feature regardless of the site's flag state.
add_filter( 'novablocks/enable_block_nav_editing', '__return_true' );

$failures = 0;
function nbe_assert( bool $cond, string $msg ): void {
	global $failures;
	if ( ! $cond ) {
		$failures++;
		fwrite( STDERR, "FAIL: {$msg}\n" );
	}
}

// Back up global state we touch so we can fully restore it.
$backup = [
	'locations' => get_nav_menu_locations(),
	'entities'  => get_option( 'novablocks_header_nav_entities', [] ),
	'seeded'    => get_option( 'novablocks_header_nav_seeded', false ),
];

$created_menus = [];
$entity_id     = 0;
$location      = 'nb_e2e_' . wp_rand( 1000, 9999 );

$cleanup = function () use ( &$created_menus, &$entity_id, $backup, $location ) {
	if ( $entity_id ) {
		wp_delete_post( $entity_id, true );
	}
	foreach ( $created_menus as $mid ) {
		wp_delete_nav_menu( $mid );
	}
	// Remove any generated menu stamped for our scratch location.
	foreach ( wp_get_nav_menus() as $menu ) {
		if ( get_term_meta( $menu->term_id, '_novablocks_generated_for', true ) === $location ) {
			wp_delete_nav_menu( $menu->term_id );
		}
	}
	set_theme_mod( 'nav_menu_locations', $backup['locations'] );
	update_option( 'novablocks_header_nav_entities', $backup['entities'] );
	if ( false === $backup['seeded'] ) {
		delete_option( 'novablocks_header_nav_seeded' );
	} else {
		update_option( 'novablocks_header_nav_seeded', $backup['seeded'] );
	}
};

try {
	/* 1. Scratch source classic menu: a link with a badge, a submenu with a
	      child, and an Anima-style search special item. */
	$src = wp_create_nav_menu( 'NB E2E Source ' . wp_rand() );
	nbe_assert( ! is_wp_error( $src ), 'created scratch source menu' );
	$created_menus[] = $src;

	$home = wp_update_nav_menu_item( $src, 0, [
		'menu-item-title'  => 'E2E Home',
		'menu-item-url'    => home_url( '/' ),
		'menu-item-status' => 'publish',
	] );
	update_post_meta( $home, '_menu_item_badge', 'New' );

	$shop  = wp_update_nav_menu_item( $src, 0, [
		'menu-item-title'  => 'E2E Shop',
		'menu-item-url'    => home_url( '/shop/' ),
		'menu-item-status' => 'publish',
	] );
	$child = wp_update_nav_menu_item( $src, 0, [
		'menu-item-title'     => 'E2E Child',
		'menu-item-url'       => home_url( '/shop/child/' ),
		'menu-item-status'    => 'publish',
		'menu-item-parent-id' => $shop,
	] );
	$searchitem = wp_update_nav_menu_item( $src, 0, [
		'menu-item-title'   => 'Search',
		'menu-item-url'     => '#search',
		'menu-item-status'  => 'publish',
		'menu-item-classes' => 'menu-item--search',
	] );

	/* 2. Assign to a scratch location and run seeding (classic -> entity). */
	$locs              = get_nav_menu_locations();
	$locs[ $location ] = $src;
	set_theme_mod( 'nav_menu_locations', $locs );

	// Make sure we seed fresh for our scratch location.
	$map = get_option( 'novablocks_header_nav_entities', [] );
	unset( $map[ $location ] );
	update_option( 'novablocks_header_nav_entities', $map );

	$seeded = novablocks_header_nav_seed_location( $location );
	nbe_assert( $seeded, 'seeding created an editing entity from the source menu' );

	$entity_id = novablocks_header_nav_entity_map()[ $location ] ?? 0;
	nbe_assert( $entity_id > 0, 'entity id recorded for the location' );

	$entity = get_post( $entity_id );
	nbe_assert( $entity instanceof WP_Post, 'entity post exists' );
	nbe_assert( false !== strpos( $entity->post_content, 'E2E Shop' ), 'entity captured the submenu parent' );
	nbe_assert( false !== strpos( $entity->post_content, 'E2E Child' ), 'entity captured the submenu child (innerContent)' );
	nbe_assert( false !== strpos( $entity->post_content, 'navigation-search' ), 'entity captured the search special item' );

	/* 3. Render the generated menu and assert the frontend markup. */
	$gen = null;
	foreach ( wp_get_nav_menus() as $menu ) {
		if ( get_term_meta( $menu->term_id, '_novablocks_generated_for', true ) === $location ) {
			$gen = $menu;
		}
	}
	nbe_assert( null !== $gen, 'a generated classic menu exists for the location' );

	$html = wp_nav_menu( [
		'menu'        => $gen->term_id,
		'echo'        => false,
		'container'   => '',
		'fallback_cb' => false,
	] );

	nbe_assert( false !== strpos( $html, 'E2E Home' ), 'rendered menu includes the home link' );
	nbe_assert( false !== strpos( $html, 'menu-item-has-children' ), 'rendered menu marks the submenu parent' );
	nbe_assert( false !== strpos( $html, 'sub-menu' ), 'rendered menu has a sub-menu list' );
	nbe_assert( false !== strpos( $html, 'E2E Child' ), 'rendered menu includes the submenu child' );
	nbe_assert( false !== strpos( $html, 'menu-item--search' ), 'rendered menu keeps the search special-item class' );
	nbe_assert( false !== strpos( $html, 'New' ), 'rendered menu includes the badge text' );

	/* 4. Edit the entity (append a link) and re-project. */
	$added = '<!-- wp:navigation-link {"label":"E2E Added","url":"' . home_url( '/e2e-added/' ) . '","kind":"custom"} /-->';
	wp_update_post( [ 'ID' => $entity_id, 'post_content' => $entity->post_content . $added ] );
	$projected = novablocks_header_nav_project_entity_to_menu( $entity_id, $location );
	nbe_assert( $projected, 're-projection after an edit succeeded' );

	$html2 = wp_nav_menu( [
		'menu'        => $gen->term_id,
		'echo'        => false,
		'container'   => '',
		'fallback_cb' => false,
	] );
	nbe_assert( false !== strpos( $html2, 'E2E Added' ), 'edited link propagated to the rendered menu' );

	/* 5. Ownership safety: the source (hand-made) menu is never mutated. */
	$src_items = wp_get_nav_menu_items( $src );
	nbe_assert( count( $src_items ) === 4, 'source menu untouched (still 4 items)' );

} catch ( \Throwable $e ) {
	$failures++;
	fwrite( STDERR, 'EXCEPTION: ' . $e->getMessage() . "\n" );
}

$cleanup();

if ( $failures > 0 ) {
	fwrite( STDERR, "\nheader nav projection E2E: {$failures} failure(s)\n" );
	exit( 1 );
}

echo "header nav projection E2E ok\n";
