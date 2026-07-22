<?php
/**
 * Handle the Sidecar Area block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_sidecar_area_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/sidecar-area/attributes.json',
	] );

}

if ( ! function_exists( 'novablocks_resolve_sidecar_area_side' ) ) {

	/**
	 * Resolve a Sidecar Area to its rail side (Task 4.1, three-area model).
	 *
	 * Explicit per-side names (`sidebar-left` / `sidebar-right`) win directly.
	 * The legacy `sidebar` name maps to a side at RUNTIME from the parent
	 * Sidecar's `sidebarPosition` (delivered through block context), so no
	 * saved content ever needs migrating. Anything else (content or an unknown
	 * name) has no rail side.
	 *
	 * @param string $area_name        The area's `areaName` attribute.
	 * @param string $sidebar_position Parent Sidecar `sidebarPosition`.
	 *
	 * @return string 'left', 'right', or '' (no rail side).
	 */
	function novablocks_resolve_sidecar_area_side( $area_name, $sidebar_position = '' ) {

		if ( 'sidebar-left' === $area_name ) {
			return 'left';
		}

		if ( 'sidebar-right' === $area_name ) {
			return 'right';
		}

		if ( 'sidebar' === $area_name ) {
			// Legacy single rail: the side comes from the parent position;
			// the historical default (and the SCSS default) is the right rail.
			return 'left' === $sidebar_position ? 'left' : 'right';
		}

		return '';
	}
}

if ( ! function_exists( 'novablocks_render_sidecar_area_block' ) ) {

	/**
	 * Entry point to render the block with the given attributes, content, and context.
	 *
	 * @see \WP_Block::render()
	 *
	 * @param array    $attributes
	 * @param string   $content
	 * @param WP_Block $block
	 *
	 * @return string
	 */
	function novablocks_render_sidecar_area_block( array $attributes, string $content, WP_Block $block ): string {

		// Maybe enqueue frontend-only scripts.
		novablocks_maybe_enqueue_block_frontend_scripts( $block );

		$attributes_config = novablocks_get_sidecar_area_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$area_name        = $attributes['areaName'];
		$sidebar_position = isset( $block->context['novablocks/sidebarPosition'] )
			? $block->context['novablocks/sidebarPosition']
			: '';

		$classes = [ 'nb-sidecar-area' ];

		if ( 'content' === $area_name ) {
			$classes[] = 'nb-sidecar-area--content';
			$classes[] = 'nb-content-layout-grid';

			// Flow segmentation (Task 4b.1/4b.2 pull-outs) does NOT happen here:
			// this render callback receives `$content` already built from a
			// single render pass of the inner blocks. Re-rendering here would
			// double every inner block (running unique-ID / enqueue-once side
			// effects twice). Instead the `pre_render_block` short-circuit in
			// lib/flow-segments.php intercepts a pull-out content area BEFORE WP
			// renders its inner blocks, renders each child exactly once, wraps
			// the pull-out + its body-copy run in a `.nb-flow-segment`, and calls
			// this same function with the assembled content — so this stays a
			// pure wrapper and existing content is byte-identical either way.
		} else {
			$side = novablocks_resolve_sidecar_area_side( $area_name, $sidebar_position );

			if ( '' !== $side ) {
				// Emit the resolved per-side class AND keep the legacy generic
				// `nb-sidecar-area--sidebar` alongside it: the frontend/editor
				// styling and the break-align JS still key some rules on the
				// generic class during the two-area -> three-area transition.
				$classes[] = 'nb-sidecar-area--sidebar';
				$classes[] = 'nb-sidecar-area--sidebar-' . $side;
			} else {
				// Unknown area name: preserve the raw class for forward-compat.
				$classes[] = 'nb-sidecar-area--' . $area_name;
			}
		}

		return '<div class="' . esc_attr( join( ' ', $classes ) ) . '">' . $content . '</div>';
	}
}
