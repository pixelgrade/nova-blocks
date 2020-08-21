import AreaDebug from "./areaDebug";
import { applyLayoutEngine } from "./layoutEngine";
import {
	getAreaClassName,
	getGridStyle,
	prepareAttributes,
	redistributeCardsInAreas,
	isLandscape,
	getPostsCount
} from "./utils";

const GridLayoutPreview = ( props ) => {

	const {
		attributes,
		getContent,
		cardsCount,
	} = props;

	const {
		toggleScale,
		toggleMask,
	} = attributes;

	let areaColumns = applyLayoutEngine( prepareAttributes( attributes ) );
	let addedCards = 0;

	const totalPosts = getPostsCount( areaColumns );
	redistributeCardsInAreas( areaColumns, cardsCount );

	return (
		<div className="wp-block-group__inner-container">
			<div className={ `novablocks-grid ${ toggleScale ? 'novablocks-grid--scaled' : '' } ${ toggleMask ? 'novablocks-grid--mask' : '' }` } style={ getGridStyle( attributes ) }>
				{
					!! areaColumns && areaColumns.map( areaColumn => {
						let { areas, row, col, width, height } = areaColumn;

						const areaColumnStyle = {
							gridColumnStart: col,
							gridColumnEnd: col + width,
							gridRowStart: row,
							gridRowEnd: row + height,
						};

						return (
							<div className={ `novablocks-grid__column` } style={ areaColumnStyle }>
								{ areas.map( area => {
									addedCards += area.postsCount;

									return (
										<div className={ getAreaClassName( area, attributes ) }>
											<AreaDebug area={ area } />
											{ Array.from( Array( area.postsCount ).keys() ).map( i => {
												const landscape = isLandscape( area, attributes );
												const content = getContent( addedCards - area.postsCount + i, attributes, landscape );

												return (
													content && <div className="novablocks-grid__item">
														{ content }
													</div>
												);
											} ) }
										</div>
									)
								} ) }
							</div>
						);
					} )
				}
			</div>
		</div>
	)
};

export default GridLayoutPreview;
