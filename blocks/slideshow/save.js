const { __ } = wp.i18n;

const {
	Component,
	Fragment
} = wp.element;

const {
	InnerBlocks
} = wp.blockEditor;

export default class Save extends Component {

	constructor() {
		super( ...arguments );
	}

	render( {
		attributes: {
			slideshowType,
			galleryImages,
			// layout
			contentPadding,
			contentPaddingCustom,
			contentWidth,
			contentWidthCustom,
			minHeight,
			// alignment
			verticalAlignment,
			horizontalAlignment,
			// parallax
			enableParallax,
			parallaxAmount,
			parallaxCustomAmount,
			// colors
			contentColor,
			overlayFilterStyle,
			overlayFilterStrength
		},
		className,
		setAttributes
	} ) {

		const styles = {
			slideshow: {
				color: contentColor,
			},
			foreground: {

			},
			content: {

			},
			image: {

			}
		}

		if ( contentPadding === 'custom' ) {
			styles.foreground.padding = contentPaddingCustom
		}

		if ( contentWidth === 'custom' ) {
			styles.content.maxWidth = `${contentWidthCustom}%`
		}

		if ( overlayFilterStyle !== 'none' ) {
			styles.image.opacity = 1 - overlayFilterStrength / 100
		}

		const classes = [
			className,
			'nova-slideshow',
			`nova-u-valign-${verticalAlignment}`,
			`nova-u-halign-${horizontalAlignment}`,
			`nova-u-spacing-${contentPadding}`,
			`nova-u-content-width-${contentWidth}`,
			`nova-u-background`,
			`nova-u-background-${overlayFilterStyle}`,
			'alignfull'
		]

		if ( !! enableParallax ) {
			classes.push( 'nova-slideshow--parallax' );
		}

		let actualParallaxAmount = parallaxAmount === 'custom' ? parallaxCustomAmount : parallaxAmount;
		actualParallaxAmount = Math.max( Math.min(1, actualParallaxAmount / 100 ), 0 );

		return (
			<div className={classes.join( ' ' )} style={styles.slideshow} data-min-height={ minHeight }>
				<div className="nova-slideshow__mask">
					<div className="nova-slideshow__slider" data-rellax-amount={ actualParallaxAmount }>
						{ galleryImages.map( image => {
							return (
								<div className="nova-slideshow__slide">
									<div className="nova-slideshow__background nova-u-background">
										<img
											className="nova-slideshow__media"
											src={ image.sizes.large.url }
											style={ styles.image }
											data-width={ image.sizes.large.width }
											data-height={ image.sizes.large.height }
										/>
									</div>
									<div className="nova-slideshow__foreground">
										<div className="nova-slideshow__content nova-u-content-padding">
											<div className="nova-u-content-align">
												<div className="nova-slideshow__inner-container nova-u-content-width">
													<h2>{ image.alt }</h2>
													<p>{ image.caption }</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							)
						} ) }
					</div>
				</div>
			</div>
		)
	}
}
