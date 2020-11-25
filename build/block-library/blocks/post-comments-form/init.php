<?php
/**
 * Handle Post Comments Form block server logic.
 */

/**
 * Renders the `core/post-comments-form` block on the server.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 * @return string Returns the filtered post comments form for the current post.
 */

if ( ! function_exists( 'novablocks_render_post_comments_form_block' ) ) {
	function novablocks_render_post_comments_form_block( $attributes, $content, $block ) {

		if ( ! isset( $block->context['postId'] ) ) {
			return '';
		}

		$args = NovaBlocks_Comments::novablocks_comment_form_args();

		ob_start();

		comment_form( $args, $block->context['postId'] );

		return ob_get_clean();
	}
}
