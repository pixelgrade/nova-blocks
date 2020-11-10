import { createHigherOrderComponent } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { addFilter } from '@wordpress/hooks';

import { STORE_NAME } from '@novablocks/core';

const withSettings = createHigherOrderComponent( ( Component ) => {
	return withSelect( ( select, ownProps ) => {
		const { getSettings } = select( STORE_NAME );

		return {
			...ownProps,
			settings: getSettings(),
		};
	} )( Component );
}, 'withSetting' );

addFilter( 'editor.BlockEdit', 'novablocks/with-settings', withSettings, Number.MAX_SAFE_INTEGER );

export default withSettings;
