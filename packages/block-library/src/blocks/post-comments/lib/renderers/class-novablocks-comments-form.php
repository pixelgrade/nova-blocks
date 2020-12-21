<?php
/**
 * NovaBlocks_Comments_Form Class
 *
 * @author   Pixelgrade
 * @package  NovaBlocks
 * @since    1.8.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'NovaBlocks_Comments_Form' ) ) {

	/**
	 * The NovaBlocks Comments Form rendering class
	 */
	class NovaBlocks_Comments_Form {

		/**
		 * The post to render comments form for.
		 *
		 * @var WP_Post
		 */
		protected $post = null;

		/**
		 * The arguments to consider when rendering.
		 *
		 * These configure and adapt the behavior.
		 *
		 * @var array
		 */
		protected $args = [];

		/**
		 * Instantiate a comments form renderer.
		 *
		 * @param WP_Post|int|null $post Optional. The post who's comments to render. Defaults to the current post.
		 * @param array            $args Optional. The arguments to consider when rendering.
		 */
		public function __construct( $post = null, $args = [] ) {
			$this->post = get_post( $post, OBJECT );

			// Make sure defaults are in place.
			$this->args = wp_parse_args( $args, [
				// Output HTML5 markup
				'html5' => current_theme_supports( 'html5', 'comment-form' ),

				'commentLabel'                   => esc_html__( 'What\'s your comment or question?', '__plugin_txtd' ),
				// A special label that will include the commenter name.
				// Leave empty to use only the 'commentLabel'.
				/* translators %s: The current commenter name. */
				'commentLabelKnownUser'          => esc_html__( 'What\'s your comment or question, %s?', '__plugin_txtd' ),
				// Leave empty for no description.
				'commentDescription'             => esc_html__( 'Let\'s start a personal, meaningful conversation.', '__plugin_txtd' ),
				// Leave empty for no placeholder.
				'commentPlaceholder'             => esc_html__( 'Share your knowledge or ask a question..', '__plugin_txtd' ),
				// Control whether to provide a rich text editor experience.
				// In our case we will provide the simple, but powerful Trix rich text editor (https://github.com/basecamp/trix).
				'commentRichTextEditor'          => true,

				// Display the commenter background field.
				'commenterBackground'            => true,
				'commenterBackgroundRequired'    => true,
				'commenterBackgroundLabel'       => esc_html__( 'What is your background around this topic?', '__plugin_txtd' ),
				// Leave empty for no description.
				'commenterBackgroundDescription' => '',
				// Leave empty for no placeholder.
				'commenterBackgroundPlaceholder' => esc_html__( 'Practical philosopher, therapist and writer.', '__plugin_txtd' ),

				'commenterNameLabel'       => esc_html__( 'What is your name?', '__plugin_txtd' ),
				// Leave empty for no description.
				'commenterNameDescription' => '',
				// Leave empty for no placeholder.
				'commenterNamePlaceholder' => esc_html__( 'Ernest Hemingway', '__plugin_txtd' ),

				'commenterEmailLabel'       => esc_html__( 'What is your email address?', '__plugin_txtd' ),
				// Leave empty for no description.
				'commenterEmailDescription' => esc_html__( 'It will not be published or shared with others.', '__plugin_txtd' ),
				// Leave empty for no placeholder.
				'commenterEmailPlaceholder' => esc_html__( 'your@email.com', '__plugin_txtd' ),

				// Hide the commenter URL field by default.
				'commenterUrl'              => false,
				'commenterUrlLabel'         => esc_html__( 'What is your website URL?', '__plugin_txtd' ),
				// Leave empty for no description.
				'commenterUrlDescription'   => '',
				// Leave empty for no placeholder.
				'commenterUrlPlaceholder'   => esc_html__( 'https://yourwonderfulsite.com', '__plugin_txtd' ),

				'cookieConsentLabel' => esc_html__( 'Save my details in this browser for the next time I comment.', '__plugin_txtd' ),

				'submitLabel'      => esc_html__( 'Add this comment', '__plugin_txtd' ),
				'cancelReplyLabel' => esc_html__( 'Cancel reply', '__plugin_txtd' ),
			] );
		}

		/**
		 * Entry point to render the comments form.
		 *
		 * @param array $args Optional. Right now, you can only pass args for the form button logic, not the whole comment form.
		 *                    Use the constructor arguments for that.
		 *
		 * @return string
		 */
		public function render( $args = [] ) {
			// Render nothing without a proper post.
			if ( empty( $this->post ) ) {
				return '';
			}

			/* ===============================
			 * RENDER THE COMMENTS FORM MARKUP
			 */

			ob_start();

			// Output a form button that will show the full form on click.
			// @todo Maybe we should be able to configure if we want a form button.
			$this->the_form_button( $args );

			// Register our hooks just before rendering.
			$this->register_hooks();

			comment_form( [], $this->post->ID );

			// Unregister our hooks to make sure this instance's logic only applies to this render.
			$this->unregister_hooks();

			return ob_get_clean();
		}

		/**
		 * Output markup for a button that will show the full comment form on click.
		 *
		 * @param array   $args The origin block attributes.
		 */
		public function the_form_button( $args = [] ) {

			$form_attributes = $this->parse_args( $args );

			$current_user = wp_get_current_user();

			// @todo This should be configurable.
			$avatar_size = 100;
			?>

			<div class="form-grid js-generate-form fake-form-placeholder">
				<div class="comment-avatar">
					<?php echo get_avatar( $current_user->ID, $avatar_size, 'identicon', '', [ 'class' => 'avatar', ] ); ?>
				</div>
				<button class="fake-input-button">
					<?php echo $form_attributes['commentPlaceholder']; ?>
				</button>
			</div>

			<?php
		}

		protected function register_hooks() {
			// Modify the comment form fields.
			add_filter( 'comment_form_default_fields', [ $this, 'adjust_comment_form_default_fields' ], 9, 1 );
			add_filter( 'comment_form_defaults', [ $this, 'adjust_comment_form_defaults' ], 9, 1 );
		}

		protected function unregister_hooks() {
			remove_filter( 'comment_form_default_fields', [ $this, 'adjust_comment_form_default_fields' ], 9 );
			remove_filter( 'comment_form_defaults', [ $this, 'adjust_comment_form_defaults' ], 9 );
		}

		/**
		 * Prepare the given rendering arguments by merging them with the existing ones in the instance.
		 *
		 * @param array $args
		 *
		 * @return array
		 */
		protected function parse_args( $args ) {
			return wp_parse_args( $args, $this->args );
		}

		public function adjust_comment_form_default_fields( $fields ) {
			$attributes = $this->args;

			$commenter = wp_get_current_commenter();
			$req       = get_option( 'require_name_email' );
			$html_req  = ( $req ? " required='required'" : '' );

			$new_fields = [
				'author' => sprintf(
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
				'email'  => sprintf(
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
				'url'    => sprintf(
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
			];

			if ( has_action( 'set_comment_cookies', 'wp_set_comment_cookies' ) && get_option( 'show_comments_cookies_opt_in' ) ) {
				$consent               = empty( $commenter['comment_author_email'] ) ? '' : ' checked="checked"';
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
			$attributes = $this->args;

			$current_user = wp_get_current_user();
			$commenter    = wp_get_current_commenter();

			$avatar_size = 100;
			$avatar      = get_avatar( $current_user->ID, $avatar_size, 'identicon', '', [ 'class' => 'avatar', ] );

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
				'<textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" required="required" placeholder="%s"></textarea>',
				esc_attr( $attributes['commentPlaceholder'] )
			);
			if ( $attributes['commentRichTextEditor'] ) {
				// We need to use a different kind of markup.
				// @see https://github.com/basecamp/trix#integrating-with-forms
				// For the available keyboard shortcuts, @see https://github.com/basecamp/trix/wiki/Keyboard-Shortcuts

				$comment_textarea = sprintf( '
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
				wp_enqueue_style( 'trix-custom' );
			}

			$defaults['comment_field'] .=
				sprintf( '<p class="comment-form-comment"><label for="comment">%s</label><span class="field-description">%s</span>%s</p>',
					$comment_field_label,
					$attributes['commentDescription'],
					$comment_textarea
				);

			// Third, the commenter background field.
			if ( $attributes['commenterBackground'] ) {
				// We will try to prefill the commenter background for people who have previously commented to this post.
				$previous_commenter_background = '';

				$previous_commenter_background_query_args = [];
				if ( ! empty( $current_user->ID ) ) {
					$previous_commenter_background_query_args['user_id'] = $current_user->ID;
				} else if ( ! empty( $commenter['comment_author_email'] ) ) {
					$previous_commenter_background_query_args['author_email'] = sanitize_email( $commenter['comment_author_email'] );
				}

				if ( ! empty( $previous_commenter_background_query_args ) ) {
					$previous_commenter_background_query_args = array_merge( $previous_commenter_background_query_args, [
						'fields'  => 'ids',
						'number'  => 1,
						'count'   => false,
						'orderby' => 'comment_date_gmt',
						'order'   => 'DESC',
						'post_id' => $this->post->ID,
					] );

					$last_comment = get_comments( $previous_commenter_background_query_args );
					if ( ! empty( $last_comment ) ) {
						$previous_commenter_background = get_comment_meta( $last_comment[0], 'nb_commenter_background', true );
					}
				}

				// We need to add the commenter background field to the comment textarea because we want it for logged in users too.
				$defaults['comment_field'] .=
					sprintf( '
<p class="comment-form-background comment-fields-wrapper">
	<label for="nb_commenter_background">%s%s</label>
	<span class="field-description">%s</span>
	<input id="nb_commenter_background" name="nb_commenter_background" type="text" value="%s" size="30" tabindex="5" placeholder="%s" required="required" />
</p>',
						$attributes['commenterBackgroundLabel'],
						( $attributes['commenterBackgroundRequired'] ? ' <span class="required">*</span>' : '' ),
						$attributes['commenterBackgroundDescription'],
						esc_attr( $previous_commenter_background ),
						esc_attr( $attributes['commenterBackgroundPlaceholder'] )
					);
			}

			// No title or section related to the logged in user.
			$defaults['logged_in_as'] = '';

			// No notes before the comment (like the fact that your email won't be published.
			$defaults['comment_notes_before'] = '';

			// We want a some classes to be present.
			$defaults['class_container'] .= ' novablocks-conversations__form';
			$defaults['class_form']      .= ' form-grid';

			// Change details about the reply logic and behavior.
			// Basically, we don't want the reply title and the wrappers.
			$defaults['title_reply']         = '';
			$defaults['title_reply_before']  = '';
			$defaults['title_reply_after']   = '';
			$defaults['cancel_reply_before'] = '';
			$defaults['cancel_reply_after']  = '';

			$defaults['cancel_reply_link'] = $attributes['cancelReplyLabel'] ? $attributes['cancelReplyLabel'] : esc_html__( 'Cancel reply', '__plugin_txtd' );

			// Change the submit button
			$defaults['label_submit']  = $attributes['submitLabel'] ? $attributes['submitLabel'] : esc_html__( 'Add this comment', '__plugin_txtd' );
			$defaults['submit_button'] = '<button name="%1$s" type="submit" id="%2$s" class="%3$s">%4$s</button>';

			return $defaults;
		}
	}
}
