
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
	BlockControls,
	InnerBlocks
} = wp.blockEditor;

const TEMPLATE_OPTIONS = [
	{
		title: __( 'Logo on the left side and one navigation menu' ),
		icon: <SVG width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><Path fillRule="evenodd" clipRule="evenodd" d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z" /></SVG>,
		template: [
			[ 'novablocks/logo' ],
			[ 'novablocks/navigation' ],
		],
	},
	{
		title: __( 'Logo on the right side and one navigation menu' ),
		icon: <SVG width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><Path fillRule="evenodd" clipRule="evenodd" d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z" /></SVG>,
		template: [
			[ 'novablocks/navigation' ],
			[ 'novablocks/logo' ],
		],
	},
	{
		title: __( 'Logo centered and one navigation menu on each side' ),
		icon: <SVG width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><Path fillRule="evenodd" d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z" /></SVG>,
		template: [
			[ 'novablocks/navigation' ],
			[ 'novablocks/logo' ],
			[ 'novablocks/navigation' ],
		],
	}
];

export default function Edit( props ) {

	const { clientId } = props;
	const count = wp.data.select( 'core/block-editor' ).getBlockCount( clientId );
	const block = wp.data.select( 'core/block-editor' ).getBlock( clientId );
	const innerBlocks = block.innerBlocks;
	const currentTemplate = ( block !== null && !! innerBlocks.length ) ? innerBlocks.map(block => [block.name]) : null;
	const [ template, setTemplate ] = useState( currentTemplate );

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
					setTemplate( nextTemplate );
				} }
				template={ template }
				templateLock="all"
			/>
		]
	)
}