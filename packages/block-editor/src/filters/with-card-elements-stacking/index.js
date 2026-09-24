import { addFilter } from "@wordpress/hooks";

import withCardElementsStackingControls from './with-card-elements-stacking-controls';
import withCardElementsStackingAttributes from './with-card-elements-stacking-attributes';

addFilter( 'blocks.registerBlockType', 'novablocks/with-card-elements-stacking-attributes', withCardElementsStackingAttributes );
// Priority 30 places the inspector controls OUTSIDE withPreviewAttributes
// (priority 20), so in a preview-capable layout's Edit Mode they read the
// block's stored attributes instead of the canvas-only forced ones (#642;
// same boundary as with-collection-layout).
addFilter( 'editor.BlockEdit', 'novablocks/with-card-elements-stacking-controls', withCardElementsStackingControls, 30 );
