const { __ } = wp.i18n;

const {
	InspectorControls,
} = wp.blockEditor;

const {
	PanelBody,
	RadioControl,
	RangeControl,
} = wp.components;

const AdvancedGalleryInspectorControls = ( props ) => {

	const {
		setAttributes,
		attributes: {
			scale,
			offset,
			rotate,
			stylePreset,
			orientation,
			aspect,
			aspectRatio,
			objectPosition,
			gridGap,
			verticalSpacing,
		},
		settings: {
			advancedGalleryPresetOptions
		}
	} = props;

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Advanced Gallery Presets', '__plugin_txtd' ) } initialOpen={ true }>
				<RadioControl
					label={ 'Style Presets' }
					selected={ stylePreset }
					onChange={ ( stylePreset ) => {
						let newAttributes = { stylePreset };
						let newOption = advancedGalleryPresetOptions.find( option => stylePreset === option.value );

						if ( newOption && newOption.preset ) {
							newAttributes = Object.assign( newOption.preset, newAttributes );
						}

						setAttributes( newAttributes );
					} }
					options={ advancedGalleryPresetOptions }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Advanced Gallery Controls', '__plugin_txtd' ) } initialOpen={ true }>
				<RangeControl
					label={ __( 'Scale', '__plugin_txtd' ) }
					value={ scale }
					onChange={ scale => setAttributes( { scale, stylePreset: 'custom' } ) }
					min={ 0 }
					max={ 5 }
				/>
				<RangeControl
					label={ __( 'Offset', '__plugin_txtd' ) }
					value={ offset }
					onChange={ offset => setAttributes( { offset, stylePreset: 'custom' } ) }
					min={ 0 }
					max={ 20 }
				/>
				<RangeControl
					label={ __( 'Orientation', '__plugin_txtd' ) }
					value={ orientation }
					onChange={ orientation => setAttributes( { orientation } ) }
					min={ 0 }
					max={ 3 }
				/>
				<RangeControl
					label={ __( 'Aspect Ratio', '__plugin_txtd' ) }
					value={ aspectRatio }
					onChange={ aspectRatio => setAttributes( { aspectRatio, stylePreset: 'custom' } ) }
					min={ -1 }
					max={ 1 }
					step={ 0.1 }
				/>
				<RangeControl
					label={ __( 'Grid Gap', '__plugin_txtd' ) }
					value={ gridGap }
					onChange={ gridGap => setAttributes( { gridGap } ) }
					min={ 0 }
					max={ 100 }
					step={ 10 }
				/>
				<RangeControl
					label={ __( 'Rotate', '__plugin_txtd' ) }
					value={ rotate }
					onChange={ rotate => setAttributes( { rotate, stylePreset: 'custom' } ) }
					min={ 0 }
					max={ 15 }
				/>
				<RangeControl
					label={ __( 'Vertical Spacing', '__plugin_txtd' ) }
					value={ verticalSpacing }
					onChange={ verticalSpacing => setAttributes( { verticalSpacing, stylePreset: 'custom' } ) }
					min={ -2 }
					max={ 2 }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Images Controls', '__plugin_txtd' ) } initialOpen={ true }>
				<RadioControl
					label={ 'Aspect' }
					selected={ aspect }
					onChange={ aspect => setAttributes( { aspect } ) }
					options={ [
						{ label: 'Original', value: 'original' },
						{ label: 'Cropped', value: 'cropped' },
					] }
				/>
				{ aspect === 'original' && <RangeControl
					label={ __( 'Object Position', '__plugin_txtd' ) }
					value={ objectPosition }
					onChange={ objectPosition => setAttributes( { objectPosition } ) }
					min={ 0 }
					max={ 100 }
					step={ 10 }
				/> }
			</PanelBody>
		</InspectorControls>
	);
}

export default AdvancedGalleryInspectorControls;
