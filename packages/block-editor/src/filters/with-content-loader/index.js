import { addFilter } from '@wordpress/hooks';

import { STORE_NAME, registerQueryStore } from "./store";

import withContentLoaderControls from './with-content-loader-controls';
import withContentLoaderAttributes from './with-content-loader-attributes';
import withLatestPosts from './with-latest-posts';

registerQueryStore( `novablocks/${ STORE_NAME }` );

addFilter( 'blocks.registerBlockType', 'novablocks/with-content-loader-attributes', withContentLoaderAttributes );
addFilter( 'editor.BlockEdit', 'novablocks/with-content-loader-controls', withContentLoaderControls );
addFilter( 'editor.BlockEdit', 'novablocks/with-latest-posts', withLatestPosts );
