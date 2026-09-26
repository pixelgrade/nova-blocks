const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

// GitHub #668 "one control everywhere": Rule: Off / Primary / Secondary, plus
// an optional 1-4 weight override. First consumer: the Sidecar divider (#658).
test( 'offers the rule role and an optional weight override', () => {
	const source = fs.readFileSync( path.join( __dirname, 'rule-role-controls.js' ), 'utf8' );

	assert.match( source, /<RadioControl/ );
	assert.match( source, /label=\{ __\( 'Rule', '__plugin_txtd' \) \}/ );
	assert.match( source, /Off[\s\S]*value: ''/ );
	assert.match( source, /Primary[\s\S]*value: 'primary'/ );
	assert.match( source, /Secondary[\s\S]*value: 'secondary'/ );

	// Off clears both attributes, so the block serializes nothing again.
	assert.match( source, /ruleRole: undefined, ruleWeight: undefined/ );

	// The weight only shows with a role, and resetting it returns to the role.
	assert.match( source, /\{ ruleRole && <RangeControl/ );
	assert.match( source, /min=\{ 1 \}/ );
	assert.match( source, /max=\{ 4 \}/ );
	assert.match( source, /allowReset/ );
	assert.match( source, /ruleWeight: value \?\? undefined/ );

	assert.match( source, /preserveBlockSelectionWhileApplying/ );
} );

test( 'is exported for every rule consumer', () => {
	const index = fs.readFileSync( path.join( __dirname, '../index.js' ), 'utf8' );
	assert.match( index, /export \{ default as RuleRoleControls \} from "\.\/rule-controls\/rule-role-controls";/ );
} );
