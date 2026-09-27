const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const path = require( 'node:path' );
const postcss = require( 'postcss' );
const sass = require( 'sass' );

const REPO_ROOT = path.resolve( __dirname, '../../../../../..' );
const CORE_SRC = path.join( REPO_ROOT, 'packages/core/src' );

const compile = entry => postcss.parse( sass.compileString( `@import '${ entry }';\n`, {
	loadPaths: [ path.join( REPO_ROOT, 'packages/base-styles' ), CORE_SRC ],
	silenceDeprecations: [ 'import', 'global-builtin', 'slash-div', 'color-functions', 'abs-percent' ],
} ).css );

const measureRules = sheet => {
	const rules = [];
	sheet.walkRules( rule => {
		if ( rule.selector.includes( 'nb-post-content--measure' ) ) {
			rules.push( rule );
		}
	} );
	return rules;
};
const decl = ( rule, prop ) => rule.nodes.find( node => node.type === 'decl' && node.prop === prop );

test( 'an authored Post Content measure caps default-aligned children at the content start (#650)', () => {
	const [ rule, wide, ...rest ] = measureRules( compile( "mixins';\n@import 'blocks/core/post-content/style" ) );

	assert.ok( rule, 'the measure rule exists' );
	assert.equal( rest.length, 0 );

	// Wide children keep their own track instead of WordPress's centred wide cap.
	assert.match( wide.selector, /> :is\(\.alignwide, \[data-align=("?)wide\1\]\)$/ );
	assert.equal( decl( wide, 'max-width' ).value, 'none' );
	assert.ok( decl( wide, 'margin-inline' ).important );
	assert.equal( decl( rule, 'max-width' ).value, 'min(var(--nb-post-content-measure), 100%)' );
	assert.equal( decl( rule, 'margin-inline-start' ).value, '0' );
	assert.ok( decl( rule, 'margin-inline-start' ).important, 'beats WordPress constrained layout margin:auto !important' );
	assert.equal( decl( rule, 'justify-self' ).value, 'start' );

	const selector = rule.selector.replace( /\s+/g, ' ' ).replace( /"/g, '' );
	for ( const excluded of [ '.alignwide', '.alignfull', '.alignleft', '.alignright', '[data-align=wide]', '[data-align=full]' ] ) {
		assert.ok( selector.includes( excluded ), `${ excluded } keeps its own track` );
	}
} );

test( 'the core stylesheet ships the measure rule after the layout engine resets', () => {
	const sheet = compile( "mixins';\n@import 'style" );
	const rules = measureRules( sheet );
	assert.equal( rules.length, 2, 'the measure rule and the wide-track rule ship in the core stylesheet' );

	// The engine clears grid children (`> *:not(.block-list-appender) { max-width: none }`);
	// the measure rule must out-specify it (two classes on the parent + :not()).
	assert.match( rules[ 0 ].selector, /^\.wp-block-post-content\.nb-post-content--measure\.nb-post-content--measure > :not\(/ );
} );

// Post Content inside a template-level Group (GitHub #663). A `page` template
// saved in the database (Anima LT's plain template: header, a constrained
// `main` Group holding the featured image, the title and Post Content, footer)
// puts Post Content directly in a Group. Post Content is a layout ROOT there:
// its parent is no Nova layout grid, so it declares its own 13 tracks from its
// own box. The Group child cap ((0,3,0) `max-width: var(--nb-content-width)`)
// and WordPress's constrained `max-width` beat the root's (0,1,0)
// `max-width: none`, and the Group's side padding insets it further. Its grid
// still subtracts both rails and gaps from that narrow box, so the content
// tracks came out at 0 and paragraphs were as wide as the center gap (60.6px
// at 1280). Post Content must span the Group's whole box, as it spans the
// viewport in Anima's own page template. Resolved on a static DOM with the
// real compiled sheets and WordPress's constrained-layout rules.
const { compileImports, parseDom, find, winningDeclaration } = require( '../../../scss/cascade-harness.cjs' );

const nova = compileImports( [ 'style' ] );

// WordPress's constrained layout (global styles; the editor scopes the same
// rules to `.editor-styles-wrapper`), printed after Nova's stylesheet.
const core = postcss.parse( `
.is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)) { max-width: var(--wp--style--global--content-size); margin-left: auto !important; margin-right: auto !important; }
.wp-container-core-group-is-layout-1 > :where(:not(.alignleft):not(.alignright):not(.alignfull)) { max-width: var(--wp--style--global--content-size); margin-left: auto !important; margin-right: auto !important; }
.editor-styles-wrapper .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)) { max-width: var(--wp--style--global--content-size); margin-left: auto !important; margin-right: auto !important; }
` );

const templatePage = parseDom( `
<div class="wp-site-blocks">
  <header class="wp-block-template-part"></header>
  <main class="wp-block-group db-main is-layout-constrained wp-container-core-group-is-layout-1">
    <figure class="wp-block-post-featured-image alignwide"></figure>
    <h1 class="wp-block-post-title">Title</h1>
    <div class="entry-content wp-block-post-content is-layout-constrained"><p class="in-root">Text</p></div>
  </main>
  <main class="wp-block-group measured-main nb-group--measure is-layout-constrained">
    <div class="entry-content wp-block-post-content is-layout-constrained"></div>
  </main>
  <div class="wp-block-group wp-block-row is-layout-flex row-group">
    <div class="entry-content wp-block-post-content"></div>
  </div>
  <div class="nb-sidecar nb-sidecar--no-left-rail nb-sidecar--no-right-rail">
    <div class="nb-sidecar-area nb-sidecar-area--content">
      <div class="entry-content wp-block-post-content is-layout-constrained default-root"></div>
      <div class="wp-block-group is-layout-constrained pass-group">
        <div class="entry-content wp-block-post-content is-layout-constrained"></div>
      </div>
    </div>
  </div>
</div>
<div class="editor-styles-wrapper"><div class="is-root-container wp-site-blocks">
  <main class="wp-block wp-block-group editor-main is-layout-constrained">
    <h1 class="wp-block wp-block-post-title">Title</h1>
    <div class="wp-block wp-block-post-content is-layout-constrained"></div>
  </main>
</div></div>` );

const cascade = ( selector, prop, desktop ) => winningDeclaration( [ nova, core ], find( templatePage, selector ), prop, { desktop } );
const bleed = 'calc(-1 * var(--nb-group-side-padding))';
const valueOf = winner => ( winner ? winner.value.replace( /\s+/g, ' ' ) : null );

test( 'Post Content in a template-level Group spans the whole Group box (#663)', () => {
	for ( const desktop of [ true, false ] ) {
		const when = desktop ? 'desktop' : 'small';
		for ( const selector of [ '.db-main > .wp-block-post-content', '.measured-main > .wp-block-post-content', '.editor-main > .wp-block-post-content' ] ) {
			const maxWidth = cascade( selector, 'max-width', desktop );
			assert.equal( maxWidth.value, 'none', `${ selector } (${ when }) is capped by ${ maxWidth.selector }` );

			const width = cascade( selector, 'width', desktop );
			assert.equal( width.value, 'auto', `${ selector } (${ when }) is sized by ${ width.selector }` );

			// Through the Group's side padding, like the Group's own full children,
			// over WordPress's `margin: auto !important`.
			for ( const side of [ 'margin-left', 'margin-right' ] ) {
				const margin = cascade( selector, side, desktop );
				assert.equal( margin.value.replace( /\s+/g, ' ' ), bleed, `${ selector } ${ side } (${ when }) is set by ${ margin.selector }` );
				assert.ok( margin.important, `${ selector } ${ side } must beat the constrained layout's !important margins` );
			}
		}
	}
} );

test( 'the other children of that Group keep the Group cap (#663)', () => {
	for ( const desktop of [ true, false ] ) {
		for ( const selector of [ '.db-main > .wp-block-post-title', '.editor-main > .wp-block-post-title' ] ) {
			const winner = cascade( selector, 'max-width', desktop );
			assert.equal( winner.value, 'var(--nb-content-width)', `${ selector } lost its cap to ${ winner.selector }` );
			assert.equal( cascade( selector, 'margin-left', desktop ).value, 'auto' );
		}
	}
} );

test( 'Post Content in a Nova layout grid or a row Group is left as it was (#663)', () => {
	// A pass-through Post Content in a Sidecar area, and one in a Group that
	// passes the grid through: no bleed (the pass-through owns their box).
	for ( const selector of [ '.default-root', '.pass-group > .wp-block-post-content' ] ) {
		for ( const desktop of [ true, false ] ) {
			const margin = cascade( selector, 'margin-left', desktop );
			assert.notEqual( valueOf( margin ), bleed, `${ selector } bleeds through ${ margin && margin.selector }` );
		}
	}
	const passGroup = cascade( '.pass-group > .wp-block-post-content', 'margin-left', true );
	assert.equal( passGroup.value, 'auto', 'the pass-through Group child keeps WordPress\'s margins as before' );

	// A row Group has no side padding to bleed through.
	const row = cascade( '.row-group > .wp-block-post-content', 'margin-left', true );
	assert.notEqual( valueOf( row ), bleed );
} );
