import { addFilter } from "@wordpress/hooks";

import {
  withDopplerWrapper,
  withDopplerControls,
  withDopplerAttributes,
} from './filters';

export * from './filters';

addFilter( 'blocks.registerBlockType', 'novablocks/with-doppler-attributes', withDopplerAttributes );
addFilter( 'editor.BlockEdit', 'novablocks/with-doppler-controls', withDopplerControls );
addFilter( 'editor.BlockEdit', 'novablocks/with-doppler-wrapper', withDopplerWrapper, 1 );
