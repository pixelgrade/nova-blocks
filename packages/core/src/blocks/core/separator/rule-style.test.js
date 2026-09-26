import cases from './rule-weight-cases.json';
import attributes from './attributes.json';
import { getSeparatorRuleStyle, SEPARATOR_RULE_WEIGHT_STYLES, hasSeparatorRuleWeight } from './rule-style';

describe( 'getSeparatorRuleStyle', () => {
	it.each( cases.map( testCase => [ testCase.label, testCase ] ) )( '%s', ( label, { attributes: input, style } ) => {
		expect( getSeparatorRuleStyle( input ) ).toEqual( style );
	} );

	it( 'treats the registered default as the no-output weight', () => {
		expect( attributes.ruleWeight ).toEqual( { type: 'number', default: 3 } );
		expect( getSeparatorRuleStyle( { ruleWeight: attributes.ruleWeight.default } ) ).toEqual( {} );
	} );
} );

describe( 'hasSeparatorRuleWeight', () => {
	it( 'offers the weight only on styles that draw a line', () => {
		expect( SEPARATOR_RULE_WEIGHT_STYLES ).toEqual( [ 'simple', 'elaborate' ] );
		expect( hasSeparatorRuleWeight( 'is-style-simple' ) ).toBe( true );
		expect( hasSeparatorRuleWeight( 'alignwide is-style-elaborate' ) ).toBe( true );
		expect( hasSeparatorRuleWeight( 'is-style-decorative' ) ).toBe( false );
		expect( hasSeparatorRuleWeight( 'is-style-blank' ) ).toBe( false );
		expect( hasSeparatorRuleWeight( 'is-style-grade-ramp' ) ).toBe( false );
		expect( hasSeparatorRuleWeight( '' ) ).toBe( false );
		expect( hasSeparatorRuleWeight( undefined ) ).toBe( false );
		expect( hasSeparatorRuleWeight( 'is-style-simple-ish' ) ).toBe( false );
	} );
} );
