import { omit } from 'lodash';
import { createBlock } from '@wordpress/blocks';

const blockAttributes = {
  layout: {
    type: 'string',
    default: 'logo-center'
  },
  align: {
    type: 'string',
    default: 'full'
  }
}

const deprecated = [
  {

    isEligible: ( attributes, innerBlocks ) => {
      return typeof attributes.shouldBeSticky === 'undefined';
    },

    attributes: {
      shouldBeSticky: {
        type: 'boolean',
        default: true
      },
      stickyRow: {
        type: 'string',
        default: 'primary'
      },
      ...blockAttributes
    },

    migrate( attributes, innerBlocks ) {

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
