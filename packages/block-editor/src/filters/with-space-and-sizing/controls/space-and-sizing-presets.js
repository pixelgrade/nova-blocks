import { __ } from "@wordpress/i18n";

import { buildPresetDefinitions, PresetControl } from "../../../components";
import { useSettings, useSupports } from "../../../hooks";
import { getManagedAttributes } from "../../../preset-engine";
import { getRandomAttributes } from "../utils";

const SpaceAndSizingPresets = ( props ) => {

  const novablocksSettings = useSettings();
  const supports = useSupports( props.name );

  const presetOptions = novablocksSettings?.modules?.spaceAndSizing?.presetOptions;
  const advancedPresetOptions = novablocksSettings?.modules?.spaceAndSizing?.advancedPresetOptions;

  const presets = [];

  if ( Array.isArray( presetOptions ) ) {
    presets.push( ...presetOptions );

    if ( Array.isArray( advancedPresetOptions ) && supports?.novaBlocks?.spaceAndSizing?.advancedSpacing ) {
      presets.push( ...advancedPresetOptions );
    }
  }

  if ( ! presets.length ) {
    return null;
  }

  // Stage 3a managed-bundle retrofit: today every option here declares the
  // same 6 keys (blockTopSpacing, blockBottomSpacing, emphasisTopSpacing,
  // emphasisBottomSpacing, enableOverlapping, verticalAlignment), so this is
  // a no-op union today — but it is derived, not hardcoded, so a future
  // `novablocks/block_editor_initial_settings` filter that adds a preset
  // with a narrower key set still gets a correct (and clearing) boundary.
  const { definitions } = buildPresetDefinitions( presets );
  const managedAttributes = getManagedAttributes( definitions );

  return (
    <PresetControl
      key={ 'media-card-layout-preset' }
      label={ __( 'Choose a layout preset:', '__plugin_txtd' ) }
      options={ presets }
      managedAttributes={ managedAttributes }
      randomize={ getRandomAttributes }
      { ...props }
    />
  )
};

export default SpaceAndSizingPresets;
