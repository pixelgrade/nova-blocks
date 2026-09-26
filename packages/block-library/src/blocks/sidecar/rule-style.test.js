import cases from './rule-cases.json';
import attributes from './attributes.json';
import { getSidecarRuleClasses, getSidecarRuleStyle } from './rule-style';

// Same fixture as tests/php/sidecar-rule-contract.php: the editor canvas and
// the frontend render must emit the same classes and custom properties.
describe( 'Sidecar divider rule (GitHub #658)', () => {
	it.each( cases.map( testCase => [ testCase.label, testCase ] ) )( '%s', ( label, { attributes: input, classes, style } ) => {
		expect( getSidecarRuleClasses( input ) ).toEqual( classes );
		expect( getSidecarRuleStyle( input ) ).toEqual( style );
	} );

	it( 'registers both attributes without defaults, so Off serializes nothing', () => {
		expect( attributes.ruleRole ).toEqual( { type: 'string', enum: [ 'primary', 'secondary' ] } );
		expect( attributes.ruleWeight ).toEqual( { type: 'number' } );
	} );
} );
