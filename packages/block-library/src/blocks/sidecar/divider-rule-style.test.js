const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );
const sass = require( 'sass' );
const postcss = require( 'postcss' );

// Compile through the REAL base-styles mixins so the desktop media query (and
// the editor's Desktop-preview scope) survive into the parsed tree: the rule's
// whole contract is "drawn only while the rail sits beside the content".
const compile = file => postcss.parse( sass.compileString(
	'@import "functions"; @import "mixins";\n' + fs.readFileSync( path.join( __dirname, file ), 'utf8' ),
	{
		loadPaths: [ path.resolve( __dirname, '../../../../base-styles' ), __dirname ],
		silenceDeprecations: [ 'import', 'global-builtin', 'slash-div', 'color-functions', 'abs-percent' ],
	}
).css );

const frontend = compile( 'style.scss' );
const editor = compile( 'editor-styles.scss' );

const rulesMatching = ( sheet, predicate ) => {
	const found = [];
	sheet.walkRules( rule => {
		if ( predicate( rule.selector ) ) {
			found.push( rule );
		}
	} );
	return found;
};
const decl = ( rule, prop ) => rule.nodes.find( node => node.type === 'decl' && node.prop === prop )?.value;
const ancestors = rule => {
	const chain = [];
	for ( let node = rule.parent; node && node.type !== 'root'; node = node.parent ) {
		chain.push( node );
	}
	return chain;
};
const isDesktopOnly = rule => ancestors( rule ).some( node => node.type === 'atrule' && node.name === 'media' && /^only screen and \(min-width: ?1024px\)/.test( node.params ) );

const PSEUDO = /\.nb-sidecar--has-rule::before/;

test( 'the frontend draws the rule only above lap, as a pseudo grid item in the rail gaps', () => {
	const pseudo = rulesMatching( frontend, s => PSEUDO.test( s ) );
	assert.equal( pseudo.length, 1, 'exactly one divider pseudo-element rule' );
	const [ rule ] = pseudo;

	assert.ok( isDesktopOnly( rule ), 'the pseudo-element must exist only while the rail sits beside the content (above lap)' );
	assert.equal( decl( rule, 'content' ), '""' );
	assert.equal( decl( rule, 'grid-row' ), '1' );
	assert.equal( decl( rule, 'grid-column' ).replace( /\s/g, '' ), 'gs/ge', 'spans the gap-start..gap-end lines, fixed tracks only' );
	assert.equal( decl( rule, 'align-self' ), 'stretch', 'runs the full Sidecar row' );
	assert.equal( decl( rule, 'pointer-events' ), 'none' );
	// Painted beneath every area: the content area is `order: -1`, so a
	// default-order pseudo would paint over a wide block that breaks over the
	// rail. Grid items paint in order-modified document order.
	assert.equal( decl( rule, 'order' ), '-2' );
	assert.equal( decl( rule, 'background-image' ), 'var(--nb-sidecar-rule-left, none), var(--nb-sidecar-rule-right, none)' );
	assert.equal( decl( rule, 'background-repeat' ), 'no-repeat' );
	assert.equal( decl( rule, 'background-size' ), 'var(--nb-sidecar-rule-weight) 100%' );

	// Centred in each rail gap: the same gap expression the template uses
	// (the rail-gap share under Content Inset, else the whole separator).
	const position = decl( rule, 'background-position' );
	assert.match( position, /^left calc\(var\(--nb-layout-rail-gap-left, var\(--nb-sidecar-sidebar-left-gap\)\) \/ 2 - var\(--nb-sidecar-rule-weight\) \/ 2\) top 0,/ );
	assert.match( position, /right calc\(var\(--nb-layout-rail-gap-right, var\(--nb-sidecar-sidebar-right-gap\)\) \/ 2 - var\(--nb-sidecar-rule-weight\) \/ 2\) top 0$/ );
} );

test( 'no divider pseudo-element exists below lap, where the rail stacks', () => {
	rulesMatching( frontend, s => /nb-sidecar[^,]*::?before/.test( s ) ).forEach( rule => {
		assert.ok( isDesktopOnly( rule ), `${ rule.selector } must stay inside the desktop media query` );
	} );
} );

test( 'each side draws only while its rail exists and has content', () => {
	const reset = rulesMatching( frontend, s => s === '.nb-sidecar--has-rule' );
	assert.equal( reset.length, 1, 'a rule-on Sidecar resets both layers, so a nested Sidecar never inherits an outer line' );
	assert.equal( decl( reset[ 0 ], '--nb-sidecar-rule-left' ), 'none' );
	assert.equal( decl( reset[ 0 ], '--nb-sidecar-rule-right' ), 'none' );

	for ( const side of [ 'left', 'right' ] ) {
		const layer = rulesMatching( frontend, s => s.includes( `--nb-sidecar-rule-${ side }` ) || ( s.includes( '.nb-sidecar--has-rule' ) && s.includes( `sidebar-${ side } > *` ) ) )
			.filter( rule => decl( rule, `--nb-sidecar-rule-${ side }` ) && decl( rule, `--nb-sidecar-rule-${ side }` ) !== 'none' );
		assert.equal( layer.length, 1, `one ${ side } layer rule` );
		assert.equal(
			layer[ 0 ].selector,
			`.nb-sidecar--has-rule:not(.nb-sidecar--no-${ side }-rail):has(> .nb-sidecar-area--sidebar-${ side } > *)`
		);
		assert.equal(
			decl( layer[ 0 ], `--nb-sidecar-rule-${ side }` ),
			'linear-gradient(var(--nb-sidecar-rule-color), var(--nb-sidecar-rule-color))'
		);
	}
} );

test( 'the rule never changes grid geometry: no box properties on the Sidecar', () => {
	rulesMatching( frontend, s => /nb-sidecar--(has-rule|rule-)/.test( s ) ).forEach( rule => {
		for ( const node of rule.nodes.filter( n => n.type === 'decl' ) ) {
			assert.doesNotMatch(
				node.prop,
				/^(padding|margin|width|min-width|max-width|border|grid-template|gap|column-gap)/,
				`${ rule.selector } must not declare ${ node.prop }`
			);
		}
	} );
} );

test( 'the editor draws the same rule under the Desktop preview', () => {
	const pseudo = rulesMatching( editor, s => PSEUDO.test( s ) );
	assert.equal( pseudo.length, 1 );
	assert.match( pseudo[ 0 ].selector, /\.editor-styles-wrapper:not\(\[data-nb-device-preview="?Tablet"?\]\):not\(\[data-nb-device-preview="?Mobile"?\]\) \.nb-sidecar--has-rule::before/ );
	assert.equal( decl( pseudo[ 0 ], 'grid-column' ).replace( /\s/g, '' ), 'gs/ge' );
} );
