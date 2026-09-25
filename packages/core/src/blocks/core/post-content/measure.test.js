import { getPostContentMeasure } from './measure';

describe( 'getPostContentMeasure (#650)', () => {
	it( 'returns an authored content width', () => {
		expect( getPostContentMeasure( { layout: { type: 'constrained', contentSize: '640px' } } ) ).toBe( '640px' );
		expect( getPostContentMeasure( { layout: { type: 'constrained', contentSize: ' 38rem ' } } ) ).toBe( '38rem' );
		expect( getPostContentMeasure( { layout: { type: 'constrained', contentSize: 'var(--wp--preset--spacing--80)' } } ) ).toBe( 'var(--wp--preset--spacing--80)' );
	} );

	it( 'has none for inherited, absent, or unsafe widths (same rules as the PHP render filter)', () => {
		expect( getPostContentMeasure() ).toBe( '' );
		expect( getPostContentMeasure( {} ) ).toBe( '' );
		expect( getPostContentMeasure( { layout: { inherit: true } } ) ).toBe( '' );
		expect( getPostContentMeasure( { layout: { inherit: true, contentSize: '640px' } } ) ).toBe( '' );
		expect( getPostContentMeasure( { layout: { type: 'constrained' } } ) ).toBe( '' );
		[ '640px;color:red', '1px}body{x:y', '<b>', '"640px"' ].forEach( unsafe => {
			expect( getPostContentMeasure( { layout: { type: 'constrained', contentSize: unsafe } } ) ).toBe( '' );
		} );
	} );
} );
