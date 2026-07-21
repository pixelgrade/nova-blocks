import { addFilter } from '@wordpress/hooks';

import withSidecarBreakAttributes from './with-sidecar-break-attributes';
import withSidecarBreakControls from './with-sidecar-break-controls';
import withSidecarBreakSaveProps from './with-sidecar-break-save-props';

// Per-block break control (break-system layer 3 authoring surface):
// "Extend over sidebar: Auto / Always / Never" on aligned core blocks
// inside a Sidecar content area, serialized as nb-break-always /
// nb-break-never (auto serializes NOTHING — byte-identical default output).
addFilter( 'blocks.registerBlockType', 'novablocks/with-sidecar-break-attributes', withSidecarBreakAttributes );
addFilter( 'editor.BlockEdit', 'novablocks/with-sidecar-break-controls', withSidecarBreakControls );
addFilter( 'blocks.getSaveContent.extraProps', 'novablocks/with-sidecar-break-save-props', withSidecarBreakSaveProps );
