import { __ } from '@wordpress/i18n';
import { BlockControls } from "@wordpress/block-editor";
import { Button, Toolbar } from '@wordpress/components';

import { getIconSvg } from "@novablocks/block-editor";

import { needsPreview } from "./utils";

const Controls = ( props ) => {

  const { attributes, setAttributes } = props;
  const { preview } = attributes;

  const editModeLabel = __( 'Exit Edit Mode', '__plugin_txtd' );
  const previewModeLabel = __( 'Enter Edit Mode', '__plugin_txtd' );

  if ( ! needsPreview( attributes ) ) {
    return null;
  }

  return (
    <BlockControls>
      <Toolbar group={ "block" }>
        <Button
          className="components-icon-button components-toolbar__control"
          icon={ getIconSvg( 'swap' ) }
          onClick={ () => { setAttributes( { preview: ! preview } ) } }>
          { preview ? previewModeLabel : editModeLabel }
        </Button>
      </Toolbar>
    </BlockControls>
  )
}

export default Controls;
