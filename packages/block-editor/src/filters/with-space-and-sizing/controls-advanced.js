import { __ } from "@wordpress/i18n";
import { ControlsSection, ControlsTab, PresetControl } from "../../components";
import { getRandomArrayFromArray, getRandomBetween } from "@novablocks/utils";

const SpaceAndSizingControlsAdvanced = ( props ) => {

  const presetOptions = props?.settings?.modules?.spaceAndSizing?.presetOptions;
  const advancedPresetOptions = props?.settings?.modules?.spaceAndSizing?.advancedPresetOptions;

  const presets = [];

  if ( Array.isArray( presetOptions ) ) {
    presets.push( ...presetOptions );

    if ( Array.isArray( advancedPresetOptions ) && supports?.novaBlocks?.spaceAndSizing?.advancedSpacing ) {
      presets.push( ...advancedPresetOptions );
    }
  }

  return (
    <ControlsSection label={ __( 'Space and Sizing' ) } priority={ 30 }>
      {
        !! presetOptions &&
        <ControlsTab label={ __( 'General' ) }>
          <PresetControl
            key={ 'media-card-layout-preset' }
            label={ __( 'Choose a layout preset:', '__plugin_txtd' ) }
            options={ presets }
            randomize={ getRandomAttributes }
          />
        </ControlsTab>
      }
    </ControlsSection>
  )
}

const getRandomAttributes = () => {
  const getRandomSign = () => { return getRandomArrayFromArray( [ -1, 0, 1 ], 1 )[0] };
  const block = getRandomBetween( 0, 3 );
  const emphasis = getRandomBetween( 0, 3 );
  const blockTopSign = getRandomSign();
  const blockBottomSign = getRandomSign();
  const emphasisTopSign = getRandomSign();
  const emphasisBottomSign = getRandomSign();
  const verticalAlignment = getRandomArrayFromArray( [ 'top', 'center', 'bottom' ], 1 )[0];
  const enableOverlapping = getRandomArrayFromArray( [ true, false ], 1 )[0];

  return {
    blockTopSpacing: block * blockTopSign,
    blockBottomSpacing: block * blockBottomSign,
    emphasisTopSpacing: emphasis * emphasisTopSign,
    emphasisBottomSpacing: emphasis * emphasisBottomSign,
    enableOverlapping,
    verticalAlignment,
  };
};

export default SpaceAndSizingControlsAdvanced;
