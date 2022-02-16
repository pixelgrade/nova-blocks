import { __ } from "@wordpress/i18n";
import { SelectControl } from "@wordpress/components";
import { ControlsSection, ControlsTab } from "../../components";

const Controls = ( props ) => {

  const {
    attributes,
    setAttributes,
    clientId,
  } = props;

  const {
    contentType
  } = attributes;

  return (
    <ControlsSection
      id={ 'collection-content' }
      label={ __( 'Collection Content', '__plugin_txtd' ) }
      group={ __( 'Block Anatomy', '__plugin_txtd' ) }
      order={ 10 }>
      <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
        <SelectControl
          key={ 'collection-content-type' }
          label={ __( 'Content Type', '__plugin_txtd' ) }
          value={ contentType }
          options={ [
            { label: __( 'Automatic Blocks', '__plugin_txtd' ), value: 'auto' },
            { label: __( 'Blocks with pre-defined fields', '__plugin_txtd' ), value: 'fields' },
            { label: __( 'Custom Blocks', '__plugin_txtd' ), value: 'custom' },
          ] }
          onChange={ contentType => {
            setAttributes( { contentType } );
          } }
        />
      </ControlsTab>
    </ControlsSection>
  )
};

export default Controls;
