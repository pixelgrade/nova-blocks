const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const read = file => fs.readFileSync( path.join( __dirname, file ), 'utf8' );

// GitHub #658: the editor canvas emits the same rule classes and properties
// as the PHP render (both read rule-style.js / init.php, pinned by
// rule-cases.json), and the Sidecar inspector offers the shared rule control
// only while a rail exists.
test( 'the editor canvas applies the rule classes and properties', () => {
	const edit = read( 'edit.js' );
	assert.match( edit, /import \{ getSidecarRuleClasses, getSidecarRuleStyle \} from '\.\/rule-style';/ );
	assert.match( edit, /\.\.\.getSidecarRuleClasses\( props\.attributes \)/ );
	assert.match( edit, /\.\.\.getSidecarRuleStyle\( props\.attributes \)/ );
} );

test( 'the inspector offers the shared rule control beside a rail', () => {
	const inspector = read( 'inspector-controls.js' );
	assert.match( inspector, /RuleRoleControls/ );
	assert.match( inspector, /\{ hasRail &&[\s\S]*<RuleRoleControls/ );
	assert.match( inspector, /ruleRole=\{ attributes\.ruleRole \}/ );
	assert.match( inspector, /ruleWeight=\{ attributes\.ruleWeight \}/ );
} );

test( 'the rule attributes stay out of the layout recipes', () => {
	assert.doesNotMatch( read( 'layout-recipes.js' ), /ruleRole|ruleWeight/ );
} );
