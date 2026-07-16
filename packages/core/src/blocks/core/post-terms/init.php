<?php
/**
 * Adds explicitly activated Color Signal support to selected dynamic core blocks.
 *
 * @package NovaBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Returns the dynamic core blocks that Nova augments with Color Signal.
 *
 * @return array<string, array<string, mixed>> Block support configurations.
 */
function novablocks_get_dynamic_core_color_signal_blocks(): array {
	$blocks = [
		'core/post-terms' => [
			'attributes'                => true,
			'controls'                  => true,
			'functionalColors'          => false,
			'paletteClassname'          => true,
			'paletteVariationClassname' => true,
			'colorSignalClassname'      => true,
			'inheritParentPalette'      => true,
			'paletteInheritanceAttribute' => 'useParentPalette',
			'legacyInheritedPalette'    => '1',
			'stickySourceColor'         => false,
			'activationAttribute'       => 'useColorSignal',
			'clearCoreColorsOnChange'   => true,
		],
	];

	/**
	 * Filters dynamic core blocks augmented with Color Signal.
	 *
	 * @param array $blocks Block names mapped to Color Signal support configurations.
	 */
	return apply_filters( 'novablocks/dynamic_core_color_signal_blocks', $blocks );
}

/**
 * Builds the server-side Color Signal attribute schema for a dynamic core block.
 *
 * @param array $support Color Signal support configuration.
 * @return array Block attribute schema.
 */
function novablocks_get_dynamic_core_color_signal_attributes( array $support ): array {
	$attributes           = novablocks_merge_attributes_from_array( [
		'packages/color-signal/src/attributes.json',
	] );
	$activation_attribute = $support['activationAttribute'] ?? '';
	$palette_inheritance_attribute = $support['paletteInheritanceAttribute'] ?? '';

	if ( is_string( $activation_attribute ) && '' !== $activation_attribute ) {
		$attributes[ $activation_attribute ] = [
			'type'    => 'boolean',
			'default' => false,
		];
	}

	if ( is_string( $palette_inheritance_attribute ) && '' !== $palette_inheritance_attribute ) {
		$attributes[ $palette_inheritance_attribute ] = [
			'type' => 'boolean',
		];
	}

	return $attributes;
}

/**
 * Registers matching Color Signal attributes and support on the server.
 *
 * @param array  $args       Block type arguments.
 * @param string $block_type Block type name.
 * @return array Filtered block type arguments.
 */
function novablocks_register_dynamic_core_color_signal_support( array $args, string $block_type ): array {
	$blocks = novablocks_get_dynamic_core_color_signal_blocks();

	if ( ! isset( $blocks[ $block_type ] ) || ! is_array( $blocks[ $block_type ] ) ) {
		return $args;
	}

	$support                         = $blocks[ $block_type ];
	$args['attributes']              = array_merge(
		$args['attributes'] ?? [],
		novablocks_get_dynamic_core_color_signal_attributes( $support )
	);
	$args['supports']                = $args['supports'] ?? [];
	$args['supports']['novaBlocks']  = $args['supports']['novaBlocks'] ?? [];
	$args['supports']['novaBlocks']['colorSignal'] = $support;

	return $args;
}
add_filter( 'register_block_type_args', 'novablocks_register_dynamic_core_color_signal_support', 10, 2 );

/**
 * Adds Color Signal classes and data attributes to active dynamic core markup.
 *
 * @param string $block_content Rendered block markup.
 * @param array  $block         Parsed block data.
 * @return string Filtered block markup.
 */
function novablocks_render_dynamic_core_color_signal_block( string $block_content, array $block ): string {
	$block_name = $block['blockName'] ?? '';
	$blocks     = novablocks_get_dynamic_core_color_signal_blocks();
	$support    = $blocks[ $block_name ] ?? null;

	if ( ! is_array( $support ) ) {
		return $block_content;
	}

	$raw_attributes       = $block['attrs'] ?? [];
	$activation_attribute = $support['activationAttribute'] ?? '';

	if ( ! is_string( $activation_attribute )
		|| '' === $activation_attribute
		|| true !== ( $raw_attributes[ $activation_attribute ] ?? false ) ) {
		return $block_content;
	}

	$attributes = novablocks_get_attributes_with_defaults(
		$raw_attributes,
		novablocks_get_dynamic_core_color_signal_attributes( $support )
	);
	$processor  = new WP_HTML_Tag_Processor( $block_content );

	if ( ! $processor->next_tag() ) {
		return $block_content;
	}

	$classes   = novablocks_get_color_signal_classes( $attributes );
	$classes[] = 'sm-color-signal-' . $attributes['colorSignal'];

	foreach ( array_unique( $classes ) as $class_name ) {
		$processor->add_class( $class_name );
	}

	$processor->set_attribute( 'data-palette', (string) $attributes['palette'] );
	$processor->set_attribute( 'data-palette-variation', (string) $attributes['paletteVariation'] );
	$processor->set_attribute( 'data-color-signal', (string) $attributes['colorSignal'] );

	if ( ! empty( $support['inheritParentPalette'] ) ) {
		$processor->set_attribute( 'data-inherit-parent-palette', 'true' );

		$palette_inheritance_attribute = $support['paletteInheritanceAttribute'] ?? '';

		if ( is_string( $palette_inheritance_attribute ) && '' !== $palette_inheritance_attribute ) {
			$inherits_parent_palette = true;
			$explicit_inheritance    = $attributes[ $palette_inheritance_attribute ] ?? null;

			if ( is_bool( $explicit_inheritance ) ) {
				$inherits_parent_palette = $explicit_inheritance;
			} elseif ( array_key_exists( 'legacyInheritedPalette', $support ) ) {
				$inherits_parent_palette = (string) $attributes['palette'] === (string) $support['legacyInheritedPalette'];
			}

			$data_attribute = strtolower( preg_replace( '/([A-Z])/', '-$1', $palette_inheritance_attribute ) );
			$processor->set_attribute( 'data-palette-inheritance-attribute', $palette_inheritance_attribute );
			$processor->set_attribute( 'data-' . $data_attribute, $inherits_parent_palette ? 'true' : 'false' );
		}
	}

	if ( ! empty( $attributes['useSourceColorAsReference'] ) ) {
		$processor->set_attribute( 'data-use-source-color-as-reference', 'true' );
	}

	return $processor->get_updated_html();
}
add_filter( 'render_block', 'novablocks_render_dynamic_core_color_signal_block', 10, 2 );
