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
		attributes,
		childrenBlocks,
		setAttributes,
	} = props;

	const {
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
	} = attributes;

	const className = classnames(
		props.className,
		'novablocks-cards-collection',
		`block-is-${ blockStyle }`,
		`content-is-${ contentStyle }`
	);

	const toggleAttribute = ( attribute ) => {
		const newAttributes = {
			[attribute]: ! attributes[attribute]
		};

		childrenBlocks.forEach( ( { clientId } ) => {
			wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( clientId, newAttributes );
		} );

		setAttributes( newAttributes );
	};

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
						onChange={ () => { toggleAttribute( 'showMedia' ) } }
					/>
					<ToggleControl
						label={ __( 'Title' ) }
						checked={ !! showTitle }
						onChange={ () => { toggleAttribute( 'showTitle' ) } }
					/>
					<ToggleControl
						label={ __( 'Subtitle' ) }
						checked={ !! showSubtitle }
						onChange={ () => { toggleAttribute( 'showSubtitle' ) } }
					/>
					<ToggleControl
						label={ __( 'Description' ) }
						checked={ !! showDescription }
						onChange={ () => { toggleAttribute( 'showDescription' ) } }
					/>
					<ToggleControl
						label={ __( 'Buttons' ) }
						checked={ !! showButtons }
						onChange={ () => { toggleAttribute( 'showButtons' ) } }
					/>
					<ToggleControl
						label={ __( 'Meta' ) }
						checked={ !! showMeta }
						onChange={ () => { toggleAttribute( 'showMeta' ) } }
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
	const parentBlock = select( 'core/block-editor' ).getBlock( clientId );
	const childrenBlocks = parentBlock.innerBlocks;

	return {
		childrenBlocks,
		...props
	}
} )( CardsCollectionEdit );

export default CardCollectionWithChildren;

