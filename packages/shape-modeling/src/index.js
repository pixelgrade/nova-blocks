import { addFilter } from '@wordpress/hooks';

import attributes from "./attributes.json";
import withShapeModelingDecoration from "./filters/with-shape-modeling-decoration";

//import withShapeModeling from './filters/with-shape-modeling';
import withShapeModelingControls from './filters/with-shape-modeling-controls';
import withShapeModelingAttributes from './filters/with-shape-modeling-attributes';

//addFilter( 'editor.BlockEdit', 'novablocks/with-shape-modeling', withShapeModeling );
addFilter( 'editor.BlockEdit', 'novablocks/with-shape-modeling-controls', withShapeModelingControls );
addFilter( 'blocks.registerBlockType', 'novablocks/with-shape-modeling-attributes', withShapeModelingAttributes );

export {
  attributes,
  withShapeModelingDecoration
};
