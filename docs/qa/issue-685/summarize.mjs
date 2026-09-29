// Prints the #685 acceptance values per engine from measurements/<label>.json.
import { readFileSync } from 'node:fs';
const label = process.argv[ 2 ];
const d = JSON.parse( readFileSync( new URL( `./measurements/${ label }.json`, import.meta.url ) ) );
const engines = [ 'ff115', 'firefox', 'chromium' ].filter( e => d[ e ] );
const b = v => ( v ? `${ v.x }/${ v.w }` : '-' );
const rows = [
	[ 'row1 single p x/w', m => b( m[ 'single@W' ]?.firstP ) ],
	[ 'row1 single title x/w', m => b( m[ 'single@W' ]?.title ) ],
	[ 'row1 rail first child x/w', m => b( m[ 'single@W' ]?.railFirst ) ],
	[ 'row1 page p x/w', m => b( m[ 'page@W' ]?.firstP ) ],
	[ 'row1 page title x/w', m => b( m[ 'page@W' ]?.title ) ],
	[ 'row1 archive title x/w', m => b( m[ 'archive@W' ]?.title ) ],
	[ 'row1 archive query x/w', m => b( m[ 'archive@W' ]?.archiveQuery ) ],
	[ 'row2 home section1 x/w', m => b( m[ 'home@W' ]?.sections?.[ 0 ]?.group ) ],
	[ 'row2 home section1 h2 x/w', m => b( m[ 'home@W' ]?.sections?.[ 0 ]?.heading ) ],
	[ 'row2 home cards x/w', m => b( m[ 'home@W' ]?.sections?.[ 0 ]?.cards ) ],
	[ 'row2 home section2 wide img x/w', m => b( m[ 'home@W' ]?.sections?.[ 1 ]?.wideImage ) ],
	[ 'row3 divider drawn', m => String( m[ 'single@W' ]?.divider?.right ) ],
	[ 'row4 dropcap line (hover) w x h', m => ( m[ 'home@W' ]?.dropcapHover ? `${ m[ 'home@W' ].dropcapHover.w }x${ m[ 'home@W' ].dropcapHover.h }` : '-' ) ],
	[ 'row5 190 img x/w', m => b( m[ 'single@W' ]?.caption190?.img ) ],
	[ 'row5 190 caption x/w', m => b( m[ 'single@W' ]?.caption190?.caption ) ],
	[ 'no-caption figure x/w', m => b( m[ 'single@W' ]?.noCaption?.figure ) ],
	[ 'overflow-x (max)', m => String( Math.max( ...[ 'single', 'page', 'archive', 'home' ].map( p => m[ `${ p }@W` ]?.overflowX ?? 0 ) ) ) ],
	[ 'console errors', m => String( [ 'single', 'page', 'archive', 'home' ].reduce( ( n, p ) => n + ( m[ `${ p }@W` ]?.console?.length ?? 0 ), 0 ) ) ],
];
for ( const width of [ 1440, 450 ] ) {
	console.log( `\n### ${ label } @${ width }  (${ engines.map( e => `${ e } ${ d[ e ].version }` ).join( ', ' ) })` );
	console.log( '| check | ' + engines.join( ' | ' ) + ' |' );
	console.log( '|---|' + engines.map( () => '---' ).join( '|' ) + '|' );
	for ( const [ name, fn ] of rows ) {
		const vals = engines.map( e => fn( Object.fromEntries( Object.entries( d[ e ] ).map( ( [ k, v ] ) => [ k.replace( String( width ), 'W' ), v ] ) ) ) );
		console.log( `| ${ name } | ${ vals.join( ' | ' ) } |` );
	}
}
