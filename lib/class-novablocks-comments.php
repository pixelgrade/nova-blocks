<?php
/**
 * NovaBlocks_Comments Class
 *
 * @author   Pixelgrade
 * @package  NovaBlocks
 * @since    1.7.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'NovaBlocks_Comments' ) ) {

	/**
	 * The NovaBlocks Comments class
	 */
	class NovaBlocks_Comments {
		/**
		 * Setup class.
		 *
		 * @since 1.7.0
		 */

		private static $actions;

		public function __construct() {

			self::$actions = array(
					'feature'   => __( 'Feature',   '__plugin_txtd' ),
					'unfeature' => __( 'Unfeature', '__plugin_txtd' ),
			);

			add_action( 'wp_ajax_handle_featured_comments', array( $this, 'handle_featured_comments' ) );

			/**
			 * Frontend logic.
			 */
			add_filter( 'comment_class', array( $this, 'featured_comment_class' ), 10, 3 );

			/**
			 * Backend logic.
			 */
			// Handle comment extra fields.
			add_action( 'comment_post', array( $this, 'save_comment_meta_data' ) );
			add_filter( 'preprocess_comment', array( $this, 'verify_comment_meta_data' ) );
			add_action( 'add_meta_boxes_comment', array( $this, 'add_comment_meta_box' ) );
			add_action( 'edit_comment', array( $this, 'save_metabox_fields' ) );
			// Handle per-post extra fields.
			add_action( 'add_meta_boxes_post', array( $this, 'add_posts_discussion_metabox' ), 10, 1 );
			add_action( 'save_post_post', array( $this, 'save_posts_metabox_fields' ), 10, 1 );
		}

		/**
		 * Change the returned CSS classes for the current comment.
		 *
		 * @param string[]    $classes    An array of comment classes.
		 *
		 * @return string[]
		 */

		public function featured_comment_class( $classes = array() ) {
			global $comment;

			$comment_id = $comment->comment_ID;

			$comment_featured = get_comment_meta( $comment_id, 'nb_comment_featured', true );

			if ( ! empty( $comment_featured ) ) {
				$classes[] = 'comment-featured';
			}

			return $classes;
		}

		/**
		 * Save the comment meta data along with the comment.
		 */
		public function save_comment_meta_data( $comment_id ) {
			if ( ! empty( $_POST['nb_commenter_background'] ) ) {
				$commenter_background = wp_filter_nohtml_kses( $_POST['nb_commenter_background'] );
				if ( ! empty( $commenter_background ) ) {
					update_comment_meta( $comment_id, 'nb_commenter_background', $commenter_background );
				}
			}

			if ( ! empty( $_POST['nb_comment_featured'] ) ) {
				update_comment_meta( $comment_id, 'nb_comment_featured', '1' );
			} else {
				update_comment_meta( $comment_id, 'nb_comment_featured', '0' );
			}
		}

		/**
		 * Add the filter to check if the comment meta data has been filled or not.
		 */
		public function verify_comment_meta_data( $commentdata ) {
			// We only enforce the commenter background for comments, not other types like reviews.
			if ( ! empty( $commentdata['comment_type'] ) && 'comment' === $commentdata['comment_type'] && empty( $_POST['nb_commenter_background'] ) ) {
				wp_die( __( 'Error: You did not add your relevant background or experience.' ) );
			}

			return $commentdata;
		}

		/**
		 * Add an metabox in comment edit screen.
		 */
		public function add_comment_meta_box() {
			$screen = function_exists( 'get_current_screen' ) ? get_current_screen() : null;

			if ( $screen instanceof \WP_Screen && isset( $_GET['c'] ) && 'comment' === $screen->id ) {

				$comment_id = (int) $_GET['c'];
				$comment    = get_comment( $comment_id );

				if ( $comment && in_array( $comment->comment_type, [ 'comment' ], false ) ) {
					add_meta_box( 'nb_comment_extra_details', esc_html__( 'Extra Details', '__plugin_txtd' ), array(
							$this,
							'comment_meta_box_fields'
					), 'comment', 'normal', 'high' );
				}
			}
		}

		/**
		 * Output the comment edit metabox fields markup.
		 *
		 * @param WP_Comment $comment
		 */
		public function comment_meta_box_fields( $comment ) {
			$commenter_background = get_comment_meta( $comment->comment_ID, 'nb_commenter_background', true );
			$comment_featured = get_comment_meta( $comment->comment_ID, 'nb_comment_featured', true );

			// Safety first.
			wp_nonce_field( 'nb_save_metabox_fields', 'nb_comment_extra_details', false );
			?>

			<fieldset>
				<legend class="screen-reader-text">Comment extra details</legend>
				<table class="form-table editcomment" role="presentation">
					<tbody>
						<tr>
							<td class="first"><label for="nb_commenter_background"><?php esc_html_e( 'Commenter Relevant Background', '__plugin_txtd' ); ?></label></td>
							<td><input type="text" name="nb_commenter_background" value="<?php echo esc_attr( $commenter_background ); ?>" size="30" class="regular-text"/></td>
						</tr>
						<tr>
							<td class="first"><label for="nb_comment_featured"><?php esc_html_e( 'Feature this comment', '__plugin_txtd' ); ?></label></td>
							<td>
								<input type="checkbox" name="nb_comment_featured" <?php checked( $comment_featured ); ?> value="1" autocomplete="off"/>
								<span class="description"><?php esc_html_e( 'Feature this comment if the comments list displays featured comments in a special way.', '__plugin_txtd' ); ?></span>
							</td>
						</tr>
					</tbody>
				</table>
			</fieldset>

			<?php
		}

		/**
		 * Update comment meta data from comment edit screen.
		 */
		public function save_metabox_fields( $comment_id ) {
			if ( ! isset( $_POST['nb_comment_extra_details'] ) || ! wp_verify_nonce( $_POST['nb_comment_extra_details'], 'nb_save_metabox_fields' ) ) {
				return;
			}

			if ( ! empty( $_POST['nb_commenter_background'] ) ) {
				$commenter_background = wp_filter_nohtml_kses( $_POST['nb_commenter_background'] );
				if ( ! empty( $commenter_background ) ) {
					update_comment_meta( $comment_id, 'nb_commenter_background', $commenter_background );
				}
			} else {
				delete_comment_meta( $comment_id, 'nb_commenter_background' );
			}

			if ( ! empty( $_POST['nb_comment_featured'] ) ) {
				update_comment_meta( $comment_id, 'nb_comment_featured', '1' );
			} else {
				update_comment_meta( $comment_id, 'nb_comment_featured', '0' );
			}
		}

		public function add_posts_discussion_metabox( $post ) {
			add_meta_box( 'nb_post_discussion_extra_details', esc_html__( 'Discussion Extra Details', '__plugin_txtd' ), array(
					$this,
					'posts_discussion_metabox_fields'
			), 'post', 'normal', 'high' );
		}

		/**
		 * Output the comment edit metabox fields markup.
		 *
		 * @param WP_Post $post
		 */
		public function posts_discussion_metabox_fields( $post ) {
			$conversation_starter_content = get_post_meta( $post->ID, 'nb_conversation_starter_content', true );
			$conversation_starter_subtitle = get_post_meta( $post->ID, 'nb_conversation_starter_subtitle', true );
			$conversation_starter_user_ID = get_post_meta( $post->ID, 'nb_conversation_starter_user_id', true );

			// Safety first.
			wp_nonce_field( 'nb_save_post_discussion_extras', 'nb_post_discussion_extra_details', false );
			?>

			<fieldset>
				<legend class="screen-reader-text">Post discussion extra details</legend>
				<table class="form-table editpost" role="presentation">
					<tbody>
					<tr>
						<td class="first"><label for="nb_conversation_starter_content"><?php esc_html_e( 'Conversation Starter Message', '__plugin_txtd' ); ?></label></td>
						<td>
							<textarea name="nb_conversation_starter_content" cols="60" rows="3" class="large-text"><?php echo wp_kses_post( $conversation_starter_content ); ?></textarea>
							<span class="description"><?php esc_html_e( 'Write the content that will kick-start a meaningful conversation with and among your readers.', '__plugin_txtd' ); ?></span><br />
							<span class="description"><?php esc_html_e( 'You can use HTML elements like `<b>`, `<i>`, `<a>` to put some structure or emphasis on your message. Don\'t over do it.', '__plugin_txtd' ); ?></span>
						</td>
					</tr>
					<tr>
						<td class=""><label for="nb_conversation_starter_subtitle"><?php esc_html_e( 'Conversation Starter Subtitle', '__plugin_txtd' ); ?></label></td>
						<td>
							<input type="text" name="nb_conversation_starter_subtitle" value="<?php echo esc_attr( $conversation_starter_subtitle ); ?>" class="large-text"/>
							<span class="description"><?php esc_html_e( 'You can use a dynamic %author% tag like in this example: "A question by %author%, author of this article:"', '__plugin_txtd' ); ?></span>
						</td>
					</tr>
					<tr>
						<td class=""><label for="nb_conversation_starter_user"><?php esc_html_e( 'Conversation Starter', '__plugin_txtd' ); ?></label></td>
						<td>
							<?php wp_dropdown_users(
									array(
										'who'              => 'authors',
										'name'             => 'nb_conversation_starter_user',
										'selected'         => empty( $conversation_starter_user_ID ) ? $post->post_author : $conversation_starter_user_ID,
										'include_selected' => true,
										'show'             => 'display_name_with_login',
									)
							); ?>
							<span class="description"><?php esc_html_e( 'Who is doing the conversation starting? By default it\'s the post author.', '__plugin_txtd' ); ?></span>
						</td>
					</tr>
					</tbody>
				</table>
			</fieldset>

			<?php
		}

		public function save_posts_metabox_fields( $post_ID ) {

		}

		/**
		 * Nova Blocks Comment Form args.
		 */
		static public function get_comment_form_args() {

			$commenter    = wp_get_current_commenter();
			$req          = get_option( 'require_name_email' );
			$html_req     = ( $req ? " required='required'" : '' );
			$current_user = wp_get_current_user();

			$avatar_size = 100;
			$avatar = get_avatar( $current_user->ID, $avatar_size, 'identicon', '', array( 'class' => 'avatar', ) );

			$comment_field = '<div class="comment-avatar">' . $avatar . '</div>' .
			                 sprintf(
				                 '<p class="comment-form-comment">' .
				                 '<label for="comment">%s</label>' .
				                 '<span class="field-description">%s</span>' .
				                 '<textarea id="comment" name="comment" cols="45" rows="1" maxlength="65525" required="required" placeholder="%s"></textarea>' .
				                 '</p>',
				                 __( 'What\'s your comment or question?', '__plugin_txtd' ),
				                 __( 'Let\'s start a personal and a meaningful conversation.', '__plugin_txtd' ),
				                 __( 'Share your knowledge or ask a question...', '__plugin_txtd' )
			                 ) .
			                 sprintf(
				                 '<p class="comment-form-experience comment-fields-wrapper">' .
				                 '<label for="nb_commenter_background">%s</label>' .
				                 '<span class="field-description">%s</span>' .
				                 '<input id="nb_commenter_background" name="nb_commenter_background" type="text" size="30" tabindex="5" placeholder="%s" />' .
				                 '</p>',
				                 __( 'What is your expertise or qualification in this topic?', '__plugin_txtd' ),
				                 __( 'Example: Practical philosopher, therapist and writer.', '__plugin_txtd' ),
				                 __( 'Your relevant experience or expertise...', '__plugin_txtd' )
			                 );

			$fields = array(
				'author'  => sprintf(
					'<p class="comment-form-author comment-fields-wrapper">%s %s</p>',
					sprintf(
						'<label for="author">%s%s</label>',
						__( 'What is your name?' ),
						( $req ? ' <span class="required">*</span>' : '' )
					),
					sprintf(
						'<input id="author" name="author" type="text" value="%s" size="30" maxlength="245" placeholder="eg. John Doe" %s />',
						esc_attr( $commenter['comment_author'] ),
						$html_req
					)
				),
				'email'   => sprintf(
					'<p class="comment-form-email comment-fields-wrapper">%s %s</p>',
					sprintf(
						'<label for="email">%s%s</label><span class="field-description">Your email address will not be published.</span>',
						__( 'What is your email address?' ),
						( $req ? ' <span class="required">*</span>' : '' )
					),
					sprintf(
						'<input id="email" name="email" type="email" value="%s" size="30" maxlength="100" aria-describedby="email-notes" placeholder="your@email.com" %s />',
						esc_attr( $commenter['comment_author_email'] ),
						$html_req
					)
				),
				'url'     => '',
				'cookies' => '',
			);

			return array(
				'comment_field'        => $comment_field,
				'fields'               => $fields,
				'cancel_reply_before'  => '',
				'cancel_reply_after'   => '',
				'class_container'      => 'novablocks-conversations__form comment-respond',
				'comment_notes_before' => '',
				'class_form'           => 'comment-form form-grid',
				'logged_in_as'         => '',
				'title_reply'          => '',
				'title_reply_before'   => '',
				'title_reply_after'    => '',
				'label_submit'         => esc_html__( 'Add this comment', '__plugin_txtd' ),
				'submit_button'        => '<button name="%1$s" type="submit" id="%2$s" class="%3$s">%4$s</button>',
			);
		}

		public function handle_featured_comments() {

			if ( ! isset( $_POST['do'] ) ) die;

			$action = $_POST['do'];

			$actions = array_keys( self::$actions );

			if ( in_array( $action, $actions ) ) {

				$comment_id = absint( $_POST['comment_id'] );
				$comment    = get_comment( $comment_id );

				if ( ! $comment ) {
					die;
				}

				if( ! current_user_can( 'edit_comment', $comment_id ) ) {
					die;
				}

				if( ! wp_verify_nonce( $_POST['nonce'], 'featured_comments' ) ) {
					die;
				}

				switch ( $action ) {

					case 'feature':
						update_comment_meta( $comment_id, 'nb_comment_featured',
								'1' );
						break;

					case 'unfeature':
						update_comment_meta( $comment_id, 'nb_comment_featured', '0' );
						break;

						die( wp_create_nonce( 'featured_comments' ) );

				}
			}

			die;
		}

		static public function output_extras_options(  ) {

			$comment_text = '';

			if( is_admin() || ! current_user_can( 'moderate_comments' ) ) {
				return $comment_text;
			}

			global $comment;

			$comment_id = $comment->comment_ID;
			$data_id    = ' data-comment_id=' . $comment_id;

			$current_status = implode( ' ', self::featured_comment_class() );

			$output = '';
			foreach( self::$actions as $action => $label ) {
				$output .= "<a class='comment-dropdown-item feature-comments {$current_status} {$action}' data-do='{$action}' {$data_id} data-nonce='" . wp_create_nonce( "featured_comments" ) . "' title='{$label}'>{$label}</a> "; }

			return $comment_text . $output;
		}
	}

}

return new NovaBlocks_Comments();
