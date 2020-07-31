import Media from "./components/media";
import Category from "./components/category";
import { prepareAttributes, getGridStyle, fillAreaColumnsWithPosts, getAreaClassName } from "../../components/grid-generator/utils";
import { applyLayoutEngine } from "../../components/grid-generator/layoutEngine";

const {
	__experimentalGetSettings,
	dateI18n,
	format
} = wp.date;

const {
	RawHTML
} = wp.element;

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

	if ( ! posts || ! posts.length ) {
		return null;
	}

	fillAreaColumnsWithPosts( areaColumns, posts );

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
											<div className={ 'novablocks-grid__debug' }>
												{`nth: ${ area.nth }`}<br />
												{`image weight: ${ area.imageWeight }`}<br />
												{`meta details: ${ area.metaDetails }`}<br />
												{`width: ${ area.width }`}<br />
												{`height: ${ area.height }`}<br />
												{`spot ratio: ${ area.spotRatio }`}
											</div>
											{
												area.posts && area.posts.map( post => {

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

export default Preview;
