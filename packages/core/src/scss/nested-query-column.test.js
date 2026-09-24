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

test( 'Post Template and Carousel Queries inside Core Columns use bounded tracks', () => {
	let layoutRoot;
	let nestedQuery;
	let nestedCarouselQuery;
	let genericColumnQuery;

	stylesheet.walkRules( rule => {
		if (
			rule.selector.includes( '.wp-block-query' ) &&
			rule.selector.includes( '.is-root-container' ) &&
			rule.nodes.some( node => node.prop === 'display' && node.value === 'grid' )
		) {
			layoutRoot = rule;
		}

		if ( rule.selector === '.wp-block-column > .wp-block-query:has(> .wp-block-post-template)' ) {
			nestedQuery = rule;
		}

		if ( rule.selector === '.wp-block-column > .wp-block-query:has(> .nb-supernova--layout-carousel)' ) {
			nestedCarouselQuery = rule;
		}

		if ( rule.selector === '.wp-block-column > .wp-block-query' ) {
			genericColumnQuery = rule;
		}
	} );

	assert.ok( layoutRoot, 'the normal Nova Query layout root must remain intact' );
	assert.ok( nestedQuery, 'a Post Template Query needs the bounded column layout' );
	assert.equal( genericColumnQuery, undefined, 'a Supernova Query in the same column must keep its Nova grid for carousel sizing' );
	assert.equal(
		nestedQuery.nodes.find( node => node.prop === 'display' )?.value,
		'block',
		'the column owns the width; its Query wrapper must not instantiate page-wide rail tracks'
	);
	assert.ok(
		nestedQuery.source.start.line > layoutRoot.source.start.line,
		'the scoped correction must follow the generic Nova grid rule'
	);
	assert.equal( nestedQuery.parent.type, 'root', 'the index stays flush with its Core Column on mobile too' );
	assert.ok( nestedCarouselQuery, 'a Carousel Query needs bounded named tracks inside a Core Column' );
	assert.equal(
		nestedCarouselQuery.nodes.find( node => node.prop === 'grid-template-columns' )?.value,
		'[fs] minmax(0, 1fr) [fe]',
		'the carousel must retain its Nova grid and named lines without overflowing its column'
	);
	assert.match( nestedCarouselQuery.parent.params, /min-width:\s*1024px/ );
} );
