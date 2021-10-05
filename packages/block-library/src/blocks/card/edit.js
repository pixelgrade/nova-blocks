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
	  props.className,
    'novablocks-card',
    'novablocks-card--fixed-media-aspect-ratio',
    'novablocks-card--portrait',
    'novablocks-block__content',
  );

	return (
		<div className={ className }>
			<div className="novablocks-card__layout">
				{
					showMedia &&
					<div className="novablocks-card__layout-media nb-grid__item-media">
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
					<div className="novablocks-card__layout-content">
            <div className="novablocks-card__inner-container">
              {
                showMeta &&
                <RichText
                  className={ `novablocks-card__meta block-editor-block-list__block is-style-meta` }
                  tagName={ 'p' }
                  value={meta}
                  onChange={meta => {
                    setAttributes( {meta} )
                  }}
                  placeholder={ __( 'Meta' ) }
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
                  placeholder={ __( 'Title' ) }
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
                  placeholder={ __( 'Subtitle' ) }
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
                  placeholder={ __( 'This is just an example of what a description for this card could look like' ) }
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
					</div>
				}
			</div>
		</div>
	);
}

export default CardEdit;
