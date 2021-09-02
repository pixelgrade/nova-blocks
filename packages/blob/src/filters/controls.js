import { __ } from '@wordpress/i18n';

import {
  ControlsSection,
  ControlsTab,
  PresetControl
} from "@novablocks/block-editor";

import {
  DebugControls,
  ShapePropsControls,
  ShapeScalingControls
} from "../controls";

import getRandomAttributes from "../get-random-attributes";

const InspectorControls = ( props ) => {

	const {
		settings: {
			blobPresetOptions,
		}
	} = props;

	return (
		<ControlsSection label={ __( 'Shape Modeling' ) } group={ __( 'Modules' ) }>
			<ControlsTab label={ __( 'General' ) }>
				<p>Use this tool to generate shapes and combine them with your images to create designs that are a unique and memorable part of your brand identity.</p>
				<PresetControl
					key={ 'blob-style-preset' }
					label={ __( 'Choose a shape preset:', '__plugin_txtd' ) }
					options={ blobPresetOptions }
					randomize={ getRandomAttributes }
				/>
			</ControlsTab>
			<ControlsTab label={ __( 'Settings' ) }>
				<DebugControls { ...props } />
        <ShapePropsControls { ...props }
          prefix={ 'blob' }
          enableAttribute={ 'blobsEnableMask' }
          groupTitle={ __( 'Media Shape' ) }
          toggleLabel={ __( 'Enable Media Shape', '__plugin_txtd' ) }
        />
        <ShapePropsControls { ...props }
          prefix={ 'blobMask' }
          enableAttribute={ 'blobsEnableDecoration' }
          groupTitle={ __( 'Decorative Shape' ) }
          toggleLabel={ __( 'Enable Blob Decoration', '__plugin_txtd' ) }
        />
        <ShapeScalingControls { ...props } />
			</ControlsTab>
		</ControlsSection>
	)
};

export default InspectorControls;
