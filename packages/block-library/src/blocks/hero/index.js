/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';

import { getSvg } from '@novablocks/block-editor';

import {
  generateDefaults,
  insertTemplate,
} from '@novablocks/block-editor';

/**
 * Internal dependencies
 */
import iconSvg from './icon.svg';
import edit from './edit';
import save from './save';
import transforms from './transforms';
import attributes from './attributes.json';
import attributesOverwrite from './attributes-overwrite.json';
import getNewDefaults from './get-new-defaults';

// Load deprecated file
import './deprecated';

const BLOCK_NAME = 'novablocks/hero';

generateDefaults( BLOCK_NAME, getNewDefaults );
insertTemplate( BLOCK_NAME, [
  [
    'core/group',
    {},
    [
      [
        'novablocks/headline',
        {
          secondary: __( 'This is a catchy', '__plugin_txtd' ),
          primary: __( 'Headline', '__plugin_txtd' ),
          align: 'center',
          level: 1,
          fontSize: 'larger',
          className: 'has-larger-font-size',
        }
      ],
      [
        'core/paragraph',
        {
          content: __( 'A brilliant subtitle to explain its catchiness', '__plugin_txtd' ),
          align: 'center',
          className: 'is-style-lead',
        }
      ],
      [
        'core/buttons',
        {
          align: 'center',
          contentJustification: 'center',
        },
        [
          [
            'core/button',
            {
              text: __( 'Discover more', '__plugin_txtd' ),
            },
          ]
        ]
      ],
    ],
  ]
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
addFilter( 'blocks.registerBlockType', 'novablocks/hero/attributes-overwrite', overwriteAttributes, Number.MAX_SAFE_INTEGER );

registerBlockType( BLOCK_NAME, {
  apiVersion: 2,
  title: __( 'Hero of the Galaxy (Deprecated)', '__plugin_txtd' ),
  description: __( 'A great way to get your visitors acquainted with your content.', '__plugin_txtd' ),
  category: 'nova-blocks',
  icon: getSvg( iconSvg ),
  // Additional search terms
  keywords: [
    __( 'cover', '__plugin_txtd' ),
    __( 'full width', '__plugin_txtd' ),
    __( 'hero image', '__plugin_txtd' ),
    __( 'cover section', '__plugin_txtd' )
  ],
  supports: {
    anchor: true,
    html: false,
    novaBlocks: {
      colorSignal: {
        attributes: true,
        addOverlayColorDeprecatedMethod: true,
        controls: true,
        paletteClassname: true,
        paletteVariationClassname: true,
        colorSignalClassname: true,
      },
      overlayFilter: {
        attributes: true,
        controls: true,
      },
      contentPosition: {
        attributes: true,
        controls: true,
        deprecated: true
      },
      customDefaults: true,
      scrollingEffect: {
        attributes: true,
        controls: true,
        customWrapper: true,
        doppler: true
      },
      spaceAndSizing: true,
      cardElementsVisibility: {
        attributes: true,
      }
    },
  },
  attributes,
  edit,
  save,
  transforms
} );
