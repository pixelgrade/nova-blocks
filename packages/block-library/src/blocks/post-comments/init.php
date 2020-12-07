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
					<span class="novablocks-conversations__title"><?php echo wp_kses( $conversation_title, '__plugin_txtd', wp_kses_allowed_html() ) ?></span>
					<?php if ( $comments_count > 0 ) { ?>
					<span class="novablocks-conversations__comments-count">
						<?php printf( _nx( 'One Comment', '%1$s Comments', $comments_count, 'conversations title count', '__plugin_txtd' ), number_format_i18n( $comments_count ) ); ?>
					</span>
					<?php } ?>
				</h3><!-- .novablocks-conversations__header -->

				<?php if ( ! empty( $content ) ) { ?>
				<div class="novablocks-conversations__content">
					<?php echo $content; ?>
				</div>
				<?php } ?>

			</div><!-- .novablocks-conversations__container -->
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