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

	const imageURL = previewImage?.sizes?.large?.url || previewImage?.sizes?.full?.url;
	const videoURL = previewImage?.url;

	return (
		<div className="novablocks-mask">
			<div className="novablocks-slideshow__background">
				{ previewImage.type !== 'video' && <img className="novablocks-slideshow__media" src={ imageURL } alt="" style={ styles } /> }
				{ previewImage.type === 'video' && <video className="novablocks-slideshow__media" src={ videoURL } muted autoPlay loop playsInline style={ styles } /> }
			</div>
		</div>
	);
};

export default SlideshowBackground;
