/**
 * Internal dependencies
 */
import Slide from './slide';

import Slider from 'react-slick';

/**
 * WordPress dependencies
 */
import {
	Component,
	Fragment,
 } from '@wordpress/element';

const SLIDER_SETTINGS = {
  customPaging: function(i) {
    return (
      <a> {i + 1}</a>
    );
  },
  infinite: true,
  arrows: true,
  dots: true,
  speed: 0
};

const SLIDER_CLASS = "novablocks-slideshow__slider";

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
        source
			},
			className,
      posts
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
			slideshow: {
				'--novablocks-slideshow-text-color': contentColor,
			},
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

		let attributesHeight = this.props.parallax.state.scrollContainerHeight * minHeight / 100;

		styles.slideshow.minHeight = Math.max( attributesHeight, mediaMinHeight, maxAspectRatio ) + 'px';

		return (
			<Fragment>
          <div className={ classes.join( ' ' ) } style={ styles.slideshow }>
            <GallerySlider {...this.props} />
            <PostsSlider {...this.props} />
          </div>
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

const getSlidesFromPosts = ( posts, props ) => {
  return (
    posts.map( ( post, id ) => {
      return (
        <Slide id={id} className="novablocks-slideshow__slide" {...props} image={ wp.data.select( 'core').getMedia(post.featured_media) } post={ post } type="post"/>
      )
    } )
  )
};

const getSlidesFromGalleryImages = ( gallery, props ) => {
  return (
    gallery.map( ( image, id ) => {
      return (
        <Slide id={id} className="novablocks-slideshow__slide" {...props} type="custom" image={image}/>
      )
    } )
  )
};

const GallerySlider = ( props ) => {

  const {
    attributes
  } = props;

  const {
    galleryImages,
    source
  } = attributes;

  if ( source !== 'custom' ) {
    return null;
  }

  return (
    <Slider className={SLIDER_CLASS} {...SLIDER_SETTINGS}>
      { getSlidesFromGalleryImages( galleryImages, {...props} ) }
    </Slider>
  )
}

const PostsSlider = ( props ) => {

  const {
    attributes,
    posts
  } = props;

  const {
    source
  } = attributes;

  if ( !posts || source !== 'post' ) {
    return null;
  }

  return (
    <Slider className={SLIDER_CLASS} {...SLIDER_SETTINGS}>
      { getSlidesFromPosts( posts, {...props} ) }
    </Slider>
  );
}
