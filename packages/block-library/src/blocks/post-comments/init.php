<?php
/**
 * Handle Post Comments block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Load the comments rendering logic.
require_once 'lib/class-novablocks-comments-renderer.php';

// Load the comments functional logic.
require_once 'lib/class-novablocks-comments-logic.php';

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

		$post_comments_renderer = new NovaBlocks_Comments_Renderer( $block->context[ 'postId' ], $attributes, $content );

		$before = '
<div class="novablocks-conversations">
	<div class="novablocks-conversations__container">';
		$after = '
	</div><!-- .novablocks-conversations__container -->

	<div class="novablocks-conversations__notification-text">' . esc_html__('Link copied to your clipboard', '__plugin_txtd'). '</div>
</div><!-- .novablocks-conversations -->';

		$output = $post_comments_renderer->render( 'starter' );
		$output .= $post_comments_renderer->render( 'header' );
		$output .= $post_comments_renderer->render( 'form' );
		$output .= $post_comments_renderer->render( 'list' );

		// Add another form button after the comments list when we have a certain number of comments.
		$post = get_post( $block->context['postId'], OBJECT );
		if ( ! empty( $post ) ) {

			ob_start();

			if ( comments_open( $post->ID )
			     && ! empty( $attributes['listEndCommentFormAfterNumComments'] )
			     && count( $post_comments_renderer->list->comments( $attributes ) ) >= absint( $attributes['listEndCommentFormAfterNumComments'] ) ) {

				$post_comments_renderer->form->the_form_button( $attributes );
			}

			if ( ! comments_open( $post->ID ) ) { ?>
				<p class="comments-closed"><?php echo $attributes['commentsClosedMessage']; ?></p>
			<?php }

			$output .= ob_get_clean();
		}

		if ( ! empty( trim( $output ) ) ) {
			$output = $before . $output . $after;
		}

		return $output;
	}
}

if ( ! function_exists ('novablocks_replace_content_tags' ) ) {
	/**
	 * Replace any content tags present in the content.
	 *
	 * @param string $content
	 * @param int    $post_id
	 * @param int    $user_id
	 *
	 * @return string
	 */
	function novablocks_replace_content_tags( $content, $post_id = null, $user_id = null ) {
		$original_content = $content;

		// Allow others to alter the content before we do our work
		$content = apply_filters( 'novablocks_before_parse_content_tags', $content, $post_id, $user_id );

		// Now we will replace all the supported tags with their value
		// %year%
		$content = str_replace( '%year%', date( 'Y' ), $content );

		if ( empty( $post_id ) ) {
			// We need to get the current ID in a more global manner.
			$current_object_id = get_queried_object_id();
			$current_post      = get_post( $current_object_id );
			if ( ! empty( $current_post ) ) {
				$post_id = $current_post->ID;
			}
		}

		// %post_title%
		$content = str_replace( '%post_title%', get_the_title( $post_id ), $content );

		if ( false !== strpos( $content, '%author%' ) ||
		     false !== strpos( $content, '%author_first_name%' ) ||
		     false !== strpos( $content, '%author_last_name%' ) ||
		     false !== strpos( $content, '%author_display_name%' ) ) {

			if ( empty( $user_id ) ) {
				if ( ! empty( $current_post->post_author ) ) {
					$user_id = $current_post->post_author;
				} else {
					global $authordata;
					$user_id = isset( $authordata->ID ) ? $authordata->ID : false;
				}
			}

			if ( ! empty( $user_id ) ) {
				// %author_first_name%
				$content = str_replace( '%author_first_name%', get_the_author_meta( 'first_name', $user_id ), $content );
				// %author_last_name%
				$content = str_replace( '%author_last_name%', get_the_author_meta( 'last_name', $user_id ), $content );
				// %author% or %author_display_name%
				$content = str_replace( [
					'%author%',
					'%author_display_name%'
				], get_the_author_meta( 'display_name', $user_id ), $content );
			}
		}

		// Allow others to alter the content after we did our work
		return apply_filters( 'novablocks_after_parse_content_tags', $content, $original_content, $post_id, $user_id );
	}
}
