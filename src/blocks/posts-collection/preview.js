import classnames from "classnames";
import Media from "./components/media";
import Category from "./components/category";
import { prepareAttributes, getGridStyle, getGridItemStyle, getGridItemClassname } from "../../components/grid-generator/utils";
import { applyLayoutEngine } from "../../components/grid-generator/layoutEngine";

const {
	__experimentalGetSettings,
	dateI18n,
	format
} = wp.date;

const {
	RawHTML
} = wp.element;

const CardGroup = () => {

}

const Preview = ( props ) => {

	const {
		attributes,
		posts,
		clientId,
		markPostsAsDisplayed,
	} = props;

	const {
		columns,
		level,

		toggleScale,
		toggleMask,

		gridColumns,
		gridRows,
	} = attributes;

	const TitleTagName = `h${ level + 1 }`;
	const SubtitleTagName = `h${ level + 2 }`;
	const dateFormat = __experimentalGetSettings().formats.date;

	markPostsAsDisplayed( clientId, posts );

	let areaColumns = applyLayoutEngine( prepareAttributes( attributes ) );

	let postsAdded = 0;

	if ( ! posts ) {
		return null;
	}

	for ( let i = 0; i < areaColumns.length; i++ ) {
		let areaColumn = areaColumns[i];
		let { areas, col, width } = areaColumn;

		for ( let j = 0; j < areas.length; j++ ) {
			let area = areas[j];
			area.posts = posts.slice(postsAdded, postsAdded + area.postsCount);
			postsAdded += area.posts.length;

			if ( postsAdded >= posts.length ) break;
		}

		if ( postsAdded >= posts.length ) break;
	}

	return (
		<div className="wp-block-group__inner-container">
			<div className={ `novablocks-grid ${ toggleScale ? '' : 'novablocks-grid--scaled' } ${ toggleMask ? '' : 'novablocks-grid--mask' }` } style={ getGridStyle( attributes ) }>
				{
					!! areaColumns && areaColumns.map( ( areaColumn, idx ) => {
						let { areas, nth, row, col, width, height } = areaColumn;

						const style = {
							gridColumnStart: col,
							gridColumnEnd: col + width,
							gridRowStart: row,
							gridRowEnd: row + height,
						};

						return (
							<div className={ `novablocks-grid__column` } style={ style }>
								{ areas.map( area => {

									return (
										<div className={ getAreaClassName( area, attributes ) }>
											{
												area.posts.map( post => {

													return (
														<div className="novablocks-grid__item">
															<div
																className={`novablocks-card novablocks-card__inner-container novablocks-block__content`}
																key={idx} style={style}>
																<div className="wp-block novablocks-grid__item-image">
																	<div className="novablocks-card__media-wrap">
																		<div className="novablocks-card__media">
																			<Media post={post}/>
																		</div>
																	</div>
																</div>
																<div className="wp-block novablocks-grid__item-meta">
																	<div className="novablocks-card__meta">
																		<time dateTime={format( 'c', post.date_gmt )}>
																			{dateI18n( dateFormat, post.date_gmt )}
																		</time>
																	</div>
																</div>
																<div className="wp-block novablocks-grid__item-title">
																	<TitleTagName
																		className="novablocks-card__title">{post.title.raw}</TitleTagName>
																</div>
																{
																	post.categories.length &&
																	<div className="wp-block novablocks-grid__item-subtitle">
																		<SubtitleTagName className="novablocks-card__subtitle">
																			<Category id={post.categories[0]}/>
																		</SubtitleTagName>
																	</div>
																}
																<RawHTML
																	className="wp-block novablocks-grid__item-content novablocks-card__description">
																	{post.excerpt.rendered}
																</RawHTML>
																<div className="wp-block novablocks-grid__item-buttons">
																	<div className="novablocks-card__buttons">
																		<div className="wp-block-buttons alignleft">
																			<div className="wp-block-button is-style-text">
																				<div className="wp-block-button__link">Read More</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													);
												} )
											}
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

const getAreaClassName = ( area, attributes ) => {
	const { gridColumns, gridRows } = attributes;
	const { nth, width, height } = area;

	function isLandscape() {

		console.log( area );

		if ( width / gridColumns > height / gridRows ) {
			return true;
		}

		if ( width / gridColumns < 0.35 && nth > 3 ) {
			return true;
		}

		return false;
	}

	return classnames([
		'novablocks-grid__area',
		{
			'novablocks-grid__area--landscape': isLandscape(),
			'novablocks-grid__area--width-xs': width / gridColumns < 0.34,
			'novablocks-grid__area--width-s': 0.34 <= width / gridColumns && width / gridColumns < 0.5,
			'novablocks-grid__area--width-m': 0.5 <= width / gridColumns && width / gridColumns < 0.66,
			'novablocks-grid__area--width-l': 0.66 <= width / gridColumns && width / gridColumns < 0.75,
			'novablocks-grid__area--width-xl': 0.75 <= width / gridColumns,
		}
	]);
};

export default Preview;
