/**
 * WordPress dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";
import { select, dispatch } from "@wordpress/data";

import { useInnerBlocks } from "@novablocks/block-editor";
import { CollectionHeader } from "@novablocks/collection";

const useInnerBlocksProps = wp.blockEditor.useInnerBlocksProps || wp.blockEditor.__experimentalUseInnerBlocksProps;

import { withControlsVisibility } from "./components";

const ALLOWED_BLOCKS = [ 'novablocks/card' ];

const CARDS_COLLECTION_TEMPLATE = [
	[ 'novablocks/card' ],
	[ 'novablocks/card' ],
	[ 'novablocks/card' ],
];

const CardsCollectionEdit = ( props ) => {

	const {
	  attributes,
    clientId,
    isSelected,
    className,
	} = props;

	const {
	  align,
    headerPosition,
    showCollectionTitle,
    showCollectionSubtitle,
  } = attributes;

  const innerBlocks = useInnerBlocks( clientId );
	const hasAppender = !! innerBlocks && innerBlocks.length < 4 && isSelected;

  const blockProps = useBlockProps( {
    className: className,
    style: props.style,
  } );

  const alignClassname = 'align' + align;

  const innerBlocksProps = useInnerBlocksProps( {
    className: 'supernova__layout supernova__layout--classic',
  }, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: CARDS_COLLECTION_TEMPLATE,
    renderAppender: hasAppender ? window.undefined : false,
    templateInsertUpdatesSelection: false
  } );

  return (
    <div { ...blockProps }>
      {
        headerPosition === 0 && ( showCollectionTitle || showCollectionSubtitle ) &&
        <div className={ alignClassname }>
          <div className="supernova-header__inner-container">
            <CollectionHeader { ...props } />
          </div>
        </div>
      }
      <div className={ alignClassname }>
        <div className="supernova-content__inner-container">
          <div { ...innerBlocksProps } />
        </div>
      </div>
		</div>
	);
};

export default withControlsVisibility( CardsCollectionEdit );
