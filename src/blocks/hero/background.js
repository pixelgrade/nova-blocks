import withParallax from '../../components/with-parallax';

const HeroBackground = function( props ) {
	const {
		attributes: {
			overlayFilterStyle,
			overlayFilterStrength,
			media
		},
		style
	} = props;

	const styles = {
		opacity: 1
	};

	if ( overlayFilterStyle !== 'none' ) {
		styles.opacity = 1 - overlayFilterStrength / 100
	}

	return (
		<div className='nova-hero__background' style={ style }>
			{media.type === 'image' && typeof media.sizes !== 'undefined'
			 && <img className='nova-hero__media' src={media.sizes.full.url} style={styles}/>}
			{media.type === 'video'
			 && <video muted autoPlay loop className='nova-hero__media' src={media.url} style={styles}/>}
		</div>
	)
};

export default withParallax( HeroBackground );