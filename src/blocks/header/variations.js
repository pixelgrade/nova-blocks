import * as icons from './icons';
const {__} = wp.i18n;

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
	}
];

export default variations;
