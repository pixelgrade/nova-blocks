/**
 * Internal dependencies
 */
import SlideshowBackground from './background';
import { GalleryPlaceholder, getEditorScrollContainer } from '@novablocks/block-editor';

/**
 * WordPress dependencies
 */
import {
	Component,
	Fragment,
 } from '@wordpress/element';

import { getColorSignalClassnames } from "@novablocks/utils";

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

		const {
			attributes,
			previewImage,
			className,
		} = this.props;

    const {
      // layout
      contentPadding,
      contentPaddingCustom,
      contentWidth,
      contentWidthCustom,
      minHeight,

      // alignment
      contentPosition,

      // media
      galleryImages,
    } = attributes;

		const alignment = contentPosition.split( " " );
		const verticalAlignment = alignment[0];
		const horizontalAlignment = alignment[1];

		const classes = [
			className,
      'is-ready',
			'novablocks-slideshow',
			`novablocks-u-valign-${ verticalAlignment }`,
			`novablocks-u-halign-${ horizontalAlignment }`,
			`novablocks-u-spacing-${ contentPadding }`,
			`novablocks-u-content-width-${ contentWidth }`,
      getColorSignalClassnames( attributes, true )
    ];

		const styles = {
			slideshow: {},
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

		galleryImages.forEach( image => {
			const imageSize = image?.sizes?.full;
			const aspectRatio = !! imageSize ? ( imageSize.width / imageSize.height ) : 0;
			maxAspectRatio = aspectRatio > maxAspectRatio ? aspectRatio : maxAspectRatio;
			mediaMinHeight = this.state.dimensions.width / maxAspectRatio;
		} );

    const scrollContainer = getEditorScrollContainer();
		const attributesHeight = scrollContainer.offsetHeight * minHeight / 100;

		styles.slideshow.minHeight = Math.max( attributesHeight, mediaMinHeight, maxAspectRatio ) + 'px';

		return (
			<Fragment>
				{ !! galleryImages.length && <div className={ classes.join( ' ' ) } style={ styles.slideshow }>
					<div className="novablocks-slideshow__slider">
						<div className="novablocks-slideshow__slide">
							{ previewImage && <Fragment>
								<SlideshowBackground { ...this.props } />
								<div className="novablocks-slideshow__foreground novablocks-doppler__foreground novablocks-u-content-padding novablocks-u-content-align" style={ styles.foreground }>
									<div
										className="novablocks-slideshow__inner-container novablocks-u-content-width"
										style={ styles.content }
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
