import {
  Card,
  CardFieldsPreview,
  CardMediaWrapper,
  InnerBlocksPreview,
} from '@novablocks/block-editor';

import { MediaCompositionPreview } from '@novablocks/media-composition';
import { getColorSignalClassnames, normalizeMedia } from '@novablocks/utils';
import { useScrollingEffect, withScrollingEffect } from "@novablocks/scrolling-effect";

const SupernovaItemPreview = props => {

  const { attributes } = props;
  const { showMedia, contentType } = attributes;
  const className = getColorSignalClassnames( attributes, true );
  const { style, ...otherProps } = props;

  return (
    <Card { ...otherProps } className={ className }>
      { showMedia &&
        <CardMediaWrapper { ...props }>
          <MediaCompositionOrFirstMedia { ...props } />
        </CardMediaWrapper>
      }
      <div className={ 'nb-supernova-item__inner-container' }>
        { 'fields' === contentType && <CardFieldsPreview { ...props } key={ 'card_fields' }/> }
        { 'custom' === contentType && <InnerBlocksPreview { ...props } key={ 'inner_blocks' }/> }
      </div>
    </Card>
  );
};

const MediaCompositionOrFirstMedia = withScrollingEffect( props => {
  const { attributes } = props;
  const { images, showMedia } = attributes;
  const scrollingEffect = useScrollingEffect();

  if ( !showMedia ) {
    return null;
  }

  if ( Array.isArray( images ) && 1 === images.length ) {
    const media = normalizeMedia( images[0] );

    return (
      <img className={ `nb-supernova-item__media` } src={ media.url } width={ media.width } height={ media.height } alt={ media.alt } style={ scrollingEffect?.style } />
    );
  }

  return (
    <div style={ scrollingEffect?.style }>
      <MediaCompositionPreview { ...props } />
    </div>
  );
} );

export default SupernovaItemPreview;
