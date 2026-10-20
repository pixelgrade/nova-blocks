<?php
/** Classic-menu ownership and compatibility boundaries for header editing. */
defined( 'ABSPATH' ) || exit;

/** Find the actual projection target, including one no longer assigned. */
function novablocks_header_nav_generated_menu( string $location ) {
	foreach ( wp_get_nav_menus() as $menu ) {
		if ( get_term_meta( $menu->term_id, '_novablocks_generated_for', true ) === $location ) {
			return $menu;
		}
	}
	return null;
}

/**
 * Projection represents only these menu fields. Unknown item state belongs to
 * its extension and must stay on its original item IDs, not be copied or moved
 * by the position-based projection.
 */
function novablocks_header_nav_menu_is_compatible( int $menu_id ): bool {
	$represented = [
		'_menu_item_type', '_menu_item_menu_item_parent', '_menu_item_object_id',
		'_menu_item_object', '_menu_item_target', '_menu_item_classes', '_menu_item_xfn',
		'_menu_item_url', '_menu_item_orphaned', '_menu_item_badge',
		'_menu_item_visual_style', '_edit_lock', '_edit_last',
	];
	foreach ( wp_get_nav_menu_items( $menu_id ) ?: [] as $item ) {
		if ( array_diff( array_keys( get_post_meta( $item->ID ) ), $represented ) ) {
			return false;
		}
	}
	return true;
}

/** Check the assigned menu, the actual target, and any known migration source. */
function novablocks_header_nav_location_is_compatible( string $location ): bool {
	$locations = get_nav_menu_locations();
	$menu_ids = [ (int) ( $locations[ $location ] ?? 0 ) ];
	$generated = novablocks_header_nav_generated_menu( $location );
	if ( $generated ) {
		$menu_ids[] = (int) $generated->term_id;
		$source = (int) get_term_meta( $generated->term_id, '_novablocks_source_menu', true );
		if ( $source ) {
			$menu_ids[] = $source;
		} elseif ( ! get_term_meta( $generated->term_id, '_novablocks_compatible_projection', true )
			&& ! empty( novablocks_header_nav_entity_map()[ $location ] ) ) {
			// Old migrations recorded no source. Only these legacy locations
			// must conservatively consider other menus as potential originals.
			foreach ( wp_get_nav_menus() as $menu ) {
				$menu_ids[] = (int) $menu->term_id;
			}
		}
	}
	foreach ( array_unique( array_filter( $menu_ids ) ) as $menu_id ) {
		if ( ! novablocks_header_nav_menu_is_compatible( $menu_id ) ) {
			return false;
		}
	}
	return true;
}

/**
 * A fresh populated classic menu requires explicit adoption. An existing
 * entity may only write its still-assigned generated menu. The source permit
 * exists only on the initial seed call, never on later entity saves.
 */
function novablocks_header_nav_location_editing_enabled( string $location, int $source_permit = 0 ): bool {
	// A failed opt-in must not reactivate the previous, potentially stale
	// entity. Only an explicit reimport can retry this location.
	if ( ! $source_permit && in_array( $location, (array) get_option( 'novablocks_header_nav_import_errors', [] ), true ) ) {
		return false;
	}
	if ( ! novablocks_header_nav_block_editing_enabled() || ! novablocks_header_nav_location_is_compatible( $location ) ) {
		return false;
	}
	$locations = get_nav_menu_locations();
	$assigned = (int) ( $locations[ $location ] ?? 0 );
	$generated = novablocks_header_nav_generated_menu( $location );
	if ( $source_permit > 0 && $source_permit === $assigned ) {
		return true;
	}
	if ( $generated ) {
		return $assigned === (int) $generated->term_id;
	}
	if ( ! $assigned ) {
		return true;
	}
	if ( ! empty( novablocks_header_nav_entity_map()[ $location ] ) ) {
		return false;
	}
	return 'block' === get_option( 'novablocks_header_nav_editing_mode' )
		|| (bool) apply_filters( 'novablocks/enable_block_nav_editing', false );
}

/** Native settings keep opting out available without editing PHP. */
function novablocks_header_nav_register_settings(): void {
	add_theme_page( __( 'Header Navigation', '__plugin_txtd' ), __( 'Header Navigation', '__plugin_txtd' ), 'edit_theme_options', 'novablocks-header-navigation', 'novablocks_header_nav_settings_page' );
}

function novablocks_header_nav_save_settings(): void {
	if ( ! current_user_can( 'edit_theme_options' ) ) {
		wp_die( esc_html__( 'You are not allowed to edit navigation settings.', '__plugin_txtd' ), '', [ 'response' => 403 ] );
	}
	check_admin_referer( 'novablocks_header_nav_settings' );
	$mode = isset( $_POST['editing_mode'] ) && 'block' === $_POST['editing_mode'] ? 'block' : 'classic';
	update_option( 'novablocks_header_nav_editing_mode', $mode );
	$failed = [];
	if ( 'block' === $mode ) {
		foreach ( novablocks_header_nav_locations() as $location ) {
			// New entity IDs unbind editors opened before the re-import. The
			// currently assigned menu, including classic edits, is the source.
			if ( ! novablocks_header_nav_seed_location( $location, true ) ) {
				$failed[] = $location;
			}
		}
	}
	update_option( 'novablocks_header_nav_import_errors', $failed );
	wp_safe_redirect( admin_url( 'themes.php?page=novablocks-header-navigation' ) );
	exit;
}

function novablocks_header_nav_settings_page(): void {
	if ( ! current_user_can( 'edit_theme_options' ) ) {
		return;
	}
	$mode = get_option( 'novablocks_header_nav_editing_mode', 'automatic' );
	echo '<div class="wrap"><h1>' . esc_html__( 'Header Navigation', '__plugin_txtd' ) . '</h1>';
	echo '<p>' . esc_html__( 'Existing classic menus stay in Appearance → Menus until you choose the header block editor. Empty header locations can use the block editor automatically.', '__plugin_txtd' ) . '</p>';
	novablocks_header_nav_menu_links();
	if ( get_option( 'novablocks_header_nav_import_errors', [] ) ) {
		echo '<div class="notice notice-warning inline" role="alert"><p>' . esc_html__( 'Some menus could not be imported. Review their plugin settings and assign a menu to any previously used header location before trying again.', '__plugin_txtd' ) . '</p></div>';
	}
	echo '<p>' . esc_html__( 'Menus with additional plugin settings stay in the classic editor. If your menus were converted by an earlier version, review their settings before using them; switching editors does not restore settings lost during an earlier conversion.', '__plugin_txtd' ) . '</p>';
	echo '<form method="post" action="' . esc_url( admin_url( 'admin-post.php' ) ) . '">';
	echo '<input type="hidden" name="action" value="novablocks_header_nav_settings">';
	wp_nonce_field( 'novablocks_header_nav_settings' );
	echo '<fieldset><legend>' . esc_html__( 'Choose a navigation editor (required)', '__plugin_txtd' ) . '</legend>';
	foreach ( [ 'classic' => __( 'Classic menus — keep the currently assigned menus and edit them in Appearance → Menus.', '__plugin_txtd' ), 'block' => __( 'Header block editor — import the currently assigned compatible menus into the header editor.', '__plugin_txtd' ) ] as $value => $label ) {
		echo '<p><label><input type="radio" name="editing_mode" required value="' . esc_attr( $value ) . '" ' . checked( $mode, $value, false ) . '> ' . esc_html( $label ) . '</label></p>';
	}
	echo '</fieldset><p>' . esc_html__( 'Applying block mode again imports your latest classic menu edits. Reopen the header editor afterward. A developer filter can override this setting.', '__plugin_txtd' ) . '</p>';
	submit_button( __( 'Apply navigation editor', '__plugin_txtd' ) );
	echo '</form></div>';
}

function novablocks_header_nav_menu_links(): void {
	$locations = get_nav_menu_locations();
	echo '<ul>';
	foreach ( novablocks_header_nav_locations() as $location ) {
		$id = (int) ( $locations[ $location ] ?? 0 );
		if ( ! $id ) {
			continue;
		}
		$menu = wp_get_nav_menu_object( $id );
		if ( ! $menu ) {
			continue;
		}
		$block = novablocks_header_nav_location_editing_enabled( $location );
		echo '<li>' . esc_html( ucfirst( $location ) . ': ' . $menu->name ) . ' — ';
		if ( $block ) {
			echo esc_html__( 'Managed by the header block editor. Choose Classic menus before editing it here.', '__plugin_txtd' ) . ' ';
		} else {
			echo esc_html__( 'Edit this assigned menu in Appearance → Menus.', '__plugin_txtd' ) . ' ';
		}
		echo '<a href="' . esc_url( admin_url( 'nav-menus.php?action=edit&menu=' . $id ) ) . '">' . esc_html__( 'View assigned menu', '__plugin_txtd' ) . '</a></li>';
	}
	echo '</ul>';
}

function novablocks_header_nav_menu_notice(): void {
	$screen = get_current_screen();
	if ( ! current_user_can( 'edit_theme_options' ) || ! $screen || 'nav-menus' !== $screen->id ) {
		return;
	}
	echo '<div class="notice notice-info"><p>' . esc_html__( 'Header navigation uses the menus assigned to its locations.', '__plugin_txtd' ) . ' <a href="' . esc_url( admin_url( 'themes.php?page=novablocks-header-navigation' ) ) . '">' . esc_html__( 'Choose the navigation editor', '__plugin_txtd' ) . '</a></p>';
	novablocks_header_nav_menu_links();
	echo '</div>';
}
