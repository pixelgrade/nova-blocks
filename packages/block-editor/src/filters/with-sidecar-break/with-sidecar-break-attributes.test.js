import withSidecarBreakAttributes from './with-sidecar-break-attributes';

// Every editor-written attribute must be registered, or serialization drops it
// and the post re-dirties on mount (napkin: Execution & Validation #6).
describe( 'withSidecarBreakAttributes', () => {
	const settings = { attributes: { level: { type: 'number', default: 2 } } };

	it( 'registers sidecarBreak (default auto) on the post header blocks (#657)', () => {
		[ 'core/post-title', 'core/post-featured-image' ].forEach( name => {
			const next = withSidecarBreakAttributes( settings, name );
			expect( next.attributes.sidecarBreak ).toEqual( { type: 'string', enum: [ 'auto', 'always', 'never' ], default: 'auto' } );
			expect( next.attributes.level ).toBe( settings.attributes.level );
		} );
	} );

	it( 'leaves blocks outside the target set untouched', () => {
		expect( withSidecarBreakAttributes( settings, 'core/post-date' ) ).toBe( settings );
		expect( withSidecarBreakAttributes( settings, 'core/archives' ) ).toBe( settings );
	} );
} );
