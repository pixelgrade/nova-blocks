import { createHigherOrderComponent } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';

import { STORE_NAME } from '@novablocks/core';

export default createHigherOrderComponent( ( Component ) => {
	return withSelect( ( select, ownProps ) => {
		const { getSettings } = select( STORE_NAME );

		return {
			...ownProps,
			settings: getSettings(),
		};
	} )( Component );
}, 'withSetting' );
