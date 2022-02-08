import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { useEffect } from '@wordpress/element';

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

  return props => {
    const { clientId, setAttributes } = props;

    useEffect( () => {
      setAttributes( { blockId: clientId } );
    }, [ clientId ] );

    return <BlockEdit { ...props } />
  }

}, "withBlockId" );

addFilter( 'editor.BlockEdit', 'novablocks/with-block-id', withBlockId );
