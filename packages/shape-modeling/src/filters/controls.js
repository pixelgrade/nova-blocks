import { __ } from '@wordpress/i18n';

import {
  ControlsSection,
  ControlsTab,
  PresetControl,
  useSettings,
  withVisibility
} from "@novablocks/block-editor";

import {
  ShapeDebugControls,
  ShapePropsControls,
  ShapeScalingControls
} from "../controls";

import { getRandomAttributes } from "../utils";

const Controls = ( props ) => {

  const novablocksSettings = useSettings();

	return (
		<ControlsSection
      id={ 'shape-modeling' }
      label={ __( 'Shape Modeling', '__plugin_txtd' ) }
      group={ __( 'Modules', '__plugin_txtd' ) }
      order={ 30 }>
			<ControlsTab label={ __( 'Presets', '__plugin_txtd' ) }>
				<p>{__( 'Use this tool to generate shapes and combine them with your images to create designs that are a unique and memorable part of your brand identity.', '__plugin_txtd' )}</p>
				<PresetControl
					key={ 'blob-style-preset' }
					label={ __( 'Choose a shape preset:', '__plugin_txtd' ) }
					options={ novablocksSettings.blobPresetOptions }
					randomize={ getRandomAttributes }
          { ...props }
				/>
			</ControlsTab>
			<ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
				<ShapeDebugControls { ...props } />
        <ShapePropsControls { ...props }
          prefix={ 'blobMask' }
          enableAttribute={ 'blobsEnableMask' }
          groupTitle={ __( 'Media Shape', '__plugin_txtd' ) }
          toggleLabel={ __( 'Enable Media Shape', '__plugin_txtd' ) }
        />
        <ShapePropsControls { ...props }
          prefix={ 'blob' }
          enableAttribute={ 'blobsEnableDecoration' }
          groupTitle={ __( 'Decorative Shape', '__plugin_txtd' ) }
          toggleLabel={ __( 'Enable Blob Decoration', '__plugin_txtd' ) }
        />
        <ShapeScalingControls { ...props } />
			</ControlsTab>
		</ControlsSection>
	)
};

export default withVisibility( 'shape-modeling-section' )( Controls );
