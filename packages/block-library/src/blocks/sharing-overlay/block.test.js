const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const read = ( file ) => fs.readFileSync( path.join( __dirname, file ), 'utf8' );

test('Sharing System registers every color-signal attribute used by its editor and renderer', () => {
	const metadata = JSON.parse( read( 'block.json' ) );

	assert.equal(metadata.supports.novaBlocks.colorSignal.attributes, true);
	assert.equal(metadata.supports.novaBlocks.colorSignal.controls, true);
	assert.equal(metadata.supports.novaBlocks.colorSignal.providesContext, false);
	assert.match( metadata.description, /nested Button/i );
	assert.match( metadata.description, /Color Signal styles the sharing overlay/i );
});

test('Sharing System owns one locked core Buttons trigger and saves its inner content', () => {
	const metadata = JSON.parse( read( 'block.json' ) );
	const editSource = read( 'edit.js' );
	const indexSource = read( 'index.js' );

	assert.deepEqual( metadata.allowedBlocks, [ 'core/buttons' ] );
	assert.match( editSource, /useInnerBlocksProps/ );
	assert.match( editSource, /className:\s*['"]novablocks-sharing__trigger['"]/ );
	assert.match( editSource, /templateLock:\s*['"]all['"]/ );
	assert.match( indexSource, /<InnerBlocks\.Content\s*\/>/ );
	assert.doesNotMatch( indexSource, /return null/ );
});

test('Sharing System leaves the trigger label and appearance to the inner Button', () => {
	const controlsSource = read( 'controls.js' );

	assert.doesNotMatch( controlsSource, /TextControl/ );
	assert.doesNotMatch( controlsSource, /Button Label/ );
});

test('Sharing System binds frontend behavior through the stable trigger boundary', () => {
	const frontendSource = read( 'frontend.js' );

	assert.match( frontendSource, /import \{ findSharingTrigger, prependSharingTriggerIcon \} from ['"]\.\/trigger['"]/ );
	assert.match( frontendSource, /findSharingTrigger\( obj \)/ );
	assert.match( frontendSource, /data-nb-sharing-initialized/ );
	assert.match( frontendSource, /closest\( ['"]\.wp-block-button['"] \)/ );
	assert.match( frontendSource, /\.on\( ['"]click['"], function\( e \) \{[\s\S]*e\.preventDefault\(\);[\s\S]*addClass\( ['"]is-visible['"] \)/ );
});

test('Sharing System editor preview spacing follows the trigger boundary', () => {
	const styleSource = read( 'editor-styles.scss' );

	assert.match( styleSource, /\.novablocks-sharing__trigger\s*\+\s*\.novablocks-sharing__wrap/ );
	assert.doesNotMatch( styleSource, /\.wp-block-buttons\s*\+\s*\.novablocks-sharing__wrap/ );
});

test('Sharing System previews the automatic share icon without taking over Button pseudo-elements', () => {
	const editSource = read( 'edit.js' );
	const styleSource = read( 'editor-styles.scss' );
	const frontendStyleSource = read( 'style.scss' );

	assert.match( editSource, /prependSharingTriggerEditorIcon/ );
	assert.match( editSource, /getInlineSharingTriggerIcon/ );
	assert.match( editSource, /MutationObserver/ );
	assert.match( editSource, /getTransitionTime/ );
	assert.match( editSource, /const view = triggerWrapper\.ownerDocument\.defaultView/ );
	assert.doesNotMatch( editSource, /triggerWrapper\.ownerDocument\.defaultView\.cancelAnimationFrame/ );
	assert.match( styleSource, /has-novablocks-sharing-trigger-icon/ );
	assert.match( styleSource, /is-measuring-novablocks-sharing-trigger[\s\S]*transition:\s*none\s*!important/ );
	assert.match( styleSource, /padding-inline-start/ );
	assert.doesNotMatch( styleSource, /\.wp-block-button__link(?::|[\s\S]{0,20}:):?before/ );
	assert.doesNotMatch( styleSource, /\.wp-block-button__link(?::|[\s\S]{0,20}:):?after/ );
	assert.match( frontendStyleSource, /^\.novablocks-sharing__trigger-icon[\s\S]*margin-inline-end/m );
});

test('Sharing System registers a contextual Button control for hiding its automatic icon', () => {
	const indexSource = read( 'index.js' );
	const editSource = read( 'edit.js' );
	const frontendSource = read( 'frontend.js' );
	const controlSource = read( 'with-trigger-icon-control.js' );

	assert.match( indexSource, /withSharingTriggerIconControl/ );
	assert.match( indexSource, /novablocks\/sharing-overlay\/trigger-icon-control/ );
	assert.match( controlSource, /Show sharing icon/ );
	assert.match( controlSource, /is-sharing-icon-hidden/ );
	assert.match( editSource, /isSharingTriggerIconVisible/ );
	assert.match( editSource, /removeSharingTriggerEditorIcon/ );
	assert.match( frontendSource, /prependSharingTriggerIcon/ );
});
