import { __ } from '@wordpress/i18n';
import { RangeControl, ToggleControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

import { ControlsSection, ControlsTab, ControlsGroup } from "@novablocks/block-editor";

import { getMapAccentColor, styles } from '../../utils';

import { ApiKeyPanelBody, MapStyleSelect, MarkersList } from '../index';

const InspectorControls = ( props ) => {

    const { attributes, setAttributes, savedApiKey } = props;
    const { styleSlug, zoom, showLabels, showMarkerLabels, showControls, showIcons } = attributes;

    if ( ! savedApiKey ) {
      return null;
    }

    return (
      <Fragment>
        <ControlsSection id={ 'map-design' } label={ __( 'Map Design', '__plugin_txtd' ) }>
          <ControlsTab label={ __( 'Customize', '__plugin_txtd' ) }>
            <MapStyleSelect
              { ...props }
              key={ 'google-map-style-controls' }
              apiKey={ savedApiKey }
              selected={ styleSlug }
              options={ styles }
              onChange={ newStyleSlug => {
                const mapStyles = styles.find( style => style.slug === newStyleSlug ).styles;
                const newPinColor = newStyleSlug === 'customized' ? getMapAccentColor.call( this ) : '#222222';

                setAttributes( {
                  styleSlug: newStyleSlug,
                  styleData: mapStyles,
                  pinColor: newPinColor,
                } );
              } }
            />
          </ControlsTab>
          <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
            <ToggleControl
              key={ 'google-map-show-venues-control' }
              label={ __( 'Show Nearby Venues', '__plugin_txtd' ) }
              checked={ showIcons }
              onChange={ () => setAttributes( { showIcons: ! showIcons } ) }
            />
            <ToggleControl
              key={ 'google-map-show-labels-control' }
              label={ __( 'Show Labels', '__plugin_txtd' ) }
              checked={ showLabels }
              onChange={ () => setAttributes( { showLabels: ! showLabels } ) }
            />
            <ToggleControl
              key={ 'google-map-show-controls' }
              label={ __( 'Show Controls', '__plugin_txtd' ) }
              checked={ showControls }
              onChange={ () => setAttributes( { showControls: ! showControls } ) }
            />
            <ToggleControl
              key={ 'google-map-show-marker-labels-control' }
              label={ __( 'Show Marker Labels', '__plugin_txtd' ) }
              checked={ showMarkerLabels }
              onChange={ () => setAttributes( { showMarkerLabels: ! showMarkerLabels } ) }
            />
            <RangeControl
              key={ 'google-map-zoom-controls' }
              value={ zoom }
              onChange={ ( newZoom ) => setAttributes( { zoom: newZoom } ) }
              min={ 1 }
              max={ 20 }
              label={ __( 'Zoom Level', '__plugin_txtd' ) }
            />
          </ControlsTab>
        </ControlsSection>
        <ControlsSection id={ 'setup' } label={ __( 'Setup', '__plugin_txtd' ) }>
          <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
            <ControlsGroup title={ __( 'Map Markers', '__plugin_txtd' ) }>
              <MarkersList { ...props } />
            </ControlsGroup>
            <ControlsGroup>
              <ApiKeyPanelBody
                key={ 'google-map-api-key-controls' }
                { ...props }
              />
            </ControlsGroup>
          </ControlsTab>
        </ControlsSection>
      </Fragment>
    )
}

export default InspectorControls;
