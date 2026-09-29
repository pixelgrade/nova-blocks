const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );
const postcss = require( 'postcss' );
const sass = require( 'sass' );
const { parseDom, find, selectorsOf, winningDeclaration } = require( './cascade-harness.cjs' );

// Firefox 115 ESR (GitHub #685). The last Firefox for Windows 7/8 has no
// container style queries (Firefox 128+) and no `:has()` (121+), and ignores
// `@property` (128+). Every rule below resolves the cascade twice on the same
// markup — once as a current browser renders it, once as Firefox 115 does —
// and asserts the same winner.
//
// Row 1: the Content Inset contract lives behind
//   `@container style(--sm-content-inset-explicit: 1)`. Nova prints the body
//   class `nb-content-inset-explicit` from the same server state (see
//   lib/content-inset.php), and every gated rule has a zero-specificity twin
//   under `:where(body.nb-content-inset-explicit)`.
// Row 2: a Group pass-through is a subgrid; Firefox 115 still applies core's
//   `.is-layout-constrained > .alignwide { max-width }` to it.
// Row 3: the Sidecar divider rule's "rail has content" test is `:has()`; the
//   render prints `nb-sidecar--has-{left,right}-content` instead.
// Row 4: the dropcap line's `scaleY(var(--nb-dropcap-line-scale-y))` needs a
//   fallback where `@property` gives the var no initial value.
// Row 5: #681's caption fit is gated on `:has(> figcaption)`; the core/image
//   render prints `nb-image--has-caption` instead.

const REPO_ROOT = path.resolve( __dirname, '../../../..' );
const BASE_STYLES = path.join( REPO_ROOT, 'packages/base-styles' );
const SASS_OPTIONS = { silenceDeprecations: [ 'import', 'global-builtin', 'slash-div', 'color-functions', 'abs-percent' ] };
const SIGNAL = 'style(--sm-content-inset-explicit: 1)';
const CLASS_TWIN = ':where(body.nb-content-inset-explicit)';

const compile = ( entries, dir ) => postcss.parse( sass.compileString(
	"@import 'mixins';\n" + entries.map( entry => `@import '${ entry }';\n` ).join( '' ),
	{ ...SASS_OPTIONS, loadPaths: [ BASE_STYLES, dir ] }
).css );

const layout = compile( [ 'scss/layout', 'blocks/core/group/style' ], path.join( REPO_ROOT, 'packages/core/src' ) );
const sidecar = compile( [ 'style' ], path.join( REPO_ROOT, 'packages/block-library/src/blocks/sidecar' ) );
const supernovaItem = compile( [ 'style' ], path.join( REPO_ROOT, 'packages/block-library/src/blocks/supernova-item' ) );
const supernova = compile( [ 'style' ], path.join( REPO_ROOT, 'packages/block-library/src/blocks/supernova' ) );

// Style Manager's opt-in signal, as it prints it once a Content Inset is saved.
const smSignal = postcss.parse( ':root { --sm-content-inset-explicit: 1; }' );

// WordPress core's constrained layout (global styles), which Group
// pass-throughs sit in.
const coreLayout = postcss.parse( `
.is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)) { max-width: var(--wp--style--global--content-size); margin-left: auto !important; margin-right: auto !important; }
.is-layout-constrained > .alignwide { max-width: var(--wp--style--global--wide-size); }
` );

const engine = [ layout, sidecar, supernovaItem ];

const MODERN = { styleQueries: true };
const FF115 = { legacy: true };

// A single post with a right rail and a divider rule, a rail-less page
// Sidecar, a Query, a stacked one-column Supernova card, a header part and a
// footer part holding its own Sidecar.
const page = bodyClass => `
<html><body class="${ bodyClass }">
<div class="wp-site-blocks">
  <header class="wp-block-template-part" id="header">
    <div class="wp-block-group alignwide" id="header-group"><p id="header-p">Site</p></div>
  </header>
  <main>
    <div class="nb-sidecar nb-sidecar--sidebar-right nb-sidecar--sidebar-medium nb-content-layout-grid alignfull nb-sidecar--no-left-rail nb-sidecar--has-rule nb-sidecar--rule-primary nb-sidecar--has-right-content" id="single">
      <div class="nb-sidecar-area nb-sidecar-area--content nb-content-layout-grid" id="single-content">
        <h1 class="wp-block-post-title" id="single-title">Title</h1>
        <figure class="wp-block-post-featured-image alignwide" id="single-featured"><img src="a.jpg"></figure>
        <div class="entry-content wp-block-post-content is-layout-constrained" id="single-post">
          <p id="single-p">Text</p>
          <figure class="wp-block-image alignwide" id="single-wide"><img src="a.jpg"></figure>
          <figure class="wp-block-image alignfull" id="single-full"><img src="a.jpg"></figure>
          <figure class="wp-block-image alignleft break-align-left" id="single-pullout"><img src="a.jpg"></figure>
          <p id="single-after-pullout">Beside the pull-out</p>
          <figure class="wp-block-image alignwide nb-break-never" id="single-never"><img src="a.jpg"></figure>
        </div>
        <div class="wp-block-group alignwide nb-break-never" id="single-area-never"><p>Never</p></div>
      </div>
      <div class="nb-sidecar-area nb-sidecar-area--sidebar nb-sidecar-area--sidebar-right" id="single-rail"><p id="single-rail-p">Rail</p></div>
    </div>
    <div class="nb-sidecar nb-sidecar--sidebar-none nb-content-layout-grid alignfull nb-sidecar--no-left-rail nb-sidecar--no-right-rail" id="page">
      <div class="nb-sidecar-area nb-sidecar-area--content nb-content-layout-grid" id="page-content">
        <h1 class="wp-block-post-title" id="page-title">Page</h1>
        <div class="entry-content wp-block-post-content is-layout-constrained" id="page-post">
          <p id="page-p">Text</p>
          <figure class="wp-block-image alignright break-align-right" id="page-pullout"><img src="a.jpg"></figure>
          <p id="page-after-pullout">Beside</p>
          <div class="wp-block-group alignwide is-layout-constrained" id="page-group"><p id="page-group-p">Inside</p><figure class="wp-block-image alignwide" id="page-group-wide"><img src="a.jpg"></figure></div>
        </div>
      </div>
    </div>
    <div class="wp-block-query alignwide" id="query"><h2 id="query-title">Archive</h2></div>
    <div class="nb-supernova nb-supernova--1-columns nb-supernova--card-layout-stacked">
      <div class="nb-collection alignfull">
        <div class="nb-collection__layout">
          <div class="nb-collection__layout-item">
            <div class="nb-supernova-item"><div class="nb-supernova-item__content"><div class="nb-supernova-item__inner-container" id="card-inner"><p id="card-p">Card</p></div></div></div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer class="wp-block-template-part" id="footer">
    <div class="nb-sidecar nb-sidecar--sidebar-none nb-content-layout-grid alignfull nb-sidecar--no-left-rail nb-sidecar--no-right-rail" id="footer-sidecar">
      <div class="nb-sidecar-area nb-sidecar-area--content nb-content-layout-grid" id="footer-content">
        <figure class="wp-block-image alignleft break-align-left" id="footer-pullout"><img src="a.jpg"></figure>
        <p id="footer-after-pullout">Footer text</p>
      </div>
    </div>
    <figure class="wp-block-image alignleft break-align-left" id="footer-bare-pullout"><img src="a.jpg"></figure>
  </footer>
</div>
</body></html>`;

const idsOf = html => [ ...html.matchAll( / id="([\w-]+)"/g ) ].map( match => match[ 1 ] );

// Every property the Content Inset contract sets, plus the placement it
// drives.
const insetProps = () => {
	const props = new Set( [ 'grid-column', 'grid-column-start', 'grid-column-end', 'align-items', 'grid-template-columns' ] );
	for ( const sheet of engine ) {
		sheet.walkAtRules( 'container', rule => {
			if ( rule.params === SIGNAL ) {
				rule.walkDecls( decl => props.add( decl.prop ) );
			}
		} );
	}
	return [ ...props ];
};

const resolve = ( sheets, dom, id, prop, context ) => {
	const winner = winningDeclaration( sheets, find( dom, `#${ id }` ), prop, context );
	return winner ? winner.value.replace( /\s+/g, ' ' ) : null;
};

const compareCascades = ( { sheetsA, domA, contextA }, { sheetsB, domB, contextB }, ids ) => {
	const diffs = [];
	for ( const desktop of [ true, false ] ) {
		for ( const id of ids ) {
			for ( const prop of insetProps() ) {
				const a = resolve( sheetsA, domA, id, prop, { ...contextA, desktop } );
				const b = resolve( sheetsB, domB, id, prop, { ...contextB, desktop } );
				if ( a !== b ) {
					diffs.push( `${ desktop ? 'desktop' : 'below lap' } #${ id } ${ prop }: ${ a } vs ${ b }` );
				}
			}
		}
	}
	return diffs;
};

const signalled = page( 'single nb-content-inset-explicit' );
const unsignalled = page( 'single' );
const IDS = idsOf( signalled );

test( '#685 row 1: Firefox 115 with the body class resolves the Content Inset contract like a current browser with the signal', () => {
	const diffs = compareCascades(
		{ sheetsA: [ smSignal, ...engine ], domA: parseDom( unsignalled ), contextA: MODERN },
		{ sheetsB: [ smSignal, ...engine ], domB: parseDom( signalled ), contextB: FF115 },
		IDS
	);
	assert.deepEqual( diffs, [] );
} );

test( '#685 row 1: the body class changes nothing in a current browser that already has the signal', () => {
	const diffs = compareCascades(
		{ sheetsA: [ smSignal, ...engine ], domA: parseDom( unsignalled ), contextA: MODERN },
		{ sheetsB: [ smSignal, ...engine ], domB: parseDom( signalled ), contextB: MODERN },
		IDS
	);
	assert.deepEqual( diffs, [] );
} );

test( '#685 row 1: without the class and the signal, Firefox 115 and a current browser keep the ungated cascade', () => {
	const diffs = compareCascades(
		{ sheetsA: engine, domA: parseDom( unsignalled ), contextA: MODERN },
		{ sheetsB: engine, domB: parseDom( unsignalled ), contextB: FF115 },
		IDS
	);
	assert.deepEqual( diffs, [] );
} );

test( '#685 row 1: every rule behind the signal has a zero-specificity class twin in the same media context', () => {
	const key = ( rule, selector ) => {
		const chain = [];
		for ( let parent = rule.parent; parent && parent.type === 'atrule'; parent = parent.parent ) {
			if ( ! ( parent.name === 'container' ) ) {
				chain.push( `@${ parent.name } ${ parent.params }` );
			}
		}
		return `${ chain.join( ' ' ) } | ${ selectorsOf( selector ).map( part => part.toString().replace( /\s+/g, ' ' ).trim() ).join( ', ' ) } | ${ rule.nodes.filter( n => n.type === 'decl' ).map( n => `${ n.prop }:${ n.value.replace( /\s+/g, ' ' ) }` ).join( ';' ) }`;
	};
	for ( const sheet of engine ) {
		const twins = new Set();
		sheet.walkRules( rule => {
			if ( rule.selector.includes( CLASS_TWIN ) ) {
				twins.add( key( rule, rule.selector ) );
			}
		} );
		sheet.walkAtRules( 'container', atRule => {
			if ( atRule.params !== SIGNAL ) {
				return;
			}
			atRule.walkRules( rule => {
				let nestedGate = false;
				for ( let parent = rule.parent; parent !== atRule; parent = parent.parent ) {
					nestedGate = nestedGate || ( parent.type === 'atrule' && parent.name === 'container' );
				}
				if ( nestedGate ) {
					return; // The pull-out flag query: its twin is a scoped selector, covered by the cascade tests.
				}
				const twin = selectorsOf( rule.selector ).map( part => `${ CLASS_TWIN } ${ part.toString().trim() }` ).join( ', ' );
				assert.ok( twins.has( key( rule, twin ) ), `no class twin for ${ rule.selector }` );
			} );
		} );
	}
} );

test( '#685 row 2: a Group pass-through is not capped by core\'s wide max-width (Firefox 115 applies it to a subgrid)', () => {
	// Global styles print after Nova's stylesheet, so at equal specificity
	// core's `.is-layout-constrained > .alignwide` beats the engine's stretch.
	// Current browsers ignore max-width on a subgrid's subgridded axis; Firefox
	// 115 does not, so the pass-through must declare its own `max-width: none`.
	const dom = parseDom( unsignalled );
	for ( const context of [ MODERN, FF115 ] ) {
		const winner = prop => winningDeclaration( [ layout, coreLayout ], find( dom, '#page-group' ), prop, { ...context, desktop: true } );
		assert.equal( winner( 'grid-template-columns' ).value, 'subgrid' );
		assert.equal( winner( 'max-width' ).value, 'none', JSON.stringify( context ) );
	}
	// Below lap the Group is no pass-through and keeps core's cap.
	const below = winningDeclaration( [ layout, coreLayout ], find( dom, '#page-group' ), 'max-width', { ...FF115, desktop: false } );
	assert.equal( below.value, 'var(--wp--style--global--wide-size)' );
} );

test( '#685 row 3: the divider rule draws beside a rail with content in Firefox 115', () => {
	const dom = parseDom( unsignalled );
	for ( const context of [ MODERN, FF115 ] ) {
		const winner = winningDeclaration( engine, find( dom, '#single' ), '--nb-sidecar-rule-right', { ...context, desktop: true } );
		assert.match( winner.value, /^linear-gradient/, JSON.stringify( context ) );
	}
	// No content class, no line (an empty rail keeps `none` in Firefox 115).
	const empty = parseDom( unsignalled.replace( ' nb-sidecar--has-right-content', '' ).replace( '<p id="single-rail-p">Rail</p>', '' ) );
	assert.equal( winningDeclaration( engine, find( empty, '#single' ), '--nb-sidecar-rule-right', { ...FF115, desktop: true } ).value, 'none' );
	assert.equal( winningDeclaration( engine, find( empty, '#single' ), '--nb-sidecar-rule-right', { ...MODERN, desktop: true } ).value, 'none' );
} );

test( '#685 row 3: the right divider layer is placed from the left edge (Firefox 115 mis-negates clamp() in a `right` offset)', () => {
	// Firefox 115 turns `right <offset>` into `calc(100% - <offset>)` and, for
	// the rail gap's clamp(), keeps its bounds unswapped, so the line landed
	// outside the Sidecar. `left calc(100% - offset)` is the same position
	// (100% aligns the layer's right edge) and negates correctly.
	let position = null;
	sidecar.walkRules( rule => {
		if ( /\.nb-sidecar--has-rule::before$/.test( rule.selector ) ) {
			rule.walkDecls( 'background-position', decl => {
				position = decl.value.replace( /\s+/g, ' ' );
			} );
		}
	} );
	const [ left, right ] = position.split( /,\s*(?=left|right)/ );
	assert.match( left, /^left calc\(var\(--nb-layout-rail-gap-left, var\(--nb-sidecar-sidebar-left-gap\)\) \/ 2 - var\(--nb-sidecar-rule-weight\) \/ 2\) top 0$/ );
	assert.equal( right, 'left calc(100% - var(--nb-layout-rail-gap-right, var(--nb-sidecar-sidebar-right-gap)) / 2 + var(--nb-sidecar-rule-weight) / 2) top 0' );
} );

test( '#685 row 4: every dropcap line scale has a fallback where @property is unsupported', () => {
	const uses = [];
	supernova.walkDecls( decl => {
		for ( const match of decl.value.matchAll( /var\(\s*--nb-dropcap-line-scale-y\s*(,[^)]*)?\)/g ) ) {
			uses.push( { selector: decl.parent.selector, fallback: match[ 1 ] ? match[ 1 ].slice( 1 ).trim() : null } );
		}
	} );
	assert.ok( uses.length >= 2 );
	let initial = null;
	supernova.walkAtRules( 'property', rule => {
		if ( rule.params === '--nb-dropcap-line-scale-y' ) {
			rule.walkDecls( 'initial-value', decl => {
				initial = decl.value;
			} );
		}
	} );
	for ( const use of uses ) {
		assert.equal( use.fallback, initial, `${ use.selector } falls back to the registered initial value` );
	}
} );

test( '#685 row 5: a captioned image fits its figure to the image in Firefox 115 (#681)', () => {
	const images = parseDom( `
<html><body>
  <div class="entry-content wp-block-post-content is-layout-constrained">
    <figure class="wp-block-image size-large is-resized nb-image--has-caption" id="resized"><img src="a.jpg" style="width:190px"><figcaption class="wp-element-caption">Caption</figcaption></figure>
    <figure class="wp-block-image size-large" id="no-caption"><img src="a.jpg"></figure>
    <figure class="wp-block-image alignleft nb-image--has-caption" id="left"><img src="a.jpg"><figcaption class="wp-element-caption">Left</figcaption></figure>
  </div>
</body></html>` );
	for ( const context of [ MODERN, FF115 ] ) {
		for ( const desktop of [ true, false ] ) {
			const value = ( id, prop ) => winningDeclaration( [ layout ], find( images, id ), prop, { ...context, desktop } ).value;
			assert.equal( value( '#resized', 'width' ), 'fit-content', `${ JSON.stringify( context ) } ${ desktop }` );
			assert.equal( value( '#resized > figcaption', 'contain' ), 'inline-size' );
			assert.equal( value( '#no-caption', 'width' ), '100%' );
			assert.equal( value( '#left', 'width' ), '100%' );
		}
	}
} );
