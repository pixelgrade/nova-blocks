/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
import { select } from "@wordpress/data";
import { addFilter } from "@wordpress/hooks";
import { Fragment } from "@wordpress/element";
import { createHigherOrderComponent } from "@wordpress/compose";

import { getSpacingCSSProps } from "@novablocks/utils";

import { withControlsVisibility } from './components';

const addNovaBlocksSupport = ( settings ) => {

  if ( settings.name !== 'core/group' ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
    },
    supports: {
      ...settings.supports,
      align: [ "left", "right", "wide", "full" ],
      novaBlocks: {
        colorSignal: {
          attributes: true,
          controls: true,
          functionalColors: true,
          paletteClassname: true,
          paletteVariationClassname: true,
          colorSignalClassname: true,
        },
        spaceAndSizing: true,
        customAlign: true,
      }
    },
  };
}

const withBlockEditProps = createHigherOrderComponent( ( BlockListBlock ) => {

  return ( props ) => {
    const { attributes } = props;
    const { align } = attributes;

    let wrapperProps = props.wrapperProps;

    if ( 'core/group' !== props.name ) {
      return <BlockListBlock { ...props } />
    }

    wrapperProps = {
      ...wrapperProps,
      style: {
        ...getSpacingCSSProps( attributes )
      },
      className: classnames(
        props.className,
        `align${ align }`,
      )
    };

    return <BlockListBlock { ...props } wrapperProps={ wrapperProps } />
  };

}, 'withBlockEditProps' );

const applyFrontEndClasses = ( extraProps, blockType, attributes ) => {

  const { align, contentAlignment } = attributes;

  if ( 'core/group' !== blockType.name ) {
    return extraProps;
  }

  const classNames = [
    `align${ align }`
  ]

  if ( contentAlignment !== 'pull-none' ) {
    classNames.push( contentAlignment );
  }

  return {
    ...extraProps,
    className: classnames(
      extraProps.className,
      ...classNames
    )
  };
}

addFilter( 'blocks.registerBlockType', 'novablocks/group/settings-add-nb-support', addNovaBlocksSupport, 1 );
addFilter( 'blocks.getSaveContent.extraProps', 'novablocks/group/frontend-classes', applyFrontEndClasses, 1 );
addFilter( 'editor.BlockListBlock', 'novablocks/group/with-block-edit-props', withBlockEditProps, 1 );
