<?php
/**
 * Site Identity design-system integrations.
 *
 * @package Nova_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const NOVABLOCKS_SITE_IDENTITY_DEFAULT_WIDTH = 395;
const NOVABLOCKS_SITE_IDENTITY_MIN_WIDTH     = 80;
const NOVABLOCKS_SITE_IDENTITY_MAX_WIDTH     = 800;

/**
 * Normalize a Site Identity width to the supported range.
 *
 * @param mixed $width Width supplied by block attributes.
 * @return int
 */
function novablocks_normalize_site_identity_width( $width ): int {
	if ( ! is_numeric( $width ) ) {
		return NOVABLOCKS_SITE_IDENTITY_DEFAULT_WIDTH;
	}

	$width = (int) round( (float) $width );

	return max(
		NOVABLOCKS_SITE_IDENTITY_MIN_WIDTH,
		min( NOVABLOCKS_SITE_IDENTITY_MAX_WIDTH, $width )
	);
}

/**
 * Add the unitless width consumed by the fluid typography calculation.
 *
 * The unitless helper is intentionally render-only. Keeping it out of the
 * serialized save markup preserves validation for Site Identity blocks saved
 * before responsive wordmark sizing was introduced.
 *
 * @param string $block_content Rendered Site Identity markup.
 * @param array  $block         Parsed block data.
 * @return string
 */
function novablocks_render_site_identity_fluid_width( string $block_content, array $block ): string {
	if ( '' === $block_content ) {
		return $block_content;
	}

	$width     = novablocks_normalize_site_identity_width( $block['attrs']['identityWidth'] ?? null );
	$processor = new WP_HTML_Tag_Processor( $block_content );

	if ( ! $processor->next_tag() ) {
		return $block_content;
	}

	$style = trim( (string) $processor->get_attribute( 'style' ) );
	if ( '' !== $style && ';' !== substr( $style, -1 ) ) {
		$style .= ';';
	}

	$style .= '--nb-site-identity-width-value:' . $width;
	$processor->set_attribute( 'style', $style );

	return $processor->get_updated_html();
}
add_filter( 'render_block_novablocks/site-identity', 'novablocks_render_site_identity_fluid_width', 10, 2 );
