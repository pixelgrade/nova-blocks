<?php
/**
 * Block Patterns
 *
 * @since   2.0.0
 * @license GPL-2.0-or-later
 * @package NovaBlocks
 */

/**
 * Registers block patterns categories.
 *
 * @return void
 */
function novablocks_register_block_patterns_categories() {
	$block_pattern_categories = [
		'features'     => [ 'label' => _x( 'Features', 'Block pattern category', '__plugin_txtd' ) ],
		'headlines'    => [ 'label' => _x( 'Headlines', 'Block pattern category', '__plugin_txtd' ) ],
		'testimonials' => [ 'label' => _x( 'Testimonials', 'Block pattern category', '__plugin_txtd' ) ],
		'team'         => [ 'label' => _x( 'Team', 'Block pattern category', '__plugin_txtd' ) ],
		'location'     => [ 'label' => _x( 'Location', 'Block pattern category', '__plugin_txtd' ) ],
		'query'        => [ 'label' => _x( 'Posts Collection', 'Block pattern category', '__plugin_txtd' ) ],
		'pages'        => [ 'label' => _x( 'Pages', 'Block pattern category', '__plugin_txtd' ) ],

		'header'       => [ 'label' => _x( 'Layout: Header', 'Block pattern category', '__plugin_txtd' ) ],
		'footer'       => [ 'label' => _x( 'Layout: Footer', 'Block pattern category', '__plugin_txtd' ) ],
	];

	/**
	 * Filters the NovaBlocks block patterns categories.
	 *
	 * @param array[] $block_pattern_categories {
	 *                                          An associative array of block patterns categories, keyed by the category name.
	 *
	 * @type array[]  $properties               {
	 *         An array of block patterns category properties.
	 *
	 * @type string   $label                    A human-readable label for the block patterns category.
	 *     }
	 * }
	 */
	$block_pattern_categories = apply_filters( 'novablocks/block_patterns_categories', $block_pattern_categories );

	foreach ( $block_pattern_categories as $name => $properties ) {
		if ( ! WP_Block_Pattern_Categories_Registry::get_instance()->is_registered( $name ) ) {
			register_block_pattern_category( $name, $properties );
		}
	}
}

add_action( 'init', 'novablocks_register_block_patterns_categories', 10 );

/**
 * Registers block patterns.
 *
 * @return void
 */
function novablocks_register_block_patterns() {

	// Find all available block patterns files.
	$block_patterns = _novablocks_get_block_patterns_files( trailingslashit( novablocks_get_plugin_path() ) . 'lib/patterns' );

	/**
	 * Filters the theme block patterns.
	 *
	 * @param array  $block_patterns {
	 *                               List of block patterns keyed by their name/slug.
	 *
	 * @type array[] $properties     {
	 *         An array of block pattern properties.
	 *
	 * @type string  $slug           The block pattern name (as extracted from its PHP filename.)
	 * @type string  $path           The block pattern file absolute path.
	 *     }
	 * }
	 */
	$block_patterns = apply_filters( 'novablocks/block_patterns', $block_patterns );

	foreach ( $block_patterns as $block_pattern ) {
		if ( empty( $block_pattern['slug'] ) || empty( $block_pattern['path'] ) || ! file_exists( $block_pattern['path'] ) ) {
			continue;
		}

		register_block_pattern(
			'novablocks/' . $block_pattern['slug'],
			require $block_pattern['path']
		);
	}
}

// Status: disable local Block Patterns, remaining to be used only those from the Cloud.
// add_action( 'init', 'novablocks_register_block_patterns', 12 );

/**
 * Finds all block patterns in a certain directory.
 *
 * @access private
 *
 * @param string $base_directory The directory to search into.
 *
 * @return array A list of file details to all block pattern files.
 */
function _novablocks_get_block_patterns_files( string $base_directory ): array {
	$file_list = [];
	if ( file_exists( $base_directory ) ) {
		$nested_files         = new \RecursiveIteratorIterator( new \RecursiveDirectoryIterator( $base_directory ) );
		$nested_pattern_files = new \RegexIterator( $nested_files, '/^.+\.php$/i', \RecursiveRegexIterator::GET_MATCH );
		foreach ( $nested_pattern_files as $path => $file ) {
			$pattern_slug               = substr(
				$path,
				// Starting position of slug.
				strpos( $path, $base_directory . DIRECTORY_SEPARATOR ) + 1 + strlen( $base_directory ),
				// Subtract ending '.php'.
				- 4
			);
			$file_list[ $pattern_slug ] = [
				'slug' => $pattern_slug,
				'path' => $path,
			];
		}
	}

	return $file_list;
}
