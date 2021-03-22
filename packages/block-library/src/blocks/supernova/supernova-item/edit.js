import { Fragment, useState } from '@wordpress/element';
import { InnerBlocks, RichText, __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';
import { Popover } from '@wordpress/components';

import AdvancedGallery from "@novablocks/advanced-gallery";

import { Card, CardButton, CardMediaWrapper } from '../components/card';
import { withPreviewAttributes } from "../with-preview-attributes";

const SuperNovaItemEdit = withPreviewAttributes( props => {

  return (
    <Card { ...props }>
      <CardMediaWrapper { ...props }>
        <AdvancedGallery.Component { ...props } />
      </CardMediaWrapper>
      <SuperNovaItemContent { ...props } />
    </Card>
  )
} );

const SuperNovaItemContent = ( props ) => {

  const {
    attributes: {
      sourceType,
      level,
      metaAboveTitle,
      metaBelowTitle,
      title,
      subtitle,
      description,
      buttonText,
      buttonUrl,
      buttonOpensInNewTab,
    },
    setAttributes
  } = props;

  const [ showPopover, setShowPopover ] = useState( false );

  if ( sourceType === 'fields' ) {
    return (
      <Fragment>
        <RichText
          className={ `novablocks-card__meta block-editor-block-list__block is-style-meta` }
          placeholder={ `Meta` }
          tagName={ 'p' }
          value={ metaAboveTitle }
          onChange={ metaAboveTitle => { setAttributes( { metaAboveTitle } ) } }
          allowedFormats={ [] }
        />
        <RichText
          className={ `novablocks-card__title block-editor-block-list__block` }
          placeholder={ `Title` }
          tagName={ `h${ level + 1 }` }
          value={ title }
          onChange={ title => { setAttributes( { title } ) } }
          allowedFormats={ [] }
        />
        <RichText
          className={ `novablocks-card__meta block-editor-block-list__block is-style-meta` }
          placeholder={ `Meta` }
          tagName={ 'p' }
          value={ metaBelowTitle }
          onChange={ metaBelowTitle => { setAttributes( { metaBelowTitle } ) } }
          allowedFormats={ [] }
        />
        <RichText
          className={ `novablocks-card__subtitle block-editor-block-list__block` }
          placeholder={ `Subtitle` }
          tagName={ `h${ level + 2 }` }
          value={ subtitle }
          onChange={ subtitle => { setAttributes( { subtitle } ) } }
          allowedFormats={ [] }
        />
        <RichText
          className={ `novablocks-card__description block-editor-block-list__block` }
          placeholder={ `Content` }
          tagName={ 'p' }
          value={ description }
          onChange={ description => { setAttributes( { description } ) } }
          allowedFormats={ [] }
        />
        <CardButton>
          <RichText
            placeholder={ `Button` }
            tagName={ 'span' }
            value={ buttonText }
            onChange={ buttonText => { setAttributes( { buttonText } ) } }
            allowedFormats={ [] }
            unstableOnFocus={ () => { setShowPopover( true ) } }
            onBlur={ () => { setShowPopover( false ) } }
          />
          { showPopover &&
            <Popover position="bottom center">
              <LinkControl
                className="wp-block-navigation-link__inline-link-input"
                value={ {
                  url: buttonUrl,
                  opensInNewTab: buttonOpensInNewTab
                } }
                onChange={ ( { url, opensInNewTab } ) => {
                  setAttributes( {
                    buttonUrl: url,
                    buttonOpensInNewTab: opensInNewTab
                  } );
                } }
              />
            </Popover>
          }
        </CardButton>
      </Fragment>
    )
  }

  return (
    <InnerBlocks />
  )
}

export default SuperNovaItemEdit;
