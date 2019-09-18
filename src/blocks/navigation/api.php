<?php
/*
Plugin Name: WP-REST-API V2 Menus
Version: 0.7.1
Description: Adding menus endpoints on WP REST API v2
Author: Claudio La Barbera
Author URI: https://thebatclaud.io
*/

/**
 * Get all registered menus
 * @return array List of menus with slug and description
 */
function wp_api_v2_menus_get_all_menus() {
	$menus = get_terms( 'nav_menu', array( 'hide_empty' => true ) );

	foreach ( $menus as $key => $menu ) {
		// check if there is acf installed
		if ( class_exists( 'acf' ) ) {
			$fields = get_fields( $menu );
			if ( ! empty( $fields ) ) {
				foreach ( $fields as $field_key => $item ) {
					// add all acf custom fields
					$menus[ $key ]->$field_key = $item;
				}
			}
		}
	}

	return $menus;
}

/**
 * Get all locations
 * @return array List of locations
 **/

function wp_api_v2_menu_get_all_locations() {
	$nav_menu_locations = get_nav_menu_locations();
	$locations          = new stdClass;
	foreach ( $nav_menu_locations as $location_slug => $menu_id ) {
		if ( get_term( $location_slug ) !== null ) {
			$locations->{$location_slug} = get_term( $location_slug );
		} else {
			$locations->{$location_slug} = new stdClass;
		}
		$locations->{$location_slug}->slug = $location_slug;
		$locations->{$location_slug}->menu = get_term( $menu_id );
	}

	return $locations;
}

/**
 * Get menu's data from his id
 *
 * @param array $data WP REST API data variable
 *
 * @return object Menu's data with his items
 */
function wp_api_v2_locations_get_menu_data( $data ) {
	// Create default empty object
	$menu = new stdClass;

	// this could be replaced with `if (has_nav_menu($data['id']))`
	if ( ( $locations = get_nav_menu_locations() ) && isset( $locations[ $data['id'] ] ) ) {
		// Replace default empty object with the location object
		$menu        = get_term( $locations[ $data['id'] ] );
		$menu->items = wp_api_v2_menus_get_menu_items( $locations[ $data['id'] ] );
	} else {
		return new WP_Error( 'not_found', 'No location has been found with this id or slug: `' . $data['id'] . '`. Please ensure you passed an existing location ID or location slug.', array( 'status' => 404 ) );
	}

	// check if there is acf installed
	if ( class_exists( 'acf' ) ) {
		$fields = get_fields( $menu );
		if ( ! empty( $fields ) ) {
			foreach ( $fields as $field_key => $item ) {
				// add all acf custom fields
				$menu->$field_key = $item;
			}
		}
	}

	return $menu;
}

/**
 * Check if a menu item is child of one of the menu's element passed as reference
 *
 * @param $parents Menu's items
 * @param $child Menu's item to check
 *
 * @return bool True if the parent is found, false otherwise
 */
function wp_api_v2_menus_dna_test( &$parents, $child ) {
	foreach ( $parents as $key => $item ) {
		if ( $child->menu_item_parent == $item->ID ) {
			if ( ! $item->child_items ) {
				$item->child_items = [];
			}
			array_push( $item->child_items, $child );
			return true;
		}

		if($item->child_items) {
			if(wp_api_v2_menus_dna_test($item->child_items, $child)) {
				return true;
			}
		}
	}

	return false;
}

/**
 * Retrieve items for a specific menu
 *
 * @param $id Menu id
 *
 * @return array List of menu items
 */
function wp_api_v2_menus_get_menu_items( $id ) {
	$menu_items = wp_get_nav_menu_items( $id );

	// check if there is acf installed
	if ( class_exists( 'acf' ) ) {
		foreach ( $menu_items as $menu_key => $menu_item ) {
			$fields = get_fields( $menu_item->ID );
			if ( ! empty( $fields ) ) {
				foreach ( $fields as $field_key => $item ) {
					// add all acf custom fields
					$menu_items[ $menu_key ]->$field_key = $item;
				}
			}
		}
	}

	// wordpress does not group child menu items with parent menu items
	$child_items = [];
	// pull all child menu items into separate object
	foreach ( $menu_items as $key => $item ) {
		if ( $item->menu_item_parent ) {
			array_push( $child_items, $item );
			unset( $menu_items[ $key ] );
		}
	}

	// push child items into their parent item in the original object
	do {
		foreach($child_items as $key => $child_item) {
			if(wp_api_v2_menus_dna_test($menu_items, $child_item)) {
				unset($child_items[$key]);
			}
		}
	} while(count($child_items));

	return array_values($menu_items);
}

/**
 * Get menu's data from his id.
 *    It ensures compatibility for previous versions when this endpoint
 *    was allowing locations id in place of menus id)
 *
 * @param array $data WP REST API data variable
 *
 * @return object Menu's data with his items
 */
function wp_api_v2_menus_get_menu_data( $data ) {
	// This ensure retro compatibility with versions `<= 0.5` when this endpoint
	//   was allowing locations id in place of menus id
	if ( has_nav_menu( $data['id'] ) ) {
		$menu = wp_api_v2_locations_get_menu_data( $data );
	} else if ( is_nav_menu( $data['id'] ) ) {
		if ( is_int( $data['id'] ) ) {
			$id = $data['id'];
		} else {
			$id = wp_get_nav_menu_object( $data['id'] );
		}
		$menu        = get_term( $id );
		$menu->items = wp_api_v2_menus_get_menu_items( $id );
	} else {
		return new WP_Error( 'not_found', 'No menu has been found with this id or slug: `' . $data['id'] . '`. Please ensure you passed an existing menu ID, menu slug, location ID or location slug.', array( 'status' => 404 ) );
	}

	// check if there is acf installed
	if ( class_exists( 'acf' ) ) {
		$fields = get_fields( $menu );
		if ( ! empty( $fields ) ) {
			foreach ( $fields as $field_key => $item ) {
				// add all acf custom fields
				$menu->$field_key = $item;
			}
		}
	}

	return $menu;
}

add_action( 'rest_api_init', function () {
	register_rest_route( 'menus/v1', '/menus', array(
		'methods'  => 'GET',
		'callback' => 'wp_api_v2_menus_get_all_menus',
	) );

	register_rest_route( 'menus/v1', '/menus/(?P<id>[a-zA-Z0-9_-]+)', array(
		'methods'  => 'GET',
		'callback' => 'wp_api_v2_menus_get_menu_data',
	) );

	register_rest_route( 'menus/v1', '/locations/(?P<id>[a-zA-Z0-9_-]+)', array(
		'methods'  => 'GET',
		'callback' => 'wp_api_v2_locations_get_menu_data',
	) );

	register_rest_route( 'menus/v1', '/locations', array(
		'methods'  => 'GET',
		'callback' => 'wp_api_v2_menu_get_all_locations',
	) );
} );
