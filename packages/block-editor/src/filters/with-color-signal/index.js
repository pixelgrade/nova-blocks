import { addFilter } from '@wordpress/hooks';

import "./update-blocks";

import withColorSignalAttributes from './with-color-signal-attributes';
import withColorSignalsDeprecated from './with-color-signal-deprecated';
import withColorSignalControls from './with-color-signal-controls';
import withColorSignalEditClassnames from './with-color-signal-edit-classnames';
import withColorSignalSaveClassnames from "./with-color-signal-save-classnames";
import withColorSignalSaveDataAttributes from "./with-color-signal-save-data-attributes";

addFilter( 'blocks.registerBlockType', 'novablocks/with-color-signal-attributes', withColorSignalAttributes );
addFilter( 'blocks.registerBlockType', 'novablocks/with-color-signal-deprecated', withColorSignalsDeprecated );
addFilter( 'editor.BlockEdit', 'novablocks/with-color-signal-controls', withColorSignalControls );
addFilter( 'editor.BlockListBlock', 'novablocks/with-color-signal-edit-classnames', withColorSignalEditClassnames );
addFilter( 'blocks.getSaveContent.extraProps', 'novablocks/with-color-signal-save-classnames', withColorSignalSaveClassnames, 1);
addFilter( 'blocks.getSaveElement', 'novablocks/add-color-signal-data-to-save-element', withColorSignalSaveDataAttributes, 1);
