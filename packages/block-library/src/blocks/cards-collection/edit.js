/**
 * WordPress dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";
import { select, dispatch } from "@wordpress/data";

import classnames from 'classnames';

import { useInnerBlocks, useInnerBlocksCount } from "@novablocks/block-editor";
import { CollectionBody, CollectionHeader } from "@novablocks/collection";

const useInnerBlocksProps = wp.blockEditor.useInnerBlocksProps || wp.blockEditor.__experimentalUseInnerBlocksProps;

import { withControlsVisibility } from "./components";
import {getAlignFromMatrix} from "@novablocks/utils";

const ALLOWED_BLOCKS = [ 'novablocks/card' ];

const CARDS_COLLECTION_TEMPLATE = [
	[ 'novablocks/card' ],
	[ 'novablocks/card' ],
	[ 'novablocks/card' ],
];

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
    template: CARDS_COLLECTION_TEMPLATE,
    renderAppender: false,
    templateInsertUpdatesSelection: false
  } );

  useInnerBlocksCount( clientId, attributes, 'novablocks/card', attributes );

  return (
    <div { ...blockProps }>
      <CollectionHeader { ...props } />
      <CollectionBody { ...props } { ...innerBlocksProps } />
		</div>
	);
};

export default withControlsVisibility( CardsCollectionEdit );
