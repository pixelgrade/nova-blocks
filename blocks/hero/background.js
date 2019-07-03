import withParallax from '../../components/with-parallax';

const {
	Component,
} = wp.element;

class HeroBackground extends Component {
	render() {
		const {
			attributes: {
				overlayFilterStyle,
				overlayFilterStrength,
				media
			}
		} = this.props;

		const styles = {};

		if ( overlayFilterStyle !== 'none' ) {
			styles.opacity = 1 - overlayFilterStrength / 100
		}

		return (
			<div className='nova-hero__background' style={ this.props.style }>
				{media.type === 'image' && typeof media.sizes !== 'undefined'
				 && <img className='nova-hero__media' src={media.sizes.full.url} style={styles}/>}
				{media.type === 'video'
				 && <video muted autoPlay loop className='nova-hero__media' src={media.url} style={styles}/>}
			</div>
		)
	}
};

export default withParallax( HeroBackground );