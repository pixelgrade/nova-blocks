import { __ } from "@wordpress/i18n";
import { ControlsSection, ControlsTab } from "../../../components";

import CardDescriptionSize from './card-description-size';

// Slot this control into the existing "Content Details" section from
// with-card-details. getSectionsFromFills merges ControlsSection fills by
// `id`, and ControlsSection tabs with the same `label` get concatenated —
// so using the same id/group/order/label places our SelectControl alongside
// the other card typography / metadata settings in the Settings tab.
const Controls = ( props ) => {

  return (
    <ControlsSection
      id={ 'card-layout' }
      label={ __( 'Content Details', '__plugin_txtd' ) }
      group={ __( 'Card Anatomy', '__plugin_txtd' ) }
      order={ 20 }>
      <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
        <CardDescriptionSize { ...props } />
      </ControlsTab>
    </ControlsSection>
  );
};

export default Controls;
