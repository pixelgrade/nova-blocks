const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const coreInit = fs.readFileSync( path.resolve( __dirname, '../../init.php' ), 'utf8' );
const style = fs.readFileSync( path.resolve( __dirname, '../../../style.scss' ), 'utf8' );
const scssPath = path.resolve( __dirname, '../../../scss/components/post-template/_numbered-index.scss' );

test( 'the numbered Post Template index is an editor-selectable, opt-in style', () => {
	assert.match( coreInit, /post-template\/init\.php/ );
	const init = fs.readFileSync( path.resolve( __dirname, 'init.php' ), 'utf8' );
	assert.match( init, /register_block_style\(\s*'core\/post-template'/ );
	assert.match( init, /'name'\s*=>\s*'numbered-index'/ );
	assert.match( style, /scss\/components\/post-template\/numbered-index/ );
} );

test( 'index rows stay in the query rail with ordered markers and hairlines', () => {
	const scss = fs.readFileSync( scssPath, 'utf8' );
	assert.match( scss, /\.wp-block-post-template\.is-style-numbered-index/ );
	assert.match( scss, /counter-reset:\s*nb-post-index/ );
	assert.match( scss, /counter-increment:\s*nb-post-index/ );
	assert.match( scss, /counter\(nb-post-index,\s*decimal-leading-zero\)/ );
	assert.match( scss, /grid-template-columns:\s*2\.25em\s+minmax\(0,\s*1fr\)/ );
	assert.match( scss, /border-bottom:/ );
	assert.match( scss, /:not\(:first-child\)[^{]*\{[^}]*margin-top:\s*0/ );
	assert.match( scss, /\.wp-block-query:has\(> \.wp-block-post-template\.is-style-numbered-index\)[^{]*\{[^}]*--nb-block-top-spacing:\s*0\.5/ );
} );
