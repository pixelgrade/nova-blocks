<?php
/**
 * NovaBlocks_Comments_Highlight Class
 *
 * @since    1.8.0
 * @package  NovaBlocks
 * @author   Pixelgrade
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'NovaBlocks_Comments_Highlight' ) ) {

	/**
	 * The NovaBlocks_Comments_Highlight class
	 */
	class NovaBlocks_Comments_Highlight {

		/**
		 * Instance of this class (the singleton pattern).
		 * @since    1.8.0
		 * @var      NovaBlocks_Comments_Highlight
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

			/**
			 * Frontend logic.
			 */
			add_filter( 'novablocks/comments/comment_wrapper_classes', [ $this, 'adjust_comment_wrapper_classes' ], 10, 2 );
			add_filter( 'novablocks/comments/list_comment_extra_meta_menu_items', [
				$this,
				'add_extra_meta_actions',
			], 10, 2 );
			add_action( 'novablocks/comments/list_comment:end', [ $this, 'output_highlighters_list' ], 10, 1 );

			/**
			 * Backend logic.
			 */

			// Handle comment extra meta fields.
			add_action( 'novablocks/comments/comment_extra_details_fields', [ $this, 'comment_meta_box_fields' ] );
			add_action( 'novablocks/comments/comment_extra_details_save_metadata', [ $this, 'save_comment_meta_data' ] );
			add_action( 'novablocks/comments/comment_extra_details_save_fields', [ $this, 'save_comment_meta_data' ] );

			// Handle AJAX actions.
			add_action( 'wp_ajax_toggle_highlight_comment', [ $this, 'handle_toggle_highlight_comment' ] );
		}

		/**
		 * Change the returned CSS classes for the current comment wrapper.
		 *
		 * @param string[]   $classes An array of comment classes.
		 * @param WP_Comment $comment The comment.
		 *
		 * @return string[]
		 */
		public function adjust_comment_wrapper_classes( array $classes, WP_Comment $comment ): array {
			if ( $this->is_comment_highlighted( $comment->comment_ID ) ) {
				$classes[] = 'comment-highlighted';
			}

			return $classes;
		}

		/**
		 * Output the markup of the highlighters list.
		 *
		 * @param WP_Comment $comment Comment to display.
		 */
		public function output_highlighters_list( WP_Comment $comment ) {
			$highlighters = $this->get_users_who_highlighted_comment( $comment->comment_ID );
			if ( ! empty( $highlighters ) ) { ?>

				<footer class="comment-footer-highlights">
					<div
						class="comment-highlightedby-label"><?php esc_html_e( 'Highlighted by', '__plugin_txtd' ); ?></div>
					<ul class="comment-highlightedby-humans">
						<?php
						$conversation_starter_user_id = get_post_meta( $comment->comment_post_ID, 'nb_conversation_starter_user_id', true );
						$conversation_starter_content = get_post_meta( $comment->comment_post_ID, 'nb_conversation_starter_content', true );
						$post                         = get_post( $comment->comment_post_ID );

						foreach ( $highlighters as $highlighter_id ) {
							$highlighter = get_userdata( $highlighter_id );
							if ( empty( $highlighter ) ) {
								continue;
							}

							// On expertise, we have right now only "Article author", "Conversation starter", and "Conversation editor" for the rest.
							$expertise = esc_html__( 'Conversation editor', '__plugin_txtd' );
							if ( ! empty( $conversation_starter_content ) && (int) $highlighter_id === (int) $conversation_starter_user_id ) {
								$expertise = esc_html__( 'Conversation starter', '__plugin_txtd' );
							} else if ( ! empty( $post ) && (int) $highlighter_id === $post->post_author ) {
								$expertise = esc_html__( 'Article author', '__plugin_txtd' );
							}

							?>
							<li class="comment-highlightedby-human">
								<div
									class="comment-highlightedby-human-name"><?php echo $highlighter->display_name; ?></div>
								<div class="comment-highlightedby-human-expertise"><?php echo $expertise ?></div>
							</li>
						<?php } ?>
					</ul>
				</footer><!-- .comment-footer-highlights -->

			<?php }
		}

		/**
		 * Add extra highlighting actions to the comment more menu, if that is the case.
		 *
		 * @param string[]   $menu_items The extra action menu items.
		 * @param WP_Comment $comment    Comment to display.
		 *
		 * @return string[]
		 */
		public function add_extra_meta_actions( array $menu_items, WP_Comment $comment ): array {
			// For regular users and non-logged in visitors, we will not display highlighting options.
			if ( ! current_user_can( 'moderate_comments' ) ) {
				return $menu_items;
			}

			$data_comment_id = ' data-comment_id=' . esc_attr( $comment->comment_ID );

			// Put the menu item at the top of the list.
			return [
	              'toggle_highlight' => "<a class='comment-dropdown-item toggle-comment-highlight' href='#' " . $data_comment_id .
	                                    " data-nonce='" . wp_create_nonce( 'toggle_highlight_comment' ) .
	                                    "' title='" . esc_html__( 'Toggle your highlight of this comment', '__plugin_txtd' ) . "'>" .
	                                    esc_html__( 'Toggle your highlight', '__plugin_txtd' ) . '</a>',
              ] + $menu_items;
		}

		/**
		 * Save the comment meta data along with the comment.
		 *
		 * @param int $comment_id
		 */
		public function save_comment_meta_data( int $comment_id ) {
			if ( empty( $_POST['nb_comment_highlighted_by'] ) ) {
				$new_value = [];
			} else {
				$new_value = $_POST['nb_comment_highlighted_by'];
			}

			if ( ! is_array( $new_value ) ) {
				$new_value = [ $new_value ];
			}

			// Make sure we are dealing with ints.
			$_POST['nb_comment_highlighted_by'] = array_map( 'absint', $new_value );

			if ( ! empty( $new_value ) ) {
				update_comment_meta( $comment_id, 'nb_comment_highlighted_by', $new_value );
			} else {
				delete_comment_meta( $comment_id, 'nb_comment_highlighted_by' );
			}
		}

		/**
		 * Output the comment edit metabox fields markup.
		 *
		 * @param WP_Comment $comment
		 */
		public function comment_meta_box_fields( WP_Comment $comment ) {
			$comment_highlighted_by = $this->get_users_who_highlighted_comment( $comment->comment_ID );
			?>

			<tr>
				<td class="first"><label
						for="nb_comment_highlighted_by"><strong><?php esc_html_e( 'Highlighters of this comment', '__plugin_txtd' ); ?></strong></label>
				</td>
				<td>
					<fieldset>
						<p>
							<label>
								<input type="checkbox"
								       name="nb_comment_highlighted_by[]" <?php checked( false !== array_search( get_current_user_id(), $comment_highlighted_by ) ); ?>
								       value="<?php echo esc_attr( get_current_user_id() ); ?>" autocomplete="off"/>
								<span><?php printf( esc_html__( 'Me (%s)', '__plugin_txtd' ), wp_get_current_user()->display_name ); ?></span>
							</label>
						</p>

						<?php
						foreach ( $comment_highlighted_by as $user_id ) {
							if ( (int) $user_id === get_current_user_id() ) {
								continue;
							}

							$user_data = get_userdata( $user_id );
							if ( empty( $user_data ) ) {
								continue;
							} ?>
							<p>
								<label>
									<input type="checkbox"
									       name="nb_comment_highlighted_by[]" <?php checked( false !== array_search( $user_id, $comment_highlighted_by ) ); ?>
									       value="<?php echo esc_attr( $user_id ); ?>" autocomplete="off"/>
									<span><?php echo $user_data->display_name; ?></span>
								</label>
							</p>
							<?php
						} ?>
					</fieldset>

					<span
						class="description"><?php echo wp_kses_post( __( 'All the current highlights of this comment, plus the option to highlight yourself.<br/>Highlighters can only be <strong>registered users</strong> that have <strong>management capabilities</strong> for comments.', '__plugin_txtd' ) ); ?></span>
				</td>
			</tr>

			<?php
		}

		public function handle_toggle_highlight_comment() {
			if ( empty( $_POST['comment_id'] ) ) {
				wp_die(
					'<p class="error">' . wp_kses_post( __( '<strong>Error:</strong> Wrong data sent.', '__plugin_txtd' ) ) . '</p>',
					esc_html__( 'Comment Submission Failure', '__plugin_txtd' ),
					[
						'response'  => 403,  // A forbidden request was made.
						'back_link' => true, // Just in case we end up on the ugly submission page.
					]
				);
			}

			$comment_id = absint( $_POST['comment_id'] );
			$comment    = get_comment( $comment_id );

			if ( ! $comment
			     || ! current_user_can( 'edit_comment', $comment->comment_ID )
			     || ! wp_verify_nonce( $_POST['nonce'], 'toggle_highlight_comment' ) ) {

				wp_die(
					'<p class="error">' . wp_kses_post( __( '<strong>Error:</strong> You don\'t have the needed credentials to highlight comments.', '__plugin_txtd' ) ) . '</p>',
					esc_html__( 'Comment Submission Failure', '__plugin_txtd' ),
					[
						'response'  => 403,  // A forbidden request was made.
						'back_link' => true, // Just in case we end up on the ugly submission page.
					]
				);
			}

			// By default we will toggle highlight for the current logged in user.
			// But if we receive a user ID, we will respect that.
			$user_id = get_current_user_id();
			if ( ! empty( $_POST['user_id'] ) ) {
				$user_id = absint( $_POST['user_id'] );
			}

			// We will not allow self-highlighting.
			if ( $user_id == $comment->user_id ) {
				wp_die(
					'<p class="error">' . wp_kses_post( __( '<strong>Error:</strong> You can\'t highlight your own comments.', '__plugin_txtd' ) ) . '</p>',
					esc_html__( 'Comment Submission Failure', '__plugin_txtd' ),
					[
						'response'  => 422,  // Unable to process the request.
						'back_link' => true, // Just in case we end up on the ugly submission page.
					]
				);
			}

			// Now do the highlight toggling.
			if ( $this->is_comment_highlighted_by( $comment->comment_ID, $user_id ) ) {
				$result = $this->unhighlight_comment_by_user( $comment->comment_ID, $user_id );
				if ( false === $result ) {
					wp_die(
						'<p class="error">' . wp_kses_post( __( '<strong>Error:</strong> Couldn\'t unhighlight this comment.', '__plugin_txtd' ) ) . '</p>',
						esc_html__( 'Comment Submission Failure', '__plugin_txtd' ),
						[
							'response'  => 422,  // Unable to process the request.
							'back_link' => true, // Just in case we end up on the ugly submission page.
						]
					);
				}
			} else {
				$result = $this->highlight_comment_by_user( $comment->comment_ID, $user_id );
				if ( false === $result ) {
					wp_die(
						'<p class="error">' . wp_kses_post( __( '<strong>Error:</strong> Couldn\'t highlight this comment.', '__plugin_txtd' ) ) . '</p>',
						esc_html__( 'Comment Submission Failure', '__plugin_txtd' ),
						[
							'response'  => 422,  // Unable to process the request.
							'back_link' => true, // Just in case we end up on the ugly submission page.
						]
					);
				}
			}

			$commentsListArgs = [];
			if ( ! empty( $_POST['commentsListArgs'] ) && is_array( $_POST['commentsListArgs'] ) ) {
				$commentsListArgs = $_POST['commentsListArgs'];
			}

			// If we've reached thus far, the toggling was successful.
			// We will respond with the new comment markup (a general pattern for easy client-side logic).

			/**
			 * We pass the comments list args to make sure we get the same result as in the comments list.
			 */
			$comments_renderer = new NovaBlocks_Comments_Renderer();
			$comment_markup    = $comments_renderer->list->get_single_comment_markup( $comment, $commentsListArgs );
			wp_die(
				$comment_markup,
				esc_html__( 'Comment Submission Success', '__plugin_txtd' ),
				[
					'response'  => 200,
					'back_link' => true, // Just in case we end up on the ugly submission page.
				]
			);
		}

		public function is_comment_highlighted( $comment_id = false ) {
			if ( empty( $comment_id ) ) {
				$comment_id = get_comment_ID();
			}

			$meta = get_comment_meta( $comment_id, 'nb_comment_highlighted_by', true );

			return ! empty( $meta );
		}

		public function is_comment_highlighted_by( $comment_id, $user_id ) {
			$meta = get_comment_meta( $comment_id, 'nb_comment_highlighted_by', true );
			if ( empty( $meta ) ) {
				return false;
			}

			return false !== array_search( $user_id, $meta );
		}

		public function get_users_who_highlighted_comment( $comment_id = false ) {
			if ( empty( $comment_id ) ) {
				$comment_id = get_comment_ID();
			}

			$meta = get_comment_meta( $comment_id, 'nb_comment_highlighted_by', true );
			if ( empty( $meta ) ) {
				$meta = [];
			}

			return $meta;
		}

		public function highlight_comment_by_user( $comment_id, $user_id ) {
			// Bail if user already highlighted this comment.
			if ( $this->is_comment_highlighted_by( $comment_id, $user_id ) ) {
				return false;
			}

			$meta = get_comment_meta( $comment_id, 'nb_comment_highlighted_by', true );
			if ( empty( $meta ) ) {
				$meta = [];
			}

			// Add the user to the list of highlighters.
			$meta[] = $user_id;

			return update_comment_meta( $comment_id, 'nb_comment_highlighted_by', array_unique( $meta ) );
		}

		public function unhighlight_comment_by_user( $comment_id, $user_id ) {
			$meta = get_comment_meta( $comment_id, 'nb_comment_highlighted_by', true );
			if ( empty( $meta ) ) {
				$meta = [];
			}

			$key = array_search( $user_id, $meta );
			if ( false === $key ) {
				// The user was not found among the current comment highlighters.
				return false;
			}

			unset( $meta[ $key ] );

			return update_comment_meta( $comment_id, 'nb_comment_highlighted_by', array_unique( $meta ) );
		}

		/**
		 * Main NovaBlocks_Comments_Highlight Instance
		 *
		 * Ensures only one instance of NovaBlocks_Comments_Highlight is loaded or can be loaded.
		 *
		 * @since  1.8.0
		 * @static
		 *
		 * @return NovaBlocks_Comments_Highlight Main NovaBlocks_Comments_Highlight instance
		 */
		public static function instance() {
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
