import {
	ControlsGroup,
	ControlsTab,
	ControlsSection
} from "../index";

import { __ } from '@wordpress/i18n';

import { useBlockEditContext } from '@wordpress/block-editor';

import {
	createSlotFill,
} from '@wordpress/components';

const EmphasisContentAreaSlotFill = createSlotFill( 'EmphasisContentArea' );
const EmphasisContentAreaSlot = EmphasisContentAreaSlotFill.Slot;
const EmphasisContentAreaFill = EmphasisContentAreaSlotFill.Fill;

const EmphasisLevelControls = ( props ) => {

	return (
		<ControlsSection label={ __( 'Color Contrast' ) }>
			<ControlsTab label={ __( 'Settings' ) }>
				<ControlsGroup title={ __( 'Contrast' ) }>
					<EmphasisContentAreaSlot />
				</ControlsGroup>
			</ControlsTab>
		</ControlsSection>
  )
};

const EmphasisContentAreaControls = ( props ) => {
	const { isSelected } = useBlockEditContext();

	return (
		<EmphasisContentAreaFill>
			{ isSelected && props.children }
		</EmphasisContentAreaFill>
	)
};

export {
  EmphasisContentAreaControls,
};

export default EmphasisLevelControls;
