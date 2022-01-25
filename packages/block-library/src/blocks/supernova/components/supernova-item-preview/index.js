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
        <MediaCompositionPreview { ...props } />
      </CardMediaWrapper> }
      <div className={ 'supernova-item__inner-container' }>
        { sourceType === 'fields' && <CardFieldsPreview { ...props } /> }
        { sourceType === 'blocks' && <InnerBlocksPreview { ...props } /> }
      </div>
    </Card>
  )
};

export default SupernovaItemPreview;
