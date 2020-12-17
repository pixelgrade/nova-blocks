<?php
/**
 * NovaBlocks_Comments_Header Class
 *
 * @author   Pixelgrade
 * @package  NovaBlocks
 * @since    1.8.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'NovaBlocks_Comments_Header' ) ) {

	/**
	 * The NovaBlocks Comments Form rendering class
	 */
	class NovaBlocks_Comments_Header {


		/**
		 * Instance of this class (the singleton pattern).
		 * @since    1.8.0
		 * @var      NovaBlocks_Comments_Header
		 */
		protected static $_instance = null;


		public function __construct() {
			// Maybe do some checks before initializing the logic.
			$this->init();
		}

		/**
		 * Initialize the logic.
		 */
		private function init() {
		}

		/**
		 * Entry point to render the comments header with the block-given attributes, content, and context.
		 *
		 * @param WP_Post|int|null $post
		 * @param array $attributes
		 * @param string $content
		 * @param WP_Block $block
		 *
		 * @return string
		 */
		public function render( $post = null, $attributes = [], $content = '', $block = null ) {
			$post = get_post( $post );
			// Render nothing without a proper post.
			if ( empty( $post ) ) {
				return '';
			}

			$header_attributes = $this->parse_block_attributes( $attributes );

			/* =================================
			 * RENDER THE COMMENTS HEADER MARKUP
			 */

			ob_start();
			/*
			 * THE CONVERSATION STARTER SECTION
			 */
			$this->the_conversation_starter_section( $post->ID );

			/*
			 * THE CONVERSATIONS TITLE SECTION
			 */
			$conversation_title = $header_attributes['noCommentsTitle'];

			$comments_count = get_comments_number( $post->ID );
			if ( $comments_count > 0 ) {
				$conversation_title = $header_attributes['commentsTitle'];
			} ?>

			<h3 class="novablocks-conversations__header">
				<span class="novablocks-conversations__title"><?php echo wp_kses( $conversation_title, wp_kses_allowed_html() ); ?></span>
				<span class="novablocks-conversations__comments-count"><?php
					// Check if we need to differentiate and have reasons to do so.
					if ( $comments_count > 1 // We need at least 2 comments.
					     && ! empty( $header_attributes['multipleCommentsSubtitleWithDifferentiation'] )
					     && false !== strpos( $header_attributes['multipleCommentsSubtitleWithDifferentiation'], '%1$d' )
					     && false !== strpos( $header_attributes['multipleCommentsSubtitleWithDifferentiation'], '%2$d' )
					     && ( $toplevelCommentsCount = (int) NovaBlocks_Comments_Render::get_toplevel_comments_number( $post->ID ) ) < $comments_count ) {

						// Sanitize.
						$header_attributes['multipleCommentsSubtitleWithDifferentiation'] = wp_kses( $header_attributes['multipleCommentsSubtitleWithDifferentiation'],
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

						$comments_number_text = sprintf( $header_attributes['multipleCommentsSubtitleWithDifferentiation'],
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
						comments_number( $header_attributes['zeroCommentsSubtitle'], $header_attributes['oneCommentSubtitle'], $header_attributes['multipleCommentsSubtitle'], $post->ID );
					} ?></span>
			</h3><!-- .novablocks-conversations__header -->

			<?php if ( ! empty( $content ) ) { ?>
				<div class="novablocks-conversations__content">
					<?php echo $content; ?>
				</div>
			<?php }

			return ob_get_clean();
		}

		/**
		 * @param int $post_id
		 *
		 * @return void
		 */
		public function the_conversation_starter_section( $post_id ) {
			$conversation_starter_user_id = get_post_meta( $post_id, 'nb_conversation_starter_user_id', true );

			$conversation_starter_content  = get_post_meta( $post_id, 'nb_conversation_starter_content', true );
			// Replace any content tags present.
			$conversation_starter_content = NovaBlocks_Comments_Render::replace_content_tags( $conversation_starter_content, $post_id, $conversation_starter_user_id );
			// At the minimum we need the content. The subtitle can be empty.
			if ( empty( $conversation_starter_content ) ) {
				return;
			}

			$conversation_starter_subtitle = get_post_meta( $post_id, 'nb_conversation_starter_subtitle', true );
			// Replace any content tags present.
			$conversation_starter_subtitle = NovaBlocks_Comments_Render::replace_content_tags( $conversation_starter_subtitle, $post_id, $conversation_starter_user_id );

			$conversation_starter_avatar = get_avatar( absint( $conversation_starter_user_id ), 120, '', '', array( 'class' => 'avatar', ) );

			?>

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

			<?php
		}

		protected function parse_block_attributes( $attributes ) {
			// Handle the block attributes by merging them with the defaults.
			$attributes = wp_parse_args( $attributes, [
				'commentsTitle' => esc_html__( 'Conversations', '__plugin_txtd' ),
				'noCommentsTitle' => esc_html__( 'Start the conversation', '__plugin_txtd' ),
				// Do not show anything when there are no comments since we will use a different comments title.
				'zeroCommentsSubtitle' => '',
				'oneCommentSubtitle' => esc_html__( 'One so far', '__plugin_txtd' ),
				'multipleCommentsSubtitle' => esc_html__( '%d comments', '__plugin_txtd' ),
				// Text to use when we want to differentiate between top-level comments (conversations) and replies.
				// Leave empty to not differentiate and use 'multipleCommentsSubtitle'.
				// The differentiation will take place only when there is an actual difference (e.g. not when all comments are top-level).
				/* translators: 1: The number of top-level comments, 2: The number of replies  */
				'multipleCommentsSubtitleWithDifferentiation' =>
					__( '<span class="conversations-number">%1$d</span> with <span class="replies-number">%2$d</span> replies', '__plugin_txtd' ),
			] );

			return $attributes;
		}

		/**
		 * Main NovaBlocks_Comments_Header Instance
		 *
		 * Ensures only one instance of NovaBlocks_Comments_Header is loaded or can be loaded.
		 *
		 * @since  1.8.0
		 * @static
		 *
		 * @see    NovaBlocks_Comments_Header()
		 * @return NovaBlocks_Comments_Header Main NovaBlocks_Comments_Header instance
		 */
		public static function instance( ) {
			// If the single instance hasn't been set, set it now.
			if ( is_null( self::$_instance ) ) {
				self::$_instance = new self();
			}

			return self::$_instance;
		}

		/**
		 * Cloning is forbidden.
		 *
		 * @since 1.8.0
		 */
		public function __clone() {

			_doing_it_wrong( __FUNCTION__, esc_html__( 'You should not do that!', '__plugin_txtd' ), null );
		}

		/**
		 * Unserializing instances of this class is forbidden.
		 *
		 * @since 1.8.0
		 */
		public function __wakeup() {

			_doing_it_wrong( __FUNCTION__, esc_html__( 'You should not do that!', '__plugin_txtd' ), null );
		}
	}
}
