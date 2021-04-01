import {
  ControlsTab,
  ControlsSection,
} from "@novablocks/block-editor";


/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RadioControl } from '@wordpress/components';

const LayoutInspectorControls = ( props ) => {
  const {
    attributes,
    setAttributes
  } = props;

  const {
    sidebarWidth
  } = attributes;

  return (
    <ControlsSection label={ __( 'Layout' ) }>
      <ControlsTab label={ __( 'Settings' ) }>
        <RadioControl
          key={ 'layout-sidebar-controls' }
          label={ __( 'Set Sidebar Width', '__plugin_txtd' ) }
          selected={ sidebarWidth }
          options={ [
            { label: 'Small', value: 'small' },
            { label: 'Large', value: 'large' },
          ] }
          onChange={ ( nextSidebarWidth ) => {
            setAttributes( { sidebarWidth: nextSidebarWidth } );
          } }
        />
      </ControlsTab>
    </ControlsSection>
  )
}

export default LayoutInspectorControls;
