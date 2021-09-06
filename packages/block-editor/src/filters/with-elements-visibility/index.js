import { addFilter } from "@wordpress/hooks";

import withElementsVisibilityAttributes from './with-elements-visibility-attributes';
import withElementsVisibilityControls from './with-elements-visibility-controls';

addFilter( 'blocks.registerBlockType', 'novablocks/with-elements-visibility-attributes', withElementsVisibilityAttributes );
addFilter( 'editor.BlockEdit', 'novablocks/with-elements-visibility-controls', withElementsVisibilityControls );
