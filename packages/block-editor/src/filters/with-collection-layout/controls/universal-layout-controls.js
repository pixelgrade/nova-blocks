import { ControlsGroup } from "../../../components";

import PostsCountControl from './posts-count-control';

const UniversalLayoutControls = ( props ) => {

  return (
    <ControlsGroup title={ __( 'Cards Count' ) }>
      <PostsCountControl { ...props } />
      <ItemsPerRowControl { ...props } />
    </ControlsGroup>
  )
};

export default UniversalLayoutControls;
