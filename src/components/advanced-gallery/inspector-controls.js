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
			// gallery preset
			stylePreset,

			// composition settings
			sizeContrast,
			positionShift,
			elementsDistance,
			placementVariation,

			// elements settings
			imageResizing,
			objectPosition,
			containerHeight,
			imageRotation,
		},
		settings: {
			advancedGalleryPresetOptions
		}
	} = props;

	const getRandomBetween = ( min, max ) => {
		const random = Math.max(0, Math.random() - Number.MIN_VALUE );
		return Math.floor( random * (max - min + 1) + min );
	}

	const randomize = () => {
		setAttributes({
			sizeContrast: getRandomBetween(0, 5) * 20,
			positionShift: getRandomBetween(0, 20) * 5,
			elementsDistance: getRandomBetween(0, 5) * 20,
			placementVariation: getRandomBetween(1, 4) * 25,
			stylePreset: 'custom',
		});
	}

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
						onClick={ randomize }>Randomize</Button>
				</div>
			</PanelBody>
			<PanelBody title={ __( 'Composition Settings', '__plugin_txtd' ) } initialOpen={ false }>
				<RangeControl
					label={ __( 'Size Contrast', '__plugin_txtd' ) }
					value={ sizeContrast }
					onChange={ sizeContrast => setAttributes( { sizeContrast, stylePreset: 'custom' } ) }
					min={ 0 }
					max={ 100 }
					step={ 20 }
				/>
				<RangeControl
					label={ __( 'Position Shift', '__plugin_txtd' ) }
					value={ positionShift }
					onChange={ positionShift => setAttributes( { positionShift, stylePreset: 'custom' } ) }
					min={ 0 }
					max={ 100 }
					step={ 5 }
				/>
				<RangeControl
					label={ __( 'Elements Distance', '__plugin_txtd' ) }
					value={ elementsDistance }
					onChange={ elementsDistance => setAttributes( { elementsDistance } ) }
					min={ 0 }
					max={ 100 }
					step={ 20 }
				/>
				<RangeControl
					label={ __( 'Placement Variation', '__plugin_txtd' ) }
					value={ placementVariation }
					onChange={ placementVariation => setAttributes( { placementVariation } ) }
					min={ 25 }
					max={ 100 }
					step={ 25 }
				/>
				<RangeControl
					label={ __( 'Image Rotation', '__plugin_txtd' ) }
					value={ imageRotation }
					onChange={ imageRotation => setAttributes( { imageRotation, stylePreset: 'custom' } ) }
					min={ 0 }Image
					max={ 100 }
					step={ 10 }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Elements Settings', '__plugin_txtd' ) } initialOpen={ true }>
				<RangeControl
					label={ __( 'Image Container Height', '__plugin_txtd' ) }
					value={ containerHeight }
					onChange={ containerHeight => setAttributes( { containerHeight, stylePreset: 'custom' } ) }
					min={ 0 }
					max={ 100 }
					step={ 5 }
				/>
				<RadioControl
					label={ 'Image Resizing' }
					selected={ imageResizing }
					onChange={ imageResizing => setAttributes( { imageResizing } ) }
					options={ [
						{ label: 'Stretch to fill the container', value: 'cropped' },
						{ label: 'Shrink to fit (no crop)', value: 'original' },
					] }
				/>
				<RangeControl
					label={ __( 'Image Position', '__plugin_txtd' ) }
					value={ objectPosition }
					onChange={ objectPosition => setAttributes( { objectPosition } ) }
					min={ 0 }
					max={ 100 }
					step={ 10 }
				/>
			</PanelBody>
		</InspectorControls>
	);
}

export default AdvancedGalleryInspectorControls;
