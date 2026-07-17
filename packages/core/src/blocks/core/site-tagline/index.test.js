const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

test( 'registers a token-based Ruled Label style for core/site-tagline', () => {
	const indexSource = fs.readFileSync( path.join( __dirname, 'index.js' ), 'utf8' );
	const styleSource = fs.readFileSync( path.join( __dirname, '_style.scss' ), 'utf8' );

	assert.match( indexSource, /registerBlockStyle\( 'core\/site-tagline',[\s\S]*name: 'ruled-label'/ );
	assert.match( styleSource, /\.wp-block-site-tagline\.is-style-ruled-label/ );
	assert.match( styleSource, /&:before,[\s\S]*&:after/ );
	assert.match( styleSource, /block-size:\s*var\(--nb-site-tagline-rule-weight,\s*var\(--nb-rule-weight\)\)/ );
	assert.match( styleSource, /background:\s*var\(--nb-site-tagline-rule-color,\s*var\(--nb-rule-strong-color\)\)/ );
	assert.doesNotMatch( styleSource, /opacity:\s*0\.45/ );
	assert.match( styleSource, /flex:\s*1 1 auto/ );
} );

test( 'extends Ruled Label with semantic rule attributes and editor integrations', () => {
	const indexSource = fs.readFileSync( path.join( __dirname, 'index.js' ), 'utf8' );
	const controlsSource = fs.readFileSync( path.join( __dirname, 'with-site-tagline-controls.js' ), 'utf8' );
	const wrapperSource = fs.readFileSync( path.join( __dirname, 'with-site-tagline-wrapper.js' ), 'utf8' );

	assert.match( indexSource, /export const extendSiteTaglineSettings/ );
	assert.match( indexSource, /ruleWeight:[\s\S]*type: 'number'[\s\S]*default: 1/ );
	assert.match( indexSource, /ruleStrength:[\s\S]*type: 'string'[\s\S]*default: 'strong'/ );
	assert.match( indexSource, /editor\.BlockEdit[\s\S]*withSiteTaglineControls/ );
	assert.match( indexSource, /editor\.BlockListBlock[\s\S]*withSiteTaglineWrapper/ );
	assert.match( controlsSource, /is-style-ruled-label/ );
	assert.match( controlsSource, /<ControlsSection[\s\S]*id=\{ 'site-tagline-rule' \}/ );
	assert.match( controlsSource, /<RuleControls/ );
	assert.match( wrapperSource, /getSiteTaglineRuleStyle/ );
} );
