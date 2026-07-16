import { flushSync, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "@wordpress/element";
import { createHigherOrderComponent } from "@wordpress/compose";

import {
  useResizeObserver,
  useOnScroll,
  useScrollContainer,
  useScrollContainerBox,
} from "@novablocks/block-editor";

import DopplerContext from "../context";
import ScrollingEffectPreviewContext from "../preview-context";
import { getStyles, getState } from "../utils";

const withDopplerProvider = createHigherOrderComponent( WrappedComponent => {

  return ( props ) => {
    const containerRef = useRef( null );
    const [ contextValue, setContextValue ] = useState( {} );

    const { attributes } = props;
    const previewAttributes = useContext( ScrollingEffectPreviewContext );
    const effectiveAttributes = useMemo( () => previewAttributes ? {
      ...attributes,
      ...previewAttributes,
    } : attributes, [ attributes, previewAttributes ] );
    const scrollContainer = useScrollContainer();
    const scrollContainerBox = useScrollContainerBox( scrollContainer );

    const [ setContainerNode, containerResizeEntry ] = useResizeObserver();
    const [ containerBox, setContainerBox ] = useState( null );

    const onScroll = useCallback( () => {
      if ( containerRef.current ) {
        flushSync( () => {
          setContainerBox( containerRef.current.getBoundingClientRect() );
        } );
      }
    }, [ containerRef ] );

    useOnScroll( scrollContainer, onScroll );

    useEffect( () => {
      if ( containerRef.current ) {
        setContainerNode( containerRef.current );
      }
    }, [ containerRef ] );

    useLayoutEffect( () => {
      if ( containerRef.current ) {
        setContainerBox( containerRef.current.getBoundingClientRect() );
      }
    }, [ containerResizeEntry ] );

    useLayoutEffect( () => {

      if ( containerBox && scrollContainerBox ) {

        const config = ( {
          scrollContainerBox: scrollContainerBox,
          containerBox: containerBox,
        } );

        const dopplerState = getState( config, effectiveAttributes );
        const newConfig = Object.assign( {}, config, dopplerState );
        const style = getStyles( newConfig, effectiveAttributes );

        const newContextValue = {
          style: style,
          state: dopplerState,
          container: containerRef.current,
          scrollContainer: scrollContainer,
        };

        setContextValue( newContextValue );
      }

    }, [ containerBox, scrollContainerBox, effectiveAttributes, containerRef, scrollContainer ] );

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
