import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";
import { select, dispatch } from "@wordpress/data";

const useInnerBlocksProps = wp.blockEditor.useInnerBlocksProps || wp.blockEditor.__experimentalUseInnerBlocksProps;

/**
 * Internal dependencies
 */
import { useInnerBlocksCount } from "@novablocks/block-editor";
import { CollectionBody, CollectionHeader } from "@novablocks/collection";
import { getAlignFromMatrix } from "@novablocks/utils";

import { withControlsVisibility } from "./components";

const ALLOWED_BLOCKS = [ 'novablocks/card' ];

const CardsCollectionEdit = ( props ) => {

	const {
    clientId,
    attributes,
    className,
	} = props;

  const align = getAlignFromMatrix( attributes?.contentPosition );

  const contentClassName = classnames(
    className,
    `supernova-item__content--valign-${ align[0] }`,
    `supernova-item__content--halign-${ align[1] }`,
  );

  const blockProps = useBlockProps( {
    className: contentClassName,
    style: props.style,
  } );

  const innerBlocksProps = useInnerBlocksProps( {
    className: 'nb-collection__layout nb-collection__layout--classic',
  }, {
    allowedBlocks: ALLOWED_BLOCKS,
    renderAppender: false,
    templateInsertUpdatesSelection: false
  } );

  const { title, subtitle, ...innerBlockAttributes } = attributes;

  useInnerBlocksCount( clientId, attributes, 'novablocks/card', innerBlockAttributes );

  return (
    <div { ...blockProps }>
      <CollectionHeader { ...props } />
      <CollectionBody { ...props } { ...innerBlocksProps } />
		</div>
	);
};

export default withControlsVisibility( CardsCollectionEdit );
