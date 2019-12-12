import { createContext } from 'react';

import { findParents } from '../../utils';
import { easeInOutQuint } from '../../easing';
import { AdvancedScrollAnimationControls } from "../index";

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
				isScrolling: false,
			};

			this.updateHandler = this.updateState.bind( this );
			this.scrollContainer = this.getScrollContainer();
			this.previewScrolling = this.previewScrolling.bind( this );
		}

		getScrollContainer() {
			const oldScrollContainer = document.querySelector( '.edit-post-layout__content' );
			const newScrollContainer = document.querySelector( '.edit-post-editor-regions__content' );

			return oldScrollContainer || newScrollContainer;
		}

		componentDidMount() {
			window.addEventListener( 'resize', this.updateHandler );
			this.createBlockObservers();
			this.unsubscribeUpdate = wp.data.subscribe( this.updateHandler );

			if ( this.scrollContainer ) {
				this.scrollContainer.addEventListener( 'scroll', this.updateHandler );
			}

			this.updateState();
		}

		createBlockObservers() {
			this.observers = [];

			findParents( this.container, '.wp-block' ).map( block => {
				if ( window.MutationObserver ) {
					const mutationObserver = new MutationObserver( movements => {
						movements.forEach( movement => {
							if ( 'style' === movement.attributeName ) {
								if ( movement.oldValue && movement.oldValue.includes( 'transform: translate3d' ) ) {
									this.updateState();
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
						this.updateState();
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

		updateState() {

			if ( ! this.container || ! this.scrollContainer ) {
				return;
			}

			const {
				attributes: {
					followThroughStart,
					followThroughEnd,
					scrollingEffect,
				}
			} = this.props;

			const smoothStart = followThroughStart || scrollingEffect === 'parallax';
			const smoothEnd = followThroughStart || scrollingEffect === 'parallax';

			const containerWidth = this.container.offsetWidth;
			const containerHeight = this.container.offsetHeight;
			const containerBox = this.container.getBoundingClientRect();
			const containerTop = containerBox.top;
			const windowHeight = window.innerHeight;

			const imageHeight = Math.min( containerHeight, windowHeight );

			const distance = containerHeight - window.innerHeight;

			let progressStart = containerTop * -1;
			let progressLength = distance;

			let progress = progressStart / progressLength;

			if ( smoothStart ) {
				progressStart += windowHeight;
				progressLength += windowHeight;
			}

			if ( smoothEnd ) {
				progressLength += windowHeight;
			}

			let outsideProgress = progressStart / progressLength;

			if ( ! smoothStart ) {
				progress = Math.max( 0, progress );
				outsideProgress = Math.max( 0, outsideProgress );
			}

			if ( ! smoothEnd ) {
				progress = Math.min( 1, progress );
				outsideProgress = Math.min( 1, outsideProgress );
			}

			this.setState( {
				imageHeight,
				containerHeight,
				containerWidth,
				containerTop,
				windowHeight,
				distance,
				progress,
				outsideProgress,
				progressStart,
				progressLength,
			} );

		}

		getIntermediateFocalPoint( focalPoint1, focalPoint2, progress ) {

			if ( ! focalPoint1 && ! focalPoint2 ) {
				return {
					x: 0.5,
					y: 0.5,
				}
			}

			if ( ! focalPoint1 ) {
				return focalPoint2;
			}

			if ( ! focalPoint2 ) {
				return focalPoint1;
			}

			return {
				x: parseFloat( focalPoint1.x ) + ( parseFloat( focalPoint2.x ) - parseFloat( focalPoint1.x ) ) * progress,
				y: parseFloat( focalPoint1.y ) + ( parseFloat( focalPoint2.y ) - parseFloat( focalPoint1.y ) ) * progress,
			}
		}

		previewScrolling() {

			if ( ! this.scrollContainer || ! this.container ) {
				return;
			}

			const {
				containerTop,
				containerHeight,
				windowHeight
			} = this.state;

			const scrollContainer = this.scrollContainer;
			const scrollTop = scrollContainer.scrollTop;
			const start = scrollTop + containerTop - windowHeight;
			const length = containerHeight + windowHeight;
			const duration = 5000;
			const startTime = Date.now();

			function updateScrollTopLoop() {
				const currentTime = Date.now();
				const timePassed = currentTime - startTime;
				const progress = timePassed / duration;
				const newScrollTop = start + length * easeInOutQuint( progress );
				scrollContainer.scrollTop = newScrollTop;
			}

			const interval = setInterval( updateScrollTopLoop, 0 );

			this.setState({
				isScrolling: true
			});

			setTimeout(() => {
				clearInterval( interval );
				this.setState({
					isScrolling: false
				});
				scrollContainer.scrollTop = start + length;
			}, duration );
		}

		getStyles() {

			let {
				attributes: {
					scrollingEffect,
					focalPoint,
					finalFocalPoint,
					initialBackgroundScale,
					finalBackgroundScale,
				}
			} = this.props;

			const {
				containerWidth,
				containerHeight,
				windowHeight,
				distance,
				progress,
				outsideProgress,
				imageHeight,
			} = this.state;

			if ( scrollingEffect === 'static' ) {
				return;
			}

			let newFocalPoint;
			let newTranslateY;

			let initialScale = initialBackgroundScale;
			let finalScale = finalBackgroundScale;
			let newScale;

			if ( scrollingEffect === 'parallax' ) {
				newFocalPoint = focalPoint;
				newTranslateY = ( distance + windowHeight * 0.5 ) * ( outsideProgress - 0.5 );
				initialScale = finalScale = initialBackgroundScale;
			}

			let maxScale = Math.max( initialScale, finalScale );
			initialScale = initialScale / maxScale;
			finalScale = finalScale / maxScale;

			if ( scrollingEffect === 'doppler' ) {
				newFocalPoint = this.getIntermediateFocalPoint( focalPoint, finalFocalPoint, outsideProgress );
				newTranslateY = distance * progress - ( maxScale - 1 ) * imageHeight / 2;
			}

			newScale = initialScale + ( finalScale - initialScale ) * outsideProgress;

			let newTransformOrigin = {
				x: newFocalPoint.x,
				y: 0.5,
			};

			let newTranslateX = ( 1 / maxScale - 1 ) * newFocalPoint.x * 100 + '%';
			let newTransform = `translate(${ newTranslateX },${ newTranslateY }px) scale(${ newScale })`;

			return {
				width: containerWidth * maxScale,
				height: imageHeight * maxScale,
				minHeight: 0,
				transition: 'none',
				transform: newTransform,
				objectPosition: newFocalPoint.x * 100 + '% ' + newFocalPoint.y * 100 + '%',
				transformOrigin: newTransformOrigin.x * 100 + '% ' + newTransformOrigin.y * 100 + '%',
			};
		}

		render() {
			return (
				<Fragment>
					<div ref={ ( el ) => ( this.container = el ) }>
						<ParallaxContext.Provider value={ { style: this.getStyles() } }>
							<WrappedComponent { ...this.props } />
						</ParallaxContext.Provider>
					</div>
					<InspectorControls>
						<AdvancedScrollAnimationControls { ...this.props } isScrolling={ this.state.isScrolling } previewScrolling={ this.previewScrolling } />
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
