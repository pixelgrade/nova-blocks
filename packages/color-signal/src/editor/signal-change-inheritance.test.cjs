const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const source = fs.readFileSync( path.join( __dirname, 'utils.js' ), 'utf8' );

test( 'signal changes use the resolved parent palette when inheritance is enabled', () => {
	assert.match(
		source,
		/getSignalChangeAttributes\s*=\s*\(\s*attributes,\s*clientId,\s*nextSignal,\s*inheritParentPalette[\s\S]*?getParentColorContext\(\s*clientId\s*\)[\s\S]*?resolveColorSignalContext\(\s*attributes,\s*parentContext,\s*inheritParentPalette\s*\)[\s\S]*?computeColorSignal\(\s*referenceVariation,\s*nextSignal,\s*palette,/,
		'Inherited controls must compute the requested signal in the surrounding palette, not the stale child default palette.'
	);
} );
