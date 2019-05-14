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
				minHeight: enableMinHeight ? minHeight + 'vh' : 0
			},
		}

		const classes = [
			'c-hero',
			`c-hero--v-align-${verticalAlignment}`,
			`c-hero--h-align-${horizontalAlignment}`,
			`c-hero--spacing-${contentSpacing}`,
			`c-hero--content-${foregroundColor}`,
			`c-hero--background-${backgroundColor}`
		]

		if ( !! enableParallax ) {
			classes.push( 'c-hero--parallax' );
		}

		const actualParallaxAmount = Math.max( Math.min(1, parallaxAmount / 100 ), 0 );

		const wrapperClasses = [
			'c-hero__content-wrapper',
		];

		if ( enableMinHeight ) {
			wrapperClasses.push( 'c-hero__layer' );
		}

		return (
			<div className={classes.join( ' ' )} style={styles.hero}>

				{ false && <div className="c-hero__slider c-hero__layer">
					{ images.map( ( image, index ) => {
						return <div class="c-hero__slide">
							<div className="c-hero__background-mask c-hero__layer">
								<div class="c-hero__background c-hero__layer" data-rellax-amount={actualParallaxAmount}>
									<img className="c-hero__image" src={image.sizes.large.url} style={styles.image} />
								</div>
							</div>
						</div>
						{ index === 0 && <div className={wrapperClasses.join( ' ' )}>
							<div className="c-hero__content">
								<InnerBlocks.Content />
							</div>
						</div> }
					} ) }
				</div> }

				<Fragment>
					<div className="c-hero__background-mask c-hero__layer">
						<div className="c-hero__background c-hero__layer" data-rellax-amount={actualParallaxAmount}>
							<div className="c-hero__slider c-hero__layer">
								{ images.map( image => {
									return <div class="c-hero__slide">
										<img className="c-hero__image" src={image.sizes.large.url} style={{opacity: backgroundOpacity / 100}}/>
									</div>
								} ) }
							</div>
						</div>
					</div>
					<div className={wrapperClasses.join( ' ' )}>
						<div className="c-hero__content">
							<InnerBlocks.Content/>
						</div>
					</div>
				</Fragment>

			</div>
		)
	}
}
