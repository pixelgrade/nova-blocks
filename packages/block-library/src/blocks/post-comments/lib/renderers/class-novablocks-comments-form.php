<?php
/**
 * NovaBlocks_Comments_Form Class
 *
 * @since    1.8.0
 * @package  NovaBlocks
 * @author   Pixelgrade
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
		 * Remember the number of fake form buttons generated so we can generate unique IDs for each.
		 *
		 * @var int
		 */
		protected static $fakeFormButtonInstances = 0;

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
				'html5'       => current_theme_supports( 'html5', 'comment-form' ),

				// Double the actual size for high dpi displays. Set to zero (0) for no avatars.
				'avatarSize'  => 100,
				'avatarClass' => 'avatar',

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
				'commenterBackgroundDescription' => esc_html__( 'Example: Practical philosopher, therapist and writer.', '__plugin_txtd' ),
				// Leave empty for no placeholder.
				'commenterBackgroundPlaceholder' => esc_html__( 'Your relevant background...', '__plugin_txtd' ),

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

				// This is the default comment form submit button label.
				'submitLabel'        => esc_html__( 'Add this comment', '__plugin_txtd' ),
				'cancelReplyLabel'   => esc_html__( 'Cancel reply', '__plugin_txtd' ),
				// This is the label used on the submit button for the comment/reply form.
				'replyToText'        => esc_html__( 'Reply to %s', '__plugin_txtd' ),
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

			$header_args = $this->parse_args( $args );

			// Check if we should actually render.
			if ( ! $this->should_render( $header_args ) ) {
				return '';
			}

			/* ===============================
			 * RENDER THE COMMENTS FORM MARKUP
			 */

			ob_start();

			// Register our hooks just before rendering.
			$this->register_hooks();

			// Output a form button that will show the full form on click.
			// @todo Maybe we should be able to configure if we want a form button.
			$this->the_form_button( $args );

			comment_form( [], $this->post->ID );

			// Unregister our hooks to make sure this instance's logic only applies to this render.
			$this->unregister_hooks();

			$output = ob_get_clean();
			if ( empty( $output ) ) {
				$output = '';
			}

			// Remove the novalidate attribute on the form so HTML5 client validation works as intended.
			// At some point in history it might be removed, but.. @link https://core.trac.wordpress.org/ticket/47595
			$output = preg_replace( '/novalidate/im', '', $output, 1 );

			// If we have output and we have the `cancel-comment-reply-link` CSS somewhere,
			// we need to make sure the comment-reply.js is enqueued (this should not be the theme's job).
			if ( false !== strpos( $output, 'cancel-comment-reply-link' )
			     && comments_open( $this->post->ID )
			     && get_option( 'thread_comments' ) ) {

				wp_enqueue_script( 'comment-reply' );

				// Localize the comment-reply script with our context.
				$localizedConfig = [];
				if ( $this->args['commentRichTextEditor'] ) {
					$localizedConfig['focusOnFieldId'] = 'commentTrixEditor';
				}
				$this->localize_form_args_for_reply( $localizedConfig );
			}

			return $output;
		}

		protected function should_render( $args = [] ) {
			$should_render = true;

			// Do not render the form section if the comments are not opened.
			if ( ! comments_open( $this->post->ID ) ) {
				$should_render = false;
			}

			return apply_filters( 'novablocks_comments_form_should_render', $should_render, $this->post, $args );
		}

		/**
		 * Add the comments list args to the localized comments JS global variable so the client-side logic can make use of them.
		 *
		 * We rely on the fact that the comments frontend script will be enqueued in the page footer, not the header.
		 *
		 * @param array $args
		 *
		 * @return bool
		 */
		protected function localize_form_args_for_reply( $args ) {

			return wp_add_inline_script( 'comment-reply',
				novablocks_get_localize_to_window_script( 'addComment',
					[
						'config' => $args,
					]
				), 'before'
			);
		}

		/**
		 * Output markup for a button that will show the full comment form on click.
		 *
		 * @param array $args Optional. Custom arguments to use for generating the fake form button markup.
		 *                    You can customize the data attributes of the button, placeholder text, etc.
		 *                    By default, the comment form instance args will be used.
		 */
		public function the_form_button( $args = [] ) {
			// Render nothing without a proper post.
			if ( empty( $this->post ) ) {
				return;
			}

			// Merge the received args with the global ones so we have everything in place.
			$args = $this->parse_args( $args );

			$current_user = wp_get_current_user();

			// Increase the instance count
			self::$fakeFormButtonInstances ++;
			// Generate the anchor ID.
			$moveAnchorId = 'fake-form-move-anchor_' . self::$fakeFormButtonInstances;

			/** Replicate the same data attributes used for comment reply links - @see get_comment_reply_link() */
			$data_attributes = [
				'commentid'      => isset( $args['commentid'] ) ? $args['commentid'] : '0',
				'postid'         => $this->post->ID,
				// By default, we will move the form after the fake form move anchor.
				'belowelement'   => isset( $args['belowelement'] ) ? $args['belowelement'] : $moveAnchorId,
				// By default we will use the #respond ID.
				'respondelement' => isset( $args['respondelement'] ) ? $args['respondelement'] : 'respond',

				'replyto' => $args['replyToText'],
			];

			// Handle the replyto text conversions.
			if ( false !== strpos( $data_attributes['replyto'], '%s' ) ) {
				// We will try to replace the conversion with the comment author, if we have a comment.
				if ( ! empty( $data_attributes['commentid'] ) ) {
					$comment = get_comment( $data_attributes['commentid'] );
					if ( empty( $comment ) ) {
						$data_attributes['commentid'] = '0';
						// Fallback to some safe text.
						$data_attributes['replyto'] = ! empty( $args['submitLabel'] ) ? $args['submitLabel'] : esc_html__( 'Add this comment', '__plugin_txtd' );
					} else {
						$data_attributes['replyto'] = sprintf( $data_attributes['replyto'], $comment->comment_author );
					}
				} else {
					// Fallback to some safe text.
					$data_attributes['replyto'] = ! empty( $args['submitLabel'] ) ? $args['submitLabel'] : esc_html__( 'Add this comment', '__plugin_txtd' );
				}
			}

			$data_attributes = apply_filters( 'novablocks_comments_the_form_button_data_attributes', $data_attributes, self::$fakeFormButtonInstances, $args );
			$data_attributes = array_map( 'esc_attr', $data_attributes );

			$data_attributes_string = '';
			foreach ( $data_attributes as $name => $value ) {
				$data_attributes_string .= " data-${name}=\"" . $value . '"';
			}
			$data_attributes_string = trim( $data_attributes_string );

			$avatar = get_avatar( $current_user->ID, $args['avatarSize'], 'identicon', '', [ 'class' => $args['avatarClass'], ] );

			$button_classes = [ 'form-grid', 'fake-form-placeholder', ];
			if ( 0 === $args['avatarSize'] || empty( $avatar ) ) {
				$button_classes[] = 'no-avatar';
			}

			$button_classes = apply_filters( 'novablocks_comments_the_form_button_classes', $button_classes, self::$fakeFormButtonInstances, $args );
			?>

			<div class="fake-form-move-anchor" id="<?php echo esc_attr( $moveAnchorId ); ?>"></div>
			<div class="<?php echo esc_attr( implode( ' ', $button_classes ) ); ?>">
				<?php if ( 0 !== $args['avatarSize'] && ! empty( $avatar ) ) { ?>
					<div class="comment-avatar">
						<?php echo $avatar; ?>
					</div>
				<?php } ?>
				<button
					class="fake-input-button js-open-comment-form" <?php echo $data_attributes_string; ?>><?php echo $args['commentPlaceholder']; ?></button>
			</div>

			<?php
		}

		protected function register_hooks() {
			// Modify the comment form fields.
			add_filter( 'comment_form_default_fields', [ $this, 'adjust_comment_form_default_fields' ], 9, 1 );
			add_filter( 'comment_form_defaults', [ $this, 'adjust_comment_form_defaults' ], 9, 1 );

			add_filter( 'get_avatar', 'novablocks_maybe_inline_svg_avatar', 99, 6 );
		}

		protected function unregister_hooks() {
			remove_filter( 'comment_form_default_fields', [ $this, 'adjust_comment_form_default_fields' ], 9 );
			remove_filter( 'comment_form_defaults', [ $this, 'adjust_comment_form_defaults' ], 9 );

			remove_filter( 'get_avatar', 'novablocks_maybe_inline_svg_avatar', 99 );
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
			$args = $this->args;

			$current_user = wp_get_current_user();
			$commenter    = wp_get_current_commenter();

			$avatar_size = $args['avatarSize'];
			$avatar      = get_avatar( $current_user->ID, $avatar_size, 'identicon', '', [ 'class' => $args['avatarClass'], ] );

			// Generate a comment textarea title (label actually) according to whether we have a user or not.
			// This way we compensate for the lack of a title for logged in users.
			$comment_field_label = $args['commentLabel'];
			if ( ! empty( $args['commentLabelKnownUser'] ) && false !== strpos( $args['commentLabelKnownUser'], '%s' ) ) {
				// If we have a commenter (via cookies) or a user, we will ask the question more personally.
				$commenter_name = false;
				if ( ! empty( $current_user->display_name ) ) {
					$commenter_name = $current_user->display_name;
				} else if ( ! empty( $commenter['comment_author'] ) ) {
					$commenter_name = $commenter['comment_author'];
				}
				if ( ! empty( $commenter_name ) ) {
					/* translators: %s: The current commenter display name. */
					$comment_field_label = sprintf( $args['commentLabelKnownUser'], $commenter_name );
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
				esc_attr( $args['commentPlaceholder'] )
			);
			if ( $args['commentRichTextEditor'] ) {
				// We need to use a different kind of markup.
				// @see https://github.com/basecamp/trix#integrating-with-forms
				// For the available keyboard shortcuts, @see https://github.com/basecamp/trix/wiki/Keyboard-Shortcuts

				$comment_textarea = sprintf( '
<span class="trix-contained-input">
	<span class="trix-inner-wrapper">
		<span class="sticky-trix-toolbar">
			<trix-toolbar id="comment_trix_toolbar"></trix-toolbar>
		</span>
		<trix-editor id="commentTrixEditor" input="comment" placeholder="%s" toolbar="comment_trix_toolbar"></trix-editor>
		<input id="comment" value="" type="text" name="comment" class="trix-hidden-input" required="required" tabindex="-1">
	</span>
</span>
<script>
	var nbCommentForm = document.getElementById("commentform");
	nbCommentForm.addEventListener( "submit", function() {
	    var nbTrixEditor = document.getElementById("commentTrixEditor");
	    // Save editor state to local storage to use when coming back from the error page. 
		localStorage["nbTrixEditorState"] = JSON.stringify(nbTrixEditor.editor);
		localStorage["nbTrixEditorStateUrl"] = window.location.href;
	})

	// Adjust the Trix editor.
	window.addEventListener("trix-initialize", function(event) {
		// Remove the file tools.
		var nbTrixFileTools = event.target.toolbarElement.querySelector(\'[data-trix-button-group="file-tools"]\');
		if ( nbTrixFileTools ) {
		nbTrixFileTools.parentNode.removeChild(nbTrixFileTools);
		}
		
		// Maybe restore editor state from local storage
		var nbTrixEditor = document.getElementById("commentTrixEditor");
		if (localStorage["nbTrixEditorState"] && localStorage["nbTrixEditorState"].length) {
		    // We need to make sure that we are not loading the localStorage after a successful comment submission.
		    if (localStorage["nbTrixEditorStateUrl"] === window.location.href) {
			    // Load the stored JSON into the editor.
				nbTrixEditor.editor.loadJSON(JSON.parse(localStorage["nbTrixEditorState"]));
				
				// Make sure the comment form is expanded.
				var nbCommentFormWrapper = document.getElementsByClassName("novablocks-conversations__form");
				if (nbCommentFormWrapper.length) {
				  // Add the expanded class.
				  nbCommentFormWrapper[0].classList.add("expanded");
				  // And move the form before the fake form button.
				  nbCommentFormWrapper[0].parentNode.insertBefore(nbCommentFormWrapper[0], nbCommentFormWrapper[0].previousElementSibling);
				}
			}
		    
		    // Empty the localStorage entry since this the stored value is one-time use only.
			localStorage["nbTrixEditorState"] = "";
			localStorage["nbTrixEditorStateUrl"] = "";
		}
	})
	window.addEventListener("trix-file-accept", function(event) {
	  // Do not allow file drop or paste.
	  event.preventDefault();
	  alert("File attachments are not supported for comments. Use words to picture your message.")
	})
</script>',
					$args['commentPlaceholder']
				);

				// We will also enqueue the scripts and styles needed.
				// These should be already registered by this point.
				wp_enqueue_script( 'trix' );
				wp_enqueue_style( 'trix-custom' );
			}

			$defaults['comment_field'] .=
				sprintf( '<p class="comment-form-comment"><label for="comment">%s</label><span class="field-description">%s</span>%s</p>',
					$comment_field_label,
					$args['commentDescription'],
					$comment_textarea
				);

			// Third, the commenter background field.
			if ( $args['commenterBackground'] ) {
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
	<input id="nb_commenter_background" name="nb_commenter_background" type="text" value="%s" size="30" placeholder="%s" required="required" />
</p>',
						$args['commenterBackgroundLabel'],
						( $args['commenterBackgroundRequired'] ? ' <span class="required">*</span>' : '' ),
						$args['commenterBackgroundDescription'],
						esc_attr( $previous_commenter_background ),
						esc_attr( $args['commenterBackgroundPlaceholder'] )
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

			$defaults['cancel_reply_link'] = $args['cancelReplyLabel'] ? $args['cancelReplyLabel'] : esc_html__( 'Cancel reply', '__plugin_txtd' );

			// Change the submit button
			$defaults['label_submit']  = $args['submitLabel'] ? $args['submitLabel'] : esc_html__( 'Add this comment', '__plugin_txtd' );
			$defaults['id_submit']     = 'comment-form-submit';
			$defaults['submit_button'] = '<button name="%1$s" type="submit" id="%2$s" class="%3$s">%4$s</button>';

			return $defaults;
		}
	}
}
