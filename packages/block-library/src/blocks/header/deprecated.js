import { createBlock } from '@wordpress/blocks';
import { select } from '@wordpress/data';

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
      return innerBlocks[0].name !== 'novablocks/header-row';
    },


    attributes: {
      ...blockAttributes
    },

    migrate( attributes, innerBlocks ) {
      const { getSettings } = select( 'novablocks' );
      const settings = getSettings();

      const headerShouldBeSticky = settings.customify_config.header_position.value === 'sticky';

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
