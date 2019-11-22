import { createContext } from 'react';

import ParallaxPanel from "../../components/parallax-panel";

import { findParents } from '../util';

/**
 * WordPress dependencies
 */
const {
	Component,
	Fragment,
} = wp.element;

const {
	InspectorControls
} = wp.blockEditor;

const ParallaxContext = createContext();

const withParallax = function( WrappedComponent ) {

	return class extends Component {

		constructor() {
			super( ...arguments );

			this.state = {
				windowWidth: window.innerWidth,
				windowHeight: window.innerHeight,
				progress: 0.5,
			};

			this.updateHandler = this.updateDimensions.bind( this );
			this.scrollContainer = this.getScrollContainer();
		}

		getScrollContainer() {
			const oldScrollContainer = document.getElementsByClassName( 'edit-post-layout__content' )[ 0 ];;
			const newScrollContainer = document.getElementsByClassName( 'edit-post-editor-regions__content' )[ 0 ];

			return oldScrollContainer || newScrollContainer;
		}

		componentDidMount() {
			window.addEventListener( 'resize', this.updateHandler );
			this.createBlockObservers();
			this.unsubscribeUpdate = wp.data.subscribe( this.updateHandler );

			if ( this.scrollContainer ) {
				this.scrollContainer.addEventListener( 'scroll', this.updateHandler );
			}

			this.updateDimensions();
		}

		createBlockObservers() {
			this.observers = findParents( this.container, '.wp-block' ).map( block => {
				const observer = new MutationObserver( movements => {
					movements.forEach( movement => {
						if ( 'style' === movement.attributeName ) {
							if ( movement.oldValue.includes( 'transform: translate3d' ) ) {
								this.updateDimensions();
							}
						}
					} );
				} );

				observer.observe( block, {
					attributes: true,
					attributeOldValue: true,
					childList: false,
					subtree: false,
				} );

				return observer;
			} );
		}

		componentWillUnmount() {
			window.removeEventListener( 'resize', this.updateHandler );
			this.observers.forEach( observer => observer.disconnect() );
			this.unsubscribeUpdate();

			if ( this.scrollContainer ) {
				this.scrollContainer.removeEventListener( 'scroll', this.updateHandler );
			}
		}

		updateDimensions() {

			if ( ! this.container || ! this.scrollContainer ) {
				return;
			}

			const containerBox = this.container.getBoundingClientRect();
			const containerBoxTop = containerBox.y || containerBox.top;
			const progress = ( this.state.windowHeight - containerBoxTop ) / ( this.state.windowHeight + this.container.offsetHeight );
			const actualProgress = Math.max( Math.min( progress, 1 ), 0 );

			this.setState( {
				windowWidth: window.innerWidth,
				windowHeight: window.innerHeight,
				scrollTop: this.scrollContainer.scrollTop,
				progress: actualProgress,
				dimensions: {
					width: this.container.offsetWidth,
					height: this.container.offsetHeight,
					top: containerBoxTop,
				},
			} );
		}

		getParallaxStyles() {

			if ( ! this.state.dimensions ) {
				return {};
			}

			const {
				attributes: {
					enableParallax,
					parallaxAmount,
					parallaxCustomAmount,
				},
			} = this.props;

			if ( ! enableParallax ) {
				return {};
			}

			let actualParallaxAmount = parallaxAmount === 'custom' ? parallaxCustomAmount : parseInt( parallaxAmount, 10 );
			actualParallaxAmount = Math.max( Math.min( 1, actualParallaxAmount / 100 ), 0 );

			const {
				dimensions,
				windowHeight,
				progress,
			} = this.state;

			const newHeight = ( dimensions.height * ( 1 - actualParallaxAmount ) ) + ( windowHeight * actualParallaxAmount );
			const scale = newHeight / dimensions.height;
			const offsetY = dimensions.height * ( 1 - scale ) / 2;
			const move = ( windowHeight + dimensions.height ) * ( progress - 0.5 ) * actualParallaxAmount;

			return {
				height: newHeight,
				transition: 'none',
				transform: 'translate(0,' + ( move + offsetY ) + 'px)',
			};
		}

		render() {
			return (
				<Fragment>
					<div ref={ ( el ) => ( this.container = el ) }>
						<ParallaxContext.Provider value={ { style: this.getParallaxStyles() } }>
							<WrappedComponent { ...this.props } />
						</ParallaxContext.Provider>
					</div>
					<InspectorControls>
						<ParallaxPanel { ...this.props } />
					</InspectorControls>
				</Fragment>
			);
		}
	};
};

const withParallaxContext = function( WrappedComponent ) {
	return class extends Component {
		render() {
			return(
				<ParallaxContext.Consumer>
					{ context => (
						<WrappedComponent
							parallax={ context }
							{ ...this.props }
						/>
					) }
				</ParallaxContext.Consumer>
			)
		}
	}
}

export { withParallaxContext };

export default withParallax;
