import { Component } from "@wordpress/element";

import { findParents } from "@novablocks/utils";
import Doppler from "@novablocks/doppler";

import DopplerContext from "./context";

const { getStyles, getState } = Doppler.utils;

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

      return getStyles( config );
    }

    render() {

      return (
        <div className={ `novablocks-doppler-wrapper` } ref={ ( el ) => ( this.container = el ) }>
          <DopplerContext.Provider value={ {
            style: this.getElementStyle(),
            state: this.state,
            container: this.container,
            scrollContainer: this.scrollContainer,
          } }>
            <WrappedComponent { ...this.props } />
          </DopplerContext.Provider>
        </div>
      );
    }
  };
};

export default withDopplerProvider;
