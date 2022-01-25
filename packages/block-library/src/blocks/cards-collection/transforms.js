import { createBlock } from '@wordpress/blocks';

const getSupernovaItemAttributesFromButtons = ( block ) => {

  const buttonsBlocks = block.innerBlocks.filter( block => block.name === 'core/buttons' );
  const innerBlocks = block.innerBlocks.concat( ...buttonsBlocks.map( buttonsBlock => buttonsBlock.innerBlocks ) );
  const buttonBlock = innerBlocks.find( block => block.name === 'core/button' );

  if ( buttonBlock ) {
    return {
      buttonUrl: buttonBlock.attributes.url,
      buttonText: buttonBlock.attributes.text,
      buttonOpensInNewTab: buttonBlock.attributes.linkTarget === '_blank',
    }
  }

  return {}
};

export default {
  to: [
    {
      type: 'block',
      blocks: [ 'novablocks/supernova' ],
      transform: ( attributes, innerBlocks ) => {

        const commonAttributes = {
          ...attributes,
          sourceType: 'fields',
        };

        const collectionAttributes = Object.assign( {}, commonAttributes, {
          align: 'wide',
        } );

        const newInnerBlocks = innerBlocks.map( block => {
          const { media, ...passedAttributes } = block.attributes;
          const { caption, title, ...image } = media;
          const innerBlockAttributes = Object.assign( {}, commonAttributes, {
            images: [ image ],
            defaultsGenerated: true,
            ...passedAttributes,
            ...getSupernovaItemAttributesFromButtons( block )
          } );

          return createBlock( 'novablocks/supernova-item', innerBlockAttributes );
        } );

        return createBlock( 'novablocks/supernova', collectionAttributes, newInnerBlocks );
      },
    },
  ],
}
