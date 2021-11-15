/**
 * WordPress dependencies
 */
import classnames from 'classnames';

import { Fragment } from "@wordpress/element";
const useInnerBlocksProps = wp.blockEditor.useInnerBlocksProps || wp.blockEditor.__experimentalUseInnerBlocksProps;

import { useInnerBlocks } from "@novablocks/block-editor";

import Controls from "./inspector-controls";
import { SidecarVariationPicker } from './components';
//import InnerBlocksPicker from "./components/inner-blocks-picker";

const Edit = ( props ) => {

  const {
    attributes: {
      layout,
      sidebarWidth,
      sidebarPosition,
      lastItemIsSticky
    },
    clientId
  } = props;

  const innerBlocks = useInnerBlocks( clientId );

  const className = classnames(
    `nb-sidecar`,
    `nb-sidecar--sidebar-${ sidebarPosition }`,
    `nb-sidecar--sidebar-${ sidebarWidth }`,
    {
      'nb-sidecar--sticky-sidebar': lastItemIsSticky === true,
    }
  );

  const blockProps = useBlockProps( {
    style: props.style,
  } );

  const innerBlocksProps = useInnerBlocksProps( blockProps, {
    renderAppender: false,
    templateLock: 'all',
  } );

  if ( ! innerBlocks.length ) {
    return <SidecarVariationPicker { ...props } />
  }

  return (
    <Fragment>
      <Controls { ...props } />
      <div { ...innerBlocksProps } className={ className } />
    </Fragment>
  );
}

export default Edit;
