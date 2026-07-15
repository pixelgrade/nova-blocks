import { __ } from '@wordpress/i18n';

import {
  buildPresetDefinitions,
  ControlsSection,
  ControlsTab,
  getManagedAttributes,
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
  const blobPresetOptions = novablocksSettings.blobPresetOptions;

  // Stage 3a managed-bundle retrofit: shape presets are intentionally
  // partial (e.g. "Rectangle" only asserts blobsEnableMask/
  // blobsEnableDecoration; the shape-detail attributes are implied "off").
  // Before this retrofit, clicking a partial preset left whatever a
  // previously-applied preset had set on the omitted attributes untouched
  // (e.g. switching from "MX37: Stones" to "Rectangle" kept every
  // blobMask*/blob*/displacement value from Stones). The managed set below
  // is the union across ALL blob presets, so applying a partial preset now
  // clears those attributes back to their registered defaults instead —
  // see the commit message for the exact attribute list.
  const { definitions } = buildPresetDefinitions( blobPresetOptions );
  const managedAttributes = getManagedAttributes( definitions );

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
					options={ blobPresetOptions }
					managedAttributes={ managedAttributes }
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
