const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const source = fs.readFileSync( path.join( __dirname, '_variables.scss' ), 'utf8' );

// The declarations of the `*` block, in source order.
const declarations = () => {
	const block = source.match( /\n\*\s*\{([\s\S]*?)\n\}/ );
	assert.ok( block, 'expected the per-element `*` token block' );
	return [ ...block[ 1 ].matchAll( /^\s*(--[\w-]+):\s*([^;]+);/gm ) ].map( m => ( { prop: m[ 1 ], value: m[ 2 ].trim() } ) );
};
const valueOf = prop => declarations().find( d => d.prop === prop )?.value;

// GitHub #668: one rule model — a primary and a secondary role, each a weight
// token plus a colour token. Their fallbacks are exactly today's values, so a
// site that never touches the roles renders identically.
test( 'defines the primary and secondary rule roles with today\'s values as fallbacks', () => {
	assert.equal( valueOf( '--nb-rule-primary-weight' ), '1px' );
	assert.equal( valueOf( '--nb-rule-secondary-weight' ), '1px' );
	assert.equal(
		valueOf( '--nb-rule-primary-color' ),
		'var(--sm-current-divider-strong-color, color-mix(in srgb, currentColor 45%, transparent))'
	);
	assert.equal(
		valueOf( '--nb-rule-secondary-color' ),
		'var(--sm-current-divider-color, color-mix(in srgb, currentColor 20%, transparent))'
	);
} );

// The historical tokens stay as aliases of the roles: subtle -> secondary,
// strong -> primary (the #668 migration map), and the single weight follows
// the secondary (default) role. Both weights are 1px, so the alias is exact.
test( 'keeps the historical rule tokens as aliases of the roles', () => {
	assert.equal( valueOf( '--nb-rule-weight' ), 'var(--nb-rule-secondary-weight)' );
	assert.equal( valueOf( '--nb-rule-color' ), 'var(--nb-rule-secondary-color)' );
	assert.equal( valueOf( '--nb-rule-strong-color' ), 'var(--nb-rule-primary-color)' );
} );

// The aliases resolve per element (`*`), so they must sit in the same block as
// the roles they read; a `:root` alias would bake in the root's currentColor.
test( 'declares roles and aliases on every element, roles first', () => {
	const props = declarations().map( d => d.prop );
	for ( const prop of [ '--nb-rule-primary-color', '--nb-rule-secondary-color', '--nb-rule-weight', '--nb-rule-color', '--nb-rule-strong-color' ] ) {
		assert.ok( props.includes( prop ), `${ prop } must be declared in the \`*\` block` );
	}
	assert.ok( props.indexOf( '--nb-rule-secondary-color' ) < props.indexOf( '--nb-rule-color' ) );
	assert.doesNotMatch( source.match( /:root\s*\{[\s\S]*?\n\}/ )[ 0 ], /--nb-rule/ );
} );
