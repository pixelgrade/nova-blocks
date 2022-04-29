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
      label={ __( 'Content Type' ) }
      group={ __( 'Card Anatomy' ) }
      order={ 100 }>
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
