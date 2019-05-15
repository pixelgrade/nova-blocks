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
			contentSpacing,
			parallaxAmount,
			enableParallax,
			verticalAlignment,
			horizontalAlignment,
			enableMinHeight,
			minHeight,
			foregroundColor,
			backgroundColor,
			backgroundOpacity,
			images
		},
		className,
		setAttributes
	} ) {

		const styles = {
			hero: {

			},
		}

		const classes = [
			'c-hero',
			`c-hero--v-align-${verticalAlignment}`,
			`c-hero--h-align-${horizontalAlignment}`,
			`c-hero--spacing-${contentSpacing}`,
			`c-hero--foreground-${foregroundColor}`,
			`c-hero--background-${backgroundColor}`
		]

		minHeight = enableMinHeight ? `${minHeight}vh` : 0;

		if ( !! enableParallax ) {
			classes.push( 'c-hero--parallax' );
		}

		const actualParallaxAmount = Math.max( Math.min(1, parallaxAmount / 100 ), 0 );

		return (
			<div className={classes.join( ' ' )} style={styles.hero}>
				<Fragment>
					<div className="c-hero__mask">
						<div className="c-hero__background" data-rellax-amount={actualParallaxAmount}>
							<div className="c-hero__slider">
								{ images.map( image => {
									return <div class="c-hero__slide">
										<img className="c-hero__image" src={image.sizes.large.url} style={{opacity: backgroundOpacity / 100}}/>
									</div>
								} ) }
							</div>
						</div>
					</div>
					<div className="c-hero__foreground" style={{minHeight}}>
						<div className="c-hero__content">
							<InnerBlocks.Content/>
						</div>
					</div>
				</Fragment>
			</div>
		)
	}
}
