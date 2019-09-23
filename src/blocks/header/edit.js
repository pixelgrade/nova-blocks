import * as icons from './icons';

const { __ } = wp.i18n;

const {
	Component,
	useState
} = wp.element;

const {
	SVG,
	Path,
	Toolbar,
	IconButton,
} = wp.components;

const {
	BlockAlignmentToolbar,
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
				hasCartMenuItem: true
			} ],
		],
	},
	{
		title: __( 'Logo centered and one navigation menu on each side' ),
		name: 'logo-center',
		icon: icons.logoCenter,
		template: [
			[ 'novablocks/navigation', { className: "site-header__menu--secondary" }],
			[ 'novablocks/logo' ],
			[ 'novablocks/navigation', {
				className: "site-header__menu--primary" ,
				hasCartMenuItem: true
			} ],
		],
	}
];

export default function Edit( props ) {

	const { clientId } = props;
	const {
		attributes: {
			align,
			layout
		},
		setAttributes
	} = props;

	const count = wp.data.select( 'core/block-editor' ).getBlockCount( clientId );
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
