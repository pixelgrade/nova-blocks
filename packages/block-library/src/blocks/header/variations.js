import * as icons from './icons';
import { __ } from '@wordpress/i18n';

const variations = [
  {
    name: 'logo-left',
    title: __('Logo left with one menu on the right.', '__plugin_txtd' ),
    icon: icons.logoLeft,
    innerBlocks: [
      ['novablocks/header-row', {
        className: 'site-header__row--primary',
        name: 'primary',
        label: 'Primary Navigation',
        isPrimary: true,
        blockTopSpacing: 0,
        blockBottomSpacing: 0,
        emphasisTopSpacing: 1,
        emphasisBottomSpacing: 1,
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
    icon: icons.logoCenter,
    innerBlocks: [
      ['novablocks/header-row', {
        className: 'site-header__row--primary',
        name: 'primary',
        label: 'Primary Navigation',
        isPrimary: true,
        blockTopSpacing: 0,
        blockBottomSpacing: 0,
        emphasisTopSpacing: 1,
        emphasisBottomSpacing: 1,
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
    icon: icons.logoCenterTwoRows,
    innerBlocks: [
      ['novablocks/header-row', {
        className: 'site-header__row--logo',
        name: 'logo',
        label: 'Site identity (logo)',
        blockTopSpacing: 0,
        blockBottomSpacing: 0,
        emphasisTopSpacing: 2,
        emphasisBottomSpacing: 2,
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
        className: 'site-header__row--primary',
        name: 'primary',
        label: 'Primary Navigation',
        isPrimary: true,
        blockTopSpacing: 0,
        blockBottomSpacing: 0,
        emphasisTopSpacing: 1,
        emphasisBottomSpacing: 1,
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
    icon: icons.logoCenterThreeRows,
    innerBlocks:  [
      ['novablocks/header-row', {
        className: 'site-header__row--secondary',
        name: 'secondary',
        label: 'Secondary Navigation',
        blockTopSpacing: 0,
        blockBottomSpacing: 0,
        emphasisTopSpacing: 1,
        emphasisBottomSpacing: 1,
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
        className: 'site-header__row--logo',
        name: 'logo',
        label: 'Site identity(logo)',
        blockTopSpacing: 3,
        blockBottomSpacing: 0,
        emphasisTopSpacing: 1,
        emphasisBottomSpacing: 1,
      },
        [
          ['novablocks/logo']
        ]
      ],
      ['novablocks/header-row', {
        className: 'site-header__row--primary',
        name: 'primary',
        label: 'Primary Navigation',
        isPrimary: true,
        blockTopSpacing: 0,
        blockBottomSpacing: 0,
        emphasisTopSpacing: 1,
        emphasisBottomSpacing: 1,
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
