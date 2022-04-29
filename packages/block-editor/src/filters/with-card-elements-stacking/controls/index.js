import { __ } from "@wordpress/i18n";
import { ControlsSection, ControlsTab } from "../../../components";

import CardElementsStacking from './card-elements-stacking';

const Controls = ( props ) => {


  return (
    <ControlsSection
      id={ 'card-elements-stacking' }
      label={ __( 'Elements Stacking', '__plugin_txtd' ) }
      order={ 55 }>
      <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
        <CardElementsStacking { ...props } />
      </ControlsTab>
    </ControlsSection>
  );
};

export default Controls;
