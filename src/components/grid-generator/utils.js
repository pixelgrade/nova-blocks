import { applyLayoutEngine } from "./layoutEngine";
import classnames from "classnames";

export const prepareAttributes = ( attributes ) => {

	const state = {
		gridcolumns: attributes?.gridColumns,
		gridrows: attributes?.gridRows,
		featuresize: attributes?.featureSize,
		featureposition: attributes?.featurePosition,
		fragmentation: attributes?.columnsFragmentation,
		imageweightleft: attributes?.imageWeightLeft,
		imageweightright: attributes?.imageWeightRight,
		metadetailsleft: attributes?.metaWeightLeft,
		metadetailsright: attributes?.metaWeightRight,
		boostfeature: attributes?.boostFeatureEmphasis,
		subfeature: attributes?.subFeature,
		balancemdandiw: attributes?.balanceMDandIW,
		hierarchycrossing: attributes?.hierarchyCrossing,
		flipcolsrows: attributes?.flipColsAndRows,
	};

	return state;
};

export const getGridStyle = ( attributes ) => {

	const { gridColumns, gridRows } = getGridColumnsAndRows( attributes );

	return {
		display: 'grid',
		gridTemplateColumns: `repeat( ${ gridColumns }, 1fr )`,
		gridTemplateRows: `repeat( ${ gridRows }, auto )`,
	};
};

// Sums optimal posts count value from each area
export const getPostsCount = ( areaColumns ) => {
	return areaColumns.reduce( ( total, areaColumn ) => {
		return total + areaColumn.areas.reduce( ( columnTotal, area ) => {
			return columnTotal + area.postsCount;
		}, 0 );
	}, 0 );
};

export const redistributeCardsInAreas = ( areaColumns, cardsCount ) => {
	let totalSpots = getPostsCount( areaColumns );
	let totalPosts = cardsCount;
	let remainingPosts = totalPosts;
	let totalRatio = 0;

	if ( totalSpots === totalPosts ) {
		return;
	}

	for ( let i = 0; i < areaColumns.length; i++ ) {
		let areaColumn = areaColumns[i];
		let areaColumnSpotRatio = 0;

		for ( let j = 0; j < areaColumn.areas.length; j ++ ) {
			let area = areaColumn.areas[j];
			// we shouldn't fill the area with the featured card
			area.spotRatio = ( i === 0 && j === 0 ) ? 0 : area.postsCount / area.height;
			areaColumnSpotRatio += area.spotRatio;
			totalRatio += area.spotRatio;
		}

		areaColumn.spotRatio = areaColumnSpotRatio;
	}

	let remainingSpots = Math.min( totalSpots, totalPosts );

	for ( let i = 0; i < areaColumns.length; i++ ) {
		let areaColumn = areaColumns[i];
		let { areas } = areaColumn;

		for ( let j = 0; j < areas.length; j++ ) {
			let area = areas[j];

			area.postsCount += Math.round( ( totalPosts - totalSpots ) * area.spotRatio / totalRatio );

			if ( i === areaColumns.length - 1 && j === areas.length - 1 ) {
				area.postsCount = remainingPosts;
			}

			area.postsCount = Math.max( area.postsCount, 0 );
			remainingSpots -= area.postsCount;

			if ( remainingPosts <= 0 ) return;
		}
	}
};


export const isLandscape = ( area, attributes ) => {
	const { gridColumns, gridRows } = getGridColumnsAndRows( attributes );
	const { nth, width, height } = area;

	if ( width / gridColumns > height / gridRows ) {
		return true;
	}

	if ( 0.25 < width / gridColumns && width / gridColumns < 0.5 && nth > 3 ) {
		return true;
	}

	return false;
};

export const getParametricLayoutAreaClassName = ( area, attributes ) => {
	const { gridColumns, gridRows } = getGridColumnsAndRows( attributes );
	const { nth, width, height } = area;

	return classnames([
		'novablocks-grid__area',
		`novablocks-grid__area--nth-${ nth }`,
		getAreaClassnameByWidthRatio( width / gridColumns ),
		getAreaClassnameByHeightRatio( height / gridRows ),
		{
			'novablocks-grid__area--portrait': ! isLandscape( area, attributes ),
			'novablocks-grid__area--landscape': isLandscape( area, attributes ),
		}
	]);
};

export const getAreaClassnameByWidthRatio = ( widthRatio ) => {
	return classnames([{
		'novablocks-grid__area--width-xs': widthRatio < 0.3,
		'novablocks-grid__area--width-s': 0.3 <= widthRatio && widthRatio < 0.5,
		'novablocks-grid__area--width-m': 0.5 <= widthRatio && widthRatio < 0.66,
		'novablocks-grid__area--width-l': 0.66 <= widthRatio && widthRatio < 0.80,
		'novablocks-grid__area--width-xl': 0.80 <= widthRatio && widthRatio < 0.95,
		'novablocks-grid__area--width-full': 0.95 <= widthRatio,
	}]);
};

export const getAreaClassnameByHeightRatio = ( heightRatio ) => {
	return classnames([{
		'novablocks-grid__area--height-xs': heightRatio < 0.34,
		'novablocks-grid__area--height-s': 0.34 <= heightRatio && heightRatio < 0.5,
		'novablocks-grid__area--height-m': 0.5 <= heightRatio && heightRatio < 0.66,
		'novablocks-grid__area--height-l': 0.66 <= heightRatio && heightRatio < 0.80,
		'novablocks-grid__area--height-xl': 0.80 <= heightRatio,
	}])
};

const getGridColumnsAndRows = ( attributes ) => {
	return {
		gridColumns: ! attributes.flipColsAndRows ? attributes.gridColumns : attributes.gridRows,
		gridRows: ! attributes.flipColsAndRows ? attributes.gridRows : attributes.gridColumns,
	}
};

export const transposeMatrix = ( source ) => {
	return Object.keys( source[0] ).map( function( column ) {
		return source.map( function( row ) {
			return row[column];
		} );
	} );
};
