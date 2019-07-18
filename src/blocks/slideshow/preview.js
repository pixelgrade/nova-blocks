const {
	Component,
	Fragment,
} = wp.element;

import {
	GalleryPlaceholder
} from '../../components';

import SlideshowBackground from './background';

const {
	MediaUpload,
} = wp.blockEditor;

export default class SlideshowPreview extends Component {

	constructor() {
		super(...arguments);

		this.state = {
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight
		}
	}

	componentDidMount() {
		window.addEventListener("resize", this.updateDimensions.bind( this ) );
		this.updateDimensions();
	}

	updateDimensions() {
		this.setState({
			dimensions: {
				width: this.container.offsetWidth,
				height: this.container.offsetHeight,
			},
		});
	}

	renderContent() {

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
			'nova-slideshow is-ready',
			`nova-u-valign-${verticalAlignment}`,
			`nova-u-halign-${horizontalAlignment}`,
			`nova-u-spacing-${contentPadding}`,
			`nova-u-content-width-${contentWidth}`,
			`nova-u-background`,
			`nova-u-background-${overlayFilterStyle}`
		]

		const styles = {
			slideshow: { color: contentColor },
			content: {},
			foreground: {},
		}

		if ( contentPadding === 'custom' ) {
			styles.foreground.paddingTop = `${contentPaddingCustom}%`
			styles.foreground.paddingBottom = `${contentPaddingCustom}%`
		}

		if ( !! applyMinimumHeightBlock ) {
			styles.slideshow.minHeight = minHeight + 'vh'
		}

		if ( contentWidth === 'custom' ) {
			styles.content.maxWidth = `${contentWidthCustom}%`
		}

		let maxAspectRatio = 0;
		let mediaMinHeight = 0;
		let sliderWidth = 0;

		galleryImages.map( image => {
			if ( !! image.sizes && !! image.sizes.large && !! image.sizes.large.width ) {
				const aspectRatio = image.sizes.large.width / image.sizes.large.height;
				maxAspectRatio = aspectRatio > maxAspectRatio ? aspectRatio : maxAspectRatio;
				mediaMinHeight = this.state.dimensions.width / maxAspectRatio;
			}
		} );

		styles.slider = {
			minHeight: Math.max( mediaMinHeight, maxAspectRatio ) + 'px'
		}

		return (
			<Fragment>
				{ !! galleryImages.length && <div className={ classes.join(' ') } style={ styles.slideshow }>
					<div className="nova-slideshow__slider" style={ styles.slider }>
						<div className="nova-slideshow__slide">
							{ previewImage && <Fragment>
								<SlideshowBackground { ...this.props } />
								<div className="nova-slideshow__content nova-u-content-padding" style={ styles.foreground }>
									<div className="nova-u-content-align">
										<div className="nova-u-content-width" style={ styles.content }>
											{ !! previewImage.alt && <h2>{ previewImage.alt }</h2> }
											{ !! previewImage.caption && <p>{ previewImage.caption }</p> }
										</div>
									</div>
								</div>
							</Fragment> }
						</div>
					</div>
					<div className="nova-slideshow__controls">
						<div className="nova-slideshow__arrow nova-slideshow__arrow--prev nova-slideshow__arrow--disabled" onClick={this.props.onPrevArrowClick}></div>
						<div className="nova-slideshow__arrow nova-slideshow__arrow--next nova-slideshow__arrow--disabled" onClick={this.props.onNextArrowClick}></div>
					</div>
				</div> }
				{ ! galleryImages.length && <Fragment>
					 <GalleryPlaceholder {...this.props} />
					 <div className="nova-slideshow__controls">
						 <div className="nova-slideshow__arrow nova-slideshow__arrow--prev nova-slideshow__arrow--disabled"></div>
						 <div className="nova-slideshow__arrow nova-slideshow__arrow--next nova-slideshow__arrow--disabled"></div>
					 </div>
				 </Fragment> }
		    </Fragment>
		)
	}

	render() {
		const { dimensions } = this.state;
		return (
			<div ref={ el => ( this.container = el ) }>
				{ dimensions && this.renderContent() }
			</div>
		)
	}
}
