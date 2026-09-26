import { isGroupFill, getGroupFillProps, GROUP_FILL_CLASS } from './fill';

// GitHub #657: core's "Inner blocks use content width" OFF writes
// `layout: { type: 'default' }`, and core renders that Group as a flow layout
// whose nested blocks fill it. Nova's content-width cap overrode that, so a
// Wide header Group capped its meta row. Only that explicit authored choice
// marks the Group; a legacy Group with no layout (also flow in core) stays
// byte-identical.
describe( 'isGroupFill (#657)', () => {
	it( 'is true only for an explicitly authored flow layout', () => {
		expect( isGroupFill( { layout: { type: 'default' } } ) ).toBe( true );
	} );

	it( 'is false for legacy, constrained, flex and legacy-content-width groups', () => {
		expect( isGroupFill() ).toBe( false );
		expect( isGroupFill( {} ) ).toBe( false );
		expect( isGroupFill( { layout: {} } ) ).toBe( false );
		expect( isGroupFill( { layout: { type: 'constrained' } } ) ).toBe( false );
		expect( isGroupFill( { layout: { type: 'flex', orientation: 'vertical' } } ) ).toBe( false );
		expect( isGroupFill( { layout: { type: 'grid' } } ) ).toBe( false );
		// Core coerces these to constrained (legacy content width).
		expect( isGroupFill( { layout: { type: 'default', inherit: true } } ) ).toBe( false );
		expect( isGroupFill( { layout: { type: 'default', contentSize: '487px' } } ) ).toBe( false );
		expect( isGroupFill( { layout: 'default' } ) ).toBe( false );
	} );
} );

describe( 'getGroupFillProps (editor twin of the render filter)', () => {
	it( 'adds the marker class to a fill Group without touching other props', () => {
		const props = { name: 'core/group', className: 'is-selected', attributes: { layout: { type: 'default' } }, wrapperProps: { style: { color: 'red' } } };
		const next = getGroupFillProps( props );

		expect( GROUP_FILL_CLASS ).toBe( 'nb-group--fill' );
		expect( next.className ).toBe( 'is-selected nb-group--fill' );
		expect( next.wrapperProps ).toBe( props.wrapperProps );
		expect( props.className ).toBe( 'is-selected' );
		expect( getGroupFillProps( { name: 'core/group', attributes: { layout: { type: 'default' } } } ).className ).toBe( 'nb-group--fill' );
	} );

	it( 'leaves other blocks and non-fill Groups untouched', () => {
		expect( getGroupFillProps( { name: 'core/group', attributes: {} } ) ).toBe( null );
		expect( getGroupFillProps( { name: 'core/group', attributes: { layout: { type: 'constrained' } } } ) ).toBe( null );
		expect( getGroupFillProps( { name: 'core/columns', attributes: { layout: { type: 'default' } } } ) ).toBe( null );
	} );
} );
