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
			// alignment
			verticalAlignment,
			horizontalAlignment,
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

//		if ( !! applyMinimumHeightBlock ) {
//			styles.slideshow.minHeight = minHeight + 'vh'
//		}

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
			`nova-u-background-${overlayFilterStyle}`
		]

//		const settings = wp.data.select( 'core/block-editor' ).getSettings();
//		if ( settings.alignWide ) {
			classes.push( 'alignfull' );
//		}

		return (
			<div className={classes.join( ' ' )} style={styles.slideshow}>
				<div className="nova-slideshow__slider">
					{ galleryImages.map( image => {
						return (
							<div className="nova-slideshow__slide">
								<div className="nova-slideshow__background nova-u-background">
									<img className="nova-slideshow__media" src={ image.sizes.large.url } style={ styles.image } />
								</div>
								<div className="nova-slideshow__content nova-u-content-padding">
									<div className="nova-u-content-align">
										<div className="nova-u-content-width">
											<h2>{ image.alt }</h2>
											<p>{ image.caption }</p>
										</div>
									</div>
								</div>
							</div>
						)
					} ) }
				</div>
			</div>
		)
	}
}
