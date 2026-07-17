import { createHigherOrderComponent } from '@wordpress/compose';
import { useRegistry } from '@wordpress/data';
import { useCallback } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';

import { preserveBlockSelectionWhileApplying } from '../../components/rule-controls/preserve-block-selection';

const COLLECTION_BLOCKS = [
	'novablocks/cards-collection',
	'novablocks/posts-collection',
	'novablocks/supernova',
];

const withSelectionStableCollectionControls = createHigherOrderComponent( OriginalComponent => {
	const SelectionStableCollectionBlockEdit = props => {
		const { clientId, setAttributes } = props;
		const registry = useRegistry();
		const selectionStableSetAttributes = useCallback( attributes => (
			preserveBlockSelectionWhileApplying( {
				registry,
				clientId,
				apply: () => setAttributes( attributes ),
			} )
		), [ clientId, registry, setAttributes ] );

		return <OriginalComponent { ...props } setAttributes={ selectionStableSetAttributes } />;
	};

	return props => COLLECTION_BLOCKS.includes( props.name )
		? <SelectionStableCollectionBlockEdit { ...props } />
		: <OriginalComponent { ...props } />;
}, 'withSelectionStableCollectionControls' );

// Collection controls register at the default priority. Wrap their composed
// BlockEdit once, while leaving the visibility provider as the outer boundary.
addFilter(
	'editor.BlockEdit',
	'novablocks/with-selection-stable-collection-controls',
	withSelectionStableCollectionControls,
	Number.MAX_SAFE_INTEGER - 1
);

export default withSelectionStableCollectionControls;
