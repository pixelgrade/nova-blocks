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
			this.observers = [];

			findParents( this.container, '.wp-block' ).map( block => {
				if ( window.MutationObserver ) {
					const mutationObserver = new MutationObserver( movements => {
						movements.forEach( movement => {
							if ( 'style' === movement.attributeName ) {
								if ( movement.oldValue && movement.oldValue.includes( 'transform: translate3d' ) ) {
									this.updateDimensions();
								}
							}
						} );
					} );

					mutationObserver.observe( block, {
						attributes: true,
						attributeOldValue: true,
						childList: false,
						subtree: false,
					} );

					this.observers.push( mutationObserver );
				}

				if ( window.ResizeObserver ) {
					const resizeObserver = new ResizeObserver( () => {
						this.updateDimensions();
					} );

					resizeObserver.observe( block );

					this.observers.push( resizeObserver );
				}
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
			const containerWidth = this.container.offsetWidth;
			const containerHeight = this.container.offsetHeight;
			const scrollTop = this.scrollContainer.scrollTop;

			this.setState( {
				windowWidth: window.innerWidth,
				windowHeight: window.innerHeight,
				scrollTop,
				dimensions: {
					width: containerWidth,
					height: containerHeight,
					top: containerBox.top,
					left: containerBox.left,
					bottom: containerBox.top + containerHeight,
					right: containerBox.left + containerWidth,
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
					initialBackgroundScale,
					finalBackgroundScale,
					focalPoint,
					finalFocalPoint,

					enableFocusPointsTransitions,
					followThroughStart,
					followThroughEnd,
				},
			} = this.props;

			if ( ! enableParallax ) {
				return {};
			}

			const {
				dimensions,
				windowHeight,
				scrollTop,
			} = this.state;

			let newParallaxLength = dimensions.height - windowHeight;
			let newParallaxStart = -1 * dimensions.top;

			if ( followThroughStart ) {
				newParallaxStart += windowHeight;
				newParallaxLength += windowHeight;
			}

			if ( followThroughEnd ) {
				newParallaxLength += windowHeight;
			}

			const parallaxLength = enableFocusPointsTransitions ? newParallaxLength : windowHeight + dimensions.height;
			const parallaxStart = enableFocusPointsTransitions ? newParallaxStart : ( windowHeight - dimensions.top );
			const progress = Math.max( Math.min( parallaxStart / parallaxLength, 1 ), 0 );

			let actualParallaxAmount = parallaxAmount === 'custom' ? parallaxCustomAmount : parseInt( parallaxAmount, 10 );
			actualParallaxAmount = Math.max( Math.min( 1, actualParallaxAmount / 100 ), 0 );

			const oldNewHeight = ( dimensions.height * ( 1 - actualParallaxAmount ) ) + ( windowHeight * actualParallaxAmount );
			const newNewHeight = Math.min( dimensions.height, windowHeight );
			const newHeight = enableFocusPointsTransitions ? newNewHeight : oldNewHeight;

			const scale = newHeight / dimensions.height;
			const offsetY = dimensions.height * ( 1 - scale ) / 2;

			const oldMove = ( windowHeight + newHeight ) * ( progress - 0.5 ) * actualParallaxAmount + offsetY;
			const newMove = followThroughStart ? parallaxLength * progress - windowHeight : parallaxLength * progress;
			const move = enableFocusPointsTransitions ? newMove : oldMove;

			const newStyles = {
				height: Math.min( newHeight, windowHeight ),
				minHeight: enableFocusPointsTransitions ? 0 : '',
				transition: 'none',
				transform: 'translate(0,' + move + 'px)',
				'--progress': progress,
				'--parallaxStart': parallaxStart,
				'--parallaxLength': parallaxLength,
				'--scrollTop': scrollTop,
			};

			let newFocalPoint = {};

			if ( focalPoint ) {
				newFocalPoint = focalPoint;

				if ( enableFocusPointsTransitions && finalFocalPoint ) {
					newFocalPoint = {
						x: parseFloat( focalPoint.x ) + ( parseFloat( finalFocalPoint.x ) - parseFloat( focalPoint.x ) ) * progress,
						y: parseFloat( focalPoint.y ) + ( parseFloat( finalFocalPoint.y ) - parseFloat( focalPoint.y ) ) * progress,
					}
				}

				newStyles.objectPosition = newFocalPoint.x * 100 + '% ' + newFocalPoint.y * 100 + '%';
				newStyles.transformOrigin = newFocalPoint.x * 100 + '% ' + newFocalPoint.y * 100 + '%';
			}

			if ( enableFocusPointsTransitions && initialBackgroundScale && finalBackgroundScale ) {
				const newScale = initialBackgroundScale + ( finalBackgroundScale - initialBackgroundScale ) * progress;
				newStyles.transform = newStyles.transform + ` scale(${newScale})`;
			}

			return newStyles;
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
