import { __ } from "@wordpress/i18n";
import { createHigherOrderComponent } from "@wordpress/compose";
import { addFilter } from "@wordpress/hooks";
import { Button, Toolbar } from "@wordpress/components";
import { Fragment, useMemo, useCallback } from "@wordpress/element";
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

    const setAttribtues = useCallback( attributes => {

      if ( ! blockNeedsPreview ) {
        Object.assign( attributes, {
          preview: false
        } );
      }

      props.setAttribtues( attributes );

    }, [ attributes ] );

    const newAttributes = useMemo( () => getPreviewAttributes( attributes ), [ attributes ] );

    const newProps = {
      ...props,
      attributes: newAttributes,
      setAttribtues
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
