<?php
/**
 * Block Patterns
 *
 * @since   2.0.0
 * @license GPL-2.0-or-later
 * @package NovaBlocks
 */

/**
 * BLOCK PATTERNS
 *
 * #PRESENTATION — Visual storytelling
 * Headlines..............Hero banners, website intros, slideshows, CTAs, Media Cards → Hero, Image with text, Featuring
 * Features...............A list features for a service or product
 * Team...................Lists of team members
 * Testimonials...........Reviews
 * Gallery................Portfolio
 * Video..................Presentation blocks that include videos (Hero, one and two columns)
 *
 * Lists..................Various types of lists (eg. Features, Steps)
 *
 * #UTILITY
 * Location...............Maps, contact details → a section to show customers where your business is located
 * Food Menu..............Restaurants
 * FAQs...................Lists of questions and answers
 *
 *
 * #BLOG
 * Posts..................Blog articles
 *
 * #ECOMMERCE
 * Products.............Showcasing single or collection of products
 *
 */

/**
 * Registers block patterns and categories.
 *
 * @return void
 */
function novablocks_register_block_patterns() {
	$block_pattern_categories = [
		'novablocks/features'     => [ 'label' => __( 'Features', '__plugin_txtd' ) ],
		'novablocks/headlines'    => [ 'label' => __( 'Headlines', '__plugin_txtd' ) ],
		'novablocks/testimonials' => [ 'label' => __( 'Testimonials', '__plugin_txtd' ) ],
		'novablocks/team'         => [ 'label' => __( 'Team', '__plugin_txtd' ) ],
		'novablocks/location'     => [ 'label' => __( 'Location', '__plugin_txtd' ) ],
		'novablocks/posts'        => [ 'label' => __( 'Posts Collection', '__plugin_txtd' ) ],
	];

	/**
	 * Filters the NovaBlocks block pattern categories.
	 *
	 * @param array[] $block_pattern_categories {
	 *                                          An associative array of block pattern categories, keyed by category name.
	 *
	 * @type array[]  $properties               {
	 *         An array of block category properties.
	 *
	 * @type string   $label                    A human-readable label for the pattern category.
	 *     }
	 * }
	 */
	$block_pattern_categories = apply_filters( 'novablocks_block_pattern_categories', $block_pattern_categories );

	foreach ( $block_pattern_categories as $name => $properties ) {
		if ( ! WP_Block_Pattern_Categories_Registry::get_instance()->is_registered( $name ) ) {
			register_block_pattern_category( $name, $properties );
		}
	}

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
	$block_patterns = apply_filters( 'novablocks_block_patterns', $block_patterns );

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

add_action( 'init', 'novablocks_register_block_patterns', 10 );

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
