/**
 * Internal dependencies
 */
const SlideshowBackground = function( props ) {
	const {
		attributes: {
			overlayFilterStyle,
			overlayFilterStrength,
		},
		previewImage
	} = props;

	const focalPoint = previewImage.focalPoint || { x: 0.5, y: 0.5 };

	const styles = {
		...props.parallax.style,
		opacity: 1,
		objectPosition: focalPoint.x * 100 + '% ' + focalPoint.y * 100 + '%',
	};

	if ( overlayFilterStyle !== 'none' ) {
		styles.opacity = 1 - ( overlayFilterStrength / 100 );
	}

	return (
		<div className="novablocks-mask">
			<div className="novablocks-slideshow__background">
				<img className="novablocks-slideshow__media" src={ previewImage.sizes.large.url } alt="" style={ styles } />
			</div>
		</div>
	);
};

export default SlideshowBackground;
