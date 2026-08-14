<?php
/**
 * Policies for attaching registered scripts to block types.
 *
 * @package NovaBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_should_attach_block_script' ) ) {
	/**
	 * Decide whether WordPress should automatically enqueue a block script.
	 *
	 * FacetWP's frontend controller is availability-dependent. Its guarded dynamic
	 * renderer enqueues the already-registered handle explicitly; attaching it as a
	 * view script would make WP_Block enqueue it even when the renderer returns empty.
	 *
	 * @param string $block      Unprefixed Nova block name.
	 * @param string $script_key Registration argument (`editor_script` or `view_script`).
	 * @return bool Whether to attach the handle to the registered block type.
	 */
	function novablocks_should_attach_block_script( string $block, string $script_key ): bool {
		return ! ( 'facetwp-filter' === $block && 'view_script' === $script_key );
	}
}
