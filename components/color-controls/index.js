const { __ } = wp.i18n;

const {
	Component,
	Fragment
} = wp.element;

const {
	ColorPalette,
	RangeControl,
	SelectControl,
} = wp.components;

export default class ColorControls extends Component {
	render() {
		const {
			attributes: {
				contentColor,
				overlayFilterStyle,
				overlayFilterStrength
			},
			setAttributes
		} = this.props;

		return <Fragment>
			<ColorPalette
				label={ __( 'Content Color', '__plugin_txtd' ) }
				colors={[
					{
						name: __( 'Dark', '__plugin_txtd' ),
						color: '#000'
					}, {
						name: __( 'Light', '__plugin_txtd' ),
						color: '#FFF'
					}
				]}
				value={ contentColor }
				onChange={ contentColor => setAttributes( { contentColor } ) }
				disableCustomColors
			/>
			<SelectControl
				label={ __( 'Overlay Filter Style', '__plugin_txtd' ) }
				value={ overlayFilterStyle }
				options={ [
					{ label: __( 'None', '__plugin_txtd' ), value: 'none' },
					{ label: __( 'Dark', '__plugin_txtd' ), value: 'dark' },
					{ label: __( 'Light', '__plugin_txtd' ), value: 'light' }
				] }
				onChange={ overlayFilterStyle => setAttributes( { overlayFilterStyle } ) }
			/>
			{ overlayFilterStyle !== 'none' && <RangeControl
				label={ __( 'Overlay Filter Strength', '__plugin_txtd' ) }
				value={ overlayFilterStrength }
				onChange={ overlayFilterStrength => setAttributes( { overlayFilterStrength } ) }
				min={0}
				max={100}
				step={10}
			/> }
		</Fragment>
	}
}
