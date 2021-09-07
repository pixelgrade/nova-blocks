import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
const useInnerBlocksProps = wp.blockEditor.useInnerBlocksProps || wp.blockEditor.__experimentalUseInnerBlocksProps;

import { getSaveElement } from '@wordpress/blocks';
import { useDispatch, useSelect } from '@wordpress/data';
import { Fragment } from '@wordpress/element';

import classnames from 'classnames';

import { CollectionHeader } from "@novablocks/collection";
import { SuperNova } from "@novablocks/block-editor";
import { MediaCompositionPreview } from "@novablocks/media-composition";

import Controls from './controls';
import CollectionLayout from './layout';

const {
  needsPreview,
  withPreviewAttributes
} = SuperNova.utils;

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

  if ( sourceType === 'content' ) {

    return (
      <Collection { ...props }>
        { Array.isArray( posts ) && posts.map( post => <PostCard { ...props } post={ post } /> ) }
      </Collection>
    )
  }

  if ( preview ) {
    return <CollectionPreview { ...props } />
  }

  const innerBlocksProps = useInnerBlocksProps( {
    ...props,
    allowedBlocks: [ 'novablocks/supernova-item' ],
    renderAppender: false,
    templateInsertUpdatesSelection: false
  } );

  return (
    <Collection { ...innerBlocksProps } />
  )
} );

const CardEdit = withPreviewAttributes( Card );

const CollectionPreview = ( props ) => {
  const { clientId } = props;
  const { updateBlockAttributes } = useDispatch( 'core/block-editor' );
  const innerBlocks = useSelect( select => select( 'core/block-editor' ).getBlock( clientId ).innerBlocks, [ clientId ] );

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
            <MediaCompositionPreview { ...blockProps } />
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
      showButtons,
    }
  } = props;

  return (
    <Fragment>
      <CardMeta show={ showMeta }>{ metaAboveTitle }</CardMeta>
      <CardTitle show={ showTitle }>{ title }</CardTitle>
      <CardMeta show={ showMeta }>{ metaBelowTitle }</CardMeta>
      <CardDescription show={ showDescription }>{ description }</CardDescription>
      <CardFooter show={ showButtons && !! buttonText }>
        <CardButton>{ buttonText }</CardButton>
      </CardFooter>
    </Fragment>
  )
}

const Collection = ( props ) => {

  const {
    attributes
  } = props;

  const {
    align,
    columns,
    colorSignal,
    cardMediaOpacity,
    layoutGutter,
    headerPosition,
    imagePadding,
    contentPadding,
    emphasisArea,
    showCollectionTitle,
    showCollectionSubtitle
  } = attributes;

  const className = classnames(
    props.className,
    'supernova',
  );

  const blockProps = useBlockProps( {
    className: className,
    style: {
      ...props.style,
      '--collection-emphasis-area': emphasisArea,
      '--collection-columns-count': columns,
      '--collection-card-media-opacity': cardMediaOpacity / 100,
      '--collection-card-layout-gutter': layoutGutter,

      '--supernova-card-content-padding-multiplier': contentPadding / 100,
      '--supernova-card-image-padding-multiplier': imagePadding / 100
    },
  } );

  return (
    <div { ...blockProps }>
      <div className={ `wp-block__inner-container` }>
        {
          headerPosition === 0 && (showCollectionTitle || showCollectionSubtitle) &&
          <div className="wp-block" data-align={ align }>
              <CollectionHeader { ...props } />
          </div>
        }

        <div className="wp-block" data-align={ align }>
          <div className={ `supernova-collection` }>
            <CollectionLayout { ...props } />
          </div>
        </div>
      </div>
      <Controls { ...props } />
    </div>
  )
}

export default SuperNovaEdit;
