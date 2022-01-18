<?php
/**
 * Deprecated functionality that should be removed at some point.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * This is the pre WordPress 5.8 way of adding a block category.
 *
 * We use the existence of the WP_Block_Editor_Context class to detect WordPress 5.8+.
 */
if ( ! function_exists( 'novablocks_add_blocks_category_deprecated' ) && ! class_exists( 'WP_Block_Editor_Context' ) ) {

	function novablocks_add_blocks_category_deprecated( $categories, $post ): array {
		return array_merge(
			[
				[
					'slug'  => 'nova-blocks',
					'title' => 'Nova Blocks', // do not translate
				],
			],
			$categories
		);
	}

	add_filter( 'block_categories', 'novablocks_add_blocks_category_deprecated', 10, 2 );
}
