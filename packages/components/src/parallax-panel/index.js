/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl, RadioControl, ToggleControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import withSettings from '../with-settings';

const ParallaxPanel = function( props ) {
	const {
		attributes: {
			// parallax
			enableParallax,
			parallaxAmount,
			parallaxCustomAmount,
			focalPoint
		},
		setAttributes,
		settings: {
			parallaxOptions,
		},
	} = props;

	return (
		<PanelBody title={ __( 'Parallax', '__plugin_txtd' ) } initialOpen={ false }>
			<ToggleControl
				label={ __( 'Enable Parallax Scrolling', '__plugin_txtd' ) }
				checked={ enableParallax }
				onChange={ () => setAttributes( { enableParallax: ! enableParallax } ) }
			/>
			{ !! enableParallax &&
				<RadioControl
					label={ __( 'Parallax Orbital Speed', '__plugin_txtd' ) }
					selected={ parallaxAmount }
					onChange={ ( nextParallaxAmount ) => {
						if ( nextParallaxAmount === 'custom' ) {
							setAttributes( {
								parallaxAmount: nextParallaxAmount,
							} );
						} else {
							setAttributes( {
								parallaxAmount: nextParallaxAmount,
								parallaxCustomAmount: parseInt( nextParallaxAmount, 10 )
							} );
						}
					} }
					options={ parallaxOptions }
					help={ __( 'The speed at which the parallax effect runs.', '__plugin_txtd' ) }
				/>
			}
			{ !! enableParallax && 'custom' === parallaxAmount &&
				<RangeControl
					value={ parallaxCustomAmount }
					onChange={ ( nextParallaxAmount ) => setAttributes( { parallaxCustomAmount: nextParallaxAmount } ) }
					min={ 10 }
					max={ 100 }
					step={ 10 }
					help={ __( 'It starts from 0 when the image will keep with the content (no parallax) up to 100 when the image appears fixed in place.', '__plugin_txtd' ) }
				/> }
		</PanelBody>
	);
};

export default withSettings( ParallaxPanel );
