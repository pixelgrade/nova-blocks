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

test( 'open mobile menu items replay the active intro animation style on every open', () => {
  assert.match(
    source,
    /@media\s*\(prefers-reduced-motion:\s*no-preference\)[\s\S]*?body\.has-intro-animations\s+\.c-menu-toggle__checkbox:checked\s*~\s*\.nb-header[\s\S]*?>\s*:is\(\s*ul\.menu,\s*\.menu\s*>\s*ul\s*\)\s*>\s*li\s*\{[\s\S]*?animation:\s*nb-mobile-menu-item-intro\s+var\(--anima-intro-duration/,
    'mobile menu item intro animation must be scoped to the checked menu state and use the Style Manager duration'
  );

  assert.match(
    source,
    /animation:[\s\S]*?var\(--anima-intro-easing/,
    'mobile menu item intro animation must use the Style Manager easing'
  );

  assert.match(
    source,
    /body\.has-intro-animations\s+\.c-menu-toggle__checkbox:checked\s*~\s*\.nb-header\s*&\s*\{[\s\S]*?transition:\s*none;/,
    'active intro animations must disable the parent opacity transition so item animations remain visible'
  );

  assert.match(
    source,
    /--nb-mobile-menu-items-intro-delay:\s*\.4s;/,
    'mobile menu item intro animation must wait for the existing 0.4s panel slide transition'
  );

  assert.match(
    source,
    /animation-delay:\s*calc\(var\(--nb-mobile-menu-items-intro-delay,\s*\.4s\)\s*\+\s*var\(--nb-mobile-menu-item-index,\s*0\)\s*\*\s*var\(--nb-mobile-menu-item-stagger/,
    'mobile menu item intro animation must combine the panel slide delay with the per-item stagger'
  );

  assert.match(
    source,
    /body\.has-intro-animations--slide[\s\S]*?--nb-mobile-menu-item-intro-transform:\s*translate3d\(0,\s*calc\(var\(--anima-intro-distance,\s*42px\)\s*\*\s*\.5\),\s*0\);/,
    'slide intro style must reuse the Style Manager intro distance token'
  );

  assert.match(
    source,
    /@keyframes\s+nb-mobile-menu-item-intro[\s\S]*?from\s*\{[\s\S]*?opacity:\s*0;[\s\S]*?transform:\s*var\(--nb-mobile-menu-item-intro-transform/,
    'mobile menu intro keyframes must stage items from the selected intro style'
  );
} );
