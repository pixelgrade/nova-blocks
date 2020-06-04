import { EmphasisBlockAreaControls, EmphasisContentAreaControls } from "../emphasis-level-controls";
import { HeadingToolbar } from "../../components";
import {ControlsSection, ControlsTab} from "../control-sections";

const { __ } = wp.i18n;
const { Fragment } = wp.element;

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

const CollectionInspectorControls = ( props ) => {

	const {
		attributes: {
			contentAlign,
			containerHeight,
			imageResizing,
			level,
			showMedia,
		},
		setAttributes,
		isSelected,
	} = props;

	const onChange = typeof props.onChange !== 'function' ? setAttributes : props.onChange;

	return (
		<Fragment>
			<EmphasisBlockAreaControls>
				  <PanelRow>
					  <span>{ __( 'Title Level', '__plugin_txtd' ) }</span>
					  <HeadingToolbar
						  minLevel={ 2 }
						  maxLevel={ 4 }
						  selectedLevel={ level }
						  onChange={ ( level ) => { onChange( { level } ) } }
					  />
				  </PanelRow>
			</EmphasisBlockAreaControls>
			<EmphasisContentAreaControls>
				  <PanelRow>
					  <span>{ __( 'Content Alignment', '__plugin_txtd' ) }</span>
					  <AlignmentToolbar
						  value={ contentAlign }
						  isCollapsed={ false }
						  onChange={ ( contentAlign ) => { onChange( { contentAlign } ) } }
					  />
				  </PanelRow>
			</EmphasisContentAreaControls>
			<ControlsSection label={ __( 'Display' ) }>
				<ControlsTab label={ __( 'Settings' ) }>
					<RadioControl
						key={ 'collection-image-resizing' }
						label={ __( 'Image resizing' ) }
						selected={ imageResizing }
						onChange={ imageResizing => {
							setAttributes( { imageResizing } )
						} }
						options={ [
							{ label: 'Stretch to fill the container', value: 'cropped' },
							{ label: 'Shrink to fit (no crop)', value: 'original' },
						] }
					/>
					<RangeControl
						key={ 'collection-image-container-height' }
						label={ __( 'Image container height', '__plugin_txtd' ) }
						value={ containerHeight }
						onChange={ containerHeight => {
							setAttributes( { containerHeight } )
						} }
						min={ 0 }
						max={ 100 }
						step={ 5 }
					/>
				</ControlsTab>
			</ControlsSection>
		</Fragment>
	)
}

export default CollectionInspectorControls;
