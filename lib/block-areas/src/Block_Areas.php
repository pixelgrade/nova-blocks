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
	public function render( $slug, $args = [] ) {
		global $post;

		$post_id = $this->get_by_slug( $slug );
		if ( empty( $post_id ) ) {
			return;
		}

		$args = wp_parse_args(
			$args,
			array(
				'before' => '',
				'after'  => '',
			)
		);

		// Set up block area and render its content.

		echo $args['before']; // phpcs:ignore WordPress.Security.EscapeOutput
		$this->the_content( $post_id );
		echo $args['after']; // phpcs:ignore WordPress.Security.EscapeOutput
	}

	/**
	 * Output the post content but without running 'the_content' filter, since this in not THE MAIN POST, CONTENT.
	 *
	 * @param int|WP_Post $post
	 */
	protected function the_content( $post = null ) {
		$post = get_post( $post );
		if ( empty( $post ) ) {
			return;
		}

		// Retrieve the raw post content.
		$content = apply_filters( 'novablocks_block_areas_raw_content', $post->post_content );

		// Now apply some of the default the_content filters that are safe.
		$content = do_blocks( $content );
		$content = wptexturize( $content );
		$content = convert_smilies( $content );
		$content = wpautop( $content );
		$content = capital_P_dangit( $content );
		$content = do_shortcode( $content );
		$content = shortcode_unautop( $content );
		$content = wp_make_content_images_responsive( $content );

		// Apply one custom filter to allow others to have a say.
		echo apply_filters( 'novablocks_block_areas_the_content', $content );
	}

	/**
	 * Checks whether the block area with the given slug exists.
	 *
	 * @since 0.1.0
	 *
	 * @param string $slug Block area slug.
	 * @return bool True if the block area exists, false otherwise.
	 */
	public function exists( $slug ) {
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
	private function get_by_slug( $slug ) {
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
