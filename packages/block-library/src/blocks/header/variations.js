import * as icons from './icons';
import { __ } from '@wordpress/i18n';

const variations = [
  {
    name: 'logo-left',
    title: __('Logo left with one menu on the right.', '__plugin_txtd' ),
    icon: icons.logoLeft,
    attributes: {
        layout: 'logo-left'
    },
    innerBlocks: [
      [ 'novablocks/header-row', {
        slug: 'primary',
        label: __( 'Primary Navigation', '__plugin_txtd' ),
        isPrimary: true,
        blockTopSpacing: 0,
        blockBottomSpacing: 0,
        emphasisTopSpacing: 1,
        emphasisBottomSpacing: 1,
      },
        [
          [ 'novablocks/logo' ],
          [ 'novablocks/navigation', { slug: "primary" } ]
        ]
      ]
    ],
    scope: [ 'block' ],
  },
  {
    name: 'logo-center',
    title: __('Logo centered with one menu on the left and one menu on the right.', '__plugin_txtd' ),
    icon: icons.logoCenter,
    attributes: {
      layout: 'logo-center'
    },
    innerBlocks: [
      [ 'novablocks/header-row', {
        slug: 'primary',
        label: __( 'Primary Navigation', '__plugin_txtd' ),
        isPrimary: true,
        blockTopSpacing: 0,
        blockBottomSpacing: 0,
        emphasisTopSpacing: 1,
        emphasisBottomSpacing: 1,
      },
        [
          [ 'novablocks/navigation', { slug: "primary" } ],
          ['novablocks/logo'],
          [ 'novablocks/navigation', { slug: "secondary" } ]
        ]
      ]
    ],
    scope: [ 'block' ],
  },
  {
    name: 'logo-center-two-rows',
    title: __('Two Rows Header with centered logo and three menus.', '__plugin_txtd'),
    icon: icons.logoCenterTwoRows,
    attributes: {
      layout: 'logo-center-two-rows'
    },
    innerBlocks: [
      [ 'novablocks/header-row', {
        slug: 'logo',
        label: __( 'Site Identity / Logo', '__plugin_txtd' ),
        blockTopSpacing: 0,
        blockBottomSpacing: 0,
        emphasisTopSpacing: 2,
        emphasisBottomSpacing: 2,
      },
        [
          [ 'novablocks/navigation', { slug: "secondary" } ],
          [ 'novablocks/logo' ],
          [ 'novablocks/navigation', { slug: "tertiary" } ]
        ]
      ],
      [ 'novablocks/header-row', {
        slug: 'primary',
        label: __( 'Primary Navigation', '__plugin_txtd' ),
        isPrimary: true,
        blockTopSpacing: 0,
        blockBottomSpacing: 0,
        emphasisTopSpacing: 1,
        emphasisBottomSpacing: 1,
      },
        [
          [ 'novablocks/navigation', { slug: "primary" } ]
        ]
      ]
    ],
    scope: [ 'block' ],
  },
  {
    name: 'logo-center-three-rows',
    title: __('Three Rows Header with centered logo and three menus.', '__plugin_txtd'),
    icon: icons.logoCenterThreeRows,
    attributes: {
      layout: 'logo-center-three-rows'
    },
    innerBlocks:  [
      [ 'novablocks/header-row', {
        slug: 'secondary',
        label: __( 'Secondary Navigation', '__plugin_txtd' ),
        blockTopSpacing: 0,
        blockBottomSpacing: 0,
        emphasisTopSpacing: 1,
        emphasisBottomSpacing: 1,
      },
        [
          [ 'novablocks/navigation', { slug: "secondary" } ],
          [ 'novablocks/navigation', { slug: "tertiary" } ]
        ]
      ],
      [ 'novablocks/header-row', {
        slug: 'logo',
        label: __( 'Site Identity / Logo', '__plugin_txtd' ),
        blockTopSpacing: 0,
        blockBottomSpacing: 0,
        emphasisTopSpacing: 3,
        emphasisBottomSpacing: 1,
      },
        [
          ['novablocks/logo']
        ]
      ],
      [ 'novablocks/header-row', {
        slug: 'primary',
        label: __( 'Primary Navigation', '__plugin_txtd' ),
        isPrimary: true,
        blockTopSpacing: 0,
        blockBottomSpacing: 0,
        emphasisTopSpacing: 1,
        emphasisBottomSpacing: 1,
      },
        [
          [ 'novablocks/navigation', { slug: "primary" } ],
        ]
      ],
    ],
    scope: [ 'block' ],
  }
];

export default variations;
