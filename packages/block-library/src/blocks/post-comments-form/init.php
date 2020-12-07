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
		// Bail if we don't have a post ID.
		if ( empty( $block->context[ 'postId' ] ) ) {
			return '';
		}

		$post = get_post( absint( $block->context[ 'postId' ] ) );
		// Bail if we couldn't find the post.
		if ( empty( $post ) ) {
			return '';
		}

		$post_id = $post->ID;

		ob_start();

		// To be able to accurately determine the post this comment form applies to (eg. in filters), we will use this global.
		$GLOBALS['nb_current_comment_form_post_id'] = $post_id;
		// We will also make available the block attributes.
		$GLOBALS['nb_current_comment_form_block_attributes'] = $attributes;

		comment_form( [], $post_id );

		// Cleanup to make sure these values are one-time use.
		unset( $GLOBALS['nb_current_comment_form_post_id'] );
		unset( $GLOBALS['nb_current_comment_form_block_attributes'] );

		return ob_get_clean();
	}
}
