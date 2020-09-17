import classnames from "classnames";
import CardMedia from "../card-media";
import Category from "../../blocks/posts-collection/components/category";

const {
	Fragment,
	RawHTML
} = wp.element;

const Card = ( props ) => {
	const isLandscape = !! props.isLandscape;
	const hasFixedAspectRatio = !! props.hasFixedAspectRatio;

	const {
		showMedia,
		showMeta,
		showTitle,
		showContent,
		showButtons,
	} = props;

	const className = classnames(
		'novablocks-card',
		`novablocks-card--${ isLandscape ? 'landscape' : 'portrait' }`,
		`novablocks-block__content`,
		{
			'novablocks-card--fixed-media-aspect-ratio': hasFixedAspectRatio
		}
	);

	return (
		<div className={ className }>
			<div className="novablocks-card__layout">
				{
					showMedia &&
					<div className="novablocks-card__layout-media novablocks-grid__item-media">
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

export const CardContents = ( props ) => {

	const {
		metaAboveTitle,
		metaBelowTitle,
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
				showMeta && metaAboveTitle &&
				<div className="wp-block novablocks-grid__item-meta">
					<div className="novablocks-card__meta is-style-meta">
						<div className="novablocks-card__meta-size-modifier">
							{ metaAboveTitle }
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
				showMeta && metaBelowTitle &&
				<div className="wp-block novablocks-grid__item-meta">
					<div className="novablocks-card__meta is-style-meta">
						<div className="novablocks-card__meta-size-modifier">
							{ metaBelowTitle }
						</div>
					</div>
				</div>
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
