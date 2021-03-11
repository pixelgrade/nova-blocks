import classnames from 'classnames';

import { InnerBlocks } from "@wordpress/block-editor";
import { getSaveElement } from '@wordpress/blocks';
import { dispatch, select } from '@wordpress/data';
import { Fragment } from '@wordpress/element';

import { getColorSetClassnames } from '@novablocks/utils';
import { withDopplerControls } from '@novablocks/doppler';
import AdvancedGallery from "@novablocks/advanced-gallery";

import Controls from './controls';
import CollectionLayout from './layout';
import { PostCard } from './components/post';
import { Card, CardMedia } from "./components/card";
import { withPreviewAttributes } from './with-preview-attributes';

const SuperNovaEdit = withPreviewAttributes( ( props ) => {

  const {
    attributes: {
      preview,
      sourceType,
    },
    posts,
  } = props;

  if ( sourceType === 'custom' ) {

    return (
      <Fragment>
        {
          preview &&
          <CollectionPreview { ...props } />
        }
        {
          ! preview &&
          <Collection { ...props }>
            <InnerBlocks
              allowedBlocks={ [ 'novablocks/supernova-item' ] }
              renderAppender={ false }
              templateInsertUpdatesSelection={ false }
            />
          </Collection>
        }
      </Fragment>
    )
  }

  return (
    <Collection { ...props }>
      { Array.isArray( posts ) && posts.map( post => <PostCard { ...props } post={ post } /> ) }
    </Collection>
  )
} );

const CardEdit = withPreviewAttributes( Card );

const CollectionPreview = ( props ) => {
  const { clientId } = props;
  const { updateBlockAttributes } = dispatch( 'core/block-editor' );
  const { getBlock } = select( 'core/block-editor' );
  const { innerBlocks } = getBlock( clientId );

  return (
    <Collection { ...props }>
      { innerBlocks.map( block => {

      const blockProps = Object.assign( {}, props, {
        attributes: block.attributes,
        setAttributes: ( newAttributes ) => {
          updateBlockAttributes( block.clientId, newAttributes );
        }
      } );

      return (
        <CardEdit { ...blockProps }>
          <CardMedia { ...blockProps }>
            <AdvancedGallery.Preview { ...blockProps } />
          </CardMedia>
          { getSaveElement( block.name, block.attributes, block.innerBlocks ) }
        </CardEdit>
      )
    } ) }
    </Collection>
  )
}

const Collection = ( props ) => {

  const { attributes } = props;

  const {
    align,
    columnsCount,
    cardMediaOpacity,
    layout,
    itemsWidth,
    sourceType,
  } = attributes;

  const colorSetClassnames = getColorSetClassnames( attributes );

  const layoutClassName = classnames(
    `supernova-collection__layout`,
    `supernova-collection__layout--${ layout }`,
    `supernova-collection__layout--${ itemsWidth }-width`,
  );

  const style = {
    '--collection-columns-count': columnsCount,
    '--collection-card-media-opacity': cardMediaOpacity / 100,
  };

  return (
    <div className={ `supernova ${ colorSetClassnames }` }>
      <div className={ `supernova__inner-container` }>
        <div className="wp-block" data-align={ align }>
          <div className={ `supernova-collection` } style={ style }>
            <div className={ layoutClassName } data-source={ sourceType }>
              <CollectionLayout { ...props } />
            </div>
          </div>
        </div>
      </div>
      <Controls { ...props } />
    </div>
  )
}

export default withDopplerControls( SuperNovaEdit );
