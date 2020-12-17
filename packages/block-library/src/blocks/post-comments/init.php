<?php
/**
 * Handle Post Comments block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Load the comments rendering logic.
require_once 'class-novablocks-comments-render.php';

// Load the comments functional logic.
require_once 'class-novablocks-comments-logic.php';

if ( ! function_exists ('novablocks_render_post_comments_block' ) ) {
	/**
	 * Entry point to render the block with the given attributes, content, and context.
	 *
	 * @param array $attributes
	 * @param string $content
	 * @param WP_Block $block
	 *
	 * @return string
	 */
	function novablocks_render_post_comments_block( $attributes, $content, $block ) {
		// Bail if we don't have a post ID.
		if ( empty( $block->context[ 'postId' ] ) ) {
			return '';
		}

		$output = '
<div class="novablocks-conversations">
	<div class="novablocks-conversations__container">';

		$output .= NovaBlocks_Comments_Render()->header->render( $block->context['postId'], $attributes, $content, $block );
		$output .= NovaBlocks_Comments_Render()->form->render( $block->context['postId'], $attributes, $content, $block );
		$output .= NovaBlocks_Comments_Render()->list->render( $block->context['postId'], $attributes, $content, $block );

		$output .= '
	</div><!-- .novablocks-conversations__container -->

	<div class="novablocks-conversations__notification-text">' . esc_html_e('Link copied to your clipboard', '__plugin_txtd'). '</div>
</div><!-- .novablocks-conversations -->';

		return $output;
	}
}
