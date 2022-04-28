import { Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useInnerBlocks } from '@novablocks/block-editor';
import { CollectionBody } from '@novablocks/collection';
import { PostCard } from '../index';

const PostsCollectionLayout = props => {
  const { posts, clientId } = props;
  const innerBlocks = useInnerBlocks( clientId );

  if ( ! Array.isArray( posts ) ) {
    return (
      <Spinner />
    )
  }

  if ( ! posts.length ) {
    return (
      <p> { __( 'No posts to display.', '__plugin_txtd' ) }</p>
    )
  }

  return (
    <CollectionBody { ...props } key={ 'body_' + clientId }>
      { posts.map( ( post, index ) => {
        const innerBlock = innerBlocks[ index ];

        if ( ! innerBlock ) {
          return null;
        }

        return (
          <div className={ 'nb-collection__layout-item' } key={ 'collection_layout_item_' + post.id }>
            <PostCard { ...innerBlock } post={ post } key={ 'collection_post_card_post_' + post.id }/>
          </div>
        );
      } ) }
    </CollectionBody>
  );
};

export default PostsCollectionLayout;
