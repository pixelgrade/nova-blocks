import AreaDebug from "./area-debug";

import {
	Card,
	CollectionPreview,
	CollectionHeader,
} from "@novablocks/components";

import { PostCard } from "@novablocks/block-editor";

import { applyLayoutEngine } from "./layout-engine";

import {
	getParametricLayoutAreaClassName,
	getGridStyle,
	redistributeCardsInAreas,
	isLandscape,
} from "./utils";

import { getCardMediaPaddingTop } from "@novablocks/utils";
import classnames from "classnames";

export const ClassicLayoutPreview = ( props ) => {

	const {
		attributes,
		posts,
	} = props;

	const {
		columns,
		isLandscape,
		showMedia,
		showMeta,
		showTitle,
		showDescription,
		showButtons,
		postsToShow,
	} = attributes;

	const style = {
		'--columns': columns
	};

	const cardProps = {
		placeholder: true,
		hasFixedAspectRatio: true,
		isLandscape,
		showMedia,
		showMeta,
		showTitle,
		showContent: showDescription,
		showButtons,
	};

	return (
		<CollectionPreview hasAppender={ false } { ...props }>
			<div className="block-editor-inner-blocks">
				<div className="block-editor-block-list__layout" style={ style }>
					{
						!! posts && posts.map( ( post, idx ) => {
							return (
								<PostCard key={ idx } post={ post } isLandscape={ isLandscape } attributes={ attributes } />
							);
						} )
					}
					{
						! posts && Array.from( Array( postsToShow ).keys() ).map( ( obj, idx ) => {
							return (
								<Card key={ idx } { ...cardProps } />
							)
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

		thumbnailAspectRatio,
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
		'--card-media-padding-top': getCardMediaPaddingTop( thumbnailAspectRatio ),
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
