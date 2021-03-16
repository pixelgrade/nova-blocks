import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { Fragment } from '@wordpress/element';

import InspectorControls from './inspector-controls';

const withBlobControls = createHigherOrderComponent(OriginalComponent => {

	return ( props ) => {

		let themeSupport = props?.settings?.theme_support?.blobs;

		// @todo avoid adding controls to block that don't actually support blobs
		let enableBlobControls =  Array.isArray( themeSupport ) ? themeSupport : [];

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
