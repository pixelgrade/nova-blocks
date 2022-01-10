import { __ } from "@wordpress/i18n";
import { RangeControl } from "@wordpress/components";

import { ControlsGroup, ControlsSection, ControlsTab, withVisibility } from "../../../components";

import SpaceAndSizingPresets from './space-and-sizing-presets';

import CardSpacingCustomize from './card-spacing-customize';
import CardSpacingSettings from './card-spacing-settings';
import ImageContainerHeightSettings from './image-container-height-settings';
import MinimumContainerHeight from './minimum-container-height';

import VisualBalanceCustomize from "./visual-balance-customize";
import ImageContainerHeightCustomize from "./image-container-height-customize";

import ContentPadding from "./content-padding";
import VisualBalance from "./visual-balance";
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
        <BlockSpacingModifier key={ 'spacing-modifier' } { ...props } />
        <MinimumContainerHeight id={ 'minimum-container-height' } key={ 'minimum-container-height' } { ...props } />
        <MediaHeight key={ 'media-container-height' } { ...props } />
        <ImageContainerHeightSettings id={ 'media-aspect-ratio' } key={ 'media-aspect-ratio-settings' } { ...props } />
        <VisualBalance id={ 'visual-balance' } key={ 'visual-balance' } { ...props } />
        <ContentPadding id={ 'content-padding' } key={ 'content-padding' } { ...props } />
        <MediaPadding id={ 'media-padding' } key={ 'media-padding' } { ...props } />
        <ContentToMediaSpacing id={ 'content-to-media-spacing' } key={ 'content-to-media-spacing' } { ...props } />
      </ControlsTab>
    </ControlsSection>
  )
}

const MediaHeight = withVisibility( 'media-container-height', false )( props => {

  const { attributes, setAttributes } = props;
  const { mediaContainerHeight } = attributes;

  return (
    <ControlsGroup title={ __( 'Media Container Height', '__plugin_txtd' ) }>
      <RangeControl
        value={ mediaContainerHeight }
        onChange={ mediaContainerHeight => { setAttributes( { mediaContainerHeight } ) } }
        min={ 0 }
        max={ 100 }
        step={ 5 }
      />
    </ControlsGroup>
  )
} );

const BlockSpacingModifier = withVisibility( 'spacing-modifier' )( props => {
  const { attributes, setAttributes } = props;
  const { spacingModifier } = attributes;

  return (
    <ControlsGroup title={ __( 'Spacing Modifier' ) }>
      <RangeControl
        value={ spacingModifier }
        onChange={ ( spacingModifier ) => setAttributes( { spacingModifier } ) }
        min={ 0 }
        max={ 2 }
        step={ 0.5 }
      />
    </ControlsGroup>
  )
} );

export default SpaceAndSizingControls;
