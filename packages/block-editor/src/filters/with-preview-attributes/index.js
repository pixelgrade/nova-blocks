import { __ } from "@wordpress/i18n";
import { createHigherOrderComponent } from "@wordpress/compose";
import { addFilter } from "@wordpress/hooks";
import { Button, Toolbar } from "@wordpress/components";
import { Fragment, useMemo } from "@wordpress/element";
import { BlockControls } from '@wordpress/block-editor';

import { getPreviewAttributes, needsPreview } from "@novablocks/utils";

import { getIconSvg } from "../../index";

const withPreviewAttributes = BlockEdit => {

  return props => {

    const { attributes, name } = props;
    const blocksWithPreview = useMemo( () => [ 'novablocks/supernova', 'novablocks/supernova-item' ], [] );
    const blockNeedsPreview = useMemo( () => {
      return blocksWithPreview.includes( name ) && needsPreview( attributes );
    }, [ attributes, name ] );

    const newAttributes = useMemo( () => getPreviewAttributes( attributes ), [ attributes ] );

    const newProps = {
      ...props,
      attributes: newAttributes,
    };

    if ( ! blockNeedsPreview ) {
      return (
        <BlockEdit { ...props } />
      )
    }

    return (
      <Fragment>
        <BlockEdit { ...newProps } />
        <PreviewModeControls { ...props } />
      </Fragment>
    );
  }
}

const PreviewModeControls = ( props ) => {
  const { attributes, setAttributes } = props;
  const { preview } = attributes;
  const blockNeedsPreview = useMemo( () => needsPreview( attributes ), [ attributes ] );

  const label = useMemo( () => {
    return preview ? __( 'Enter Edit Mode', '__plugin_txtd' ) : __( 'Exit Edit Mode', '__plugin_txtd' );
  }, [ preview ] );

  if ( props.name !== 'novablocks/supernova' || ! blockNeedsPreview ) {
    return null;
  }

  return (
    <BlockControls>
      <Toolbar group={ 'block' }>
        <Button
          className="components-icon-button components-toolbar__control"
          icon={ getIconSvg( 'swap' ) }
          onClick={ () => { setAttributes( { preview: ! preview } ) } }>
          { label }
        </Button>
      </Toolbar>
    </BlockControls>
  )
}

addFilter( 'editor.BlockEdit', 'novablocks/with-preview-attributes', withPreviewAttributes, 20 );
