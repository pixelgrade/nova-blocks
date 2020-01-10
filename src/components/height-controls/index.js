/**
 * Internal dependencies
 */
import withSettings from '../with-settings';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	PanelBody,
	RadioControl,
	ToggleControl,
} = wp.components;

const {
	select,
} = wp.data;

const {
	Component
} = wp.element;

class HeightControls extends Component {

	render() {

		const {
			attributes,
			setAttributes,
			settings,
		} = this.props;

		const {
			minHeight,
			applyMinimumHeight
		} = attributes;

		return (
			<PanelBody title={ __( 'Height', '__plugin_txtd' ) } initialOpen={ false }>
				<RadioControl
					label={ __( 'Apply Minimum Height', '__plugin_txtd' ) }
					selected={ applyMinimumHeight }
					onChange={ ( nextMinimumHeight ) => {
						setAttributes( { applyMinimumHeight: nextMinimumHeight } );
					} }
					options={ settings.applyMinimumHeightOptions }
				/>
				{ 'none' !== applyMinimumHeight &&
					<RadioControl
						label={ __( 'Minimum Height', '__plugin_txtd' ) }
						selected={ minHeight }
						onChange={ minHeight => {
							setAttributes( { minHeight: parseInt( minHeight, 10 ) } );
						} }
						options={ settings.minimumHeightOptions }
					/>
				}
			</PanelBody>
		);
	}
};

const HeightPanel = withSettings( HeightControls );

const ScrollIndicatorPanel = withSettings( function( props ) {
	const {
		settings,
		attributes: {
			scrollIndicator,
			scrollIndicatorBlock,
		},
		setAttributes,
	} = props;

	const scrollIndicatorValue = settings.usePostMetaAttributes ? scrollIndicatorBlock : scrollIndicator;

	const heroBlocks = select( 'core/block-editor' ).getBlocks().filter( ( block ) => {
		return block.name === 'novablocks/hero';
	} );

	const index = heroBlocks.findIndex( ( block ) => block.clientId === select( 'core/block-editor' ).getSelectedBlockClientId() );

	return (
		<PanelBody title={ __( 'Scroll Indicator', '__plugin_txtd' ) } style={ { display: index === 0 ? 'block' : 'none' } } initialOpen={ false }>
			<ToggleControl
				label={ __( 'Enable Scroll Indicator', '__plugin_txtd' ) }
				checked={ scrollIndicatorValue }
				onChange={ ( nextScrollIndicator ) => {
					setAttributes( {scrollIndicatorBlock: nextScrollIndicator} );
					setAttributes( {scrollIndicator: nextScrollIndicator} );
				} }
			/>
		</PanelBody>
	);
} );

export {
	HeightPanel,
	ScrollIndicatorPanel,
};
