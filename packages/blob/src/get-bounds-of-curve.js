// https://stackoverflow.com/questions/2587751/an-algorithm-to-find-bounding-box-of-closed-bezier-curves/14429749#14429749

const { sqrt, min, max, abs } = Math;

const getBoundsOfCurve = ( x0, y0, x1, y1, x2, y2, x3, y3 ) => {
	const tvalues = [];
	const bounds = [ [], [] ];
	const points = [];

	let a, b, c, t, t1, t2, b2ac, sqrtb2ac;

	for ( let i = 0; i < 2; ++i ) {

		if ( i === 0 ) {
			b = 6 * x0 - 12 * x1 + 6 * x2;
			a = - 3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
			c = 3 * x1 - 3 * x0;
		} else {
			b = 6 * y0 - 12 * y1 + 6 * y2;
			a = - 3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
			c = 3 * y1 - 3 * y0;
		}

		if ( abs( a ) < 1e-12 ) {
			if ( abs( b ) < 1e-12 ) {
				continue;
			}
			t = - c / b;
			if ( 0 < t && t < 1 ) {
				tvalues.push( t );
			}
			continue;
		}
		b2ac = b * b - 4 * c * a;
		sqrtb2ac = sqrt( b2ac );
		if ( b2ac < 0 ) {
			continue;
		}
		t1 = (- b + sqrtb2ac ) / (2 * a);
		if ( 0 < t1 && t1 < 1 ) {
			tvalues.push( t1 );
		}
		t2 = (- b - sqrtb2ac) / (2 * a);
		if ( 0 < t2 && t2 < 1 ) {
			tvalues.push( t2 );
		}
	}

	var x, y, j = tvalues.length,
		jlen = j,
		mt;

	while ( j -- ) {
		t = tvalues[j];
		mt = 1 - t;
		x = (mt * mt * mt * x0) + (3 * mt * mt * t * x1) + (3 * mt * t * t * x2) + (t * t * t * x3);
		bounds[0][j] = x;

		y = (mt * mt * mt * y0) + (3 * mt * mt * t * y1) + (3 * mt * t * t * y2) + (t * t * t * y3);
		bounds[1][j] = y;
		points[j] = {
			X: x,
			Y: y
		};
	}

	tvalues[jlen] = 0;
	tvalues[jlen + 1] = 1;
	points[jlen] = {
		X: x0,
		Y: y0
	};
	points[jlen + 1] = {
		X: x3,
		Y: y3
	};
	bounds[0][jlen] = x0;
	bounds[1][jlen] = y0;
	bounds[0][jlen + 1] = x3;
	bounds[1][jlen + 1] = y3;
	tvalues.length = bounds[0].length = bounds[1].length = points.length = jlen + 2;

	return {
		left: min.apply( null, bounds[0] ),
		top: min.apply( null, bounds[1] ),
		right: max.apply( null, bounds[0] ),
		bottom: max.apply( null, bounds[1] ),
		points: points, // local extremes
		tvalues: tvalues // t values of local extremes
	};
};

export default getBoundsOfCurve;
