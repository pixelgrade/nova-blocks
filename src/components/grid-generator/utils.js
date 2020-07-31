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

export const getGridItems = ( attributes ) => {
	const gridItems = applyLayoutEngine( prepareAttributes( attributes ) );

	return gridItems.map( gridItem => {

		return Object.assign( {}, gridItem, {
			class: getGridItemClassname( gridItem ),
			style: getGridItemStyle( gridItem )
		} );
	} );
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

export const getGridItemStyle = ( gridItem, attributes ) => {

	const styles = {
		gridArea: gridItem.gridArea,
	};

	styles['--grid-item-image-display'] = gridItem.imageWeight > 0 ? 'block' : 'none';
	styles['--grid-item-image-weight'] = gridItem.imageWeight;

	styles['--grid-item-subtitle-display'] = gridItem.metaDetails > 2 ? 'block' : 'none';
	styles['--grid-item-buttons-display'] = gridItem.metaDetails > 3 ? 'block' : 'none';
	styles['--grid-item-meta-display'] = gridItem.metaDetails > 4 ? 'block' : 'none';
	styles['--grid-item-content-display'] = gridItem.metaDetails > 5 ? 'block' : 'none';

	return styles;
};

// Sums optimal posts count value from each area
export const getPostsCount = ( areaColumns ) => {
	return areaColumns.reduce( ( total, areaColumn ) => {
		return total + areaColumn.areas.reduce( ( columnTotal, area ) => {
			return columnTotal + area.postsCount;
		}, 0 );
	}, 0 );
};

export const fillAreaColumnsWithPosts = ( areaColumns, posts ) => {
	let totalPosts = posts.length;
	let totalSpots = 0;
	let remainingPosts = totalPosts;
	let totalRatio = 0;

	for ( let i = 0; i < areaColumns.length; i++ ) {
		let areaColumn = areaColumns[i];
		let areaColumnSpotRatio = 0;

		for ( let j = 0; j < areaColumn.areas.length; j++ ) {
			let area = areaColumn.areas[j];
			area.spotRatio = area.postsCount / area.height;
			areaColumnSpotRatio += area.spotRatio;
			totalRatio += area.spotRatio;
			totalSpots += area.postsCount;
		}

		areaColumn.spotRatio = areaColumnSpotRatio;
	}

	let remainingSpots = totalSpots;

	for ( let i = 0; i < areaColumns.length; i++ ) {
		let areaColumn = areaColumns[i];
		let { areas } = areaColumn;

		for ( let j = 0; j < areas.length; j++ ) {
			let area = areas[j];
			let postsToAdd = area.postsCount;

			if ( area.nth !== 1 && totalPosts > totalSpots ) {
				postsToAdd += Math.floor( ( totalPosts - totalSpots ) * area.spotRatio / totalRatio );
			}

			if ( i === areaColumns.length - 1 && j === areas.length - 1 ) {
				postsToAdd = remainingPosts;
			}

			area.posts = posts.slice( totalPosts - remainingPosts, totalPosts - remainingPosts + postsToAdd );
			remainingSpots -= area.postsCount;
			remainingPosts -= area.posts.length;

			if ( remainingPosts <= 0 ) return;
		}
	}
}

export const getAreaClassName = ( area, attributes ) => {
	const { gridColumns, gridRows } = attributes;
	const { nth, width, height } = area;

	function isLandscape() {

		if ( width / gridColumns > height / gridRows ) {
			return true;
		}

		if ( 0.25 < width / gridColumns && width / gridColumns < 0.5 && nth > 3 ) {
			return true;
		}

		return false;
	}

	return classnames([
		'novablocks-grid__area',
		`novablocks-grid__area--nth-${ nth }`,
		{
			'novablocks-grid__area--landscape': isLandscape(),

			'novablocks-grid__area--width-xs': width / gridColumns < 0.34,
			'novablocks-grid__area--width-s': 0.34 <= width / gridColumns && width / gridColumns < 0.5,
			'novablocks-grid__area--width-m': 0.5 <= width / gridColumns && width / gridColumns < 0.66,
			'novablocks-grid__area--width-l': 0.66 <= width / gridColumns && width / gridColumns < 0.75,
			'novablocks-grid__area--width-xl': 0.75 <= width / gridColumns,

			'novablocks-grid__area--height-xs': height / gridRows < 0.34,
			'novablocks-grid__area--height-s': 0.34 <= height / gridRows && height / gridRows < 0.5,
			'novablocks-grid__area--height-m': 0.5 <= height / gridRows && height / gridRows < 0.66,
			'novablocks-grid__area--height-l': 0.66 <= height / gridRows && height / gridRows < 0.75,
			'novablocks-grid__area--height-xl': 0.75 <= height / gridRows,
		}
	]);
};
