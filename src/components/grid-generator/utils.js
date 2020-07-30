import { applyLayoutEngine } from "./layoutEngine";

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
