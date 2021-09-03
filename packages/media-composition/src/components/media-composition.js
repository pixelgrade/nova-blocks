import { Fragment } from "@wordpress/element";

import {
  MediaCompositionPreview,
} from "./index";

import {
  BlockControls,
  MediaCompositionSection,
} from "../controls";

const MediaComposition = props => {

  return (
    <Fragment>
      <MediaCompositionPreview { ...props } />
      <BlockControls { ...props } />
      <MediaCompositionSection { ...props } />
    </Fragment>
  )
}

export default MediaComposition;
