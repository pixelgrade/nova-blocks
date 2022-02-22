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
        key={"posts-loading-type"}
				label={ __( 'Posts loading type', '__plugin_txtd' ) }
				selected={ loadingMode }
				onChange={ onLoadingModeChange }
				options={ [
					{ label: __( 'Automated (latest posts)' ), value: 'automated' },
					{ label: __( 'Manual (specific posts)' ), value: 'manual' },
				] }
			/>
		),
		<AutomatedControls key={"automated-controls"} { ...props } />,
		<ManualControls key={"manual-controls"} { ...props } />
	];
};

export default QueryControls;
