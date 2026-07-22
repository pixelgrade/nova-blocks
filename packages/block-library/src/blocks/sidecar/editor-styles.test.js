const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

// Task 3.0b: the editor canvas must keep the multi-column Sidecar layout under
// the Desktop device preview even when the canvas is narrower than `lap`, while
// Tablet/Mobile previews still collapse. The pin is a device-preview-scoped
// re-assertion of the shared desktop mixins (frontend is untouched — these
// rules live only in editor-styles.scss). These assertions lock in the wiring
// so a refactor cannot silently drop the pin or its Tablet/Mobile exclusion.
test( 'editor-styles pins the desktop Sidecar layout under the Desktop preview only', () => {
	const source = fs.readFileSync(
		path.join( __dirname, 'editor-styles.scss' ),
		'utf8'
	);

	// The device-preview scope excludes BOTH Tablet and Mobile, so those
	// previews collapse naturally through the frontend below(`lap`) rules.
	assert.match(
		source,
		/\.editor-styles-wrapper:not\(\[data-nb-device-preview="Tablet"\]\):not\(\[data-nb-device-preview="Mobile"\]\)/,
		'expected the device-preview scope excluding Tablet and Mobile'
	);

	// The pin re-asserts the shared desktop mixins (single source of truth with
	// the frontend engine) rather than duplicating the coordinate template.
	assert.match(
		source,
		/@include nb-layout-desktop-template-columns/,
		'expected the desktop template mixin to be re-asserted'
	);
	assert.match(
		source,
		/@include nb-sidecar-desktop-layout/,
		'expected the shared sidecar desktop-layout mixin to be re-asserted'
	);
} );
