import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { Fragment } = wp.element;
const { __ } = wp.i18n;

const {
	PanelBody,
	ToggleControl
} = wp.components;

const {
	InnerBlocks,
	InspectorControls,
} = wp.blockEditor;

const ALLOWED_BLOCKS = [ 'novablocks/card' ];
const CARDS_COLLECTION_TEMPLATE = [ [ 'novablocks/card' ] ];

const CardsCollectionEdit = ( props ) => {

	const {
		attributes: {
			blockStyle,
			contentStyle,

			showCollectionTitle,
			showCollectionSubtitle,

			showMedia,
			showTitle,
			showSubtitle,
			showDescription,
			showButtons,
			showMeta,
		},
		childrenBlocks,
		setAttributes,
	} = props;

	const className = classnames(
		props.className,
		'novablocks-cards-collection',
		`block-is-${ blockStyle }`,
		`content-is-${ contentStyle }`
	);

	console.log( childrenBlocks );

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody initialOpen={ true } title={ __( 'Elements Visibility', '__plugin_txtd' ) }>
					<ToggleControl
						label={ __( 'Collection Title' ) }
						checked={ !! showCollectionTitle }
						onChange={ showCollectionTitle => setAttributes( { showCollectionTitle } ) }
					/>
					<ToggleControl
						label={ __( 'Collection Subtitle' ) }
						checked={ !! showCollectionSubtitle }
						onChange={ showCollectionSubtitle => setAttributes( { showCollectionSubtitle } ) }
					/>
					<ToggleControl
						label={ __( 'Media' ) }
						checked={ !! showMedia }
						onChange={ showMedia => setAttributes( { showMedia } ) }
					/>
					<ToggleControl
						label={ __( 'Title' ) }
						checked={ !! showTitle }
						onChange={ showTitle => setAttributes( { showTitle } ) }
					/>
					<ToggleControl
						label={ __( 'Subtitle' ) }
						checked={ !! showSubtitle }
						onChange={ showSubtitle => setAttributes( { showSubtitle } ) }
					/>
					<ToggleControl
						label={ __( 'Description' ) }
						checked={ !! showDescription }
						onChange={ showDescription => setAttributes( { showDescription } ) }
					/>
					<ToggleControl
						label={ __( 'Buttons' ) }
						checked={ !! showButtons }
						onChange={ showButtons => setAttributes( { showButtons } ) }
					/>
					<ToggleControl
						label={ __( 'Meta' ) }
						checked={ !! showMeta }
						onChange={ showMeta => setAttributes( { showMeta } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div className={ className }>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					template={ CARDS_COLLECTION_TEMPLATE }
					__experimentalMoverDirection="horizontal"
				/>
			</div>
		</Fragment>
	);
}

const CardCollectionWithChildren = wp.data.withSelect( ( select, props ) => {
	const { clientId } = props;

	return {
		childrenBlocks: select( 'core/editor' ).getBlock( clientId ).innerBlocks,
		...props
	}
} )( CardsCollectionEdit );

export default CardCollectionWithChildren;

