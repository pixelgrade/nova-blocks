<?php
/**
 * NovaBlocks_Comments_Render Class
 *
 * @author   Pixelgrade
 * @package  NovaBlocks
 * @since    1.8.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'NovaBlocks_Comments_Render' ) ) {

	/**
	 * The NovaBlocks Comments Render (Logic) class
	 */
	class NovaBlocks_Comments_Render {

		/**
		 * The NovaBlocks_Comments_Header instance.
		 * @since   1.8.0
		 * @var     NovaBlocks_Comments_Header|null
		 */
		public $header = null;

		/**
		 * The NovaBlocks_Comments_Form instance.
		 * @since   1.8.0
		 * @var     NovaBlocks_Comments_Form|null
		 */
		public $form = null;

		/**
		 * The NovaBlocks_Comments_List instance.
		 * @since   1.8.0
		 * @var     NovaBlocks_Comments_List|null
		 */
		public $list = null;

		/**
		 * Instance of this class (the singleton pattern).
		 * @since    1.8.0
		 * @var      NovaBlocks_Comments_Render
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

			// Load our custom comment walker.
			require_once dirname( __FILE__ ) . '/lib/class-novablocks-walker-comment.php';

			// Initialize the instance that will handle rendering the comments header section.
			require_once dirname( __FILE__ ) . '/lib/class-novablocks-comments-header.php';
			if ( is_null( $this->header ) ) {
				$this->header = NovaBlocks_Comments_Header::instance();
			}

			// Initialize the instance that will handle rendering the comment form.
			require_once dirname( __FILE__ ) . '/lib/class-novablocks-comments-form.php';
			if ( is_null( $this->form ) ) {
				$this->form = NovaBlocks_Comments_Form::instance();
			}

			// Initialize the instance that will handle rendering the comments list.
			require_once dirname( __FILE__ ) . '/lib/class-novablocks-comments-list.php';
			if ( is_null( $this->list ) ) {
				$this->list = NovaBlocks_Comments_List::instance();
			}

			/*
			 * Register any scripts or styles we might need with regards to comments.
			 */
			$this->register_frontend_assets();

			/*
			 * Register all needed hooks.
			 */
			$this->register_hooks();
		}

		private function register_hooks() {
			add_filter( 'comment_class', array( $this, 'adjust_comment_class' ), 10, 3 );
		}

		public function register_frontend_assets() {
			// No frontend assets right now.
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
		public function adjust_comment_class( $classes, $class, $comment_id ) {
			//  No adjustments right now.

			return $classes;
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

		/**
		 * Get the markup of a comment as rendered in the comments list.
		 *
		 * @param WP_Comment|string|int|null $comment Optional. The comment to get the markup of. Defaults to the current comment.
		 * @param array                      $args    Optional. Arguments to pass to wp_list_comments(). The same arguments are passed to NovaBlocks_Walker_Comment.
		 *
		 * @return string
		 */
		public static function get_comment_list_markup( $comment = null, $args = [] ) {
			$comment = get_comment( $comment );
			if ( empty( $comment ) ) {
				return '';
			}

			ob_start();

			$args = wp_parse_args( $args, [
					'walker'      => new NovaBlocks_Walker_Comment(),
					'avatar_size' => 100,
					'style'       => 'div',
					'short_ping'  => true,
					// Since we do the proper query above, we don't want the walker to do it once again.
					// We just want all the passed comments displayed.
					'page'        => 0,
					'per_page'    => 0,
					'max_depth'   => - 1, // Any depth will do.
					'type'        => 'all', // We want all types since we trust the comment sent to be displayed.
			] );

			wp_list_comments( $args, [ $comment ] );

			return ob_get_clean();
		}

		/**
		 * Generate markup for a button that will be stylezed as a text input.
		 *
		 */

		public static function generate_fake_form_markup() {

			$current_user = wp_get_current_user();
			$commenter    = wp_get_current_commenter();

			$avatar_size = 100;
			$avatar = get_avatar( $current_user->ID, $avatar_size, 'identicon', '', array( 'class' => 'avatar', ) );


			$output = '<div class="form-grid js-generate-form fake-form-placeholder">';
			$output .= '<div class="comment-avatar">';
			$output .= $avatar;
			$output .= '</div>';
			$output .= '<button class="fake-input-button">';
			$output .= __( 'Share your knowledge or ask a question..', '__plugin_txtd' );
			$output .= '</button>';
			$output .= '</div>';

			return $output;
		}

		/**
		 * Main NovaBlocks_Comments_Render Instance
		 *
		 * Ensures only one instance of NovaBlocks_Comments_Render is loaded or can be loaded.
		 *
		 * @since  1.8.0
		 * @static
		 *
		 * @see    NovaBlocks_Comments_Render()
		 * @return NovaBlocks_Comments_Render Main NovaBlocks_Comments_Render instance
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
 * Returns the main instance of NovaBlocks_Comments_Render.
 *
 * @since  1.8.0
 * @return NovaBlocks_Comments_Render
 */
function NovaBlocks_Comments_Render() {
	return NovaBlocks_Comments_Render::instance();
}

// Auto-initialize on file load.
NovaBlocks_Comments_Render();
