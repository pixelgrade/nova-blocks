import { __ } from "@wordpress/i18n";
import { ControlsSection, ControlsTab } from "../../../components";

import CardElementsStacking from './card-elements-stacking';
import CardElementsOrdering from './card-elements-ordering';

const Controls = ( props ) => {


  return (
    <ControlsSection
      id={ 'card-elements-stacking' }
      label={ __( 'Card Elements Stacking', '__plugin_txtd' ) }
      group={ __( 'Block Anatomy', '__plugin_txtd' ) }
      order={ 55 }>
      <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
        <CardElementsStacking { ...props } />
        <CardElementsOrdering { ...props } />
      </ControlsTab>
    </ControlsSection>
  );
};

export default Controls;
