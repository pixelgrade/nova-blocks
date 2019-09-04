/**
 * Internal dependencies
 */
import { withParallaxContext } from '../../components/with-parallax';

const HeroBackground = function( props ) {
	const {
		attributes: {
			overlayFilterStyle,
			overlayFilterStrength,
			media,
		},
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
			<div className="novablocks-hero__background" style={ style }>
				{ media.type === 'image' && typeof media.sizes !== 'undefined' &&
					<img className="novablocks-hero__media" src={ media.sizes.full.url } style={ styles } alt={ media.alt } /> }
				{ media.type === 'video' &&
					<video muted autoPlay loop className="novablocks-hero__media" src={ media.url } style={ styles } /> }
			</div>
		</div>
	);
};

export default withParallaxContext( HeroBackground );
