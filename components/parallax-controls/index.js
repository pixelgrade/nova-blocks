const { __ } = wp.i18n;

const {
	Component,
	Fragment
} = wp.element;

const {
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
} = wp.components;

export default class ParallaxControls extends Component {
	render() {

		const {
			attributes: {
				// parallax
				enableParallax,
				parallaxAmount,
				parallaxCustomAmount,
			},
			setAttributes
		} = this.props;

		return (
			<PanelBody title={ __( 'Parallax', '__plugin_txtd' ) } initialOpen={ false }>
				<ToggleControl
					label={ __( 'Enable Parallax Scrolling', '__plugin_txtd' ) }
					checked={ enableParallax }
					onChange={ () => setAttributes( { enableParallax: ! enableParallax } ) }
				/>
				{ !! enableParallax &&
				  <SelectControl
					  label={ __( 'Parallax Orbital Speed', '__plugin_txtd' ) }
					  value={parallaxAmount}
					  onChange={ parallaxAmount => {

						  if ( parallaxAmount === 'custom' ) {
							  setAttributes( { parallaxAmount } );
						  } else {
							  setAttributes( {
								  parallaxAmount: parallaxAmount,
								  parallaxCustomAmount: parseInt( parallaxAmount, 10 )
							  } );
						  }
					  } }
					  options={[
						  {
							  label: __( 'Fast as Mercure', '__plugin_txtd' ),
							  value: 20
						  }, {
							  label: __( 'Natural as Earth', '__plugin_txtd' ),
							  value: 50
						  }, {
							  label: __( 'Slow as Neptune', '__plugin_txtd' ),
							  value: 70
						  }, {
							  label: __( 'Custom', '__plugin_txtd' ),
							  value: 'custom'
						  }
					  ]}
					  help={ __('The speed at which the parallax effect runs.', '__plugin_txtd') }
				  />
				}
				{ !! enableParallax && 'custom' === parallaxAmount && <RangeControl
					value={ parallaxCustomAmount }
					onChange={ parallaxCustomAmount => setAttributes( { parallaxCustomAmount } ) }
					min={10}
					max={100}
					step={10}
					help={ __('It starts from 0 when the image will keep with the content (no parallax) up to 100 when the image appears fixed in place.', '__plugin_txtd' )}
				/> }
			</PanelBody>
		)
	}
}
