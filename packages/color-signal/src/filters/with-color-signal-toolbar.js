import { createHigherOrderComponent } from "@wordpress/compose";
import { Fragment } from "@wordpress/element";

import { useSupports } from "@novablocks/block-editor";

import BlockColorSignalToolbar from "../components/block-color-signal-toolbar";

const withColorSignalToolbar = createHigherOrderComponent( OriginalComponent => {

  return props => {

    const supports = useSupports( props.name );
    const colorSignalSupport = supports?.novaBlocks?.colorSignal;

    // Same gating as the sidebar's `withColorSignalControls`: either the
    // boolean shorthand `true`, or an explicit `controls: true`.
    const hasControls = colorSignalSupport === true || colorSignalSupport?.controls === true;

    // Opt-out sub-flag so specific blocks can hide the toolbar button later
    // without touching this filter — on by default.
    const toolbarEnabled = colorSignalSupport?.toolbar !== false;

    const showToolbar = props.isSelected && hasControls && toolbarEnabled;

    return (
      <Fragment>
        { showToolbar && <BlockColorSignalToolbar { ...props } /> }
        <OriginalComponent { ...props } />
      </Fragment>
    );
  }
}, 'withColorSignalToolbar' );

export default withColorSignalToolbar;
