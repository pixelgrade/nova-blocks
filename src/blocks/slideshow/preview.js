/**
 * Internal dependencies
 */
import SlideshowBackground from './background';
import { GalleryPlaceholder } from '../../components';

/**
 * WordPress dependencies
 */
const {
	Component,
	Fragment,
} = wp.element;

const SlideshowPreview = class extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight,
		};
	}

	componentDidMount() {
		window.addEventListener('resize', this.updateDimensions.bind( this ) );
		this.updateDimensions();
	}

	updateDimensions() {
		if ( !this.container ) {
			return;
		}

		this.setState( {
			dimensions: {
				width: this.container.offsetWidth,
				height: this.container.offsetHeight,
			},
		} );
	}

	renderContent() {
		const {
			attributes: {
				// layout
				contentPadding,
				contentPaddingCustom,
				contentWidth,
				contentWidthCustom,
				minHeight,
				// alignment
				verticalAlignment,
				horizontalAlignment,
				// colors
				contentColor,
				overlayFilterStyle,
				// media
				galleryImages,
			},
			previewImage,
			className,
		} = this.props;

		const classes = [
			className,
			'novablocks-slideshow is-ready',
			`novablocks-u-valign-${ verticalAlignment }`,
			`novablocks-u-halign-${ horizontalAlignment }`,
			`novablocks-u-spacing-${ contentPadding }`,
			`novablocks-u-content-width-${ contentWidth }`,
			`novablocks-u-background`,
			`novablocks-u-background-${ overlayFilterStyle }`,
		];

		const styles = {
			slideshow: { color: contentColor },
			content: {},
			foreground: {},
		};

		if ( contentPadding === 'custom' ) {
			styles.foreground.paddingTop = `${ contentPaddingCustom }%`;
			styles.foreground.paddingBottom = `${ contentPaddingCustom }%`;
		}

		if ( contentWidth === 'custom' ) {
			styles.content.maxWidth = `${ contentWidthCustom }%`;
		}

		let maxAspectRatio = 0;
		let mediaMinHeight = 0;

		galleryImages.map( ( image ) => {
			if ( !! image.sizes && !! image.sizes.large && !! image.sizes.large.width ) {
				const aspectRatio = image.sizes.large.width / image.sizes.large.height;
				maxAspectRatio = aspectRatio > maxAspectRatio ? aspectRatio : maxAspectRatio;
				mediaMinHeight = this.state.dimensions.width / maxAspectRatio;
			}
			return true;
		} );

		let attributesHeight = this.props.parallax.state.scrollContainerHeight * minHeight / 100;

		styles.slideshow.minHeight = Math.max( attributesHeight, mediaMinHeight, maxAspectRatio ) + 'px';

		return (
			<Fragment>
				{ !! galleryImages.length && <div className={ classes.join( ' ' ) } style={ styles.slideshow }>
					<div className="novablocks-slideshow__slider">
						<div className="novablocks-slideshow__slide">
							{ previewImage && <Fragment>
								<SlideshowBackground { ...this.props } />
								<div className="novablocks-slideshow__content novablocks-u-content-padding" style={ styles.foreground }>
									<div className="novablocks-u-content-align">
										<div className="novablocks-u-content-width" style={ styles.content }>
											{ !! previewImage.title && !! previewImage.title.rendered && <h2>{ previewImage.title.rendered }</h2> }
											{ !! previewImage.caption && <p>{ previewImage.caption }</p> }
										</div>
									</div>
								</div>
							</Fragment> }
						</div>
					</div>
					<div className="novablocks-slideshow__controls">
						<div className="novablocks-slideshow__arrow novablocks-slideshow__arrow--prev novablocks-slideshow__arrow--disabled" onClick={ this.props.onPrevArrowClick }></div>
						<div className="novablocks-slideshow__arrow novablocks-slideshow__arrow--next novablocks-slideshow__arrow--disabled" onClick={ this.props.onNextArrowClick }></div>
					</div>
				</div> }
				{ ! galleryImages.length &&
					<Fragment>
						<GalleryPlaceholder { ...this.props } />
						<div className="novablocks-slideshow__controls">
							<div className="novablocks-slideshow__arrow novablocks-slideshow__arrow--prev novablocks-slideshow__arrow--disabled"></div>
							<div className="novablocks-slideshow__arrow novablocks-slideshow__arrow--next novablocks-slideshow__arrow--disabled"></div>
						</div>
					</Fragment> }
			</Fragment>
		);
	}

	render() {
		const { dimensions } = this.state;
		return (
			<div ref={ ( el ) => ( this.container = el ) }>
				{ dimensions && this.renderContent() }
			</div>
		);
	}
};

export default SlideshowPreview;
