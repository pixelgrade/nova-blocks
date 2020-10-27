import { highlighted } from './highlighted';

/**
 * WordPress dependencies
 */
const { registerFormatType } = wp.richText;

function registerNovaBlocksFormats() {
	[
		highlighted
	].forEach( ( { name, ...settings } ) => {
		if ( name ) {
			registerFormatType( name, settings );
		}
	} );
}

wp.domReady(
	registerNovaBlocksFormats
);
