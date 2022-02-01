import classnames from "classnames";

import { useBlockProps } from "@wordpress/block-editor";
import { useDispatch } from "@wordpress/data";
import { Fragment, useCallback, useMemo } from "@wordpress/element";

import { useInnerBlocksCount, useInnerBlocks, normalizeImages } from "@novablocks/block-editor";
import { Collection, CollectionHeader } from "@novablocks/collection";
import { BlockControls as MediaCompositionBlockControls } from "@novablocks/media-composition";

import BlockControls from './block-controls';

import { getAlignFromMatrix } from "@novablocks/utils";

import {
  PostsCollectionLayout,
  CardsCollectionLayout,
  withControlsVisibility,
} from './components';

const SupernovaEdit = props => {

  const { attributes, clientId } = props;

  const cardAttributes = useMemo( () => {

    const {
      title,
      subtitle,
      contentColorSignal,
      contentPaletteVariation,
      ...cardAttributes
    } = attributes;

    return Object.assign( {}, cardAttributes, {
      colorSignal: contentColorSignal,
      paletteVariation: contentPaletteVariation,
      useSourceColorAsReference: false,
    } );

  }, [ attributes ] );

  useInnerBlocksCount( clientId, attributes, 'novablocks/supernova-item', cardAttributes );

  return (
    <Fragment>
      <SupernovaPreview { ...props } key={ 'preview' } />
      <BlockControls { ...props } key={ 'block-controls' } />
      <ChangeMediaBlockControls { ...props } key={ 'media-composition-block-controls' } />
    </Fragment>
  )
};

const ChangeMediaBlockControls = ( props ) => {
  const { clientId } = props;
  const innerBlocks = useInnerBlocks( clientId );
  const { updateBlockAttributes } = useDispatch( 'core/block-editor' );
  const onSelectImages = useCallback( images => {
    normalizeImages( images ).then( newImages => {
      updateBlockAttributes( innerBlocks[0].clientId, { images: newImages } );
    } );
  } );

  if ( innerBlocks.length !== 1 ) {
    return null;
  }

  const passedProps = {
    ...props,
    attributes: {
      ...props.attributes,
      images: innerBlocks[0].attributes.images
    },
    onSelectImages,
  };

  return (
    <MediaCompositionBlockControls { ...passedProps } />
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
    showPagination,
    sourceType,
    cardLayout,
  } = attributes;

  const contentAlign = getAlignFromMatrix( attributes?.contentPosition );

  const className = classnames(
    'supernova',
    `supernova--source-type-${ sourceType }`,
    `supernova--card-layout-${ cardLayout }`,
    `supernova--${ columns }-columns`,
    `supernova--valign-${ contentAlign[0] }`,
    `supernova--halign-${ contentAlign[1] }`,
    { 'supernova--show-pagination': showPagination },
    props.className,
    'nb-content-layout-grid',
    'alignfull'
  );

  const blockProps = useBlockProps( {
    className: className,
    style: props.style,
  } );

  markPostsAsDisplayed( clientId, sourceType === 'content' ? posts : [] );

  return (
    <div { ...blockProps }>
      <Collection { ...props } key={'collection_' + clientId}>
        { headerPosition === 0 && ( showCollectionTitle || showCollectionSubtitle ) &&
          <CollectionHeader { ...props } key={ 'collection_header_' + clientId }/> }
        { sourceType === 'content' &&
          <PostsCollectionLayout { ...props } key={ 'posts_collection_layout_' + clientId }/> }
        { sourceType !== 'content' &&
          <CardsCollectionLayout { ...props } key={ 'cards_collection_layout_' + clientId }/> }
      </Collection>
    </div>
  );
};

export default withControlsVisibility( SupernovaEdit );

