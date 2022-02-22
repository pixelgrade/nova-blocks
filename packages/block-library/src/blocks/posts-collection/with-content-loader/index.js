import { addFilter } from '@wordpress/hooks';

import { STORE_NAME, registerQueryStore } from "./store";

import withContentLoaderControls from './with-content-loader-controls';
import withLatestPosts from './with-latest-posts';

registerQueryStore( `novablocks/${ STORE_NAME }` );

addFilter( 'editor.BlockEdit', 'novablocks/with-content-loader-controls', withContentLoaderControls );
addFilter( 'editor.BlockEdit', 'novablocks/with-latest-posts', withLatestPosts );
