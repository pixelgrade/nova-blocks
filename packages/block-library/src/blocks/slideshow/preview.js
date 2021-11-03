/**
 * WordPress dependencies
 */
import { Component, Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { GalleryPlaceholder } from '@novablocks/block-editor';

import SlideshowBackground from './background';

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
		if ( ! this.container ) {
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

		const { attributes, previewImage } = this.props;
    const { galleryImages, minHeightFallback } = attributes;

		let maxAspectRatio = 0;
		let mediaMinHeight = 0;

		galleryImages.forEach( image => {
			const imageSize = image?.sizes?.full;
			const aspectRatio = !! imageSize ? ( imageSize.width / imageSize.height ) : 0;
			maxAspectRatio = aspectRatio > maxAspectRatio ? aspectRatio : maxAspectRatio;
			mediaMinHeight = this.state.dimensions.width / maxAspectRatio;
		} );

		const minHeight = Math.max( mediaMinHeight, minHeightFallback );

		return (
			<Fragment>
				{ !! galleryImages.length && <div style={ { minHeight: minHeight } }>
					<div className="novablocks-slideshow__slider">
						<div className="novablocks-slideshow__slide">
							{ previewImage && <Fragment>
								<SlideshowBackground { ...this.props } />
								<div className="novablocks-slideshow__foreground novablocks-doppler__foreground novablocks-u-content-padding novablocks-u-content-align">
									<div
										className="novablocks-slideshow__inner-container"
										dangerouslySetInnerHTML={ {
											__html:
												( typeof previewImage.title === 'string' && `<h2>${ previewImage.title }</h2>` || '' ) +
												( typeof previewImage.caption === 'string' && previewImage.caption || '' )
										} }>
									</div>
								</div>
							</Fragment> }
						</div>
					</div>
					{ galleryImages.length > 1 && <div className="novablocks-slideshow__controls">
						<div className="novablocks-slideshow__arrow novablocks-slideshow__arrow--prev novablocks-slideshow__arrow--disabled" onClick={ this.props.onPrevArrowClick }></div>
						<div className="novablocks-slideshow__arrow novablocks-slideshow__arrow--next novablocks-slideshow__arrow--disabled" onClick={ this.props.onNextArrowClick }></div>
					</div> }
				</div> }
				{ ! galleryImages.length && <GalleryPlaceholder { ...this.props } /> }
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
