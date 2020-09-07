import CardMedia from "../card-media";

const {
	Fragment,
	RawHTML
} = wp.element;

const Card = ( props ) => {
	const isLandscape = props.isLandscape || false;

	const {
		showMedia,
		showMeta,
		showTitle,
		showContent,
		showButtons,
	} = props;

	return (
		<div className={ `novablocks-card novablocks-card--${ isLandscape ? 'landscape' : 'portrait' } novablocks-block__content` }>
			<div className="novablocks-card__layout">
				{
					showMedia &&
					<div className="novablocks-card__layout-media">
						<CardMedia id={ props?.mediaId } />
					</div>
				}
				{
					( showMeta || showTitle || showContent || showButtons ) &&
					<div className="novablocks-card__layout-content novablocks-card__inner-container">
						<CardContents { ...props } />
					</div>
				}
			</div>
		</div>
	);
};

const CardContents = ( props ) => {

	const {
		meta,
		title,
		content,
		buttons,

		showMeta,
		showTitle,
		showContent,
		showButtons,
	} = props;

	const TitleTagName = props.titleTagName || 'h3';

	return (
		<Fragment>
			{
				showMeta &&
				<div className="wp-block novablocks-grid__item-meta">
					<div className="novablocks-card__meta">
						<div className="novablocks-card__meta-size-modifier">
							{ meta }
						</div>
					</div>
				</div>
			}
			{
				showTitle &&
				<TitleTagName className="wp-block novablocks-grid__item-title novablocks-card__title">
					<div className="novablocks-card__title-size-modifier">
						{ title }
					</div>
				</TitleTagName>
			}
			{
				showContent &&
				<div className="wp-block novablocks-grid__item-content novablocks-card__description">
					<RawHTML className="novablocks-card__content-size-modifier">
						{ content }
					</RawHTML>
				</div>
			}
			{
				showButtons &&
				<div className="wp-block novablocks-grid__item-buttons novablocks-card__buttons">
					{ buttons }
				</div>
			}
		</Fragment>
	)
};

export default Card;
