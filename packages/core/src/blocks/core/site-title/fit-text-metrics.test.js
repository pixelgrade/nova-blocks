import {
	FIT_RATIO_SAFETY,
	getFitRatio,
	measureFitTextMetrics,
	shouldStoreFitTextMetrics,
} from './fit-text-metrics';

describe( 'getFitRatio', () => {
	it( 'turns a rendered width at a font size into a font-size-independent ratio', () => {
		// 390.2 px of text at 63 px: the container width divided by the ratio
		// must give back a size a hair under 63 px (never over it).
		const ratio = getFitRatio( 390.2, 63 );

		expect( ratio ).toBeGreaterThan( 390.2 / 63 );
		expect( ratio ).toBeLessThanOrEqual( ( 390.2 / 63 ) * FIT_RATIO_SAFETY + 0.001 );
		expect( 395 / ratio ).toBeLessThan( 395 / ( 390.2 / 63 ) );
		expect( 395 / ratio ).toBeGreaterThan( 395 / ( 390.2 / 63 ) * 0.98 );
	} );

	it( 'rounds up to three decimals', () => {
		expect( getFitRatio( 100, 10 ) ).toBe( Math.ceil( 10 * FIT_RATIO_SAFETY * 1000 ) / 1000 );
	} );

	it( 'rejects unusable measurements', () => {
		expect( getFitRatio( 0, 20 ) ).toBeNull();
		expect( getFitRatio( 100, 0 ) ).toBeNull();
		expect( getFitRatio( NaN, 20 ) ).toBeNull();
	} );
} );

describe( 'shouldStoreFitTextMetrics', () => {
	const next = { text: 'Harrowmere', ratio: 6.25 };

	it( 'stores a first measurement', () => {
		expect( shouldStoreFitTextMetrics( undefined, next ) ).toBe( true );
	} );

	it( 'stores when the site name changed', () => {
		expect( shouldStoreFitTextMetrics( { text: 'Hive', ratio: 6.25 }, next ) ).toBe( true );
	} );

	it( 'ignores sub-half-percent jitter so opening the editor does not churn blocks', () => {
		expect( shouldStoreFitTextMetrics( { text: 'Harrowmere', ratio: 6.26 }, next ) ).toBe( false );
	} );

	it( 'stores when the typography changed the ratio', () => {
		expect( shouldStoreFitTextMetrics( { text: 'Harrowmere', ratio: 5.8 }, next ) ).toBe( true );
	} );

	it( 'never stores an unusable measurement', () => {
		expect( shouldStoreFitTextMetrics( undefined, null ) ).toBe( false );
	} );
} );

describe( 'measureFitTextMetrics', () => {
	it( 'measures the text range against the computed font size', () => {
		document.body.innerHTML = '<p class="wp-block-site-title"><a>Harrowmere</a></p>';
		const title = document.querySelector( 'p' );
		const originalCreateRange = document.createRange.bind( document );
		const originalGetComputedStyle = window.getComputedStyle;

		document.createRange = () => {
			const range = originalCreateRange();
			range.getBoundingClientRect = () => ( { width: 139.4 } );
			return range;
		};
		window.getComputedStyle = () => ( { fontSize: '22.5px' } );

		try {
			expect( measureFitTextMetrics( title ) ).toEqual( {
				text: 'Harrowmere',
				ratio: getFitRatio( 139.4, 22.5 ),
			} );
		} finally {
			document.createRange = originalCreateRange;
			window.getComputedStyle = originalGetComputedStyle;
		}
	} );

	it( 'returns null without a laid-out title', () => {
		document.body.innerHTML = '<p class="wp-block-site-title"></p>';

		expect( measureFitTextMetrics( document.querySelector( 'p' ) ) ).toBeNull();
		expect( measureFitTextMetrics( null ) ).toBeNull();
	} );
} );
