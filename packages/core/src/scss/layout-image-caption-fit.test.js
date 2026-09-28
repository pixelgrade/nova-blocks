const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const postcss = require( 'postcss' );
const { compileImports, parseDom, find, winningDeclaration } = require( './cascade-harness.cjs' );

// A resized image's caption keeps to the image's width (GitHub #681).
//
// Core lays a centred image out as `display: table` with the caption as a
// `table-caption`, so the caption wraps at the image's edges. The Nova layout
// grid lays every top-level `.wp-block-image` out as a full-width flex column
// instead (the engine's `width: 100%` stretch), and Anima LT gives the caption
// `width: 100%`, so under a resized image the caption spanned the whole
// content column: a 190px image in a 528px column had a 528px caption that
// started 169px left of the image. A captioned, non-aligned image shrinks its
// figure to the image (never past the track) and its caption does not widen
// it; an authored measure still caps it (layout-child-stretch.test.js).
// Aligned (floated, pulled out, stacked below lap), wide and full images,
// images without a caption and galleries keep the stretch.

const layout = compileImports( [ 'scss/layout', 'blocks/core/gallery/style' ] );

// Anima LT's image block rule (dist/css/blocks/common.css), loaded after Nova.
const anima = postcss.parse( `
.wp-block-image figcaption { width: 100%; text-align: left; }
` );

const sheets = [ layout, anima ];

// Front end: Post Content as WordPress renders it. Editor: the post editor's
// root container, where a block's wrapper is the figure itself and a left or
// right image may carry `data-align`.
const page = `
<body>
  <div class="entry-content wp-block-post-content is-layout-constrained">
    <figure class="wp-block-image size-large" id="full-column"><img src="a.jpg" width="1200" height="800"><figcaption class="wp-element-caption">Full column</figcaption></figure>
    <figure class="wp-block-image size-large is-resized" id="resized"><img src="a.jpg" style="width:420px"><figcaption class="wp-element-caption">Resized</figcaption></figure>
    <figure class="wp-block-image aligncenter size-large is-resized" id="resized-center"><img src="a.jpg" style="width:190px"><figcaption class="wp-element-caption">A long caption</figcaption></figure>
    <figure class="wp-block-image size-large" id="no-caption"><img src="a.jpg"></figure>
    <figure class="wp-block-image alignleft size-medium" id="left"><img src="a.jpg"><figcaption class="wp-element-caption">Left</figcaption></figure>
    <figure class="wp-block-image alignright size-medium" id="right"><img src="a.jpg"><figcaption class="wp-element-caption">Right</figcaption></figure>
    <figure class="wp-block-image alignwide size-large" id="wide"><img src="a.jpg"><figcaption class="wp-element-caption">Wide</figcaption></figure>
    <figure class="wp-block-image alignfull size-large" id="full"><img src="a.jpg"><figcaption class="wp-element-caption">Full</figcaption></figure>
    <figure class="wp-block-gallery has-nested-images columns-3 is-layout-flex" id="gallery">
      <figure class="wp-block-image size-large" id="gallery-item"><img src="a.jpg"><figcaption class="wp-element-caption">Item</figcaption></figure>
      <figcaption class="blocks-gallery-caption wp-element-caption">Gallery</figcaption>
    </figure>
  </div>
  <div class="editor-styles-wrapper">
    <div class="is-root-container is-layout-constrained wp-block-post-content">
      <figure class="block-editor-block-list__block wp-block wp-block-image size-large is-resized" data-type="core/image" id="editor-resized"><img src="a.jpg" style="width:190px"><figcaption class="block-editor-rich-text__editable wp-element-caption">Resized</figcaption></figure>
      <figure class="block-editor-block-list__block wp-block wp-block-image size-large" data-type="core/image" id="editor-no-caption"><img src="a.jpg"></figure>
      <div class="wp-block" data-align="left" id="editor-left-wrapper"><figure class="wp-block-image alignleft" id="editor-left"><img src="a.jpg"><figcaption>Left</figcaption></figure></div>
      <figure class="block-editor-block-list__block wp-block wp-block-image" data-align="right" id="editor-right"><img src="a.jpg"><figcaption>Right</figcaption></figure>
      <figure class="block-editor-block-list__block wp-block wp-block-image alignfull" data-align="full" id="editor-full"><img src="a.jpg"><figcaption>Full</figcaption></figure>
    </div>
  </div>
</body>`;

const dom = parseDom( page );
const valueOf = ( selector, prop, desktop ) => {
	const winner = winningDeclaration( sheets, find( dom, selector ), prop, { desktop } );
	return winner ? winner.value : null;
};
const each = callback => [ true, false ].forEach( desktop => callback( desktop, desktop ? 'desktop' : 'below lap' ) );

const FITTED = [ '#full-column', '#resized', '#resized-center', '#editor-resized' ];
const STRETCHED = [ '#no-caption', '#left', '#right', '#wide', '#full', '#gallery', '#editor-no-caption', '#editor-left-wrapper', '#editor-right', '#editor-full' ];

test( 'a captioned, non-aligned image fits its figure to the image and centres it (#681)', () => {
	each( ( desktop, label ) => {
		FITTED.forEach( selector => {
			assert.equal( valueOf( selector, 'width', desktop ), 'fit-content', `${ selector } width (${ label })` );
			assert.equal( valueOf( selector, 'margin-left', desktop ), 'auto', `${ selector } margin-left (${ label })` );
			assert.equal( valueOf( selector, 'margin-right', desktop ), 'auto', `${ selector } margin-right (${ label })` );
		} );
	} );
} );

test( 'the caption wraps at the image instead of widening the figure (#681)', () => {
	each( ( desktop, label ) => {
		FITTED.forEach( selector => {
			assert.equal( valueOf( `${ selector } > figcaption`, 'contain', desktop ), 'inline-size', `${ selector } caption (${ label })` );
		} );
	} );
} );

test( 'uncaptioned, aligned, wide and full images and galleries keep the stretch (#681)', () => {
	each( ( desktop, label ) => {
		STRETCHED.forEach( selector => {
			assert.equal( valueOf( selector, 'width', desktop ), '100%', `${ selector } width (${ label })` );
		} );
		[ '#left', '#right', '#wide', '#full', '#gallery-item', '#editor-left', '#editor-right', '#editor-full' ].forEach( selector => {
			assert.equal( valueOf( `${ selector } > figcaption`, 'contain', desktop ), null, `${ selector } caption must not be contained (${ label })` );
		} );
	} );
} );

test( 'the caption keeps the theme\'s text alignment (#681)', () => {
	each( desktop => {
		assert.equal( valueOf( '#resized > figcaption', 'text-align', desktop ), 'left' );
	} );
} );
