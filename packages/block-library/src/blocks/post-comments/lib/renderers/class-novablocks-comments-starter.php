<?php
/**
 * NovaBlocks_Comments_Starter Class
 *
 * @author   Pixelgrade
 * @package  NovaBlocks
 * @since    1.8.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'NovaBlocks_Comments_Starter' ) ) {

	/**
	 * The NovaBlocks Comments (Conversation) Starter rendering class
	 */
	class NovaBlocks_Comments_Starter {

		/**
		 * The post to render starter header for.
		 *
		 * @var WP_Post
		 */
		protected $post = null;

		/**
		 * The arguments to consider when rendering.
		 *
		 * These configure and adapt the behavior of the renderer.
		 *
		 * @var array
		 */
		protected $args = [];

		/**
		 * Instantiate a comments (conversation) starter renderer.
		 *
		 * @param WP_Post|int|null $post    Optional. The post who's comments header to render. Defaults to the current post.
		 * @param array            $args    Optional. The arguments to consider when rendering.
		 */
		public function __construct( $post = null, $args = [] ) {
			$post = get_post( $post, OBJECT );
			// Fail without a proper post.
			if ( empty( $post ) ) {
				if ( NOVABLOCKS_DEVELOPMENT_MODE ) {
					_doing_it_wrong( __METHOD__, esc_html__( 'Post not found for comments starter rendering.', '__plugin_txtd' ), '' );
				}

				return;
			}

			$this->post = $post;

			$this->args = wp_parse_args( $args, [
				// No defaults right now.
			] );
		}

		/**
		 * Entry point to render the comments header.
		 *
		 * @param array  $args    Optional.
		 *
		 * @return string
		 */
		public function render( $args = [] ) {
			// Render nothing without a proper post.
			if ( empty( $this->post ) ) {
				return '';
			}

			$starter_args = $this->parse_args( $args );

			/* ==================================
			 * RENDER THE COMMENTS STARTER MARKUP
			 */

			ob_start();

			$conversation_starter_user_id = get_post_meta( $this->post->ID, 'nb_conversation_starter_user_id', true );

			$conversation_starter_content = get_post_meta( $this->post->ID, 'nb_conversation_starter_content', true );
			// Replace any content tags present.
			$conversation_starter_content = novablocks_replace_content_tags( $conversation_starter_content, $this->post->ID, $conversation_starter_user_id );
			// At the minimum we need the content. The subtitle can be empty.
			if ( empty( $conversation_starter_content ) ) {
				return '';
			}

			$conversation_starter_subtitle = get_post_meta( $this->post->ID, 'nb_conversation_starter_subtitle', true );
			// Replace any content tags present.
			$conversation_starter_subtitle = novablocks_replace_content_tags( $conversation_starter_subtitle, $this->post->ID, $conversation_starter_user_id );

			$conversation_starter_avatar = get_avatar( absint( $conversation_starter_user_id ), 120, '', '', [ 'class' => 'avatar', ] );
			?>

			<div
				class="novablocks-conversation__starter <?php echo empty( $conversation_starter_avatar ) ? ' no-avatar' : '';
				echo empty( $conversation_starter_subtitle ) ? ' no-subtitle' : ''; ?>">
				<?php if ( ! empty( $conversation_starter_avatar ) ) { ?>
					<div class="novablocks-conversation__starter-avatar">
						<?php echo $conversation_starter_avatar; ?>
					</div>
					<?php
				}

				if ( ! empty( $conversation_starter_subtitle ) ) { ?>
					<span
						class="novablocks-conversation__starter-subtitle text--small"><?php echo wp_kses( $conversation_starter_subtitle, wp_kses_allowed_html() ); ?></span>
				<?php } ?>

				<div class="novablocks-conversation__starter-message">
					<?php echo wp_kses( $conversation_starter_content, wp_kses_allowed_html() ); ?>
				</div>
			</div>

			<?php

			return ob_get_clean();
		}

		/**
		 * Prepare the given rendering arguments by merging them with the existing ones in the instance.
		 *
		 * @param array $args
		 *
		 * @return array
		 */
		protected function parse_args( $args ) {
			$args = wp_parse_args( $args, $this->args );

			return $args;
		}
	}
}
