import { createBlock } from '@wordpress/blocks';
import { useSettings } from '@novablocks/block-editor';

const blockAttributes = {
  layout: {
    type: 'string',
    default: 'logo-left'
  },
  align: {
    type: 'string',
    default: 'full'
  },

};

const deprecated = [
  {

    isEligible: ( attributes, innerBlocks ) => {
      return innerBlocks.length && innerBlocks[0].name !== 'novablocks/header-row';
    },


    attributes: {
      ...blockAttributes
    },

    migrate( attributes, innerBlocks ) {
      const novablocksSettings = useSettings();

      const headerShouldBeSticky = novablocksSettings?.customify_config?.header_position?.value === 'sticky' || false;

      return [
       attributes,
        [
          createBlock( 'novablocks/header-row', {
              className: 'novablocks-header-row novablocks-header-row--primary',
              name: 'primary',
              label: 'Primary Navigation',
              isSticky: headerShouldBeSticky
            },
            innerBlocks
          )
        ]
      ];
    },

    save: function() {},
  }
];

export default deprecated;
