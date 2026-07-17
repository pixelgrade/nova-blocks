import { RadioControl, RangeControl } from '@wordpress/components';
import { useRegistry } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

import { preserveBlockSelectionWhileApplying } from './preserve-block-selection';

const RuleControls = ( {
	ruleWeight = 1,
	ruleStrength = 'subtle',
	clientId,
	setAttributes,
} ) => {
	const registry = useRegistry();
	const updateAttributes = attributes => preserveBlockSelectionWhileApplying( {
		registry,
		clientId,
		apply: () => setAttributes( attributes ),
	} );

	return (
		<>
			<RangeControl
				label={ __( 'Rule Weight', '__plugin_txtd' ) }
				help={ __( 'Sets the thickness of the line in pixels.', '__plugin_txtd' ) }
				value={ ruleWeight }
				min={ 1 }
				max={ 4 }
				step={ 1 }
				__next40pxDefaultSize
				onChange={ value => updateAttributes( { ruleWeight: value } ) }
			/>
			<RadioControl
				label={ __( 'Rule Strength', '__plugin_txtd' ) }
				help={ __( 'Chooses a contextual divider role instead of a fixed color.', '__plugin_txtd' ) }
				selected={ ruleStrength }
				onChange={ value => updateAttributes( { ruleStrength: value } ) }
				options={ [
					{ label: __( 'Subtle', '__plugin_txtd' ), value: 'subtle' },
					{ label: __( 'Strong', '__plugin_txtd' ), value: 'strong' },
					{ label: __( 'Solid', '__plugin_txtd' ), value: 'solid' },
				] }
			/>
		</>
	);
};

export default RuleControls;
