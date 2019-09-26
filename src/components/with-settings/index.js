import { STORE_NAME } from '../../store';

const {
	createHigherOrderComponent,
} = wp.compose;

const {
	withSelect,
} = wp.data;

export default createHigherOrderComponent( ( Component ) => {
	return withSelect( ( select, ownProps ) => {
		const { getSettings } = select( STORE_NAME );

		return {
			...ownProps,
			settings: getSettings(),
		};
	} )( Component );
} );
