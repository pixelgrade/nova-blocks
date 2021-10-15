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
  const { showMedia, sourceType } = props;
  const className = getColorSignalClassnames( attributes, true );
  const { style, ...otherProps } = props;

  return (
    <Card { ...otherProps } className={ className }>
      { showMedia && <CardMediaWrapper { ...props }>
        <MediaCompositionPreview { ...props } />
      </CardMediaWrapper> }
      { sourceType === 'fields' && <CardFieldsPreview { ...props } /> }
      { sourceType === 'blocks' && <InnerBlocksPreview { ...props } /> }
    </Card>
  )
}

export default SupernovaItemPreview;
