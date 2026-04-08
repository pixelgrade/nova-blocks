const test = require('node:test');
const assert = require('node:assert/strict');

const {
  getSpaceAndSizingPreviewState,
} = require('./get-space-and-sizing-preview-state');

test('shows the preview only when support, selection, drawer state, and preference all match', () => {
  assert.deepEqual(
    getSpaceAndSizingPreviewState( {
      supportsSpaceAndSizing: true,
      isSelected: true,
      activeDrawerId: 'space-and-sizing',
      showSpaceAndSizingPreview: true,
    } ),
    {
      hasSpaceAndSizingSupport: true,
      isPreviewVisible: true,
    }
  );
} );

test('hides the preview when the active drawer is not space-and-sizing', () => {
  assert.deepEqual(
    getSpaceAndSizingPreviewState( {
      supportsSpaceAndSizing: true,
      isSelected: true,
      activeDrawerId: 'colors',
      showSpaceAndSizingPreview: true,
    } ),
    {
      hasSpaceAndSizingSupport: true,
      isPreviewVisible: false,
    }
  );
} );

test('hides the preview when the preference is disabled', () => {
  assert.deepEqual(
    getSpaceAndSizingPreviewState( {
      supportsSpaceAndSizing: true,
      isSelected: true,
      activeDrawerId: 'space-and-sizing',
      showSpaceAndSizingPreview: false,
    } ),
    {
      hasSpaceAndSizingSupport: true,
      isPreviewVisible: false,
    }
  );
} );

test('hides the preview for unsupported blocks', () => {
  assert.deepEqual(
    getSpaceAndSizingPreviewState( {
      supportsSpaceAndSizing: false,
      isSelected: true,
      activeDrawerId: 'space-and-sizing',
      showSpaceAndSizingPreview: true,
    } ),
    {
      hasSpaceAndSizingSupport: false,
      isPreviewVisible: false,
    }
  );
} );
