import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { Component } from '@wordpress/element';
import { select } from '@wordpress/data';

const enableBlockIndexAttributeOnBlocks = [ 'novablocks/hero' ];

function addBlockIndexAttribute( block ) {

	if ( ! enableBlockIndexAttributeOnBlocks.includes( block.name ) ) {
		return block;
	}

	if ( typeof block.attributes !== 'undefined' ){
		block.attributes = Object.assign( block.attributes, {
			blockIndex: {
				type: 'number',
				default: -1,
			}
		});
	}

	return block;
}
addFilter( 'blocks.registerBlockType', 'novablocks/add-blockIndex-attribute', addBlockIndexAttribute );

const withBlockIndexAttribute = createHigherOrderComponent( ( BlockEdit ) => {

	return class BetterBlockEdit extends Component {
		constructor() {
			super( ...arguments );
		}

		componentDidMount() {
			this.updateIndex();
		}

		updateIndex() {
			if ( enableBlockIndexAttributeOnBlocks.includes( this.props.name ) ) {
				const oldIndex = this.props.attributes.blockIndex;
				const newIndex = select( 'core/block-editor' ).getBlocks().findIndex( block => {
					return block.clientId === this.props.clientId
				} );

				if ( oldIndex !== newIndex ) {
					this.props.setAttributes( { blockIndex: newIndex } );
				}
			}
		}

		render() {
			return <BlockEdit { ...this.props } />;
		}
	}

}, "withBlockIndexAttribute" );

addFilter( 'editor.BlockEdit', 'novablocks/with-blockIndex-attribute', withBlockIndexAttribute );



