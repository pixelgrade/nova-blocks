import * as icons from './icons';

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
		title: __( 'Logo on the left side and one navigation menu' ),
		name: 'logo-left',
		icon: icons.logoLeft,
		template: [
			[ 'novablocks/logo' ],
			[ 'novablocks/navigation', {
				className: "site-header__menu--primary",
				slug: "primary"
			} ],
		],
	},
	{
		title: __( 'Logo centered and one navigation menu on each side' ),
		name: 'logo-center',
		icon: icons.logoCenter,
		template: [
			[ 'novablocks/navigation', {
				className: "site-header__menu--secondary",
				slug: "secondary"
			} ],
			[ 'novablocks/logo' ],
			[ 'novablocks/navigation', {
				className: "site-header__menu--primary",
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

	return (
		[
			<BlockControls>
				<Toolbar>
					<IconButton
						className="components-icon-button components-toolbar__control"
						label={ __( 'Change Layout' ) }
						onClick={ () => setTemplate( null ) }
						icon="edit"
					/>
				</Toolbar>
			</BlockControls>,
			<InnerBlocks
				__experimentalTemplateOptions={ TEMPLATE_OPTIONS }
				__experimentalOnSelectTemplateOption={ nextTemplate => {
					applyTemplate( nextTemplate );
				} }
				template={ template }
				templateLock="all"
			/>
		]
	)
}
