/**
 * Conversations secondary text reads at 4.5:1 on its ground (#649).
 *
 * Meta, links, hints and the dropdown toggle used to be dimmed with `opacity`,
 * which blends the ink into whatever ground sits behind it (2.79–4.28:1 on
 * white). They now take the quiet-text role, `--sm-current-fg-muted-color`
 * (style-manager#214), which Style Manager contrast-picks per variation at a
 * 4.5:1 floor, falling back to `--sm-current-fg1-color` on a site whose Style
 * Manager predates the role (style-manager#216). `fg2` is not used: the
 * generator only guarantees it the large-text minimum. Hierarchy comes from
 * the smaller size these elements already have.
 */
const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );
const sass = require( 'sass' );
const postcss = require( 'postcss' );

const compile = file => postcss.parse( sass.compileString(
	'@import "functions"; @import "mixins";\n' + fs.readFileSync( path.join( __dirname, file ), 'utf8' ),
	{
		loadPaths: [ path.resolve( __dirname, '../../../../base-styles' ), __dirname ],
		silenceDeprecations: [ 'import', 'global-builtin', 'slash-div', 'color-functions' ],
	}
).css );

const SECONDARY = [
	'.comment-posted-time',
	'.comment-reply-link',
	'.comment-edit-link',
	'.comment-link',
	'[id="cancel-comment-reply-link"]',
	'.field-description',
	'.comment-dropdown-toggle',
	'.comment-awaiting-moderation',
];

const normalize = selector => selector.replace( /\s+/g, ' ' ).replace( /\[id=cancel-comment-reply-link\]/g, '[id="cancel-comment-reply-link"]' );
const rulesFor = ( sheet, target ) => {
	const found = [];
	sheet.walkRules( rule => {
		// The rule targets the element itself (its last compound), not a descendant of it.
		const compounds = normalize( rule.selector ).split( ',' ).map( part => part.trim().split( ' ' ).pop() );
		if ( compounds.some( last => last.includes( target ) || ( last.startsWith( ':is(' ) && normalize( rule.selector ).includes( target ) ) ) ) {
			found.push( rule );
		}
	} );
	return found;
};
const decls = ( rules, prop ) => rules.flatMap( rule => rule.nodes.filter( node => node.type === 'decl' && node.prop === prop ).map( decl => ( { selector: normalize( rule.selector ), value: decl.value } ) ) );

for ( const file of [ 'style.scss', 'editor-styles.scss' ] ) {
	const sheet = compile( file );

	test( `${ file }: secondary Conversations text is never dimmed with opacity`, () => {
		for ( const target of SECONDARY ) {
			const dimmed = decls( rulesFor( sheet, target ), 'opacity' ).filter( decl => parseFloat( decl.value ) < 1 );
			assert.deepEqual( dimmed, [], `${ target } keeps full opacity` );
		}
	} );

	test( `${ file }: secondary Conversations text takes the quiet-text role, falling back to fg1`, () => {
		for ( const target of SECONDARY ) {
			const colors = decls( rulesFor( sheet, target ), 'color' );
			assert.ok(
				colors.some( decl => /^var\(--sm-current-fg-muted-color,\s*var\(--sm-current-fg1-color\b/.test( decl.value )
					|| /^var\(--field-description-color,\s*var\(--sm-current-fg-muted-color,\s*var\(--sm-current-fg1-color\b/.test( decl.value ) ),
				`${ target } is colored by the quiet-text role, falling back to fg1: ${ JSON.stringify( colors ) }`
			);
			assert.ok( colors.every( decl => ! /currentColor|#000|rgba?\(/i.test( decl.value.split( ',' )[ 0 ] ) ), `${ target } has no fixed or translucent ink: ${ JSON.stringify( colors ) }` );
		}
	} );
}

test( 'the field description has no fixed black default', () => {
	const sheet = compile( 'style.scss' );
	const fixed = [];
	sheet.walkDecls( '--field-description-color', decl => fixed.push( decl.value ) );
	assert.deepEqual( fixed, [], 'the description ink comes from the context, not a :root #000' );
} );
