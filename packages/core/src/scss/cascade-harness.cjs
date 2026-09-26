/**
 * A small cascade resolver for stylesheet contract tests.
 *
 * Specificity-only assertions miss the question that matters: which
 * declaration wins on a given element in a given context. This resolves it
 * the way a browser does for the rules the tests feed it: it matches every
 * selector against a static DOM (css-select, which understands `:is()`,
 * `:where()`, `:not()` with selector lists and `:has()`), keeps the rules
 * whose at-rule chain applies at the simulated width, and ranks the matches
 * by importance, Selectors Level 4 specificity, then source order.
 *
 * Only what the Nova layout contracts need is modelled: `@media` with the
 * Nova `lap` breakpoint (desktop / below-desktop), `@supports` (assumed true),
 * and `@container` style queries (assumed false: Content Inset unset).
 */
const path = require( 'node:path' );
const postcss = require( 'postcss' );
const sass = require( 'sass' );
const selectorParser = require( 'postcss-selector-parser' );
const htmlparser2 = require( 'htmlparser2' );
const CSSselect = require( 'css-select' );

const REPO_ROOT = path.resolve( __dirname, '../../../..' );
const SASS_OPTIONS = {
	loadPaths: [ path.join( REPO_ROOT, 'packages/base-styles' ), path.join( REPO_ROOT, 'packages/core/src' ) ],
	silenceDeprecations: [ 'import', 'global-builtin', 'slash-div', 'color-functions', 'abs-percent' ],
};

/** Compile SCSS imports through the real base-styles mixins. */
const compileImports = imports => postcss.parse(
	sass.compileString( "@import 'mixins';\n" + imports.map( entry => `@import '${ entry }';\n` ).join( '' ), SASS_OPTIONS ).css
);

const compare = ( a, b ) => a[ 0 ] - b[ 0 ] || a[ 1 ] - b[ 1 ] || a[ 2 ] - b[ 2 ];

// Selectors Level 4 specificity: :is()/:not()/:has() take their most specific
// argument, :where() counts zero.
const specificityOf = complexSelector => {
	const total = [ 0, 0, 0 ];
	const add = s => s.forEach( ( v, i ) => {
		total[ i ] += v;
	} );
	const max = list => list.reduce( ( best, s ) => ( compare( s, best ) > 0 ? s : best ), [ 0, 0, 0 ] );

	complexSelector.each( node => {
		if ( node.type === 'id' ) {
			add( [ 1, 0, 0 ] );
		} else if ( node.type === 'class' || node.type === 'attribute' ) {
			add( [ 0, 1, 0 ] );
		} else if ( node.type === 'tag' ) {
			add( [ 0, 0, 1 ] );
		} else if ( node.type === 'pseudo' ) {
			const name = node.value.toLowerCase();
			if ( name === ':where' ) {
				return;
			}
			if ( [ ':is', ':not', ':has', ':matches' ].includes( name ) ) {
				add( max( node.nodes.map( specificityOf ) ) );
			} else if ( name.startsWith( '::' ) ) {
				add( [ 0, 0, 1 ] );
			} else {
				add( [ 0, 1, 0 ] );
			}
		}
	} );

	return total;
};

const selectorsOf = selector => {
	const list = [];
	selectorParser( root => root.each( sel => list.push( sel ) ) ).processSync( selector );
	return list;
};

const atRulesApply = ( rule, { desktop } ) => {
	for ( let parent = rule.parent; parent; parent = parent.parent ) {
		if ( parent.type !== 'atrule' ) {
			continue;
		}
		if ( parent.name === 'container' ) {
			return false;
		}
		if ( parent.name === 'media' ) {
			const isDesktopQuery = /min-width:\s*1024px/.test( parent.params );
			const negated = /^\s*not\b/.test( parent.params );
			if ( ! isDesktopQuery ) {
				return false;
			}
			if ( desktop === negated ) {
				return false;
			}
		}
	}
	return true;
};

/** Parse an HTML fragment into a css-select-compatible DOM. */
const parseDom = html => htmlparser2.parseDOM( html );

const find = ( dom, selector ) => {
	const element = CSSselect.selectOne( selector, dom );
	if ( ! element ) {
		throw new Error( `No element matches ${ selector }` );
	}
	return element;
};

const matches = ( element, selector ) => {
	try {
		return CSSselect.is( element, selector );
	} catch ( error ) {
		// Pseudo-elements and dynamic pseudo-classes never match a static DOM.
		return false;
	}
};

/**
 * The winning declaration of `prop` on `element`.
 *
 * @param {Array}   sheets  postcss roots, in cascade (source) order.
 * @param {Object}  element css-select DOM node.
 * @param {string}  prop    CSS property.
 * @param {Object}  context `{ desktop: boolean }`.
 * @return {Object|null} `{ value, selector, specificity, important }`.
 */
const winningDeclaration = ( sheets, element, prop, { desktop } ) => {
	let winner = null;
	let order = 0;

	sheets.forEach( sheet => sheet.walkRules( rule => {
		order++;
		if ( ! atRulesApply( rule, { desktop } ) ) {
			return;
		}
		const declarations = rule.nodes.filter( node => node.type === 'decl' && node.prop === prop );
		if ( ! declarations.length ) {
			return;
		}
		let best = null;
		for ( const selector of selectorsOf( rule.selector ) ) {
			if ( matches( element, selector.toString().trim() ) ) {
				const specificity = specificityOf( selector );
				if ( ! best || compare( specificity, best.specificity ) > 0 ) {
					best = { selector: selector.toString().trim(), specificity };
				}
			}
		}
		if ( ! best ) {
			return;
		}
		const declaration = declarations[ declarations.length - 1 ];
		const candidate = { value: declaration.value, important: !! declaration.important, order, ...best };
		if (
			! winner ||
			( candidate.important && ! winner.important ) ||
			( candidate.important === winner.important && compare( candidate.specificity, winner.specificity ) >= 0 )
		) {
			winner = candidate;
		}
	} ) );

	return winner;
};

module.exports = {
	compileImports,
	specificityOf,
	selectorsOf,
	compare,
	parseDom,
	find,
	winningDeclaration,
};
