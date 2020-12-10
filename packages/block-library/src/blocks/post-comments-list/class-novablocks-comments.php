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

//		static protected
		public $actions = [];

		/**
		 * Instance of this class (the singleton pattern).
		 * @since    1.8.0
		 * @var      NovaBlocks_Comments
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

			require_once dirname( __FILE__ ) . '/lib/class-novablocks-walker-comment.php';

			/**
			 * Frontend logic.
			 */
			// Register any scripts or styles we might need with regards to comments.
			$this->register_frontend_assets();

			// Adjust the comment form fields.
			add_filter( 'comment_form_default_fields', array( $this, 'adjust_comment_form_default_fields' ), 9, 1 );
			add_filter( 'comment_form_defaults', array( $this, 'adjust_comment_form_defaults' ), 9, 1 );

			add_filter( 'comment_class', array( $this, 'featured_comment_class' ), 10, 3 );

			add_filter('nb_commenter_background_value', array( $this, 'get_user_completed_background' ) );

			/**
			 * Backend logic.
			 */

			// Handle comment extra meta fields.
			add_action( 'comment_post', array( $this, 'save_comment_meta_data' ) );
			add_filter( 'preprocess_comment', array( $this, 'verify_comment_meta_data' ) );
			add_action( 'add_meta_boxes_comment', array( $this, 'add_comment_meta_box' ) );
			add_action( 'edit_comment', array( $this, 'save_metabox_fields' ) );
			// Handle per-post extra fields.
			add_action( 'add_meta_boxes_post', array( $this, 'add_posts_discussion_metabox' ), 10, 1 );
			add_action( 'save_post_post', array( $this, 'save_posts_metabox_fields' ), 10, 1 );

			$this->actions = array(
					'feature'   => __( 'Feature',   '__plugin_txtd' ),
					'unfeature' => __( 'Unfeature', '__plugin_txtd' ),
			);

			add_action( 'wp_ajax_handle_featured_comments', array( $this, 'handle_featured_comments' ) );
		}

		public function register_frontend_assets() {

		}

		/**
		 * Change the returned CSS classes for the current comment.
		 *
		 * @param string[]    $classes    An array of comment classes.
		 * @param string      $class      A comma-separated list of additional classes added to the list.
		 * @param int         $comment_id The comment ID.
		 *
		 * @return string[]
		 */
		public function featured_comment_class( $classes, $class, $comment_id ) {
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
		 * Check if the comment meta data has been filled or not.
		 *
		 * @param array $commentdata
		 *
		 * @return array
		 */
		public function verify_comment_meta_data( $commentdata ) {
			// We only enforce the commenter background for comments, not other types like reviews.
			if ( ! empty( $commentdata['comment_type'] ) && 'comment' === $commentdata['comment_type'] && empty( $_POST['nb_commenter_background'] ) ) {
				// Die in a standard way, like wp-comments-post.php does it, so AJAX plugins can behave themselves.
				$comment = new WP_Error( 'require_nb_commenter_background', __( '<strong>Error</strong>: You did not add your relevant background or experience.', '__plugin_txtd' ), 200 );
				$data = intval( $comment->get_error_data() );
				if ( ! empty( $data ) ) {
					wp_die(
							'<p>' . $comment->get_error_message() . '</p>',
							__( 'Comment Submission Failure' ),
							array(
									'response'  => $data,
									'back_link' => true,
							)
					);
				} else {
					exit;
				}
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
								<span class="description"><?php esc_html_e( 'Feature this comment, if the comments list displays featured comments in a special way.', '__plugin_txtd' ); ?></span>
							</td>
						</tr>
					</tbody>
				</table>
			</fieldset>

			<?php
		}

		/**
		 * Update comment meta data from comment edit screen.
		 *
		 * @param int $comment_id
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

			<fieldset class="widefat">
				<legend class="screen-reader-text"><?php esc_html_e( 'Post discussion extra details', '__plugin_txtd' ); ?></legend>
				<table role="presentation">
					<tbody>
					<tr>
						<td class="first"><label for="nb_conversation_starter_content"><strong><?php esc_html_e( 'Conversation Starter Message', '__plugin_txtd' ); ?></strong></label></td>
						<td>
							<textarea name="nb_conversation_starter_content" cols="60" rows="3" class="large-text"><?php echo wp_kses_post( $conversation_starter_content ); ?></textarea>
							<p class="description"><?php echo wp_kses_post( __( 'Write the content that will kick-start a meaningful conversation with and among your readers.', '__plugin_txtd' ) ); ?><br />
							<?php echo wp_kses_post( __( 'You can use HTML elements like <code>&lt;b&gt;</code>, <code>&lt;i&gt;</code>, <code>&lt;a&gt;</code> to put some structure or emphasis on your message. Best that you don\'t over do it.', '__plugin_txtd' ) ); ?><br />
							<?php echo wp_kses_post( __( 'You can include the following dynamic tags: <code>%author%</code> equivalent to <code>%author_display_name%</code>, <code>%author_first_name%</code>, <code>%author_last_name%</code>, <code>%post_title%</code>, and <code>%year%</code>. These will be replaced with the corresponding value.', '__plugin_txtd' ) ); ?><br />
							<?php echo wp_kses_post( __( '<b>Leave empty to hide/skip</b> the entire conversation starter section for this post.', '__plugin_txtd' ) ); ?></p>
						</td>
					</tr>
					<tr>
						<td class=""><label for="nb_conversation_starter_subtitle"><strong><?php esc_html_e( 'Conversation Starter Subtitle (Optional)', '__plugin_txtd' ); ?></strong></label></td>
						<td>
							<input type="text" name="nb_conversation_starter_subtitle" value="<?php echo esc_attr( $conversation_starter_subtitle ); ?>" class="large-text"/>
							<p class="description"><?php echo wp_kses_post( __( 'You can use the <code>%author%</code> dynamic tag like in this example: "A question by %author%, author of this article:"', '__plugin_txtd' ) ); ?><br />
							<?php echo wp_kses_post( __( 'Here are all the dynamic tags you can use: <code>%author%</code> equivalent to <code>%author_display_name%</code>, <code>%author_first_name%</code>, <code>%author_last_name%</code>, <code>%post_title%</code>, and <code>%year%</code>. These will be replaced with the corresponding value.', '__plugin_txtd' ) ); ?><br />
							<?php echo wp_kses_post( __( '<b>Leave empty</b> to not show a subtitle for your conversation starter content.', '__plugin_txtd' ) ); ?></p>
						</td>
					</tr>
					<tr>
						<td class=""><label for="nb_conversation_starter_user_id"><strong><?php esc_html_e( 'Conversation Starter', '__plugin_txtd' ); ?></strong></label></td>
						<td>
							<?php wp_dropdown_users(
									array(
										'who'              => 'authors',
										'name'             => 'nb_conversation_starter_user_id',
										'selected'         => empty( $conversation_starter_user_ID ) ? $post->post_author : $conversation_starter_user_ID,
										'include_selected' => true,
										'show'             => 'display_name_with_login',
									)
							); ?>
							<p class="description"><?php esc_html_e( 'Who is doing the conversation starting? By default, it\'s the post author.', '__plugin_txtd' ); ?></p>
						</td>
					</tr>
					</tbody>
				</table>
			</fieldset>

			<?php
		}

		public function save_posts_metabox_fields( $post_ID ) {
			if ( ! isset( $_POST['nb_post_discussion_extra_details'] ) || ! wp_verify_nonce( $_POST['nb_post_discussion_extra_details'], 'nb_save_post_discussion_extras' ) ) {
				return;
			}

			if ( ! empty( $_POST['nb_conversation_starter_content'] ) ) {
				$value = wp_kses_post( $_POST['nb_conversation_starter_content'] );
				if ( ! empty( $value ) ) {
					update_post_meta( $post_ID, 'nb_conversation_starter_content', $value );
				} else {
					delete_post_meta( $post_ID, 'nb_conversation_starter_content' );
				}
			} else {
				delete_post_meta( $post_ID, 'nb_conversation_starter_content' );
			}

			if ( ! empty( $_POST['nb_conversation_starter_subtitle'] ) ) {
				$value = wp_kses_post( $_POST['nb_conversation_starter_subtitle'] );
				if ( ! empty( $value ) ) {
					update_post_meta( $post_ID, 'nb_conversation_starter_subtitle', $value );
				} else {
					delete_post_meta( $post_ID, 'nb_conversation_starter_subtitle' );
				}
			} else {
				delete_post_meta( $post_ID, 'nb_conversation_starter_subtitle' );
			}

			if ( ! empty( $_POST['nb_conversation_starter_user_id'] ) ) {
				update_post_meta( $post_ID, 'nb_conversation_starter_user_id', absint( $_POST['nb_conversation_starter_user_id'] ) );
			}
		}

		public function adjust_comment_form_default_fields( $fields ) {
			// We only want to do this for the 'post' post type, and only when `we` are outputting a comment form.
			if ( ! isset( $GLOBALS['nb_current_comment_form_post_id'] ) || 'post' !== get_post_type( $GLOBALS['nb_current_comment_form_post_id'] ) ) {
				return $fields;
			}

			$attributes = $GLOBALS['nb_current_comment_form_block_attributes'];

			$commenter    = wp_get_current_commenter();
			$req          = get_option( 'require_name_email' );
			$html_req     = ( $req ? " required='required'" : '' );

			$new_fields = array(
					'author'  => sprintf(
							'<p class="comment-form-author comment-fields-wrapper">%s %s</p>',
							sprintf(
									'<label for="author">%s%s</label><span class="field-description">%s</span>',
									$attributes['commenterNameLabel'],
									( $req ? ' <span class="required">*</span>' : '' ),
									$attributes['commenterNameDescription']
							),
							sprintf(
									'<input id="author" name="author" type="text" value="%s" size="30" maxlength="245" placeholder="%s" %s />',
									esc_attr( $commenter['comment_author'] ),
									$attributes['commenterNamePlaceholder'],
									$html_req
							)
					),
					'email'   => sprintf(
							'<p class="comment-form-email comment-fields-wrapper">%s %s</p>',
							sprintf(
									'<label for="email">%s%s</label><span class="field-description">%s</span>',
									$attributes['commenterEmailLabel'],
									( $req ? ' <span class="required">*</span>' : '' ),
									$attributes['commenterEmailDescription']
							),
							sprintf(
									'<input id="email" name="email" type="email" value="%s" size="30" maxlength="100" aria-describedby="email-notes" placeholder="%s" %s />',
									esc_attr( $commenter['comment_author_email'] ),
									esc_attr( $attributes['commenterEmailPlaceholder'] ),
									$html_req
							)
					),
					'url'   => sprintf(
							'<p class="comment-form-url comment-fields-wrapper">%s %s</p>',
							sprintf(
									'<label for="url">%s</label><span class="field-description">%s</span>',
									$attributes['commenterUrlLabel'],
									$attributes['commenterUrlDescription']
							),
							sprintf(
									'<input id="url" name="url" %s value="%s" size="30" maxlength="200" placeholder="%s" />',
									( $attributes['html5'] ? 'type="url"' : 'type="text"' ),
									esc_attr( $commenter['comment_author_url'] ),
									esc_attr( $attributes['commenterUrlPlaceholder'] )
							)
					),
			);

			if ( has_action( 'set_comment_cookies', 'wp_set_comment_cookies' ) && get_option( 'show_comments_cookies_opt_in' ) ) {
				$consent           = empty( $commenter['comment_author_email'] ) ? '' : ' checked="checked"';
				$new_fields['cookies'] = sprintf(
						'<p class="comment-form-cookies-consent">%s %s</p>',
						sprintf(
								'<input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes"%s />',
								$consent
						),
						sprintf(
								'<label for="wp-comment-cookies-consent">%s</label>',
								$attributes['cookieConsentLabel']
						)
				);
			}

			if ( ! $attributes['commenterUrl'] ) {
				// This means we don't want the URL field.
				$new_fields['url'] = '';
			}

			return array_merge( $fields, $new_fields );
		}

		public function adjust_comment_form_defaults( $defaults ) {
			// We only want to do this for the 'post' post type.
			if ( ! isset( $GLOBALS['nb_current_comment_form_post_id'] ) || 'post' !== get_post_type( $GLOBALS['nb_current_comment_form_post_id'] ) ) {
				return $defaults;
			}

			$attributes = $GLOBALS['nb_current_comment_form_block_attributes'];

			$current_user = wp_get_current_user();
			$commenter    = wp_get_current_commenter();

			$avatar_size = 100;
			$avatar = get_avatar( $current_user->ID, $avatar_size, 'identicon', '', array( 'class' => 'avatar', ) );

			// Generate a comment textarea title (label actually) according to whether we have a user or not.
			// This way we compensate for the lack of a title for logged in users.
			$comment_field_label = $attributes['commentLabel'];
			if ( ! empty( $attributes['commentLabelKnownUser'] ) && false !== strpos( $attributes['commentLabelKnownUser'], '%s' ) ) {
				// If we have a commenter (via cookies) or a user, we will ask the question more personally.
				$commenter_name = false;
				if ( ! empty( $current_user->display_name ) ) {
					$commenter_name = $current_user->display_name;
				} else if ( ! empty( $commenter['comment_author'] ) ) {
					$commenter_name = $commenter['comment_author'];
				}
				if ( ! empty( $commenter_name ) ) {
					/* translators: %s: The current commenter display name. */
					$comment_field_label = sprintf( $attributes['commentLabelKnownUser'], $commenter_name );
				}
			}

			// The comment field is always required.
			$comment_field_label .= ' <span class="required">*</span>';

			// Change the comment field (the textarea).
			// Start from scratch.
			$defaults['comment_field'] = '';

			// First, determine if we should add an avatar.
			if ( ! empty( $avatar ) ) {
				$defaults['comment_field'] = '<div class="comment-avatar">' . $avatar . '</div>';
				// Add a class to help with styling.
				$defaults['class_form'] .= ' no-avatar';
			}

			// Second, the actual comment field.
			// We need to decide if we have a regular textarea or a rich text editor via Trix.
			$comment_textarea = sprintf(
					'<textarea id="comment" name="comment" cols="45" rows="1" maxlength="65525" required="required" placeholder="%s"></textarea>',
					$attributes['commentPlaceholder']
			);
			if ( $attributes['commentRichTextEditor'] ) {
				// We need to use a different kind of markup.
				// @see https://github.com/basecamp/trix#integrating-with-forms
				// For the available keyboard shortcuts, @see https://github.com/basecamp/trix/wiki/Keyboard-Shortcuts

				$comment_textarea = sprintf('
<span class="trix-contained-input">
	<span class="trix-inner-wrapper">
		<span class="sticky-trix-toolbar">
			<trix-toolbar id="comment_trix_toolbar"></trix-toolbar>
		</span>
		<trix-editor input="comment" placeholder="%s" toolbar="comment_trix_toolbar"></trix-editor>
		<input id="comment" value="" type="hidden" name="comment">
	</span>
	<script>
		// Adjust the Trix editor.
		addEventListener("trix-initialize", function(event) {
		  // Remove the file tools.
		  var nbTrixFileTools = event.target.toolbarElement.querySelector(\'[data-trix-button-group="file-tools"]\');
		  if ( nbTrixFileTools ) {
		    nbTrixFileTools.parentNode.removeChild(nbTrixFileTools);
		  }
		})
		addEventListener("trix-file-accept", function(event) {
		  // Do not allow file drop or paste.
		  event.preventDefault();
		  alert("File attachments are not supported for comments. Use words to picture your message.")
		})
	</script>
</span>',
						$attributes['commentPlaceholder']
				);

				// We will also enqueue the scripts and styles needed.
				// These should be already registered by this point.
				wp_enqueue_script( 'trix' );
				wp_enqueue_style( 'trix' );
			}

			$defaults['comment_field'] .=
			                 sprintf(
					                 '<p class="comment-form-comment">' .
					                 '<label for="comment">%s</label><span class="field-description">%s</span>' .
					                 '%s' .
					                 '</p>',
					                 $comment_field_label,
					                 $attributes['commentDescription'],
					                 $comment_textarea
			                 );

			// Third, the commenter background field.
			if ( $attributes['commenterBackground'] ) {
				// We need to add the commenter background field to the comment textarea because we want it for logged in users too.
				$defaults['comment_field'] .=
						sprintf(
								'<p class="comment-form-background comment-fields-wrapper">' .
								'<label for="nb_commenter_background">%s%s</label>' .
								'<span class="field-description">%s</span>' .
								'<input id="nb_commenter_background" name="nb_commenter_background" type="text" size="30" tabindex="5" placeholder="%s" required="required" />' .
								'</p>',
								$attributes['commenterBackgroundLabel'],
								( $attributes['commenterBackgroundRequired'] ? ' <span class="required">*</span>' : '' ),
								$attributes['commenterBackgroundDescription'],
								$attributes['commenterBackgroundPlaceholder']
						);
			}

			// No title or section related to the logged in user.
			$defaults['logged_in_as'] = '';

			// No notes before the comment (like the fact that your email won't be published.
			$defaults['comment_notes_before'] = '';

			// We want a some classes to be present.
			$defaults['class_container'] .= ' novablocks-conversations__form';
			$defaults['class_form'] .= ' form-grid';

			// Change details about the reply logic and behavior.
			// Basically, we don't want the reply title and the wrappers.
			$defaults['title_reply']         = '';
			$defaults['title_reply_before']  = '';
			$defaults['title_reply_after']   = '';
			$defaults['cancel_reply_before'] = '';
			$defaults['cancel_reply_after']  = '';

			$defaults['cancel_reply_link'] = $attributes['cancelReplyLabel'] ? $attributes['cancelReplyLabel'] : esc_html__( 'Cancel reply', '__plugin_txtd' );

			// Change the submit button
			$defaults['label_submit'] = $attributes['submitLabel'] ? $attributes['submitLabel'] : esc_html__( 'Add this comment', '__plugin_txtd' );
			$defaults['submit_button'] = '<button name="%1$s" type="submit" id="%2$s" class="%3$s">%4$s</button>';

			return $defaults;
		}

		public function handle_featured_comments() {

			if ( ! isset( $_POST['do'] ) ) die;

			$action = $_POST['do'];

			$actions = array_keys( $this->actions );

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
						update_comment_meta( $comment_id, 'nb_comment_featured', '1' );
						break;

					case 'unfeature':
						update_comment_meta( $comment_id, 'nb_comment_featured', '0' );
						break;

						die( wp_create_nonce( 'featured_comments' ) );

				}
			}

			die;
		}

		/**
		 * Replace any content tags present in the content.
		 *
		 * @param string $content
		 * @param int $post_id
		 * @param int $user_id
		 *
		 * @return string
		 */
		static public function replace_content_tags( $content, $post_id = null, $user_id = null ) {
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
					$content = str_replace( ['%author%', '%author_display_name%'], get_the_author_meta( 'display_name', $user_id ), $content );
				}
			}

			// Allow others to alter the content after we did our work
			return apply_filters( 'novablocks_after_parse_content_tags', $content, $original_content, $post_id, $user_id );
		}

		public static function get_toplevel_comments_number( $post_id ) {
			$top_level_query = new WP_Comment_Query();
			$top_level_args  = array(
					'count'   => true,
					'orderby' => false,
					'post_id' => $post_id,
					'status'  => 'approve',
					'parent' => 0,
			);

			return $top_level_query->query( $top_level_args );
		}

		public function get_user_completed_background() {
			// We only want to do this for logged-in users.

			if ( is_user_logged_in() ) {

				global $current_user;

				// Args used to filter comments.
				// We need one approved comment from current_user.
				$args = array(
						'user_id' => $current_user->ID,
						'number'  => '1',
						'status' => 'approve'
				);

				// Get comments for logged-in user.
				$comments = get_comments( $args );

				if ( $comments ) {

					// Get comment meta for the current user and use it to update the input default value.
					$commenter_background_value = get_comment_meta( $comments[0]->comment_ID, 'nb_commenter_background', true );

					return $commenter_background_value;
				}
			}

			return '';
		}

		/**
		 * Main NovaBlocks_Comments Instance
		 *
		 * Ensures only one instance of NovaBlocks_Comments is loaded or can be loaded.
		 *
		 * @since  1.8.0
		 * @static
		 *
		 * @see    NovaBlocks_Comments()
		 * @return NovaBlocks_Comments Main NovaBlocks_Comments instance
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

return NovaBlocks_Comments::instance();
