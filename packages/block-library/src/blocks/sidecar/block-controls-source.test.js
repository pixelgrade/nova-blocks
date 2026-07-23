const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const source = fs.readFileSync( path.join( __dirname, 'block-controls.js' ), 'utf8' );

test( 'toolbar visibility and active state follow the actual single rail', () => {
  assert.match(
    source,
    /const singleRailSide = getSingleRailSide\(\s*innerBlocks,\s*sidebarPosition\s*\)/
  );
  assert.match( source, /if \(\s*null === singleRailSide\s*\) \{\s*return null;/ );
  assert.match( source, /isActive=\{\s*control === singleRailSide\s*\}/ );
  assert.doesNotMatch( source, /hasExplicitRail/ );
} );

test( 'toolbar flips use the shared atomic layout coordinator without resetting fine-tuning', () => {
  assert.match( source, /applySidecarLayoutChange\(\s*\{/ );
  assert.match( source, /patch:\s*\{\s*sidebarPosition:\s*control\s*\}/ );
  assert.match(
    source,
    /targetSignature:\s*\{\s*hasLeft:\s*control === 'left',\s*hasRight:\s*control === 'right',?\s*\}/
  );
  assert.match( source, /replaceBlock,/ );
  assert.match( source, /setAttributes,/ );
  assert.doesNotMatch( source, /setAttributes\(\s*\{\s*sidebarPosition:\s*control\s*\}\s*\)/ );
} );

test( 'toolbar exposes a focusable-disabled inactive side with its reservation reason', () => {
  assert.match(
    source,
    /const ancestorRailReservations = useAncestorRailReservations\(\s*clientId\s*\)/
  );
  assert.match(
    source,
    /const isUnavailable =\s*control !== singleRailSide\s*&&\s*doesSidecarSignatureConflictWithReservations\(/
  );
  assert.match( source, /isDisabled=\{\s*isUnavailable\s*\}/ );
  assert.match( source, /__experimentalIsFocusable=\{\s*isUnavailable\s*\}/ );
  assert.match(
    source,
    /describedBy=\{\s*isUnavailable\s*\?\s*SIDEBAR_ALIGNMENTS_CONTROLS\[\s*control\s*\]\.unavailableDescription/
  );
  assert.match(
    source,
    /label=\{\s*SIDEBAR_ALIGNMENTS_CONTROLS\[\s*control\s*\]\.label\s*\}/
  );
} );
