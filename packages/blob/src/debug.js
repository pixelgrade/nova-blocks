import { Fragment } from "@wordpress/element";

import {
	getDefaultBounds,
	getCurvePointsFromPoints,
	getPointsArray,
	scalePoints,
	scaleCurvePoints,
	BLOB_RADIUS
} from "./utils";

const BlobDebug = ( attributes ) => {
	const points = getPointsArray( attributes );
	const curvePoints = getCurvePointsFromPoints( attributes );
	const bounds = getDefaultBounds();

	scalePoints( points, bounds );
	scaleCurvePoints( curvePoints, bounds );

	return (
		<Fragment>
			{ points.map( ( point, index ) => {
				const nextPoint = points[ ( index + 1 ) % points.length ];
				return (
					<Fragment>
						<line x1={ point.x } y1={ point.y } x2={ nextPoint.x } y2={ nextPoint.y } strokeWidth="0.05" stroke="black" strokeDasharray="0.2" style={ { strokeOpacity: .5 } } />
						<line x1={ point.x } y1={ point.y } x2={ BLOB_RADIUS } y2={ BLOB_RADIUS } strokeWidth="0.05" stroke="black" strokeDasharray="0.2" style={ { strokeOpacity: .5 } } />
					</Fragment>
				)
			} ) }
			{ curvePoints.map( ( { x1, y1, x2, y2, m1x, m1y, m2x, m2y } ) => {
				return (
					<Fragment>
						<line x1={ m1x } y1={ m1y } x2={ x1 } y2={ y1 } strokeWidth="0.05" stroke="black" />
						<line x1={ m2x } y1={ m2y } x2={ x2 } y2={ y2 } strokeWidth="0.05" stroke="black" />
					</Fragment>
				)
			} ) }
			{ curvePoints.map( ( { x1, y1, x2, y2, m1x, m1y, m2x, m2y } ) => {
				return (
					<Fragment>
						<circle cx={ x1 } cy={ y1 } r="0.2" stroke="black" strokeWidth="0.05" fill="white" />
						<circle cx={ x2 } cy={ y2 } r="0.2" stroke="black" strokeWidth="0.05" fill="white" />
					</Fragment>
				)
			} ) }
			{ curvePoints.map( ( { x1, y1, x2, y2, m1x, m1y, m2x, m2y } ) => {
				return (
					<Fragment>
						<rect x={ m1x - 0.2 } y={ m1y - 0.2 } width="0.4" height="0.4" stroke="black" strokeWidth="0.05"  fill="yellow" />
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

export default BlobDebug;
