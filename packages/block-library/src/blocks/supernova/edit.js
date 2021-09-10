import classnames from "classnames";

import { Fragment } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";

import { CollectionHeader } from "@novablocks/collection";

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
import { getColorSignalClassnames } from "@novablocks/color-signal";

const SupernovaEdit = props => {

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

  // @todo maybe find a better way of getting attributes for post cards
  return (
    <CollectionLayout { ...props }>
      { posts.map( ( post, index ) => {
        const innerBlock = innerBlocks[ index ];
        const className = getColorSignalClassnames( innerBlock.attributes, true );
        return (
          <PostCard { ...props } post={ post } className={ className } />
        )
      } ) }
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
