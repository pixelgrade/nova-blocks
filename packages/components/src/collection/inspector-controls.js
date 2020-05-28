import { EmphasisBlockAreaControls, EmphasisContentAreaControls } from "../emphasis-level-controls";
import { HeadingToolbar } from "../";
import {ControlsSection, ControlsTab} from "../control-sections";

import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

import {
	PanelBody,
	PanelRow,
	RadioControl,
	RangeControl
 } from '@wordpress/components';

import {
	InspectorControls,
	AlignmentToolbar
 } from '@wordpress/block-editor';

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
	)
}

export default CollectionInspectorControls;
