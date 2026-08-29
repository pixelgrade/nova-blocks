import { addFilter } from '@wordpress/hooks';

import withCollectionLayoutAttributes from './with-collection-layout-attributes';
import withCollectionLayoutControls from './with-collection-layout-controls';
import withCollectionLayoutEditCustomProps from "../with-collection-layout/with-collection-layout-edit-custom-props";

addFilter( 'blocks.registerBlockType', 'novablocks/with-collection-layout-attributes', withCollectionLayoutAttributes );
// Priority 30 places the inspector controls OUTSIDE withPreviewAttributes
// (priority 20), so in a preview-capable layout's Edit Mode they read the
// block's real stored attributes instead of the canvas-only forced ones
// (layoutStyle: 'classic', columns: 1) — otherwise the Composition tab claims
// Classic Grid is selected on a masonry/carousel block and a preset click
// there silently converts the stored layout. The canvas-side custom props
// stay at the default priority so the simplified edit view keeps rendering.
addFilter( 'editor.BlockEdit', 'novablocks/with-collection-layout-controls', withCollectionLayoutControls, 30 );
addFilter( 'editor.BlockEdit', 'novablocks/with-collection-layout-edit-custom-props', withCollectionLayoutEditCustomProps );
