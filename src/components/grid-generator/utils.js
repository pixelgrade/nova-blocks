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

	const {
		gridColumns,
		gridRows,
		flipColsAndRows,
	} = attributes;

	return {
		display: 'grid',
		gridTemplateColumns: `repeat( ${ ! flipColsAndRows ? gridColumns : gridRows }, 1fr )`,
		gridTemplateRows: `repeat( ${ ! flipColsAndRows ? gridRows : gridColumns }, auto )`,
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
	const { gridColumns, gridRows } = attributes;
	const { nth, width, height } = area;

	if ( width / gridColumns > height / gridRows ) {
		return true;
	}

	if ( 0.25 < width / gridColumns && width / gridColumns < 0.5 && nth > 3 ) {
		return true;
	}

	return false;
};

export const getAreaClassName = ( area, attributes ) => {
	const { gridColumns, gridRows } = attributes;
	const { nth, width, height } = area;

	return classnames([
		'novablocks-grid__area',
		`novablocks-grid__area--nth-${ nth }`,
		{
			'novablocks-grid__area--portrait': ! isLandscape( area, attributes ),
			'novablocks-grid__area--landscape': isLandscape( area, attributes ),

			'novablocks-grid__area--width-xs': width / gridColumns < 0.26,
			'novablocks-grid__area--width-s': 0.26 <= width / gridColumns && width / gridColumns < 0.42,
			'novablocks-grid__area--width-m': 0.42 <= width / gridColumns && width / gridColumns < 0.58,
			'novablocks-grid__area--width-l': 0.58 <= width / gridColumns && width / gridColumns < 0.74,
			'novablocks-grid__area--width-xl': 0.74 <= width / gridColumns,

			'novablocks-grid__area--height-xs': height / gridRows < 0.26,
			'novablocks-grid__area--height-s': 0.26 <= height / gridRows && height / gridRows < 0.42,
			'novablocks-grid__area--height-m': 0.42 <= height / gridRows && height / gridRows < 0.58,
			'novablocks-grid__area--height-l': 0.58 <= height / gridRows && height / gridRows < 0.74,
			'novablocks-grid__area--height-xl': 0.74 <= height / gridRows,
		}
	]);
};

export const transposeMatrix = ( source ) => {
	return Object.keys( source[0] ).map( function( column ) {
		return source.map( function( row ) {
			return row[column];
		} );
	} );
};
