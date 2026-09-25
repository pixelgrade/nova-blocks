import { addContentMeasureFilter } from '../content-measure';

// Editor twin of init.php: an authored Post Content width becomes the reading
// measure inside a Nova layout grid (GitHub #650).
addContentMeasureFilter( 'novablocks/post-content/measure', {
	blockName: 'core/post-content',
	className: 'nb-post-content--measure',
	property: '--nb-post-content-measure',
} );
