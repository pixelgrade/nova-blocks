import { addFilter } from '@wordpress/hooks';

import attributes from './attributes';

export * from './controls';
export * from './components';
export * from './utils';

import withMediaCompositionAttributes from './filters/with-media-composition-attributes';
import withMediaCompositionControls from './filters/with-media-composition-controls';
import withMediaCompositionBlockControls from './filters/with-media-composition-block-controls';

addFilter( 'blocks.registerBlockType', 'novablocks/with-media-composition-attributes', withMediaCompositionAttributes );
addFilter( 'editor.BlockEdit', 'novablocks/with-media-composition-controls', withMediaCompositionControls );
addFilter( 'editor.BlockEdit', 'novablocks/with-media-composition-block-controls', withMediaCompositionBlockControls );
addFilter( 'editor.BlockEdit', 'novablocks/with-media-composition-edit-custom-props', withMediaCompositionEditCustomProps );

export { attributes };

import { MediaComposition } from "./components";
import withMediaCompositionEditCustomProps from "./filters/with-media-composition-edit-custom-props";

export default MediaComposition;
