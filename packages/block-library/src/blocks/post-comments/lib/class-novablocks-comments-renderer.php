<?php
/**
 * NovaBlocks_Comments_Renderer Class
 *
 * @author   Pixelgrade
 * @package  NovaBlocks
 * @since    1.8.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'NovaBlocks_Comments_Renderer' ) ) {

	/**
	 * The NovaBlocks Comments Render (Logic) class
	 */
	class NovaBlocks_Comments_Renderer {

		/**
		 * The NovaBlocks_Comments_Header instance.
		 * @since   1.8.0
		 * @var     NovaBlocks_Comments_Header|null
		 */
		public $header = null;

		/**
		 * The NovaBlocks_Comments_Starter instance.
		 * @since   1.8.0
		 * @var     NovaBlocks_Comments_Starter|null
		 */
		public $starter = null;

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
		 * The post to render comments for.
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
		 * The content to use when rendering.
		 *
		 * @var string
		 */
		protected $content = '';

		/**
		 * Instantiate a comments global renderer.
		 *
		 * @param WP_Post|int|null $post    Optional. The post who's comments to render. Defaults to the current post.
		 * @param array            $args    Optional. The arguments to consider when rendering.
		 * @param string           $content Optional. The content to use when rendering.
		 */
		public function __construct( $post = null, $args = [], $content = '' ) {
			$post = get_post( $post, OBJECT );
			// Fail without a proper post.
			if ( empty( $post ) ) {
				_doing_it_wrong( __METHOD__, esc_html__( 'Post not found for comments rendering.', '__plugin_txtd' ), '' );

				return;
			}

			$this->post = $post;

			// Save the received data for later use.
			$this->args    = $args;
			$this->content = $content;

			// Maybe do some checks before initializing the logic.
			$this->init();
		}

		/**
		 * Initialize the logic.
		 */
		private function init() {

			/*
			 * Initialize all sub-components.
			 */

			// Initialize the instance that will handle rendering the comments header section.
			require_once 'renderers/class-novablocks-comments-header.php';
			if ( is_null( $this->header ) ) {
				$this->header = new NovaBlocks_Comments_Header( $this->post, $this->args, $this->content );
			}

			// Initialize the instance that will handle rendering the comments header section.
			require_once 'renderers/class-novablocks-comments-starter.php';
			if ( is_null( $this->starter ) ) {
				$this->starter = new NovaBlocks_Comments_Starter( $this->post, $this->args );
			}

			// Initialize the instance that will handle rendering the comment form.
			require_once 'renderers/class-novablocks-comments-form.php';
			if ( is_null( $this->form ) ) {
				$this->form = new NovaBlocks_Comments_Form( $this->post, $this->args );
			}

			// Initialize the instance that will handle rendering the comments list.
			require_once 'renderers/class-novablocks-comments-list.php';
			if ( is_null( $this->list ) ) {
				$this->list = new NovaBlocks_Comments_List( $this->post, $this->args );
			}
		}

		/**
		 * Render a sub-component.
		 *
		 * @param string $component A component name. If the component is not known, will return an empty string.
		 * @param array  $args      Optional. Arguments to pass to the component's `render` method.
		 * @param string $before    Optional. Markup to prepend to the component output.
		 * @param string $after     Optional. Markup to append to the component output.
		 *
		 * @return string The rendered component's markup. An empty string if the render failed.
		 */
		public function render( $component, $args = [], $before = '', $after = '' ) {
			$component_output = '';

			if ( ! empty( $this->$component ) && is_object( $this->$component ) && method_exists( $this->$component, 'render' ) ) {
				$component_output = $this->$component->render( $args );
			}

			if ( ! empty( $component_output ) ) {
				$component_output = $before . $component_output . $after;
			}

			return $component_output;
		}
	}
}
