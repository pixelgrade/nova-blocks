import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import { Component, Fragment, useLayoutEffect } from '@wordpress/element';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const useInnerBlocksProps = wp.blockEditor.useInnerBlocksProps ?? wp.blockEditor.__experimentalUseInnerBlocksProps;

import { useInnerBlocks, VariationPicker } from "@novablocks/block-editor";

import {
  HeaderBlockControls,
  HeaderInspectorControls,
} from './components';

import TEMPLATE_OPTIONS from './template-options';

const Edit = ( props ) => {
  const { attributes, setAttributes, clientId } = props;
  const { layout, logoHeight, mobileLogoHeight, navigationLinkSpacing, headerSidesSpacing, stickyHeaderSpacingMultiplier } = attributes;
  const innerBlocks = useInnerBlocks( clientId );

  const blockProps = useBlockProps( {
    className: classnames(
      `novablocks-header`,
      `novablocks-header-${ layout }`,
      props.className,
      'alignfull',
    ),
    style: {
      ...props.style,
      '--nb-header-logo-height-setting': logoHeight,
      '--nb-mobile-header-logo-height-setting': mobileLogoHeight,
      '--nb-navigation-item-spacing-setting': navigationLinkSpacing,
      '--nb-header-sides-spacing-setting': headerSidesSpacing,
      '--nb-sticky-header-spacing-multiplier': stickyHeaderSpacingMultiplier,
    },
  } );

  const innerBlocksProps = useInnerBlocksProps( { className: `novablocks-header__inner-container` }, { renderAppender: false } );

  if ( ! innerBlocks.length ) {
    return <VariationPicker { ...props } />
  }

  return (
    <Fragment>
      <HeaderBlockControls { ...props } />
      <HeaderInspectorControls { ...props } />
      <div { ...blockProps }>
        <div { ...innerBlocksProps } />
      </div>
    </Fragment>
  );
}

export default Edit;
