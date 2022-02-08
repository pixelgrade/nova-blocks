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
      label={ __( 'Collection Content' ) }
      group={ __( 'Block Anatomy' ) }
      order={ 10 }>
      <ControlsTab label={ __( 'Settings' ) }>
        <SelectControl
          key={ 'collection-content-type' }
          label={ __( 'Content Type', '__plugin_txtd' ) }
          value={ contentType }
          options={ [
            { label: 'Automatic Blocks', value: 'auto' },
            { label: 'Blocks with pre-defined fields', value: 'fields' },
            { label: 'Custom Blocks', value: 'custom' },
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
