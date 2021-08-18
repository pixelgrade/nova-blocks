import { addFilter } from "@wordpress/hooks";
import { select } from "@wordpress/data";

import {
  withDopplerWrapper,
  withDopplerControls,
  withDopplerAttributes,
} from './filters';

export * from './filters';

addFilter( 'blocks.registerBlockType', 'novablocks/with-doppler-attributes', withDopplerAttributes );
addFilter( 'editor.BlockEdit', 'novablocks/with-doppler-controls', withDopplerControls );
addFilter( 'editor.BlockEdit', 'novablocks/with-doppler-wrapper', withDopplerWrapper );
