import classnames from "classnames";
import { Collection } from "@novablocks/collection";
import { getContentVariation } from '@novablocks/utils';

/**
 * WordPress dependencies
 */
import {
	Fragment
 } from '@wordpress/element';

import {
	createHigherOrderComponent
 } from '@wordpress/compose';

import {
	InnerBlocks,
 } from '@wordpress/block-editor';

import {
	select,
	dispatch,
 } from '@wordpress/data';

const ALLOWED_BLOCKS = [ 'novablocks/card' ];
const CARDS_COLLECTION_TEMPLATE = [
	[ 'novablocks/card' ],
	[ 'novablocks/card' ],
	[ 'novablocks/card' ],
];

const CardsCollectionEdit = ( props ) => {

	const {
		innerBlocks,
    isSelected,
	} = props;

	const hasAppender = !! innerBlocks && innerBlocks.length < 4 && isSelected;
	const passedProps = Object.assign( {}, props, {
		className: classnames(
			props.className,
			'novablocks-cards-collection'
		)
	} );

	return (
		<Fragment>
			<Collection.Component hasAppender={ hasAppender } { ...passedProps }>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					template={ CARDS_COLLECTION_TEMPLATE }
				/>
			</Collection.Component>
		</Fragment>
	);
};

const withCollectionVisibilityAttributes = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		if ( 'novablocks/cards-collection' === props.name ) {
			const { clientId, attributes } = props;
			const { getBlock } = select( 'core/block-editor' );
			const { updateBlockAttributes } = dispatch( 'core/block-editor' );
			const collection = getBlock( clientId );
			const cards = collection.innerBlocks;

			const newAttributes = (
				( { level, contentAlign, showMedia, showTitle, showSubtitle, showDescription, showButtons, showMeta } ) => {
					const atts = { level, contentAlign, showMedia, showTitle, showSubtitle, showDescription, showButtons, showMeta };

					return Object.assign( {}, atts, {
					  paletteVariation: getContentVariation( attributes )
          } );
				}
			)( attributes );

			cards.forEach( block => {
				updateBlockAttributes( block.clientId, newAttributes );

				if ( Array.isArray( block.innerBlocks ) ) {
					block.innerBlocks.forEach( innerBlock => {
						updateBlockAttributes( innerBlock.clientId, {
							align: newAttributes.contentAlign
						} );
					} );
				}
			} )
		}
		return <BlockListBlock { ...props } />
	};
}, 'withCollectionVisibilityAttributes' );

wp.hooks.addFilter( 'editor.BlockListBlock', 'novablocks/with-collection-visibility-attributes', withCollectionVisibilityAttributes );

export default CardsCollectionEdit;
