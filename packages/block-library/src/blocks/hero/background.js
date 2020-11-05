/**
 * Internal dependencies
 */

const HeroBackground = function( props ) {
	const {
		attributes: {
			overlayFilterStyle,
			overlayFilterStrength,
			media,
		}
	} = props;

	const styles = {
		...props.parallax.style,
		opacity: 1,
	};

	if ( overlayFilterStyle !== 'none' ) {
		styles.opacity = 1 - ( overlayFilterStrength / 100 );
	}

	return (
		<div className="novablocks-mask">
			<div className="novablocks-hero__background">
				{ !! media && media.type === 'image' && typeof media.sizes !== 'undefined' &&
				  <img className="novablocks-hero__media" src={ media.sizes.full.url } alt={ media.alt } style={ styles } /> }
				{ !! media && media.type === 'video' &&
				  <video muted autoPlay loop playsInline className="novablocks-hero__media" style={ styles } src={ media.url } /> }
			</div>
		</div>
	);
};

export default HeroBackground;
