import "./style.scss";

const { __ } = wp.i18n;

const {
	Component,
	Fragment
} = wp.element;

const {
	RangeControl,
	SelectControl,
	RadioControl,
	ColorPalette,
} = wp.components;

const {
	PanelColorSettings,
} = wp.blockEditor;

const colors = [ {
	name: __( 'Dark', '__plugin_txtd' ),
	color: '#000'
}, {
	name: __( 'Light', '__plugin_txtd' ),
	color: '#FFF'
} ];

class OverlayControls extends Component {

	render() {

		const {
			attributes: {
				overlayFilterStyle,
				overlayFilterStrength
			},
			setAttributes
		} = this.props;

		return <Fragment>
			<RadioControl
				label={ __( 'Overlay Filter Style', '__plugin_txtd' ) }
				value={ overlayFilterStyle }
				selected={ overlayFilterStyle }
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

class ColorControls extends Component {
	render() {

		const {
			attributes: {
				contentColor,
			},
			setAttributes
		} = this.props;

		return <ColorPalette
			className="nova-hide-clear-color"
			value={ contentColor }
			colors={ colors }
			onChange={ contentColor => setAttributes( { contentColor } ) }
			disableCustomColors
		/>
	}
}

class ColorPanel extends Component {

	render() {

		const {
			attributes: {
				contentColor,
			},
			setAttributes
		} = this.props;

		return <PanelColorSettings
			className="nova-hide-clear-color"
			title={ __( 'Color Settings', '__plugin_txtd' ) }
			colorSettings={ [
				{
					value: contentColor,
					onChange: contentColor => setAttributes( { contentColor } ),
					label: __( 'Content Color', '__plugin_txtd' ),
				},
			] }
			colors={ colors } >
			<OverlayControls { ...this.props } />
		</PanelColorSettings>
	}
}

export {
	ColorControls,
	OverlayControls,
	ColorPanel,
}
