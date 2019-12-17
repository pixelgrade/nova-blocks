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

const snapValues = {
	x: [0, 0.5, 1],
	y: [0, 0.5, 1]
}

const AdvancedScrollAnimationControls = function( props ) {

	const {
		attributes: {
			motionPreset,
			scrollingEffect,
		}
	} = props;

	return (
		<ScrollingEffectPanel { ...props }>
			<DopplerPresetsPanel { ...props } />
			<StartFramePanel { ...props } />
			<EndFramePanel { ...props } />
		</ScrollingEffectPanel>
	);
}

const ScrollingEffectPanel = ( props ) => {

	const {
		attributes,
		setAttributes,
		previewScrolling,
		isScrolling,
		isBusy,
		attributes: {
			scrollingEffect,
			motionPreset,
		},
		settings: {
			scrollingEffectOptions,
			motionPresetOptions,
		}
	} = props;

	return (
		<PanelBody title={ `Scrolling Effect:` } className={ 'novablocks-scrolling-effect-panel' }>
			<RadioControl
				selected={ scrollingEffect }
				className={ 'novablocks-scrolling-effect' }
				onChange={ ( scrollingEffect ) => {
					let newAttributes = { scrollingEffect };

					if ( scrollingEffect === 'doppler' && motionPreset !== 'custom' ) {
						let newOption = motionPresetOptions.find( option => motionPreset === option.value );
						newAttributes = Object.assign( newOption.preset, newAttributes );
					}

					setAttributes( newAttributes );
				} }
				options={ scrollingEffectOptions }
			/>
			<Button
				isLarge
				isSecondary={ !! isScrolling }
				disabled={ !! isScrolling }
				onClick={ previewScrolling }>Preview Scrolling</Button>
			{ props.children }
		</PanelBody>
	)
}

function maybeSnapFocalPoint( focalPoint ) {
	let x = parseFloat( focalPoint.x );
	let y = parseFloat( focalPoint.y );
	let thereshold = 0.05;

	snapValues.x.forEach( snapValue => {
		if ( snapValue - thereshold < x && x < snapValue + thereshold ) {
			x = snapValue;
		}
	} );

	snapValues.y.forEach( snapValue => {
		if ( snapValue - thereshold < y && y < snapValue + thereshold ) {
			y = snapValue;
		}
	} );

	return { x, y }
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
					let newAttributes = { motionPreset };
					let newOption = motionPresetOptions.find( option => motionPreset === option.value );

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
		motionPreset,
		focalPoint,
		finalFocalPoint,
		initialBackgroundScale,
		followThroughStart,
		scrollingEffect,
	} = attributes;

	const parallaxFocalPointImage = media ? media.sizes.full : false;
	const isDoppler = scrollingEffect === 'doppler';

	if ( ! parallaxFocalPointImage ) {
		return false;
	}

	const staticPanelTitle = __( 'Static Scrolling Settings', '__plugin_txtd' );
	const parallaxPanelTitle = __( 'Parallax Scrolling Settings', '__plugin_txtd' );
	const dopplerPanelTitle = __( 'Start Frame position', '__plugin_txtd' );

	let panelTitle = staticPanelTitle;

	if ( 'parallax' === scrollingEffect ) {
		panelTitle = parallaxPanelTitle;
	}

	if ( isDoppler ) {
		panelTitle = dopplerPanelTitle;
	}

	const dopplerClassName = 'doppler-focal-point-picker doppler-focal-point-picker--start';

	let className = isDoppler ? dopplerClassName : '';

	if ( snapValues.x.includes( parseFloat( focalPoint.x ) ) ) {
		className += ' is-snapped-x';
	}

	if ( snapValues.y.includes( parseFloat( focalPoint.y ) ) ) {
		className += ' is-snapped-y';
	}

	return (
		<PanelBody
			title={ panelTitle }
			className={ className }
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
						motionPreset: scrollingEffect === 'parallax' ? motionPreset : 'custom',
						focalPoint: maybeSnapFocalPoint( focalPoint ),
						finalFocalPoint: maybeSnapFocalPoint( {
							x: focalPoint.x,
							y: finalFocalPoint.y,
						} ),
					} );
				} }
			/>
			{
				scrollingEffect === 'doppler' &&
				<Fragment>
					<RangeControl
						label={ 'Zoom' }
						value={ initialBackgroundScale }
						onChange={ ( initialBackgroundScale ) => {
							setAttributes( {
								motionPreset: scrollingEffect === 'parallax' ? motionPreset : 'custom',
								initialBackgroundScale,
							} );
						} }
						min={ 1 }
						max={ 2 }
						step={ 0.01 }
					/>
					<ToggleControl
						label={ __( 'Smooth start transition', '__plugin_txtd' ) }
						checked={ followThroughStart }
						onChange={ () => setAttributes( {
							followThroughStart: ! followThroughStart
						} ) }
					/>
				</Fragment>
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
		motionPreset,
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

	let className = 'doppler-focal-point-picker doppler-focal-point-picker--end';

	if ( snapValues.x.includes( parseFloat( focalPoint.x ) ) ) {
		className += ' is-snapped-x';
	}

	if ( snapValues.y.includes( parseFloat( focalPoint.y ) ) ) {
		className += ' is-snapped-y';
	}

	return (
		<PanelBody
			title={ __( 'End Frame position', '__plugin_txtd' ) }
			className={ className }
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
						motionPreset: 'custom',
						focalPoint: maybeSnapFocalPoint( {
							x: finalFocalPoint.x,
							y: focalPoint.y,
						} ),
						finalFocalPoint: maybeSnapFocalPoint( finalFocalPoint ),
					} );
				} }
				disabled
			/>
			<RangeControl
				label={ 'Zoom' }
				value={ finalBackgroundScale }
				onChange={ ( finalBackgroundScale ) => {
					setAttributes( {
						motionPreset: 'custom',
						finalBackgroundScale,
					} );
				} }
				min={ 1 }
				max={ 2 }
				step={ 0.01 }
			/>
			<ToggleControl
				label={ __( 'Smooth end transition', '__plugin_txtd' ) }
				checked={ followThroughEnd }
				onChange={ () => setAttributes( {
					motionPreset: 'custom',
					followThroughEnd: ! followThroughEnd
				} ) }
			/>
		</PanelBody>
	)
}

export default AdvancedScrollAnimationControls;
