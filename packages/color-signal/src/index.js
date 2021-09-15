import { addFilter } from "@wordpress/hooks";

import "./update-blocks";

import withColorSignalAttributes from "./filters/with-color-signal-attributes";
import withColorSignalsDeprecated from "./filters/with-color-signal-deprecated";
import withColorSignal from "./filters/with-color-signal";
import withColorSignalControls from "./filters/with-color-signal-controls";
import withColorSignalEditClassnames from "./filters/with-color-signal-edit-classnames";
import withColorSignalSaveClassnames from "./filters/with-color-signal-save-classnames";
import withColorSignalSaveDataAttributes from "./filters/with-color-signal-save-data-attributes";

addFilter( 'blocks.registerBlockType', 'novablocks/with-color-signal-attributes', withColorSignalAttributes );
addFilter( 'blocks.registerBlockType', 'novablocks/with-color-signal-deprecated', withColorSignalsDeprecated );
addFilter( 'editor.BlockEdit', 'novablocks/with-color-signal', withColorSignal );
addFilter( 'editor.BlockEdit', 'novablocks/with-color-signal-controls', withColorSignalControls );
addFilter( 'editor.BlockListBlock', 'novablocks/with-color-signal-edit-classnames', withColorSignalEditClassnames );
addFilter( 'blocks.getSaveContent.extraProps', 'novablocks/with-color-signal-save-classnames', withColorSignalSaveClassnames, 1 );
addFilter( 'blocks.getSaveElement', 'novablocks/add-color-signal-data-to-save-element', withColorSignalSaveDataAttributes, 1 );

export * from './utils';
