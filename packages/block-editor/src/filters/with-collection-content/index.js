import { addFilter } from '@wordpress/hooks';

import withCollectionContentControls from './with-collection-content-controls';
import withCollectionContentAttributes from './with-collection-content-attributes';

addFilter( 'blocks.registerBlockType', 'novablocks/with-collection-content-attributes', withCollectionContentAttributes );
addFilter( 'editor.BlockEdit', 'novablocks/with-collection-content-controls', withCollectionContentControls );
