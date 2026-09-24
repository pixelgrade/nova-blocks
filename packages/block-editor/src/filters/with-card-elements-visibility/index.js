import { addFilter } from "@wordpress/hooks";

import withCardElementsVisibilityAttributes from './with-card-elements-visibility-attributes';
import withCardElementsVisibilityControls from './with-card-elements-visibility-controls';

addFilter( 'blocks.registerBlockType', 'novablocks/with-card-elements-visibility-attributes', withCardElementsVisibilityAttributes );
// Priority 30 places the inspector controls OUTSIDE withPreviewAttributes
// (priority 20), so in a preview-capable layout's Edit Mode they read the
// block's stored attributes instead of the canvas-only forced ones (#642;
// same boundary as with-collection-layout).
addFilter( 'editor.BlockEdit', 'novablocks/with-card-elements-visibility-controls', withCardElementsVisibilityControls, 30 );
