const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );
const postcss = require( 'postcss' );
const sass = require( 'sass' );

const read = file => fs.readFileSync( path.join( __dirname, file ), 'utf8' );

const compileStyles = source => sass.compileString( `
@mixin above($breakpoint) { @media (min-width: 1024px) { @content; } }
@mixin below($breakpoint) {
	@if $breakpoint == mobile {
		@media not screen and (min-width: 480px) { @content; }
	} @else {
		@media (max-width: 1023px) { @content; }
	}
}
${ source }
`, { style: 'expanded' } ).css;

const fontSizeModifierMatrix = css => Array.from(
	css.matchAll( /([^{}]+)\{([^{}]*--font-size-modifier:\s*([^;]+);[^{}]*)\}/g ),
	match => ( {
		selector: match[ 1 ].trim().replace( /\s+/g, ' ' ),
		value: match[ 3 ].trim(),
	} )
);

const normalizeSelector = selector => selector.trim().replace( /\s+/g, ' ' );

const ruleAt = ( stylesheet, selector, media = null ) => {
	let match;

	stylesheet.walkRules( rule => {
		const parentMedia = rule.parent?.type === 'atrule' && rule.parent.name === 'media'
			? rule.parent.params
			: null;

		if ( normalizeSelector( rule.selector ) === normalizeSelector( selector ) && parentMedia === media ) {
			match = rule;
		}
	} );

	assert.ok( match, `missing ${ media ? `@media ${ media } ` : '' }rule: ${ selector }` );
	return match;
};

const declaration = ( rule, property ) => rule.nodes.find(
	node => node.type === 'decl' && node.prop === property
)?.value;

test( 'Filter Controls exposes an opt-in mobile panel without changing existing blocks', () => {
	const attributes = JSON.parse( read( 'attributes.json' ) );
	const editor = read( 'edit.js' );
	const renderer = read( 'init.php' );
	const styles = read( 'style.scss' );
	const compiledStyles = compileStyles( styles );
	const stylesheet = postcss.parse( compiledStyles );

	assert.deepEqual( attributes.mobilePanel, { type: 'boolean', default: false } );
	assert.deepEqual( attributes.mobileTitle, { type: 'string', default: 'Filters' } );
	assert.match( editor, /Mobile filter panel/ );
	assert.match( editor, /nb-facetwp-filter--editor/ );
	assert.match( renderer, /nb-facetwp-filter--mobile-panel/ );
	assert.match( renderer, /nb-facetwp-filter__mobile-close/ );
	assert.match( renderer, /aria-label/ );
	assert.match( renderer, /trim\( \(string\) \( \$attributes\['mobileTitle'\] \?\? '' \) \)/ );
	assert.match( renderer, /__\( 'Filters', '__plugin_txtd' \)/ );
	assert.match( styles, /@include below\(lap\)/ );
	assert.match( styles, /\.nb-facetwp-filter--mobile-panel/ );
	assert.match( styles, /mobile-panel:not\(\.nb-facetwp-filter--editor\)/ );
	assert.match( styles, /\.nb-facetwp-toggle-wrap\.nb-facetwp-toggle-wrap--visibility-mobile/ );
	assert.match( styles, /@include above\(lap\)[\s\S]*\.nb-facetwp-filter--mobile-panel[\s\S]*\.facetwp-type-reset/ );
	assert.match( styles, /\.nb-facetwp-filter--mobile-panel[\s\S]*\.facetwp-checkbox[\s\S]*min-block-size:\s*48px/ );
	assert.match( styles, /mobile-panel\.nb-facetwp-filter--orientation-vertical[\s\S]*--theme-heading-4-font-family/ );
	assert.deepEqual( fontSizeModifierMatrix( compiledStyles ), [
		{
			selector: ':is(.facetwp-selections, #specific) .facetwp-selection-value',
			value: '0.9',
		},
		{
			selector: '.nb-facetwp-filter--orientation-vertical .nb-facetwp-facet__options',
			value: '0.9',
		},
		{
			selector: '.nb-facetwp-filter--orientation-vertical .nb-facetwp-facet--choice-style-text .nb-facetwp-facet__options',
			value: '1',
		},
	] );
	assert.match( styles, /nb-facetwp-title:not\(:first-of-type\)[\s\S]*--theme-spacing-small/ );
	assert.match( styles, /nb-facetwp-title \+ \.nb-facetwp-facet[\s\S]*--theme-spacing-smallest/ );
	assert.match( styles, /@include below\(lap\)[\s\S]*\.nb-facetwp-filter--orientation-horizontal[\s\S]*\.nb-facetwp-facet__options[\s\S]*min-inline-size:\s*0[\s\S]*inline-size:\s*100%/ );
	assert.match( styles, /grid-template-areas:[\s\S]*"count reset"[\s\S]*"selections selections"/ );
	assert.match( styles, /\.nb-facetwp-selections__count[\s\S]*white-space:\s*nowrap/ );
	assert.match( styles, /\.nb-facetwp-selections__count[\s\S]*\.facetwp-counts[\s\S]*display:\s*inline/ );
	const selectionRoot = ':is(.facetwp-selections, #specific)';
	const selectionListSelector = `${ selectionRoot } > ul`;
	const selectionItemSelector = `${ selectionRoot } > ul > li`;
	const selectionItemBackgroundSelector = `${ selectionItemSelector }:before`;
	const selectionLabelSelector = `${ selectionRoot } .facetwp-selection-label`;
	const selectionValueSelector = `${ selectionRoot } .facetwp-selection-value`;
	const selectionValueIconSelector = `${ selectionValueSelector }:before, ${ selectionValueSelector }:after`;
	const selectionValueHoverSelector = `${ selectionValueSelector }:hover`;
	const selectionValueActiveSelector = `${ selectionValueSelector }:active`;
	const selectionValueFocusSelector = `${ selectionValueSelector }:focus-visible`;
	const selectionListRule = ruleAt( stylesheet, selectionListSelector );
	const selectionItemRule = ruleAt( stylesheet, selectionItemSelector );
	const selectionItemBackgroundRule = ruleAt( stylesheet, selectionItemBackgroundSelector );
	const selectionLabelRule = ruleAt( stylesheet, selectionLabelSelector );
	const selectionValueRule = ruleAt( stylesheet, selectionValueSelector );
	const selectionValueIconRule = ruleAt( stylesheet, selectionValueIconSelector );
	const selectionValueHoverRule = ruleAt( stylesheet, selectionValueHoverSelector );
	const selectionValueActiveRule = ruleAt( stylesheet, selectionValueActiveSelector );
	const selectionValueFocusRule = ruleAt( stylesheet, selectionValueFocusSelector );

	assert.equal( declaration( selectionListRule, 'gap' ), 'var(--theme-spacing-smallest, 0.5em)' );
	assert.equal( declaration( selectionItemRule, 'display' ), 'inline-flex' );
	assert.equal( declaration( selectionItemRule, 'align-items' ), 'center' );
	assert.equal( declaration( selectionItemRule, 'flex-wrap' ), 'wrap' );
	assert.equal( declaration( selectionItemRule, 'gap' ), 'var(--theme-spacing-smallest, 0.5em)' );
	assert.equal( declaration( selectionItemRule, 'padding' ), '0' );
	assert.equal( declaration( selectionItemBackgroundRule, 'display' ), 'none' );
	assert.equal( declaration( selectionLabelRule, 'display' ), 'inline-flex' );
	assert.equal( declaration( selectionLabelRule, 'align-items' ), 'center' );
	assert.equal( declaration( selectionValueRule, 'display' ), 'inline-flex' );
	assert.equal( declaration( selectionValueRule, 'align-items' ), 'center' );
	assert.equal( declaration( selectionValueRule, '--nb-facetwp-chip-min-block-size' ), 'calc(var(--theme-spacing-smallest, 0.5em) * 4)' );
	assert.equal( declaration( selectionValueRule, '--nb-facetwp-chip-delete-size' ), '0.8em' );
	assert.equal( declaration( selectionValueRule, '--nb-facetwp-chip-radius' ), 'var(--theme-button-border-radius, var(--theme-input-border-radius, 0.25em))' );
	assert.equal( declaration( selectionValueRule, '--font-size-modifier' ), '0.9' );
	assert.equal( declaration( selectionValueRule, 'min-block-size' ), 'var(--nb-facetwp-chip-min-block-size)' );
	assert.equal( declaration( selectionValueRule, 'padding-block' ), 'calc(var(--theme-spacing-smallest, 0.5em) * 0.5)' );
	assert.equal( declaration( selectionValueRule, 'padding-inline-start' ), 'var(--theme-spacing-smallest, 0.5em)' );
	assert.equal( declaration( selectionValueRule, 'padding-inline-end' ), 'calc(var(--theme-spacing-smallest, 0.5em) * 2 + var(--nb-facetwp-chip-delete-size))' );
	assert.equal( declaration( selectionValueRule, 'background' ), 'color-mix(in srgb, currentColor 10%, transparent)' );
	assert.equal( declaration( selectionValueRule, 'border-radius' ), 'var(--nb-facetwp-chip-radius)' );
	assert.equal( declaration( selectionValueRule, 'cursor' ), 'pointer' );
	assert.equal( declaration( selectionValueRule, 'user-select' ), 'none' );
	assert.equal( declaration( selectionValueRule, 'white-space' ), 'nowrap' );
	assert.equal( declaration( selectionValueRule, 'transition' ), 'background-color var(--theme-transition-duration-quick, 0.15s) var(--theme-transition-easing, ease)' );
	assert.equal( declaration( selectionValueIconRule, 'right' ), 'calc(var(--theme-spacing-smallest, 0.5em) + 0.25em)' );
	assert.equal( declaration( selectionValueHoverRule, 'background' ), 'color-mix(in srgb, currentColor 18%, transparent)' );
	assert.equal( declaration( selectionValueActiveRule, 'background' ), 'color-mix(in srgb, currentColor 25%, transparent)' );
	assert.equal( declaration( selectionValueFocusRule, 'outline' ), '2px solid var(--sm-current-accent-color, var(--nb-accent-color, currentColor))' );
	assert.equal( declaration( selectionValueFocusRule, 'outline-offset' ), '2px' );
	const lapMedia = '(max-width: 1023px)';
	const mobileSelectionValueRule = ruleAt( stylesheet, selectionValueSelector, lapMedia );
	assert.equal( declaration( mobileSelectionValueRule, '--nb-facetwp-chip-min-block-size' ), '48px' );

	const compactMedia = 'not screen and (min-width: 480px)';
	const toolbarSelector = '.nb-facetwp-filter--orientation-horizontal:has(> .nb-facetwp-facet--fill-width)';
	const summarySelector = `${ toolbarSelector } + .nb-facetwp-filter:has(> .nb-facetwp-selections)`;
	const railRule = ruleAt( stylesheet, `${ toolbarSelector }, ${ summarySelector }`, compactMedia );
	const toolbarRule = ruleAt( stylesheet, toolbarSelector, compactMedia );
	const fillRule = ruleAt( stylesheet, `${ toolbarSelector } > .nb-facetwp-facet--fill-width`, compactMedia );
	const searchRule = ruleAt( stylesheet, `${ toolbarSelector } > .nb-facetwp-facet--fill-width .facetwp-search`, compactMedia );
	const toggleWrapRule = ruleAt( stylesheet, `${ toolbarSelector } > .nb-facetwp-toggle-wrap`, compactMedia );
	const toggleRule = ruleAt( stylesheet, `${ toolbarSelector } > .nb-facetwp-toggle-wrap > .wp-block-button, ${ toolbarSelector } > .nb-facetwp-toggle-wrap .nb-facetwp-toggle`, compactMedia );
	const compactSummaryRule = ruleAt( stylesheet, summarySelector, compactMedia );
	const compactSelectionLabelRule = ruleAt( stylesheet, selectionLabelSelector, compactMedia );
	const desktopSummaryRule = ruleAt( stylesheet, summarySelector );

	assert.equal( declaration( desktopSummaryRule, 'margin-block-start' ), 'var(--theme-spacing-smallest, calc(var(--nb-spacing) * 0.25))' );
	assert.equal( declaration( railRule, '--nb-facetwp-inline-rail' ), 'var(--nb-group-side-padding, 0)' );
	assert.equal( declaration( railRule, 'inline-size' ), 'calc(100% + 2 * var(--nb-facetwp-inline-rail))' );
	assert.equal( declaration( toolbarRule, 'position' ), 'relative' );
	assert.equal( declaration( toolbarRule, 'inset-inline-start' ), 'calc(-1 * var(--nb-facetwp-inline-rail))' );
	assert.equal( declaration( toolbarRule, 'flex-wrap' ), 'wrap' );
	assert.equal( declaration( fillRule, 'flex-basis' ), '100%' );
	assert.equal( declaration( searchRule, 'min-block-size' ), '48px' );
	assert.equal( declaration( searchRule, 'block-size' ), '48px' );
	assert.equal( declaration( toggleWrapRule, 'flex' ), '1 0 100%' );
	assert.equal( declaration( toggleWrapRule, 'inline-size' ), '100%' );
	assert.equal( declaration( toggleRule, 'inline-size' ), '100%' );
	assert.equal( declaration( compactSummaryRule, 'margin-inline' ), 'calc(-1 * var(--nb-facetwp-inline-rail))' );
	assert.equal( declaration( compactSummaryRule, 'margin-block-start' ), 'var(--theme-spacing-smaller, calc(var(--nb-spacing) * 0.5))' );
	assert.equal( declaration( compactSelectionLabelRule, 'flex' ), '1 0 100%' );
	assert.match( styles, /:is\(\.nb-facetwp-selections, \.nb-facetwp-filter--mobile-panel\) \.facetwp-reset[\s\S]*background:\s*none/ );
	assert.match( styles, /\.nb-facetwp-filter__mobile-title[\s\S]*--theme-heading-4-font-family/ );
	assert.match( styles, /@include below\(lap\)[\s\S]*\.nb-facetwp-toggle[\s\S]*min-block-size:\s*48px/ );
	assert.match( styles, /\.nb-facetwp-selections \.facetwp-reset[\s\S]*min-block-size:\s*48px/ );
	assert.match( styles, /:is\(\.facetwp-selections, #specific\) \.facetwp-selection-value[\s\S]*--nb-facetwp-chip-min-block-size:\s*48px/ );
	assert.match( styles, /var\(--sm-current-bg-color/ );
} );

test( 'Toggle uses a semantic mobile-panel button with an active-count target', () => {
	const toggleAttributes = JSON.parse( read( '../facetwp-toggle/attributes.json' ) );
	const toggleRenderer = read( '../facetwp-toggle/init.php' );

	assert.deepEqual( toggleAttributes.behavior, { type: 'string', default: 'more-filters' } );
	assert.deepEqual( toggleAttributes.visibility, { type: 'string', default: 'always' } );
	assert.match( toggleRenderer, /<button/ );
	assert.match( toggleRenderer, /type="button"/ );
	assert.match( toggleRenderer, /aria-expanded="false"/ );
	assert.match( toggleRenderer, /nb-facetwp-toggle__count/ );
	assert.match( toggleRenderer, /nb-facetwp-toggle__count-label/ );
	assert.match( toggleRenderer, /aria-hidden="true"/ );
	assert.doesNotMatch( toggleRenderer, /role="button"/ );
} );
