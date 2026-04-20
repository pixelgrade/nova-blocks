import { __ } from "@wordpress/i18n";

import { ControlsGroup } from "../../../components";

import ItemsCountControl from './items-count-control';
import ItemsPerRowControl from './items-per-row-control';
import ItemsGapControls from './items-gap-control';
import VerticalGapModifierControl from './vertical-gap-modifier-control';
import ItemsAspectRatioControl from './items-aspect-ratio-control';
import Pile3dGridControls from './pile-3d-grid-controls';
import PileParallaxControls from './pile-parallax-controls';

const ClassicLayoutControls = ( props ) => {

  if ( ! [ 'classic', 'masonry' ].includes( props.attributes.layoutStyle ) ) {
    return null;
  }

  const {
    attributes: {
      postsToShow,
    },
    setAttributes,
  } = props;

  return (
    <>
      <ControlsGroup title={ __( 'Cards Count', '__plugin_txtd' ) }>
        <ItemsCountControl postsToShow={postsToShow} setAttributes={setAttributes} />
        <ItemsPerRowControl { ...props } />
        <ItemsGapControls { ...props } />
        <VerticalGapModifierControl { ...props } />
      </ControlsGroup>
      <ControlsGroup title={ __( 'Layout', '__plugin_txtd' ) }>
        <ItemsAspectRatioControl { ...props } />
        <Pile3dGridControls { ...props } />
      </ControlsGroup>
      <ControlsGroup title={ __( 'Parallax', '__plugin_txtd' ) }>
        <PileParallaxControls { ...props } />
      </ControlsGroup>
    </>
  )
};

export default ClassicLayoutControls;
