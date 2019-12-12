/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	Component,
	Fragment,
} = wp.element;

const {
	Button,
	FocalPointPicker,
	PanelBody,
	RadioControl,
	RangeControl,
	ToggleControl,
} = wp.components;

const AdvancedScrollAnimationControls = function( props ) {

	const {
		attributes: {
			motionPreset,
			scrollingEffect,
		}
	} = props;

	return (
		<Fragment>
			<ScrollingEffectPanel { ...props } />
			<DopplerPresetsPanel { ...props } />
			<StartFramePanel { ...props } />
			<EndFramePanel { ...props } />
		</Fragment>
	);
}

const ScrollingEffectPanel = ( props ) => {

	const {
		attributes,
		setAttributes,
		previewScrolling,
		isScrolling,
		isBusy,
		settings: {
			scrollingEffectOptions
		}
	} = props;

	const {
		scrollingEffect
	} = attributes;

	return (
		<PanelBody title={ `Scrolling Effect:` }>
			<RadioControl
				selected={ scrollingEffect }
				onChange={ ( scrollingEffect ) => {
					setAttributes( { scrollingEffect } );
				} }
				options={ scrollingEffectOptions }
			/>
			<Button
				isLarge
				isPrimary={ !! isScrolling }
				isSecondary={ ! isScrolling }
				disabled={ !! isScrolling }
				onClick={ previewScrolling }>Preview Scrolling</Button>
		</PanelBody>
	)
}

const DopplerPresetsPanel = ( props ) => {

	const {
		attributes: {
			motionPreset,
			scrollingEffect,
		},
		setAttributes,
		settings: {
			motionPresetOptions
		}
	} = props;

	if ( scrollingEffect !== 'doppler' ) {
		return false;
	}

	return (
		<PanelBody title={ `Doppler Scrolling Settings` }>
			<RadioControl
				label={ 'Motion Presets' }
				selected={ motionPreset }
				onChange={ ( motionPreset ) => {
					let newOption = motionPresetOptions.find( option => motionPreset === option.value );
					let newAttributes = { motionPreset };

					if ( newOption && newOption.preset ) {
						newAttributes = Object.assign( newOption.preset, newAttributes );
					}

					setAttributes( newAttributes );
				} }
				options={ motionPresetOptions }
			/>
		</PanelBody>
	)
}

const StartFramePanel = ( props ) => {

	const {
		attributes,
		setAttributes,
	} = props;

	const {
		media,
		focalPoint,
		finalFocalPoint,
		initialBackgroundScale,
		followThroughStart,
		scrollingEffect,
	} = attributes;

	const parallaxFocalPointImage = media ? media.sizes.full : false;

	if ( ! parallaxFocalPointImage || scrollingEffect === 'static' ) {
		return false;
	}

	return (
		<PanelBody
			title={ __( 'Start Frame', '__plugin_txtd' ) }
			className={ 'doppler-focal-point-picker  doppler-focal-point-picker--start' }
		>
			<FocalPointPicker
				label={ 'Focal Point' }
				url={ parallaxFocalPointImage.url }
				dimensions={ {
					width: parallaxFocalPointImage.width,
					height: parallaxFocalPointImage.height,
				} }
				value={ focalPoint }
				onChange={ focalPoint => {
					setAttributes( {
						focalPoint,
						finalFocalPoint: {
							x: focalPoint.x,
							y: finalFocalPoint.y,
						},
					} );
				} }
			/>
			<RangeControl
				label={ 'Zoom' }
				value={ initialBackgroundScale }
				onChange={ ( initialBackgroundScale ) => setAttributes( { initialBackgroundScale } ) }
				min={ 1 }
				max={ 2 }
				step={ 0.01 }
			/>
			{
				scrollingEffect === 'doppler' &&
				<ToggleControl
					label={ __( 'Smooth start transition', '__plugin_txtd' ) }
					checked={ followThroughStart }
					onChange={ () => setAttributes( { followThroughStart: ! followThroughStart } ) }
				/>
			}
		</PanelBody>
	)
}

const EndFramePanel = ( props ) => {

	const {
		attributes,
		setAttributes,
	} = props;

	const {
		media,
		focalPoint,
		finalFocalPoint,
		finalBackgroundScale,
		followThroughEnd,
		scrollingEffect,
	} = attributes;

	const parallaxFocalPointImage = media ? media.sizes.full : false;

	if ( ! parallaxFocalPointImage || scrollingEffect !== 'doppler' ) {
		return false;
	}

	return (
		<PanelBody
			title={ __( 'End Frame', '__plugin_txtd' ) }
			className={ 'doppler-focal-point-picker  doppler-focal-point-picker--end' }
		>
			<FocalPointPicker
				label={ 'Focal Point' }
				url={ parallaxFocalPointImage.url }
				dimensions={ {
					width: parallaxFocalPointImage.width,
					height: parallaxFocalPointImage.height,
				} }
				value={ finalFocalPoint }
				onChange={ finalFocalPoint => {
					setAttributes( {
						focalPoint: {
							x: finalFocalPoint.x,
							y: focalPoint.y,
						},
						finalFocalPoint,
					} );
				} }
				disabled
			/>
			<RangeControl
				label={ 'Zoom' }
				value={ finalBackgroundScale }
				onChange={ ( finalBackgroundScale ) => setAttributes( { finalBackgroundScale } ) }
				min={ 1 }
				max={ 2 }
				step={ 0.01 }
			/>
			<ToggleControl
				label={ __( 'Smooth end transition', '__plugin_txtd' ) }
				checked={ followThroughEnd }
				onChange={ () => setAttributes( { followThroughEnd: ! followThroughEnd } ) }
			/>
		</PanelBody>
	)
}

export default AdvancedScrollAnimationControls;
