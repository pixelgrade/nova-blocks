import { applyLayoutEngine } from "./layoutEngine";

const prepareAttributes = ( attributes ) => {

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
	const gridItems = applyLayoutEngine( prepareAttributes( attributes ), true );

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

export const getGridItemClassname = ( gridItem, attributes ) => {

	const classes = [ 'novablocks-grid__item' ];
	const gridArea = gridItem.gridArea.split( ' / ' ).map( value => parseInt( value, 10 ) );
	const isLandscape = gridArea[3] - gridArea[1] > gridArea[2] - gridArea[0];

	if ( isLandscape ) {
		classes.push( 'novablocks-grid__item--portrait' );
	}

	if ( gridItem.imageWeight > 3 && gridItem.metaDetails > 5 ) {
		classes.push( 'novablocks-grid__item--larger-title' );
	}

	if ( isLandscape && gridItem.metaDetails < 3 || gridItem.metaDetails < 2 ) {
		classes.push( 'novablocks-grid__item--smaller-title' );
	}

	return classes.join( " " );
};

