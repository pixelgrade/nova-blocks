import { __ } from "@wordpress/i18n";
import { useMemo } from "@wordpress/element";
import { FocalPointPicker, PanelBody, RangeControl, ToggleControl } from "@wordpress/components";
import { getSnapClassname, maybeSnapFocalPoint } from "@novablocks/utils";
import { getFocalPointImage } from '../utils';

const StartFramePanel = ( props ) => {

  const {
    attributes,
    setAttributes,
    focalPointImage,
  } = props;

  const {
    media,
    focalPoint,
    finalFocalPoint,
    initialBackgroundScale,
    followThroughStart,
    scrollingEffect,
  } = attributes;

  const parallaxFocalPointImage = useMemo( () => {

    if ( focalPointImage ) {
      return focalPointImage;
    }

    return getFocalPointImage( media );

  }, [ focalPointImage, media ] );

  const isDoppler = scrollingEffect === 'doppler';
  const staticPanelTitle = __( 'Static Scrolling Settings', '__plugin_txtd' );
  const parallaxPanelTitle = __( 'Parallax Scrolling Settings', '__plugin_txtd' );
  const dopplerPanelTitle = __( 'Start Frame', '__plugin_txtd' );

  let panelTitle = staticPanelTitle;

  if ( 'parallax' === scrollingEffect ) {
    panelTitle = parallaxPanelTitle;
  }

  if ( isDoppler ) {
    panelTitle = dopplerPanelTitle;
  }

  let classNames = [
    'novablocks-focal-point-picker',
    `novablocks-focal-point-picker--${ scrollingEffect }`,
    `novablocks-focal-point-picker--start`,
    getSnapClassname( focalPoint )
  ];

  let className = classNames.join( ' ' );

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
            motionPreset: 'custom',
            focalPoint: maybeSnapFocalPoint( focalPoint ),
            finalFocalPoint: maybeSnapFocalPoint( {
              x: focalPoint.x,
              y: finalFocalPoint.y,
            } ),
          } );
        } }
      />
      <RangeControl
        label={ 'Zoom' }
        value={ initialBackgroundScale }
        onChange={ ( initialBackgroundScale ) => {
          setAttributes( {
            motionPreset: 'custom',
            initialBackgroundScale,
          } );
        } }
        min={ 1 }
        max={ 2 }
        step={ 0.01 }
      />
      {
        scrollingEffect === 'doppler' &&
        <ToggleControl
          label={ __( 'Smooth start transition', '__plugin_txtd' ) }
          checked={ followThroughStart }
          onChange={ () => {
            setAttributes( { followThroughStart: ! followThroughStart } )
          } }
        />
      }
    </PanelBody>
  )
};

export default StartFramePanel;
