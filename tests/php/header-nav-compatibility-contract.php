<?php
/** Standalone menu ownership/compatibility regression contract. */
define( 'ABSPATH', dirname( __DIR__, 2 ) . '/' );
class WP_Post {
	public $post_content = '[]';
}
class WP_Term {
	public $term_id;
	public $name = 'Menu';
	public function __construct( $id ) {
		$this->term_id = $id;
	}
}
// Minimal WordPress state, kept separate from projection data.
$options = [];
$menus = [];
$items = [];
$meta = [];
$term_meta = [];
$locations = [];
$posts = [];
$writes = [];
$hooks = [];
$override = null;

function apply_filters( $name, $value ) {
	global $override;
	return 'novablocks/enable_block_nav_editing' === $name && null !== $override ? $override : $value;
}

function current_theme_supports( $name ) {
	return $GLOBALS['theme_support'] ?? true;
}

function get_option( $key, $default = false ) {
	global $options;
	return $options[ $key ] ?? $default;
}

function update_option( $key, $value ) {
	global $options;
	$options[ $key ] = $value;
}

function get_post( $id ) {
	global $posts;
	return $posts[ $id ] ?? null;
}

function get_post_meta( $id, $key = '', $single = false ) {
	global $meta;
	return '' === $key ? ( $meta[ $id ] ?? [] ) : ( $meta[ $id ][ $key ][ 0 ] ?? '' );
}

function wp_get_nav_menus() {
	global $menus;
	return $menus;
}

function wp_create_nav_menu( $name ) {
	global $menus;
	$id = 1000 + count( $menus );
	$menus[] = new WP_Term( $id );
	return $id;
}
function wp_get_nav_menu_object( $id ) {
	global $menus;
	foreach ( $menus as $menu ) {
		if ( $menu->term_id === $id ) {
			return $menu;
		}
	}
	return null;
}
function wp_get_nav_menu_items( $id ) {
	global $items;
	return $items[ $id ] ?? [];
}

function get_term_meta( $id, $key, $single = false ) {
	global $term_meta;
	return $term_meta[ $id ][ $key ] ?? '';
}

function update_term_meta( $id, $key, $value ) {
	global $term_meta;
	$term_meta[ $id ][ $key ] = $value;
}

function get_nav_menu_locations() {
	global $locations;
	return $locations;
}

function set_theme_mod( $key, $value ) {
	global $locations, $writes;
	$writes[] = 'theme_mod';
	$locations = $value;
}

function is_admin() {
	return true;
}

class WP_Error {}
function is_wp_error( $value ) {
	return $value instanceof WP_Error;
}

function wp_is_post_revision( $id ) {
	return false;
}

function wp_is_post_autosave( $id ) {
	return false;
}

function add_action( ...$args ) {
	global $hooks;
	$hooks[] = $args;
}

function wp_insert_post( $args ) {
	global $writes, $posts;
	$writes[] = 'insert';
	$id = 100 + count( $posts );
	$posts[ $id ] = new WP_Post();
	$posts[ $id ]->post_content = $args[ 'post_content' ];
	return $id;
}
function parse_blocks( $content ) {
	return json_decode( $content, true );
}

function serialize_blocks( $blocks ) {
	return json_encode( $blocks );
}

function __( $text, $domain = '' ) {
	return $text;
}

function wp_list_pluck( $list, $field ) {
	return array_map( static function ( $item ) use ( $field ) {
		return $item->$field;
	}, $list );
}
function wp_update_nav_menu_item( $menu, $id, $args ) {
	global $writes;
	$writes[] = 'item';
	return ! empty( $GLOBALS[ 'fail_write' ] ) ? new WP_Error() : ( $id ?: 100 );
}
function update_post_meta( $id, $key, $value ) {
	global $meta;
	$meta[ $id ][ $key ] = [ $value ];
}

function wp_delete_post( $id, $force ) {
	global $writes;
	$writes[] = 'delete';
	return empty( $GLOBALS['fail_delete'] );
}


// Stop the HTTP handler at its redirect so we can inspect persisted state.
class SettingsRedirect extends Exception {}
function current_user_can( $capability ) { return true; }
function check_admin_referer( $action ) { return true; }
function admin_url( $path ) { return '/wp-admin/' . $path; }
function wp_safe_redirect( $url ) { throw new SettingsRedirect(); }

require dirname( __DIR__, 2 ) . '/lib/header-nav-projection.php';
$failures = 0;
function check( $expected, $actual, $label ) {
	global $failures;
	if ( $expected !== $actual ) {
		$failures++;
		fwrite( STDERR, "FAIL: $label\n" );
	}
}

// Mode preference and fresh-site ownership.
check( true, novablocks_header_nav_block_editing_enabled(), 'theme support keeps empty locations block-capable' );
$options[ 'novablocks_header_nav_editing_mode' ] = 'block';
check( true, novablocks_header_nav_block_editing_enabled(), 'explicit block mode remains available' );
$options[ 'novablocks_header_nav_editing_mode' ] = 'classic';
check( false, novablocks_header_nav_block_editing_enabled(), 'classic opt-out disables projection' );
unset( $options[ 'novablocks_header_nav_editing_mode' ] );
$menus = [new WP_Term( 10 )];
$items[ 10 ] = [(object) ['ID' => 11, 'db_id' => 11]];
$locations = ['primary' => 10];
check( false, novablocks_header_nav_location_editing_enabled( 'primary' ), 'assigned classic menu requires explicit adoption' );
check( true, novablocks_header_nav_location_editing_enabled( 'secondary' ), 'fresh empty secondary remains editable' );
check( false, novablocks_header_nav_seed_location( 'primary' ), 'automatic seed preserves original assignment' );
check( ['primary' => 10], $locations, 'automatic seed keeps original menu authoritative' );
$options[ 'novablocks_header_nav_entities' ] = ['primary' => 50];
$posts[ 50 ] = new WP_Post();
check( true, novablocks_header_nav_block_editing_enabled(), 'existing entity keeps block workflow' );
$menus = [new WP_Term( 10 ), new WP_Term( 20 )];
$locations = ['primary' => 20];
$term_meta[ 20 ][ '_novablocks_generated_for' ] = 'primary';
$items[ 10 ] = [(object) ['ID' => 11, 'db_id' => 11]];
$items[ 20 ] = [(object) ['ID' => 21, 'db_id' => 21]];
$meta[ 11 ] = ['_menu_item_type' => [ 'custom' ], '_menu_item_badge' => [ 'New' ]];
check( true, novablocks_header_nav_block_editing_enabled(), 'represented core and Nova fields allow block mode' );

// Generic unrepresented plugin metadata: deliberately no plugin-specific dependency.
$meta[ 11 ][ '_example_menu_policy' ] = [ 'private' ];
$override = true;
check( false, novablocks_header_nav_location_editing_enabled( 'primary' ), 'explicit enable cannot bypass compatibility guard on old source' );
check( false, novablocks_header_nav_seed_location( 'primary' ), 'unsafe seed refused' );
check( false, novablocks_header_nav_project_entity_to_menu( 50, 'primary' ), 'unsafe direct projection refused' );
check( false, novablocks_header_nav_apply_rows_to_menu( [['title' => 'Moved']], 'primary' ), 'unsafe direct apply refused before writes' );
check( 0, novablocks_header_nav_get_or_create_entity_for_location( 'primary' ), 'unsafe location gets no inline ref' );
$editor_data = (array) novablocks_header_nav_editor_data()[ 'entities' ];
check( false, isset( $editor_data[ 'primary' ] ), 'unsafe primary exposes no ref' );
check( true, isset( $editor_data[ 'secondary' ] ), 'empty secondary remains block-capable' );
$writes = []; // The unaffected empty locations legitimately get editing entities.
novablocks_header_nav_maybe_seed();
novablocks_header_nav_maybe_reproject();
novablocks_header_nav_on_entity_save( 50 );
check( [], $writes, 'all blocked entrypoints preserve existing menus and entities' );
check( ['primary' => 20], $locations, 'opt-out never restores stale original menu' );
unset( $meta[ 11 ][ '_example_menu_policy' ] );
$meta[ 21 ][ '_example_menu_policy' ] = [ 'private' ];
$locations = [];
check( false, novablocks_header_nav_location_editing_enabled( 'primary' ), 'unassigned generated menu also guarded' );
unset( $meta[ 21 ][ '_example_menu_policy' ] );
$locations = ['primary' => 10];
check( false, novablocks_header_nav_project_entity_to_menu( 50, 'primary' ), 'stale entity cannot reclaim manually reassigned location' );
check( [], $writes, 'reassignment guard performs no writes' );

// Explicit reimport must also detach stale editors after a menu was cleared.
$locations = ['primary' => 20];
$items[ 20 ] = [];
check( true, novablocks_header_nav_seed_location( 'primary', true ), 'empty assigned menu can be reimported' );
$new_id = novablocks_header_nav_entity_map()[ 'primary' ];
check( true, 50 !== $new_id, 'empty reimport uses new entity ID' );
$writes = [];
novablocks_header_nav_on_entity_save( 50 );
check( [], $writes, 'stale old editor save is unbound' );
check( $new_id, novablocks_header_nav_entity_map()[ 'primary' ], 'stale save cannot change current map' );
$locations = ['primary' => 10];
novablocks_header_nav_on_entity_save( 50 );
check( [], $writes, 'stale old editor remains unbound after reassignment' );

// Import failure must restore the prior entity map and location assignment.
$locations = ['primary' => 20];
$items[ 20 ] = [(object) [
	'ID' => 21, 'db_id' => 21, 'menu_item_parent' => 0, 'menu_order' => 1,
	'title' => 'Latest classic edit', 'url' => '/', 'type' => 'custom',
	'object' => 'custom', 'object_id' => 0, 'target' => '', 'xfn' => '',
	'description' => '', 'attr_title' => '', 'classes' => [],
]];
$GLOBALS[ 'fail_write' ] = true;
check( false, novablocks_header_nav_seed_location( 'primary', true ), 'failed menu write reports failed import' );
check( $new_id, novablocks_header_nav_entity_map()[ 'primary' ], 'failed import restores previous map' );
check( ['primary' => 20], $locations, 'failed import keeps assigned menu' );
// A failed classic-to-block transition must not reactivate a stale entity.
$posts[$new_id]->post_content = serialize_blocks( [[
	'blockName' => 'core/navigation-link',
	'attrs' => ['label' => 'Stale editor label', 'url' => '/stale'],
	'innerBlocks' => [],
]] );
$options['novablocks_header_nav_editing_mode'] = 'classic';
$_POST['editing_mode'] = 'block';
try {
	novablocks_header_nav_save_settings();
} catch ( SettingsRedirect $redirect ) {
	// Expected end of the native settings POST.
}
check( ['primary'], $options['novablocks_header_nav_import_errors'], 'settings persists failed location' );
unset( $GLOBALS['fail_write'] );
$writes = [];
novablocks_header_nav_on_entity_save( $new_id );
check( [], $writes, 'failed opt-in leaves old entity unable to overwrite classic edits' );
check( false, novablocks_header_nav_location_editing_enabled( 'primary' ), 'failed import remains classic' );
// A successful explicit retry clears the failure and can activate a fresh entity.
try {
	novablocks_header_nav_save_settings();
} catch ( SettingsRedirect $redirect ) {}
check( [], $options['novablocks_header_nav_import_errors'], 'successful retry clears failed locations' );
check( true, novablocks_header_nav_location_editing_enabled( 'primary' ), 'successful retry activates imported location' );

// Newly created empty-location projections have provenance and need not
// inspect an unrelated restricted menu when the editor next loads.
$term_meta[ 20 ][ '_novablocks_compatible_projection' ] = 1;
$meta[ 11 ][ '_example_menu_policy' ] = ['private'];
check( true, novablocks_header_nav_location_editing_enabled( 'primary' ), 'new projection ignores unrelated menu metadata' );

// Explicitly importing an empty reassigned classic source must clear the
// old compatible projection, never resurrect its previous links.
$locations = ['primary' => 10];
$items[10] = [];
$items[20] = [(object) ['ID' => 21, 'db_id' => 21, 'menu_order' => 1]];
$writes = [];
check( true, novablocks_header_nav_seed_location( 'primary', true ), 'empty reassigned classic import succeeds' );
check( ['primary' => 20], $locations, 'empty import assigns its empty projection' );
check( true, in_array( 'delete', $writes, true ), 'empty import removes previous generated links' );
check( true, novablocks_header_nav_location_editing_enabled( 'primary' ), 'empty adopted menu remains block-editable' );

// First adoption of an empty classic menu also creates an editable empty target.
$menus = [new WP_Term( 10 )];
$locations = ['primary' => 10];
$options['novablocks_header_nav_entities'] = [];
check( true, novablocks_header_nav_seed_location( 'primary', true ), 'first empty classic import succeeds' );
check( true, 10 !== $locations['primary'], 'first empty import assigns a generated target' );
check( [], wp_get_nav_menu_items( $locations['primary'] ), 'first empty projection contains no links' );
check( true, novablocks_header_nav_location_editing_enabled( 'primary' ), 'first empty adoption remains editable' );

// An explicit empty import must not activate retained links when deletion fails.
$menus = [new WP_Term( 10 ), new WP_Term( 20 )];
$term_meta[20] = ['_novablocks_generated_for' => 'primary', '_novablocks_compatible_projection' => 1];
$locations = ['primary' => 10];
$items[10] = [];
$items[20] = [(object) ['ID' => 21, 'db_id' => 21, 'menu_order' => 1]];
$previous_map = $options['novablocks_header_nav_entities'];
$GLOBALS['fail_delete'] = true;
check( false, novablocks_header_nav_seed_location( 'primary', true ), 'failed empty target clearing rejects import' );
check( ['primary' => 10], $locations, 'failed clearing never assigns retained links' );
check( $previous_map, $options['novablocks_header_nav_entities'], 'failed clearing restores editor map' );
$GLOBALS['fail_delete'] = false;

// A deliberately unassigned previous location cannot be silently reclaimed.
$locations = [];
$previous_map = $options['novablocks_header_nav_entities'];
$writes = [];
check( false, novablocks_header_nav_seed_location( 'primary', true ), 'unassigned old target reports an actionable import hold' );
check( $previous_map, $options['novablocks_header_nav_entities'], 'unassigned import does not replace the editor map' );
check( [], $writes, 'unassigned import does not mutate retained content' );

// Installing Nova on an unrelated theme must not add header-navigation UI.
$GLOBALS['theme_support'] = false;
$options['novablocks_header_nav_entities'] = [];
$override = null;
$hooks = [];
novablocks_header_nav_register_projection();
check( [], $hooks, 'unrelated themes get no header settings or projection hooks' );

if ( $failures ) {
	exit( 1 );
}
echo "header nav compatibility contract ok\n";
