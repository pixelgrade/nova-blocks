import AreaDebug from "./areaDebug";
import { CollectionPreview, CollectionHeader } from "../../components/collection";
import { applyLayoutEngine } from "./layoutEngine";
import {
	getParametricLayoutAreaClassName,
	getGridStyle,
	redistributeCardsInAreas,
	isLandscape,
} from "./utils";

import Post from "../../blocks/posts-collection/post";
import { getCardMediaPaddingTop } from "../../utils";
import classnames from "classnames";

export const ClassicLayoutPreview = ( props ) => {

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

export const ParametricLayoutPreview = ( props ) => {

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

		headerPosition,
	} = attributes;

	const classname = classnames(
		`novablocks-grid`,
		{
			'novablocks-grid--scaled': toggleScale,
			'novablocks-grid--mask': toggleMask,
		}
	);

	let areaColumns = applyLayoutEngine( attributes );
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
			{ headerPosition === 0 && <CollectionHeader { ...props } /> }
			<div className="novablocks-collection__cards block-editor-block-list__block">
				<div className="novablocks-collection__layout">
					<div className={ classname } style={ style }>
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
														return getContent( addedCards - area.postsCount + i, attributes, landscape );
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
			</div>
		</div>
	)
};
