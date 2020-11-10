import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { Fragment } from '@wordpress/element';

import InspectorControls from './inspector-controls';

const enableBlobControls = [
	'novablocks/media',
	'novablocks/advanced-gallery',
];

const withBlobControls = createHigherOrderComponent(OriginalComponent => {
	return ( props ) => {

		if ( ! enableBlobControls.includes( props.name ) ) {
			return <OriginalComponent { ...props } />
		}

		return (
			<Fragment>
				<InspectorControls { ...props } />
				<OriginalComponent { ...props } />
			</Fragment>
		);
	};

});
addFilter( 'editor.BlockEdit', 'novablocks/with-blob-controls', withBlobControls );
