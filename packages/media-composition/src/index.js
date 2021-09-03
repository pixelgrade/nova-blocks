import { addFilter } from '@wordpress/hooks';

import attributes from './attributes';

export * from './controls';
export * from './components';
export * from './utils';

import withMediaCompositionAttributes from './filters/with-media-composition-attributes';
import withMediaCompositionControls from './filters/with-media-composition-controls';

addFilter( 'blocks.registerBlockType', 'novablocks/with-media-composition-attributes', withMediaCompositionAttributes );
addFilter( 'editor.BlockEdit', 'novablocks/with-media-composition-controls', withMediaCompositionControls );

export { attributes };

import { MediaComposition } from "./components";

export default MediaComposition;
