/**
 * Every Food Menu markup shape that shipped in a release must keep validating
 * and migrate to today's serialization without losing content (#590).
 *
 * Fixtures in ./tests/fixtures are raw post_content:
 * - saved-by-2.1.17.html was saved from the Post Editor with the released
 *   2.1.17 build active; saved-by-2.6.6.html with today's build (both on
 *   WordPress 7.1.2). They hold the same two menus: rich-text titles, a
 *   highlighted item, a sale price, an all-defaults item, and a Basic-style
 *   menu with prices and descriptions hidden.
 * - saved-by-2.0.4.html is the 2.1.17 content with `https://schema.org` put
 *   back to `http://schema.org`: the only save difference between 2.0.4 and
 *   2.1.0 (`git diff 2.0.4 2.1.0` on the three save.js files).
 * - saved-by-2.0.1.html also carries the API-v1 root wrapper
 *   (`wp-block-novablocks-menu-food` + custom class), serialized by the live
 *   WordPress save pipeline from the 2.0.1 root registration (before its
 *   block.json moved it to API v2 in 2.0.2).
 *
 * The Jest copy of @wordpress/blocks (11.5) drops the root's `className`
 * when it parses API-v3 markup, which never renders that class; WordPress 7.1
 * keeps it (verified live for #590: all three fixtures re-save byte-identical
 * to saved-by-2.6.6.html). Comparisons therefore leave the root className
 * out, and the 2.0.1 case asserts that its custom class survives migration.
 */
const fs = require( 'fs' );
const path = require( 'path' );

global.CSS = global.CSS || {
	escape: value => value,
	supports: () => false,
};

const {
	getBlockType,
	parse,
	registerBlockType,
	serialize,
	unregisterBlockType,
} = require( '@wordpress/blocks' );

const menuAttributes = require( './attributes.json' );
const menuDeprecated = require( './deprecated' ).default;
const menuSave = require( './save' ).default;
const sectionDeprecated = require( './menu-food-section/deprecated' ).default;
const sectionSave = require( './menu-food-section/save' ).default;
const itemDeprecated = require( './menu-food-item/deprecated' ).default;
const itemSave = require( './menu-food-item/save' ).default;

const readFixture = version => fs
	.readFileSync( path.join( __dirname, 'tests/fixtures', `saved-by-${ version }.html` ), 'utf8' )
	.replace( /\n$/, '' );

const CURRENT = '2.6.6';
const HISTORICAL = [ '2.1.17', '2.0.4', '2.0.1' ];

const blockNames = [
	'novablocks/menu-food',
	'novablocks/menu-food-section',
	'novablocks/menu-food-item',
];

const unregisterFoodMenuBlocks = () => {
	blockNames.forEach( blockName => {
		if ( getBlockType( blockName ) ) {
			unregisterBlockType( blockName );
		}
	} );
};

// Mirrors the registrations in index.js, menu-food-section/index.js and
// menu-food-item/index.js (their attributes equal the frozen deprecation ones).
const registerFoodMenuBlocks = ( {
	menu = menuDeprecated,
	section = sectionDeprecated,
	item = itemDeprecated,
} = {} ) => {
	unregisterFoodMenuBlocks();
	registerBlockType( 'novablocks/menu-food', {
		apiVersion: 3,
		title: 'Food Menu',
		category: 'text',
		attributes: menuAttributes,
		supports: { html: false },
		edit: () => null,
		save: menuSave,
		deprecated: menu,
	} );
	registerBlockType( 'novablocks/menu-food-section', {
		apiVersion: 3,
		title: 'Food Menu Section',
		category: 'text',
		attributes: sectionDeprecated[ 0 ].attributes,
		edit: () => null,
		save: sectionSave,
		deprecated: section,
	} );
	registerBlockType( 'novablocks/menu-food-item', {
		apiVersion: 3,
		title: 'Menu Item',
		category: 'text',
		attributes: itemDeprecated[ 0 ].attributes,
		edit: () => null,
		save: itemSave,
		deprecated: item,
	} );
};

const quietParse = markup => {
	const spies = [ 'info', 'warn', 'error' ].map( method => jest.spyOn( console, method ).mockImplementation( () => {} ) );

	try {
		return parse( markup );
	} finally {
		spies.forEach( spy => spy.mockRestore() );
	}
};

const ROOT_CLASS_NAME = ',"className":"is-style-basic"';

const withoutClassName = ( { className, ...attributes } ) => attributes;

const withoutRootClassName = markup => markup.replace( ROOT_CLASS_NAME, '' );

const flatten = blocks => blocks.flatMap( block => [ block, ...flatten( block.innerBlocks ) ] );

const summarize = blocks => flatten( blocks ).map( ( { name, isValid, attributes } ) => ( { name, isValid, attributes } ) );

beforeEach( () => registerFoodMenuBlocks() );

afterAll( unregisterFoodMenuBlocks );

test( 'today\'s serialization validates without a deprecation and stays byte-exact', () => {
	registerFoodMenuBlocks( { menu: [], section: [], item: [] } );

	const blocks = quietParse( readFixture( CURRENT ) );
	const summary = summarize( blocks );

	expect( summary ).toHaveLength( 11 );
	expect( summary.filter( block => ! block.isValid ) ).toEqual( [] );
	expect( withoutRootClassName( serialize( blocks ) ) ).toBe( withoutRootClassName( readFixture( CURRENT ) ) );
} );

describe.each( HISTORICAL )( 'content saved by Nova Blocks %s', version => {
	test( 'every Food Menu block validates, keeps its content and migrates to today\'s markup', () => {
		const expected = summarize( quietParse( readFixture( CURRENT ) ) );
		const blocks = quietParse( readFixture( version ) );
		const summary = summarize( blocks );

		expect( summary.map( block => `${ block.name }:${ block.isValid }` ) )
			.toEqual( expected.map( block => `${ block.name }:true` ) );
		expect( summary.map( block => withoutClassName( block.attributes ) ) )
			.toEqual( expected.map( block => withoutClassName( block.attributes ) ) );
		expect( withoutRootClassName( serialize( blocks ) ) ).toBe( withoutRootClassName( readFixture( CURRENT ) ) );
	} );
} );

test( 'a custom class on the API-v1 root wrapper moves into the className attribute', () => {
	const [ , basicMenu ] = quietParse( readFixture( '2.0.1' ) );

	expect( basicMenu.isValid ).toBe( true );
	expect( basicMenu.attributes.className ).toBe( 'is-style-basic' );
	expect( serialize( [ basicMenu ] ) ).toContain( `{"enableTwoColumns":false,"showPrices":false,"showDescription":false${ ROOT_CLASS_NAME }}` );
} );

test( 'content saved before the historical deprecations invalidates without them', () => {
	registerFoodMenuBlocks( { menu: [], section: [], item: [] } );

	HISTORICAL.forEach( version => {
		const invalid = summarize( quietParse( readFixture( version ) ) ).filter( block => ! block.isValid );
		expect( invalid.length ).toBeGreaterThan( 0 );
	} );
} );

// Built-in mutation check: every frozen entry must be the one that rescues at
// least one released fixture, so none can be dropped or edited unnoticed.
describe.each( [
	[ 'novablocks/menu-food', 'menu', menuDeprecated ],
	[ 'novablocks/menu-food-section', 'section', sectionDeprecated ],
	[ 'novablocks/menu-food-item', 'item', itemDeprecated ],
] )( '%s deprecations', ( blockName, key, entries ) => {
	test.each( entries.map( ( entry, index ) => [ index ] ) )( 'entry %i is load-bearing', index => {
		registerFoodMenuBlocks( { [ key ]: entries.filter( ( entry, entryIndex ) => entryIndex !== index ) } );

		const invalidSomewhere = HISTORICAL.some( version => summarize( quietParse( readFixture( version ) ) )
			.some( block => block.name === blockName && ! block.isValid ) );

		expect( invalidSomewhere ).toBe( true );
	} );
} );
