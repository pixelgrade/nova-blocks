import { addFilter } from "@wordpress/hooks";

import withCardDescriptionSizeControls from './with-card-description-size-controls';
import withCardDescriptionSizeAttributes from './with-card-description-size-attributes';

addFilter( 'blocks.registerBlockType', 'novablocks/with-card-description-size-attributes', withCardDescriptionSizeAttributes );
addFilter( 'editor.BlockEdit', 'novablocks/with-card-description-size-controls', withCardDescriptionSizeControls );
