import { addFilter } from '@wordpress/hooks';

import withSpaceAndSizingAttributes from './with-space-and-sizing-attributes';
import withSpaceAndSizingControls from './with-space-and-sizing-controls';
import withSpaceAndSizingSaveCustomProps from './with-space-and-sizing-save-custom-props';
import withSpaceAndSizingEditCustomProps from './with-space-and-sizing-edit-custom-props';

addFilter( 'blocks.registerBlockType', 'novablocks/with-space-and-sizing-attributes', withSpaceAndSizingAttributes );
addFilter( 'editor.BlockEdit', 'novablocks/with-space-and-sizing-controls', withSpaceAndSizingControls );
addFilter( 'editor.BlockEdit', 'novablocks/with-space-and-sizing-edit-custom-props', withSpaceAndSizingEditCustomProps );
addFilter( 'blocks.getSaveElement', 'novablocks/with-space-and-sizing-save-custom-props', withSpaceAndSizingSaveCustomProps );
