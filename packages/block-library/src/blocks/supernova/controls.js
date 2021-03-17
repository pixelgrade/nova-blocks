import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

import {
  Button,
  Toolbar,
} from '@wordpress/components';

import {
  __experimentalBlockAlignmentMatrixToolbar as BlockAlignmentMatrixToolbar,
  BlockControls,
} from "@wordpress/block-editor";

import {
  getIconSvg,
} from "@novablocks/block-editor";

const Controls = ( props ) => {

  const {
    attributes: {
      preview,
      cardContentAlign,
    },
    setAttributes,
  } = props;

  const editModeLabel = __( 'Exit Edit Mode', '__plugin_txtd' );
  const previewModeLabel = __( 'Enter Edit Mode', '__plugin_txtd' );

  return (
    <Fragment>
      <BlockControls>
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
        <BlockAlignmentMatrixToolbar
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
