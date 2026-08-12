const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );
const sass = require( 'sass' );

const baseStyles = path.resolve( __dirname, '..' );
const coreEntry = path.resolve( __dirname, '../../core/src/style.scss' );
const generatedContainers = fs.readFileSync(
	path.join( baseStyles, '_layout-containers.generated.scss' ),
	'utf8'
);
const compiled = sass.compileString(
	'@import "functions"; @import "mixins";' + fs.readFileSync( coreEntry, 'utf8' ),
	{
		loadPaths: [ baseStyles, path.dirname( coreEntry ) ],
		style: 'expanded',
		silenceDeprecations: [ 'import', 'global-builtin', 'slash-div' ],
	}
).css;

test( 'editor layout roots defeat the constrained-layout width clamp without replacing grid roles', () => {
	const override = compiled.match(
		/\.editor-styles-wrapper\s+:is\(([\s\S]*?)\)\s*>\s*:not\(\.block-list-appender\)\s*\{([\s\S]*?)\}/
	);

	assert.ok(
		override,
		'expected the compiled editor-scoped direct-child override'
	);

	const containerDeclaration = generatedContainers.match(
		/\$nb-layout-grid-parents:\s*'([^']+)'/
	);
	assert.ok( containerDeclaration, 'expected the generated canonical layout-root list' );

	const normalizeSelector = ( selector ) => selector.replace( /["'\s]/g, '' );
	const compiledRoots = override[ 1 ].split( ',' ).map( normalizeSelector );
	const canonicalRoots = containerDeclaration[ 1 ].split( ',' ).map( normalizeSelector );
	assert.deepEqual(
		compiledRoots,
		canonicalRoots,
		'the stronger editor rule must cover every canonical Nova layout root'
	);

	assert.match( override[ 2 ], /max-width:\s*none\s*;/ );
	assert.match( override[ 2 ], /width:\s*100%\s*;/ );
	assert.doesNotMatch(
		override[ 2 ],
		/grid-column|!important/,
		'Content, Wide, and Full placement must remain owned by the named grid lines'
	);
} );
