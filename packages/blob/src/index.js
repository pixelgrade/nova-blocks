import { addFilter } from '@wordpress/hooks';

//import withBlobs from './with-blobs';
import withBlobsControls from './filters/with-blobs-controls';
import withBlobsAttributes from './filters/with-blobs-attributes';

//addFilter( 'editor.BlockEdit', 'novablocks/with-blobs', withBlobs );
addFilter( 'editor.BlockEdit', 'novablocks/with-blobs-controls', withBlobsControls );
addFilter( 'blocks.registerBlockType', 'novablocks/with-blobs-attributes', withBlobsAttributes );
