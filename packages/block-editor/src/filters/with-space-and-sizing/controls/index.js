import { __ } from "@wordpress/i18n";
import { RangeControl } from "@wordpress/components";

import { ControlsGroup, ControlsSection, ControlsTab, withVisibility } from "../../../components";
import { useSpacingIsZeroedByAncestor } from "../../../hooks";

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

const SpacingZeroedNotice = ( { clientId } ) => {
  const parentBlockTitle = useSpacingIsZeroedByAncestor( clientId );

  if ( ! parentBlockTitle ) {
    return null;
  }

  return (
    <div className={ 'novablocks-notice' } style={{ padding: '12px 16px', marginBottom: '16px', backgroundColor: '#FCEBEA', color: '#8B1A10' }}>
      <p style={{ margin: 0, fontSize: '12px' }}>
        <strong>{ __( 'Spacing controls have no effect.', '__plugin_txtd' ) }</strong>
        { ' ' }
        { __( 'The parent', '__plugin_txtd' ) + ' ' }
        <strong>{ parentBlockTitle }</strong>
        { ' ' + __( 'block has "Spacing Modifier for Inside Elements" set to 0.', '__plugin_txtd' ) }
      </p>
    </div>
  );
};

const SpaceAndSizingControls = ( props ) => {

  return (
    <ControlsSection id={ 'space-and-sizing' } label={ __( 'Space and Sizing', '__plugin_txtd' ) } order={ 20 }>
      <ControlsTab id="space-and-sizing-presets" label={ __( 'Presets', '__plugin_txtd' ) }>
        <SpacingZeroedNotice clientId={ props.clientId } />
        <SpaceAndSizingPresets { ...props } />
      </ControlsTab>
      <ControlsTab id="space-and-sizing-customize" label={ __( 'Customize', '__plugin_txtd' ) }>
        <SpacingZeroedNotice clientId={ props.clientId } />
        <CardSpacingCustomize key={ 'card-spacing-customize' } { ...props } />
        <ImageContainerHeightCustomize key={ 'image-container-customize' } { ...props } />
        <VisualBalanceCustomize key={ 'visual-balance-customize' } { ...props } />
      </ControlsTab>
      <ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
        <SpacingZeroedNotice clientId={ props.clientId } />
        <CardSpacingSettings key={ 'card-spacing-settings' } { ...props } />
        <BlockSpacingModifier key={ 'spacing-modifier' } { ...props } />
        <BlockChildrenSpacingModifier key={ 'spacing-children-modifier' } { ...props } />
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
};

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
  const { spacingMultiplierOverride } = attributes;

  return (
    <ControlsGroup title={ __( 'Spacing Modifier', '__plugin_txtd' ) }>
      <RangeControl
        value={ spacingMultiplierOverride }
        onChange={ ( spacingMultiplierOverride ) => setAttributes( { spacingMultiplierOverride } ) }
        min={ 0 }
        max={ 4 }
        step={ 0.5 }
      />
    </ControlsGroup>
  )
} );

const BlockChildrenSpacingModifier = withVisibility( 'spacing-children-modifier' )( props => {
  const { attributes, setAttributes } = props;
  const { spacingModifier } = attributes;

  return (
    <ControlsGroup title={ __( 'Spacing Modifier for Inside Elements', '__plugin_txtd' ) }>
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
