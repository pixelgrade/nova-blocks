import classnames from "classnames";

import { useBlockProps } from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";

import { useInnerBlocksCount } from "@novablocks/block-editor";
import { CollectionHeader } from "@novablocks/collection";

import BlockControls from './block-controls';

import { getAlignFromMatrix } from "@novablocks/utils";

import {
  PostsCollectionLayout,
  CardsCollectionLayout,
  withControlsVisibility,
} from './components';

const SupernovaEdit = props => {

  const { attributes, clientId } = props;

  const {
    title,
    subtitle,
    contentColorSignal,
    contentPaletteVariation,
    ...cardAttributes
  } = attributes;

  Object.assign( cardAttributes, {
    colorSignal: contentColorSignal,
    paletteVariation: contentPaletteVariation,
    useSourceColorAsReference: false,
  } );

  useInnerBlocksCount( clientId, attributes, 'novablocks/supernova-item', cardAttributes );

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
  } = attributes;

  const contentAlign = getAlignFromMatrix( attributes?.contentPosition );

  const className = classnames(
    props.className,
    'supernova',
    `supernova--source-type-${ sourceType }`,
    `supernova--card-layout-${ cardLayout }`,
    `supernova--${ columns }-columns`,
    `supernova--valign-${ contentAlign[0] }`,
    `supernova--halign-${ contentAlign[1] }`,
    'alignfull'
  );

  const blockProps = useBlockProps( {
    className: className,
    style: props.style,
  } );

  markPostsAsDisplayed( clientId, sourceType === 'content' ? posts : [] );

  return (
    <div { ...blockProps }>
      <div className="supernova__inner-container">
        { headerPosition === 0 && ( showCollectionTitle || showCollectionSubtitle ) && <CollectionHeader { ...props } /> }
        { sourceType === 'content' && <PostsCollectionLayout { ...props } /> }
        { sourceType !== 'content' && <CardsCollectionLayout { ...props } /> }
      </div>
    </div>
  );
}

export default withControlsVisibility( SupernovaEdit );

