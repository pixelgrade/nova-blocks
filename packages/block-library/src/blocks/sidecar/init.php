<?php
/**
 * Handle the Sidecar block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_sidecar_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/sidecar/attributes.json',
		'packages/color-signal/src/attributes.json',
		'packages/block-editor/src/filters/with-space-and-sizing/attributes.json',
	] );

}

if ( ! function_exists( 'novablocks_render_sidecar_block' ) ) {

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
	function novablocks_render_sidecar_block( array $attributes, string $content, WP_Block $block ): string {

		// Maybe enqueue frontend-only scripts.
		novablocks_maybe_enqueue_block_frontend_scripts( $block );

		$attributes_config = novablocks_get_sidecar_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );
		$cssProps          = array_merge(
			novablocks_get_space_and_sizing_css( $attributes ),
			novablocks_get_color_signal_css( $attributes )
		);

		$cssProps[] = '--nb-sidecar-content-font-size-base: var(--nb-font-size-' . $attributes['contentFontSize'] . ')';
		$cssProps[] = '--nb-sidecar-sidebar-font-size-base: var(--nb-font-size-' . $attributes['sidebarFontSize'] . ')';

		$classes = array_merge( [
			'nb-sidecar',
			'nb-sidecar--sidebar-' . $attributes['sidebarPosition'],
			'nb-sidecar--sidebar-' . $attributes['sidebarWidth'],
			'nb-content-layout-grid',
			'alignfull'
		], novablocks_get_color_signal_classes( $attributes ) );

		// Server-known rail absence (break-system layer 1): a rail that does
		// not exist is known at render time, so CSS can flip that side's
		// break vars with zero runtime JS. Task 4.1 (three-area model):
		// presence is derived from the ACTUAL direct sidecar-area children —
		// each area resolves to a side (explicit sidebar-left/right, or the
		// legacy `sidebar` mapped through sidebarPosition) — so a sidecar with
		// both rails emits NEITHER absence class. Legacy two-area content is
		// byte-identical (content + one `sidebar` area resolves to exactly the
		// old position-derived side). A sidecar with no detectable areas falls
		// back to the position-derived presence.
		$has_left_rail  = false;
		$has_right_rail = false;
		$found_area     = false;

		$inner_blocks = ( isset( $block->parsed_block['innerBlocks'] ) && is_array( $block->parsed_block['innerBlocks'] ) )
			? $block->parsed_block['innerBlocks']
			: [];

		foreach ( $inner_blocks as $child ) {
			if ( empty( $child['blockName'] ) || 'novablocks/sidecar-area' !== $child['blockName'] ) {
				continue;
			}

			$found_area = true;
			$child_area = isset( $child['attrs']['areaName'] ) ? $child['attrs']['areaName'] : 'content';

			if ( function_exists( 'novablocks_resolve_sidecar_area_side' ) ) {
				$side = novablocks_resolve_sidecar_area_side( $child_area, $attributes['sidebarPosition'] );
			} else {
				// Defensive fallback if the sidecar-area block is not loaded.
				$side = ( 'sidebar-left' === $child_area ) ? 'left'
					: ( ( 'sidebar-right' === $child_area ) ? 'right'
					: ( ( 'sidebar' === $child_area ) ? ( 'left' === $attributes['sidebarPosition'] ? 'left' : 'right' ) : '' ) );
			}

			if ( 'left' === $side ) {
				$has_left_rail = true;
			}
			if ( 'right' === $side ) {
				$has_right_rail = true;
			}
		}

		if ( ! $found_area ) {
			// No detectable areas — preserve the legacy position-derived rails.
			$has_left_rail  = ( 'left' === $attributes['sidebarPosition'] );
			$has_right_rail = ( 'right' === $attributes['sidebarPosition'] );
		}

		if ( ! $has_left_rail ) {
			$classes[] = 'nb-sidecar--no-left-rail';
		}
		if ( ! $has_right_rail ) {
			$classes[] = 'nb-sidecar--no-right-rail';
		}

		if ( ! empty( $attributes['lastItemIsSticky'] ) ) {
			$classes[] = 'nb-sidecar--sticky-sidebar';
		}

		$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes ) );
		$data_attributes = novablocks_get_data_attributes( $data_attributes_array, $attributes );

		$tag = 'div';
		if ( ! empty( $attributes['tagName'] ) && in_array( $attributes['tagName'], ['header', 'main', 'section', 'article', 'aside', 'footer'] ) ) {
			$tag = esc_attr( $attributes['tagName'] );
		}

		$id = ' ';
		if ( ! empty( $attributes['anchor'] ) ) {
			$id = ' id="' .  esc_attr( $attributes['anchor'] ). '" ';
		}

		return '<' . $tag . ' class="' . esc_attr( join( ' ', $classes ) ) . '" ' . $id . join( ' ', $data_attributes ) . ' style="' . esc_attr( join( '; ', $cssProps ) ) . '">' . $content . '</' . $tag . '>';
	}
}
