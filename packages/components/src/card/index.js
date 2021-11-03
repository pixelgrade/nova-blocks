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
		'nb-card',
		`nb-card--${ isLandscape ? 'landscape' : 'portrait' }`,
		`novablocks-block__content`,
		{
			'nb-card--placeholder': placeholder,
			'nb-card--fixed-media-aspect-ratio': hasFixedAspectRatio
		},
    props.className
	);

	return (
		<div className={ className }>
			<div className="nb-card__layout">
				{
					( showMedia || placeholder ) &&
					<div className="nb-card__layout-media nb-grid__item-media">
						<CardMedia { ...props }>{ props.media }</CardMedia>
					</div>
				}
				{
					( showMeta || showTitle || showSubtitle || showContent || showButtons || placeholder ) &&
					<div className="nb-card__layout-content">
            <div className="nb-card__inner-container">
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
		<TitleTagName className={ 'wp-block nb-grid__item-title nb-card__title' }>
      { ! placeholder ? title : <TextPlaceholder/> }
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
		<SubtitleTagName className={ 'wp-block nb-grid__item-title nb-card__subtitle' }>
      { ! placeholder ? subtitle : <TextPlaceholder/> }
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
		<div className="wp-block nb-grid__item-meta">
			<div className="nb-card__meta is-style-meta">
        { ! placeholder ? meta : <TextPlaceholder rows={ 1 } /> }
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

	const wrapperClassName = 'wp-block nb-grid__item-description nb-card__description';

	if ( placeholder ) {
		return (
			<div className={ wrapperClassName }>
        <TextPlaceholder rows={ 3 } />
			</div>
		);
	}

	return (
		<p className={ wrapperClassName }>
      <RawHTML>{ content }</RawHTML>
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
		<div className="wp-block nb-grid__item-buttons nb-card__buttons">
			{ ! placeholder ? buttons : <TextPlaceholder rows={ 1 } /> }
		</div>
	);
};

const CardMedia = ( { children, placeholder } ) => {

	const mediaClasses = classnames(
		'nb-card__media',
		{
			'nb-card__media--placeholder': !! placeholder
		}
	);

	let content = children;

	if ( ! children && ! placeholder ) {
		content = (
			<div className={ 'nb-card__media-placeholder' } />
		);
	}

	return (
		<div className="nb-card__media-wrap">
			<div className={ mediaClasses }>
				{ content }
			</div>
		</div>
	)
};

export default Card;
