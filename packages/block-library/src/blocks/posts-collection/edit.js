import { __ } from '@wordpress/i18n';

import {
  CarouselLayout,
  ClassicLayout,
  ParametricLayout,
} from "@novablocks/collection";

import { PostCard } from "@novablocks/block-editor";
import { useBlockProps } from "@wordpress/block-editor";

const PreviewEdit = ( props ) => {

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
      <CollectionBody { ...props } />
    </div>
  )
};

const CollectionBody = props => {

  const { posts } = props;

  const attributes = Object.assign( {}, props.attributes, {
    colorSignal: props.attributes.contentColorSignal,
    paletteVariation: props.attributes.contentPaletteVariation,
    useSourceColorAsReference: false
  } );

  const { layoutStyle } = attributes;

  const passedProps = Object.assign({}, props, {
    attributes: attributes
  } );

  return (
    <div>
      {
        layoutStyle === 'classic' &&
        <ClassicLayout { ...props } />
      }
      {
        layoutStyle === 'carousel' &&
        <CarouselLayout { ...props } />
      }
      {
        layoutStyle === 'parametric' && Array.isArray( posts ) && posts.length &&
        <ParametricLayout { ...props }>
          {
            posts.map( post => {
              return (
                <div className={ 'supernova__layout-item' } key={ post.id }>
                  <PostCard { ...passedProps } post={ post } />
                </div>
              )
            } )
          }
        </ParametricLayout>
      }
    </div>
  )
}

export default PreviewEdit;
