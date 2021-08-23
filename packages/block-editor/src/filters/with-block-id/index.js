import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { Component } from '@wordpress/element';

const enableBlockIdAttributeOnBlocks = [ 'novablocks/announcement-bar' ];

function withBlockIdAttribute( settings ) {

	if ( ! enableBlockIdAttributeOnBlocks.includes( settings.name ) ) {
		return settings;
	}

	if ( typeof settings.attributes !== 'undefined' ){
		settings.attributes = Object.assign( settings.attributes, {
			blockId: {
				type: 'string',
				default: '',
			}
		});
	}

	return settings;
}
addFilter( 'blocks.registerBlockType', 'novablocks/with-block-id-attribute', withBlockIdAttribute );

const withBlockId = createHigherOrderComponent( ( BlockEdit ) => {

	return class BetterBlockEdit extends Component {
		constructor() {
			super( ...arguments );
		}

		componentDidMount() {
			if ( enableBlockIdAttributeOnBlocks.includes( this.props.name ) ) {
				this.props.setAttributes( {
					blockId: this.props.clientId
				} );
			}
		}

		render() {
			return <BlockEdit { ...this.props } />;
		}
	}

}, "withBlockId" );

addFilter( 'editor.BlockEdit', 'novablocks/with-block-id', withBlockId );
