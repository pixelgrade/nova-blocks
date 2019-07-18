import withParallax from '../../components/with-parallax';

const {
	Component,
} = wp.element;

class SlideshowBackground extends Component {
	render() {
		const {
			attributes: {
				overlayFilterStyle,
				overlayFilterStrength,
			}
		} = this.props;

		const styles = {
			opacity: 1
		};

		if ( overlayFilterStyle !== 'none' ) {
			styles.opacity = 1 - overlayFilterStrength / 100
		}

		return (
			<div className="nova-slideshow__background" style={ this.props.style }>
				<img className="nova-slideshow__media" src={ this.props.previewImage.sizes.large.url } alt="" style={ styles } />
			</div>
		)
	}
}

export default withParallax( SlideshowBackground );
