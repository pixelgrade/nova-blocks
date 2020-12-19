<?php
/**
 * NovaBlocks_Comments_Logic Class
 *
 * @author   Pixelgrade
 * @package  NovaBlocks
 * @since    1.8.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'NovaBlocks_Comments_Logic' ) ) {

	/**
	 * The NovaBlocks Comments (Functional) Logic class
	 */
	class NovaBlocks_Comments_Logic {


		public $actions = [];

		/**
		 * The NovaBlocks_Comments_Highlight instance.
		 * @since   1.8.0
		 * @var     NovaBlocks_Comments_Highlight|null
		 */
		public $highlight = null;

		/**
		 * Instance of this class (the singleton pattern).
		 * @since    1.8.0
		 * @var      NovaBlocks_Comments_Logic
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
			 * Initialize sub-components.
			 */

			// Get the instance that will handle highlighting comments.
			require_once 'actions/class-novablocks-comments-highlight.php';
			if ( is_null( $this->highlight ) ) {
				$this->highlight = NovaBlocks_Comments_Highlight::instance();
			}

			/*
			 * Register all needed hooks.
			 */
			$this->register_hooks();
		}

		private function register_hooks() {

			// Handle comment extra meta fields.
			add_action( 'comment_post', [ $this, 'save_comment_meta_data' ] );
			add_filter( 'preprocess_comment', [ $this, 'verify_comment_meta_data' ] );
			add_action( 'add_meta_boxes_comment', [ $this, 'add_comment_meta_box' ] );
			add_action( 'edit_comment', [ $this, 'save_metabox_fields' ] );
			// Handle per-post extra fields.
			add_action( 'add_meta_boxes_post', [ $this, 'add_posts_discussion_metabox' ], 10, 1 );
			add_action( 'save_post_post', [ $this, 'save_posts_metabox_fields' ], 10, 1 );
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
		 * Check if the comment meta data has been filled or not.
		 *
		 * @param array $commentdata
		 *
		 * @return array
		 */
		public function verify_comment_meta_data( $commentdata ) {
			// We only enforce the commenter background for comments, not other types like reviews.
			if ( empty( $commentdata['comment_type'] ) || 'comment' !== $commentdata['comment_type'] ) {
				return $commentdata;
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

		public function add_posts_discussion_metabox( $post ) {
			add_meta_box( 'nb_post_discussion_extra_details', esc_html__( 'Discussion Extra Details', '__plugin_txtd' ), [
					$this,
					'posts_discussion_metabox_fields'
			], 'post', 'normal', 'high' );
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
									[
										'who'              => 'authors',
										'name'             => 'nb_conversation_starter_user_id',
										'selected'         => empty( $conversation_starter_user_ID ) ? $post->post_author : $conversation_starter_user_ID,
										'include_selected' => true,
										'show'             => 'display_name_with_login',
									]
							); ?>
							<p class="description"><?php esc_html_e( 'Who is doing the conversation starting? By default, it\'s the post author.', '__plugin_txtd' ); ?></p>
						</td>
					</tr>

					<?php
					// Allow others to add fields here.
					do_action( 'novablocks_post_discussion_extra_details_fields', $post );
					?>

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

		/**
		 * Main NovaBlocks_Comments_Logic Instance
		 *
		 * Ensures only one instance of NovaBlocks_Comments_Logic is loaded or can be loaded.
		 *
		 * @since  1.8.0
		 * @static
		 *
		 * @see    NovaBlocks_Comments_Logic()
		 * @return NovaBlocks_Comments_Logic Main NovaBlocks_Comments_Logic instance
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
 * Returns the main instance of NovaBlocks_Comments_Logic.
 *
 * @since  1.8.0
 * @return NovaBlocks_Comments_Logic
 */
function NovaBlocks_Comments_Logic() {
	return NovaBlocks_Comments_Logic::instance();
}

// Auto-initialize on file load.
NovaBlocks_Comments_Logic();
