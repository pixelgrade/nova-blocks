import { __ } from "@wordpress/i18n";

import { ControlsGroup, ControlsSection, ControlsTab } from "../../components";

import { ElementsVisibilityToggles } from "./components";

const ElementsDisplaySection = ( props ) => {

  return (
    <ControlsSection id={ 'elements-visibility' } label={ __( 'Elements Visibility' ) } group={ __( 'Input' ) } order={ 20 }>
      <ControlsTab label={ __( 'Settings' ) }>
        <ControlsGroup title={ __( 'Set up elements for this block', '__plugin_txtd' ) }>
          <ElementsVisibilityToggles { ...props } />
        </ControlsGroup>
      </ControlsTab>
    </ControlsSection>
  );
};



export default ElementsDisplaySection;
