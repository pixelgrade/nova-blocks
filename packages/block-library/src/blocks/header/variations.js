import * as icons from './icons';
import { __ } from '@wordpress/i18n';

const variations = [
	{
		name: 'logo-left',
		title: __( 'Logo on the left side and one navigation menu', '__plugin_txtd' ),
		icon: icons.logoLeft,
		isDefault: true,
		innerBlocks:  [
        [ 'novablocks/logo' ],
        [ 'novablocks/navigation', {
          className: "site-header__menu site-header__menu--primary",
          slug: "primary"
        } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'logo-center',
		title: __( 'Logo centered and one navigation menu on each side', '__plugin_txtd' ),
		icon: icons.logoCenter,
		innerBlocks:  [
			[ 'novablocks/navigation', {
				className: "site-header__menu site-header__menu--secondary",
				slug: "secondary"
			} ],
			[ 'novablocks/logo' ],
			[ 'novablocks/navigation', {
				className: "site-header__menu site-header__menu--primary",
				slug: "primary"
			} ],
		],
		scope: [ 'block' ],
	},
  {
    name: 'Fargo',
    title: __('Logo left with one menu on the right.', '__plugin_txtd' ),
    icon: icons.fargo,
    innerBlocks: [
      ['novablocks/header-row', {
        className: 'site-header__row site-header__row--primary u-horizontal-layout'
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
    name: 'Rosa2',
    title: __('Logo centered with one menu on the left and one menu on the right.', '__plugin_txtd' ),
    icon: icons.rosa2,
    innerBlocks: [
      ['novablocks/header-row', {
        className: 'site-header__row site-header__row--primary u-columns-layout'
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
    name: 'Heap',
    title: __('Two Rows Header with centered logo and three menus.', '__plugin_txtd'),
    icon: icons.heap,
    innerBlocks: [
      ['novablocks/header-row', {
        className: 'site-header__row site-header__row--logo u-columns-layout'
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
        className: 'site-header__row site-header__row--primary'
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
    name: 'Felt',
    title: __('Three Rows Header with centered logo and three menus.', '__plugin_txtd'),
    icon: icons.felt,
    innerBlocks:  [
      ['novablocks/header-row', {
        className: 'site-header__row site-header__row--secondary u-horizontal-layout'
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
        className: 'site-header__row site-header__row--logo'
      },
        [
          ['novablocks/logo']
        ]
      ],
      ['novablocks/header-row', {
        className: 'site-header__row site-header__row--primary'
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
