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
			// media
			media
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

			},
			image: {

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

		if ( overlayFilterStyle !== 'none' ) {
			styles.image.opacity = 1 - overlayFilterStrength / 100
		}

		const classes = [
			'nova-hero',
			`nova-u-valign-${verticalAlignment}`,
			`nova-u-halign-${horizontalAlignment}`,
			`nova-u-spacing-${contentPadding}`,
			`nova-u-content-width-${contentWidth}`,
			`nova-u-background`,
			`nova-u-background-${overlayFilterStyle}`
		]

//		const settings = wp.data.select( 'core/block-editor' ).getSettings();
//		if ( settings.alignWide ) {
			classes.push( 'alignfull' );
//		}

		if ( !! enableParallax ) {
			classes.push( 'nova-hero--parallax' );
		}

		const backgroundOpacity = 1 - overlayFilterStrength / 100;
		let actualParallaxAmount = parallaxAmount === 'custom' ? parallaxCustomAmount : parallaxAmount;
		actualParallaxAmount = Math.max( Math.min(1, actualParallaxAmount / 100 ), 0 );

		return (
			<div className={classes.join( ' ' )} style={styles.hero}>
				<div className="nova-hero__mask">
					<div className="nova-hero__background" data-rellax-amount={actualParallaxAmount}>
						{ media.type === "image" && typeof media.sizes !== "undefined"
						  && <img className="nova-hero__media" src={ media.sizes.full.url } style={ styles.image }/> }
						{ media.type === "video"
						  && <video muted autoplay loop className="nova-hero__media" src={ media.url } style={ styles.image }/> }
					</div>
				</div>
				<div className="nova-hero__foreground nova-u-content-padding" style={styles.foreground}>
					<div className="nova-u-content-align">
						<div className="nova-hero__content nova-u-content-width" style={styles.content}>
							<InnerBlocks.Content/>
						</div>
						{ scrollIndicatorBlock && <a href="#" className="nova-hero__indicator"></a> }
					</div>
				</div>
			</div>
		)
	}
}
