const DEFAULT_STATE = {
	settings: {

	}
};

export default function( state = DEFAULT_STATE, action ) {
	switch ( action.type ) {
		case 'UPDATE_SETTINGS':
			return {
				...state,
				settings: action.settings,
			};
	}

	return state;
}
