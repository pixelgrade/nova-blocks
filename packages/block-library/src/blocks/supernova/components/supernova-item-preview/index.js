import {
  Card,
  CardFieldsPreview,
  CardMediaWrapper,
  InnerBlocksPreview,
} from '@novablocks/block-editor';

import { MediaCompositionPreview } from '@novablocks/media-composition';
import { getColorSignalClassnames, normalizeMedia } from '@novablocks/utils';

const SupernovaItemPreview = props => {

  const { attributes } = props;
  const { showMedia, contentType } = attributes;
  const className = getColorSignalClassnames( attributes, true );
  const { style, ...otherProps } = props;

  return (
    <Card {...otherProps} className={className}>
      {showMedia
        && <CardMediaWrapper {...props}>
          <MediaCompositionOrFirstMedia {...props} />
        </CardMediaWrapper>}
      <div className={'supernova-item__inner-container'}>
        {'fields' === contentType && <CardFieldsPreview {...props} key={'card_fields'}/>}
        {'custom' === contentType && <InnerBlocksPreview {...props} key={'inner_blocks'}/>}
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

  if ( Array.isArray( images ) && 1 === images.length ) {
    const media = normalizeMedia( images[0] );

    return (
      <img className={`supernova-item__media`} src={media.url} width={media.width} height={media.height} alt={media.alt}/>
    );
  }

  return (
    <MediaCompositionPreview {...props} />
  );
};

export default SupernovaItemPreview;
