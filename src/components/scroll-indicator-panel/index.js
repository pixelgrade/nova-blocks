/**
 * Internal dependencies
 */
import withSettings from '../with-settings';
import { ControlsSection, ControlsTab } from "../control-sections";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const { ToggleControl } = wp.components;

const {
	select,
} = wp.data;

const {
	Component
} = wp.element;

const ScrollIndicatorPanel = withSettings( function( props ) {

	const {
		settings,
		attributes: {
			scrollIndicator,
		},
		setAttributes,
		updateAttributes,
	} = props;

	const { getBlocks, getSelectedBlockClientId } = select( 'core/block-editor' );

	const heroBlocks = getBlocks().filter( ( block ) => {
		return block.name === 'novablocks/hero';
	} );

	const index = heroBlocks.findIndex( block => block.clientId === getSelectedBlockClientId() );

	return (
		index === 0 &&
		<ControlsSection label={ __( 'Indicators' ) }>
			<ControlsTab label={ __( 'Settings' ) }>
				<ToggleControl
					key={ 'scroll-indicator-control' }
					label={ __( 'Enable Scroll Indicator', '__plugin_txtd' ) }
					checked={ scrollIndicator }
					onChange={ scrollIndicator => { updateAttributes( { scrollIndicator } ) } }
				/>
			</ControlsTab>
		</ControlsSection>
	);
} );

export {
	ScrollIndicatorPanel,
};
