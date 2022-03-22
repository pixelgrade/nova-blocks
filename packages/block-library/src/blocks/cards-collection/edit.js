import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
import { select, dispatch } from "@wordpress/data";

/**
 * Internal dependencies
 */
import { useInnerBlocksCount } from "@novablocks/block-editor";
import { Collection, CollectionBody, CollectionHeader } from "@novablocks/collection";
import { getAlignFromMatrix } from "@novablocks/utils";

import { withControlsVisibility } from "./components";

const ALLOWED_BLOCKS = [ 'novablocks/card' ];

const CardsCollectionEdit = ( props ) => {
	const { attributes, clientId } = props;
  const { cardLayout, columns, contentType } = attributes;
  const contentAlign = getAlignFromMatrix( attributes?.contentPosition );

  const contentClassName = classnames(
    'nb-supernova',
    `nb-supernova--content-type-${ contentType }`,
    `nb-supernova--card-layout-${ cardLayout }`,
    `nb-supernova--${ columns }-columns`,
    `nb-supernova--valign-${ contentAlign[0] }`,
    `nb-supernova--halign-${ contentAlign[1] }`,
    'nb-content-layout-grid',
    props.className,
    `alignfull`,
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
      <Collection { ...props } key={ 'collection' }>
        <CollectionHeader { ...props } key={ 'header' } />
        <CollectionBody { ...props } { ...innerBlocksProps } key={ 'body' }/>
      </Collection>
		</div>
	);
};

export default withControlsVisibility( CardsCollectionEdit );
