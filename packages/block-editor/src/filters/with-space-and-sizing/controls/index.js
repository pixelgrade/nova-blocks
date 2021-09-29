import { __ } from "@wordpress/i18n";
import { createContext, useContext } from "@wordpress/element";

import { ControlsSection, ControlsTab } from "../../../components";

import SpaceAndSizingPresets from './space-and-sizing-presets';

import CardSpacingCustomize from './card-spacing-customize';
import CardSpacingSettings from './card-spacing-settings';
import ImageContainerHeightSettings from './image-container-height-settings';
import MinimumContainerHeight from './minimum-container-height';

import VisualBalanceCustomize from "./visual-balance-customize";
import VisualBalanceSettings from "./visual-balance-settings";

import ControlsVisibilityContext from '../../../context';

const SpaceAndSizingControls = ( props ) => {

  const visibilityContext = useContext( ControlsVisibilityContext );

  return (
    <ControlsSection id={ 'space-and-sizing' } label={ __( 'Space and Sizing' ) } order={ 20 }>
      <ControlsTab label={ __( 'Presets' ) }>
        <SpaceAndSizingPresets { ...props } />
      </ControlsTab>
      <ControlsTab label={ __( 'Customize', '__plugin_txtd' ) }>
        <CardSpacingCustomize key={ 'card-spacing-customize' } { ...props } />
        {/* !!! We need to remove all ImageContainerHeightCustomize
          * and  VisualBalanceCustomize dependencies when we
          * completely remove those components.
          */
        }
        {/*<ImageContainerHeightCustomize key={ 'image-container-customize' } { ...props } />*/}
        <VisualBalanceCustomize key={ 'visual-balance-customize' } { ...props } />
      </ControlsTab>
      <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
        <CardSpacingSettings key={ 'card-spacing-settings' } { ...props } />
        { visibilityContext.minimumContainerHeight && <MinimumContainerHeight key={ 'minimum-container-height' } { ...props } /> }
        { visibilityContext.imageContainerHeight && <ImageContainerHeightSettings key={ 'image-container-height-settings' } { ...props } /> }
        <VisualBalanceSettings key={ 'visual-balance-settings' } { ...props } />
      </ControlsTab>
    </ControlsSection>
  )
}

export default SpaceAndSizingControls;
