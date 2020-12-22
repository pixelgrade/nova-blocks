/**
 * WordPress dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import {
	InnerBlocks,
	MediaUpload,
 } from '@wordpress/block-editor';

import placeholderSvg from './card-media-placeholder.svg';

const CardEdit = ( props ) => {

	const blockClassName = 'novablocks-card';

	const {
		attributes: {
			level,
			title,
			subtitle,
			description,
			media,
			meta,

			contentAlign,
			showMedia,
			showTitle,
			showSubtitle,
			showDescription,
			showButtons,
			showMeta,
		},
		setAttributes,
	} = props;

	const CardMedia = ( props ) => {

		const {
			attributes: {
				media
			},
		} = props;

		const mediaURL = media?.sizes?.novablocks_medium?.url || media?.sizes?.novablocks_large?.url || media?.url;

		if ( !! mediaURL ) {
			return <img className={ `${ blockClassName }__media-image` } src={ mediaURL } />
		}

		return (
			<div className={ `${ blockClassName }__media-placeholder` }>
				{ placeholderSvg }
			</div>
		);
	};

	return (
		<div className={ `novablocks-card novablocks-card--fixed-media-aspect-ratio novablocks-card--portrait novablocks-block__content` }>
			<div className="novablocks-card__layout">
				{
					showMedia &&
					<div className="novablocks-card__layout-media novablocks-grid__item-media">
						<MediaUpload
							type="image"
							value={ !! media && media.id }
							onSelect={ ( media ) => setAttributes( { media } ) }
							render={ ( { open } ) => (
								<div className={ `${ blockClassName }__media-wrap` } onClick={ open }>
									<div className={ `${ blockClassName }__media` }>
										<div className={ `${ blockClassName }__media-edit novablocks-change-media-overlay` }>
											<span>{ __( 'Change Media', '__plugin_txtd' ) }</span>
										</div>
										<CardMedia { ...props } />
									</div>
								</div>
							) }
						/>
					</div>
				}
				{
					( showMeta || showTitle || showSubtitle || showDescription || showButtons ) &&
					<div className="novablocks-card__layout-content novablocks-card__inner-container">
						{
							showMeta &&
							<RichText
								className={ `${ blockClassName }__meta block-editor-block-list__block is-style-meta` }
								tagName={ 'p' }
								value={meta}
								onChange={meta => {
									setAttributes( {meta} )
								}}
								allowedFormats={ [] }
							/>
						}
						{
							showTitle &&
							<RichText
								className={`${blockClassName}__title block-editor-block-list__block`}
								tagName={`h${level + 1}`}
								value={title}
								onChange={title => {
									setAttributes( {title} )
								}}
								allowedFormats={ [] }
							/>

						}
						{
							showSubtitle &&
							<RichText
								className={ `${ blockClassName }__subtitle block-editor-block-list__block` }
								tagName={ `h${level + 2}` }
								value={subtitle}
								onChange={subtitle => {
									setAttributes( {subtitle} )
								}}
								allowedFormats={ [] }
							/>
						}
						{
							showDescription &&
							<RichText
								className={ `${ blockClassName }__description block-editor-block-list__block` }
								tagName={ 'p' }
								value={description}
								onChange={description => {
									setAttributes( {description} )
								}}
								allowedFormats={ [] }
							/>
						}
						{
							showButtons &&
							<div className={ `${ blockClassName }__buttons block-editor-block-list__block` }>
								<InnerBlocks
									allowedBlocks={ [ 'core/buttons' ] }
									renderAppender={ false }
									template={ [
										[ 'core/buttons', { align: contentAlign },
											[ [ 'core/button', { text: 'Button', className: 'is-style-text' } ] ]
										]
									] }
								/>
							</div>
						}
					</div>
				}
			</div>
		</div>
	);
}

export default CardEdit;
