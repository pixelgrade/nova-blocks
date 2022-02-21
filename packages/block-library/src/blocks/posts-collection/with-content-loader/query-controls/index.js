/**
 * WordPress dependencies
 */
import { __  } from '@wordpress/i18n';
import { RadioControl  } from '@wordpress/components';

import ManualControls from "./manual-controls";
import AutomatedControls from "./automated-controls";

const QueryControls = ( props ) => {

	const {
		loadingMode,
		onLoadingModeChange,
		enableSpecific,
	} = props;

	return [
		enableSpecific && (
			<RadioControl
				label={ __( 'Posts loading type', '__plugin_txtd' ) }
				selected={ loadingMode }
				onChange={ onLoadingModeChange }
				options={ [
					{ label: __( 'Automated (latest posts)' ), value: 'automated' },
					{ label: __( 'Manual (specific posts)' ), value: 'manual' },
				] }
			/>
		),
		<AutomatedControls { ...props } />,
		<ManualControls { ...props } />
	];
};

export default QueryControls;
