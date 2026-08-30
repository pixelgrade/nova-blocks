// The parser is legacy Foursquare code that relies on the `_` global that
// WordPress ships in the editor. Provide it before requiring the module.
global._ = global._ || require( 'lodash' );

const { parseContent } = require( './HoursParser' );

const FRENCH_L10N = {
	// wp.date l10n is SUNDAY-first.
	weekdays: [ 'dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi' ],
	weekdaysShort: [ 'dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam' ],
};

const SPANISH_L10N = {
	weekdays: [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ],
	weekdaysShort: [ 'Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb' ],
};

const setLocale = l10n => {
	global.window = global.window || {};
	global.window.wp = { date: { getSettings: () => ( { l10n } ) } };
};

const parse = text => JSON.parse( parseContent( text ) );

let hadWp = false;
let originalWp;

beforeEach( () => {
	global.window = global.window || {};
	hadWp = 'wp' in global.window;
	originalWp = global.window.wp;
} );

afterEach( () => {
	if ( hadWp ) {
		global.window.wp = originalWp;
	} else {
		delete global.window.wp;
	}
} );

describe( 'openhours HoursParser day names', () => {

	it( 'parses French full day names', () => {
		setLocale( FRENCH_L10N );

		expect( parse( 'Lundi - Vendredi 10:00 - 18:00' ) ).toEqual( {
			timeframes: [ {
				days: [ 1, 2, 3, 4, 5 ],
				open: [ { start: '1000', end: '1800' } ],
			} ],
		} );
	} );

	it( 'parses French short day names', () => {
		setLocale( FRENCH_L10N );

		const hours = parse( 'lun - ven 9:00 - 17:00' );

		expect( hours.timeframes ).toHaveLength( 1 );
		expect( hours.timeframes[ 0 ].days ).toEqual( [ 1, 2, 3, 4, 5 ] );
		expect( hours.timeframes[ 0 ].open ).toEqual( [ { start: '0900', end: '1700' } ] );
	} );

	it( 'parses accented and unaccented Spanish day names alike', () => {
		setLocale( SPANISH_L10N );

		const accented = parse( 'Miércoles 10:00 - 12:00' );
		const stripped = parse( 'miercoles 10:00 - 12:00' );

		expect( accented.timeframes[ 0 ].days ).toEqual( [ 3 ] );
		expect( accented.timeframes[ 0 ].open ).toEqual( [ { start: '1000', end: '1200' } ] );
		expect( stripped ).toEqual( accented );
	} );

	it( 'still parses English day names with no wp.date settings at all', () => {
		delete global.window.wp;

		const hours = parse( 'Monday - Friday 9:00 - 17:00' );

		expect( hours.timeframes[ 0 ].days ).toEqual( [ 1, 2, 3, 4, 5 ] );
		expect( hours.timeframes[ 0 ].open ).toEqual( [ { start: '0900', end: '1700' } ] );
	} );

	it( 'keeps English day names working on a localized site', () => {
		setLocale( FRENCH_L10N );

		const hours = parse( 'Monday - Friday 9-17' );

		expect( hours.timeframes[ 0 ].days ).toEqual( [ 1, 2, 3, 4, 5 ] );
		expect( hours.timeframes[ 0 ].open ).toEqual( [ { start: '0900', end: '1700' } ] );
	} );

} );
