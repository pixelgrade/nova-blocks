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

	const { attributes, clientId } = props;
  const contentAlign = getAlignFromMatrix( attributes?.contentPosition );

  const contentClassName = classnames(
    `alignfull`,
    `supernova-item__content--valign-${ contentAlign[0] }`,
    `supernova-item__content--halign-${ contentAlign[1] }`,
    props.className,
  );

  const blockProps = useBlockProps( {
    className: contentClassName,
    style: props.style,
  } );

  const innerBlocksProps = useInnerBlocksProps( {
    className: classnames(
      'nb-collection__layout',
      'nb-collection__layout--classic',
    )
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
