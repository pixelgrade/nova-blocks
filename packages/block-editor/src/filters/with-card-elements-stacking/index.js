import { addFilter } from "@wordpress/hooks";

import withCardElementsStackingControls from './with-card-elements-stacking-controls';
import withCardElementsStackingAttributes from './with-card-elements-stacking-attributes';

addFilter( 'blocks.registerBlockType', 'novablocks/with-card-elements-stacking-attributes', withCardElementsStackingAttributes );
addFilter( 'editor.BlockEdit', 'novablocks/with-card-elements-stacking-controls', withCardElementsStackingControls );
