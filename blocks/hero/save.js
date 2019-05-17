const { __ } = wp.i18n;

const {
	Component,
	Fragment
} = wp.element;

const {
	InnerBlocks
} = wp.blockEditor;

export default class Edit extends Component {

	constructor() {
		super( ...arguments );
	}

	render( {
		attributes: {
			// layout
			contentPadding,
			contentPaddingCustom,
			contentWidth,
			contentWidthCustom,
			// alignment
			verticalAlignment,
			horizontalAlignment,
			// height
			minHeight,
			applyMinimumHeight,
			applyMinimumHeightBlock,
			scrollIndicator,
			scrollIndicatorBlock,
			// parallax
			enableParallax,
			parallaxAmount,
			parallaxCustomAmount,
			// colors
			contentColor,
			overlayFilterStyle,
			overlayFilterStrength,
			// images
			images
		},
		className,
		setAttributes
	} ) {

		const styles = {
			foreground: {
				color: contentColor,
			},
			content: {
				padding: `${contentPaddingCustom}px`,
				maxWidth: `${contentWidthCustom}%`,
			},
		}

		if ( !! applyMinimumHeightBlock ) {
			styles.foreground.minHeight = `${minHeight}vh`;
		}

		const classes = [
			'c-hero',
			`c-hero--v-align-${verticalAlignment}`,
			`c-hero--h-align-${horizontalAlignment}`,

			`c-hero--padding-${contentPadding}`,
			`c-hero--width-${contentWidth}`,

			`c-hero--background-${overlayFilterStyle}`
		]

		if ( !! enableParallax ) {
			classes.push( 'c-hero--parallax' );
		}

		const actualParallaxAmount = Math.max( Math.min(1, parallaxCustomAmount / 100 ), 0 );
		const backgroundOpacity = 1 - overlayFilterStrength / 100;

		return (
			<div className={classes.join( ' ' )} style={styles.hero}>
				<div className="c-hero__mask">
					<div className="c-hero__background" data-rellax-amount={actualParallaxAmount}>
						<div className="c-hero__slider" style={{opacity: backgroundOpacity}}>
							{images.map( image => {
								return <div class="c-hero__slide">
									<img className="c-hero__image" src={image.sizes.large.url}/>
								</div>
							} )}
						</div>
					</div>
				</div>
				<div className="c-hero__foreground" style={styles.foreground}>
					<div className="c-hero__content" style={styles.content}>
						<InnerBlocks.Content/>
					</div>
					{ scrollIndicatorBlock && <div className="c-hero__indicator">
						Scroll Down
					</div> }
				</div>
			</div>
		)
	}
}
