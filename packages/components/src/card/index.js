import classnames from "classnames";
import CardMedia from "../card-media";
import { getRandomBetween } from "@novablocks/utils";
import { RawHTML } from '@wordpress/element';

const Card = ( props ) => {
	const isLandscape = !! props.isLandscape;
	const hasFixedAspectRatio = !! props.hasFixedAspectRatio;

	const {
		showMedia,
		showMeta,
		showTitle,
		showContent,
		showButtons,

		metaAboveTitle,
		metaBelowTitle,

		placeholder,
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
					( showMedia || placeholder ) &&
					<div className="novablocks-card__layout-media novablocks-grid__item-media">
						<CardMedia id={ props?.mediaId } />
					</div>
				}
				{
					( showMeta || showTitle || showContent || showButtons || placeholder ) &&
					<div className="novablocks-card__layout-content novablocks-card__inner-container">
						<CardMeta { ...props } meta={ metaAboveTitle } />
						<CardTitle { ...props } />
						<CardMeta { ...props } meta={ metaBelowTitle } />
						<CardContent { ...props } />
						<CardFooter { ...props } />
					</div>
				}
			</div>
		</div>
	);
};

const TextPlaceholder = ( props ) => {
	const rows = props.rows || 2;
	const arr = Array.from( Array( rows ).keys() );

	return (
		<div className={ 'novablocks-text-placeholder' }>
			{ arr.map( ( obj, index ) => {
				const units = index === arr.length - 1 ? getRandomBetween(7, 10) : getRandomBetween(3, 6);
				const width = `${ units * 10 }%`;
				const style = { width };
				return <div className={ 'novablocks-text-placeholder__row' } style={ style }></div>
			} ) }
		</div>
	);
};

const CardTitle = ( props ) => {

	const {
		title,
		showTitle,
		placeholder
	} = props;

	if ( ! showTitle && ! placeholder ) {
		return null;
	}

	const TitleTagName = props.titleTagName || 'h3';

	return (
		<TitleTagName className={ 'wp-block novablocks-grid__item-title novablocks-card__title' }>
			<div className="novablocks-card__title-size-modifier">
				{ ! placeholder ? title : <TextPlaceholder/> }
			</div>
		</TitleTagName>
	);
};

const CardMeta = ( props ) => {

	const {
		meta,
		showMeta,
		placeholder
	} = props;

	if ( ! showMeta && ! placeholder  ) {
		return null;
	}

	return (
		<div className="wp-block novablocks-grid__item-meta">
			<div className="novablocks-card__meta is-style-meta">
				<div className="novablocks-card__meta-size-modifier">
					{ ! placeholder && meta }
				</div>
			</div>
		</div>
	)
};

const CardContent = ( props ) => {

	const {
		content,
		showContent,
		placeholder
	} = props;

	if ( ! showContent && ! placeholder  ) {
		return null;
	}

	return (

		<div className="wp-block novablocks-grid__item-content novablocks-card__description">
			<RawHTML className="novablocks-card__content-size-modifier">
				{ content }
			</RawHTML>
		</div>
	)
};

const CardFooter = ( props ) => {

	const {
		buttons,
		showButtons,
		placeholder
	} = props;

	if ( ! showButtons && ! placeholder  ) {
		return null;
	}

	return (
		<div className="wp-block novablocks-grid__item-buttons novablocks-card__buttons">
			{ buttons }
		</div>
	);
};

export default Card;
