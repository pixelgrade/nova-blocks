import { addFilter } from '@wordpress/hooks';

import withCollectionLayoutAttributes from './with-collection-layout-attributes';
import withCollectionLayoutControls from './with-collection-layout-controls';
import withCollectionLayoutEditCustomProps from "../with-collection-layout/with-collection-layout-edit-custom-props";

addFilter( 'blocks.registerBlockType', 'novablocks/with-collection-layout-attributes', withCollectionLayoutAttributes );
addFilter( 'editor.BlockEdit', 'novablocks/with-collection-layout-controls', withCollectionLayoutControls );
addFilter( 'editor.BlockEdit', 'novablocks/with-collection-layout-edit-custom-props', withCollectionLayoutEditCustomProps );
