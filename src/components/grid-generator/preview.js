import AreaDebug from "./areaDebug";
import { CollectionPreview } from "../../components/collection";
import CardMedia from "../../components/card-media";
import { applyLayoutEngine } from "./layoutEngine";
import {
	getAreaClassName,
	getGridStyle,
	prepareAttributes,
	redistributeCardsInAreas,
	isLandscape,
	getPostsCount
} from "./utils";

const {
	Fragment,
	RawHTML
} = wp.element;

const {
	__experimentalGetSettings,
	dateI18n,
	format
} = wp.date;

const ClassicLayoutPreview = ( props ) => {

	const {
		attributes,
		posts,
	} = props;

	const {
		columns,
		level,
		showButtons,
		showDescription,
		showMedia,
		showMeta,
		showTitle,
		showSubtitle,
	} = attributes;

	const TitleTagName = `h${ level + 1 }`;
	const SubtitleTagName = `h${ level + 2 }`;
	const dateFormat = __experimentalGetSettings().formats.date;

	return (
		<CollectionPreview hasAppender={ false } { ...props }>
			<div className="block-editor-inner-blocks">
				<div className="block-editor-block-list__layout">
					{
						!! posts && posts.map( ( post, idx ) => {

							const style = {
								'--columns': columns,
							};

							return (
								<div className={ `novablocks-card novablocks-card__inner-container novablocks-block__content` } key={ idx } style={ style }>
									{
										showMedia &&
										<div className="wp-block">
											<CardMedia post={ post } />
										</div>
									}
									{
										showMeta &&
										<div className="wp-block">
											<div className="novablocks-card__meta">
												<time dateTime={ format( 'c', post.date_gmt ) }>
													{ dateI18n( dateFormat, post.date_gmt ) }
												</time>
											</div>
										</div>
									}
									{
										showTitle &&
										<div className="wp-block">
											<TitleTagName className="novablocks-card__title">{ post.title.raw }</TitleTagName>
										</div>
									}
									{
										showSubtitle &&
										post.categories.length &&
										<div className="wp-block">
											<SubtitleTagName className="novablocks-card__subtitle">
												<Category id={ post.categories[0] } />
											</SubtitleTagName>
										</div>
									}
									{
										showDescription &&
										<RawHTML className="wp-block novablocks-card__description">
											{ post.excerpt.rendered }
										</RawHTML>
									}
									{
										showButtons &&
										<div className="wp-block">
											<div className="novablocks-card__buttons">
												<div class="wp-block-buttons alignleft">
													<div className="wp-block-button is-style-text">
														<div className="wp-block-button__link">Read More</div>
													</div>
												</div>
											</div>
										</div>
									}
								</div>
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
	} = attributes;

	let areaColumns = applyLayoutEngine( prepareAttributes( attributes ) );
	let addedCards = 0;

	const totalPosts = getPostsCount( areaColumns );
	redistributeCardsInAreas( areaColumns, cardsCount, attributes );

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
