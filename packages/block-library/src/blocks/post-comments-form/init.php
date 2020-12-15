<?php
/**
 * Handle Post Comments Form block server logic.
 */

/**
 * Renders the `core/post-comments-form` block on the server.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 * @return string Returns the filtered post comments form for the current post.
 */

if ( ! function_exists( 'novablocks_render_post_comments_form_block' ) ) {
	function novablocks_render_post_comments_form_block( $attributes, $content, $block ) {
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
			// Output HTML5 markup
			'html5' => current_theme_supports( 'html5', 'comment-form' ),

			'commentLabel' => esc_html__( 'What\'s your comment or question?', '__plugin_txtd' ),
			// A special label that will include the commenter name.
			// Leave empty to use only the 'commentLabel'.
			/* translators %s: The current commenter name. */
			'commentLabelKnownUser' => esc_html__( 'What\'s your comment or question, %s?', '__plugin_txtd' ),
			// Leave empty for no description.
			'commentDescription' => esc_html__( 'Let\'s start a personal and a meaningful conversation.', '__plugin_txtd' ),
			// Leave empty for no placeholder.
			'commentPlaceholder' => esc_html__( 'Share your knowledge or ask a question..', '__plugin_txtd' ),
			// Control whether to provide a rich text editor experience.
			// In our case we will provide the simple, but powerful Trix rich text editor (https://github.com/basecamp/trix).
			'commentRichTextEditor' => true,

			// Display the commenter background field.
			'commenterBackground' => true,
			'commenterBackgroundRequired' => true,
			'commenterBackgroundLabel' => esc_html__( 'What is your background around this topic?', '__plugin_txtd' ),
			// Leave empty for no description.
			'commenterBackgroundDescription' => esc_html__( 'Example: Practical philosopher, therapist and writer.', '__plugin_txtd' ),
			// Leave empty for no placeholder.
			'commenterBackgroundPlaceholder' => esc_html__( 'Put some background behind your thoughts..', '__plugin_txtd' ),

			'commenterNameLabel' => esc_html__( 'What is your name?', '__plugin_txtd' ),
			// Leave empty for no description.
			'commenterNameDescription' => '',
			// Leave empty for no placeholder.
			'commenterNamePlaceholder' => esc_html__( 'Ernest Hemingway', '__plugin_txtd' ),

			'commenterEmailLabel' => esc_html__( 'What is your email address?', '__plugin_txtd' ),
			// Leave empty for no description.
			'commenterEmailDescription' => esc_html__( 'It will not be published or shared with others.', '__plugin_txtd' ),
			// Leave empty for no placeholder.
			'commenterEmailPlaceholder' => esc_html__( 'your@email.com', '__plugin_txtd' ),

			// Hide the commenter URL field by default.
			'commenterUrl' => false,
			'commenterUrlLabel' => esc_html__( 'What is your website URL?', '__plugin_txtd' ),
			// Leave empty for no description.
			'commenterUrlDescription' => '',
			// Leave empty for no placeholder.
			'commenterUrlPlaceholder' => esc_html__( 'https://yourwonderfulsite.com', '__plugin_txtd' ),

			'cookieConsentLabel' => esc_html__( 'Save my details in this browser for the next time I comment.', '__plugin_txtd' ),

			'submitLabel' => esc_html__( 'Add this comment', '__plugin_txtd' ),
			'cancelReplyLabel' => esc_html__( 'Cancel reply', '__plugin_txtd' ),
		] );

		ob_start();

		// To be able to accurately determine the post this comment form applies to (eg. in filters), we will use this global.
		$GLOBALS['nb_current_comment_form_post_id'] = $post_id;
		// We will also make available the block attributes.
		$GLOBALS['nb_current_comment_form_block_attributes'] = $attributes;

		comment_form( [], $post_id );

		// Cleanup to make sure these values are one-time use.
		unset( $GLOBALS['nb_current_comment_form_post_id'] );
		unset( $GLOBALS['nb_current_comment_form_block_attributes'] );

		return ob_get_clean();
	}
}
