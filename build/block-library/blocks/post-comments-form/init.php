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

		if ( empty( $block->context['postId'] ) ) {
			return '';
		}

		ob_start();

		// To be able to accurately determine the post this comment form applies (eg. in filters), we will use this global.
		$GLOBALS['nb_current_comment_form_post_id'] = absint( $block->context['postId'] );
		// We will also make available the block attributes.
		$GLOBALS['nb_current_comment_form_block_attributes'] = $attributes;

		comment_form( [], absint( $block->context['postId'] ) );

		// Cleanup.
		unset( $GLOBALS['nb_current_comment_form_post_id'] );
		unset( $GLOBALS['nb_current_comment_form_block_attributes'] );

		return ob_get_clean();
	}
}
