jest.mock( '../../index', () => ( {
	getSupports: jest.fn( () => ( { align: true } ) ),
} ) );

const withSaveProps = require( './with-save-props' ).default;

describe( 'legacy custom alignment save props', () => {
	it( 'does not rewrite core block markup', () => {
		const extraProps = { className: 'has-text-align-center' };

		expect( withSaveProps(
			extraProps,
			{ name: 'core/paragraph' },
			{ align: 'center' }
		) ).toBe( extraProps );
	} );

	it( 'keeps legacy alignment classes for Nova blocks', () => {
		expect( withSaveProps(
			{ className: 'wp-block-novablocks-headline' },
			{ name: 'novablocks/headline' },
			{ align: 'wide' }
		) ).toEqual( {
			className: 'wp-block-novablocks-headline alignwide',
		} );
	} );
} );
