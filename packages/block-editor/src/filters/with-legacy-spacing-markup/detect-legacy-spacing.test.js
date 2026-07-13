const fs = require( 'fs' );

const {
  detectLegacySpacingFlags,
} = require('./detect-legacy-spacing');

test('returns null for blocks outside the legacy space-and-sizing list', () => {
	expect(
		detectLegacySpacingFlags( 'core/paragraph', '<div style="--nb-emphasis-top-spacing:0"></div>' ),
	).toBeNull();
});

test('returns null when innerHTML is not a string', () => {
	expect( detectLegacySpacingFlags( 'core/columns', undefined ) ).toBeNull();
});

test('flags content with none of the --nb-* custom properties as legacy', () => {
	expect(
		detectLegacySpacingFlags( 'core/columns', '<div class="wp-block-columns alignwide"></div>' ),
	).toEqual( { noSpacingMarkup: true } );
});

test('preserves existing Color Signal markup independently from legacy spacing markup', () => {
	expect(
		detectLegacySpacingFlags(
			'core/group',
			'<div class="wp-block-group sm-palette-1 sm-variation-1" data-palette="1" data-palette-variation="1" data-color-signal="0"></div>'
		),
	).toEqual( { noSpacingMarkup: true, hasColorSignalMarkup: true } );
});

test('flags nothing (all-false) for current content that already carries every var', () => {
  const innerHTML = '<div style="--nb-emphasis-top-spacing:0;--nb-card-media-aspect-ratio:1;--nb-min-height-fallback:0;--nb-block-zindex:0"></div>';

	expect(
		detectLegacySpacingFlags( 'core/group', innerHTML ),
	).toEqual( {
			missingAspectRatioVar: false,
			missingMinHeightFallbackVar: false,
			zIndexSerializedAsPx: false,
		} );
});

test('flags partial drift when some but not all newer vars are present', () => {
	const innerHTML = '<div style="--nb-emphasis-top-spacing:0;--nb-card-media-padding-top:100%;--nb-block-zindex:0px;"></div>';

	expect(
		detectLegacySpacingFlags( 'core/separator', innerHTML ),
	).toEqual( {
			missingAspectRatioVar: true,
			missingMinHeightFallbackVar: true,
			zIndexSerializedAsPx: true,
			legacyCardMediaPaddingTop: '100%',
		} );
});

test( 'uses browser-safe ES module exports inside the editor package', () => {
	const source = fs.readFileSync( require.resolve( './detect-legacy-spacing' ), 'utf8' );

	expect( source ).not.toMatch( /module\.exports/ );
} );
