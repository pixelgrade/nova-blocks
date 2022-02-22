<?php

/**
 * Merge arrays recursively and distinct
 *
 * Merges any number of arrays / parameters recursively, replacing
 * entries with string keys with values from latter arrays.
 * If the entry or the next value to be assigned is an array, then it
 * automagically treats both arguments as an array.
 * Numeric entries are appended, not replaced, but only if they are
 * unique
 *
 * An entry can be specifically removed if in the same key entry in the right-hand arrays has a value of  null|`null`.
 *
 * @link   http://www.php.net/manual/en/function.array-merge-recursive.php#96201
 *
 * @param array ...     Variable list of arrays to recursively merge.
 *
 * @param array $base Initial array to merge.
 *
 * @return array
 *
 * @author Mark Roduner <mark.roduner@gmail.com>
 */
function novablocks_array_merge_recursive_distinct(): array {
	$arrays = func_get_args();
	$base   = array_shift( $arrays );
	if ( ! is_array( $base ) ) {
		$base = empty( $base ) ? [] : [ $base ];
	}
	foreach ( $arrays as $append ) {
		if ( ! is_array( $append ) ) {
			$append = [ $append ];
		}
		foreach ( $append as $key => $value ) {
			if ( ! array_key_exists( $key, $base ) && ! is_numeric( $key ) ) {
				$base[ $key ] = $value;
				continue;
			}

			if ( array_key_exists( $key, $base ) && ( null === $value || 'null' === $value ) ) {
				unset( $base[ $key ] );
				continue;
			}

			if ( is_array( $value ) || ( array_key_exists( $key, $base ) && is_array( $base[ $key ] ) ) ) {
				if ( ! isset( $base[ $key ] ) ) {
					$base[ $key ] = [];
				}
				$base[ $key ] = novablocks_array_merge_recursive_distinct( $base[ $key ], $value );
			} else if ( is_numeric( $key ) ) {
				if ( ! in_array( $value, $base ) ) {
					$base[] = $value;
				}
			} else {
				$base[ $key ] = $value;
			}
		}
	}

	return $base;
}

function novablocks_get_attributes_from_json( $path ) {
	$plugin_path = novablocks_get_plugin_path();
	$filename    = trailingslashit( $plugin_path ) . $path;
	if ( ! file_exists( $filename ) ) {
		return [];
	}

	return json_decode( file_get_contents( $filename ), true );
}

function novablocks_camel_case_to_kebab_case( string $string ): string {
	return strtolower( preg_replace( '%([A-Z])([a-z])%', '-\1\2', $string ) );
}

function novablocks_kebab_case_to_camel_case( string $string ): string {
	$str = str_replace( '-', '', ucwords( $string, '-' ) );

	return lcfirst( $str );
}

function novablocks_expand_categories_to_include_subcategories( $category_ids ) {
	$all_category_ids = $category_ids;

	foreach ( $category_ids as $category_id ) {
		$subcategories = get_terms( 'category', [
			'child_of' => $category_id,
		] );

		// Extract term IDs from subcategories.
		$subcategories_ids = array_map( function ( $term ) {
			return $term->term_id;
		}, $subcategories );

		$all_category_ids = array_merge( $all_category_ids, $subcategories_ids );
	}

	return $all_category_ids;
}

function novablocks_block_area_has_blocks( string $slug ): bool {
	$posts = get_posts( [
		'name'        => $slug,
		'post_type'   => 'block_area',
		'post_status' => 'publish',
		'numberposts' => 1,
		'fields'      => 'ids',
	] );

	if ( ! empty( $posts ) && has_blocks( reset( $posts ) ) ) {
		return true;
	}

	return false;
}

/**
 * Return a script for flexibly localizing data to a window property.
 *
 * Unlike wp_localize_script() that simply creates a variable and assigns it the value,
 * thus overwriting anything that may have been in that variable, we will output a script that
 * will test if the variable exists and only overwrite the first level nodes, not everything.
 *
 * @since 1.8.0
 *
 * @param string $object_name Name of the variable that will contain the data.
 * @param array  $l10n        Array of data to localize.
 *
 * @return string
 */

function novablocks_get_localize_to_window_script( string $object_name, array $l10n ): string {
	$script = "window.$object_name = window.$object_name || parent.$object_name || {};\n";

	foreach ( $l10n as $key => $value ) {
		if ( is_scalar( $value ) ) {
			$value = html_entity_decode( (string) $value, ENT_QUOTES, 'UTF-8' );
		}

		$script .= "$object_name.$key = " . wp_json_encode( $value ) . ";\n";
	}

	return $script;
}

function novablocks_get_customizer_link( $return_url = false, $extra_query_args = [] ): string {
	global $wp;


	if ( empty( $return_url ) ) {
		// Get the current frontend URL.
		$return_url = home_url( add_query_arg( [], $wp->request ) );
	}

	// Now get the Customizer URL.
	$link = wp_customize_url();

	$link = add_query_arg( 'return_url', rawurlencode( $return_url ), $link );

	if ( ! empty( $extra_query_args ) && is_array( $extra_query_args ) && ! wp_is_numeric_array( $extra_query_args ) ) {
		foreach ( $extra_query_args as $key => $value ) {
			$link = add_query_arg( rawurlencode( $key ), rawurlencode( utf8_uri_encode( $value ) ), $link );
		}
	}

	return $link;
}

function novablocks_merge_attributes_from_array( array $pathsArray ): array {
	$accumulator = [];

	foreach ( $pathsArray as $path ) {
		$attributes  = novablocks_get_attributes_from_json( $path );
		$accumulator = array_merge( $accumulator, $attributes );
	}

	return $accumulator;
}
