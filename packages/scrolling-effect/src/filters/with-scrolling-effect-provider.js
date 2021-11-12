import { useCallback, useEffect, useRef, useState } from "@wordpress/element";
import { createHigherOrderComponent } from "@wordpress/compose";

import {
  useResizeObserver,
  useOnScroll,
  useScrollContainer,
  useScrollContainerBox,
} from "@novablocks/block-editor";

import DopplerContext from "../context";
import { getStyles, getState } from "../utils";

const withDopplerProvider = createHigherOrderComponent( WrappedComponent => {

  return ( props ) => {
    const containerRef = useRef( null );
    const [ contextValue, setContextValue ] = useState( {} );

    const { attributes } = props;
    const scrollContainer = useScrollContainer();
    const scrollContainerBox = useScrollContainerBox( scrollContainer );

    const [ setContainerNode, containerResizeEntry ] = useResizeObserver();
    const [ containerBox, setContainerBox ] = useState( null );

    const onScroll = useCallback( () => {
      if ( containerRef.current ) {
        setContainerBox( containerRef.current.getBoundingClientRect() );
      }
    }, [ containerRef ] );

    useOnScroll( scrollContainer, onScroll );

    useEffect( () => {
      if ( containerRef.current ) {
        setContainerNode( containerRef.current );
      }
    }, [ containerRef ] );

    useEffect( () => {
      setContainerBox( containerResizeEntry.contentRect );
    }, [ containerResizeEntry ] );

    useEffect( () => {

      if ( containerBox && scrollContainerBox ) {

        const config = ( {
          scrollContainerBox: scrollContainerBox,
          containerBox: containerBox,
        } );

        const dopplerState = getState( config, attributes );
        const newConfig = Object.assign( {}, config, dopplerState );
        const style = getStyles( newConfig, attributes );

        const newContextValue = {
          style: style,
          state: dopplerState,
          container: containerRef.current,
          scrollContainer: scrollContainer
        }

        setContextValue( newContextValue );
      }

    }, [ containerBox, scrollContainerBox, attributes, containerRef, scrollContainer ] );

    return (
      <div className={ `novablocks-doppler__mask novablocks-doppler__wrapper` } ref={ containerRef }>
        <DopplerContext.Provider value={ contextValue }>
          <WrappedComponent { ...props } />
        </DopplerContext.Provider>
      </div>
    );
  }
}, 'withDopplerProvider' );

export default withDopplerProvider;
