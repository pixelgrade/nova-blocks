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
  const { layout } = attributes;
  const innerBlocks = useInnerBlocks( clientId );

  const blockProps = useBlockProps( {
    className: classnames(
      `novablocks-header`,
      `novablocks-header-${ layout }`,
      props.className,
      'alignfull',
    ),
  } );

  const innerBlocksProps = useInnerBlocksProps( { className: `novablocks-header__inner-container` }, { renderAppender: false } );

  if ( innerBlocks.length > 0 ) {
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

  return <VariationPicker { ...props } />
}

export default Edit;
