import classnames from "classnames";

import { Fragment } from "@wordpress/element";

import {
  Card,
  CardFieldsPreview,
  CardMediaWrapper,
  InnerBlocksPreview,
} from "@novablocks/block-editor";

import { MediaCompositionPreview } from "@novablocks/media-composition";
import { getColorSignalClassnames } from "@novablocks/utils";

const SupernovaItemPreview = props => {

  const { attributes } = props;
  const { showMedia, sourceType } = attributes;
  const className = getColorSignalClassnames( attributes, true );
  const { style, ...otherProps } = props;

  return (
    <Card { ...otherProps } className={ className }>
      { showMedia && <CardMediaWrapper { ...props }>
        <MediaCompositionOrFirstMedia { ...props } />
      </CardMediaWrapper> }
      <div className={ 'supernova-item__inner-container' }>
        { sourceType === 'fields' && <CardFieldsPreview { ...props } /> }
        { sourceType === 'blocks' && <InnerBlocksPreview { ...props } /> }
      </div>
    </Card>
  )
};

const MediaCompositionOrFirstMedia = props => {
  const { attributes } = props;
  const { images, showMedia } = attributes;

  if ( ! showMedia ) {
    return null;
  }

  if ( Array.isArray( images ) && images.length === 1 ) {
    const media = images[0];

    return (
      <img className={ `supernova-item__media` } src={ media.url } width={ media.width } height={ media.height } />
    )
  }

  return (
    <MediaCompositionPreview { ...props } />
  )
}

export default SupernovaItemPreview;
