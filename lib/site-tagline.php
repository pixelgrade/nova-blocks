<?php
/**
 * Site Tagline design-system integrations.
 *
 * @package Nova_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register Nova's semantic rule controls on core Site Tagline.
 *
 * @param array $metadata Block type metadata.
 * @return array
 */
function novablocks_filter_site_tagline_metadata( array $metadata ): array {
	if ( 'core/site-tagline' !== ( $metadata['name'] ?? '' ) ) {
		return $metadata;
	}

	if ( ! isset( $metadata['attributes'] ) || ! is_array( $metadata['attributes'] ) ) {
		$metadata['attributes'] = [];
	}

	$metadata['attributes']['ruleWeight'] = [
		'type'    => 'number',
		'default' => 1,
	];
	$metadata['attributes']['ruleStrength'] = [
		'type'    => 'string',
		'default' => 'strong',
	];

	return $metadata;
}
add_filter( 'block_type_metadata', 'novablocks_filter_site_tagline_metadata' );

/**
 * Add authored Ruled Label controls to the dynamic frontend markup.
 *
 * Render-time augmentation keeps the saved core block markup valid when Nova
 * is inactive and mirrors the editor wrapper custom properties.
 *
 * @param string $block_content Rendered Site Tagline markup.
 * @param array  $block         Parsed block data.
 * @return string
 */
function novablocks_render_site_tagline_rule_style( string $block_content, array $block ): string {
	$attributes = $block['attrs'] ?? [];
	$class_name = is_string( $attributes['className'] ?? null ) ? $attributes['className'] : '';

	if (
		! preg_match( '/(?:^|\s)is-style-ruled-label(?:\s|$)/', $class_name )
		&& ! preg_match( '/class=("|\')[^"\']*\bis-style-ruled-label\b/i', $block_content )
	) {
		return $block_content;
	}

	$properties = novablocks_get_rule_style_properties(
		$attributes,
		'--nb-site-tagline-rule',
		'strong'
	);

	if ( empty( $properties ) ) {
		return $block_content;
	}

	$processor = new WP_HTML_Tag_Processor( $block_content );
	if ( ! $processor->next_tag() ) {
		return $block_content;
	}

	$style = trim( (string) $processor->get_attribute( 'style' ) );
	if ( '' !== $style && ';' !== substr( $style, -1 ) ) {
		$style .= ';';
	}

	foreach ( $properties as $property => $value ) {
		$style .= $property . ':' . $value . ';';
	}

	$processor->set_attribute( 'style', $style );

	return $processor->get_updated_html();
}
add_filter( 'render_block_core/site-tagline', 'novablocks_render_site_tagline_rule_style', 10, 2 );
