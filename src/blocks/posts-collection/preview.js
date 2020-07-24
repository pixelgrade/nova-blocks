import Media from "./components/media";
import Category from "./components/category";
import { getGridItems, getGridStyle, getGridItemStyle, getGridItemClassname } from "../../components/grid-generator/utils";

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

		toggleScale
	} = attributes;

	const TitleTagName = `h${ level + 1 }`;
	const SubtitleTagName = `h${ level + 2 }`;
	const dateFormat = __experimentalGetSettings().formats.date;

	markPostsAsDisplayed( clientId, posts );

	const gridItems = getGridItems( attributes );

	return (
		<div className="wp-block-group__inner-container">
			<div className={ `novablocks-grid ${ !! toggleScale ? 'novablocks-grid--scaled' : '' }` } style={ getGridStyle( attributes ) }>
				{
					!! posts && posts.map( ( post, idx ) => {

						const style = {
							'--columns': columns,
						};

						const gridItem = gridItems[idx];

						if ( typeof gridItem === "undefined" ) {
							return false;
						}

						return (
							<div className={ getGridItemClassname( gridItem, attributes ) }  style={ getGridItemStyle( gridItem, attributes ) }>
								<div className={ `novablocks-card novablocks-card__inner-container novablocks-block__content` } key={ idx } style={ style }>
									<div className="wp-block novablocks-grid__item-image">
										<div className="novablocks-card__media-wrap">
											<div className="novablocks-card__media">
												<Media post={ post } />
											</div>
										</div>
									</div>
									<div className="wp-block novablocks-grid__item-meta">
										<div className="novablocks-card__meta">
											<time dateTime={ format( 'c', post.date_gmt ) }>
												{ dateI18n( dateFormat, post.date_gmt ) }
											</time>
										</div>
									</div>
									<div className="wp-block novablocks-grid__item-title">
										<TitleTagName className="novablocks-card__title">{ post.title.raw }</TitleTagName>
									</div>
									{
										post.categories.length &&
										<div className="wp-block novablocks-grid__item-subtitle">
											<SubtitleTagName className="novablocks-card__subtitle">
												<Category id={ post.categories[0] } />
											</SubtitleTagName>
										</div>
									}
									<RawHTML className="wp-block novablocks-grid__item-content novablocks-card__description">
										{ post.excerpt.rendered }
									</RawHTML>
									<div className="wp-block novablocks-grid__item-buttons">
										<div className="novablocks-card__buttons">
											<div class="wp-block-buttons alignleft">
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
		</div>
	)
};

export default Preview;
