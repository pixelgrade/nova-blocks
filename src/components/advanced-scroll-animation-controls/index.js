
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	Component,
	Fragment,
} = wp.element;

const {
	FocalPointPicker,
	PanelBody,
	RangeControl,
	ToggleControl,
} = wp.components;

class AdvancedScrollAnimationControls extends Component {

	render() {

		const {
			attributes,
			setAttributes
		} = this.props;

		const {
			media,
			focalPoint,
			initialBackgroundScale,
			finalFocalPoint,
			finalBackgroundScale,
			enableFocusPointsTransitions
		} = attributes;

		const parallaxFocalPointImage = media ? media.sizes.full : false;

		return (
			<PanelBody title={ __( 'Advanced scroll animation', '__plugin_txtd' ) }>
				<ToggleControl
					label={ __( 'Enable focus points transitions', '__plugin_txtd' ) }
					checked={ enableFocusPointsTransitions }
					onChange={ () => setAttributes( { enableFocusPointsTransitions: ! enableFocusPointsTransitions } ) }
				/>
				{
					parallaxFocalPointImage &&
					<Fragment>
						<FocalPointPicker
							url={ parallaxFocalPointImage.url }
							dimensions={ {
								width: parallaxFocalPointImage.width,
								height: parallaxFocalPointImage.height,
							} }
							value={ focalPoint }
							onChange={ focalPoint => setAttributes( { focalPoint } ) }
						/>
						<RangeControl
							value={ initialBackgroundScale }
							onChange={ ( initialBackgroundScale ) => setAttributes( { initialBackgroundScale } ) }
							min={ 1 }
							max={ 2 }
							step={ 0.01 }
						/>
						{
							enableFocusPointsTransitions &&
							<Fragment>
								<FocalPointPicker
									url={ parallaxFocalPointImage.url }
									dimensions={ {
										width: parallaxFocalPointImage.width,
										height: parallaxFocalPointImage.height,
									} }
									value={ finalFocalPoint }
									onChange={ finalFocalPoint => setAttributes( { finalFocalPoint } ) }
								/>
								<RangeControl
									value={ finalBackgroundScale }
									onChange={ ( finalBackgroundScale ) => setAttributes( { finalBackgroundScale } ) }
									min={ 1 }
									max={ 2 }
									step={ 0.01 }
								/>
							</Fragment>
						}
					</Fragment>
				}
			</PanelBody>
		);
	}
}

export default AdvancedScrollAnimationControls;
