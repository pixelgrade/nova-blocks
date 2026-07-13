import { getListStyle } from './utils';

test( 'uses the default ordered-list start when the block omits start', () => {
	expect( getListStyle( { listItemsCount: 1 } ) ).toMatchObject( {
		'--nb-list-start-at': '0',
		'--nb-list-items-count': '2',
	} );
} );

test( 'converts an explicit list start into the counter reset value', () => {
	expect( getListStyle( { start: 5, listItemsCount: 2 } ) ).toMatchObject( {
		'--nb-list-start-at': '4',
		'--nb-list-items-count': '3',
	} );
} );
