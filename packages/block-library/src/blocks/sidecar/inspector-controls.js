/**
 * WordPress dependencies
 */
import {__} from '@wordpress/i18n';
import {RadioControl, ToggleControl, PanelBody, RangeControl} from '@wordpress/components';
import {InspectorControls} from "@wordpress/block-editor";

const SidecarInspectorControls = ( props ) => {
  const {
    attributes,
    setAttributes
  } = props;

  const {
    layout,
    sidebarCustomSize,
    sidebarWidth,
    sidebarPosition,
    lastItemIsSticky
  } = attributes;

  const layoutIsComplex = layout === 'complex';

  return (
    <InspectorControls>
      <PanelBody title={ __( 'Settings' ) }>
        <RadioControl
          key={ 'sidecar-sidebar-controls' }
          label={ __( 'Sidebar Size', '__plugin_txtd' ) }
          selected={ sidebarWidth }
          options={
            [
              { label: 'Small', value: 'small' },
              { label: 'Medium', value: 'medium' },
              { label: 'Large', value: 'large' },
              { label: 'Custom', value: 'custom' }
            ]
          }
          onChange={ ( nextSidebarWidth ) => {
            setAttributes( { sidebarWidth: nextSidebarWidth } );
          } }
        />

        { sidebarWidth === 'custom' && <RangeControl
          key={ 'sidecar-sidebar-controls' }
          value={ sidebarCustomSize }
          onChange={ ( newSidebarCustomSize ) => setAttributes( { sidebarCustomSize: newSidebarCustomSize } ) }
          min={ 0 }
          max={ 1 }
          step={ 0.01 }
          label={ __( 'Sidebar Size', '__plugin_txtd' ) }
        /> }

        { ! layoutIsComplex && <RadioControl
          key = {'sidecar-sidebar-position'}
          label = {__('Sidebar Position', '__plugin_txtd' ) }
          selected={ sidebarPosition }
          options={
            [
              { label: 'Show sidebar on left', value: 'left' },
              { label: 'Show sidebar on right', value: 'right' }
            ]
          }
          onChange={ (nextSidebarPosition) => {
            setAttributes({sidebarPosition: nextSidebarPosition});
          } }
        /> }

        <ToggleControl
          label={__( 'Enable sticky sidebar on scroll', '__plugin_txtd' )}
          help={
            lastItemIsSticky
              ? __( 'The last item inside sidebar will be sticky on scroll.', '__plugin_txtd' )
              : __( 'All blocks inside sidebar will be static.', '__plugin_txtd' )
          }
          checked={lastItemIsSticky}
          onChange={ () => setAttributes( {lastItemIsSticky: !lastItemIsSticky} )}
        />
      </PanelBody>
    </InspectorControls>
  )
}

export default SidecarInspectorControls;
