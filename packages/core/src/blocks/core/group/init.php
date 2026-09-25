<?php
/**
 * A Group's authored reading measure (GitHub #635).
 *
 * Nova caps every default-aligned Group child at `--nb-content-width` (and a
 * Group passed through the layout grid clears their max-width), which
 * overrode WordPress's constrained-layout rule for an authored
 * `layout.contentSize`: the row maximum and the reading measure could not
 * differ. An authored width is carried here as `--nb-group-measure` plus a
 * marker class; the group stylesheet caps default-aligned children to it.
 * Centring and `justifyContent` stay with core's layout rule.
 *
 * @package NovaBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once dirname( __DIR__ ) . '/content-measure.php';

/**
 * Add the measure class and custom property to a Group's wrapper.
 *
 * @param string $block_content Rendered Group markup.
 * @param array  $block         Parsed block data.
 * @return string
 */
function novablocks_render_group_measure( string $block_content, array $block ): string {
	return novablocks_add_content_measure(
		$block_content,
		novablocks_get_authored_content_size( $block['attrs'] ?? [] ),
		'nb-group--measure',
		'--nb-group-measure'
	);
}
add_filter( 'render_block_core/group', 'novablocks_render_group_measure', 10, 2 );
