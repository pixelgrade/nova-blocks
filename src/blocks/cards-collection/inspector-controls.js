import { HeadingToolbar, ToggleGroup, CardsManagerPanel } from "../../components";
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
		setAttributes,
		innerBlocks,
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

	const updateChildrenAttributes = ( attributes ) => {
		innerBlocks.forEach( ( { clientId } ) => {
			wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( clientId, attributes );
		} );
	}

	const updateAttributes = ( attributes ) => {
		setAttributes( attributes );
		updateChildrenAttributes( attributes );
	}

	return (
		<Fragment>
			<EmphasisBlockAreaFill>
				{ isSelected &&
					<PanelRow>
						<span>{ __( 'Title Level', '__plugin_txtd' ) }</span>
						<HeadingToolbar
							minLevel={ 2 }
							maxLevel={ 4 }
							selectedLevel={ level }
							onChange={ ( newLevel ) => {
								updateAttributes( { level: newLevel } );
							} }
						/>
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
								setAttributes( { contentAlign } );
								updateChildrenAttributes( { align: contentAlign } );
							} }
						/>
					</PanelRow>
				}
			</EmphasisContentAreaFill>
			<InspectorControls>
				<CardsManagerPanel
					label={ __( 'Cards Manager', '__plugin_txtd' ) }
					onChange={ updateAttributes }
					{ ...props }
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
