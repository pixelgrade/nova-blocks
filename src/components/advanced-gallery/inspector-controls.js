const { __ } = wp.i18n;

const {
	InspectorControls,
} = wp.blockEditor;

const {
	Button,
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
			<PanelBody title={ __( 'Style Presets', '__plugin_txtd' ) } initialOpen={ true }>
				<RadioControl
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
				<div>
					<Button
						isLarge
						isPrimary
						onClick={ () => {} }>Randomize</Button>
				</div>
			</PanelBody>
			<PanelBody title={ __( 'Composition Settings', '__plugin_txtd' ) } initialOpen={ true }>
				<RangeControl
					label={ __( 'Size Contrast', '__plugin_txtd' ) }
					value={ scale }
					onChange={ scale => setAttributes( { scale, stylePreset: 'custom' } ) }
					min={ 0 }
					max={ 5 }
				/>
				<RangeControl
					label={ __( 'Position Shift', '__plugin_txtd' ) }
					value={ offset }
					onChange={ offset => setAttributes( { offset, stylePreset: 'custom' } ) }
					min={ 0 }
					max={ 20 }
				/>
				<RangeControl
					label={ __( 'Elements Distance', '__plugin_txtd' ) }
					value={ gridGap }
					onChange={ gridGap => setAttributes( { gridGap } ) }
					min={ 0 }
					max={ 100 }
					step={ 10 }
				/>
				<RangeControl
					label={ __( 'Placement Variation', '__plugin_txtd' ) }
					value={ orientation }
					onChange={ orientation => setAttributes( { orientation } ) }
					min={ 0 }
					max={ 3 }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Images Controls', '__plugin_txtd' ) } initialOpen={ true }>
				<RadioControl
					label={ 'Image resizing' }
					selected={ aspect }
					onChange={ aspect => setAttributes( { aspect } ) }
					options={ [
						{ label: 'Stretch to fill the container', value: 'cropped' },
						{ label: 'Shrink to fit (no crop)', value: 'original' },
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
				<RangeControl
					label={ __( 'Container Height', '__plugin_txtd' ) }
					value={ aspectRatio }
					onChange={ aspectRatio => setAttributes( { aspectRatio, stylePreset: 'custom' } ) }
					min={ -1 }
					max={ 1 }
					step={ 0.1 }
				/>
				<RangeControl
					label={ __( 'Image Rotation', '__plugin_txtd' ) }
					value={ rotate }
					onChange={ rotate => setAttributes( { rotate, stylePreset: 'custom' } ) }
					min={ 0 }
					max={ 15 }
				/>
			</PanelBody>
		</InspectorControls>
	);
}

export default AdvancedGalleryInspectorControls;
