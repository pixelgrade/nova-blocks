const {
	Component,
	Fragment,
} = wp.element;

export default class SlideshowPreview extends Component {

	render() {

		const {
			attributes: {
				// layout
				contentPadding,
				contentPaddingCustom,
				contentWidth,
				contentWidthCustom,
				applyMinimumHeightBlock,
				// alignment
				verticalAlignment,
				horizontalAlignment,
				// colors
				contentColor,
				overlayFilterStyle,
				overlayFilterStrength,
				// media
				galleryImages
			},
			previewImage,
			className
		} = this.props;

		const classes = [
			className,
			'nova-slideshow',
			`nova-u-valign-${verticalAlignment}`,
			`nova-u-halign-${horizontalAlignment}`,
			`nova-u-spacing-${contentPadding}`,
			`nova-u-content-width-${contentWidth}`,
			`nova-u-background`,
			`nova-u-background-${overlayFilterStyle}`
		]

		const styles = {
			slideshow: { color: contentColor },
			image: {}
		}

		if ( overlayFilterStyle !== 'none' ) {
			styles.image.opacity = 1 - overlayFilterStrength / 100
		}

		if ( !! applyMinimumHeightBlock ) {
			styles.slideshow.minHeight = minHeight + 'vh'
		}

		return (
			<div className={ classes.join(' ') } style={ styles.slideshow }>
				<div className="nova-slideshow__slider">
					<div className="nova-slideshow__slide">
						{ previewImage && <Fragment>
							<img className="nova-slideshow__media" src={ previewImage.sizes.large.url } alt="" style={ styles.image } />
							<div className="nova-slideshow__content nova-u-content-padding">
								<div className="nova-u-content-align">
									<div className="nova-u-content-width">
										<h2>{ previewImage.alt }</h2>
										<p>{ previewImage.caption }</p>
									</div>
								</div>
							</div>
						</Fragment> }
					</div>
				</div>
				<div className="nova-slideshow__controls">
					<div className="nova-slideshow__arrow nova-slideshow__arrow--prev" onClick={ this.props.onPrevArrowClick }></div>
					<div className="nova-slideshow__arrow nova-slideshow__arrow--next" onClick={ this.props.onNextArrowClick }></div>
				</div>
			</div>
		)
	}
}
