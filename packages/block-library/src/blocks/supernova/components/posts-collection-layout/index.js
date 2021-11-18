import { useInnerBlocks } from "@novablocks/block-editor";
import { CollectionBody } from "@novablocks/collection";
import { PostCard } from "../index";

const PostsCollectionLayout = props => {
  const { posts, clientId } = props;
  const innerBlocks = useInnerBlocks( clientId );
  const attributes = Object.assign( {}, props.attributes, {
    colorSignal: props.attributes.contentColorSignal,
    paletteVariation: props.attributes.contentPaletteVariation,
    useSourceColorAsReference: false
  } );

  const passedProps = Object.assign({}, props, {
    attributes: attributes
  } );

  if ( ! Array.isArray( posts ) ) {
    return null;
  }

  return (
    <CollectionBody { ...props }>
      {
        posts.map( ( post, index ) => {
          const innerBlock = innerBlocks[ index ];

          if ( ! innerBlock ) {
            return null;
          }

          return (
            <div className={ 'nb-collection__layout-item' }>
              <PostCard { ...passedProps } post={ post } key={ index } />
            </div>
          )
        } )
      }
    </CollectionBody>
  )
}

export default PostsCollectionLayout;
