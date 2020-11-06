import Chance from 'chance';

import {
	getRandomBetween,
	getRandomFromArray
} from '@novablocks/utils';

const BLOB_MAX_SIDES = 20;
export const BLOB_RADIUS = 10;

export const getRatioArray = ( arrayLength, seed ) => {
	const chance = new Chance( seed );

	return Array.from( Array( arrayLength ).keys() ).map( () => {
		return chance.integer( { min: 1, max: 10 } ) / 10;
	} );
}

export const getPointsArray = ( attributes ) => {
	const { sides, rotation, complexity, patternSeed } = attributes;
	const ratioArray = getRatioArray( sides, patternSeed );
	const complexityLimiter = 0.9;
	const points = [];

	// generate the points that will define the shape
	for ( let i = 0; i < sides; i++ ) {
		// generate a regular polygon
		// we add pi/2 to the angle to have the tip of polygons with odd number of edges pointing upwards
		const angle = 2 * Math.PI * i / sides + Math.PI / 2 + Math.PI * rotation / 180;
		const ratio = ratioArray[i];
		const distance = ratio + ( 1 - ratio ) * ( 100 - complexity * complexityLimiter ) / 100;

		points.push({
			x: BLOB_RADIUS * ( Math.cos( angle ) * distance + 1 ),
			y: BLOB_RADIUS * ( Math.sin( angle ) * distance + 1 )
		});
	}

	return points;
};

export const generatePath = ( attributes ) => {
	const { sides } = attributes;
	const curvePoints = getCurvePoints( attributes );
	const missingPoints = BLOB_MAX_SIDES - sides;

	return getPathFromCurvePoints( curvePoints, missingPoints );
};

export const getCurvePoints = ( attributes ) => {
	const { smoothness } = attributes;
	const points = getPointsArray( attributes );
	const curvePoints = getCurvePointsFromPoints( points, smoothness);
	const bounds = getBoundsFromCurvePoints( curvePoints );

	scaleCurvePoints( curvePoints, bounds );

	return curvePoints;
};

export const getPathFromCurvePoints = ( curvePoints, missingPoints = 0 ) => {
	let path;
	let curves = '';
	let firstPoint = '';

	for ( let i = 0; i < curvePoints.length; i ++ ) {
		const c = curvePoints[i];

		curves += ' C ' + c.x1 + ' ' + c.y1 + ' ' + c.x2 + ' ' + c.y2 + ' ' + c.m2x + ' ' + c.m2y;

		const dummyPointsCount = Math.round( missingPoints / (
			curvePoints.length - i
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

export const getCurvePointsFromPoints = ( points, smoothness ) => {
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
};

export const getBoundsFromPoints = points => {
	let xMax = 0;
	let yMax = 0;
	let xMin = BLOB_RADIUS;
	let yMin = BLOB_RADIUS;

	for ( let i = 0; i < points.length; i ++ ) {
		const { x, y } = points[i];

		xMin = Math.min( xMin, x );
		xMax = Math.max( xMax, x );
		yMin = Math.min( yMin, y );
		yMax = Math.max( yMax, y );
	}

	const xRatio = 2 * BLOB_RADIUS / ( xMax - xMin );
	const yRatio = 2 * BLOB_RADIUS / ( yMax - yMin );

	return { xMin, xMax, yMin, yMax, xRatio, yRatio }
};

export const getBoundsFromCurvePoints = ( points ) => {
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

	return { xMin, xMax, yMin, yMax, xRatio, yRatio }
};

export const scaleCurvePoints = ( points, bounds ) => {
	const { xMin, xMax, yMin, yMax, xRatio, yRatio } = bounds;

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
};

export const scalePoints = ( points, bounds ) => {
	const { xMin, xMax, yMin, yMax, xRatio, yRatio } = bounds;

	for ( let i = 0; i < points.length; i ++ ) {
		const { x, y } = points[i];

		points[i] = {
			x: ( x - xMin ) * xRatio,
			y: ( y - yMin ) * yRatio,
		}
	}
};

export const getRandomBlobAttributes = ( prefix ) => {

	const sides = getRandomBetween( 1, 20 );
	const patternSeed = getRandomBetween( 1, 100 );
	const complexity = getRandomBetween( 0, 100 );
	const smoothness = getRandomFromArray( [33, 50, 100] );
	const rotation = getRandomBetween( 0, 360 );

	return {
		[`${ prefix }Sides`]: sides,
		[`${ prefix }PatternSeed`]: patternSeed,
		[`${ prefix }Complexity`]: complexity,
		[`${ prefix }Smoothness`]: smoothness,
		[`${ prefix }Rotation`]: rotation,
	}
};

export const getBlobAttsFromAttributes = ( attributes, prefix ) => {
	return {
		sides: attributes[ `${ prefix }Sides` ],
		patternSeed: attributes[ `${ prefix }PatternSeed` ],
		complexity: attributes[ `${ prefix }Complexity` ],
		smoothness: attributes[ `${ prefix }Smoothness` ],
		rotation: attributes[ `${ prefix }Rotation` ],
	};
};

export const getBlobTransform = ( scale, horizontalDisplacement, verticalDisplacement ) => {
	return `translate( ${ ( 1 - scale ) * horizontalDisplacement }%, ${ ( 1 - scale ) * verticalDisplacement }% ) scale( ${ scale } )`
};

export const getBlobStyles = ( attributes ) => {

	const {
		blobsEnableDecoration,
		blobsSizeBalance,
		blobsHorizontalDisplacement,
		blobsVerticalDisplacement,
	} = attributes;

	const xOffset = blobsEnableDecoration ? blobsHorizontalDisplacement : 50;
	const yOffset = blobsEnableDecoration ? blobsVerticalDisplacement : 50;
	const scaleRatio = blobsEnableDecoration ? blobsSizeBalance : 50;

	const scaleDiff = 0.4 * ( 50 - scaleRatio ) / 50;

	const xScale = 1 - Math.abs( 50 - xOffset ) / 100;
	const yScale = 1 - Math.abs( 50 - yOffset ) / 100;
	const scale = Math.min( xScale, yScale );

	const mediaScale = scale - scaleDiff;
	const decorationScale = scale + scaleDiff;

	return {
		'--blob-mix-media-transform': getBlobTransform( mediaScale, xOffset, yOffset ),
		'--blob-mix-decoration-transform': getBlobTransform( decorationScale, 100 - xOffset, 100 - yOffset ),
	}
};

export const getBlobMaskStyles = ( path, viewBox = '0 0 20 20' ) => {
	const svgString = `<svg viewBox='${ viewBox }' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'><path d='${ path }'></path></svg>`;
	const svgDataURI = `url("data:image/svg+xml;utf8,${ svgString }")`;

	return {
		maskImage: svgDataURI,
		maskSize: '100% 100%',
		WebkitMaskImage: svgDataURI,
		WebkitMaskSize: '100% 100%',
	}
};

export const getBlobViewBox = ( attributes ) => {
	return ! attributes?.enableShapeDebug ? '0 0 20 20' : '-2 -2 24 24';
};
