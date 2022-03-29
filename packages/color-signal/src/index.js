import { addFilter } from "@wordpress/hooks";
import { useEffect } from "@wordpress/element";
import { useSupports } from "@novablocks/block-editor";

import "./update-blocks";
import { getUpdatedAttributes } from "./editor/utils";

import withColorSignalAttributes from "./filters/with-color-signal-attributes";
import withColorSignalsDeprecated from "./filters/with-color-signal-deprecated";
import withColorSignalControls from "./filters/with-color-signal-controls";
import withColorSignalEditClassnames from "./filters/with-color-signal-edit-classnames";
import withColorSignalSaveClassnames from "./filters/with-color-signal-save-classnames";
import withColorSignalSaveDataAttributes from "./filters/with-color-signal-save-data-attributes";
import withColorSignalEditCustomProps from "./filters/with-color-signal-edit-custom-props";
import withSpaceAndSizingSaveCustomProps from "./filters/with-color-signal-save-custom-props";

addFilter( 'blocks.registerBlockType', 'novablocks/with-color-signal-attributes', withColorSignalAttributes );
addFilter( 'blocks.registerBlockType', 'novablocks/with-color-signal-deprecated', withColorSignalsDeprecated );
addFilter( 'editor.BlockEdit', 'novablocks/with-color-signal-controls', withColorSignalControls );
addFilter( 'editor.BlockEdit', 'novablocks/with-color-signal-edit-custom-props', withColorSignalEditCustomProps );
addFilter( 'editor.BlockListBlock', 'novablocks/with-color-signal-edit-classnames', withColorSignalEditClassnames );
addFilter( 'blocks.getSaveContent.extraProps', 'novablocks/with-color-signal-save-classnames', withColorSignalSaveClassnames, 1 );
addFilter( 'blocks.getSaveElement', 'novablocks/add-color-signal-data-to-save-element', withColorSignalSaveDataAttributes, 1 );
addFilter( 'blocks.getSaveElement', 'novablocks/with-color-signal-save-custom-props', withSpaceAndSizingSaveCustomProps );

const withUpdatedAttributes = ( BlockEdit ) => {

  return props => {
    const { attributes, setAttributes, clientId } = props;
    const supports = useSupports( props.name );
    const stickySourceColor = supports?.novaBlocks?.colorSignal?.stickySourceColor !== false;

    useEffect( () => {
      if ( supports?.novaBlocks?.colorSignal ) {
        const updatedAttributes = getUpdatedAttributes( attributes, clientId, {}, stickySourceColor );
        console.log( props.name, attributes, updatedAttributes );
        setAttributes( updatedAttributes );
      }
    }, [] );

    return (
      <BlockEdit { ...props } />
    )
  }
}
addFilter( 'editor.BlockEdit', 'novablocks/with-updated-attributes', withUpdatedAttributes );

export * from './utils';
