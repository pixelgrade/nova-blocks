<?php
/**
 * Class WP_Rig\Block_Areas\Default_Block_Areas
 *
 * @package WP_Rig\Block_Areas
 * @license GNU General Public License v2 (or later)
 * @link    https://wordpress.org/plugins/block-areas
 */

namespace WP_Rig\Block_Areas;

/**
 * Class managing the default block areas.
 *
 * @since 0.1.0
 */
class Default_Block_Areas {

	const VERSION = '20190626';

	/**
	 * Block areas API instance.
	 *
	 * @since 0.1.0
	 * @var Block_Areas
	 */
	protected $block_areas;

	/**
	 * Constructor.
	 *
	 * @since 0.1.0
	 *
	 * @param Block_Areas $block_areas Block areas API instance.
	 */
	public function __construct( Block_Areas $block_areas ) {
		$this->block_areas = $block_areas;
	}

	/**
	 * Registers WordPress hooks to initialize.
	 *
	 * @since 0.1.0
	 */
	public function register() {
		add_action(
			'admin_init',
			function() {
				$version = get_option( 'default_block_areas_version', '' );
				if ( ! $version || version_compare( $version, self::VERSION, '<' ) ) {
					$this->create_defaults();
					update_option( 'default_block_areas_version', self::VERSION );
				}
			}
		);
	}

	/**
	 * Creates default block areas if they don't exist yet.
	 *
	 * This includes a block area 'header' and 'footer'.
	 *
	 * @since 0.1.0
	 */
	private function create_defaults() {
		$defaults = array();

		if ( ! $this->block_areas->exists( 'promo-bar' ) ) {
			$content = '';

			$defaults[] = array(
				'post_type'             => Block_Areas_Post_Type::SLUG,
				'post_status'           => 'publish',
				'post_name'             => 'promo-bar',
				'post_title'            => __( 'Promo Bar', '__plugin_txtd' ),
				'post_content'          => $content,
				'post_content_filtered' => '',
			);
		}

		if ( ! $this->block_areas->exists( 'header' ) ) {
			$content = '';

			$defaults[] = array(
				'post_type'             => Block_Areas_Post_Type::SLUG,
				'post_status'           => 'publish',
				'post_name'             => 'header',
				'post_title'            => __( 'Header', '__plugin_txtd' ),
				'post_content'          => $content,
				'post_content_filtered' => '',
			);
		}

		if ( ! $this->block_areas->exists( 'footer' ) ) {
			$content = '';

			$defaults[] = array(
				'post_type'             => Block_Areas_Post_Type::SLUG,
				'post_status'           => 'publish',
				'post_name'             => 'footer',
				'post_title'            => __( 'Footer', '__plugin_txtd' ),
				'post_content'          => $content,
				'post_content_filtered' => '',
			);
		}

		foreach ( $defaults as $block_area ) {
			wp_insert_post( $block_area );
		}
	}
}
