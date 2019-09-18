<?php
/**
 * Class WP_Rig\Block_Areas\Block_Areas_Post_Type
 *
 * @package WP_Rig\Block_Areas
 * @license GNU General Public License v2 (or later)
 * @link    https://wordpress.org/plugins/block-areas
 */

namespace WP_Rig\Block_Areas;

/**
 * Class managing the block areas post type.
 *
 * @since 0.1.0
 */
class Block_Areas_Post_Type {

	const SLUG = 'block_area';

	/**
	 * Registers WordPress hooks to initialize.
	 *
	 * @since 0.1.0
	 */
	public function register() {
		add_action(
			'init',
			function() {
				$this->register_post_type();
			}
		);

		add_filter(
			'user_has_cap',
			function( array $allcaps ) : array {
				return $this->filter_post_type_user_caps( $allcaps );
			}
		);

		add_action(
			'admin_menu',
			function() {
				$this->fix_admin_menu_entry();
			}
		);

		$slug = self::SLUG;
		add_filter(
			"manage_{$slug}_posts_columns",
			function( array $columns ) : array {
				return $this->filter_post_type_columns( $columns );
			}
		);
		add_action(
			"manage_{$slug}_posts_custom_column",
			function( string $column_name, int $post_id ) {
				$this->render_post_type_column( $column_name, $post_id );
			},
			10,
			2
		);
		add_filter(
			"views_edit-{$slug}",
			function( $views ) {
				echo '<p class="description">';
				if ( current_theme_supports( 'block-areas' ) ) {
					$theme_support = get_theme_support( 'block-areas' );
					if ( is_array( $theme_support ) && isset( $theme_support[0] ) && is_string( $theme_support[0] ) ) {
						$theme_support = array_map(
							function( $slug ) {
								return '<code>' . $slug . '</code>';
							},
							$theme_support
						);
						/* translators: %s: comma-separated list of slugs */
						$message = sprintf( __( 'Your theme supports block areas with the following slugs: %s', 'block-areas' ), implode( ', ', $theme_support ) );
					} else {
						$message = __( 'Your theme supports block areas.', 'block-areas' );
					}
				} else {
					/* translators: %s: command */
					$message = sprintf( __( 'You can render these block areas in your theme using %s.', 'block-areas' ), '<code>block_areas()->render( $slug )</code>' );
				}
				echo wp_kses(
					$message,
					array( 'code' => array() )
				);
				echo '</p>';
				return $views;
			}
		);
	}

	/**
	 * Registers the block areas post type.
	 *
	 * @since 0.1.0
	 */
	private function register_post_type() {
		$labels = array(
			'name'                  => __( 'Block Areas', 'block-areas' ),
			'singular_name'         => __( 'Block Area', 'block-areas' ),
			'menu_name'             => _x( 'Block Areas', 'Admin Menu text', 'block-areas' ),
			'add_new'               => _x( 'Add New', 'Block Area', 'block-areas' ),
			'add_new_item'          => __( 'Add New Block Area', 'block-areas' ),
			'new_item'              => __( 'New Block Area', 'block-areas' ),
			'edit_item'             => __( 'Edit Block Area', 'block-areas' ),
			'view_item'             => __( 'View Block Area', 'block-areas' ),
			'all_items'             => __( 'All Block Areas', 'block-areas' ),
			'search_items'          => __( 'Search Block Areas', 'block-areas' ),
			'parent_item_colon'     => __( 'Parent Block Area:', 'block-areas' ),
			'not_found'             => __( 'No block areas found.', 'block-areas' ),
			'not_found_in_trash'    => __( 'No block areas found in Trash.', 'block-areas' ),
			'archives'              => __( 'Block area archives', 'block-areas' ),
			'insert_into_item'      => __( 'Insert into block area', 'block-areas' ),
			'uploaded_to_this_item' => __( 'Uploaded to this block area', 'block-areas' ),
			'filter_items_list'     => __( 'Filter block areas list', 'block-areas' ),
			'items_list_navigation' => __( 'Block areas list navigation', 'block-areas' ),
			'items_list'            => __( 'Block areas list', 'block-areas' ),
		);

		$args = array(
			'labels'             => $labels,
			'description'        => __( 'Block areas to include in your theme.', 'block-areas' ),
			'public'             => false,
			'publicly_queryable' => true,
			'has_archive'        => false,
			'show_ui'            => true,
			'show_in_menu'       => 'themes.php',
			'show_in_admin_bar'  => false,
			'show_in_rest'       => true,
			'rest_base'          => 'block-areas',
			'capability_type'    => array( 'block_area', 'block_areas' ),
			'map_meta_cap'       => true,
			'supports'           => array(
				'title',
				'editor',
				'thumbnail',
				'amp',
				'revisions',
			),
		);

		register_post_type( self::SLUG, $args );
	}

	/**
	 * Filters the capabilities of a user to conditionally grant them capabilities for managing block areas.
	 *
	 * Any user who can 'edit_theme_options' will have access to manage block areas.
	 * @since 0.1.0
	 *
	 * @param array $allcaps A user's capabilities.
	 * @return array Filtered $allcaps.
	 */
	private function filter_post_type_user_caps( array $allcaps ) : array {
		if ( isset( $allcaps['edit_theme_options'] ) ) {
			$allcaps['edit_block_areas']             = $allcaps['edit_theme_options'];
			$allcaps['edit_others_block_areas']      = $allcaps['edit_theme_options'];
			$allcaps['edit_published_block_areas']   = $allcaps['edit_theme_options'];
			$allcaps['edit_private_block_areas']     = $allcaps['edit_theme_options'];
			$allcaps['delete_block_areas']           = $allcaps['edit_theme_options'];
			$allcaps['delete_others_block_areas']    = $allcaps['edit_theme_options'];
			$allcaps['delete_published_block_areas'] = $allcaps['edit_theme_options'];
			$allcaps['delete_private_block_areas']   = $allcaps['edit_theme_options'];
			$allcaps['publish_block_areas']          = $allcaps['edit_theme_options'];
			$allcaps['read_private_block_areas']     = $allcaps['edit_theme_options'];
		}

		return $allcaps;
	}

	/**
	 * Fixes the label of the block areas admin menu entry.
	 *
	 * @since 0.1.0
	 */
	private function fix_admin_menu_entry() {
		global $submenu;

		if ( ! isset( $submenu['themes.php'] ) ) {
			return;
		}

		$post_type = get_post_type_object( self::SLUG );
		foreach ( $submenu['themes.php'] as $key => $submenu_entry ) {
			if ( $post_type->labels->all_items === $submenu['themes.php'][ $key ][0] ) {
				$submenu['themes.php'][ $key ][0] = $post_type->labels->menu_name;
				break;
			}
		}
	}

	/**
	 * Filters the block area post type columns in the admin list table.
	 *
	 * @since 0.1.0
	 *
	 * @param array $columns Columns to display.
	 * @return array Filtered $columns.
	 */
	private function filter_post_type_columns( array $columns ) : array {
		$columns['slug'] = __( 'Slug', 'block-areas' );
		if ( isset( $columns['date'] ) ) {
			unset( $columns['date'] );
		}
		return $columns;
	}

	/**
	 * Renders column content for the block area post type list table.
	 *
	 * @since 0.1.0
	 *
	 * @param string $column_name Column name to render.
	 * @param int    $post_id     Post ID.
	 */
	private function render_post_type_column( string $column_name, int $post_id ) {
		if ( 'slug' !== $column_name ) {
			return;
		}

		$post = get_post( $post_id );
		echo esc_html( $post->post_name );
	}
}
