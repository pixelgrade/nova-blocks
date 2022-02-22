/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import iconSvg from './media-block.svg';
import edit from './edit';
import save from './save';
import transforms from './transforms';

import {
  getRandomArrayFromArray,
  getRandomBetween,
} from '@novablocks/utils';

import { getRandomAttributes } from '@novablocks/media-composition';

import {
  getSvg,
  generateDefaults,
  getPlaceholderImages,
  insertTemplate,
} from '@novablocks/block-editor';

import attributes from './attributes';
import attributesOverwrite from './attributes-overwrite.json';

async function getNewDefaults () {
  const numberOfImages = getRandomBetween( 2, 4 );
  const placeholderImages = await getPlaceholderImages();
  const randomImages = getRandomArrayFromArray( placeholderImages, numberOfImages );
  const randomAttributes = getRandomAttributes();

  randomImages.forEach( image => {
    if ( typeof image?.download === 'function' ) {
      image.download();
    }
  } );

  return {
    ...randomAttributes,
    verticalAlignment: 'center',
    images: randomImages,
  };
}

const BLOCK_NAME = 'novablocks/media';

generateDefaults( BLOCK_NAME, getNewDefaults );
insertTemplate( BLOCK_NAME, [
  [
    'core/heading',
    {
      content: __( 'Shoot for the moon, Even if You Miss it', '__plugin_txtd' ),
      level: 4,
    },
  ],
  [
    'core/heading',
    {
      content: __( 'Welcome to our planet, look and feel matters!', '__plugin_txtd' ),
      level: 2,
    },
  ],
  [
    'core/paragraph',
    {
      content: __( 'We\'ve always defined ourselves by the ability to overcome the impossible. And we count these moments. These moments when we dare to aim higher, to break barriers, to reach for the stars, to make the unknown known.', '__plugin_txtd' ),
    },
  ],
  [
    'core/buttons',
    {
      align: 'center',
    },
    [
      [
        'core/button',
        {
          text: __( 'Discover More', '__plugin_txtd' ),
        },
      ],
    ],
  ],
] );

const overwriteAttributes = ( settings ) => {

  if ( settings.name !== BLOCK_NAME ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      ...attributesOverwrite
    }
  };
};
addFilter( 'blocks.registerBlockType', 'novablocks/media/attributes-overwrite', overwriteAttributes, Number.MAX_SAFE_INTEGER );

registerBlockType( BLOCK_NAME, {
  apiVersion: 2,
  title: __( 'Media Card Constellation (Deprecated)', '__plugin_txtd' ),
  description: __( 'Display media objects alongside short pieces of content.', '__plugin_txtd' ),
  category: 'nova-blocks',
  icon: {
    src: getSvg( iconSvg )
  },
  // Additional search terms
  keywords: [ __( 'image with text', '__plugin_txtd' ), __( 'columns', '__plugin_txtd' ), __( 'side text', '__plugin_txtd' ) ],
  attributes,
  supports: {
    html: false,
    novaBlocks: {
      colorSignal: true,
      contentPosition: {
        deprecated: true
      },
      mediaComposition: true,
      shapeModeling: true,
      spaceAndSizing: {
        attributes: true,
        controls: true,
        advancedSpacing: true,
      },
    },
  },
  edit,
  save,
  transforms,
} );
