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
		 * Add an edit option in comment edit screen.
		 */
		public function extend_comment_add_meta_box() {
			$screen = function_exists( 'get_current_screen' ) ? get_current_screen() : null;

			if ( $screen instanceof \WP_Screen && isset( $_GET['c'] ) && 'comment' === $screen->id ) {

				$comment_id = (int) $_GET['c'];
				$comment    = get_comment( $comment_id );

				if ( $comment && in_array( $comment->comment_type, [ 'comment' ], false ) ) {
					add_meta_box( 'nb_comment_extra_details', esc_html__( 'Extra Details', '__plugin_txtd' ), array(
							$this,
							'extend_comment_meta_box'
					), 'comment', 'normal', 'high' );
				}
			}
		}

		public function extend_comment_meta_box( $comment ) {
			$commenter_background = get_comment_meta( $comment->comment_ID, 'nb_commenter_background', true );
			$comment_featured = get_comment_meta( $comment->comment_ID, 'nb_comment_featured', true );
			wp_nonce_field( 'extend_comment_update', 'extend_comment_update', false );
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
								<span class="description"><?php esc_html_e( 'Feature this comment at the top of the comments list, if the comments list displays featured comments.', '__plugin_txtd' ); ?></span>
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
		public function extend_comment_edit_metafields( $comment_id ) {
			if ( ! isset( $_POST['extend_comment_update'] ) || ! wp_verify_nonce( $_POST['extend_comment_update'], 'extend_comment_update' ) ) {
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
	}
}

return new NovaBlocks_Comments();
