import { addFilter } from "@wordpress/hooks";

import withContentPositionAttributes from './with-content-position-attributes';
import withContentPositionControls from './with-content-position-controls';
import withContentPositionInnerBlocks from './with-content-position-inner-blocks';
import withContentPositionDeprecated from './with-content-position-deprecated';

addFilter('blocks.registerBlockType', 'novablocks/with-content-position-attributes', withContentPositionAttributes);
addFilter('editor.BlockEdit', 'novablocks/with-content-position-controls', withContentPositionControls);
addFilter('editor.BlockEdit', 'novablocks/with-content-position-inner-blocks', withContentPositionInnerBlocks);
addFilter('blocks.registerBlockType', 'novablocks/with-content-position-deprecated', withContentPositionDeprecated);
