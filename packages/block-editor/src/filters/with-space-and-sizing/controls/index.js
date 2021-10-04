import { __ } from "@wordpress/i18n";

import { ControlsSection, ControlsTab } from "../../../components";

import SpaceAndSizingPresets from './space-and-sizing-presets';

import CardSpacingCustomize from './card-spacing-customize';
import CardSpacingSettings from './card-spacing-settings';
import ImageContainerHeightSettings from './image-container-height-settings';
import MinimumContainerHeight from './minimum-container-height';

import VisualBalanceCustomize from "./visual-balance-customize";
import ImageContainerHeightCustomize from "./image-container-height-customize";

import ContentPadding from "./content-padding";
import ContentWidth from "./content-width";
import MediaPadding from "./media-padding";
import ContentToMediaSpacing from "./content-to-media-spacing";

const SpaceAndSizingControls = ( props ) => {

  return (
    <ControlsSection id={ 'space-and-sizing' } label={ __( 'Space and Sizing' ) } order={ 20 }>
      <ControlsTab label={ __( 'Presets' ) }>
        <SpaceAndSizingPresets { ...props } />
      </ControlsTab>
      <ControlsTab label={ __( 'Customize', '__plugin_txtd' ) }>
        <CardSpacingCustomize key={ 'card-spacing-customize' } { ...props } />
        <ImageContainerHeightCustomize key={ 'image-container-customize' } { ...props } />
        <VisualBalanceCustomize key={ 'visual-balance-customize' } { ...props } />
      </ControlsTab>
      <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
        <CardSpacingSettings key={ 'card-spacing-settings' } { ...props } />
        <MinimumContainerHeight id={ 'minimum-container-height' } key={ 'minimum-container-height' } { ...props } />
        <ImageContainerHeightSettings id={ 'image-container-height' } key={ 'image-container-height-settings' } { ...props } />
        <ContentWidth id={'content-width-relative-to-media'} key={'content-width-relative-to-media'} {...props}/>
        <ContentPadding id={'content-padding'} key={'content-padding'} {...props}/>
        <MediaPadding id={'media-padding'} key={'media-padding'} {...props}/>
        <ContentToMediaSpacing id={'content-to-media-spacing'} key={'content-to-media-spacing'} {...props}/>
      </ControlsTab>
    </ControlsSection>
  )
}

export default SpaceAndSizingControls;
