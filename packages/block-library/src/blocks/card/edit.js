/**
 * WordPress dependencies
 */
import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import CardMedia from './media';

import {
	InnerBlocks,
	MediaUpload,
 } from '@wordpress/block-editor';
import {getColorSetClassnames} from "@novablocks/utils";

const CardEdit = ( props ) => {

	const {
		attributes,
		setAttributes,
	} = props;

	const {
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
  } = attributes;

	const className = classnames(
    'novablocks-card',
    'novablocks-card--fixed-media-aspect-ratio',
    'novablocks-card--portrait',
    'novablocks-block__content',
    getColorSetClassnames( attributes )
  );

	return (
		<div className={ className }>
			<div className="novablocks-card__layout">
				{
					showMedia &&
					<div className="novablocks-card__layout-media novablocks-grid__item-media">
						<MediaUpload
							type="image"
							value={ !! media && media.id }
							onSelect={ ( media ) => setAttributes( { media } ) }
							render={ ( { open } ) => (
								<div className={ `novablocks-card__media-wrap` } onClick={ open }>
									<div className={ `novablocks-card__media` }>
										<div className={ `novablocks-card__media-edit novablocks-change-media-overlay` }>
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
								className={ `novablocks-card__meta block-editor-block-list__block is-style-meta` }
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
								className={ `novablocks-card__title block-editor-block-list__block` }
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
								className={ `novablocks-card__subtitle block-editor-block-list__block` }
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
								className={ `novablocks-card__description block-editor-block-list__block` }
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
							<div className={ `novablocks-card__buttons block-editor-block-list__block` }>
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
