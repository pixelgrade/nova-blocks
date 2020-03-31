import HeadingToolbar from "../../components/heading-toolbar";

const { __ } = wp.i18n;

const {
	PanelBody,
	PanelRow,
	RadioControl,
	RangeControl,
	ToggleControl,
} = wp.components;

const {
	InspectorControls,
	AlignmentToolbar,
} = wp.blockEditor;

const {
	dispatch,
	select,
} = wp.data;

const CardsCollectionInspectorControls = ( props ) => {

	const {
		attributes,
		childrenBlocks,
		setAttributes,
	} = props;

	const {
		level,
		imageResizing,
		containerHeight,
		contentAlign,

		showCollectionTitle,
		showCollectionSubtitle,

		showMedia,
		showTitle,
		showSubtitle,
		showDescription,
		showButtons,
		showMeta,
	} = attributes;

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
		<InspectorControls>
			<PanelBody initialOpen={ true } title={ __( 'Cards Content Area' ) }>
				<PanelRow>
					<span>{ __( 'Title Level', '__plugin_txtd' ) }</span>
					<HeadingToolbar minLevel={ 2 } maxLevel={ 4 } selectedLevel={ level } onChange={ ( newLevel ) => setAttributes( { level: newLevel } ) } />
				</PanelRow>
				<PanelRow>
					<span>{ __( 'Content Alignment', '__plugin_txtd' ) }</span>
					<AlignmentToolbar
						value={ contentAlign }
						isCollapsed={ false }
						onChange={ ( contentAlign ) => {
							const { getSelectedBlock } = select( 'core/block-editor' );
							const { updateBlockAttributes } = dispatch( 'core/block-editor' );

							getSelectedBlock().innerBlocks.map( ( block ) => {
								block.innerBlocks.map( ( innerBlock ) => {
									updateBlockAttributes( innerBlock.clientId, { align: contentAlign } );
								} );
							} );
							setAttributes( { contentAlign } );
						} }
					/>
				</PanelRow>
			</PanelBody>
			<PanelBody initialOpen={ true } title={ __( 'Cards Media Area' ) }>
				<RadioControl
					label={ 'Image resizing' }
					selected={ imageResizing }
					onChange={ imageResizing => { setAttributes( { imageResizing } ) } }
					options={ [
						{ label: 'Stretch to fill the container', value: 'cropped' },
						{ label: 'Shrink to fit (no crop)', value: 'original' },
					] }
				/>
				<RangeControl
					label={ __( 'Image container height', '__plugin_txtd' ) }
					value={ containerHeight }
					onChange={ containerHeight => { setAttributes( { containerHeight } ) } }
					min={ 0 }
					max={ 100 }
					step={ 5 }
				/>
			</PanelBody>
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
   );
}

export default CardsCollectionInspectorControls;
