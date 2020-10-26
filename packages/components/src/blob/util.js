import {
	getRandomBetween,
	getRandomFromArray
} from '@novablocks/utils';

const BLOB_MAX_SIDES = 20;
const BLOB_RADIUS = 10;

export const getRatio = ( preset, i ) => {
	const pow = Math.pow( preset, i );
	return ( 1 + getMagicDigit( pow ) ) / 10;
};

export const getMagicDigit = n => {
	let sum = 0;

	while ( n > 0 || sum > 9 ) {
		if ( n === 0 ) {
			n = sum;
			sum = 0;
		}
		sum += n % 10;
		n = Math.floor(n / 10 );
	}
	return sum;
};

export const getSidesFromPreset = preset => {
	return Math.min( Math.max( 3, Math.floor( Math.sqrt( preset ) ) ), BLOB_MAX_SIDES );
};

export const generatePath = ( preset, complexity, smoothness, presetOffset = 0 ) => {

	const points = [];
	let firstPoint = '';
	let curves = '';
	let path;

	const sides = getSidesFromPreset( preset );

	// generate the points that will define the shape
	for (let i = 1; i <= sides; i++) {
		// generate a regular polygon
		// we add pi/2 to the angle to have the tip of polygons with odd number of edges pointing upwards
		const angle = 2 * Math.PI * i / sides + Math.PI / 2;

		const minimumRatio = 0.1;
		const initialRatio = getRatio(preset + presetOffset, i);

		const ratio = minimumRatio + ( initialRatio - minimumRatio ) * complexity / 100;

		points.push({
			x: BLOB_RADIUS * ( Math.cos( angle ) * ratio + 1 ),
			y: BLOB_RADIUS * ( Math.sin( angle ) * ratio + 1 )
		});
	}

	let missingPoints = BLOB_MAX_SIDES - sides;

	let curvePoints = getCurvePointsFromPoints( points, smoothness );
	scaleCurvePoints( curvePoints );

	for ( let i = 0; i < curvePoints.length; i ++ ) {
		const c = curvePoints[i];

		curves += ' C ' + c.x1 + ' ' + c.y1 + ' ' + c.x2 + ' ' + c.y2 + ' ' + c.m2x + ' ' + c.m2y;

		const dummyPointsCount = Math.round( missingPoints / (
			points.length - i
		) );

		for ( let j = 0; j < dummyPointsCount; j ++ ) {
			curves += ' C ' + c.m2x + ' ' + c.m2y + ' ' + c.m2x + ' ' + c.m2y + ' ' + c.m2x + ' ' + c.m2y;
		}

		if ( i === 0 ) {
			firstPoint = c.m1x + ' ' + c.m1y;
		}

		missingPoints -= dummyPointsCount;
	}

	// move to first point
	path = 'M ' + firstPoint;

	// add the curves to draw the actual path
	path += curves;

	// close the path
	path += ' Z';

	return path;
};

function getCurvePointsFromPoints( points, smoothness ) {
	let curvePoints = [];

	for ( let i = 0; i < points.length; i ++ ) {
		const nextIdx = (i + 1) % points.length;
		const prevIdx = (i + points.length - 1) % points.length;
		const nextPt = points[nextIdx];
		const thisPt = points[i];
		const prevPt = points[prevIdx];
		const sqrt = Math.sqrt( smoothness / 100 );

		const M1 = {
			x: (prevPt.x + thisPt.x) / 2,
			y: (prevPt.y + thisPt.y) / 2,
		};

		const M2 = {
			x: (thisPt.x + nextPt.x) / 2,
			y: (thisPt.y + nextPt.y) / 2,
		};

		const x1 = M1.x * (1 - sqrt) + thisPt.x * sqrt;
		const y1 = M1.y * (1 - sqrt) + thisPt.y * sqrt;

		const x2 = M2.x * (1 - sqrt) + thisPt.x * sqrt;
		const y2 = M2.y * (1 - sqrt) + thisPt.y * sqrt;

		curvePoints.push({
			x1: x1,
			y1: y1,
			x2: x2,
			y2: y2,
			m1x: M1.x,
			m1y: M1.y,
			m2x: M2.x,
			m2y: M2.y
		});
	}

	return curvePoints;
}

function scaleCurvePoints( points ) {
	let xMax = 0;
	let yMax = 0;
	let xMin = BLOB_RADIUS;
	let yMin = BLOB_RADIUS;

	for ( let i = 0; i < points.length; i ++ ) {
		const { x1, x2, y1, y2, m1x, m2x, m1y, m2y } = points[i];

		xMin = Math.min( xMin, x1, x2, m1x, m2x );
		xMax = Math.max( xMax, x1, x2, m1x, m2x );
		yMin = Math.min( yMin, y1, y2, m1y, m2y );
		yMax = Math.max( yMax, y1, y2, m1y, m2y );
	}

	const xRatio = 2 * BLOB_RADIUS / ( xMax - xMin );
	const yRatio = 2 * BLOB_RADIUS / ( yMax - yMin );

	for ( let i = 0; i < points.length; i ++ ) {
		const { x1, x2, y1, y2, m1x, m2x, m1y, m2y } = points[i];

		points[i] = {
			x1: ( x1 - xMin ) * xRatio,
			x2: ( x2 - xMin ) * xRatio,
			m2x: ( m2x - xMin ) * xRatio,
			m1x: ( m1x - xMin ) * xRatio,
			y1: ( y1 - yMin ) * yRatio,
			y2: ( y2 - yMin ) * yRatio,
			m1y: ( m1y - yMin ) * yRatio,
			m2y: ( m2y - yMin ) * yRatio
		}
	}
}

export const getRandomBlobAttributes = ( prefix ) => {

	return {
		[`${ prefix }Preset`]: getRandomBetween( 1, 100 ),
		[`${ prefix }Complexity`]: getRandomBetween( 0, 100 ),
		[`${ prefix }Smoothness`]: getRandomFromArray( [0, 33, 50, 100] ),
	}
};
