import classnames from "classnames";
import { RawHTML } from '@wordpress/element';
import { TextPlaceholder } from '../index';

const Card = ( props ) => {
	const isLandscape = !! props.isLandscape;
	const hasFixedAspectRatio = !! props.hasFixedAspectRatio;

	const {
		showMedia,
		showMeta,
		showTitle,
    showSubtitle,
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
			'novablocks-card--placeholder': placeholder,
			'novablocks-card--fixed-media-aspect-ratio': hasFixedAspectRatio
		},
    props.className
	);

	return (
		<div className={ className }>
			<div className="novablocks-card__layout">
				{
					( showMedia || placeholder ) &&
					<div className="novablocks-card__layout-media novablocks-grid__item-media">
						<CardMedia { ...props }>{ props.media }</CardMedia>
					</div>
				}
				{
					( showMeta || showTitle || showSubtitle || showContent || showButtons || placeholder ) &&
					<div className="novablocks-card__layout-content">
            <div className="novablocks-card__inner-container">
              <CardMeta { ...props } meta={ metaAboveTitle } />
              <CardTitle { ...props } />
              <CardMeta { ...props } meta={ metaBelowTitle } />
              <CardSubtitle { ...props } />
              <CardContent { ...props } />
              <CardFooter { ...props } />
            </div>
					</div>
				}
			</div>
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

const CardSubtitle = ( props ) => {

	const {
		subtitle,
		showSubtitle,
		placeholder
	} = props;

	if ( ! showSubtitle && ! placeholder ) {
		return null;
	}

	const SubtitleTagName = props.titleTagName || 'h3';

	return (
		<SubtitleTagName className={ 'wp-block novablocks-grid__item-title novablocks-card__subtitle' }>
			<div className="novablocks-card__subtitle-size-modifier">
				{ ! placeholder ? subtitle : <TextPlaceholder/> }
			</div>
		</SubtitleTagName>
	);
};

const CardMeta = ( props ) => {

	const {
		meta,
		showMeta,
		placeholder
	} = props;

	if ( ! showMeta ) {
		return null;
	}

	return (
		<div className="wp-block novablocks-grid__item-meta">
			<div className="novablocks-card__meta is-style-meta">
				<div className="novablocks-card__meta-size-modifier">
					{ ! placeholder ? meta : <TextPlaceholder rows={ 1 } /> }
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

	const wrapperClassName = 'wp-block novablocks-grid__item-description novablocks-card__description';
	const fontSizeClassName = 'novablocks-card__description-size-modifier';

	if ( placeholder ) {
		return (
			<div className={ wrapperClassName }>
				<div className={ fontSizeClassName }>
					<TextPlaceholder rows={ 3 } />
				</div>
			</div>
		);
	}

	return (
		<p className={ wrapperClassName }>
			<span className={ fontSizeClassName }>
        <RawHTML>{ content }</RawHTML>
			</span>
		</p>
	);
};

const CardFooter = ( props ) => {

	const {
		buttons,
		showButtons,
		placeholder
	} = props;

	if ( ! showButtons ) {
		return null;
	}

	return (
		<div className="wp-block novablocks-grid__item-buttons novablocks-card__buttons">
			{ ! placeholder ? buttons : <TextPlaceholder rows={ 1 } /> }
		</div>
	);
};

const CardMedia = ( { children, placeholder } ) => {

	const mediaClasses = classnames(
		'novablocks-card__media',
		{
			'novablocks-card__media--placeholder': !! placeholder
		}
	);

	let content = children;

	if ( ! children && ! placeholder ) {
		content = (
			<div className={ 'novablocks-card__media-placeholder' } />
		);
	}

	return (
		<div className="novablocks-card__media-wrap">
			<div className={ mediaClasses }>
				{ content }
			</div>
		</div>
	)
};

export default Card;
