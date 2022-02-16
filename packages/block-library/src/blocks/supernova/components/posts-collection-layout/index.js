import { Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useInnerBlocks } from '@novablocks/block-editor';
import { CollectionBody } from '@novablocks/collection';
import { PostCard } from '../index';

const PostsCollectionLayout = props => {
  const { posts, clientId } = props;
  const innerBlocks = useInnerBlocks( clientId );
  const attributes = Object.assign( {}, props.attributes, {
    colorSignal: props.attributes.contentColorSignal,
    paletteVariation: props.attributes.contentPaletteVariation,
    useSourceColorAsReference: false
  } );

  const passedProps = Object.assign( {}, props, {
    attributes: attributes
  } );

  return (
    <CollectionBody {...props} key={'body_' + clientId}>
      {!posts
        ? <Spinner/>
        : !posts.length
          ? <p> {__( 'No posts to display.', '__plugin_txtd' )}</p>
          : posts.map( ( post, index ) => {
            const innerBlock = innerBlocks[index];

            if ( !innerBlock ) {
              return null;
            }

            return (
              <div className={'nb-collection__layout-item'} key={'collection_layout_item_' + post.id}>
                <PostCard {...passedProps} post={post} key={'collection_post_card_post_' + post.id}/>
              </div>
            );
          } )
      }
    </CollectionBody>
  );
};

export default PostsCollectionLayout;
