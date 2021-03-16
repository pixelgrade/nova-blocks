import { __ } from '@wordpress/i18n';
import { Fragment, useEffect } from '@wordpress/element';

import {
  Button,
  RangeControl,
  Toolbar,
} from '@wordpress/components';

import {
  __experimentalBlockAlignmentMatrixToolbar as BlockAlignmentMatrixToolbar,
  BlockControls,
} from "@wordpress/block-editor";

import {
  ControlsSection,
  ControlsTab,
  ControlsGroup,
  getIconSvg,
} from "@novablocks/block-editor";

const Controls = ( props ) => {

  const {
    attributes: {
      preview,
      cardContentAlign,
      cardMediaOpacity,
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
      <ControlsSection label={ __( 'Collection' ) }>
        <ControlsTab label={ __( 'Setting' ) }>
          <ControlsGroup label={ __( 'Card', '__plugin_txtd' ) } >
            <RangeControl
              key={ 'collection-card-media-opacity' }
              label={ __( 'Card Media Opacity', '__plugin_txtd' ) }
              value={ cardMediaOpacity }
              onChange={ cardMediaOpacity => {
                setAttributes( { cardMediaOpacity } )
              } }
              min={ 0 }
              max={ 100 }
              step={ 10 }
            />
          </ControlsGroup>
        </ControlsTab>
      </ControlsSection>
    </Fragment>
  )
}

export default Controls;
