import { getSnapClassname } from './focal-point';

describe( 'getSnapClassname', () => {
	test( 'returns an unsnapped state when a managed preset cleared the focal point', () => {
		expect( getSnapClassname( undefined ) ).toBe( '' );
	} );
} );
