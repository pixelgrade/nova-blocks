const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const stylePath = path.join(__dirname, 'style.scss');
const headerMobilePath = path.join(__dirname, 'scss', '_header-mobile.scss');
const menuTogglePath = path.join(__dirname, 'scss', '_menu-toggle.scss');
const headerMobileJsPath = path.join(__dirname, 'frontend', 'components', 'header-mobile.js');

const styleSource = fs.readFileSync(stylePath, 'utf8');
const headerMobileSource = fs.readFileSync(headerMobilePath, 'utf8');
const menuToggleSource = fs.readFileSync(menuTogglePath, 'utf8');
const headerMobileJsSource = fs.readFileSync(headerMobileJsPath, 'utf8');

test('mobile header spacing includes the iOS safe-area top inset', () => {
  assert.match(
    styleSource,
    /--nb-mobile-header-safe-area-inset-top:\s*env\(safe-area-inset-top,\s*0px\);/
  );

  assert.match(
    headerMobileSource,
    /:is\(\.nb-header--mobile,\s*#more\.specific\)\s*\{[\s\S]*?padding-top:\s*calc\(var\(--theme-spacing-fluid-smaller\)\s*\+\s*var\(--nb-mobile-header-safe-area-inset-top,\s*0px\)\);/
  );

  assert.match(
    menuToggleSource,
    /\.c-menu-toggle__wrap\s*\{[\s\S]*?padding-top:\s*calc\(1em\s*\+\s*var\(--nb-mobile-header-safe-area-inset-top,\s*0px\)\);/
  );
} );

test('generated mobile header lets stylesheet safe-area padding override copied inline spacing', () => {
  assert.match(
    headerMobileJsSource,
    /this\.element\.setAttribute\(\s*'style',\s*this\.parent\.element\.getAttribute\(\s*'style'\s*\)\s*\);\s*this\.element\.style\.removeProperty\(\s*'padding-top'\s*\);/
  );
} );
