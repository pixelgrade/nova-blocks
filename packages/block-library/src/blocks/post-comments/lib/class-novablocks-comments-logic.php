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

		/**
		 * The NovaBlocks_Comments_Meta instance.
		 * @since   1.8.0
		 * @var     NovaBlocks_Comments_Meta|null
		 */
		public $meta = null;

		/**
		 * The NovaBlocks_Comments_Meta instance.
		 * @since   1.8.0
		 * @var     NovaBlocks_Comments_Meta|null
		 */
		public $post_meta = null;

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

			// Get the instance that will handle comments meta.
			require_once 'metas/class-novablocks-comments-meta.php';
			if ( is_null( $this->meta ) ) {
				$this->meta = NovaBlocks_Comments_Meta::instance();
			}

			// Get the instance that will handle post meta related to comments.
			require_once 'metas/class-novablocks-comments-post-meta.php';
			if ( is_null( $this->post_meta ) ) {
				$this->post_meta = NovaBlocks_Comments_Post_Meta::instance();
			}


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
			add_action( 'admin_init', [ $this, 'admin_init' ], 10 );

			add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_scripts' ], 99 );

			// Handle comment submission kses filtering to allow certain HTML tags, even for guests
			// or users that don't have the 'unfiltered_html' capability.
			add_filter( 'wp_kses_allowed_html', [ $this, 'filter_comment_allowed_html_tags' ], 10, 2 );
		}

		/**
		 * Initialize logic only needed in the WordPress dashboard (admin).
		 */
		public function admin_init() {
			// Load the logic for the Starter Content integration.
			require_once 'integrations/starter-content.php';
		}

		public function enqueue_scripts() {

			$block_dir_url = trailingslashit( trailingslashit( novablocks_get_plugin_url() ) . 'build/block-library/blocks/post-comments' );

			// We want to replace the core `comment-reply.js` with our own.
			wp_deregister_script( 'comment-reply' );
			wp_register_script( 'comment-reply', $block_dir_url . 'lib/js/comment-reply.js', [], false, true );
		}

		public function filter_comment_allowed_html_tags( $allowedtags, $context ) {
			if ( 'pre_comment_content' === $context ) {
				if ( empty( $allowedtags ) ) {
					$allowedtags = [];
				}
				// We add these beside the ones in the global $allowedtags.
				$allowedtags['br'] = [
					'aria-describedby' => true,
					'aria-details' => true,
					'aria-label' => true,
					'aria-labelledby' => true,
					'aria-hidden' => true,
					'class' => true,
					'id' => true,
					'style' => true,
					'title' => true,
					'role' => true,
					'data-*' => true,
				];
				$allowedtags['div'] = [
					'align' => true,
					'dir' => true,
					'lang' => true,
					'xml:lang' => true,
					'aria-describedby' => true,
					'aria-details' => true,
					'aria-label' => true,
					'aria-labelledby' => true,
					'aria-hidden' => true,
					'class' => true,
					'id' => true,
					'style' => true,
					'title' => true,
					'role' => true,
					'data-*' => true,
				];
				$allowedtags['h1'] = [
					'align' => true,
					'aria-describedby' => true,
					'aria-details' => true,
					'aria-label' => true,
					'aria-labelledby' => true,
					'aria-hidden' => true,
					'class' => true,
					'id' => true,
					'style' => true,
					'title' => true,
					'role' => true,
					'data-*' => true,
				];
				$allowedtags['li'] = [
					'align' => true,
					'value' => true,
					'aria-describedby' => true,
					'aria-details' => true,
					'aria-label' => true,
					'aria-labelledby' => true,
					'aria-hidden' => true,
					'class' => true,
					'id' => true,
					'style' => true,
					'title' => true,
					'role' => true,
					'data-*' => true,
				];
				$allowedtags['ul'] = [
					'type' => true,
					'aria-describedby' => true,
					'aria-details' => true,
					'aria-label' => true,
					'aria-labelledby' => true,
					'aria-hidden' => true,
					'class' => true,
					'id' => true,
					'style' => true,
					'title' => true,
					'role' => true,
					'data-*' => true,
				];
				$allowedtags['ol'] = [
					'start' => true,
					'type' => true,
					'reversed' => true,
					'aria-describedby' => true,
					'aria-details' => true,
					'aria-label' => true,
					'aria-labelledby' => true,
					'aria-hidden' => true,
					'class' => true,
					'id' => true,
					'style' => true,
					'title' => true,
					'role' => true,
					'data-*' => true,
				];
				$allowedtags['pre'] = [
					'width' => true,
					'aria-describedby' => true,
					'aria-details' => true,
					'aria-label' => true,
					'aria-labelledby' => true,
					'aria-hidden' => true,
					'class' => true,
					'id' => true,
					'style' => true,
					'title' => true,
					'role' => true,
					'data-*' => true,
				];
				$allowedtags['blockquote'] = [
					'cite' => true,
					'lang' => true,
					'xml:lang' => true,
					'aria-describedby' => true,
					'aria-details' => true,
					'aria-label' => true,
					'aria-labelledby' => true,
					'aria-hidden' => true,
					'class' => true,
					'id' => true,
					'style' => true,
					'title' => true,
					'role' => true,
					'data-*' => true,
				];
			}

			return $allowedtags;
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
