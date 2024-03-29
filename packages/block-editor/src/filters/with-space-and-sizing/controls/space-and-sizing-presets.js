import { __ } from "@wordpress/i18n";

import { PresetControl } from "../../../components";
import { useSettings, useSupports } from "../../../hooks";
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

  return (
    <PresetControl
      key={ 'media-card-layout-preset' }
      label={ __( 'Choose a layout preset:', '__plugin_txtd' ) }
      options={ presets }
      randomize={ getRandomAttributes }
      { ...props }
    />
  )
};

export default SpaceAndSizingPresets;
