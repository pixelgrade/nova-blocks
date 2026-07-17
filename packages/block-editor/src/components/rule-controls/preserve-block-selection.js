const BLOCK_EDITOR_STORE = 'core/block-editor';
const SELECTION_SETTLE_TIMEOUT = 250;

/**
 * Keep an inspector control anchored to its block when the Site Editor clears
 * selection while reconciling a template part back to its saved state.
 *
 * The subscription is deliberately short-lived and only restores a cleared
 * selection. Choosing another block is treated as intentional and cancels the
 * restoration.
 *
 * @param {Object}   options
 * @param {Object}   options.registry WordPress data registry.
 * @param {string}   options.clientId Block receiving the attribute update.
 * @param {Function} options.apply    Attribute update callback.
 * @return {*} The value returned by the update callback.
 */
export const preserveBlockSelectionWhileApplying = ( {
	registry,
	clientId,
	apply,
} ) => {
	const blockEditor = registry && registry.select( BLOCK_EDITOR_STORE );

	if ( ! clientId || ! blockEditor || blockEditor.getSelectedBlockClientId() !== clientId ) {
		return apply();
	}

	let timeoutId;
	let unsubscribe = () => {};
	let isListening = true;

	const cleanup = () => {
		if ( ! isListening ) {
			return;
		}

		isListening = false;
		unsubscribe();
		clearTimeout( timeoutId );
	};

	const handleSelectionChange = () => {
		const currentBlockEditor = registry.select( BLOCK_EDITOR_STORE );
		const selectedClientId = currentBlockEditor.getSelectedBlockClientId();

		if ( selectedClientId === clientId ) {
			return;
		}

		if ( null === selectedClientId && currentBlockEditor.getBlock( clientId ) ) {
			cleanup();
			registry.dispatch( BLOCK_EDITOR_STORE ).selectBlock( clientId );
			return;
		}

		cleanup();
	};

	unsubscribe = registry.subscribe( handleSelectionChange );
	timeoutId = setTimeout( cleanup, SELECTION_SETTLE_TIMEOUT );

	try {
		return apply();
	} catch ( error ) {
		cleanup();
		throw error;
	}
};
