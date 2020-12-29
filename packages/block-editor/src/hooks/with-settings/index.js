import { createHigherOrderComponent } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { addFilter } from '@wordpress/hooks';

const withSettings = createHigherOrderComponent( ( Component ) => {
	return withSelect( ( select, ownProps ) => {
		const { getSettings } = select( 'novablocks' );

		return {
			...ownProps,
			settings: getSettings(),
		};
	} )( Component );
}, 'withSetting' );

addFilter( 'editor.BlockEdit', 'novablocks/with-settings', withSettings, Number.MAX_SAFE_INTEGER );

export default withSettings;
