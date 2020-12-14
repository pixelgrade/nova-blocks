<?php
/**
 * Handle Post Comments block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists ('novablocks_render_post_comments_block' ) ) {
	/**
	 * @param array $attributes
	 * @param string $content
	 * @param WP_Block $block
	 *
	 * @return false|string
	 */
	function novablocks_render_post_comments_block( $attributes, $content, $block ) {
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

		// Handle the block attributes by merging them with the defaults.
		$attributes = wp_parse_args( $attributes, [
				'commentsTitle' => esc_html__( 'Conversations', '__plugin_txtd' ),
				'noCommentsTitle' => esc_html__( 'Get the conversation going', '__plugin_txtd' ),
				'zeroCommentsSubtitle' => false,
				'oneCommentSubtitle' => esc_html__( 'One so far', '__plugin_txtd' ),
				'multipleCommentsSubtitle' => esc_html__( '%d', '__plugin_txtd' ),
				// Text to use when we want to differentiate between top-level comments (conversations) and replies.
				// Leave empty to not differentiate and use 'multipleCommentsSubtitle'.
				// The differentiation will take place only when there is an actual difference (e.g. not when all comments are top-level).
				/* translators: 1: The number of top-level comments, 2: The number of replies  */
				'multipleCommentsSubtitleWithDifferentiation' => __( '<span class="conversations-number">%1$d</span> with <span class="replies-number">%2$d</span> replies', '__plugin_txtd' ),
		] );

		ob_start();
		?>
		<div class="novablocks-conversations">
			<div class="novablocks-conversations__container">

				<?php
				// For now, pass the same info as the one received by the parent block.
				echo novablocks_conversation_starter_block( $attributes, $content, $block );

				$conversation_title = $attributes['noCommentsTitle'];

				$comments_count = get_comments_number( $post_id );
				if ( $comments_count > 0 ) {
					$conversation_title = $attributes['commentsTitle'];
				} ?>

				<h3 class="novablocks-conversations__header">
					<span class="novablocks-conversations__title"><?php echo wp_kses( $conversation_title, wp_kses_allowed_html() ); ?></span>
					<?php if ( $comments_count > 0 ) { ?>
					<span class="novablocks-conversations__comments-count"><?php
						// Check if we need to differentiate and have reasons to do so.
						if ( $comments_count > 1 // We need at least 2 comments.
						     && ! empty( $attributes['multipleCommentsSubtitleWithDifferentiation'] )
						     && false !== strpos( $attributes['multipleCommentsSubtitleWithDifferentiation'], '%1$d' )
						     && false !== strpos( $attributes['multipleCommentsSubtitleWithDifferentiation'], '%2$d' )
							 && ( $toplevelCommentsCount = (int) NovaBlocks_Comments::get_toplevel_comments_number( $post_id ) ) < $comments_count ) {

							// Sanitize.
							$attributes['multipleCommentsSubtitleWithDifferentiation'] = wp_kses( $attributes['multipleCommentsSubtitleWithDifferentiation'],
									array_map( '_wp_add_global_attributes',	[
											'span'       => array(
													'dir'      => true,
													'align'    => true,
													'lang'     => true,
													'xml:lang' => true,
											),
											'b'          => array(),
											'code'       => array(),
											'em'         => array(),
											'i'          => array(),
											's'          => array(),
											'strike'     => array(),
											'strong'     => array(),
									] ) );

							$comments_number_text = sprintf( $attributes['multipleCommentsSubtitleWithDifferentiation'],
									$toplevelCommentsCount,
									$comments_count - $toplevelCommentsCount
								);
							/**
							 * Apply the same filter as the core
							 *
							 * @see get_comments_number_text()
							 *
							 * @param string $comments_number_text
							 * @param int $comments_count
							 */
							echo apply_filters( 'comments_number', $comments_number_text, $comments_count );
						} else {
							// Just use the regular, core way of showing the comments number.
							comments_number( $attributes['zeroCommentsSubtitle'], $attributes['oneCommentSubtitle'], $attributes['multipleCommentsSubtitle'], $post_id );
						}?></span>
					<?php } ?>
				</h3><!-- .novablocks-conversations__header -->

				<?php if ( ! empty( $content ) ) { ?>
				<div class="novablocks-conversations__content">
					<?php echo $content; ?>
				</div>
				<?php } ?>

			</div><!-- .novablocks-conversations__container -->
			<div class="novablocks-conversations__notification-text">
				<?php _e('Link copied to your clipboard', '__plugin_txtd'); ?>
			</div>
		</div><!-- .novablocks-conversations -->
		<?php

		return ob_get_clean();
	}
}

if ( ! function_exists( 'novablocks_conversation_starter_block' ) ) {
	/**
	 * @param array $attributes
	 * @param string $content
	 * @param WP_Block $block
	 *
	 * @return false|string
	 */
	function novablocks_conversation_starter_block( $attributes, $content, $block ) {
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

		$conversation_starter_user_id = get_post_meta( $post_id, 'nb_conversation_starter_user_id', true );

		$conversation_starter_content  = get_post_meta( $post_id, 'nb_conversation_starter_content', true );
		// Replace any content tags present.
		$conversation_starter_content = NovaBlocks_Comments::replace_content_tags( $conversation_starter_content, $post_id, $conversation_starter_user_id );
		// At the minimum we need the content. The subtitle can be empty.
		if ( empty( $conversation_starter_content ) ) {
			return '';
		}

		$conversation_starter_subtitle = get_post_meta( $post_id, 'nb_conversation_starter_subtitle', true );
		// Replace any content tags present.
		$conversation_starter_subtitle = NovaBlocks_Comments::replace_content_tags( $conversation_starter_subtitle, $post_id, $conversation_starter_user_id );

		$conversation_starter_avatar = get_avatar( absint( $conversation_starter_user_id ), 120, '', '', array( 'class' => 'avatar', ) );

		ob_start(); ?>

		<div class="novablocks-conversation__starter <?php echo empty( $conversation_starter_avatar ) ? ' no-avatar' : ''; echo empty( $conversation_starter_subtitle ) ? ' no-subtitle' : ''; ?>">
			<?php if ( ! empty( $conversation_starter_avatar ) ) { ?>
			<div class="novablocks-conversation__starter-avatar">
				<?php echo $conversation_starter_avatar; ?>
			</div>
			<?php
			}

			if ( ! empty( $conversation_starter_subtitle ) ) { ?>
				<span class="novablocks-conversation__starter-subtitle text--small"><?php echo wp_kses( $conversation_starter_subtitle, wp_kses_allowed_html() ); ?></span>
			<?php } ?>

			<div class="novablocks-conversation__starter-message">
				<?php echo wp_kses( $conversation_starter_content, wp_kses_allowed_html() ); ?>
			</div>
		</div>

		<?php return ob_get_clean();
	}
}
