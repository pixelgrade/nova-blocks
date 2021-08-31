import { __ } from "@wordpress/i18n";

import { ControlsSection, ControlsTab } from "../../../components";

import SpaceAndSizingGeneral from './space-and-sizing-general';

import CardSpacingCustomize from './card-spacing-customize';
import CardSpacingSettings from './card-spacing-settings';
import ImageContainerHeightCustomize from './image-container-height-customize';
import ImageContainerHeightSettings from './image-container-height-settings';
import MinimumContainerHeight from './minimum-container-height';

import VisualBalanceCustomize from "./visual-balance-customize";
import VisualBalanceSettings from "./visual-balance-settings";

const SpaceAndSizingControls = ( props ) => {

  return (
    <ControlsSection label={ __( 'Space and Sizing' ) } order={ 20 }>
      <ControlsTab label={ __( 'General' ) }>
        <SpaceAndSizingGeneral { ...props } />
      </ControlsTab>
      <ControlsTab label={ __( 'Customize', '__plugin_txtd' ) }>
        <CardSpacingCustomize key={ 'card-spacing-customize' } { ...props } />
        <ImageContainerHeightCustomize key={ 'image-container-customize' } { ...props } />
        <VisualBalanceCustomize key={ 'visual-balance-customize' } { ...props } />
      </ControlsTab>
      <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
        <CardSpacingSettings key={ 'card-spacing-settings' } { ...props } />
        <MinimumContainerHeight key={ 'minimum-container-height' } { ...props } />
        <ImageContainerHeightSettings key={ 'image-container-height-settings' } { ...props } />
        <VisualBalanceSettings key={ 'visual-balance-settings' } { ...props } />
      </ControlsTab>
    </ControlsSection>
  )
}

export default SpaceAndSizingControls;
