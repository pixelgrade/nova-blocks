import { InnerBlocks } from "@wordpress/block-editor";
import { getSaveElement } from '@wordpress/blocks';
import { dispatch, select } from '@wordpress/data';
import { Fragment } from '@wordpress/element';

import { getColorSetClassnames } from '@novablocks/utils';
import { withDopplerControls } from '@novablocks/doppler';
import { CollectionHeader } from "@novablocks/collection";
import { SuperNova } from "@novablocks/block-editor";
import AdvancedGallery from "@novablocks/advanced-gallery";

import Controls from './controls';
import CollectionLayout from './layout';

const { withPreviewAttributes } = SuperNova.utils;

const {
  Card,
  CardMeta,
  CardTitle,
  CardDescription,
  CardFooter,
  CardButton,
  CardMediaWrapper,
  PostCard
} = SuperNova.components;

const SuperNovaEdit = withPreviewAttributes( ( props ) => {

  const {
    attributes: {
      preview,
      sourceType,
    },
    posts,
  } = props;

  if ( sourceType === 'blocks' || sourceType === 'fields' ) {

    if ( preview ) {
      return <CollectionPreview { ...props } />
    }

    return (
      <Collection { ...props }>
        <InnerBlocks
          allowedBlocks={ [ 'novablocks/supernova-item' ] }
          renderAppender={ false }
          templateInsertUpdatesSelection={ false }
        />
      </Collection>
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
          <CardMediaWrapper { ...blockProps }>
            <AdvancedGallery.Preview { ...blockProps } />
          </CardMediaWrapper>
          {
            block.attributes.sourceType === 'fields' ?
              <FieldsPreview attributes={ block.attributes } /> :
              block.innerBlocks.map( innerBlock => getSaveElement( innerBlock.name, innerBlock.attributes, innerBlock.innerBlocks ) )
          }
        </CardEdit>
      )
    } ) }
    </Collection>
  )
}

const FieldsPreview = ( props ) => {

  const {
    attributes: {
      metaAboveTitle,
      title,
      metaBelowTitle,
      description,
      showMeta,
      showTitle,
      showDescription,

      buttonText,
      showFooter,
    }
  } = props;

  return (
    <Fragment>
      <CardMeta show={ showMeta }>{ metaAboveTitle }</CardMeta>
      <CardTitle show={ showTitle }>{ title }</CardTitle>
      <CardMeta show={ showMeta }>{ metaBelowTitle }</CardMeta>
      <CardDescription show={ showDescription }>{ description }</CardDescription>
      <CardFooter show={ showFooter && !! buttonText }>
        <CardButton>{ buttonText }</CardButton>
      </CardFooter>
    </Fragment>
  )
}

const Collection = ( props ) => {

  const { attributes } = props;

  const {
    align,
    columns,
    cardMediaOpacity,
    layoutGutter,
    headerPosition,
    contentPadding,
  } = attributes;

  const colorSetClassnames = getColorSetClassnames( attributes );

  const style = {
    '--collection-columns-count': columns,
    '--collection-card-media-opacity': cardMediaOpacity / 100,
    '--collection-card-layout-gutter': layoutGutter,
    '--supernova-card-content-padding-multiplier': contentPadding * 4 / 100,
  };

  return (
    <div className={ `supernova ${ colorSetClassnames }` }>
      <div className={ `wp-block__inner-container` }>
        {
          headerPosition === 0 &&
          <div className="wp-block" data-align="wide">
            <div className={ `supernova__inner-container` }>
              <CollectionHeader { ...props } />
            </div>
          </div>
        }
        <div className="wp-block" data-align={ align }>
          <div className={ `supernova-collection` } style={ style }>
            <CollectionLayout { ...props } />
          </div>
        </div>
      </div>
      <AdvancedGallery.InspectorControls { ...props } />
      <Controls { ...props } />
    </div>
  )
}

export default withDopplerControls( SuperNovaEdit );
