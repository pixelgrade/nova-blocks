import {
	HeadingToolbar,
	ControlsSection,
	ControlsTab
} from "@novablocks/block-editor";

import { __ } from '@wordpress/i18n';

import {
	PanelRow,
	RadioControl,
	RangeControl,
 } from '@wordpress/components';

import {
	AlignmentToolbar,
 } from '@wordpress/block-editor';

const CollectionInspectorControls = ( props ) => {

	const {
		attributes: {
			contentAlign,
			containerHeight,
			imageResizing,
			level,
			imagePadding,
		},
		setAttributes,
	} = props;

	const onChange = typeof props.onChange !== 'function' ? setAttributes : props.onChange;

	return (
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
				<RangeControl
					key={ 'collection-image-padding' }
					label={ __( 'Image padding', '__plugin_txtd' ) }
					value={ imagePadding }
					onChange={ imagePadding => {
						setAttributes( { imagePadding } )
					} }
					min={ 0 }
					max={ 100 }
					step={ 50 }
				/>
				<PanelRow>
					<span>{__( 'Title Level', '__plugin_txtd' )}</span>
					<HeadingToolbar
						minLevel={2}
						maxLevel={4}
						selectedLevel={level}
						onChange={( level ) => {
							onChange( {level} )
						}}
					/>
				</PanelRow>
				<PanelRow>
					<span>{__( 'Content Alignment', '__plugin_txtd' )}</span>
					<AlignmentToolbar
						value={ contentAlign }
						isCollapsed={ false }
						onChange={ contentAlign => {
							onChange( { contentAlign } )
						}}
					/>
				</PanelRow>
			</ControlsTab>
		</ControlsSection>
	)
}

export default CollectionInspectorControls;
