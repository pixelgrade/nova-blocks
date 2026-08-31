const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const read = ( file ) => fs.readFileSync( path.join( __dirname, file ), 'utf8' );

test( 'Facet choice appearance is author-selectable and backwards compatible', () => {
	const attributes = JSON.parse( read( 'attributes.json' ) );
	const editor = read( 'edit.js' );
	const renderer = read( 'init.php' );

	assert.deepEqual( attributes.choiceStyle, {
		type: 'string',
		default: 'auto',
	} );
	assert.match( editor, /label=\{\s*__\( 'Choice Style'/ );
	assert.match( editor, /selected=\{\s*choiceStyle\s*\}/ );
	assert.match( editor, /Automatic/ );
	assert.match( editor, /Controls/ );
	assert.match( editor, /Text/ );
	assert.match( editor, /setAttributes\( \{ choiceStyle \} \)/ );
	assert.match( renderer, /in_array\([\s\S]*\[\s*'auto',\s*'controls',\s*'text'\s*\][\s\S]*true/ );
	assert.match( renderer, /nb-facetwp-facet--choice-style-/ );
	assert.match( renderer, /\$choice_style/ );
} );

test( 'Facet choices consume design-system controls and keep the Mies text treatment', () => {
	const style = read( 'style.scss' );
	const filterStyle = read( '../facetwp-filter/style.scss' );

	assert.match( style, /\.nb-facetwp-facet\s*\{/ );
	assert.match( style, /--theme-checkbox-width/ );
	assert.match( style, /--theme-input-box-shadow/ );
	assert.match( style, /--theme-input-hover-box-shadow/ );
	assert.match( style, /--sm-current-accent-color/ );
	assert.match( style, /--sm-current-bg-color/ );
	assert.match( style, /--nb-accent-color,\s*currentColor/ );
	assert.match( style, /--nb-bg-color,\s*transparent/ );
	assert.match( style, /--theme-input-border-radius/ );
	assert.match( style, /--theme-transition-duration-quick/ );

	assert.match( style, /&--choice-style-controls/ );
	assert.match( style, /&--choice-style-auto[\s\S]*\.facetwp-checkbox/ );
	assert.match( style, /&--choice-style-text/ );
	assert.match( style, /&--choice-style-auto[\s\S]*\.facetwp-radio/ );
	assert.match( style, /:focus-visible/ );
	assert.match( style, /\[aria-checked=["']true["']\]/ );
	assert.match( style, /\[aria-disabled=["']true["']\]/ );
	assert.match( style, /@media\s*\(pointer:\s*coarse\)/ );
	assert.match( style, /@media\s*\(prefers-reduced-motion:\s*reduce\)/ );
	assert.doesNotMatch( style, /checkbox\.png|radio\.png/ );

	assert.match( filterStyle, /\.facetwp-type-checkboxes/ );
	assert.match( filterStyle, /\.facetwp-type-radio/ );
	assert.match( filterStyle, /flex-direction:\s*column/ );
} );
