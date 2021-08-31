import { __ } from "@wordpress/i18n";

import { ControlsGroup } from "../../../components";

import PostsCountControl from './posts-count-control';
import ItemsPerRowControl from "./items-per-row-control";

const ClassicLayoutControls = ( props ) => {

  if ( props.attributes.layoutStyle !== "classic" ) {
    return null;
  }

  return (
    <ControlsGroup title={ __( 'Cards Count' ) }>
      <PostsCountControl { ...props } />
      <ItemsPerRowControl { ...props } />
    </ControlsGroup>
  )
};

export default ClassicLayoutControls;
