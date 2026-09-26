const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );
const postcss = require( 'postcss' );
const sass = require( 'sass' );

const REPO_ROOT = path.resolve( __dirname, '../../../../../..' );
const BASE_STYLES = path.join( REPO_ROOT, 'packages/base-styles' );
const CORE_SRC = path.join( REPO_ROOT, 'packages/core/src' );
const LAYOUT_CONTAINERS_JS = path.join( REPO_ROOT, 'packages/utils/src/layout-containers.js' );

// Compile through the REAL base-styles mixins (not a stub `above()`), so the
// at-rule boundaries the layout contract depends on — the desktop media query
// and the `@supports (grid-template-columns: subgrid)` gate — survive into the
// parsed tree and can be asserted. The generated
// `$nb-layout-passthrough-containers` is resolved the same way the shipped
// build resolves it.
const compiled = sass.compileString(
	"@import 'mixins';\n@import 'blocks/core/group/style';\n",
	{
		loadPaths: [ BASE_STYLES, CORE_SRC ],
		silenceDeprecations: [ 'import', 'global-builtin', 'slash-div', 'color-functions', 'abs-percent' ],
	}
).css;
const stylesheet = postcss.parse( compiled );

const getToggle = selector => {
	const rule = stylesheet.nodes.find( node =>
		node.type === 'rule' && node.selector === selector
	);
	const declaration = rule?.nodes.find( node =>
		node.type === 'decl' && node.prop === '--nb-group-padding-toggle'
	);

	return declaration?.value;
};

// The shared pass-through list, read from THE single source of truth. Pinning
// the compiled Group rule against this array (rather than a hand-copied list)
// is what stops the two subgrid-override sites from drifting apart.
const passThroughContainers = () => {
	const source = fs.readFileSync( LAYOUT_CONTAINERS_JS, 'utf8' );
	const block = source.match( /LAYOUT_PASSTHROUGH_CONTAINERS\s*=\s*\[([\s\S]*?)\];/ );
	assert.ok( block, 'LAYOUT_PASSTHROUGH_CONTAINERS array not found in layout-containers.js' );
	return ( block[ 1 ].match( /'([^']*)'/g ) || [] ).map( m => m.slice( 1, -1 ) );
};

// The qualified-Group pass-through parent: the rule that turns a plain
// reading-flow Group into a subgrid.
const getGroupPassThroughRule = () => {
	let matching;

	stylesheet.walkRules( rule => {
		if (
			! matching &&
			rule.selector.includes( '.wp-block-group:not(.wp-block-row)' ) &&
			rule.nodes.some( node => node.type === 'decl' && node.prop === 'display' && node.value === 'grid' )
		) {
			matching = rule;
		}
	} );

	return matching;
};

// The rule under test: direct track-neutral layout children of a qualified
// Group keep the inherited tracks instead of re-declaring their own grid.
const getNestedPassThroughRule = () => {
	let matching;

	stylesheet.walkRules( rule => {
		if (
			rule.selector.includes( '.wp-block-group:not(.wp-block-row)' ) &&
			rule.selector.includes( '.wp-block-query' ) &&
			rule.nodes.some( node =>
				node.type === 'decl' &&
				node.prop === 'grid-template-columns' &&
				node.value === 'subgrid'
			)
		) {
			matching = rule;
		}
	} );

	return matching;
};

// Walk up the at-rule chain of a rule, newest first.
const atRuleChain = rule => {
	const chain = [];
	let node = rule?.parent;

	while ( node && node.type === 'atrule' ) {
		chain.push( `@${ node.name } ${ node.params }` );
		node = node.parent;
	}

	return chain;
};

test( 'transparent groups nested in card content do not add wrapper side padding', () => {
	assert.equal(
		getToggle( '.nb-supernova-item__inner-container .wp-block-group' ),
		'0'
	);
} );

test( 'groups with a nonzero color signal retain surface padding', () => {
	assert.equal(
		getToggle( '.wp-block-group[class*=sm-color-signal]:not(.sm-color-signal-0)' ),
		'1'
	);
} );

// GitHub #666: a coloured card's `--nb-group-padding-toggle: 1` is a custom
// property, so it inherits into a non-coloured inner Group (e.g. a synced
// pattern's own Group) and pads the card's content twice.
test( 'a non-coloured group nested in a coloured card resets the padding toggle to 0', () => {
	assert.equal(
		getToggle( '.wp-block-group[class*=sm-color-signal]:not(.sm-color-signal-0) .wp-block-group:not([class*=sm-color-signal]:not(.sm-color-signal-0))' ),
		'0'
	);
} );

test( 'a nested group with its own nonzero color signal still wins its own surface padding back', () => {
	// The reset rule's :not() explicitly excludes a self-coloured nested
	// Group, so only the plain self-selector rule (checked above) matches it
	// — its specificity/order is irrelevant because the reset never applies.
	const resetRuleSelector = '.wp-block-group[class*=sm-color-signal]:not(.sm-color-signal-0) .wp-block-group:not([class*=sm-color-signal]:not(.sm-color-signal-0))';
	const resetRule = stylesheet.nodes.find( node => node.type === 'rule' && node.selector === resetRuleSelector );
	assert.ok( resetRule, 'expected the #666 reset rule' );
	assert.match( resetRule.selector, /:not\(\[class\*=sm-color-signal\]:not\(\.sm-color-signal-0\)\)$/ );
} );

test( 'layout containers nested directly in a plain Group keep the inherited subgrid', () => {
	const rule = getNestedPassThroughRule();

	assert.ok( rule, 'expected a qualified Group child pass-through rule' );

	const declaration = rule.nodes.find( node =>
		node.type === 'decl' && node.prop === 'grid-template-columns'
	);
	assert.equal( declaration?.value, 'subgrid' );

	// It must be a DIRECT-child rule: a descendant combinator would also catch
	// a Query nested inside an inner boxed Group, which must stay a root.
	assert.match( rule.selector, /\.wp-block-group[^ ]* > :is\(/ );
} );

test( 'the Group child pass-through covers exactly the shared pass-through set', () => {
	const rule = getNestedPassThroughRule();
	assert.ok( rule, 'expected a qualified Group child pass-through rule' );

	const members = rule.selector
		.replace( /^.*> :is\(/, '' )
		.replace( /\)\s*$/, '' )
		.split( ',' )
		.map( member => member.trim() );

	const expected = passThroughContainers();
	assert.ok( expected.length >= 4, 'expected the full shared pass-through list in the JS source' );

	// Sass normalizes attribute-selector quoting, so compare on the compiled
	// form of each source member.
	for ( const member of expected ) {
		assert.ok(
			members.includes( member.replace( /"/g, '' ) ) || members.includes( member ),
			`the Group child pass-through is missing the shared member ${ member } — it drifted from LAYOUT_PASSTHROUGH_CONTAINERS`
		);
	}

	// Nothing beyond the shared set: an extra member is unintended scope, and
	// an id-level specificity anchor (unnecessary here — the qualified-Group
	// compound already wins) would be a needless override burden downstream.
	const extras = members.filter( member =>
		! expected.includes( member ) && ! expected.includes( member.replace( /"/g, '' ) )
	);
	assert.deepEqual( extras, [] );
} );

test( 'the Group pass-through and its child override live behind the same desktop + subgrid gates', () => {
	const parent = getGroupPassThroughRule();
	const child = getNestedPassThroughRule();

	assert.ok( parent, 'expected the qualified Group pass-through rule' );
	assert.ok( child, 'expected a qualified Group child pass-through rule' );

	const expectedChain = [
		'@supports (grid-template-columns: subgrid)',
		'@media only screen and (min-width: 1024px)',
	];

	// Below `lap` the Sidecar collapses to a single column and the max-width
	// fallback is correct; without subgrid support the fallback re-declaration
	// is the only working path. Losing either gate is a real regression, not a
	// formatting detail.
	assert.deepEqual( atRuleChain( parent ), expectedChain );
	assert.deepEqual( atRuleChain( child ), expectedChain );
} );

test( 'box-rendering groups are excluded from the pass-through, so their fill cannot bleed', () => {
	const parent = getGroupPassThroughRule();
	assert.ok( parent, 'expected the qualified Group pass-through rule' );

	// A Group that paints its own box is a container, not an escape vehicle.
	assert.match( parent.selector, /:not\(\.has-background\)/ );
	assert.match( parent.selector, /:not\(\[class\*=sm-color-signal\]:not\(\.sm-color-signal-0\)\)/ );
	assert.match( parent.selector, /:not\(\.is-layout-flex\)/ );

	// Scoped to the reading flow only — chrome groups (header/footer template
	// parts) must keep their constrained layout.
	assert.match( parent.selector, /:is\(\.wp-block-post-content, \.nb-sidecar-area--content\) >/ );

	// The child override inherits the same qualification.
	assert.ok(
		getNestedPassThroughRule().selector.startsWith( parent.selector ),
		'the child pass-through must be scoped to the same qualified Group selector'
	);
} );

// A Group's authored reading measure (GitHub #635): the render filter / editor
// twin add `nb-group--measure` + `--nb-group-measure` only when the Group
// authors its own `layout.contentSize`.
const measureRules = () => {
	const rules = [];
	stylesheet.walkRules( rule => {
		if ( rule.selector.includes( 'nb-group--measure' ) ) {
			rules.push( rule );
		}
	} );
	return rules;
};
const decl = ( rule, prop ) => rule.nodes.find( node => node.type === 'decl' && node.prop === prop );
const EXEMPT_CHILDREN = [ '.alignwide', '.alignfull', '.alignleft', '.alignright', '[data-align=wide]', '[data-align=full]', '[data-align=left]', '[data-align=right]', '.block-list-appender' ];

test( 'an authored Group measure yields the content-width cap to the narrower measure (#635)', () => {
	const [ base ] = measureRules();
	assert.ok( base, 'expected the Group measure rule' );

	// Two marker classes on the Group + :not() out-rank the collection cap
	// (`:is(… .specificity.x2.x3) > *` is 0,3,0) that overrode core's rule.
	assert.match( base.selector, /^\.wp-block-group\.nb-group--measure\.nb-group--measure > :not\(/ );
	assert.deepEqual( atRuleChain( base ), [], 'the measure holds at every viewport' );

	// Narrower authored widths win; --nb-content-width stays the row maximum.
	assert.equal( decl( base, 'max-width' ).value, 'min(var(--nb-group-measure), var(--nb-content-width))' );

	// Centring and justification stay with core's constrained layout
	// (`margin-left/right: auto|0 !important` from layout.justifyContent).
	assert.equal( decl( base, 'margin-left' ), undefined );
	assert.equal( decl( base, 'margin-inline-start' ), undefined );
	assert.equal( decl( base, 'justify-self' ), undefined );

	const selector = base.selector.replace( /\s+/g, ' ' ).replace( /"/g, '' );
	for ( const exempt of EXEMPT_CHILDREN ) {
		assert.ok( selector.includes( exempt ), `${ exempt } keeps its own width` );
	}

	// It must come after the cap it overrides.
	const nodes = [];
	stylesheet.walkRules( rule => nodes.push( rule ) );
	const cap = nodes.findIndex( rule => rule.selector.endsWith( '> *' ) && decl( rule, 'max-width' )?.value === 'var(--nb-content-width)' );
	assert.ok( cap >= 0 && cap < nodes.indexOf( base ), 'the measure rule follows the content-width cap' );
} );

test( 'a measured Group passed through the layout grid caps its children inside the content track (#635)', () => {
	const parent = getGroupPassThroughRule();
	const twin = measureRules().find( rule => rule.selector.startsWith( parent.selector ) );

	assert.ok( twin, 'expected the pass-through measure rule, scoped to the same qualified Group' );
	assert.ok(
		twin.selector.startsWith( `${ parent.selector }.nb-group--measure > :not(` ),
		'it adds the marker on the qualified Group, so it out-ranks the pass-through `> * { max-width: none }`'
	);
	assert.deepEqual( atRuleChain( twin ), atRuleChain( parent ) );
	assert.equal( decl( twin, 'max-width' ).value, 'min(var(--nb-group-measure), 100%)' );
	assert.equal( decl( twin, 'margin-left' ), undefined );

	const selector = twin.selector.replace( /\s+/g, ' ' ).replace( /"/g, '' );
	for ( const exempt of EXEMPT_CHILDREN ) {
		assert.ok( selector.includes( exempt ), `${ exempt } keeps its own track` );
	}
} );

test( 'only the measure rules consume the Group measure', () => {
	assert.equal( measureRules().length, 2 );
} );

// A Group whose nested blocks fill it (GitHub #657): core's "Inner blocks use
// content width" OFF (`layout.type: default`) — marked `nb-group--fill` by the
// render filter / editor twin. Default-aligned children follow the Group's own
// width instead of Nova's content width, so a meta row in a Wide header Group
// lines up with the Wide title and featured image.
const fillRules = () => {
	const rules = [];
	stylesheet.walkRules( rule => {
		if ( rule.selector.includes( 'nb-group--fill' ) ) {
			rules.push( rule );
		}
	} );
	return rules;
};

test( 'a fill Group lifts the content-width cap from its default-aligned children (#657)', () => {
	const base = fillRules().find( rule => atRuleChain( rule ).length === 0 );
	assert.ok( base, 'expected the fill rule outside the desktop grid' );

	// Doubled marker + :not() out-ranks the (0,3,0) collection cap.
	assert.match( base.selector, /^\.wp-block-group\.nb-group--fill\.nb-group--fill > :not\(/ );
	assert.equal( decl( base, 'max-width' ).value, 'none' );
	assert.equal( decl( base, 'margin-left' ), undefined, 'centring stays with the existing rules' );

	const selector = base.selector.replace( /\s+/g, ' ' ).replace( /"/g, '' );
	for ( const exempt of EXEMPT_CHILDREN ) {
		assert.ok( selector.includes( exempt ), `${ exempt } keeps its own width` );
	}

	const nodes = [];
	stylesheet.walkRules( rule => nodes.push( rule ) );
	const cap = nodes.findIndex( rule => rule.selector.endsWith( '> *' ) && decl( rule, 'max-width' )?.value === 'var(--nb-content-width)' );
	assert.ok( cap >= 0 && cap < nodes.indexOf( base ), 'the fill rule follows the content-width cap' );
} );

test( 'a Wide or Full fill Group passed through the grid puts its default children on its own track (#657)', () => {
	const parent = getGroupPassThroughRule();
	const inGrid = fillRules().filter( rule => rule.selector.startsWith( parent.selector ) );

	const expected = {
		wide: 'var(--block-wide-start) / var(--block-wide-end)',
		full: 'var(--block-full-start) / var(--block-full-end)',
	};

	for ( const [ align, track ] of Object.entries( expected ) ) {
		const rule = inGrid.find( candidate => candidate.selector.includes( `.nb-group--fill:is(.align${ align }, [data-align=${ align }]) > :not(` ) );
		assert.ok( rule, `expected the ${ align } fill rule on the qualified Group` );
		assert.deepEqual( atRuleChain( rule ), atRuleChain( parent ), 'same desktop + subgrid gates as the pass-through' );
		// Sass may drop the spaces around the slash.
		assert.equal( decl( rule, 'grid-column' ).value.replace( /\s+/g, '' ), track.replace( /\s+/g, '' ) );

		const selector = rule.selector.replace( /\s+/g, ' ' ).replace( /"/g, '' );
		for ( const exempt of EXEMPT_CHILDREN ) {
			assert.ok( selector.includes( exempt ), `${ exempt } keeps its own track in a ${ align } fill Group` );
		}
	}

	// A default-aligned fill Group already spans the content track: no rule.
	assert.equal( inGrid.length, 2 );
} );

test( 'only the fill rules consume the fill marker', () => {
	assert.equal( fillRules().length, 3 );
} );
