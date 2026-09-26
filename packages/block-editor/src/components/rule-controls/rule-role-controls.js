import { RadioControl, RangeControl } from '@wordpress/components';
import { useRegistry } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

import { preserveBlockSelectionWhileApplying } from './preserve-block-selection';

// The rule model's control (GitHub #668): a rule is Off, Primary (strong,
// structural) or Secondary (subtle, quiet); its colour and weight follow the
// role's tokens. The weight is an optional 1-4px override, so a later change
// to the role's weight still reaches every rule that did not override it.
// Off clears both attributes, so the block serializes nothing again.
const RuleRoleControls = ( {
	ruleRole,
	ruleWeight,
	clientId,
	setAttributes,
	help = __( 'Draws a line in one of the design system\'s rule roles.', '__plugin_txtd' ),
} ) => {
	const registry = useRegistry();
	const updateAttributes = attributes => preserveBlockSelectionWhileApplying( {
		registry,
		clientId,
		apply: () => setAttributes( attributes ),
	} );

	return (
		<>
			<RadioControl
				label={ __( 'Rule', '__plugin_txtd' ) }
				help={ help }
				selected={ ruleRole || '' }
				onChange={ value => updateAttributes( value
					? { ruleRole: value }
					: { ruleRole: undefined, ruleWeight: undefined } ) }
				options={ [
					{ label: __( 'Off', '__plugin_txtd' ), value: '' },
					{ label: __( 'Primary', '__plugin_txtd' ), value: 'primary' },
					{ label: __( 'Secondary', '__plugin_txtd' ), value: 'secondary' },
				] }
			/>
			{ ruleRole && <RangeControl
				label={ __( 'Rule Weight', '__plugin_txtd' ) }
				help={ __( 'Overrides the role\'s line thickness, in pixels. Reset to follow the role.', '__plugin_txtd' ) }
				value={ ruleWeight }
				initialPosition={ 1 }
				min={ 1 }
				max={ 4 }
				step={ 1 }
				allowReset
				onChange={ value => updateAttributes( { ruleWeight: value ?? undefined } ) }
			/> }
		</>
	);
};

export default RuleRoleControls;
