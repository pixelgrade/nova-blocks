import { addFilter } from "@wordpress/hooks";

import withCardElementsVisibilityAttributes from './with-card-elements-visibility-attributes';
import withCardElementsVisibilityControls from './with-card-elements-visibility-controls';

addFilter( 'blocks.registerBlockType', 'novablocks/with-card-elements-visibility-attributes', withCardElementsVisibilityAttributes );
addFilter( 'editor.BlockEdit', 'novablocks/with-card-elements-visibility-controls', withCardElementsVisibilityControls );
