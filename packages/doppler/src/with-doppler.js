import { createContext } from '@wordpress/element';

import { findParents } from '@novablocks/utils';
import { easeInOutCubic, easeOutQuart } from '@novablocks/easings';
import { ScrollingEffectControls } from './controls';
import { getStyles, getState } from './utils';

/**
 * WordPress dependencies
 */
import {
	Component,
	Fragment
} from '@wordpress/element';

import {
	InspectorControls
} from '@wordpress/block-editor';

import {
	compose
} from '@wordpress/compose';

const ParallaxContext = createContext();

const withDopplerProvider = function( WrappedComponent ) {

	return class extends Component {

		constructor() {
			super( ...arguments );

			this.state = {
				scrollContainerWidth: 0,
				scrollContainerHeight: 0,
				progress: 0.5,
			};

			this.updateHandler = this.updateState.bind( this );
			this.scrollContainer = this.getScrollContainer();
		}

		getScrollContainer() {
			return document.querySelector( '.edit-post-layout__content' ) ||
			       document.querySelector( '.edit-post-editor-regions__content' ) ||
			       document.querySelector( '.block-editor-editor-skeleton__content' ) ||
			       document.querySelector( '.interface-interface-skeleton__content' );
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

		getElementStyle() {

			const { attributes } = this.props;

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
						<ParallaxContext.Provider value={ {
							style: this.getElementStyle(),
							state: this.state,
							container: this.container,
							scrollContainer: this.scrollContainer,
						} }>
							<WrappedComponent { ...this.props } />
						</ParallaxContext.Provider>
					</div>
				</Fragment>
			);
		}
	};
};

const withDopplerControls = function( WrappedComponent ) {

	return class extends Component {

		constructor() {
			super( ...arguments );

			this.state = {
				isScrolling: false,
			}

			this.previewScrolling = this.previewScrolling.bind( this );
		}

		scrollFromTo( start, end, easing = x => x, callback = () => {}, speed = 1000 ) {

			const {
				parallax: {
					scrollContainer
				}
			} = this.props;

			const length = end - start;
			const duration = Math.abs( length ) * 1000 / speed;
			const startTime = Date.now();

			function updateScrollTopLoop() {
				const currentTime = Date.now();
				const timePassed = currentTime - startTime;
				const progress = timePassed / duration;
				const newScrollTop = start + length * easing( progress );

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

				if ( typeof callback === "function" ) {
					callback();
				}
			}, duration );
		}

		previewScrolling() {

			const {
				parallax: {
					scrollContainer,
					container,
					state: {
						containerBox,
						containerHeight,
						scrollContainerHeight,
						scrollContainerBox,
					}
				},
			} = this.props;

			if ( ! container || ! scrollContainer ) {
				return;
			}

			const scrollTop = scrollContainer.scrollTop;

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

			let end = start + length;

			this.scrollFromTo( scrollTop, start, easeOutQuart, () => {
				this.scrollFromTo( start, end, easeInOutCubic, () => {}, 1000 );
			}, 3000 );
		}

		render() {
			return (
				<Fragment>
					<InspectorControls>
						<ScrollingEffectControls { ...this.props } isScrolling={ this.state.isScrolling } previewScrolling={ this.previewScrolling } />
					</InspectorControls>
					<WrappedComponent { ...this.props } />
				</Fragment>
			)
		}
	}
};

const withDopplerContext = function( WrappedComponent ) {

	return class extends Component {

		render() {
			return (
				<ParallaxContext.Consumer>
					{ context => <WrappedComponent parallax={ context } { ...this.props } /> }
				</ParallaxContext.Consumer>
			)
		}
	}
};

const withDoppler = compose([
	withDopplerProvider,
	withDopplerContext,
	withDopplerControls,
]);

export {
	withDopplerProvider,
	withDopplerContext,
	withDopplerControls,
};

export default withDoppler;
