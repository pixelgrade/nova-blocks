const {
	registerStore
} = wp.data;

import reducer from './reducer';
import * as selectors from './selectors';
import * as actions from './actions';

export const STORE_NAME = 'novablocks';

export default registerStore( STORE_NAME, {
	reducer,
	selectors,
	actions,
} );