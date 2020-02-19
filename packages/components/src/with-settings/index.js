import { STORE_NAME } from './store';

import { createHigherOrderComponent } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';

export default createHigherOrderComponent( ( Component ) => {
	return withSelect( ( select, ownProps ) => {
		const { getSettings } = select( STORE_NAME );

		return {
			...ownProps,
			settings: getSettings(),
		};
	} )( Component );
} );
