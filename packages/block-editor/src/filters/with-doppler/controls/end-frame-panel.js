import { getSnapClassname, maybeSnapFocalPoint } from "@novablocks/utils";
import { FocalPointPicker, PanelBody, RangeControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { getParallaxFocalPointImage } from '../utils';
import { useMemo } from "@wordpress/element";

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

  const parallaxFocalPointImage = useMemo( () => {
    getParallaxFocalPointImage( media );
  }, [ media ] );

  if ( ! parallaxFocalPointImage || scrollingEffect !== 'doppler' ) {
    return null;
  }

  let classNames = [
    'novablocks-focal-point-picker',
    `novablocks-focal-point-picker--${ scrollingEffect }`,
    'novablocks-focal-point-picker--end',
    getSnapClassname( focalPoint ),
  ];

  let className = classNames.join( ' ' );

  return (

    <PanelBody
      title={ __( 'End Frame', '__plugin_txtd' ) }
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

export default EndFramePanel;
