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

function novablocks_get_post_comments_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-editor/src/filters/with-space-and-sizing/attributes.json',
	] );

}


if ( ! function_exists( 'novablocks_render_post_comments_block' ) ) {
	/**
	 * Entry point to render the block with the given attributes, content, and context.
	 *
	 * @see \WP_Block::render()
	 *
	 * @param array    $attributes
	 * @param string   $content
	 * @param WP_Block $block
	 *
	 * @return string
	 */
	function novablocks_render_post_comments_block( array $attributes, string $content, WP_Block $block ): string {
		$attributes_config = novablocks_get_post_comments_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		// Bail if we don't have a post ID.
		if ( empty( $block->context[ 'postId' ] ) ) {
			return '';
		}

		if ( ! apply_filters( 'novablocks/comments/block_should_render', true, $block->context[ 'postId' ], $attributes, $block ) ) {
			return '';
		}

		// Maybe enqueue frontend-only scripts.
		novablocks_maybe_enqueue_block_frontend_scripts( $block );

		$post_comments_renderer = new NovaBlocks_Comments_Renderer( $block->context[ 'postId' ], $attributes, $content );

		$classes = array( 'novablocks-conversations' );

		$spacingProps = array_merge(
			novablocks_get_spacing_css( $attributes ),
			novablocks_get_sizing_css( $attributes )
		);

		$style = join( '; ', $spacingProps ) . '; ';

		$before = '
<div class="' . join( ' ', $classes ) . '" id="comments" style="' . $style . '">
	<div class="novablocks-conversations__container">';
		$after = '
	</div><!-- .novablocks-conversations__container -->

	<div class="novablocks-conversations__notification-text"><span>' . esc_html__('Link copied to your clipboard', '__plugin_txtd'). '</span></div>
</div><!-- .novablocks-conversations -->';

		/* ============================
		 * RENDER THE COMMENTS SECTIONS
		 */
		$output = '';

		$post = get_post( $block->context['postId'], OBJECT );

		// We have a special case when we will not render anything except for a message, if a message is given.
		if ( ! empty( $post )
		     && ! comments_open( $post->ID )
		     && $post->comment_count == 0 ) {

			if ( ! empty( $post_comments_renderer->get_arg( 'commentsClosedMessage' ) ) ) {
				$output = '<p class="comments-closed comments-closed__no-comments">' . $post_comments_renderer->get_arg( 'commentsClosedMessage' ) . '</p>';
				$output = $before . $output . $after;
			}

			return trim( $output );
		}

		$output = $post_comments_renderer->render( 'starter' );
		$output .= $post_comments_renderer->render( 'header' );
		$output .= $post_comments_renderer->render( 'form' );
		$output .= $post_comments_renderer->render( 'list' );

		// Add another form button after the comments list when we have a certain number of comments.
		if ( ! empty( $post ) ) {
			ob_start();
			$listEndCommentFormAfterNumComments = $post_comments_renderer->get_arg( 'listEndCommentFormAfterNumComments' );
			if ( comments_open( $post->ID )
			     && ! empty( $listEndCommentFormAfterNumComments )
			     && $post_comments_renderer->list->get_comments_count() >= absint( $listEndCommentFormAfterNumComments ) ) {

				$post_comments_renderer->form->the_form_button();
			}

			// Display the message about further comments or replies not allowed.
			if ( ! comments_open( $post->ID )
			     && $post->comment_count > 0
			     && ! empty( $post_comments_renderer->get_arg( 'commentsNoFurtherCommentsMessage' ) ) ) { ?>

				<p class="comments-closed comments-closed__no-further-comments"><?php echo $post_comments_renderer->get_arg( 'commentsNoFurtherCommentsMessage' ); ?></p>

			<?php }

			$output .= ob_get_clean();
		}

		// If we had output, wrap it in the $before and $after.
		if ( ! empty( trim( $output ) ) ) {
			$output = $before . $output . $after;
		}

		return trim( $output );
	}
}

if ( ! function_exists ('novablocks_replace_content_tags' ) ) {
	/**
	 * Replace any content tags present in the content.
	 *
	 * @param string   $content
	 * @param int|null $post_id
	 * @param int|null $user_id
	 *
	 * @return string
	 */
	function novablocks_replace_content_tags( string $content, int $post_id = null, int $user_id = null ): string {
		$original_content = $content;

		// Allow others to alter the content before we do our work
		$content = apply_filters( 'novablocks/before_parse_content_tags', $content, $post_id, $user_id );

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
					$user_id = $authordata->ID ?? false;
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
		return apply_filters( 'novablocks/after_parse_content_tags', $content, $original_content, $post_id, $user_id );
	}
}

if ( ! function_exists ('novablocks_maybe_inline_svg_avatar' ) ) {
	function novablocks_maybe_inline_svg_avatar( $avatar, $id_or_email, $size, $default, $alt, $args ) {
		// We will rely on the URL passed in the arguments.
		if ( empty( $args['url'] ) ) {
			// Bail if no URL.
			return $avatar;
		}

		if ( false !== strpos( $avatar, '<svg' ) ) {
			// Bail if there is already an inline svg in the avatar.
			return $avatar;
		}

		if ( ! class_exists( 'DOMDocument' ) ) {
			// Bail if we don't have the PHP DOM extension.
			return $avatar;
		}

		$mime_type = wp_check_filetype( $args['url'], [
			'svg'  => 'image/svg+xml',
			'svgz' => 'image/svg+xml',
		] );
		if ( empty( $mime_type['type'] ) || 'image/svg+xml' !== $mime_type['type'] ) {
			// Bail if this is not a proper SVG.
			return $avatar;
		}

		$upload_dir_details = wp_get_upload_dir();
		if ( ! empty( $upload_dir_details ['baseurl'] )
		     && ! empty( $upload_dir_details ['basedir'] )
		     && 0 === strpos( $args['url'], $upload_dir_details['baseurl'] ) ) {

			// We are dealing only with URLs to local SVG files.
			$file_path     = str_replace( $upload_dir_details['baseurl'], $upload_dir_details ['basedir'], $args['url'] );
			$file_contents = file_get_contents( $file_path );
			if ( ! $file_contents ) {
				return $avatar;
			}

			$svgdoc = new DOMDocument();
			$svgdoc->loadXML( $file_contents );
			$svg = $svgdoc->getElementsByTagName( 'svg' );
			if ( empty( $svg ) ) {
				// Bail if there was no <svg> in the file contents.
				return $avatar;
			}

			// Now we will transfer the class,width, and height attribute from the received avatar markup to the <svg> element.
			$avatardoc = new DOMDocument();
			$avatardoc->loadHTML( $avatar );
			$img = $avatardoc->getElementsByTagName( 'img' );
			if ( ! empty( $img ) ) {
				$classes = $img[0]->getAttribute( 'class' );
				$classes .= ' inlined-svg';
				$svg[0]->setAttribute( 'class', $classes );

				$width = $img[0]->getAttribute( 'width' );
				$svg[0]->setAttribute( 'width', $width );
				$height = $img[0]->getAttribute( 'height' );
				$svg[0]->setAttribute( 'height', $height );

				// Set a role to the svg.
				$svg[0]->setAttribute( 'role', 'img' );

				// Set a ARIA label to the svg.
				$svg[0]->setAttribute( 'aria-label', 'avatar' );
			}

			return $svgdoc->saveHTML( $svg[0] );
		}

		return $avatar;
	}
}
