/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

import edit from "./edit";
import attributes from "./attributes.json";

registerBlockType( 'novablocks/sidecar-area', {
  attributes,
  edit,
  save: () => <InnerBlocks.Content />,
  deprecated: [ {
    attributes,
    isEligible: ( attributes, innerBlocks ) => {
      return typeof attributes?.className === "string" && attributes?.className.indexOf( 'novablocks-sidebar' ) > -1;
    },
    migrate: ( attributes, innerBlocks ) => {
      const newClassname = attributes.className.replace( 'novablocks-sidebar', '' );
      const newAttributes = {
        ...attributes,
        areaName: 'sidebar',
        className: newClassname
      };

      return [ newAttributes, innerBlocks ];
    },
    save: () => <InnerBlocks.Content />,
  } ]
} );
