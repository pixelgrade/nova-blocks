import {
  Card,
  CardFieldsPreview,
  CardMediaWrapper,
  InnerBlocksPreview,
} from '@novablocks/block-editor';

import { MediaCompositionPreview } from '@novablocks/media-composition';
import { getColorSignalClassnames } from '@novablocks/utils';

const SupernovaItemPreview = props => {

  const { attributes } = props;
  const { showMedia, sourceType } = attributes;
  const className = getColorSignalClassnames( attributes, true );
  const { style, ...otherProps } = props;

  return (
    <Card {...otherProps} className={className}>
      {showMedia
        && <CardMediaWrapper {...props}>
          <MediaCompositionOrFirstMedia {...props} />
        </CardMediaWrapper>}
      <div className={'supernova-item__inner-container'}>
        {sourceType === 'fields' && <CardFieldsPreview {...props} key={'card_fields'}/>}
        {sourceType === 'blocks' && <InnerBlocksPreview {...props} key={'inner_blocks'}/>}
      </div>
    </Card>
  );
};

const MediaCompositionOrFirstMedia = props => {
  const { attributes } = props;
  const { images, showMedia } = attributes;

  if ( !showMedia ) {
    return null;
  }

  if ( Array.isArray( images ) && images.length === 1 ) {
    const media = normalizeMedia( images[0] );

    return (
      <img className={`supernova-item__media`} src={media.url} width={media.width} height={media.height}/>
    );
  }

  return (
    <MediaCompositionPreview {...props} />
  );
};

const normalizeMedia = ( mediaObject ) => {
  // We will refrain from using the full image size to avoid overloading the editor window.
  // The `novablocks_large` image size is sufficient, if present.

  return {
    type: mediaObject?.type,
    width: mediaObject?.sizes?.novablocks_large?.width || mediaObject?.width,
    height: mediaObject?.sizes?.novablocks_large?.height || mediaObject.height,
    url: mediaObject?.sizes?.novablocks_large?.url || mediaObject?.url,
  };
};

export default SupernovaItemPreview;
