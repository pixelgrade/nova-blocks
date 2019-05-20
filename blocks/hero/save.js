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
			backgroundType,
			backgroundImage,
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
			hero: {
				color: contentColor,
			},
			foreground: {

			},
			content: {

			}
		}

		if ( !! applyMinimumHeightBlock ) {
			styles.hero.minHeight = minHeight + 'vh'
		}

		if ( contentPadding === 'custom' ) {
			styles.foreground.padding = contentPaddingCustom
		}

		if ( contentWidth === 'custom' ) {
			styles.content.maxWidth = `${contentWidthCustom}%`
		}

		if ( !! applyMinimumHeightBlock ) {
			styles.foreground.minHeight = `${minHeight}vh`;
		}

		const classes = [
			'c-hero',
			`c-hero--v-align-${verticalAlignment}`,
			`c-hero--h-align-${horizontalAlignment}`,
			`c-hero--spacing-${contentPadding}`,
			`c-hero--content-width-${contentWidth}`,
			`c-hero--background-${overlayFilterStyle}`
		]

		if ( !! enableParallax ) {
			classes.push( 'c-hero--parallax' );
		}

		const backgroundOpacity = 1 - overlayFilterStrength / 100;
		let actualParallaxAmount = parallaxAmount === 'custom' ? parallaxCustomAmount : parallaxAmount;

		actualParallaxAmount = Math.max( Math.min(1, actualParallaxAmount / 100 ), 0 )

		return (
			<div className={classes.join( ' ' )} style={styles.hero}>
				<div className="c-hero__mask">
					<div className="c-hero__background" data-rellax-amount={actualParallaxAmount}>
						<img className="c-hero__image" src={ backgroundImage } style={ { opacity: backgroundOpacity } }/>
					</div>
				</div>
				<div className="c-hero__foreground" style={styles.foreground}>
					<div className="c-hero__content-wrapper">
						<div className="c-hero__content" style={styles.content}><InnerBlocks.Content/></div>
						{ scrollIndicatorBlock && <a href="#" className="c-hero__indicator"></a> }
					</div>
				</div>
			</div>
		)
	}
}
