import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

import {
  Button,
  Toolbar,
} from '@wordpress/components';

import {
  __experimentalBlockAlignmentMatrixControl as BlockAlignmentMatrixControl,
  BlockControls,
} from "@wordpress/block-editor";

import {
  getIconSvg,
  SuperNova,
} from "@novablocks/block-editor";

const { needsPreview } = SuperNova.utils;

const Controls = ( props ) => {

  const {
    attributes,
    setAttributes,
  } = props;

  const {
    preview,
    cardContentAlign,
  } = attributes;

  const editModeLabel = __( 'Exit Edit Mode', '__plugin_txtd' );
  const previewModeLabel = __( 'Enter Edit Mode', '__plugin_txtd' );

  return (
    <Fragment>
      <BlockControls>
        {
          needsPreview( attributes ) &&
          <Toolbar>
            <div>
              <Button
                className="components-icon-button components-toolbar__control"
                icon={ getIconSvg( 'swap' ) }
                onClick={ () => {
                  setAttributes( { preview: ! preview } )
                } }>
                { preview ? previewModeLabel : editModeLabel }
              </Button>
            </div>
          </Toolbar>
        }
        <BlockAlignmentMatrixControl
          label={ __( 'Change content position' ) }
          value={ cardContentAlign }
          onChange={ ( cardContentAlign ) => {
            setAttributes( { cardContentAlign } )
          } }
        />
      </BlockControls>
    </Fragment>
  )
}

export default Controls;
