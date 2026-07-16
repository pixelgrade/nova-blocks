<?php
/**
 * Site Title design-system integrations.
 *
 * @package Nova_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const NOVABLOCKS_SITE_TITLE_DEFAULT_FIT_WIDTH = 395;
const NOVABLOCKS_SITE_TITLE_MIN_FIT_WIDTH     = 80;
const NOVABLOCKS_SITE_TITLE_MAX_FIT_WIDTH     = 800;

/**
 * Enable core Fit Text and register Nova's durable width setting on Site Title.
 *
 * @param array $metadata Block type metadata.
 * @return array
 */
function novablocks_filter_site_title_metadata( array $metadata ): array {
	if ( 'core/site-title' !== ( $metadata['name'] ?? '' ) ) {
		return $metadata;
	}

	if ( ! isset( $metadata['supports'] ) || ! is_array( $metadata['supports'] ) ) {
		$metadata['supports'] = [];
	}

	if ( ! isset( $metadata['supports']['typography'] ) || ! is_array( $metadata['supports']['typography'] ) ) {
		$metadata['supports']['typography'] = [];
	}

	$metadata['supports']['typography']['fitText'] = true;

	if ( ! isset( $metadata['attributes'] ) || ! is_array( $metadata['attributes'] ) ) {
		$metadata['attributes'] = [];
	}

	$metadata['attributes']['fitText'] = [
		'type' => 'boolean',
	];

	$metadata['attributes']['fitTextWidth'] = [
		'type'    => 'number',
		'default' => NOVABLOCKS_SITE_TITLE_DEFAULT_FIT_WIDTH,
	];

	return $metadata;
}
add_filter( 'block_type_metadata', 'novablocks_filter_site_title_metadata' );

/**
 * Normalize a Site Title Fit Text width to Nova's supported pixel range.
 *
 * @param mixed $width Width supplied by block attributes.
 * @return int|null
 */
function novablocks_normalize_site_title_fit_width( $width ): ?int {
	if ( null === $width ) {
		return NOVABLOCKS_SITE_TITLE_DEFAULT_FIT_WIDTH;
	}

	if ( ! is_numeric( $width ) ) {
		return null;
	}

	$width = (int) round( (float) $width );

	return max(
		NOVABLOCKS_SITE_TITLE_MIN_FIT_WIDTH,
		min( NOVABLOCKS_SITE_TITLE_MAX_FIT_WIDTH, $width )
	);
}

/**
 * Add the fitted wordmark width to the dynamic Site Title wrapper.
 *
 * WordPress core owns font-size calculation. Nova only constrains the available
 * inline measure, which keeps the derived value stable across editor/frontend.
 *
 * @param string $block_content Rendered Site Title markup.
 * @param array  $block         Parsed block data.
 * @return string
 */
function novablocks_render_site_title_fit_width( string $block_content, array $block ): string {
	$attributes = $block['attrs'] ?? [];

	if ( true !== ( $attributes['fitText'] ?? false ) ) {
		return $block_content;
	}

	$has_explicit_width = array_key_exists( 'fitTextWidth', $attributes );
	$width              = novablocks_normalize_site_title_fit_width(
		$has_explicit_width ? $attributes['fitTextWidth'] : null
	);

	$processor = new WP_HTML_Tag_Processor( $block_content );
	if ( ! $processor->next_tag() ) {
		return $block_content;
	}

	$processor->add_class( 'has-fit-text' );
	$site_title = $processor->get_updated_html();
	$style      = null === $width ? '' : ' style="--nb-site-title-fit-width:' . $width . 'px"';

	return '<div class="nb-site-title-fit-container"' . $style . '>' . $site_title . '</div>';
}
add_filter( 'render_block_core/site-title', 'novablocks_render_site_title_fit_width', 10, 2 );
