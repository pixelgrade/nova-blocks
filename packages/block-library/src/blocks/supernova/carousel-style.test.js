const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const carouselStylePath = path.join(__dirname, 'scss', '_carousel.scss');
const carouselStyleSource = fs.readFileSync(carouselStylePath, 'utf8');

test('mobile carousel gutters stay available for regular carousels', () => {
  assert.match(
    carouselStyleSource,
    /@include\s+below\(lap\)\s*\{[\s\S]*?\.slick-slide\s*\{[\s\S]*?padding-left:\s*calc\(var\(--nb-grid-spacing\)\s*\/\s*4\);[\s\S]*?padding-right:\s*calc\(var\(--nb-grid-spacing\)\s*\/\s*4\);/
  );
});

test('mobile fixed full-width stacked slideshows do not inherit carousel gutters', () => {
  assert.match(
    carouselStyleSource,
    /\.nb-supernova--card-layout-stacked\.nb-supernova--1-columns\.nb-supernova--align-full\s*\{[\s\S]*?@include\s+below\(lap\)\s*\{[\s\S]*?\.nb-collection__layout--carousel\.nb-collection__layout--fixed-width\s+\.slick-slide\s*\{[\s\S]*?padding-left:\s*0;[\s\S]*?padding-right:\s*0;/
  );
});
