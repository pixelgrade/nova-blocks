/**
 * WordPress dependencies
 */
import { createBlock, registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import attributes from './attributes.json';

export const getLegacyHeroImages = ( attributes ) => {
	const { media } = attributes;

	if ( ! media || ! media.url ) {
		return [];
	}

	const { caption, title, ...image } = media;

	return [ image ];
};

export const getLegacyHeroSupernovaAttributes = ( attributes ) => {
	const {
		media,
		scrollIndicatorBlock,
		templateInserted,
		...supportedAttributes
	} = attributes;

	const colorSignal = attributes.colorSignal ?? 3;
	const paletteVariation = attributes.paletteVariation ?? 12;

	return {
		...supportedAttributes,
		variation: 'novablocks-card-hero',
		showCollectionTitle: false,
		showCollectionSubtitle: false,
		contentType: 'custom',
		layoutStyle: 'classic',
		contentPadding: attributes.contentPadding ?? 100,
		cardLayout: 'stacked',
		postsToShow: 1,
		columns: 1,
		contentPosition: attributes.contentPosition || 'center center',
		minHeightFallback: attributes.minHeightFallback ?? 66,
		contentColorSignal: colorSignal,
		contentPaletteVariation: paletteVariation,
		overlayFilterStrength: attributes.overlayFilterStrength ?? 30,
		align: attributes.align || 'full',
		blockTopSpacing: attributes.blockTopSpacing ?? 0,
		blockBottomSpacing: attributes.blockBottomSpacing ?? 1,
		emphasisTopSpacing: attributes.emphasisTopSpacing ?? 0,
		emphasisBottomSpacing: attributes.emphasisBottomSpacing ?? 0,
		scrollingEffect: attributes.scrollingEffect || 'parallax',
		defaultsGenerated: false,
	};
};

export const getLegacyHeroSupernovaItemAttributes = ( attributes ) => {
	const supernovaAttributes = getLegacyHeroSupernovaAttributes( attributes );

	return {
		...supernovaAttributes,
		images: getLegacyHeroImages( attributes ),
		colorSignal: attributes.colorSignal ?? 3,
		paletteVariation: attributes.paletteVariation ?? 12,
		useSourceColorAsReference: false,
	};
};

export const getLegacyHeroBlockAttributes = ( block ) => {
	if ( block.name !== 'core/paragraph' || ! block.attributes?.align || ! block.attributes?.className ) {
		return block.attributes;
	}

	return {
		...block.attributes,
		className: block.attributes.className
			.replace( /\bhas-text-align-[a-z]+\b/g, '' )
			.replace( /\s+/g, ' ' )
			.trim(),
	};
};

export const cloneLegacyHeroInnerBlock = ( block ) => {
	return createBlock(
		block.name,
		getLegacyHeroBlockAttributes( block ),
		( block.innerBlocks || [] ).map( cloneLegacyHeroInnerBlock )
	);
};

export const getLegacyHeroInnerBlocks = ( innerBlocks ) => {
	const contentBlocks = innerBlocks.length === 1 && innerBlocks[0].name === 'core/group'
		? innerBlocks[0].innerBlocks
		: innerBlocks;

	return contentBlocks.map( cloneLegacyHeroInnerBlock );
};

const LegacyHeroEdit = ( { attributes, clientId } ) => {
	const { replaceBlock } = useDispatch( 'core/block-editor' );
	const innerBlocks = useSelect(
		( select ) => select( 'core/block-editor' ).getBlocks( clientId ),
		[ clientId ]
	);

	const replacementBlock = useMemo( () => {
		return createBlock(
			'novablocks/supernova',
			getLegacyHeroSupernovaAttributes( attributes ),
			[
				createBlock(
					'novablocks/supernova-item',
					getLegacyHeroSupernovaItemAttributes( attributes ),
					getLegacyHeroInnerBlocks( innerBlocks )
				),
			]
		);
	}, [ attributes, innerBlocks ] );

	useEffect( () => {
		replaceBlock( clientId, replacementBlock );
	}, [ clientId, replaceBlock, replacementBlock ] );

	return null;
};

registerBlockType( 'novablocks/hero', {
	apiVersion: 3,
	title: __( 'Legacy Hero', '__plugin_txtd' ),
	description: __( 'Compatibility shim for legacy Hero content.', '__plugin_txtd' ),
	category: 'nova-blocks',
	attributes,
	supports: {
		html: false,
		inserter: false,
	},
	scope: [],
	edit: LegacyHeroEdit,
	save: () => <InnerBlocks.Content />,
} );
