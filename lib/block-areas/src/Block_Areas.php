<?php
/**
 * Class WP_Rig\Block_Areas\Block_Areas
 *
 * @package WP_Rig\Block_Areas
 * @license GNU General Public License v2 (or later)
 * @link    https://wordpress.org/plugins/block-areas
 */

namespace WP_Rig\Block_Areas;

use WP_Post;

/**
 * Class providing the block areas API.
 *
 * @since 0.1.0
 */
class Block_Areas {

	/**
	 * Renders the block area with the given slug.
	 *
	 * @since 0.1.0
	 *
	 * @global WP_Post $post Current WordPress post object.
	 *
	 * @param string $slug Block area slug.
	 * @param array  $args {
	 *     Optional. Additional rendering arguments.
	 *
	 *     @type string $before Additional markup to render before the block area. Default empty string.
	 *     @type string $after  Additional markup to render after the block area. Default empty string.
	 * }
	 */
	public function render( string $slug, array $args = [] ) {
		global $post;

		$id = $this->get_by_slug( $slug );
		if ( empty( $id ) ) {
			return;
		}

		$args = wp_parse_args(
			$args,
			array(
				'before' => '',
				'after'  => '',
			)
		);

		// Save original post to restore it later.
		$orig_post = $post;

		// Set up block area and render its content.
		$post = get_post( $id );
		setup_postdata( $post );

		echo $args['before']; // phpcs:ignore WordPress.Security.EscapeOutput
		the_content();
		echo $args['after']; // phpcs:ignore WordPress.Security.EscapeOutput

		// Restore original post.
		$post = $orig_post;
		setup_postdata( $post );
	}

	/**
	 * Checks whether the block area with the given slug exists.
	 *
	 * @since 0.1.0
	 *
	 * @param string $slug Block area slug.
	 * @return bool True if the block area exists, false otherwise.
	 */
	public function exists( string $slug ) : bool {
		$id = $this->get_by_slug( $slug );
		return ! empty( $id );
	}

	/**
	 * Gets a block area ID by its slug.
	 *
	 * @since 0.1.0
	 *
	 * @param string $slug Block area slug.
	 * @return int Block area ID, or 0 if not found.
	 */
	private function get_by_slug( string $slug ) {
		$posts = get_posts(
			array(
				'fields'                 => 'ids',
				'posts_per_page'         => 1,
				'post_type'              => Block_Areas_Post_Type::SLUG,
				'post_status'            => 'publish',
				'name'                   => $slug,
				'update_post_meta_cache' => false,
				'update_post_term_cache' => false,
			)
		);

		if ( empty( $posts ) ) {
			return 0;
		}

		return (int) array_shift( $posts );
	}
}
