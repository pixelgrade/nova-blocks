import { createBlock } from '@wordpress/blocks';

const getSupernovaItemAttributesFromButtons = ( block ) => {

  const buttonsBlocks = block.innerBlocks.filter( block => block.name === 'core/buttons' );
  const innerBlocks = block.innerBlocks.concat( ...buttonsBlocks.map( buttonsBlock => buttonsBlock.innerBlocks ) );
  const buttonBlock = innerBlocks.find( block => block.name === 'core/button' );

  console.log( buttonsBlocks, innerBlocks, buttonBlock );

  if ( buttonBlock ) {
    return {
      buttonUrl: buttonBlock.attributes.url,
      buttonText: buttonBlock.attributes.text,
      buttonOpensInNewTab: buttonBlock.attributes.linkTarget === '_blank',
    }
  }

  return {}
}

export default {
  to: [
    {
      type: 'block',
      blocks: ['novablocks/supernova'],
      transform: function( attributes, innerBlocks ) {

        const commonAttributes = {
          cardContentAlign: 'center left',
        };

        const collectionAttributes = Object.assign( {}, commonAttributes, {
          sourceType: 'fields',
          columns: innerBlocks.length,
        } );

        const newInnerBlocks = innerBlocks.map( block => {
          const { media, ...passedAttributes } = block.attributes;
          const { caption, title, ...image } = media;

          return createBlock( 'novablocks/supernova-item', Object.assign( {}, commonAttributes, {
            images: [ image ],
            ...passedAttributes,
            ...getSupernovaItemAttributesFromButtons( block )
          } ) );
        } );

        return createBlock( 'novablocks/supernova', collectionAttributes, newInnerBlocks );
      },
    },
  ],
}
