const {
	__experimentalGetSettings,
	dateI18n,
	format
} = wp.date;

const {
	Fragment,
	RawHTML
} = wp.element;

import CardMedia from "../../components/card-media";
import Category from "./components/category";

const Card = ( props ) => {
	const isLandscape = props.isLandscape || false;
	return isLandscape ? <CardLandscape { ...props } /> : <CardPortrait { ...props } />;
};

const CardLandscape = ( props ) => {

	return (
		<div className={ `novablocks-card novablocks-card--landscape novablocks-card__inner-container novablocks-block__content` }>
			<div className="novablocks-card__layout">
				<div className="novablocks-card__layout-media">
					<CardMedia { ...props } />
				</div>
				<div className="novablocks-card__layout-content">
					<CardContents { ...props } />
				</div>
			</div>
		</div>
	);
};

const CardPortrait = ( props ) => {

	return (
		<div className={ `novablocks-card novablocks-card--portrait novablocks-card__inner-container novablocks-block__content` }>
			<div className="wp-block">
				<div className="novablocks-grid__item-image">
					<CardMedia { ...props } />
				</div>
			</div>
			<CardContents { ...props } />
		</div>
	);
};

const CardContents = ( props ) => {
	const { post, attributes } = props;
	const { level } = attributes;

	const TitleTagName = `h${ level + 1 }`;
	const dateFormat = __experimentalGetSettings().formats.date;

	return (
		<Fragment>
			<div className="wp-block novablocks-grid__item-meta">
				<div className="novablocks-card__meta">
					<time dateTime={ format( 'c', post.date_gmt ) }>
						<div className="novablocks-card__meta-size-modifier">
							{ dateI18n( dateFormat, post.date_gmt ) }
							{ post.categories.length &&
							  <Fragment>
								  <RawHTML style={ { display: 'inline' } }>{ '&mdash;' }</RawHTML>
								  <Category id={ post.categories[0] } />
							  </Fragment>
							}
						</div>
					</time>
				</div>
			</div>
			<div className="wp-block novablocks-grid__item-title">
				<TitleTagName className="novablocks-card__title">
					<div className="novablocks-card__title-size-modifier">
						{ post.title.raw }
					</div>
				</TitleTagName>
			</div>
			<RawHTML className="wp-block novablocks-grid__item-content novablocks-card__description">
				<div className="novablocks-card__content-size-modifier">
					{ post.excerpt.rendered }
				</div>
			</RawHTML>
			<div className="wp-block novablocks-grid__item-buttons">
				<div className="novablocks-card__buttons">
					<div className="wp-block-buttons alignleft">
						<div className="wp-block-button is-style-text">
							<div className="wp-block-button__link">
								<div className="novablocks-card__content-size-modifier">
									{ __( 'Read More' ) }
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
};

export default Card;
