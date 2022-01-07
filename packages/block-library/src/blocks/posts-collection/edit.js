import { __ } from '@wordpress/i18n';

import {
  Collection,
  CollectionHeader,
  CollectionBody,
} from "@novablocks/collection";

import { PostCard } from "@novablocks/block-editor";
import { useBlockProps } from "@wordpress/block-editor";

const Edit = ( props ) => {

  const { className, posts } = props;

  const blockProps = useBlockProps( {
    className: className,
    style: props.style,
  } );

  if ( Array.isArray( posts ) && ! posts.length ) {
    return (
      <div className={ 'wp-block__inner-container' }>
        <p>{ __( 'There are no posts to be displayed in this block. Try changing the Content Filter settings.' ) }</p>
      </div>
    )
  }

  return (
    <div { ...blockProps }>
      <Collection { ...props }>
        <CollectionHeader { ...props } />
        <PostsCollection { ...props } />
      </Collection>
    </div>
  )
};

const PostsCollection = props => {

  const { posts } = props;

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
    <CollectionBody { ...passedProps }>
      {
        posts.map( post => {
          return (
            <div className={ 'nb-collection__layout-item' } key={ post.id }>
              <PostCard { ...passedProps } post={ post } />
            </div>
          )
        } )
      }
    </CollectionBody>
  )
}

export default Edit;
