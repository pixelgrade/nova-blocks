import { Fragment } from "@wordpress/element";

import {
  getBoundsOfCurve,
	getBoundsFromCurves,
	getCurvePointsFromPoints,
	getPointsArray,
	scalePoints,
	scaleCurvePoints,
	BLOB_RADIUS
} from "../utils";

const ShapeDebug = ( attributes ) => {
	const points = getPointsArray( attributes );
	const curvePoints = getCurvePointsFromPoints( attributes );
	const bounds = getBoundsFromCurves( curvePoints );

	scalePoints( points, bounds );
	scaleCurvePoints( curvePoints, bounds );

	return (
		<Fragment>
			{ points.map( ( point, index ) => {
				const nextPoint = points[ ( index + 1 ) % points.length ];
				return (
					<Fragment key={'point_' + index}>
						<line x1={ point.x } y1={ point.y } x2={ nextPoint.x } y2={ nextPoint.y } strokeWidth="0.05" stroke="black" strokeDasharray="0.2" style={ { strokeOpacity: .5 } } />
						<line x1={ point.x } y1={ point.y } x2={ BLOB_RADIUS } y2={ BLOB_RADIUS } strokeWidth="0.05" stroke="black" strokeDasharray="0.2" style={ { strokeOpacity: .5 } } />
					</Fragment>
				)
			} ) }
			{ curvePoints.map( ( { x1, y1, x2, y2, m1x, m1y, m2x, m2y }, index ) => {
				return (
					<Fragment key={'curve_point1_' + index}>
						<line x1={ m1x } y1={ m1y } x2={ x1 } y2={ y1 } strokeWidth="0.05" stroke="black" />
						<line x1={ m2x } y1={ m2y } x2={ x2 } y2={ y2 } strokeWidth="0.05" stroke="black" />
					</Fragment>
				)
			} ) }
			{ curvePoints.map( ( { x1, y1, x2, y2, m1x, m1y, m2x, m2y }, index ) => {
				return (
					<Fragment key={'curve_point2_' + index}>
						<circle cx={ x1 } cy={ y1 } r="0.2" stroke="black" strokeWidth="0.05" fill="white" />
						<circle cx={ x2 } cy={ y2 } r="0.2" stroke="black" strokeWidth="0.05" fill="white" />
					</Fragment>
				)
			} ) }
			{ curvePoints.map( ( { x1, y1, x2, y2, m1x, m1y, m2x, m2y }, index ) => {
				return (
					<Fragment key={'curve_point3_' + index}>
						<rect x={ m1x - 0.2 } y={ m1y - 0.2 } width="0.4" height="0.4" stroke="black" strokeWidth="0.05"  fill="yellow" />
					</Fragment>
				)
			} ) }
			{ curvePoints.map( ( { x1, y1, x2, y2, m1x, m1y, m2x, m2y }, index ) => {
				const { top, right, bottom, left } = getBoundsOfCurve( m1x, m1y, x1, y1, x2, y2, m2x, m2y );
				return (
					<Fragment key={'curve_point4_' + index}>
						<line x1={ left } y1={ top } x2={ left } y2={ bottom } strokeWidth="0.05" stroke="black" strokeDasharray="0.2" />
						<line x1={ right } y1={ top } x2={ right } y2={ bottom } strokeWidth="0.05" stroke="black" strokeDasharray="0.2" />
						<line x1={ left } y1={ top } x2={ right } y2={ top } strokeWidth="0.05" stroke="black" strokeDasharray="0.2" />
						<line x1={ left } y1={ bottom } x2={ right } y2={ bottom } strokeWidth="0.05" stroke="black" strokeDasharray="0.2" />
					</Fragment>
				)
			} ) }
			{ points.map( ( { x, y } ) => {
				return false;

				return (
					<circle cx={ x } cy={ y } r="0.2" stroke="black" strokeWidth="0.05"  fill="white" />
				)
			} ) }
		</Fragment>
	)
};

export default ShapeDebug;
