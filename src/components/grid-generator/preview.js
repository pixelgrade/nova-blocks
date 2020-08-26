import AreaDebug from "./areaDebug";
import { CollectionPreview, CollectionHeader } from "../../components/collection";
import { applyLayoutEngine } from "./layoutEngine";
import {
	getParametricLayoutAreaClassName,
	getGridStyle,
	prepareAttributes,
	redistributeCardsInAreas,
	isLandscape,
	getPostsCount
} from "./utils";

import Post from "../../blocks/posts-collection/post";
import {getCardMediaPaddingTop} from "../../utils";

const {
	Fragment,
} = wp.element;

const ClassicLayoutPreview = ( props ) => {

	const {
		attributes,
		posts,
	} = props;

	const {
		columns,
		isLandscape,
	} = attributes;

	const style = {
		'--columns': columns
	};

	return (
		<CollectionPreview hasAppender={ false } { ...props }>
			<div className="block-editor-inner-blocks">
				<div className="block-editor-block-list__layout" style={ style }>
					{
						!! posts && posts.map( ( post, idx ) => {
							return (
								<Post key={ idx } post={ post } isLandscape={ isLandscape } attributes={ attributes } />
							);
						} )
					}
				</div>
			</div>
		</CollectionPreview>
	);
};

const ParametricLayoutPreview = ( props ) => {

	const {
		attributes,
		getContent,
		cardsCount,
	} = props;

	const {
		toggleScale,
		toggleMask,

		containerHeight,
		imagePadding,
		imageResizing,
	} = attributes;

	let areaColumns = applyLayoutEngine( prepareAttributes( attributes ) );
	let addedCards = 0;

	redistributeCardsInAreas( areaColumns, cardsCount, attributes );

	const style = {
		'--card-media-padding': imagePadding,
		'--card-media-padding-top': getCardMediaPaddingTop( containerHeight ),
		'--card-media-object-fit': imageResizing === 'cropped' ? 'cover' : 'scale-down',
		...getGridStyle( attributes ),
	};

	return (
		<div className="wp-block-group__inner-container">
			<CollectionHeader { ...props } />
			<div className={ `novablocks-grid ${ toggleScale ? 'novablocks-grid--scaled' : '' } ${ toggleMask ? 'novablocks-grid--mask' : '' }` } style={ style }>
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
										<div className={ getParametricLayoutAreaClassName( area, attributes ) }>
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

const LayoutPreview = ( props ) => {

	const {
		attributes: {
			layoutStyle
		}
	} = props;

	return (
		<Fragment>
			{ layoutStyle === 'classic' && <ClassicLayoutPreview { ...props } /> }
			{ layoutStyle === 'parametric' && <ParametricLayoutPreview { ...props } /> }
		</Fragment>
	)
};

export default LayoutPreview;
