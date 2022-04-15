<?php
/**
 * Class to handle the server-side registration and rendering of sidebars editor blocks.
 *
 * Inspired by the Sidebars Gutenberg Blocks plugin
 * @link https://wordpress.org/plugins/sidebars-blocks/
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class NovaBlocks_SidebarsBlocks {

	const BLOCKS_CATEGORY = 'novablocks-sidebars';

	/**
	 * Holds the only instance of this class.
	 * @since   2.0.0
	 * @var     null|NovaBlocks_SidebarsBlocks
	 * @access  protected
	 */
	protected static $_instance = null;

	/**
	 * Constructor.
	 *
	 * @since 2.0.0
	 */
	protected function __construct() {
		$this->init();
	}

	/**
	 * Initialize the sidebars blocks logic.
	 *
	 * @since  2.0.0
	 */
	public function init() {
		// Add hooks, but only if we are not uninstalling the plugin.
		if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
			$this->add_hooks();
		}
	}

	/**
	 * Initiate our hooks.
	 *
	 * @since 2.0.0
	 * @return void
	 */
	public function add_hooks() {
		add_filter( 'block_categories_all', [ $this, 'add_blocks_category' ], 50, 2 );

		add_action( 'init', [ $this, 'register_sidebars_blocks' ], 100 );
	}

	/**
	 * Add the Sidebars/Widget Areas Category in the block editor.
	 *
	 * @param array $categories
	 *
	 * @return array
	 */
	public function add_blocks_category( $categories ) {
		$details = [
			'slug'  => self::BLOCKS_CATEGORY,
			'title' => esc_html__( 'Sidebars/Widgets Areas', '__plugin_txtd' ),
		];

		// We want to preferably add the category after the Widgets category.
		$widgets_category_key = \Pixelgrade\NovaBlocks\Utils\ArrayHelpers::findSubarrayByKeyValue( $categories, 'slug', 'widgets' );
		if ( false !== $widgets_category_key ) {
			$categories = \Pixelgrade\NovaBlocks\Utils\ArrayHelpers::insertAfterKey( $categories, $widgets_category_key, [ $details ] );
		} else {
			$categories[] = $details;
		}

		return $categories;
	}

	/**
	 * Register editor blocks for each registered sidebar.
	 *
	 * @return void
	 */
	public function register_sidebars_blocks() {
		global $pagenow, $wp_registered_sidebars;

		// Do not register the blocks on the Appearance -> Widgets page.
		if ( ! empty( $pagenow ) && ( 'widgets.php' === $pagenow ) ) {
			return;
		}

		// Extract the needed details for each registered sidebar.
		$sidebars = array_map(
			function ( $sidebar_id ) {
				return [
					'blockName' => 'novablocks/sidebar-' . $sidebar_id,
					'sidebarId' => $sidebar_id,
					'icon'      => 'welcome-widgets-menus',
				];
			},
			array_keys( $wp_registered_sidebars )
		);
		$sidebars = $wp_registered_sidebars;
		array_walk( $sidebars, function ( &$sidebar_details, $sidebar_id ) {
			$sidebar_details = [
				'blockName'   => 'novablocks/sidebar-' . $sidebar_id,
				'sidebarId'   => $sidebar_id,
				'icon'        => 'welcome-widgets-menus',
				'title'       => $sidebar_details['name'],
				/* translators: %s: The sidebar title. */
				'description' => sprintf( esc_html__( 'Displays the widgets added to the `%s` sidebar, through the `Appearance → Widgets` admin page.', '__plugin_txtd' ), $sidebar_details['name'] ),

			];
		} );

		$sidebars = apply_filters( 'novablocks/sidebars_blocks:pre_register', $sidebars, $wp_registered_sidebars );
		if ( empty( $sidebars ) || ! is_array( $sidebars ) ) {
			return;
		}

		$suffix = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min';

		wp_register_script(
			'novablocks-sidebars-blocks',
			trailingslashit( novablocks_get_plugin_url() ) . 'dist/sidebars-blocks/index' . $suffix . '.js',
			[ 'wp-blocks', 'wp-block-editor', 'wp-components', 'jquery', ],
			Pixelgrade\NovaBlocks\VERSION, true );

		wp_localize_script(
			'novablocks-sidebars-blocks',
			'novaBlocksSidebarsBlocks',
			[
				'sidebars'     => $sidebars,
				'categoryName' => self::BLOCKS_CATEGORY,
			]
		);

		foreach ( $sidebars as $sidebar_details ) {
			register_block_type(
				$sidebar_details['blockName'],
				[
					'title'           => $sidebar_details['title'],
					'supports'        => [
						'customClassName' => false,
					],
					'description'     => $sidebar_details['description'],
					'api_version'     => 2,
					'attributes'      => [
						'sidebarId' => [
							'type'    => 'string',
							'default' => $sidebar_details['sidebarId'],
						],
					],
					'editor_script'   => 'novablocks-sidebars-blocks',
					'category'        => self::BLOCKS_CATEGORY,
					'render_callback' => [ $this, 'render_sidebar' ],
				]
			);
		}
	}


	/**
	 * Render a sidebar block.
	 *
	 * @since 2.0.0
	 *
	 * @param array $attributes Block attributes.
	 *
	 * @return string
	 */
	public function render_sidebar( $attributes ) {
		if ( empty( $attributes['sidebarId'] ) ) {
			return '';
		}

		ob_start();

		dynamic_sidebar( $attributes['sidebarId'] );

		return ob_get_clean();
	}

	/**
	 * Main NovaBlocks_SidebarsBlocks Instance
	 *
	 * Ensures only one instance of NovaBlocks_SidebarsBlocks is loaded or can be loaded.
	 *
	 * @since  2.0.0
	 * @static
	 *
	 * @return NovaBlocks_SidebarsBlocks Main NovaBlocks_SidebarsBlocks instance
	 */
	public static function instance() {

		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}

	/**
	 * Cloning is forbidden.
	 *
	 * @since 2.0.0
	 */
	public function __clone() {

		_doing_it_wrong( __FUNCTION__, esc_html__( 'You should not do that!', '__plugin_txtd' ), null );
	}

	/**
	 * Unserializing instances of this class is forbidden.
	 *
	 * @since 2.0.0
	 */
	public function __wakeup() {

		_doing_it_wrong( __FUNCTION__, esc_html__( 'You should not do that!', '__plugin_txtd' ), null );
	}
}
