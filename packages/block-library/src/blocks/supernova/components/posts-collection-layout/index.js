import { Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useInnerBlocks } from '@novablocks/block-editor';
import { CollectionBody, CollectionLeadingItems, useEditorCollectionLeadingItems } from '@novablocks/collection';
import { PostCard } from '../index';

const PostsCollectionLayout = props => {
  const { posts, clientId } = props;
  const innerBlocks = useInnerBlocks( clientId );
  const attributes = Object.assign( {}, props.attributes, {
    colorSignal: props.attributes.contentColorSignal,
    paletteVariation: props.attributes.contentPaletteVariation,
    useSourceColorAsReference: false
  } );
  const leadingItems = useEditorCollectionLeadingItems( attributes );

  const passedProps = Object.assign( {}, props, {
    attributes: attributes
  } );

  // We don't want to pass the posts to each PostCard, only a single post.
  delete passedProps.posts;

  // The recency card-expression class is anchored to the newest post in the
  // collection; individual cards deliberately never see their siblings, so
  // the anchor is computed here and threaded down. UNIX seconds, matching
  // the PHP mirror in novablocks_get_posts_collection_cards_markup().
  const collectionNewestPostTimestamp = ( posts || [] ).reduce( ( newest, post ) => {
    const parsed = Date.parse( post?.date_gmt );

    return Number.isFinite( parsed ) ? Math.max( newest, Math.round( parsed / 1000 ) ) : newest;
  }, 0 );

  return (
    <CollectionBody {...props} key={'body_' + clientId}>
      { leadingItems.length > 0 &&
        <CollectionLeadingItems attributes={ attributes } /> }
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
              <div className={ 'nb-collection__layout-item' } key={ 'collection_layout_item_' + post.id }>
                <PostCard { ...passedProps } post={ post } collectionNewestPostTimestamp={ collectionNewestPostTimestamp } key={ 'collection_post_card_post_' + post.id }/>
              </div>
            );
          } )
      }
    </CollectionBody>
  );
};

export default PostsCollectionLayout;
