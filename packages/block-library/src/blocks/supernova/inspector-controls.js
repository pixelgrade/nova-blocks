/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { SelectControl } from "@wordpress/components";

/**
 * Internal dependencies
 */
import { ControlsSection, ControlsTab } from "@novablocks/block-editor";

const Controls = ( props ) => {

  const {
    attributes,
    setAttributes,
    inQuery,
  } = props;

  // If we are in a query block, everything is automatic (contentType is auto).
  if (inQuery) {
    return null;
  }

  const {
    contentType
  } = attributes;

  return (
    <ControlsSection
      id={ 'content-type' }
      label={ __( 'Collection Content' ) }
      group={ __( 'Block Anatomy' ) }
      order={ 10 }>
      <ControlsTab label={ __( 'Settings' ) }>
        <SelectControl
          key={ 'collection-content-type' }
          label={ __( 'Content Type', '__plugin_txtd' ) }
          value={ contentType }
          options={ [
            { label: 'Pre-defined fields', value: 'fields' },
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
