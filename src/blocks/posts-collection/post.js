const {
	__experimentalGetSettings,
	dateI18n,
	format
} = wp.date;

const {
	RawHTML
} = wp.element;

import Media from "./components/media";
import Category from "./components/category";

const Post = ( props ) => {
	const { post, attributes } = props;
	const { level } = attributes;

	const TitleTagName = `h${ level + 1 }`;
	const SubtitleTagName = `h${ level + 2 }`;
	const dateFormat = __experimentalGetSettings().formats.date;

	return (
		<div className={ `novablocks-card novablocks-card__inner-container novablocks-block__content` }>
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
					<div className="wp-block-buttons alignleft">
						<div className="wp-block-button is-style-text">
							<div className="wp-block-button__link">Read More</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Post;
