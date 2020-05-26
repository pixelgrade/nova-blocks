import { HeadingToolbar, ToggleGroup } from "../../components";
import { EmphasisBlockAreaControls, EmphasisContentAreaControls } from "../../components/emphasis-level-controls";
import { ControlsSection, ControlsTab } from '../../components/control-sections';

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
	AlignmentToolbar
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
			<EmphasisBlockAreaControls>
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
			</EmphasisBlockAreaControls>
			<EmphasisContentAreaControls>
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
			</EmphasisContentAreaControls>
			<ToggleGroup
				label={ __( 'Cards Manager', '__plugin_txtd' ) }
				onChange={ updateAttributes }
				toggles={ toggles }
			/>
			<ControlsSection label={ __( 'Media' ) }>
				<ControlsTab label={ __( 'Settings' ) }>
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
				</ControlsTab>
			</ControlsSection>
		</Fragment>
   );
}

export default CardsCollectionInspectorControls;
