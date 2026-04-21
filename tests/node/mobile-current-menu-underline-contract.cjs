const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );
const test = require( 'node:test' );

const sourcePath = path.resolve(
  __dirname,
  '../../packages/block-library/src/blocks/header/scss/_header-mobile.scss'
);

const source = fs.readFileSync( sourcePath, 'utf8' );

test( 'open mobile menu current item uses inherited text color and active underline', () => {
  assert.match(
    source,
    /\.c-menu-toggle__checkbox:checked\s*~\s*\.nb-header[\s\S]*?>\s*:is\(\s*ul\.menu,\s*\.menu\s*>\s*ul\s*\)\s*>\s*li\[class\*=["']current["']\]/,
    'open mobile menu current item styles must be scoped to the checked menu state'
  );

  assert.match(
    source,
    /li\[class\*=["']current["']\][\s\S]*?color:\s*inherit;/,
    'current mobile menu items must keep the menu text color instead of using the active accent color'
  );

  assert.match(
    source,
    />\s*a\s*\{[\s\S]*?&:before\s*\{[\s\S]*?background:\s*currentColor;[\s\S]*?transform:\s*scale3d\(1,\s*1,\s*1\);/,
    'current mobile menu items must render the desktop-style active underline with currentColor'
  );

  assert.match(
    source,
    />\s*a\s*\{[\s\S]*?display:\s*inline-block;/,
    'current mobile menu links must size to their text so the underline does not span the full row'
  );
} );

test( 'open mobile menu social items keep a readable horizontal gap', () => {
  assert.match(
    source,
    /\.c-menu-toggle__checkbox:checked\s*~\s*\.nb-header[\s\S]*?\.social-menu-item\s*\+\s*\.social-menu-item\s*\{[\s\S]*?margin-left:\s*\.35em;/,
    'adjacent social menu items must have a small horizontal gap in the open mobile menu'
  );
} );
