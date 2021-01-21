import { withSettings } from '../../hooks';

import {
	ControlsGroup,
	ControlsTab,
	ControlsSection
} from "../index";

import { __ } from '@wordpress/i18n';

import { useBlockEditContext } from '@wordpress/block-editor';

import {
	RadioControl,
	createSlotFill,
} from '@wordpress/components';

const EmphasisContentAreaSlotFill = createSlotFill( 'EmphasisContentArea' );
const EmphasisContentAreaSlot = EmphasisContentAreaSlotFill.Slot;
const EmphasisContentAreaFill = EmphasisContentAreaSlotFill.Fill;

const EmphasisLevelControls = ( props ) => {

	const {
		attributes: {
			contentStyle,
		},
		setAttributes,
		settings: {
			media: {
				contentAreaOptions,
			},
		},
	} = props;

	return [
		<ControlsSection label={ __( 'Color Contrast' ) }>
			<ControlsTab label={ __( 'Settings' ) }>
				<ControlsGroup title={ __( 'Contrast' ) }>
					<RadioControl
						key={ 'content-emphasis-controls' }
						label={ __( 'Content Area Emphasis', '__plugin_txtd' ) }
						selected={ contentStyle }
						options={ contentAreaOptions }
						onChange={ ( nextContentStyle ) => setAttributes( { contentStyle: nextContentStyle } ) }
					/>
					<EmphasisContentAreaSlot />
				</ControlsGroup>
			</ControlsTab>
		</ControlsSection>
	]
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

export default withSettings( EmphasisLevelControls );
