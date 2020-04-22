import { EmphasisBlockAreaFill, EmphasisContentAreaFill } from "../emphasis-level-controls";
import { HeadingToolbar } from "../../components";

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
			<EmphasisBlockAreaFill>
				{ isSelected &&
				  <PanelRow>
					  <span>{ __( 'Title Level', '__plugin_txtd' ) }</span>
					  <HeadingToolbar
						  minLevel={ 2 }
						  maxLevel={ 4 }
						  selectedLevel={ level }
						  onChange={ ( level ) => { onChange( { level } ) } }
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
						  onChange={ ( contentAlign ) => { onChange( { contentAlign } ) } }
					  />
				  </PanelRow>
				}
			</EmphasisContentAreaFill>
			<InspectorControls>
				{
					showMedia &&
					<PanelBody initialOpen={true} title={__( 'Cards Media Area' )}>
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
	)
}

export default CollectionInspectorControls;
