const withSaveProps = require( './with-sidecar-break-save-props' ).default;

describe( 'sidecar break save props', () => {
	it( 'returns the EXACT same extraProps object for missing/auto (byte-identity contract)', () => {
		const extraProps = { className: 'alignwide' };

		// No attribute at all — the overwhelming existing-content case.
		expect( withSaveProps( extraProps, { name: 'core/image' }, { align: 'wide' } ) ).toBe( extraProps );
		// Explicit default.
		expect( withSaveProps( extraProps, { name: 'core/image' }, { align: 'wide', sidecarBreak: 'auto' } ) ).toBe( extraProps );
		// Unknown value degrades to auto, not to a class.
		expect( withSaveProps( extraProps, { name: 'core/image' }, { align: 'wide', sidecarBreak: 'sometimes' } ) ).toBe( extraProps );
	} );

	it( 'adds nb-break-always for always on aligned target blocks', () => {
		expect( withSaveProps(
			{ className: 'alignwide' },
			{ name: 'core/image' },
			{ align: 'wide', sidecarBreak: 'always' }
		) ).toEqual( { className: 'alignwide nb-break-always' } );

		expect( withSaveProps(
			{ className: 'alignleft' },
			{ name: 'core/group' },
			{ align: 'left', sidecarBreak: 'always' }
		) ).toEqual( { className: 'alignleft nb-break-always' } );
	} );

	it( 'adds nb-break-never for never on aligned target blocks', () => {
		expect( withSaveProps(
			{ className: 'alignfull' },
			{ name: 'core/image' },
			{ align: 'full', sidecarBreak: 'never' }
		) ).toEqual( { className: 'alignfull nb-break-never' } );
	} );

	it( 'never touches non-target blocks', () => {
		const extraProps = { className: 'alignwide' };
		expect( withSaveProps( extraProps, { name: 'core/paragraph' }, { align: 'wide', sidecarBreak: 'always' } ) ).toBe( extraProps );
		expect( withSaveProps( extraProps, { name: 'novablocks/supernova' }, { align: 'wide', sidecarBreak: 'always' } ) ).toBe( extraProps );
	} );

	it( 'never touches blocks without a breakable alignment', () => {
		const extraProps = { className: 'wp-block-image' };
		expect( withSaveProps( extraProps, { name: 'core/image' }, { sidecarBreak: 'always' } ) ).toBe( extraProps );
		expect( withSaveProps( extraProps, { name: 'core/image' }, { align: 'center', sidecarBreak: 'always' } ) ).toBe( extraProps );
	} );
} );
