import { isUndefined } from "lodash";

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import { getSvg } from "@novablocks/block-editor";

import iconSvg from './cards-collection-block.svg';
import edit from './edit';
import transforms from './transforms';

import attributes from "./attributes.json";
import attributesOverwrite from "./attributes-overwrite.json";
import { withSetChildrenAttributes } from "./filters";

const BLOCK_NAME = 'novablocks/cards-collection';

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
addFilter( 'blocks.registerBlockType', 'novablocks/cards-collection-overwrite', overwriteAttributes, Number.MAX_SAFE_INTEGER );

const withCardsCollectionDeprecated = ( settings ) => {

  if ( settings.name !== BLOCK_NAME ) {
    return settings;
  }

  return Object.assign( {}, settings, {
    deprecated: [
      {
        attributes: settings.attributes,
        isEligible( attributes, innerBlocks ) {
          return attributes.columns !== innerBlocks.length || attributes.postsToShow !== innerBlocks.length;
        },
        migrate( attributes, innerBlocks ) {
          return [
            Object.assign( {}, attributes, {
              columns: innerBlocks.length,
              postsToShow: innerBlocks.length,
            } ), innerBlocks
          ]
        },
        save() {
          return <InnerBlocks.Content/>;
        },
      },
      {
        attributes: {
          ...settings.attributes,
          contentAlign: {
            type: "string",
            default: "left"
          }
        },
        isEligible( attributes ) {
          return !isUndefined( attributes.contentAlign ) && isUndefined( attributes.contentPosition );
        },
        migrate( attributes ) {

          const { contentAlign } = attributes;

          return [
            Object.assign( {}, attributes, {
              contentPosition: `center ${ contentAlign }`
            } )
          ];

        },
        save: settings.save
      }
    ],
  } );
};
addFilter( 'blocks.registerBlockType', 'novablocks/cards-collection/deprecated', withCardsCollectionDeprecated, Number.MAX_SAFE_INTEGER );

registerBlockType( BLOCK_NAME, {
  apiVersion: 2,
  title: __( 'Cards Collection (Deprecated)', '__plugin_txtd' ),
  description: __( 'Display a list of related items placed within a coherent layout.', '__plugin_txtd' ),
  category: 'nova-blocks',
  attributes,
  icon: getSvg( iconSvg ),
  keywords: [
    __( 'grid', '__plugin_txtd' ),
    __( 'columns', '__plugin_txtd' ),
    __( 'collection', '__plugin_txtd' ),
    __( 'group', '__plugin_txtd' )
  ],
  supports: {
    html: false,
    novaBlocks: {
      colorSignal: true,
      spaceAndSizing: true,
      cardElementsStacking:true,
      cardElementsVisibility: true,
      collectionLayout: true,
      contentPosition: {
        attributes: true,
        controls: true,
        deprecated: true
      },
    },
  },
  edit,
  save: () => <InnerBlocks.Content/>,
  transforms,
} );

addFilter( 'editor.BlockEdit', 'novablocks/cards-collection/with-set-children-attributes', withSetChildrenAttributes, Number.MAX_SAFE_INTEGER );
