/**
 * Internal dependencies
 */
const HeroBackground = function( props ) {

	const {
		attributes: {
			media,
		}
	} = props;

	return (
    <div className="novablocks-hero__background">
      { !! media && media.type === 'image' && typeof media.sizes !== 'undefined' &&
        <img className="novablocks-hero__media" src={ media.sizes.full.url } alt={ media.alt } style={ props?.doppler?.style } /> }
      { !! media && media.type === 'video' &&
        <video muted autoPlay loop playsInline className="novablocks-hero__media" style={ props?.doppler?.style } src={ media.url } /> }
    </div>
	);
};

export default HeroBackground;
