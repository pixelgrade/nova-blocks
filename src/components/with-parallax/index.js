import { createContext } from 'react';

import { findParents } from '../../utils';
import { easeInOutCubic } from '../../easing';
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
				scrollContainerWidth: 0,
				scrollContainerHeight: 0,
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

			if ( !this.container || !this.scrollContainer ) {
				return;
			}

			const {
				attributes: {
					followThroughStart,
					followThroughEnd,
					scrollingEffect,
				}
			} = this.props;

			const scrollContainerHeight = this.scrollContainer.offsetHeight;
			const scrollContainerBox = this.scrollContainer.getBoundingClientRect();

			const containerWidth = this.container.offsetWidth;
			const containerHeight = this.container.offsetHeight;
			const containerBox = this.container.getBoundingClientRect();

			const smoothStart = followThroughStart || scrollingEffect === 'parallax';
			const smoothEnd = followThroughEnd || scrollingEffect === 'parallax';

			let current = scrollContainerBox.top - containerBox.top;
			let distance = containerHeight - scrollContainerHeight;

			if ( smoothStart ) {
				current += scrollContainerHeight;
				distance += scrollContainerHeight;
			}

			if ( smoothEnd ) {
				distance += scrollContainerHeight;
			}

			let progress = distance <= 0 ? 0.5 : current / distance;

			if ( ! smoothStart ) {
				progress = Math.max( 0, progress );
			}

			if ( ! smoothEnd ) {
				progress = Math.min( 1, progress );
			}

			this.setState( {
				containerBox,
				containerHeight,
				containerWidth,

				distance,
				progress,

				scrollContainerHeight,
				scrollContainerBox,
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
				containerBox,
				containerHeight,
				scrollContainerHeight,
				scrollContainerBox,
			} = this.state;

			const scrollContainer = this.scrollContainer;
			const scrollTop = scrollContainer.scrollTop;
			const speed = 1000; // px per second
			const startTime = Date.now();

			console.log( scrollTop, containerBox.top, scrollContainerHeight );

			let start = scrollTop + containerBox.top - scrollContainerBox.top - scrollContainerHeight;
			let length = containerHeight + scrollContainerHeight;

			if ( start < 0 ) {
				length = length + start;
				start = 0;
			}

			let maxScroll = scrollContainer.scrollHeight - scrollContainer.offsetHeight;
			let distanceToBottom = maxScroll - ( start + length );

			if ( distanceToBottom < 0 ) {
				length = length + distanceToBottom;
			}

			const duration = length * 1000 / speed;

			function updateScrollTopLoop() {
				const currentTime = Date.now();
				const timePassed = currentTime - startTime;
				const progress = timePassed / duration;
				const newScrollTop = start + length * easeInOutCubic( progress );

				scrollContainer.scrollTop = newScrollTop;
			}

			scrollContainer.style.pointerEvents = 'none';
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
				scrollContainer.style.removeProperty( 'pointer-events' );
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
				containerBox,
				containerWidth,
				containerHeight,

				distance,
				progress,

				scrollContainerBox,
				scrollContainerHeight,
			} = this.state;

			if ( scrollingEffect === 'static' || ! this.container || ! this.scrollContainer ) {
				return;
			}

			let newFocalPoint;
			let newTranslateY;

			let initialScale = initialBackgroundScale;
			let finalScale = finalBackgroundScale;
			let newScale;

			newTranslateY = scrollContainerBox.top + scrollContainerHeight / 2 - containerBox.top - containerHeight / 2;

			let parallaxAmount = 0;

			if ( scrollingEffect === 'parallax' ) {
				parallaxAmount = 0.5;
				newFocalPoint = focalPoint;
				initialScale = finalScale = initialBackgroundScale;
			}

			newTranslateY = newTranslateY * (1 - parallaxAmount);

			let minImageHeight = containerHeight + ( scrollContainerHeight - containerHeight ) * ( 1 - parallaxAmount );
			minImageHeight = Math.min( minImageHeight, scrollContainerHeight );
			let minScale = Math.max( 1, minImageHeight / containerHeight );
			let maxScale = Math.max( initialScale, finalScale );

			initialScale = initialScale / maxScale;
			finalScale = finalScale / maxScale;

			if ( scrollingEffect === 'doppler' ) {
				newFocalPoint = this.getIntermediateFocalPoint( focalPoint, finalFocalPoint, progress );
			}

			newScale = initialScale + ( finalScale - initialScale ) * progress;

			let newTranslateX = ( 1 / maxScale - 1 ) * newFocalPoint.x * 100 + '%';
			let newHeight = Math.min( containerHeight, scrollContainerHeight ) * minScale * maxScale;
			let newTransform = `translate(${ newTranslateX },${ newTranslateY }px) translateY(-50%) scale(${ newScale })`;

			return {
				width: containerWidth * maxScale,
				height: newHeight,
				top: '50%',
				minHeight: 0,
				transition: 'none',
				transform: newTransform,
				objectPosition: newFocalPoint.x * 100 + '% ' + newFocalPoint.y * 100 + '%',
				transformOrigin: newFocalPoint.x * 100 + '% ' + newFocalPoint.y * 100 + '%',
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
