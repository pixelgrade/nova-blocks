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
		public function __construct() {
			add_action( 'comment_post', array( $this, 'save_comment_meta_data' ) );
			add_filter( 'preprocess_comment', array( $this, 'verify_comment_meta_data' ) );
			add_action( 'add_meta_boxes_comment', array( $this, 'extend_comment_add_meta_box' ) );
			add_action( 'edit_comment', array( $this, 'extend_comment_edit_metafields' ) );
		}

		/**
		 * Save the comment meta data along with comment.
		 */
		public function save_comment_meta_data( $comment_id ) {

			if ( ( isset( $_POST['nb_commenter_background'] ) ) && ( $_POST['nb_commenter_background'] != '' ) ) {
				$experience = wp_filter_nohtml_kses( $_POST['nb_commenter_background'] );
			}
			add_comment_meta( $comment_id, 'nb_commenter_background', $experience );
		}

		/**
		 * Add the filter to check if the comment meta data has been filled or not.
		 */
		public function verify_comment_meta_data( $commentdata ) {
			if ( ! isset( $_POST['nb_commenter_background'] ) ) {
				wp_die( __( 'Error: You did not add your experience.' ) );
			}

			return $commentdata;
		}

		/**
		 * Add an edit option in comment edit screen.
		 */
		public function extend_comment_add_meta_box() {
			add_meta_box( 'nb_commenter_background', __( 'Commenter Experience' ), array( $this, 'extend_comment_meta_box'), 'comment', 'normal', 'high' );
		}

		public function extend_comment_meta_box( $comment ) {
			$experience = get_comment_meta( $comment->comment_ID, 'nb_commenter_background', true );
			wp_nonce_field( 'extend_comment_update', 'extend_comment_update', false );
			?>
			<p>
				<label for="nb_commenter_background"><?php _e( 'Experience' ); ?></label>
				<input type="text" name="nb_commenter_background" value="<?php echo esc_attr( $experience ); ?>"/>
			</p>

			<?php
		}

		/**
		 * Update comment meta data from comment edit screen.
		 */
		public function extend_comment_edit_metafields( $comment_id ) {
			if ( ! isset( $_POST['extend_comment_update'] ) || ! wp_verify_nonce( $_POST['extend_comment_update'], 'extend_comment_update' ) ) {
				return;
			}

			if ( ( isset( $_POST['nb_commenter_background'] ) ) && ( $_POST['nb_commenter_background'] != '' ) ):
				$experience = wp_filter_nohtml_kses( $_POST['nb_commenter_background'] );
				update_comment_meta( $comment_id, 'nb_commenter_background', $experience );
			else :
				delete_comment_meta( $comment_id, 'nb_commenter_background' );
			endif;
		}

		public function novablocks_comment_time_human_friendly( $comment ) {

			$comment_date = get_comment_date( 'U', $comment );

			if ( current_time( 'timestamp' ) - $comment_date < MINUTE_IN_SECONDS ) {
				$time_text = 'Just now';
			} else if ( time() < strtotime( get_comment_time( 'U', true ) ) + 14 * DAY_IN_SECONDS ) {
				$time_text = get_comment_date( 'M j Y' );
			} else {
				$time_text = sprintf(
					_x( '%s ago', '%s = human-readable time difference', 'storechild' ),
					human_time_diff(
						get_comment_time( 'U' ),
						current_time( 'timestamp' ) )
				);
			}

			echo $time_text;
		}

		/**
		 * Nova Blocks comment template.
		 *
		 * @param array $comment the comment array.
		 * @param array $args the comment args.
		 * @param int $depth the comment depth.
		 *
		 * @since 1.7.0
		 */
		public function novablocks_comments_list( $comment, $args, $depth ) { ?>
			<div <?php comment_class( empty( $args['has_children'] ) ? '' : 'parent' ) ?>
				id="comment-<?php comment_ID() ?>">
				<div class="comment-body comment-grid">
					<div id="div-comment-<?php comment_ID() ?>" class="comment-content">
						<div class="comment-author-avatar vcard">
							<?php echo get_avatar( $comment, 128 ); ?>
						</div>

						<div class="comment-author-info">
							<span class="comment-author"> <?php comment_author( $comment ) ?></span>
							<?php

							$user_experience = get_comment_meta( $comment->comment_ID, 'nb_commenter_background', true );

							if ( ! empty( $user_experience ) ) { ?>
								<div class="comment-experience"><span
											class="experience-label"><?php echo $user_experience ?></span></div>
							<?php } ?>
						</div>

						<div class="comment-text">
							<?php comment_text(); ?>
						</div>
						<div class="comment-footer">
							<span class="comment-posted-time"><?php NovaBlocks_Comments::novablocks_comment_time_human_friendly( $comment ) ?></span>
							<span class="reply">
								<?php comment_reply_link( array_merge( $args, array(
									'depth'     => $depth,
									'max_depth' => $args['max_depth']
								) ) ); ?>
								<?php edit_comment_link( __( 'Edit', 'storefront' ), '  ', '' ); ?>
							</span>
						</div>
					</div>
			</div>
		<?php }

		/**
		 * Nova Blocks Comment Form args.
		 */
		public function novablocks_comment_form_args() {

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
									 __( 'What’s your comment or question?', '__plugin_txtd' ),
									 __( 'Let’s start a personal and a meaningful conversation.', '__plugin_txtd' ),
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
									'<input id="author" name="author" type="text" value="%s" size="30" maxlength="245"%s placeholder="eg. John Doe" />',
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
									'<input id="email" name="email" %s value="%s" size="30" maxlength="100" aria-describedby="email-notes"%s placeholder="your@email.com" />',
									'type="email"',
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
					'label_submit'         => 'Add this comment',
					'submit_button'        => '<button name="%1$s" type="submit" id="%2$s" class="%3$s">%4$s</button>',
			);
		}
	}
}

return new NovaBlocks_Comments();
