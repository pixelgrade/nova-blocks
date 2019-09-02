/**
 * Internal dependencies
 */
import { withParallaxContext } from '../../components/with-parallax';

const SlideshowBackground = function( props ) {
	const {
		attributes: {
			overlayFilterStyle,
			overlayFilterStrength,
		},
		previewImage,
		style,
	} = props;

	const styles = {
		...props.parallax.style,
		opacity: 1,
	};

	if ( overlayFilterStyle !== 'none' ) {
		styles.opacity = 1 - ( overlayFilterStrength / 100 );
	}

	return (
		<div className="nova-mask">
			<div className="nova-slideshow__background" style={ style }>
				<img className="nova-slideshow__media" src={ previewImage.sizes.large.url } alt="" style={ styles } />
			</div>
		</div>
	);
};

export default withParallaxContext( SlideshowBackground );
