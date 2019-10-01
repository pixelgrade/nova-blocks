import * as icons from './icons';

import classnames from 'classnames';

const { __ } = wp.i18n;

const {
	useState
} = wp.element;

const {
	Toolbar,
	IconButton,
} = wp.components;

const {
	BlockControls,
	InnerBlocks
} = wp.blockEditor;

const TEMPLATE_OPTIONS = [
	{
		title: __( 'Logo on the left side and one navigation menu', '__plugin_txtd' ),
		name: 'logo-left',
		icon: icons.logoLeft,
		template: [
			[ 'novablocks/logo' ],
			[ 'novablocks/navigation', {
				className: "site-header__menu site-header__menu--primary",
				slug: "primary"
			} ],
		],
	},
	{
		title: __( 'Logo centered and one navigation menu on each side', '__plugin_txtd' ),
		name: 'logo-center',
		icon: icons.logoCenter,
		template: [
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
	}
];

export default function Edit( props ) {

	const { clientId } = props;
	const {
		attributes: {
			layout
		},
		className,
		setAttributes
	} = props;

	const block = wp.data.select( 'core/block-editor' ).getBlock( clientId );
	const innerBlocks = block.innerBlocks;

	const currentTemplate = ( block !== null && !! innerBlocks.length ) ? innerBlocks.map(block => [block.name]) : null;
	const [ template, setTemplate ] = useState( currentTemplate );

	const applyTemplate = template => {
		const activeTemplate = TEMPLATE_OPTIONS.find( option => option.template === template );
		const activeTemplateName = activeTemplate.name;
		setAttributes( { layout: activeTemplateName } )
		setTemplate( template );
	};

	const classNames = classnames(
		className,
		`site-header`,
		`site-header-${layout}`
	);


	return (
		[
			<BlockControls>
				<Toolbar>
					<IconButton
						className="components-icon-button components-toolbar__control"
						label={ __( 'Change Layout', '__plugin_txtd' ) }
						onClick={ () => setTemplate( null ) }
						icon="edit"
					/>
				</Toolbar>
			</BlockControls>,
			<div className={classNames}>
				<InnerBlocks
					__experimentalTemplateOptions={ TEMPLATE_OPTIONS }
					__experimentalOnSelectTemplateOption={ nextTemplate => {
						applyTemplate( nextTemplate );
					} }
					template={ template }
					templateLock="all"
				/>
			</div>
		]
	)
}
