import { __ } from "@wordpress/i18n";

import { ControlsGroup } from "../../../components";

import ItemsCountControl from './items-count-control';
import ItemsPerRowControl from './items-per-row-control';
import ItemsGapControls from './items-gap-control';

const ClassicLayoutControls = ( props ) => {

  if ( props.attributes.layoutStyle !== 'classic' ) {
    return null;
  }

  const {
    attributes: {
      postsToShow,
    },
    setAttributes,
  } = props;

  return (
    <ControlsGroup title={ __( 'Cards Count', '__plugin_txtd' ) }>
      <ItemsCountControl postsToShow={postsToShow} setAttributes={setAttributes} />
      <ItemsPerRowControl { ...props } />
      <ItemsGapControls { ...props } />
    </ControlsGroup>
  )
};

export default ClassicLayoutControls;
