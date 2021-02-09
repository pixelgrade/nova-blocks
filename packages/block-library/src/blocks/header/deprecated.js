import { omit } from 'lodash';
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

}

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
              className: 'site-header__row site-header__row--primary',
              label: 'primary',
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
