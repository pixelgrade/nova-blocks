/**
 * Internal dependencies
 */
import { getIconSvg } from '../get-svg';

export { default as colorAttributes } from './attributes';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

import {
	Dropdown,
	Button,
	RangeControl,
	Toolbar,
} from '@wordpress/components';

const OverlayControls = function( props ) {
	const {
		attributes: {
			overlayFilterStrength,
		},
		setAttributes,
	} = props;

	return (
		<RangeControl
				label={ __( 'Overlay Filter Strength', '__plugin_txtd' ) }
				value={ overlayFilterStrength }
				onChange={ ( nextOverlayFilterStrength ) => setAttributes( { overlayFilterStrength: nextOverlayFilterStrength } ) }
				min={ 0 }
				max={ 100 }
				step={ 10 }
			/>
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
					<Button
						onClick={ onToggle }
						icon={ getIconSvg( 'invert' ) }
						aria-expanded={ isOpen }
						label={ __( 'Colors', '__plugin_txtd' ) }
					/>
				) }
				focusOnMount={ false }
				renderContent={ () => (
					<Fragment>
						<OverlayControls { ...props } />
					</Fragment>
				) }
			/>
		</Toolbar>
	);
};

export {
	ColorToolbar,
	OverlayControls,
};
