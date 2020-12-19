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
	 * The NovaBlocks Comments Header rendering class
	 */
	class NovaBlocks_Comments_Header {

		/**
		 * The post to render comments header for.
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
		 * The content to use when rendering.
		 *
		 * @var string
		 */
		protected $content = '';

		/**
		 * Instantiate a comments header renderer.
		 *
		 * @param WP_Post|int|null $post    Optional. The post who's comments header to render. Defaults to the current post.
		 * @param array            $args    Optional. The arguments to consider when rendering.
		 * @param string           $content Optional. The content to use when rendering.
		 */
		public function __construct( $post = null, $args = [], $content = '' ) {
			$this->post = get_post( $post, OBJECT );

			// Make sure defaults are in place.
			$this->args = wp_parse_args( $args, [
				'commentsTitle'                               => esc_html__( 'Conversations', '__plugin_txtd' ),
				'noCommentsTitle'                             => esc_html__( 'Start the conversation', '__plugin_txtd' ),
				// Do not show anything when there are no comments since we will use a different comments title.
				'zeroCommentsSubtitle'                        => '',
				'oneCommentSubtitle'                          => esc_html__( 'One so far', '__plugin_txtd' ),
				'multipleCommentsSubtitle'                    => esc_html__( '%d comments', '__plugin_txtd' ),
				// Text to use when we want to differentiate between top-level comments (conversations) and replies.
				// Leave empty to not differentiate and use 'multipleCommentsSubtitle'.
				// The differentiation will take place only when there is an actual difference (e.g. not when all comments are top-level).
				/* translators: 1: The number of top-level comments, 2: The number of replies  */
				'multipleCommentsSubtitleWithDifferentiation' =>
					__( '<span class="conversations-number">%1$d</span> with <span class="replies-number">%2$d</span> replies', '__plugin_txtd' ),
			] );


			$this->content = $content;
		}

		/**
		 * Entry point to render the comments header.
		 *
		 * @param array  $args    Optional.
		 * @param string $content Optional.
		 *
		 * @return string
		 */
		public function render( $args = [], $content = '' ) {
			// Render nothing without a proper post.
			if ( empty( $this->post ) ) {
				return '';
			}

			$header_args = $this->parse_args( $args );

			/* =================================
			 * RENDER THE COMMENTS HEADER MARKUP
			 */

			ob_start();

			$conversation_title = $header_args['noCommentsTitle'];

			$comments_count = get_comments_number( $this->post->ID );
			if ( $comments_count > 0 ) {
				$conversation_title = $header_args['commentsTitle'];
			} ?>

			<h3 class="novablocks-conversations__header">
				<span
					class="novablocks-conversations__title"><?php echo wp_kses( $conversation_title, wp_kses_allowed_html() ); ?></span>
				<span class="novablocks-conversations__comments-count"><?php
					// Check if we need to differentiate and have reasons to do so.
					if ( $comments_count > 1 // We need at least 2 comments.
					     && ! empty( $header_args['multipleCommentsSubtitleWithDifferentiation'] )
					     && false !== strpos( $header_args['multipleCommentsSubtitleWithDifferentiation'], '%1$d' )
					     && false !== strpos( $header_args['multipleCommentsSubtitleWithDifferentiation'], '%2$d' )
					     && ( $toplevelCommentsCount = (int) $this->get_post_toplevel_comments_number( $this->post->ID ) ) < $comments_count ) {

						// Sanitize.
						$header_args['multipleCommentsSubtitleWithDifferentiation'] = wp_kses( $header_args['multipleCommentsSubtitleWithDifferentiation'],
							array_map( '_wp_add_global_attributes', [
								'span'   => [
									'dir'      => true,
									'align'    => true,
									'lang'     => true,
									'xml:lang' => true,
								],
								'b'      => [],
								'code'   => [],
								'em'     => [],
								'i'      => [],
								's'      => [],
								'strike' => [],
								'strong' => [],
							] ) );

						$comments_number_text = sprintf( $header_args['multipleCommentsSubtitleWithDifferentiation'],
							$toplevelCommentsCount,
							$comments_count - $toplevelCommentsCount
						);
						/**
						 * Apply the same filter as the core
						 *
						 * @param string $comments_number_text
						 * @param int    $comments_count
						 *
						 * @see get_comments_number_text()
						 *
						 */
						echo apply_filters( 'comments_number', $comments_number_text, $comments_count );
					} else {
						// Just use the regular, core way of showing the comments number.
						comments_number( $header_args['zeroCommentsSubtitle'], $header_args['oneCommentSubtitle'], $header_args['multipleCommentsSubtitle'], $this->post->ID );
					} ?></span>
			</h3><!-- .novablocks-conversations__header -->

			<?php if ( ! empty( $content ) ) { ?>
				<div class="novablocks-conversations__content">
					<?php echo $content; ?>
				</div>
			<?php }

			return ob_get_clean();
		}

		public function get_post_toplevel_comments_number( $post_id ) {
			$top_level_query = new WP_Comment_Query();
			$top_level_args  = [
				'count'   => true,
				'orderby' => false,
				'post_id' => $post_id,
				'status'  => 'approve',
				'parent'  => 0,
			];

			return $top_level_query->query( $top_level_args );
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
