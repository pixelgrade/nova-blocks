import classnames from "classnames";

export const getGridStyle = ( attributes ) => {

	const { gridcolumns, gridrows } = getGridColumnsAndRows( attributes );

	return {
		display: 'grid',
		gridTemplateColumns: `repeat( ${ gridcolumns }, 1fr )`,
		gridTemplateRows: `repeat( ${ gridrows }, auto )`,
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

export const redistributeCardsInAreas = ( areaColumns, cardsCount, attributes ) => {
	let totalSpots = getPostsCount( areaColumns );
	let totalPosts = cardsCount;
	let remainingPosts = totalPosts;
	let totalRatio = 0;

	for ( let i = 0; i < areaColumns.length; i++ ) {
		let areaColumn = areaColumns[i];
		let areaColumnSpotRatio = 0;

		for ( let j = 0; j < areaColumn.areas.length; j ++ ) {
			let area = areaColumn.areas[j];
			// we shouldn't fill the area with the featured card
			area.spotRatio = getCardRatio( area, attributes );
			areaColumnSpotRatio += area.spotRatio;
			totalRatio += area.spotRatio;
		}

		areaColumn.spotRatio = areaColumnSpotRatio;
	}

	let remainingSpots = Math.min( totalSpots, totalPosts );

	if ( totalSpots === totalPosts ) {
		return;
	}

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

const getCardRatio = ( area, attributes ) => {
	const { gridcolumns } = getGridColumnsAndRows( attributes );
	const { width, height, postsCount } = area;
	let ratio = postsCount / height;

	// when the card is landscape and very small
	// we hide the content so the ratio should be bigger
	if ( isLandscape( area, attributes ) && width / gridcolumns < 0.3 ) {
		ratio *= 7;
	}

	return ratio;
};

export const isLandscape = ( area, attributes ) => {
	const { gridcolumns, gridrows } = getGridColumnsAndRows( attributes );
	const { nth, width, height, initialPostsCount } = area;

	const isLandscape = width * initialPostsCount / height > 1.33;

	if ( width / gridcolumns >= 0.5 ) {
		return isLandscape || ( attributes.subfeature && nth === 2 );
	}

	return isLandscape;
};

export const getParametricLayoutAreaClassName = ( area, attributes ) => {
	const { gridcolumns, gridrows } = getGridColumnsAndRows( attributes );
	const { nth, width, height } = area;

	return classnames([
		'novablocks-grid__area',
		`novablocks-grid__area--nth-${ nth }`,
		getAreaClassnameByWidthRatio( width / gridcolumns ),
		getAreaClassnameByHeightRatio( height / gridrows ),
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

export const getGridColumnsAndRows = ( attributes ) => {
	return {
		gridcolumns: ! attributes.flipcolsrows ? attributes.gridcolumns : attributes.gridrows,
		gridrows: ! attributes.flipcolsrows ? attributes.gridrows : attributes.gridcolumns,
	}
};

export const transposeMatrix = ( source ) => {
	return Object.keys( source[0] ).map( function( column ) {
		return source.map( function( row ) {
			return row[column];
		} );
	} );
};
