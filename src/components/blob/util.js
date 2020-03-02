const BLOB_MAX_SIDES = 20;
const BLOB_RADIUS = 10;

export const getRatio = ( preset, i ) => {
	const pow = Math.pow( preset, i );
	return ( 1 + getMagicDigit( pow ) ) / 10;
}

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
}

export const getSidesFromPreset = preset => {
	return Math.min( Math.max( 3, Math.floor( Math.sqrt( preset ) ) ), BLOB_MAX_SIDES );
}

export const generatePath = ( preset, complexity, smoothness, presetOffset ) => {
	const points = [];
	let path = '';
	let firstPoint = '';
	let curves = '';

	const sides = getSidesFromPreset( preset );

	let xMax = 0;
	let yMax = 0;
	let xMin = BLOB_RADIUS;
	let yMin = BLOB_RADIUS;
	let curvePoints = [];

	for (let i = 1; i <= sides; i++) {
		// generate a regular polygon
		// we add pi/2 to the angle to have the tip of polygons with odd number of edges pointing upwards
		const angle = 2 * Math.PI * i / sides - Math.PI / 2;

		// default ratio is 0.7 because the random one varies between 0.4 and 1
		const defaultRatio = 0.7;
		const initialRatio = getRatio(preset + presetOffset, i);
		const ratio = defaultRatio + ( initialRatio - defaultRatio ) * complexity / 100;

		points.push({
			x: BLOB_RADIUS * ( Math.cos( angle ) * ratio + 1 ),
			y: BLOB_RADIUS * ( Math.sin( angle ) * ratio + 1 )
		});
	}

	let missingPoints = BLOB_MAX_SIDES - sides;

	for (let i = 0; i < points.length; i++) {
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

		xMax = Math.max( xMax, x1, x2 );
		yMax = Math.max( yMax, y1, y2 );
		xMin = Math.min( xMin, x1, x2 );
		yMin = Math.min( yMin, y1, y2 );
	}

	const newXratio = 2 * BLOB_RADIUS / ( xMax - xMin );
	const newYratio = 2 * BLOB_RADIUS / ( yMax - yMin );

	for ( let i = 0; i < curvePoints.length; i ++ ) {
		const c = curvePoints[i];

		const newX1 = ( c.x1 - xMin ) * newXratio;
		const newY1 = ( c.y1 - yMin ) * newYratio;
		const newX2 = ( c.x2 - xMin ) * newXratio;
		const newY2 = ( c.y2 - yMin ) * newYratio;

		const newM1x = ( c.m1x - xMin ) * newXratio;
		const newM1y = ( c.m1y - yMin ) * newYratio;
		const newM2x = ( c.m2x - xMin ) * newXratio;
		const newM2y = ( c.m2y - yMin ) * newYratio;

		curves += ' C ' + newX1 + ' ' + newY1 + ' ' + newX2 + ' ' + newY2 + ' ' + newM2x + ' ' + newM2y;

		const dummyPointsCount = Math.round( missingPoints / (
			points.length - i
		) );

		for ( let j = 0; j < dummyPointsCount; j ++ ) {
			curves += ' C ' + newM2x + ' ' + newM2y + ' ' + newM2x + ' ' + newM2y + ' ' + newM2x + ' ' + newM2y;
		}

		if ( i === 0 ) {
			firstPoint = newM1x + ' ' + newM1y;
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
}
