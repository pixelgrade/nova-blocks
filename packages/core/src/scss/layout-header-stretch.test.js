const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const postcss = require( 'postcss' );
const { compileImports, parseDom, find, winningDeclaration } = require( './cascade-harness.cjs' );

// The header is never stretched by the lifted layout-child rule (GitHub #670).
//
// The header template part (`header.wp-block-template-part`) is a Nova layout
// root, so its children (the Nova header bars and the menu toggle) are layout
// grid children. #660 lifted the grid-child `width: 100%` stretch to (0,4,0)
// so separators in Post Content fill their track. That also beat Anima's
// Border Site Frame pins, `body.has-site-frame .nb-header--main { width: auto;
// left/right: <frame inset> }` (0,2,1) and the small-screen
// `body.has-site-frame-border .nb-header--mobile` (0,2,1): the header kept its
// left inset AND took the full width, so it overhung the right frame edge and
// every page scrolled sideways. The header must cascade exactly as in 2.6.6:
// the engine's (0,2,0) stretch, which the theme's pins beat.

const layout = compileImports( [ 'scss/layout', 'blocks/core/separator/style' ] );

// Anima LT's site-frame header pins (src/scss/components/_site-frame.scss),
// compiled with Nova's `lap` breakpoint. Anima's stylesheet loads after Nova's.
const anima = postcss.parse( `
@media only screen and (min-width: 1024px) {
  body.has-site-frame .nb-header--main,
  body.has-site-frame .nb-header--secondary { width: auto; left: var(--site-frame-inset-left); right: var(--site-frame-inset-right); }
  body.has-site-frame .theme-header-bar { width: auto; left: var(--site-frame-inset-left); right: var(--site-frame-inset-right); }
}
@media not screen and (min-width: 1024px) {
  body.has-site-frame-border .nb-header--mobile { width: auto; left: var(--site-frame-inset-left); right: var(--site-frame-inset-right); }
}
` );

// The front-end markup: Anima's header template part holding the Nova header
// (the mobile bar and masthead are inserted next to the toggle by the header
// script), a div-tagged template part holding a header, and Post Content.
const page = `
<body class="has-site-frame has-site-frame-border">
  <div class="wp-site-blocks">
    <header class="wp-block-template-part">
      <input class="c-menu-toggle__checkbox" type="checkbox">
      <button class="c-menu-toggle"></button>
      <div class="nb-header--mobile nb-header-background nb-header-shadow"></div>
      <div class="nb-header__mobile-masthead nb-header-background"></div>
      <div class="nb-header nb-header--main nb-header-shadow nb-header-background alignfull"></div>
      <div class="wp-block-group theme-header-bar"></div>
    </header>
    <div class="wp-block-template-part div-part">
      <div class="nb-header nb-header--main nb-header-background alignfull"></div>
    </div>
    <main class="wp-block-group">
      <div class="entry-content wp-block-post-content is-layout-constrained">
        <hr class="wp-block-separator has-alpha-channel-opacity">
        <hr class="wp-block-separator alignwide has-alpha-channel-opacity is-style-decorative">
      </div>
    </main>
  </div>
</body>`;

const dom = parseDom( page );
const width = ( selector, desktop, sheets = [ layout, anima ] ) => winningDeclaration( sheets, find( dom, selector ), 'width', { desktop } );

test( 'the Border Site Frame pins the desktop header inside the frame (#670)', () => {
	for ( const selector of [ 'header > .nb-header--main', '.div-part > .nb-header--main' ] ) {
		const winner = width( selector, true );
		assert.equal( winner.value, 'auto', `${ selector } must take the theme's frame pin, not ${ winner.selector }` );
		assert.match( winner.selector, /has-site-frame/ );
	}
} );

test( 'any bar a theme pins in the header template part keeps its pin (#670)', () => {
	const winner = width( 'header > .theme-header-bar', true );
	assert.equal( winner.value, 'auto', `a header part child must not be lifted, got ${ winner.selector }` );
} );

test( 'the Border Site Frame pins the small-screen header inside the frame (#670, anima#608)', () => {
	const winner = width( '.nb-header--mobile', false );
	assert.equal( winner.value, 'auto', `the mobile header must take the theme's frame pin, not ${ winner.selector }` );
} );

test( 'header children keep the 2.6.6 stretch at its 2.6.6 weight', () => {
	for ( const desktop of [ true, false ] ) {
		for ( const selector of [ 'header > .nb-header--main', 'header > .nb-header--mobile', 'header > .c-menu-toggle', 'header > .nb-header__mobile-masthead', 'header > .theme-header-bar', '.div-part > .nb-header--main' ] ) {
			const winner = width( selector, desktop, [ layout ] );
			assert.equal( winner.value, '100%', `${ selector } (${ desktop ? 'desktop' : 'small' })` );
			assert.deepEqual( winner.specificity, [ 0, 2, 0 ], `${ selector } is stretched by ${ winner.selector }` );
		}
	}
} );

test( 'separators in Post Content still fill their track (#660)', () => {
	for ( const desktop of [ true, false ] ) {
		for ( const selector of [ 'hr.wp-block-separator:not(.alignwide)', 'hr.wp-block-separator.alignwide' ] ) {
			const winner = width( selector, desktop );
			assert.equal( winner.value, '100%', `${ selector } (${ desktop ? 'desktop' : 'small' }) lost to ${ winner.selector }` );
		}
	}
} );
