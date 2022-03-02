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
		 * @param WP_Post|int|null $post Optional. The post who's comments header to render. Defaults to the current post.
		 * @param array            $args Optional. The arguments to consider when rendering.
		 */
		public function __construct( $post = null, array $args = [] ) {
			$this->post = get_post( $post, OBJECT );

			// Make sure defaults are in place.
			$this->args = wp_parse_args( $args, [
				// No defaults right now.
			] );
		}

		/**
		 * Entry point to render the comments header.
		 *
		 * @param array $args Optional.
		 *
		 * @return string
		 */
		public function render( array $args = [] ): string {
			// Render nothing without a proper post.
			if ( empty( $this->post ) ) {
				return '';
			}

			$starter_args = $this->parse_args( $args );

			// Check if we should actually render.
			if ( ! $this->should_render( $starter_args ) ) {
				return '';
			}

			/* ==================================
			 * RENDER THE COMMENTS STARTER MARKUP
			 */

			ob_start();

			// Register our hooks just before rendering.
			$this->register_hooks();

			$conversation_starter_user_id = get_post_meta( $this->post->ID, 'nb_conversation_starter_user_id', true );

			if ( empty( $conversation_starter_user_id ) ) {
				return '';
			}

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
						class="novablocks-conversation__starter-subtitle"><?php echo wp_kses( $conversation_starter_subtitle, wp_kses_allowed_html() ); ?></span>
				<?php } ?>

				<div class="novablocks-conversation__starter-message">
					<?php echo wp_kses( $conversation_starter_content, wp_kses_allowed_html() ); ?>
				</div>
			</div>

			<?php
			// Unregister our hooks to make sure this instance's logic only applies to this render.
			$this->unregister_hooks();

			return ob_get_clean();
		}

		protected function should_render( $args = [] ) {
			$should_render = true;

			// Do not render the starter section if the comments are not opened.
			if ( ! comments_open( $this->post->ID ) ) {
				$should_render = false;
			}

			return apply_filters( 'novablocks/comments/starter_should_render', $should_render, $this->post, $args );
		}

		protected function register_hooks() {
			add_filter( 'get_avatar', 'novablocks_maybe_inline_svg_avatar', 99, 6 );
		}

		protected function unregister_hooks() {
			remove_filter( 'get_avatar', 'novablocks_maybe_inline_svg_avatar', 99 );
		}

		/**
		 * Prepare the given rendering arguments by merging them with the existing ones in the instance.
		 *
		 * @param array $args
		 *
		 * @return array
		 */
		protected function parse_args( array $args ): array {
			return wp_parse_args( $args, $this->args );
		}
	}
}
