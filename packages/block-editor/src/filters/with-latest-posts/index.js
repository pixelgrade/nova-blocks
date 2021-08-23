import { addFilter } from '@wordpress/hooks';

import { STORE_NAME, registerQueryStore } from "./store";

import withLatestPostsControls from './with-latest-posts-controls';
import withLatestPostsAttributes from './with-latest-posts-attributes';
import withLatestPosts from './with-latest-posts';

registerQueryStore( `novablocks/${ STORE_NAME }` );

addFilter( 'blocks.registerBlockType', 'novablocks/with-latest-posts-attributes', withLatestPostsAttributes );
addFilter( 'editor.BlockEdit', 'novablocks/with-latest-posts-controls', withLatestPostsControls );
addFilter( 'editor.BlockEdit', 'novablocks/with-latest-posts', withLatestPosts );
