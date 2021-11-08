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

import { withControlsVisibility } from './components';

import Controls from './controls';
import { getSpacingCSSProps } from "@novablocks/utils";

const addNovaBlocksSupport = ( settings ) => {

  if ( settings.name !== 'core/group' ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      contentAlignment: {
        type: 'string',
        default: 'pull-none'
      },
    },
    supports: {
      ...settings.supports,
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
        noDataAlign: true,
      }
    },
  };
}

const withControls = createHigherOrderComponent( ( BlockEdit ) => {

  const NewBlockEdit = withControlsVisibility( BlockEdit );

  return ( props ) => {

    if ( 'core/group' !== props.name ) {
      return (
        <BlockEdit { ...props } />
      );
    }

    return (
      <Fragment>
        <NewBlockEdit { ...props } />
        <Controls { ...props } />
      </Fragment>
    )
  }
}, 'GroupWithControls' );

const withBlockEditProps = createHigherOrderComponent( ( BlockListBlock ) => {

  return ( props ) => {
    const { attributes } = props;
    const { align, contentAlignment } = attributes;

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
        contentAlignment,
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

addFilter( 'editor.BlockEdit', 'novablocks/group/with-controls', withControls, 1 );
addFilter( 'editor.BlockListBlock', 'novablocks/group/with-block-edit-props', withBlockEditProps, 1 );
