/**
 * Internal dependencies
 */
import { withDoppler } from '@novablocks/block-editor';

const SlideshowBackground = function( props ) {
	const {
		attributes: {
			overlayFilterStrength,
		},
		previewImage
	} = props;

	const focalPoint = previewImage.focalPoint || { x: 0.5, y: 0.5 };

	const styles = {
		opacity: 1,
		objectPosition: focalPoint.x * 100 + '% ' + focalPoint.y * 100 + '%',
	};

  Object.assign( styles, props?.parallax?.style );

	styles.opacity = 1 - ( overlayFilterStrength / 100 );

	const imageURL = previewImage?.sizes?.novablocks_large?.url ||
	                 previewImage?.sizes?.novablocks_huge?.url ||
	                 previewImage?.sizes?.large?.url ||
	                 previewImage?.sizes?.full?.url ||
	                 previewImage?.url;

	const videoURL = previewImage?.url;

	return (
    <div className="novablocks-slideshow__background">
      { previewImage.type !== 'video' && <img className="novablocks-slideshow__media" src={ imageURL } alt="" style={ styles } /> }
      { previewImage.type === 'video' && <video className="novablocks-slideshow__media" src={ videoURL } muted autoPlay loop playsInline style={ styles } /> }
    </div>
	);
};

export default withDoppler( SlideshowBackground );
