<?php

/**
 * Handle the Logo block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_post_navigation_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/post-navigation/attributes.json',
		'packages/block-editor/src/filters/with-space-and-sizing/attributes.json',
	] );

}

if ( ! function_exists( 'novablocks_render_post_navigation_block' ) ) {

	/**
	 * Entry point to render the block with the given attributes, content, and context.
	 *
	 * @param array $attributes
	 * @param string $content
	 * @param WP_Block $block
	 *
	 * @return false|string
	 * @see \WP_Block::render()
	 *
	 */
	function novablocks_render_post_navigation_block( array $attributes, string $content, WP_Block $block ) {
		// We assume we are in some sort of preview context (like in the Site Editor).
		if ( empty( $block->context[ 'postId' ] ) ) {
			return esc_html__( 'Post navigation', '__plugin_txtd' );
		}

		$post = get_post( $block->context['postId'] );
		if ( empty( $post ) ) {
			return '';
		}

		$attributes_config = novablocks_get_post_navigation_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$spacingProps = array_merge(
			novablocks_get_spacing_css( $attributes ),
			novablocks_get_sizing_css( $attributes )
		);

		$style = join( '; ', $spacingProps ) . '; ';

		return '<div class="nb-post-navigation" style="' . $style . '">' .
			novablocks_get_the_post_navigation( [], $attributes ) .
		'</div>';
	}
}


if ( ! function_exists( 'novablocks_get_the_post_navigation' ) ) {

	/**
	 * Retrieves the navigation to next/previous post, when applicable.
	 *
	 * @param array       $args               {
	 *                                        Optional. Default post navigation arguments. Default empty array.
	 *
	 * @type string       $prev_text          Anchor text to display in the previous post link. Default '%title'.
	 * @type string       $next_text          Anchor text to display in the next post link. Default '%title'.
	 * @type bool         $in_same_term       Whether link should be in a same taxonomy term. Default false.
	 * @type array|string $excluded_terms     Array or comma-separated list of excluded term IDs. Default empty.
	 * @type string       $taxonomy           Taxonomy, if `$in_same_term` is true. Default 'category'.
	 * @type string       $screen_reader_text Screen reader text for nav element. Default 'Post navigation'.
	 * }
	 * @return string Markup for post links.
	 */
	function novablocks_get_the_post_navigation( array $args = [], array $attributes = [] ): string {

		$args = wp_parse_args(
			$args, [
				'prev_text'          => '%title',
				'next_text'          => '%title',
				'in_same_term'       => false,
				'excluded_terms'     => '',
				'taxonomy'           => 'category',
				'screen_reader_text' => esc_html__( 'Post navigation', '__theme_txtd' ),
			]
		);

		$navigation = '';

		$previous = get_previous_post_link(
			'<div class="post-navigation__link post-navigation__link--previous"><span class="post-navigation__link-label  post-navigation__link-label--previous">' . esc_html__( 'Previous article', '__theme_txtd' ) . '</span><span class="post-navigation__post-title  post-navigation__post-title--previous">%link</span></div>',
			$args['prev_text'],
			$args['in_same_term'],
			$args['excluded_terms'],
			$args['taxonomy']
		);

		$next = get_next_post_link(
			'<div class="post-navigation__link post-navigation__link--next"><span class="post-navigation__link-label  post-navigation__link-label--next">' . esc_html__( 'Next article', '__theme_txtd' ) . '</span><span class="post-navigation__post-title  post-navigation__post-title--next">%link</span></div>',
			$args['next_text'],
			$args['in_same_term'],
			$args['excluded_terms'],
			$args['taxonomy']
		);

		// Only add markup if there's somewhere to navigate to.
		if ( $previous || $next ) {
			$navigation = _navigation_markup( $previous . $next, 'post-navigation', $args['screen_reader_text'] );
		}

		return $navigation;
	}
}
