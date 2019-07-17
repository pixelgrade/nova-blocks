import "./style.scss";
import * as icons from "../../icons";
import {AlignmentControls} from "../index";

const { __ } = wp.i18n;

const {
	Component,
	Fragment
} = wp.element;

const {
	ColorPalette,
	Dropdown,
	IconButton,
	RadioControl,
	RangeControl,
	SelectControl,
	Toolbar,
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
			colors={ colors } 
			initialOpen={ false }>
			<OverlayControls { ...this.props } />
		</PanelColorSettings>
	}
}

class ColorToolbar extends Component {
	render() {
		return (
			<Toolbar className='pixelgrade-hero-block-toolbar'>
				<Dropdown
					position='bottom'
					className='pixelgrade-hero-block-toolbar-dropdown'
					contentClassName='components-nova--popover'
					renderToggle={ ( { isOpen, onToggle } ) => (
						<IconButton
							onClick={ onToggle }
							icon={ icons.invert }
							aria-expanded={ isOpen }
							label={ __( 'Color Options', '__plugin_txtd' ) }
							labelPosition='bottom'
						/>
					) }
					focusOnMount={ false }
					renderContent={ ( { onClose } ) => <Fragment>
						<ColorControls { ...this.props } />
						<OverlayControls { ...this.props } />
					</Fragment> }
				/>
			</Toolbar>
		)
	}
}

export {
	ColorControls,
	ColorPanel,
	ColorToolbar,
	OverlayControls,
}
