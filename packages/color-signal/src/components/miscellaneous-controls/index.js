import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";

import { ControlsGroup } from "@novablocks/block-editor";

import FunctionalColorsToggleControl from "../functional-colors-toggle";
import ColorReferenceToggleControl from "../color-reference-toggle";

const MiscellaneousControls = ( props ) => {

  return (
    <Fragment>
      <ControlsGroup title={ __( 'Miscellanous' ) } className={ 'novablocks-controls-group--colors-miscellanous-controls' }>
        <FunctionalColorsToggleControl { ...props } />
      </ControlsGroup>
      <ColorReferenceToggleControl { ...props } />
    </Fragment>
  )
}

export default MiscellaneousControls;
