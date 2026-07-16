import { createHigherOrderComponent } from "@wordpress/compose";
import { useEffect, useState } from "@wordpress/element";
import { isEqual } from "lodash";

import { useSupports } from "@novablocks/block-editor";

import Controls from "../controls";
import ScrollingEffectPreviewContext from "../preview-context";

const withDopplerControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );
    const dopplerSupport = supports?.novaBlocks?.scrollingEffect;
    const [ previewAttributes, setScrollingEffectPreviewAttributes ] = useState( null );

    useEffect( () => {
      if ( ! previewAttributes ) {
        return;
      }

      const previewWasCommitted = Object.entries( previewAttributes ).every(
        ( [ key, value ] ) => isEqual( props.attributes[ key ], value )
      );

      if ( previewWasCommitted ) {
        setScrollingEffectPreviewAttributes( null );
      }
    }, [ props.attributes, previewAttributes ] );

    if ( dopplerSupport !== true && ! dopplerSupport?.controls ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <ScrollingEffectPreviewContext.Provider value={ previewAttributes }>
        <Controls
          { ...props }
          setScrollingEffectPreviewAttributes={ setScrollingEffectPreviewAttributes }
        />
        <OriginalComponent { ...props } />
      </ScrollingEffectPreviewContext.Provider>
    );
  };
}, 'withDopplerControls' );

export default withDopplerControls;
