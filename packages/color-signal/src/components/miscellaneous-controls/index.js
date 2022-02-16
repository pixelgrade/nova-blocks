import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";

import { ControlsGroup, useSupports } from "@novablocks/block-editor";

import FunctionalColorsToggleControl from "../functional-colors-toggle";
import ColorReferenceToggleControl from "../color-reference-toggle";

const MiscellaneousControls = ( props ) => {

  const supports = useSupports( props.name );
  const disableFunctionalColors = ! supports?.novaBlocks?.colorSignal?.functionalColors;

  return (
    <Fragment>
      { ! disableFunctionalColors &&
        <ControlsGroup title={ __( 'Miscellaneous', '__plugin_txtd' ) } className={ 'novablocks-controls-group--colors-miscellanous-controls' }>
          <FunctionalColorsToggleControl { ...props } />
        </ControlsGroup>
      }
      <ColorReferenceToggleControl { ...props } />
    </Fragment>
  )
};

export default MiscellaneousControls;
