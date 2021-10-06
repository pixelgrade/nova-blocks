import classnames from "classnames";

import { createBlock } from '@wordpress/blocks';
import { useBlockProps } from "@wordpress/block-editor";
import { useSelect, useDispatch } from "@wordpress/data";
import { Fragment, useEffect } from "@wordpress/element";

import { useInnerBlocks } from "@novablocks/block-editor";
import { CollectionHeader } from "@novablocks/collection";

import BlockControls from './block-controls';

import {
  PostsCollectionLayout,
  NotPostsCollectionLayout,
  withControlsVisibility,
} from './components';

const SupernovaEdit = props => {

  const { attributes, clientId } = props;

  const {
    sourceType,
    cardLayout,
    contentPadding,
    layoutGutter,
    postsToShow,
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

  const {
    attributes,
    markPostsAsDisplayed,
    posts,
    clientId
  } = props;

  const {
    align,
    columns,
    headerPosition,
    showCollectionTitle,
    showCollectionSubtitle,
    sourceType,
    cardLayout,
    minHeightFallback
  } = attributes;


  const className = classnames(
    props.className,
    'supernova',
    `supernova--source-type-${ sourceType }`,
    `supernova--card-layout-${ cardLayout }`,
    {
      'supernova--one-column': columns === 1,
      'supernova--has-minimum-height': minHeightFallback !== 0,
    },
    'alignfull',
    `block-is-${ align }`,
  );

  const blockProps = useBlockProps( {
    className: className,
    style: props.style,
  } );

  markPostsAsDisplayed( clientId, sourceType === 'content' ? posts : [] );

  return (
    <div { ...blockProps }>
      { headerPosition === 0 && ( showCollectionTitle || showCollectionSubtitle ) && <CollectionHeader { ...props } /> }
      { sourceType === 'content' && <PostsCollectionLayout { ...props } /> }
      { sourceType !== 'content' && <NotPostsCollectionLayout { ...props } /> }
    </div>
  );
}

export default withControlsVisibility( SupernovaEdit );

