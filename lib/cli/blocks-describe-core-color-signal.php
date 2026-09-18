<?php
/**
 * Editor-only Color Signal schemas for the shared block description surface.
 *
 * These schemas belong to describe, never WP_Block_Type_Registry: registering them
 * on the server would change editor serialization order for existing core blocks.
 * The JSON is the same input the editor filters consume. Support-specific slots
 * mirror packages/core/src/blocks/core/{group,button,separator,columns,list}/.
 *
 * @since   2.6.7
 * @package NovaBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Retrieves the Color Signal support details needed by describe for extended core blocks.
 *
 * @since 2.6.7
 * @param string $block_name Block name.
 * @return array|null Describe-relevant support, or null for an unextended block.
 */
function novablocks_get_core_color_signal_describe_support( string $block_name ): ?array {
	$supports = [
		// Priority-1 support filters in the corresponding core block directories.
		'core/group'     => [ 'functionalColors' => true ],
		'core/button'    => [ 'functionalColors' => true, 'activationAttribute' => 'useColorSignal', 'inheritParentPalette' => true, 'paletteInheritanceAttribute' => 'useParentPalette' ],
		'core/separator' => [ 'functionalColors' => false, 'inheritParentPalette' => true, 'paletteInheritanceAttribute' => 'useParentPalette' ],
		'core/columns'   => [ 'functionalColors' => true, 'activationAttribute' => 'useColorSignal' ],
		'core/column'    => [ 'functionalColors' => true, 'activationAttribute' => 'useColorSignal', 'inheritParentPalette' => true, 'paletteInheritanceAttribute' => 'useParentPalette' ],
		'core/list'      => [ 'functionalColors' => false, 'inheritParentPalette' => true ],
	];

	return $supports[ $block_name ] ?? null;
}

/**
 * Retrieves the editor-registered Color Signal schema without changing block registration.
 *
 * Mirrors with-color-signal-attributes.js at priority 10, then the Button/Separator
 * default overrides at priority 20. Those overrides replace whole schema entries;
 * an omitted type is preserved rather than inventing a type absent in the editor.
 *
 * @since 2.6.7
 * @param string $block_name Block name.
 * @return array Attribute schemas, or an empty array for an unextended block.
 */
function novablocks_get_core_color_signal_describe_attributes( string $block_name ): array {
	$support = novablocks_get_core_color_signal_describe_support( $block_name );
	if ( null === $support ) {
		return [];
	}

	$attributes = novablocks_get_attributes_from_json( 'packages/color-signal/src/attributes.json' );
	$attributes = is_array( $attributes ) ? $attributes : [];

	if ( isset( $support['activationAttribute'] ) ) {
		$attributes[ $support['activationAttribute'] ] = [ 'type' => 'boolean', 'default' => false ];
	}
	if ( isset( $support['paletteInheritanceAttribute'] ) ) {
		// No default: the editor uses absence to recognize legacy palette inheritance.
		$attributes[ $support['paletteInheritanceAttribute'] ] = [ 'type' => 'boolean' ];
	}

	if ( in_array( $block_name, [ 'core/button', 'core/separator' ], true ) ) {
		$overrides = novablocks_get_attributes_from_json( 'packages/core/src/blocks/' . $block_name . '/attributes.json' );
		foreach ( $attributes as $name => $schema ) {
			if ( isset( $overrides[ $name ] ) && is_array( $overrides[ $name ] ) ) {
				$attributes[ $name ] = $overrides[ $name ];
			}
		}
	}

	return $attributes;
}
