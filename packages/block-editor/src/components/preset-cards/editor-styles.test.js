const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const source = fs.readFileSync(
	path.join( __dirname, 'editor-styles.scss' ),
	'utf8'
);

test( 'disabled preset cards are visibly unavailable and do not receive hover affordance', () => {
	assert.match(
		source,
		/&:not\(\s*:disabled\s*\):not\(\s*\[aria-disabled='true'\]\s*\):hover/
	);
	assert.match(
		source,
		/&:disabled,\s*&\[aria-disabled='true'\]\s*\{[\s\S]*?cursor:\s*not-allowed;[\s\S]*?opacity:\s*0\.5;/
	);
} );
