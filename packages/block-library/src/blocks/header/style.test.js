const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const stylePath = path.join(__dirname, 'style.scss');
const mixinsPath = path.join(__dirname, 'scss', '_mixins.scss');
const mobilePath = path.join(__dirname, 'scss', '_mobile.scss');
const headerMobilePath = path.join(__dirname, 'scss', '_header-mobile.scss');
const menuTogglePath = path.join(__dirname, 'scss', '_menu-toggle.scss');
const headerMobileJsPath = path.join(__dirname, 'frontend', 'components', 'header-mobile.js');

const styleSource = fs.readFileSync(stylePath, 'utf8');
const mixinsSource = fs.readFileSync(mixinsPath, 'utf8');
const mobileSource = fs.readFileSync(mobilePath, 'utf8');
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

test('open mobile menu uses a stable readable color pair instead of palette variation 5', () => {
  assert.doesNotMatch(
    mobileSource,
    /@include\s+apply-variation\(\s*5\s*\);/
  );

  assert.doesNotMatch(
    menuToggleSource,
    /@include\s+apply-variation\(\s*5\s*\);/
  );

  assert.match(
    styleSource,
    /--nb-mobile-menu-background-color:\s*#111111;/
  );

  assert.match(
    styleSource,
    /--nb-mobile-menu-foreground-color:\s*#FFFFFF;/
  );

  assert.match(
    mixinsSource,
    /@mixin\s+mobile-menu-open-color-scheme\s*\{[\s\S]*?--sm-current-bg-color:\s*var\(--nb-mobile-menu-background-color,\s*#111111\);[\s\S]*?--sm-current-fg1-color:\s*var\(--nb-mobile-menu-foreground-color,\s*#FFFFFF\);[\s\S]*?color:\s*var\(--sm-current-fg1-color,\s*#FFFFFF\);/
  );

  assert.match(
    mobileSource,
    /\.nb-header--main\[class\]\s*\{[\s\S]*?@include\s+mobile-menu-open-color-scheme;/
  );

  assert.match(
    mobileSource,
    /\.c-menu-toggle__checkbox:checked\s*~\s*&\.nb-header-background:before\s*\{[\s\S]*?--header-background-opacity:\s*1;/
  );

  assert.match(
    menuToggleSource,
    /\.c-menu-toggle__checkbox:checked\s*~\s*&\s*\{[\s\S]*?@include\s+mobile-menu-open-color-scheme;/
  );
} );
