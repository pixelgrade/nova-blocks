<?php
/**
 * NovaBlocks_Comments_Meta Class
 *
 * @author   Pixelgrade
 * @package  NovaBlocks
 * @since    1.8.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'NovaBlocks_Comments_Meta' ) ) {

	/**
	 * The NovaBlocks Comments Meta logic class
	 */
	class NovaBlocks_Comments_Meta {

		/**
		 * Instance of this class (the singleton pattern).
		 * @since    1.8.0
		 * @var      NovaBlocks_Comments_Meta
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

			/*
			 * Register all needed hooks.
			 */
			$this->register_hooks();
		}

		private function register_hooks() {
			add_action( 'comment_post', [ $this, 'save_comment_meta_data' ] );
			add_filter( 'preprocess_comment', [ $this, 'verify_comment_meta_data' ] );
			add_action( 'add_meta_boxes_comment', [ $this, 'add_comment_meta_box' ] );
			add_action( 'edit_comment', [ $this, 'save_metabox_fields' ] );
		}

		/**
		 * Check if the comment meta data has been filled or not.
		 *
		 * @param array $commentdata
		 *
		 * @return array
		 */
		public function verify_comment_meta_data( $commentdata ) {
			// We only do the checks on the frontend, not in the WordPress Dashboard.
			if ( current_user_can( 'moderate_comments' ) && is_admin() ) {
				return $commentdata;
			}

			// We only enforce the commenter background for comments, not other types like reviews.
			if ( empty( $commentdata['comment_type'] ) || 'comment' !== $commentdata['comment_type'] ) {
				return $commentdata;
			}

			// Through some management interfaces (probably WordPress admin), replies to other comment types may come here as regular comments ("comment" type).
			// We skip the checks for replies with parent comments that are not of the "comment" type.
			if ( ! empty( $commentdata['comment_parent'] ) ) {
				$parent_comment = get_comment( $commentdata['comment_parent'] );
				if ( ! empty( $parent_comment ) && 'comment' !== $parent_comment->comment_type ) {
					return $commentdata;
				}
			}

			if ( empty( $_POST['nb_commenter_background'] ) ) {
				$comment = new WP_Error( 'require_nb_commenter_background', __( '<strong>Error</strong>: You did not add your relevant background or experience.', '__plugin_txtd' ), 200 );
			} else {
				$stripped_background = trim( strip_tags( $_POST['nb_commenter_background'] ) );
				if ( mb_strlen( $stripped_background, '8bit' ) > 245 ) {
					$comment = new WP_Error( 'nb_commenter_background_length', __( '<strong>Error</strong>: Your background or experience is too long.' ), 200 );
				}
			}

			if ( empty( $comment ) ) {
				return $commentdata;
			}

			// Die in a standard way, like wp-comments-post.php does it, so AJAX plugins can behave themselves.
			$data = intval( $comment->get_error_data() );
			if ( ! empty( $data ) ) {
				wp_die(
					'<p>' . $comment->get_error_message() . '</p>',
					esc_html__( 'Comment Submission Failure', '__plugin_txtd' ),
					[
						'response'  => $data,
						'back_link' => true,
					]
				);
			}

			exit;
		}

		/**
		 * Save the comment meta data along with the comment.
		 */
		public function save_comment_meta_data( $comment_id ) {
			if ( ! empty( $_POST['nb_commenter_background'] ) ) {
				$commenter_background = trim( strip_tags( $_POST['nb_commenter_background'] ) );
				if ( ! empty( $commenter_background ) ) {
					update_comment_meta( $comment_id, 'nb_commenter_background', $commenter_background );
				}
			}

			// Allow others to save whatever they may have added.
			do_action( 'novablocks_comment_extra_details_save_metadata', $comment_id );
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
					add_meta_box( 'nb_comment_extra_details', esc_html__( 'Extra Details', '__plugin_txtd' ), [
							$this,
							'comment_meta_box_fields'
					], 'comment', 'normal', 'high' );
				}
			}
		}

		/**
		 * Output the comment edit metabox fields markup.
		 *
		 * @param WP_Comment $comment
		 */
		public function comment_meta_box_fields( $comment ) {
			// Safety first.
			wp_nonce_field( 'nb_save_metabox_fields', 'nb_comment_extra_details', false );
			?>

			<fieldset class="widefat">
				<legend class="screen-reader-text"><?php esc_html_e( 'Comment extra details', '__plugin_txtd' ); ?></legend>
				<table class="" role="presentation">
					<tbody>
						<tr>
							<td class="first"><label for="nb_commenter_background"><strong><?php esc_html_e( 'Commenter Relevant Background', '__plugin_txtd' ); ?></strong></label></td>
							<td><input type="text" name="nb_commenter_background" value="<?php echo esc_attr( get_comment_meta( $comment->comment_ID, 'nb_commenter_background', true ) ); ?>" size="30" class="regular-text"/></td>
						</tr>

						<?php
						// Allow others to add fields here.
						do_action( 'novablocks_comment_extra_details_fields', $comment );
						?>

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

			// Allow others to save whatever they may have added.
			do_action( 'novablocks_comment_extra_details_save_fields', $comment_id );
		}

		/**
		 * Main NovaBlocks_Comments_Meta Instance
		 *
		 * Ensures only one instance of NovaBlocks_Comments_Meta is loaded or can be loaded.
		 *
		 * @since  1.8.0
		 * @static
		 *
		 * @see    NovaBlocks_Comments_Meta()
		 * @return NovaBlocks_Comments_Meta Main NovaBlocks_Comments_Meta instance
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

/**
 * Returns the main instance of NovaBlocks_Comments_Meta.
 *
 * @since  1.8.0
 * @return NovaBlocks_Comments_Meta
 */
function NovaBlocks_Comments_Meta() {
	return NovaBlocks_Comments_Meta::instance();
}
