import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

import {
	RadioControl,
	RangeControl,
} from '@wordpress/components';

import {
  ControlsGroup,
  ControlsSection,
  ControlsTab,
  Notice,
  PresetControl,
  withVisibility,
} from '@novablocks/block-editor';

import { getRandomAttributes } from "../utils";

const MediaCompositionControls = props => {

	const {
		setAttributes,
		attributes,
		settings: {
			advancedGalleryPresetOptions,
		},
	} = props;

	const {
		// composition settings
		sizeContrast,
		positionShift,
		elementsDistance,
		placementVariation,

		// elements settings
		imageResizing,
		objectPosition,
		imageRotation,
	} = attributes;

  return (
    <ControlsSection id={ 'media-composition' } label={ __( 'Media Composition' ) } group={ __( 'Modules' ) } order={ 10 } key={ 'media-composition-controls-section' }>

      <ControlsTab label={ __( 'Presets' ) }>
        <Notice
          key={ 'advanced-gallery-quick-start' }
          id={ 'novablocks-media-composition-quick-start' }
          content={ <p><strong>Quick start:</strong> Set up your gallery layout using the presets list below and use the Customize tab to fine-tune the details</p> }
          dismissLabel={ '✔ Ok, I got it!' }
        />
        <PresetControl
          key={ 'advanced-gallery-style-preset' }
          options={ advancedGalleryPresetOptions }
          randomize={ getRandomAttributes }
          { ...props }
        />
      </ControlsTab>

      <ControlsTab label={ __( 'Customize' ) }>
        <RangeControl
          key={ 'advanced-gallery-crop-style' }
          label={ __( 'Images Crop Style', '__plugin_txtd' ) }
          value={ imageResizing === 'cropped' ? 2 : 1 }
          onChange={ cropStyle => {
            setAttributes( { imageResizing: cropStyle === 2 ? 'cropped' : 'original' } );
          } }
          min={ 1 }
          max={ 2 }
          step={ 1 }
        />
      </ControlsTab>

      <ControlsTab label={ __( 'Settings' ) }>
        <ControlsGroup title={ __( 'Gallery' ) }>
          <RangeControl
            key={ 'advanced-gallery-size-contrast' }
            label={ __( 'Size Contrast', '__plugin_txtd' ) }
            value={ sizeContrast }
            onChange={ sizeContrast => setAttributes( { sizeContrast } ) }
            min={ 0 }
            max={ 100 }
            step={ 20 }
          />
          <RangeControl
            key={ 'advanced-gallery-position-shift' }
            label={ __( 'Position Shift', '__plugin_txtd' ) }
            value={ positionShift }
            onChange={ positionShift => setAttributes( { positionShift } ) }
            min={ 0 }
            max={ 100 }
            step={ 5 }
          />
          <RangeControl
            key={ 'advanced-gallery-elements-distance' }
            label={ __( 'Elements Distance', '__plugin_txtd' ) }
            value={ elementsDistance }
            onChange={ elementsDistance => setAttributes( { elementsDistance } ) }
            min={ 0 }
            max={ 100 }
            step={ 20 }
          />
          <RangeControl
            key={ 'advanced-gallery-placement-variation' }
            label={ __( 'Placement Variation', '__plugin_txtd' ) }
            value={ placementVariation }
            onChange={ placementVariation => setAttributes( { placementVariation } ) }
            min={ 25 }
            max={ 100 }
            step={ 25 }
          />
          <RangeControl
            key={ 'advanced-gallery-image-rotation' }
            label={ __( 'Image Rotation', '__plugin_txtd' ) }
            value={ imageRotation }
            onChange={ imageRotation => setAttributes( { imageRotation } ) }
            min={ 0 }
            max={ 100 }
            step={ 10 }
          />
        </ControlsGroup>
        <ControlsGroup title={ __( 'Display' ) }>
          <ImageResizingControls { ...props } />
          <RangeControl
            key={ 'advanced-gallery-image-position' }
            label={ __( 'Image Position', '__plugin_txtd' ) }
            value={ objectPosition }
            onChange={ objectPosition => setAttributes( { objectPosition } ) }
            min={ 0 }
            max={ 100 }
            step={ 10 }
          />
        </ControlsGroup>
      </ControlsTab>
    </ControlsSection>
	);
};

const ImageResizingControls = ( props ) => {

  const {
    attributes,
    setAttributes,
    name
  } = props;

  const {
    containerHeight,
    imageResizing,
  } = attributes;

  const disabledForBlocks = [
    'novablocks/supernova',
    'novablocks/supernova-item'
  ];

  if ( disabledForBlocks.includes( name ) ) {
    return null;
  }

  return (
    <Fragment>
      <RangeControl
        key={ 'advanced-gallery-media-aspect-ratio' }
        label={ __( 'Media Aspect Ratio', '__plugin_txtd' ) }
        value={ containerHeight }
        onChange={ containerHeight => setAttributes( { containerHeight } ) }
        min={ 0 }
        max={ 100 }
        step={ 5 }
      />
      <RadioControl
        key={ 'advanced-gallery-image-resizing' }
        label={ 'Image Resizing' }
        selected={ imageResizing }
        onChange={ imageResizing => setAttributes( { imageResizing } ) }
        options={ [
          { label: 'Stretch to fill the container', value: 'cropped' },
          { label: 'Shrink to fit (no crop)', value: 'original' },
        ] }
      />
    </Fragment>
  )
}

export default withVisibility( 'media-composition-section' )( MediaCompositionControls );
