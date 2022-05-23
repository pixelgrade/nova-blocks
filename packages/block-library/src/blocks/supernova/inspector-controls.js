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
    inQuery
  } = props;

  // If we are in a query block, everything is automatic (contentType is auto).
  if (inQuery) {
    return null;
  }

  const {
    contentType,
    postsToShow,
    columns
  } = attributes;

  // Hide the "Collection" section when there is
  // a single item in a single column
  // Examples: Media Card, Hero Card
  if ( postsToShow === 1 && columns === 1 ) {
    return null;
  }

  return (
    <ControlsSection
      id={ 'content-type' }
      label={ __( 'Content Type', '__plugin_txtd' ) }
      group={ __( 'Card Anatomy', '__plugin_txtd' ) }
      order={ 100 }>
      <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
        <SelectControl
          key={ 'collection-content-type' }
          label={ __( 'Content Type', '__plugin_txtd' ) }
          value={ contentType }
          options={ [
            { label: __( 'Pre-defined fields', '__plugin_txtd' ), value: 'fields' },
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
