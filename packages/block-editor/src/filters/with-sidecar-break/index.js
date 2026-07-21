import { addFilter } from '@wordpress/hooks';

import withSidecarBreakAttributes from './with-sidecar-break-attributes';
import withSidecarBreakControls from './with-sidecar-break-controls';

// Per-block break control (break-system layer 3 authoring surface):
// "Extend over sidebar: Auto / Always / Never" on aligned core blocks
// inside a Sidecar content area. The decision serializes through the
// block's own className attribute (nb-break-always / nb-break-never),
// written on control interaction — there is deliberately NO save filter:
// auto stays byte-identical by construction, the editor-canvas wrapper
// gets the class for free, and saved markup survives Nova deactivation.
addFilter( 'blocks.registerBlockType', 'novablocks/with-sidecar-break-attributes', withSidecarBreakAttributes );
addFilter( 'editor.BlockEdit', 'novablocks/with-sidecar-break-controls', withSidecarBreakControls );
