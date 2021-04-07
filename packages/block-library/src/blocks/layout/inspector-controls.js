import {
  ControlsTab,
  ControlsSection,
} from "@novablocks/block-editor";


/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {RadioControl, ToggleControl} from '@wordpress/components';

const LayoutInspectorControls = ( props ) => {
  const {
    attributes,
    setAttributes
  } = props;

  const {
    sidebarWidth,
    sidebarPosition,
    lastItemIsSticky
  } = attributes;

  return (
    <ControlsSection label={ __( 'Layout' ) }>
      <ControlsTab label={ __( 'Settings' ) }>
        <RadioControl
          key={ 'layout-sidebar-controls' }
          label={ __( 'Sidebar Size', '__plugin_txtd' ) }
          selected={ sidebarWidth }
          options={
            [
              { label: 'Small', value: 'small' },
              { label: 'Large', value: 'large' },
            ]
          }
          onChange={ ( nextSidebarWidth ) => {
            setAttributes( { sidebarWidth: nextSidebarWidth } );
          } }
        />

        <RadioControl
          key = {'layout-sidebar-position'}
          label = {__('Sidebar Position', '__plugin_txtd' ) }
          selected={ sidebarPosition }
          options={
            [
              { label: 'Left', value: 'left' },
              { label: 'Right', value: 'right' }
            ]
          }
          onChange={ (nextSidebarPosition) => {
            setAttributes({sidebarPosition: nextSidebarPosition});
          } }
          />

        <ToggleControl
          label={__( 'Enable sticky sidebar', '__plugin_txtd' )}
          checked={lastItemIsSticky}
          onChange={ () => setAttributes( {lastItemIsSticky: !lastItemIsSticky} )}
        />
      </ControlsTab>
    </ControlsSection>
  )
}

export default LayoutInspectorControls;
