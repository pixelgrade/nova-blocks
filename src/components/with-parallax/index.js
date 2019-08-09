import {debounce} from "../../utils";

const {
	Component
} = wp.element;

// Take in a component as argument WrappedComponent
const withParallax = function( WrappedComponent ) {

	// And return a new anonymous component
	return class extends Component {

		constructor() {
			super( ...arguments );

			this.state = {
				windowWidth: window.innerWidth,
				windowHeight: window.innerHeight,
				progress: 0.5,
			}

			this.updateHandler = this.updateDimensions.bind( this );
		}

		componentDidMount() {
			const scrollContainer = document.getElementsByClassName('edit-post-layout__content')[0];
			window.addEventListener("resize", this.updateHandler );
			scrollContainer.addEventListener("scroll", this.updateHandler );
			this.updateDimensions();

			wp.data.subscribe( this.updateHandler );
		}

		componentWillUnmount() {
			const scrollContainer = document.getElementsByClassName('edit-post-layout__content')[0];
			window.removeEventListener( "resize", this.updateHandler );
			scrollContainer.removeEventListener( "scroll", this.updateHandler );
		}

		updateDimensions() {
			const scrollContainer = document.getElementsByClassName('edit-post-layout__content')[0];

			if ( ! this.container ) {
				return;
			}

			const containerBox = this.container.getBoundingClientRect();
			const progress = ( this.state.windowHeight - containerBox.y ) / ( this.state.windowHeight + this.container.offsetHeight );
			const actualProgress = Math.max( Math.min( progress, 1 ), 0 );

			this.setState({
				windowWidth: window.innerWidth,
				windowHeight: window.innerHeight,
				scrollTop: scrollContainer.scrollTop,
				progress: actualProgress,
				dimensions: {
					width: this.container.offsetWidth,
					height: this.container.offsetHeight,
					top: containerBox.y,
				},
			});
		}

		getParallaxStyles() {

			const {
				attributes: {
					enableParallax,
					parallaxAmount,
					parallaxCustomAmount,
				}
			} = this.props;

			if ( ! enableParallax ) {
				return {};
			}

			let actualParallaxAmount = parallaxAmount === 'custom' ? parallaxCustomAmount : parseInt( parallaxAmount, 10 );
			actualParallaxAmount = Math.max( Math.min( 1, actualParallaxAmount / 100 ), 0 );

			const {
				dimensions,
				windowHeight,
				progress
			} = this.state;

			const newHeight = dimensions.height * (1 - actualParallaxAmount) + windowHeight * actualParallaxAmount;
			const scale = newHeight / dimensions.height;
			const offsetY = dimensions.height * ( 1 - scale ) / 2;
			const move = ( windowHeight + dimensions.height ) * ( progress - 0.5 ) * actualParallaxAmount;

			return {
				height: newHeight,
				transition: 'none',
				transform: 'translate(0,' + ( move + offsetY ) + 'px)'
			};
		}

		render() {

			return (
				<div className="nova-mask" ref={ el => ( this.container = el ) }>
					{ this.state.dimensions && <WrappedComponent { ...this.props } style={ this.getParallaxStyles() } /> }
				</div>
			)
		}
	}
}

export default withParallax;
