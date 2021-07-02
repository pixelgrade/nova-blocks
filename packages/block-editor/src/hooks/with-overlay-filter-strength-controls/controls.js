/**
 * Internal dependencies
 */
import { getIconSvg } from '../../components';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { BlockControls } from '@wordpress/block-editor';

import {
	Dropdown,
	Button,
	RangeControl,
	Toolbar,
} from '@wordpress/components';

const OverlayControls = ( props ) => {

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

const ColorToolbar = ( props ) => {

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
          <OverlayControls { ...props } />
				) }
			/>
		</Toolbar>
	);
};

const Controls = ( props ) => {

  return (
    <BlockControls>
      <ColorToolbar { ...props } />
    </BlockControls>
  );
}

export default Controls;
