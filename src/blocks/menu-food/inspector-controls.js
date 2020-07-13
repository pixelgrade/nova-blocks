import { ControlsTab, ControlsSection } from "../../components/control-sections";

const { __ } = wp.i18n;
const { PanelBody, ToggleControl } = wp.components;

const FoodMenuInspectorControls = function( props ) {
	const {
		attributes: {
			enableTwoColumns,
			showPrices,
			showDescription
		},
		innerBlocks,
		setAttributes,
	} = props;

	const updateChildrenAttributes = ( attributes ) => {
		innerBlocks.forEach( ( sectionProps ) => {
			sectionProps.innerBlocks.forEach( ( { clientId } ) => {
				wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( clientId, attributes );
			} );
		} );
	}

	const updateAttributes = ( attributes ) => {
		setAttributes( attributes );
		updateChildrenAttributes( attributes );
	}

	return (
		<ControlsSection label={ __( 'Layout' ) }>
			<ControlsTab label={ __( 'Settings' ) }>
				<ToggleControl
					label={__( '2 columns', '__plugin_txtd' )}
					checked={enableTwoColumns}
					onChange={() => setAttributes( {enableTwoColumns: ! enableTwoColumns} )}
				/>

				<ToggleControl
					label={__( 'Price', '__plugin_txtd' )}
					checked={ showPrices }
					onChange={() => updateAttributes( {showPrices: ! showPrices} )}
				/>

				<ToggleControl
					label={__( 'Description', '__plugin_txtd' )}
					checked={showDescription}
					onChange={() => updateAttributes( {showDescription: ! showDescription} )}
				/>
			</ControlsTab>
		</ControlsSection>
	);
};

export default FoodMenuInspectorControls;
