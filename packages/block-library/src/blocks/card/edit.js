import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import { InnerBlocks, MediaUpload, useBlockProps } from '@wordpress/block-editor';

import { Card, CardMediaWrapper } from "@novablocks/block-editor";
import { getAlignFromMatrix, getColorSignalClassnames } from "@novablocks/utils";

import CardMedia from './media';

const CardEdit = ( props ) => {

	const {
		attributes,
		setAttributes,
	} = props;

	const {
    media,
    showMedia,
  } = attributes;

  const blockProps = useBlockProps();

	return (
		<div { ...blockProps } className={ 'nb-collection__layout-item' }>
			<Card { ...props }>
				{
					showMedia &&
          <MediaUpload
            type="image"
            value={ !! media && media.id }
            onSelect={ ( media ) => setAttributes( { media } ) }
            render={ ( { open } ) => (
              <CardMediaWrapper { ...props }>
                <div className={ `novablocks-change-media-overlay` } onClick={ open }>
                  <span>{ __( 'Change Media', '__plugin_txtd' ) }</span>
                </div>
                <CardMedia { ...props } />
              </CardMediaWrapper>
            ) }
          />
				}
        <CardContents { ...props } />
			</Card>
		</div>
	);
}

const CardContents = ( props ) => {

  const { attributes, setAttributes } = props;

  const {
    level,
    title,
    subtitle,
    description,
    meta,
    contentAlign,

    showTitle,
    showSubtitle,
    showDescription,
    showButtons,
    showMeta,
  } = attributes;

  const align = getAlignFromMatrix( attributes?.contentPosition );

  const contentWrapperClassName = classnames(
    `supernova-item__content`,
    `supernova-item__content--valign-${ align[0] }`,
    `supernova-item__content--halign-${ align[1] }`,
  );

  if ( ! showMeta && ! showTitle && ! showSubtitle && ! showDescription && ! showButtons ) {
    return null;
  }

  const containerClassName = classnames(
    'supernova-item__inner-container',
    getColorSignalClassnames( attributes, true )
  );

  return (
    <div className={ contentWrapperClassName }>
      <div className={ containerClassName }>
        {
          showMeta &&
          <RichText
            className={ `nb-card__meta is-style-meta` }
            tagName={ 'p' }
            value={ meta }
            onChange={ meta => { setAttributes( { meta } ) } }
            placeholder={ __( 'Meta', '__plugin_txtd' ) }
            allowedFormats={ [] }
          />
        }
        {
          showTitle &&
          <RichText
            className={ `nb-card__title` }
            tagName={ `h${ level + 1 }` }
            value={ title }
            onChange={ title => { setAttributes( { title } ) } }
            placeholder={ __( 'Title', '__plugin_txtd' ) }
            allowedFormats={ [] }
          />
        }
        {
          showSubtitle &&
          <RichText
            className={ `nb-card__subtitle` }
            tagName={ `h${ level + 2 }` }
            value={ subtitle }
            onChange={ subtitle => { setAttributes( { subtitle } ) } }
            placeholder={ __( 'Subtitle', '__plugin_txtd' ) }
            allowedFormats={ [] }
          />
        }
        {
          showDescription &&
          <RichText
            className={ `nb-card__description` }
            tagName={ 'p' }
            value={ description }
            onChange={ description => { setAttributes( { description } ) } }
            placeholder={ __( 'This is just an example of what a description for this card could look like', '__plugin_txtd' ) }
          />
        }
        {
          showButtons &&
          <div className={ `nb-card__buttons` }>
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
  )
}

export default CardEdit;
