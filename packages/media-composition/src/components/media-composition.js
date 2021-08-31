import { Fragment } from "@wordpress/element";

import {
  MediaCompositionPreview,
  MediaCompositionPlaceholder,
} from "./index";

import {
  BlockControls,
  MediaCompositionSection,
} from "../controls";

const MediaComposition = props => {

  return (
    <Fragment>
      <MediaCompositionPlaceholder { ...props } />
      <MediaCompositionPreview { ...props } />
      <BlockControls { ...props } />
      <MediaCompositionSection { ...props } />
    </Fragment>
  )
}

export default MediaComposition;
