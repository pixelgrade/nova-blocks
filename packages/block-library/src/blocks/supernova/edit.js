import classnames from "classnames";

import { createBlock } from '@wordpress/blocks';
import { Fragment, useEffect } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import { useSelect, useDispatch } from "@wordpress/data";

import { CollectionHeader } from "@novablocks/collection";
import { getColorSignalClassnames } from "@novablocks/color-signal";

import {
  useInnerBlocks,
  PostCard
} from "@novablocks/block-editor";

import BlockControls from './block-controls';

import {
  CollectionLayout,
  SupernovaItemPreview,
} from './components';

import { withPreviewAttributes } from './utils';

const SupernovaEdit = props => {
  const { attributes, clientId } = props;

  const {
    sourceType,
    cardLayout,
    contentPadding,
    layoutGutter,
    postsToShow
  } = attributes;

  const itemsCount = useSelect( select => select( 'core/block-editor' ).getBlockCount( clientId ), [ clientId ] );
  const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );
  const innerBlocks = useInnerBlocks( clientId );

  useEffect( () => {
    const newInnerBlocks = innerBlocks.slice( 0, postsToShow );

    if ( postsToShow > itemsCount ) {
      for ( let i = 0; i < postsToShow - itemsCount; i++ ) {
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
  }, [ postsToShow ] );

  return (
    <Fragment>
      <SupernovaPreview { ...props } />
      <BlockControls { ...props } />
    </Fragment>
  )
}

const SupernovaPreview = props => {

  const { attributes } = props;

  const {
    align,
    headerPosition,
    showCollectionTitle,
    showCollectionSubtitle,
    sourceType
  } = attributes;


  const className = classnames(
    props.className,
    'supernova',
    'alignfull'
  );

  const blockProps = useBlockProps( {
    className: className,
    style: props.style,
  } );

  return (
    <div { ...blockProps }>
      <div className={ `wp-block__inner-container` }>
        {
          headerPosition === 0 && ( showCollectionTitle || showCollectionSubtitle ) &&
          <div className="wp-block" data-align={ align }>
            <CollectionHeader { ...props } />
          </div>
        }

        <div className="wp-block" data-align={ align }>
          { sourceType === 'content' && <PostsCollectionLayout { ...props } /> }
          { sourceType !== 'content' && <NotPostsCollectionLayout { ...props } /> }
        </div>
      </div>
    </div>
  );
}

const PostsCollectionLayout = props => {
  const { posts, clientId } = props;
  const innerBlocks = useInnerBlocks( clientId );

  if ( ! Array.isArray( posts ) ) {
    return null;
  }

  return (
    <CollectionLayout { ...props }>
      {
        posts.map( ( post, index ) => {
          const innerBlock = innerBlocks[ index ];

          if ( ! innerBlock ) {
            return null;
          }

          const className = getColorSignalClassnames( innerBlock.attributes, true );

          return (
            <PostCard { ...props } post={ post } className={ className } key={index} />
          )
        } )
      }
    </CollectionLayout>
  )
}

const NotPostsCollectionLayout = withPreviewAttributes( props => {
  const { attributes, clientId } = props;
  const { sourceType } = attributes;
  const innerBlocks = useInnerBlocks( clientId );

  return (
    <CollectionLayout { ...props }>
      { sourceType !== 'content' && innerBlocks.map( innerBlock => <SupernovaItemPreview { ...innerBlock } /> ) }
    </CollectionLayout>
  )
} );

export default SupernovaEdit;
