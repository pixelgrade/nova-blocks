import CardMedia from "../card-media";

const {
	Fragment,
	RawHTML
} = wp.element;

const Card = ( props ) => {
	const isLandscape = props.isLandscape || false;
	return isLandscape ? <CardLandscape { ...props } /> : <CardPortrait { ...props } />;
};

const CardLandscape = ( props ) => {

	return (
		<div className={ `novablocks-card novablocks-card--landscape novablocks-card__inner-container novablocks-block__content` }>
			<div className="novablocks-card__layout">
				<div className="novablocks-card__layout-media">
					<CardMedia id={ props?.mediaId } />
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
			<div className="wp-block novablocks-grid__item-image">
				<CardMedia id={ props?.mediaId } />
			</div>
			<CardContents { ...props } />
		</div>
	);
};

const CardContents = ( props ) => {

	const {
		meta,
		title,
		content,
		buttons,
	} = props;

	const TitleTagName = props.titleTagName || 'h3';

	return (
		<Fragment>
			<div className="wp-block novablocks-grid__item-meta">
				<div className="novablocks-card__meta">
					<div className="novablocks-card__meta-size-modifier">
						{ meta }
					</div>
				</div>
			</div>
			<div className="wp-block novablocks-grid__item-title">
				<TitleTagName className="novablocks-card__title">
					<div className="novablocks-card__title-size-modifier">
						{ title }
					</div>
				</TitleTagName>
			</div>
			<div className="wp-block novablocks-grid__item-content novablocks-card__description">
				<RawHTML className="novablocks-card__content-size-modifier">
					{ content }
				</RawHTML>
			</div>
			<div className="wp-block novablocks-grid__item-buttons">
				<div className="novablocks-card__buttons">
					{ buttons }
				</div>
			</div>
		</Fragment>
	)
};

export default Card;
