const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );
const postcss = require( 'postcss' );
const sass = require( 'sass' );

const baseStyles = path.resolve( __dirname, '../../../base-styles' );
const coreEntry = path.resolve( __dirname, '../style.scss' );
const css = sass.compileString(
	'@import "functions"; @import "mixins";' + fs.readFileSync( coreEntry, 'utf8' ),
	{
		loadPaths: [ baseStyles, path.dirname( coreEntry ) ],
		silenceDeprecations: [ 'import', 'global-builtin', 'slash-div', 'color-functions', 'abs-percent' ],
	}
).css;
const stylesheet = postcss.parse( css );

test( 'a Query directly inside a Core Column uses the column width instead of Nova page tracks on desktop', () => {
	let layoutRoot;
	let nestedQuery;

	stylesheet.walkRules( rule => {
		if (
			rule.selector.includes( '.wp-block-query' ) &&
			rule.selector.includes( '.is-root-container' ) &&
			rule.nodes.some( node => node.prop === 'display' && node.value === 'grid' )
		) {
			layoutRoot = rule;
		}

		if ( rule.selector === '.wp-block-column > .wp-block-query' ) {
			nestedQuery = rule;
		}
	} );

	assert.ok( layoutRoot, 'the normal Nova Query layout root must remain intact' );
	assert.ok( nestedQuery, 'a direct Core Column child needs a bounded flow layout' );
	assert.equal(
		nestedQuery.nodes.find( node => node.prop === 'display' )?.value,
		'block',
		'the column owns the width; its Query wrapper must not instantiate page-wide rail tracks'
	);
	assert.ok(
		nestedQuery.source.start.line > layoutRoot.source.start.line,
		'the scoped correction must follow the generic Nova grid rule'
	);
	assert.match( nestedQuery.parent.params, /min-width:\s*1024px/ );
} );
