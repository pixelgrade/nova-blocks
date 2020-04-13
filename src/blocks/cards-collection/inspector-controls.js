import { HeadingToolbar, ToggleGroup } from "../../components";
import { EmphasisBlockAreaFill, EmphasisContentAreaFill } from "../../components/emphasis-level-controls";

const { __ } = wp.i18n;

const {
	Fragment
} = wp.element;

const {
	PanelBody,
	PanelRow,
	RadioControl,
	RangeControl,
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
		isSelected,
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

	const toggles = [
		{
			label: __( 'Collection Title' ),
			value: attributes[ 'showCollectionTitle' ],
			attribute: 'showCollectionTitle'
		}, {
			label: __( 'Collection Subtitle' ),
			value: attributes[ 'showCollectionSubtitle' ],
			attribute: 'showCollectionSubtitle',
		}, {
			label: __( 'Media' ),
			value: attributes[ 'showMedia' ],
			attribute: 'showMedia',
		}, {
			label: __( 'Title' ),
			value: attributes[ 'showTitle' ],
			attribute: 'showTitle',
		}, {
			label: __( 'Subtitle' ),
			value: attributes[ 'showSubtitle' ],
			attribute: 'showSubtitle',
		}, {
			label: __( 'Description' ),
			value: attributes[ 'showDescription' ],
			attribute: 'showDescription',
		}, {
			label: __( 'Buttons' ),
			value: attributes[ 'showButtons' ],
			attribute: 'showButtons',
		}, {
			label: __( 'Meta' ),
			value: attributes[ 'showMeta' ],
			attribute: 'showMeta',
		}
	];

	return (
		<Fragment>
			<EmphasisBlockAreaFill>
				{ isSelected &&
					<PanelRow>
						<span>{ __( 'Title Level', '__plugin_txtd' ) }</span>
						<HeadingToolbar minLevel={ 2 } maxLevel={ 4 } selectedLevel={ level } onChange={ ( newLevel ) => setAttributes( { level: newLevel } ) } />
					</PanelRow>
				}
			</EmphasisBlockAreaFill>
			<EmphasisContentAreaFill>
				{ isSelected &&
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
				}
			</EmphasisContentAreaFill>
			<InspectorControls>
				<ToggleGroup
					label={ __( 'Cards Manager', '__plugin_txtd' ) }
					onChange={ toggleAttribute }
					toggles={ toggles }
				/>
				{ showMedia &&
				    <PanelBody initialOpen={ true } title={ __( 'Cards Media Area' ) }>
					    <RadioControl
						    label={'Image resizing'}
						    selected={imageResizing}
						    onChange={imageResizing => {
							    setAttributes( {imageResizing} )
						    }}
						    options={[
							    {label: 'Stretch to fill the container', value: 'cropped'},
							    {label: 'Shrink to fit (no crop)', value: 'original'},
						    ]}
					    />
					    <RangeControl
						    label={__( 'Image container height', '__plugin_txtd' )}
						    value={containerHeight}
						    onChange={containerHeight => {
							    setAttributes( {containerHeight} )
						    }}
						    min={0}
						    max={100}
						    step={5}
					    />
				    </PanelBody>
				}
			</InspectorControls>
		</Fragment>
   );
}

export default CardsCollectionInspectorControls;
