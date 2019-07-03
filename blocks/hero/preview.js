const {
	Component,
} = wp.element;

const {
	InnerBlocks,
} = wp.blockEditor;

export default class HeroPreview extends Component {

	constructor() {
		super( ...arguments );

		this.state = {
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight,
			progress: 0.5,
		}
	}

	componentDidMount() {
		const scrollContainer = document.getElementsByClassName('edit-post-layout__content')[0];
		window.addEventListener("resize", this.updateDimensions.bind( this ) );
		scrollContainer.addEventListener("scroll", this.updateDimensions.bind( this ) );
		this.updateDimensions();
	}

	updateDimensions() {
		const scrollContainer = document.getElementsByClassName('edit-post-layout__content')[0];
		const containerBox = this.container.getBoundingClientRect();
		const progress = ( this.state.windowHeight - containerBox.y ) / ( this.state.windowHeight + this.container.offsetHeight );
		const actualProgress = Math.max( Math.min( progress, 1 ), 0 );

		this.setState({
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight,
			scrollTop: scrollContainer.scrollTop,
			progress: actualProgress,
			dimensions: {
				width: this.container.offsetWidth,
				height: this.container.offsetHeight,
				top: containerBox.y,
			},
		});
	}

	getParallaxStyles() {
		const {
			attributes: {
				parallaxAmount,
				parallaxCustomAmount
			}
		} = this.props;

		let actualParallaxAmount = parallaxAmount === 'custom' ? parallaxCustomAmount : parseInt( parallaxAmount, 10 );
		actualParallaxAmount = Math.max( Math.min( 1, actualParallaxAmount / 100 ), 0 );

		const {
			dimensions,
			windowHeight,
			progress
		} = this.state;

		const newHeight = dimensions.height * (1 - actualParallaxAmount) + windowHeight * actualParallaxAmount;
		const scale = newHeight / dimensions.height;
		const offsetY = dimensions.height * ( 1 - scale ) / 2;
		const move = ( windowHeight + dimensions.height ) * ( progress - 0.5 ) * actualParallaxAmount;

		return {
			height: newHeight,
			transition: 'none',
			transform: 'translate(0,' + ( move + offsetY ) + 'px)'
		};
	}

	renderPreview() {
		const {
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
				applyMinimumHeightBlock,
				// indicators
				scrollIndicatorBlock,
				// colors
				contentColor,
				overlayFilterStyle,
				overlayFilterStrength,
				// media
				media,
			},
			className,
		} = this.props;

		const classes = [
			className,
			'nova-hero',
			`nova-u-valign-${verticalAlignment}`,
			`nova-u-halign-${horizontalAlignment}`,
			`nova-u-spacing-${contentPadding}`,
			`nova-u-content-width-${contentWidth}`,
			`nova-u-background`,
			`nova-u-background-${overlayFilterStyle}`
		]

		const styles = {
			hero: {
				color: contentColor,
			},
			foreground: {},
			content: {},
			image: {}
		}

		if ( !! applyMinimumHeightBlock ) {
			styles.hero.minHeight = minHeight + 'vh'
		}

		if ( contentPadding === 'custom' ) {
			styles.foreground.paddingTop = `${contentPaddingCustom}%`
			styles.foreground.paddingBottom = `${contentPaddingCustom}%`
		}

		if ( contentWidth === 'custom' ) {
			styles.content.maxWidth = `${contentWidthCustom}%`
		}

		if ( overlayFilterStyle !== 'none' ) {
			styles.image.opacity = 1 - overlayFilterStrength / 100
		}

		styles.image = Object.assign(styles.image, this.getParallaxStyles());

		return (
			<div className={classes.join(' ')} style={styles.hero}>
				<div className='nova-hero__mask'>
					<div className='nova-hero__background'>
						{ media.type === 'image' && typeof media.sizes !== 'undefined'
						  && <img className='nova-hero__media' src={ media.sizes.full.url } style={ styles.image }/> }
						{ media.type === 'video'
						  && <video muted autoplay loop className='nova-hero__media' src={ media.url } style={ styles.image }/> }
					</div>
				</div>
				<div className='nova-hero__foreground nova-u-content-padding' style={ styles.foreground }>
					<div className='nova-u-content-align'>
						<div className='nova-hero__inner-container nova-u-content-width' style={ styles.content }>
							<InnerBlocks template={[
								[ 'core/heading', { content: 'This is a catchy title', align: 'center', level: 1 } ],
								[ 'core/paragraph', { content: 'A brilliant subtitle to explain its catchiness', align: 'center' } ],
								[ 'core/button', { text: 'Discover more', align: 'center' } ],
							]} />
						</div>
						{ scrollIndicatorBlock && <div className='nova-hero__indicator'></div> }
					</div>
				</div>
			</div>
		)
	}

	render() {
		return (
			<div ref={ el => ( this.container = el ) }>
				{ this.state.dimensions && this.renderPreview() }
			</div>
       )
	}
}