import { dispatch, select, useSelect } from "@wordpress/data";
import { useEffect } from "@wordpress/element";

const PostsCountControl = ( props ) => {

  const {
    attributes: {
      postsToShow,
      sourceType,
      cardLayout,
      contentPadding,
      layoutGutter,
    },
    setAttributes,
    clientId,
  } = props;

  const itemsCount = useSelect( select => select( 'core/block-editor' ).getBlockCount( clientId ), [ clientId ] );

  useEffect( () => {
    setAttributes( { postsToShow: itemsCount } );
  }, [ itemsCount ] );

  return (
    <RangeControl
      key={ 'collection-items-count' }
      label={ __( 'Items Count', '__plugin_txtd' ) }
      value={ postsToShow }
      onChange={ newItemsCount => {
        const { replaceInnerBlocks } = dispatch( 'core/block-editor' );
        const { getBlock } = select( 'core/block-editor' );
        const { innerBlocks } = getBlock( clientId );
        const newInnerBlocks = innerBlocks.slice( 0, newItemsCount );

        if ( newItemsCount > postsToShow ) {
          for ( let i = 0; i < newItemsCount - postsToShow; i++ ) {
            newInnerBlocks.push( createBlock( 'novablocks/supernova-item', {
              sourceType,
              cardLayout,
              contentPadding,
              layoutGutter,
              title: 'Title',
              description: 'This is just an example of what a description for this card could look like',
              buttonText: 'Button',
            } ) );
          }
        }

        replaceInnerBlocks( clientId, newInnerBlocks );
      } }
      min={ 1 }
      max={ 20 }
      step={ 1 }
    />
  );
}

export default PostsCountControl;
