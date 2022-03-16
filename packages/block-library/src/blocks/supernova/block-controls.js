import { __ } from '@wordpress/i18n';
import { BlockAlignmentControl, BlockControls } from "@wordpress/block-editor";
import { Button, Toolbar } from '@wordpress/components';

import { getIconSvg } from "@novablocks/block-editor";

import { needsPreview } from "@novablocks/utils";

const Controls = ( props ) => {

  const { attributes, setAttributes, inQuery } = props;
  const { align } = attributes;


  return (

    <BlockControls group={ 'block' }>
      <BlockAlignmentControl value={ align } onChange={ nextAlign => { setAttributes( { align: nextAlign } ) } } />
      <PreviewModeControls { ...props } />
    </BlockControls>
  )
};

const PreviewModeControls = ( props ) => {
  const { attributes, setAttributes, inQuery } = props;
  const { preview } = attributes;

  const editModeLabel = __( 'Exit Edit Mode', '__plugin_txtd' );
  const previewModeLabel = __( 'Enter Edit Mode', '__plugin_txtd' );

  if ( ! needsPreview( attributes ) ) {
    return null;
  }

  // If we are in a query block, everything is automatic.
  if ( inQuery ) {
    return null;
  }

  return (
    <Toolbar label={ 'Supernova' }>
      <Button
        className="components-icon-button components-toolbar__control"
        icon={ getIconSvg( 'swap' ) }
        onClick={ () => { setAttributes( { preview: ! preview } ) } }>
        { preview ? previewModeLabel : editModeLabel }
      </Button>
    </Toolbar>
  )
}

export default Controls;
