import * as icons from './icons';
import { __ } from '@wordpress/i18n';

const variations = [
  {
    name: 'logo-left',
    title: __('Logo left with one menu on the right.', '__plugin_txtd' ),
    icon: icons.fargo,
    innerBlocks: [
      ['novablocks/header-row', {
        className: 'site-header__row site-header__row--primary',
        headerRowType: 'primary'
      },
        [
          ['novablocks/logo'],
          [ 'novablocks/navigation', {
            className: "site-header__menu site-header__menu--primary",
            slug: "primary"
          } ]
        ]
      ]
    ],
    scope: [ 'block' ],
  },
  {
    name: 'logo-center',
    title: __('Logo centered with one menu on the left and one menu on the right.', '__plugin_txtd' ),
    icon: icons.rosa2,
    innerBlocks: [
      ['novablocks/header-row', {
        className: 'site-header__row site-header__row--primary',
        headerRowType: 'primary'
      },
        [
          [ 'novablocks/navigation', {
            className: "site-header__menu site-header__menu--secondary",
            slug: "secondary"
          } ],
          ['novablocks/logo'],
          [ 'novablocks/navigation', {
            className: "site-header__menu site-header__menu--primary",
            slug: "primary"
          } ]
        ]
      ]
    ],
    scope: [ 'block' ],
  },
  {
    name: 'logo-center-two-rows',
    title: __('Two Rows Header with centered logo and three menus.', '__plugin_txtd'),
    icon: icons.heap,
    innerBlocks: [
      ['novablocks/header-row', {
        className: 'site-header__row site-header__row--logo',
        headerRowType: 'logo'
      },
        [
          [ 'novablocks/navigation', {
            className: "site-header__menu site-header__menu--secondary",
            slug: "secondary"
          } ],
          ['novablocks/logo'],
          [ 'novablocks/navigation', {
            className: "site-header__menu site-header__menu--tertiary",
            slug: "tertiary"
          } ]
        ]
      ],
      ['novablocks/header-row', {
        className: 'site-header__row site-header__row--primary',
        headerRowType: 'primary'
      },
        [
          [ 'novablocks/navigation', {
            className: "site-header__menu site-header__menu--primary",
            slug: "primary"
          } ]
        ]
      ]
    ],
    scope: [ 'block' ],
  },
  {
    name: 'logo-center-three-rows',
    title: __('Three Rows Header with centered logo and three menus.', '__plugin_txtd'),
    icon: icons.felt,
    innerBlocks:  [
      ['novablocks/header-row', {
        className: 'site-header__row site-header__row--secondary',
        headerRowType: 'secondary'
      },
        [
          [ 'novablocks/navigation', {
            className: "site-header__menu site-header__menu--secondary",
            slug: "secondary"
          } ],
          [ 'novablocks/navigation', {
            className: "site-header__menu site-header__menu--tertiary",
            slug: "tertiary"
          } ]
        ]
      ],
      ['novablocks/header-row', {
        className: 'site-header__row site-header__row--logo',
        headerRowType: 'logo'
      },
        [
          ['novablocks/logo']
        ]
      ],
      ['novablocks/header-row', {
        className: 'site-header__row site-header__row--primary',
        headerRowType: 'primary'
      },
        [
          [ 'novablocks/navigation', {
            className: "site-header__menu site-header__menu--primary",
            slug: "primary"
          } ],
        ]
      ],
    ],
    scope: [ 'block' ],
  }
];

export default variations;
