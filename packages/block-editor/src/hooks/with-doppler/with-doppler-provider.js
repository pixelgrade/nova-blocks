import { useRef, useEffect, useState } from "@wordpress/element";

import Doppler from "@novablocks/doppler";

import DopplerContext from "./context";
import { createBlockObservers } from "./utils";

const { getStyles, getState } = Doppler.utils;

const withDopplerProvider = ( WrappedComponent ) => {

  return ( props ) => {

    const { attributes } = props;

    const [ dopplerState, setDopplerState ] = useState( {
      scrollContainerWidth: 0,
      scrollContainerHeight: 0,
      progress: 0.5,
    } );

    const getScrollContainer = () => {
      return document.querySelector( '.edit-post-layout__content' ) ||
             document.querySelector( '.edit-post-editor-regions__content' ) ||
             document.querySelector( '.block-editor-editor-skeleton__content' ) ||
             document.querySelector( '.interface-interface-skeleton__content' );
    }

    const ref = useRef()
    const container = ref.current;
    const scrollContainer = getScrollContainer();

    useEffect( () => {
      const observers = createBlockObservers( container, updateState );
      const unsubscribeUpdate = wp.data.subscribe( updateState );
      window.addEventListener( 'resize', updateState );

      if ( scrollContainer ) {
        scrollContainer.addEventListener( 'scroll', updateState );
      }

      updateState();

      return (
        () => {
          window.removeEventListener( 'resize', updateState );
          observers.forEach( observer => observer.disconnect() );
          unsubscribeUpdate();

          if ( scrollContainer ) {
            scrollContainer.removeEventListener( 'scroll', updateState );
          }
        }
      )
    }, [] );

    const updateState = () => {
      const scrollContainerHeight = scrollContainer.offsetHeight;
      const scrollContainerBox = scrollContainer.getBoundingClientRect();

      const config = Object.assign( {}, attributes, {
        scrollContainerBox,
        scrollContainerHeight,
      } );

      setDopplerState( getState( container, config ) );
    }

    const getElementStyle = () => {

      if ( ! scrollContainer || ! container ) {
        return {};
      }

      const state = getState( container, Object.assign( {}, dopplerState, attributes ) );
      const config = Object.assign( {}, state, attributes );

      return getStyles( config );
    }

    return (
      <div className={`novablocks-doppler-wrapper`} ref={ ref }>
        <DopplerContext.Provider value={ {
          style: getElementStyle(),
          state: dopplerState,
          container: container,
          scrollContainer: scrollContainer,
        } }>
          <WrappedComponent { ...props } />
        </DopplerContext.Provider>
      </div>
    );
  }
}

export default withDopplerProvider;
