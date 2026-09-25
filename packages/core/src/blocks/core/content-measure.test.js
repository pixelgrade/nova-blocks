import { getAuthoredContentSize, getContentMeasureProps } from './content-measure';
import { getPostContentMeasure } from './post-content/measure';

const GROUP = { blockName: 'core/group', className: 'nb-group--measure', property: '--nb-group-measure' };

describe( 'getAuthoredContentSize (#650, #635)', () => {
	it( 'returns an authored content width', () => {
		expect( getAuthoredContentSize( { layout: { type: 'constrained', contentSize: '487px' } } ) ).toBe( '487px' );
		expect( getAuthoredContentSize( { layout: { type: 'constrained', contentSize: ' 38rem ', justifyContent: 'left' } } ) ).toBe( '38rem' );
		expect( getAuthoredContentSize( { layout: { contentSize: '30ch' } } ) ).toBe( '30ch' );
	} );

	it( 'has none for inherited, absent, or unsafe widths (same rules as the PHP helper)', () => {
		expect( getAuthoredContentSize() ).toBe( '' );
		expect( getAuthoredContentSize( { layout: { inherit: true, contentSize: '487px' } } ) ).toBe( '' );
		expect( getAuthoredContentSize( { layout: { type: 'constrained', wideSize: '900px' } } ) ).toBe( '' );
		expect( getAuthoredContentSize( { layout: { type: 'flex' } } ) ).toBe( '' );
		[ '487px;color:red', '1px}body{x:y', '<b>', '"487px"' ].forEach( unsafe => {
			expect( getAuthoredContentSize( { layout: { contentSize: unsafe } } ) ).toBe( '' );
		} );
	} );

	it( 'is the helper Post Content uses', () => {
		expect( getPostContentMeasure ).toBe( getAuthoredContentSize );
	} );
} );

describe( 'getContentMeasureProps (editor twin of the render filters)', () => {
	it( 'adds the marker class and the measure property to a Group that authors a width', () => {
		const props = { name: 'core/group', className: 'is-selected', attributes: { layout: { type: 'constrained', contentSize: '487px' } }, wrapperProps: { style: { color: 'red' } } };
		const next = getContentMeasureProps( props, GROUP );

		expect( next.className ).toBe( 'is-selected nb-group--measure' );
		expect( next.wrapperProps.style ).toEqual( { color: 'red', '--nb-group-measure': '487px' } );
		expect( props.wrapperProps.style ).toEqual( { color: 'red' } );
	} );

	it( 'leaves other blocks and unmeasured Groups untouched', () => {
		const inherited = { name: 'core/group', attributes: { layout: { inherit: true } } };
		const paragraph = { name: 'core/paragraph', attributes: { layout: { contentSize: '487px' } } };

		expect( getContentMeasureProps( inherited, GROUP ) ).toBeNull();
		expect( getContentMeasureProps( paragraph, GROUP ) ).toBeNull();
		expect( getContentMeasureProps( { name: 'core/group', attributes: {} }, GROUP ) ).toBeNull();
	} );

	it( 'keeps the Post Content marker and property (#650)', () => {
		const next = getContentMeasureProps(
			{ name: 'core/post-content', attributes: { layout: { type: 'constrained', contentSize: '640px' } } },
			{ blockName: 'core/post-content', className: 'nb-post-content--measure', property: '--nb-post-content-measure' }
		);

		expect( next.className ).toBe( 'nb-post-content--measure' );
		expect( next.wrapperProps.style ).toEqual( { '--nb-post-content-measure': '640px' } );
	} );
} );
