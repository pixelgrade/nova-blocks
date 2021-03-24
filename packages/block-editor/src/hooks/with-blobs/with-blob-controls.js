import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { Fragment } from '@wordpress/element';
import { hasBlobSupport } from "./utils";

import InspectorControls from './inspector-controls';

const withBlobControls = createHigherOrderComponent(OriginalComponent => {

	return ( props ) => {

		if ( ! hasBlobSupport( props ) ) {
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
