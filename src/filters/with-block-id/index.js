const { createHigherOrderComponent } = wp.compose;
const { addFilter } = wp.hooks;
const { Component } = wp.element;

const enableBlockIdAttributeOnBlocks = [ 'novablocks/announcement-bar' ];

function addBlockIdAttribute( block ) {

	if ( ! enableBlockIdAttributeOnBlocks.includes( block.name ) ) {
		return block;
	}

	if ( typeof block.attributes !== 'undefined' ){
		block.attributes = Object.assign( block.attributes, {
			blockId: {
				type: 'string',
				default: '',
			}
		});
	}

	return block;
}
addFilter( 'blocks.registerBlockType', 'novablocks/add-blockId-attribute', addBlockIdAttribute );

const withBlockIdAttribute = createHigherOrderComponent( ( BlockEdit ) => {

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

}, "withBlockIdAttribute" );

addFilter( 'editor.BlockEdit', 'novablocks/with-blockId-attribute', withBlockIdAttribute );



