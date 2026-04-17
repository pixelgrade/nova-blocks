import { __ } from "@wordpress/i18n";
import { ControlsSection, ControlsTab } from "../../../components";

import CardDescriptionSize from './card-description-size';

const Controls = ( props ) => {

  return (
    <ControlsSection
      id={ 'card-description-size' }
      label={ __( 'Card Description', '__plugin_txtd' ) }
      order={ 60 }>
      <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
        <CardDescriptionSize { ...props } />
      </ControlsTab>
    </ControlsSection>
  );
};

export default Controls;
