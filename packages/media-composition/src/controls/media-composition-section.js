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
  useSettings,
  withVisibility,
} from '@novablocks/block-editor';

import { getRandomAttributes } from "../utils";

const MediaCompositionControls = props => {

	const {
    clientId,
		setAttributes,
		attributes,
	} = props;

  const novablocksSettings = useSettings();

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
    <ControlsSection
      id={ 'media-composition' }
      label={ __( 'Media Composition', '__plugin_txtd' ) }
      group={ __( 'Modules', '__plugin_txtd' ) }
      order={ 10 }
      key={ clientId + '_media-composition-controls-section' }>

      <ControlsTab label={ __( 'Presets', '__plugin_txtd' ) } key={'media_composition_presets'}>
        <Notice
          key={ 'advanced-gallery-quick-start' }
          id={ 'novablocks-media-composition-quick-start' }
          content={ <p><strong>{__('Quick start:', '__plugin_txtd')}</strong> {__( 'Set up your gallery layout using the presets list below and use the Customize tab to fine-tune the details.', '__plugin_txtd' )}</p> }
          dismissLabel={ __( '✔ Ok, I got it!', '__plugin_txtd' ) }
        />
        <PresetControl
          key={ 'advanced-gallery-style-preset' }
          options={ novablocksSettings.advancedGalleryPresetOptions }
          randomize={ getRandomAttributes }
          { ...props }
        />
      </ControlsTab>

      <ControlsTab label={ __( 'Customize', '__plugin_txtd' ) } key={'media_composition_customize'}>
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

      <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) } key={'media_composition_settings'}>
        <ControlsGroup title={ __( 'Gallery', '__plugin_txtd' ) }>
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
        <ControlsGroup title={ __( 'Display', '__plugin_txtd' ) }>
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
        label={ __( 'Image Resizing', '__plugin_txtd' ) }
        selected={ imageResizing }
        onChange={ imageResizing => setAttributes( { imageResizing } ) }
        options={ [
          { label: __( 'Stretch to fill the container', '__plugin_txtd' ), value: 'cropped' },
          { label: __( 'Shrink to fit (no crop)', '__plugin_txtd' ), value: 'original' },
        ] }
      />
    </Fragment>
  )
};

export default withVisibility( 'media-composition-section' )( MediaCompositionControls );
