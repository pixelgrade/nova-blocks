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
    name: 'multiple-rows',
    title: __( 'Logo centered and one navigation menu on each side', '__plugin_txtd' ),
    icon: icons.logoCenter,
    innerBlocks:  [
      ['novablocks/header-row', {
        className: 'site-header--secondary-navigation site-header--secondary-row'
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
        className: 'site-header--logo-row'
      },
        [
          ['novablocks/logo']
        ]
      ],
      ['novablocks/header-row', {
        className: 'site-header--primary-row is--multi-row'
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
  },
  {
    name: 'single-row',
    title: __( 'Simple header', '__plugin_txtd' ),
    icon: icons.logoLeft,
    innerBlocks:  [
      ['novablocks/header-row', {
        className: 'site-header--primary-row'
      },
        [
          [ 'novablocks/logo'],
          [ 'novablocks/navigation', {
            className: "site-header__menu site-header__menu--primary",
            slug: "primary"
          } ]
        ]
      ],
    ],
    scope: [ 'block' ],
  }
];

export default variations;
