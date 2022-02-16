import { __ } from "@wordpress/i18n";

import { ControlsGroup } from "../../../components";

import PostsCountControl from './posts-count-control';
import ItemsPerRowControl from "./items-per-row-control";
import ItemsGapControls from "./items-gap-control";

const ClassicLayoutControls = ( props ) => {

  if ( props.attributes.layoutStyle !== "classic" ) {
    return null;
  }

  return (
    <ControlsGroup title={ __( 'Cards Count', '__plugin_txtd' ) }>
      <PostsCountControl { ...props } />
      <ItemsPerRowControl { ...props } />
      <ItemsGapControls { ...props } />
    </ControlsGroup>
  )
};

export default ClassicLayoutControls;
