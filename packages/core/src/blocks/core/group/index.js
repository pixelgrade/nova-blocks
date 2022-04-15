/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
import { select } from "@wordpress/data";
import { addFilter } from "@wordpress/hooks";
import { createHigherOrderComponent } from "@wordpress/compose";

import { getColorSignalClassnames, getSpacingCSSProps } from "@novablocks/utils";

const addNovaBlocksSupport = ( settings ) => {

  if ( settings.name !== 'core/group' ) {
    return settings;
  }

  return {
    ...settings,
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
      }
    },
  };
};

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
        ...wrapperProps?.style,
        ...getSpacingCSSProps( attributes )
      },
      className: classnames(
        wrapperProps?.className,
        getColorSignalClassnames( attributes, true ),
      )
    };

    return <BlockListBlock { ...props } wrapperProps={ wrapperProps } />
  };

}, 'withBlockEditProps' );


addFilter( 'blocks.registerBlockType', 'novablocks/group/settings-add-nb-support', addNovaBlocksSupport, 1 );
addFilter( 'editor.BlockListBlock', 'novablocks/group/with-block-edit-props', withBlockEditProps );
