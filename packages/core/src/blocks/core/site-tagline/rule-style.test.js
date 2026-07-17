import { getSiteTaglineRuleStyle } from './rule-style';

describe( 'getSiteTaglineRuleStyle', () => {
	it( 'leaves the curated one-pixel strong rule on shared tokens', () => {
		expect( getSiteTaglineRuleStyle() ).toEqual( {} );
		expect( getSiteTaglineRuleStyle( { ruleWeight: 1, ruleStrength: 'strong' } ) ).toEqual( {} );
	} );

	it( 'emits local semantic overrides for authored rule controls', () => {
		expect( getSiteTaglineRuleStyle( { ruleWeight: 3, ruleStrength: 'subtle' } ) ).toEqual( {
			'--nb-site-tagline-rule-weight': '3px',
			'--nb-site-tagline-rule-color': 'var(--nb-rule-color)',
		} );
		expect( getSiteTaglineRuleStyle( { ruleWeight: 4, ruleStrength: 'solid' } ) ).toEqual( {
			'--nb-site-tagline-rule-weight': '4px',
			'--nb-site-tagline-rule-color': 'currentColor',
		} );
	} );

	it( 'clamps rule weight and ignores unknown strength roles', () => {
		expect( getSiteTaglineRuleStyle( { ruleWeight: 99, ruleStrength: 'unknown' } ) ).toEqual( {
			'--nb-site-tagline-rule-weight': '4px',
		} );
	} );
} );
