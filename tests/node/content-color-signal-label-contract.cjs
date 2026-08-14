const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const root = path.resolve( __dirname, '../..' );

test( 'every content Color Signal surface uses the block-specific label helper', () => {
	const gradeControl = fs.readFileSync(
		path.join( root, 'packages/color-signal/src/components/content-color-grade-control/index.js' ),
		'utf8'
	);
	const toolbar = fs.readFileSync(
		path.join( root, 'packages/color-signal/src/components/block-color-signal-toolbar/index.js' ),
		'utf8'
	);

	assert.match(
		gradeControl,
		/import \{ getContentColorSignalLabel \} from "\.\.\/content-color-signal-control";/
	);
	assert.match(
		gradeControl,
		/label=\{ getContentColorSignalLabel\( colorSignalSupport \) \}/
	);
	assert.match(
		toolbar,
		/import \{ getContentColorSignalLabel \} from "\.\.\/content-color-signal-control";/
	);
	assert.match(
		toolbar,
		/__\( '%1\$s: %2\$s — click for %3\$s', '__plugin_txtd' \),\s*getContentColorSignalLabel\( colorSignalSupport \),\s*currentContentLabel,\s*nextContentLevel\.label/
	);
} );
