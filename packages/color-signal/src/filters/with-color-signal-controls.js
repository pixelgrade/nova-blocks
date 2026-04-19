import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment, memo } from "@wordpress/element";

import { useSupports } from "@novablocks/block-editor";

import Controls from "./controls";

// Attributes that actually affect what the color-signal inspector controls render.
// Must stay in sync with the KEYS list in `use-current-color-signal-attributes.js`
// (the source of truth for color-signal attribute reads inside Controls).
const COLOR_SIGNAL_ATTR_KEYS = [
  'palette',
  'paletteVariation',
  'useSourceColorAsReference',
  'colorSignal',
  'contentColorSignal',
  'contentPaletteVariation',
];

/**
 * Custom equality check for the memoised <Controls /> wrapper.
 *
 * The block edit pipeline re-renders the entire BlockEdit tree on every keystroke
 * because attributes change. The inspector controls only display when the block is
 * selected, and they only need to re-render when their own colour-signal-relevant
 * inputs change — not on every paragraph keystroke deep in the canvas.
 *
 * Returning true here tells React to skip re-rendering the controls tree, which
 * skips the surrounding `withColorSignalProps` HOC's `useCurrentColorSignalAttributes`
 * useSelect, the memory-state read, the supports lookup, and all the inspector
 * children's render. Typing-in-block scripting time benefits proportionally.
 *
 * Conservatively erring on the side of "force re-render" (return false) when in
 * doubt: a missed re-render would leave stale UI; an extra re-render is a perf
 * regression but not a correctness bug.
 */
const arePropsEqualForControls = ( prev, next ) => {
  if ( prev.isSelected !== next.isSelected ) return false;
  if ( prev.clientId !== next.clientId ) return false;
  if ( prev.name !== next.name ) return false;

  const prevAttrs = prev.attributes;
  const nextAttrs = next.attributes;

  // If both attribute objects share an identity, controls input cannot have changed.
  if ( prevAttrs === nextAttrs ) return true;

  if ( ! prevAttrs || ! nextAttrs ) return false;

  for ( let i = 0; i < COLOR_SIGNAL_ATTR_KEYS.length; i++ ) {
    const key = COLOR_SIGNAL_ATTR_KEYS[ i ];
    if ( prevAttrs[ key ] !== nextAttrs[ key ] ) return false;
  }

  return true;
};

const MemoizedControls = memo( Controls, arePropsEqualForControls );

const withColorSignalControls = createHigherOrderComponent( OriginalComponent => {

  return props => {

    const supports = useSupports( props.name );
    const colorSignalSupport = supports?.novaBlocks?.colorSignal;

    if ( colorSignalSupport !== true && colorSignalSupport?.controls !== true ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <MemoizedControls { ...props } />
        <OriginalComponent { ...props } />
      </Fragment>
    );
  }
}, 'withColorSignalControls' );

export default withColorSignalControls;
