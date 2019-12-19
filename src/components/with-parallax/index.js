import { createContext } from 'react';

import { findParents } from '../../utils';
import { easeInOutCubic } from '../../easing';
import { ScrollingEffectControls } from "../index";

import { getStyles, getState } from './util';

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
			const container = this.container;
			const scrollContainerHeight = this.scrollContainer.offsetHeight;
			const scrollContainerBox = this.scrollContainer.getBoundingClientRect();

			const config = Object.assign( {}, this.props.attributes, {
				scrollContainerBox,
				scrollContainerHeight,
			} );

			this.setState( getState( container, config ) );
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

		getElementStyle() {

			const { attributes } = this.props;
			const { scrollingEffect } = attributes;

			if ( ! this.scrollContainer || ! this.container ) {
				return {};
			}


			const state = getState( this.container, Object.assign( {}, this.state, attributes ) );
			const config = Object.assign( {}, state, attributes );
			const styles = getStyles( config );

			return styles;
		}

		render() {

			return (
				<Fragment>
					<div ref={ ( el ) => ( this.container = el ) }>
						<ParallaxContext.Provider value={ { style: this.getElementStyle() } }>
							<WrappedComponent { ...this.props } />
						</ParallaxContext.Provider>
					</div>
					<InspectorControls>
						<ScrollingEffectControls { ...this.props } isScrolling={ this.state.isScrolling } previewScrolling={ this.previewScrolling } />
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
					{ context => <WrappedComponent parallax={ context } { ...this.props } /> }
				</ParallaxContext.Consumer>
			)
		}
	}
}

export { withParallaxContext };

export default withParallax;
