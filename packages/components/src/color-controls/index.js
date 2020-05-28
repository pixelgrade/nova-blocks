/**
 * Internal dependencies
 */
import * as icons from '@novablocks/icons';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

import {
	ColorPalette,
	Dropdown,
	IconButton,
	RadioControl,
	RangeControl,
	Toolbar,
	BaseControl
} from '@wordpress/components';

import {
	PanelColorSettings
 } from '@wordpress/block-editor';

const colors = [ {
	name: __( 'Dark', '__plugin_txtd' ),
	color: '#000',
}, {
	name: __( 'Light', '__plugin_txtd' ),
	color: '#FFF',
} ];

const OverlayControls = function( props ) {
	const {
		attributes: {
			overlayFilterStyle,
			overlayFilterStrength,
		},
		setAttributes,
	} = props;

	return (
		<Fragment>
			<RadioControl
				label={ __( 'Overlay Filter Style', '__plugin_txtd' ) }
				selected={ overlayFilterStyle }
				options={ [
					{ label: __( 'None', '__plugin_txtd' ), value: 'none' },
					{ label: __( 'Dark', '__plugin_txtd' ), value: 'dark' },
					{ label: __( 'Light', '__plugin_txtd' ), value: 'light' },
				] }
				onChange={ ( nextOverlayFilterStyle ) => setAttributes( { overlayFilterStyle: nextOverlayFilterStyle } ) }
			/>
			{ overlayFilterStyle !== 'none' && <RangeControl
				label={ __( 'Overlay Filter Strength', '__plugin_txtd' ) }
				value={ overlayFilterStrength }
				onChange={ ( nextOverlayFilterStrength ) => setAttributes( { overlayFilterStrength: nextOverlayFilterStrength } ) }
				min={ 0 }
				max={ 100 }
				step={ 10 }
			/> }
		</Fragment>
	);
};

const ColorControls = function( props ) {
	const {
		attributes: {
			contentColor,
		},
		setAttributes,
	} = props;

	return <BaseControl label={ __( 'Content Color', '__plugin_txtd' ) }>
				<ColorPalette
				className="nova-hide-clear-color"
				value={ contentColor }
				colors={ colors }
				onChange={ ( nextContentColor ) => setAttributes( { contentColor: nextContentColor } ) }
				disableCustomColors
				clearable={ false }
				/>
	</BaseControl>
};

const ColorPanel = function( props ) {
	const {
		attributes: {
			contentColor,
		},
		setAttributes,
	} = props;

	return (
		<PanelColorSettings
			className="nova-hide-clear-color"
			title={ __( 'Color Settings', '__plugin_txtd' ) }
			colorSettings={ [
				{
					value: contentColor,
					onChange: ( nextContentColor ) => setAttributes( { contentColor: nextContentColor } ),
					label: __( 'Content Color', '__plugin_txtd' ),
				},
			] }
			colors={ colors }
			initialOpen={ false }>
			<OverlayControls { ...props } />
		</PanelColorSettings>
	);
};

const ColorToolbar = function( props ) {
	return (
		<Toolbar className="pixelgrade-hero-block-toolbar">
			<Dropdown
				position="bottom"
				className="pixelgrade-hero-block-toolbar-dropdown"
				contentClassName="components-nova--popover"
				renderToggle={ ( { isOpen, onToggle } ) => (
					<IconButton
						onClick={ onToggle }
						icon={ icons.invert }
						aria-expanded={ isOpen }
						label={ __( 'Colors', '__plugin_txtd' ) }
						labelPosition="bottom"
					/>
				) }
				focusOnMount={ false }
				renderContent={ () => (
					<Fragment>
						<ColorControls { ...props } />
						<OverlayControls { ...props } />
					</Fragment>
				) }
			/>
		</Toolbar>
	);
};

export {
	ColorControls,
	ColorPanel,
	ColorToolbar,
	OverlayControls,
};
