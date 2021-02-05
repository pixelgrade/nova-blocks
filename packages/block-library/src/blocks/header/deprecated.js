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
      shouldBeSticky: {
        type: 'boolean',
        default: false
      },
      stickyRow: {
        type: 'string',
        default: 'primary'
      },
      ...blockAttributes
    },

    migrate( attributes, innerBlocks ) {
      const { getSettings } = select( 'novablocks' );
      const settings = getSettings();

      const headerStickyAttribute = settings.customify_config.header_position.value;

      if ( headerStickyAttribute === 'sticky' ) {
        attributes.shouldBeSticky = true;
      }

      return [
        omit(attributes, 'shouldBeSticky' ),
        [
          createBlock( 'novablocks/header-row', {
              className: 'site-header__row site-header__row--primary',
              headerRowType: 'primary',
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
