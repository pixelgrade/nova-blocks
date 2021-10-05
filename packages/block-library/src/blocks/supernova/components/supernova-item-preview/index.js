import { Card, CardMediaWrapper } from "@novablocks/block-editor";
import { MediaCompositionPreview } from "@novablocks/media-composition";
import { getColorSignalClassnames } from "@novablocks/utils";

import { FieldsPreview, InnerBlocksPreview } from "../index";

const SupernovaItemPreview = props => {

  const { attributes } = props;
  const className = getColorSignalClassnames( attributes, true );
  const { style, ...otherProps } = props;

  return (
    <Card { ...otherProps } className={ className }>
      <CardMediaWrapper { ...props }>
        <MediaCompositionPreview { ...props } />
      </CardMediaWrapper>
      { attributes.sourceType === 'fields' && <FieldsPreview { ...props } /> }
      { attributes.sourceType === 'blocks' && <InnerBlocksPreview { ...props } /> }
    </Card>
  )
}

export default SupernovaItemPreview;
