import { pickCurrentAttributes } from './use-current-color-signal-attributes';

describe( 'pickCurrentAttributes', () => {
	it( 'tracks the activation attribute declared by the block adapter', () => {
		expect( pickCurrentAttributes(
			{ enableNovaColor: true },
			{ enableNovaColor: false },
			'enableNovaColor'
		) ).toEqual( expect.objectContaining( {
			enableNovaColor: true,
		} ) );
	} );
} );
