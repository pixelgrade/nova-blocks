import { addFilter } from '@wordpress/hooks';

import withCollectionLayoutAttributes from './with-collection-layout-attributes';
import withCollectionLayoutControls from './with-collection-layout-controls';

addFilter( 'blocks.registerBlockType', 'novablocks/with-collection-layout-attributes', withCollectionLayoutAttributes );
addFilter( 'editor.BlockEdit', 'novablocks/with-collection-layout-controls', withCollectionLayoutControls );
