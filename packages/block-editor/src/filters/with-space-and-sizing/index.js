import { addFilter } from '@wordpress/hooks';

import withSpaceAndSizingAttributes from './with-space-and-sizing-attributes';
import withSpaceAndSizingControls from './with-space-and-sizing-controls';
import withSpaceAndSizingControlsAdvanced from './with-space-and-sizing-controls-advanced';
import withSpaceAndSizingCustomProps from './with-space-and-sizing-custom-props';

addFilter( 'blocks.registerBlockType', 'novablocks/with-space-and-sizing-attributes', withSpaceAndSizingAttributes );
addFilter( 'editor.BlockEdit', 'novablocks/with-space-and-sizing-controls', withSpaceAndSizingControls );
addFilter( 'editor.BlockEdit', 'novablocks/with-space-and-sizing-controls-advanced', withSpaceAndSizingControlsAdvanced );
addFilter( 'blocks.getSaveElement', 'novablocks/with-space-and-sizing-custom-props', withSpaceAndSizingCustomProps );
