import { useCallback, useEffect, useState } from "@wordpress/element";

import Doppler from "@novablocks/doppler";

import DopplerContext from "./context";
import { createBlockObservers, getScrollContainer } from "./utils";

const { getStyles, getState } = Doppler.utils;

const withDopplerProvider = ( WrappedComponent ) => {

  return ( props ) => {

    const { attributes } = props;

    const [ dopplerState, setDopplerState ] = useState( null );
    const [ container, setContainer ] = useState( null );
    const [ config, setConfig ] = useState( null );
    const [ style, setStyle ] = useState( {} );

    const scrollContainer = getScrollContainer();

    const containerRef = useCallback( node => {
      if ( node !== null ) {
        setContainer( node );
      }
    }, [] );

    useEffect( () => {

      if ( ! container ) {
        return;
      }

      const observers = createBlockObservers( container, updateConfig );
      const unsubscribeUpdate = wp.data.subscribe( updateConfig );
      window.addEventListener( 'resize', updateConfig );

      if ( scrollContainer ) {
        scrollContainer.addEventListener( 'scroll', updateConfig );
      }

      return (
        () => {
          window.removeEventListener( 'resize', updateConfig );
          observers.forEach( observer => observer.disconnect() );
          unsubscribeUpdate();

          if ( scrollContainer ) {
            scrollContainer.removeEventListener( 'scroll', updateConfig );
          }
        }
      )
    }, [ container ] )

    useEffect( () => {

      if ( ! config ) {
        return;
      }

      setDopplerState( getState( config, attributes ) );

    }, [ config ] );

    useEffect( () => {

      if ( ! config || ! dopplerState ) {
        return;
      }

      const cfg = Object.assign( {}, config, dopplerState );

      setStyle( getStyles( cfg, attributes ) );

    }, [ config, dopplerState ] )

    const updateConfig = () => {

      setConfig( {
        scrollContainerHeight: scrollContainer.offsetHeight,
        scrollContainerBox: scrollContainer.getBoundingClientRect(),
        containerWidth: container.offsetWidth,
        containerHeight: container.offsetHeight,
        containerBox: container.getBoundingClientRect(),
      } );

    }

    return (
      <div className={ `novablocks-mask novablocks-doppler-wrapper` } ref={ containerRef }>
        <DopplerContext.Provider value={ {
          style: style,
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
