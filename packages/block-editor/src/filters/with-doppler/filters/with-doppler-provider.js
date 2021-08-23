import { useCallback, useEffect, useState } from "@wordpress/element";

import Doppler from "@novablocks/doppler";

import { getEditorScrollContainer } from "../../../utils";
import { createBlockObservers } from "../utils";
import DopplerContext from "../context";
import { createHigherOrderComponent } from "@wordpress/compose";

const { getStyles, getState } = Doppler.utils;

const withDopplerProvider = createHigherOrderComponent( WrappedComponent => {

  return ( props ) => {

    const { attributes, isScrolling } = props;

    const [ dopplerState, setDopplerState ] = useState( null );
    const [ container, setContainer ] = useState( null );
    const [ config, setConfig ] = useState( null );
    const [ style, setStyle ] = useState( {} );

    const scrollContainer = getEditorScrollContainer();

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

    }, [ config, attributes ] );

    useEffect( () => {

      if ( ! config || ! dopplerState ) {
        return;
      }

      const cfg = Object.assign( {}, config, dopplerState );

      setStyle( getStyles( cfg, attributes ) );

    }, [ config, dopplerState, attributes ] )

    const updateConfig = useCallback( () => {

      if ( ! isScrolling ) {
        return;
      }

      setConfig( {
        scrollContainerHeight: scrollContainer.offsetHeight,
        scrollContainerBox: scrollContainer.getBoundingClientRect(),
        containerWidth: container.offsetWidth,
        containerHeight: container.offsetHeight,
        containerBox: container.getBoundingClientRect(),
      } );

    }, [ isScrolling, container, scrollContainer ] )

    return (
      <div className={ `novablocks-doppler__mask novablocks-doppler__wrapper` } ref={ containerRef }>
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
}, 'withDopplerProvider' );

export default withDopplerProvider;
