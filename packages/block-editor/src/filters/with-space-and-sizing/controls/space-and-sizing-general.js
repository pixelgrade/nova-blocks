import { __ } from "@wordpress/i18n";

import { PresetControl } from "../../../components";
import { useSupports } from "../../../hooks";
import { getRandomAttributes } from "../utils";

const SpaceAndSizingGeneral = ( props ) => {

  const supports = useSupports( props.name );

  const presetOptions = props?.settings?.modules?.spaceAndSizing?.presetOptions;
  const advancedPresetOptions = props?.settings?.modules?.spaceAndSizing?.advancedPresetOptions;

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
}

export default SpaceAndSizingGeneral;
