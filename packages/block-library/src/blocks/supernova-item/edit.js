import classnames from 'classnames';
import { useState } from '@wordpress/element';

import {
  RichText,
  __experimentalLinkControl as LinkControl,
  useBlockProps,
} from '@wordpress/block-editor';

import { useScrollingEffect, withScrollingEffect } from '@novablocks/scrolling-effect';

const useInnerBlocksProps = wp.blockEditor.useInnerBlocksProps || wp.blockEditor.__experimentalUseInnerBlocksProps;

import { Popover } from '@wordpress/components';

import { MediaCompositionPreview } from "@novablocks/media-composition";
import { Card, CardButton, CardMediaWrapper } from "@novablocks/block-editor";
import { getColorSignalClassnames } from "@novablocks/utils";

const SuperNovaItemEdit = props => {

  const { attributes } = props;
  const { showMedia } = attributes;

  const blockProps = useBlockProps();

  return (
    <div { ...blockProps } className={ 'nb-collection__layout-item' }>
      <Card { ...props }>
        { showMedia &&
          <CardMediaWrapper { ...props }>
            <CardMedia { ...props } />
          </CardMediaWrapper>
        }
        <SuperNovaItemContent { ...props } />
      </Card>
    </div>
  )
};

const CardMedia = ( props ) => {

  return (
    <MediaCompositionPreview { ...props } />
  );
}

// @todo at some point preview should be available in specific conditions
const CardMediaWithScrollingEffect = withScrollingEffect( ( props ) => {
  const scrollingEffect = useScrollingEffect();

  return (
    <div style={ scrollingEffect?.style }>
      <CardMedia { ...props } />
    </div>
  )
} );

const SuperNovaItemContent = ( props ) => {

  const {
    attributes,
    setAttributes,
  } = props;

  const {
    sourceType,
    metaAboveTitle,
    metaBelowTitle,
    title,
    subtitle,
    description,
    buttonText,
    buttonUrl,
    buttonOpensInNewTab,

    showTitle,
    showSubtitle,
    showDescription,
    showButtons,
    showMeta,
    displayInnerContent,

    cardTitleLevel,
  } = attributes;

  const [ showPopover, setShowPopover ] = useState( false );
  const TitleTagName = `h${ cardTitleLevel }`;
  const SubTitleTagName = `h${ cardTitleLevel + 1 }`;

  const containerClassname = classnames(
    `supernova-item__inner-container`,
    getColorSignalClassnames( attributes, true )
  );

  const innerBlocksProps = useInnerBlocksProps( {
    className: classnames(
      'supernova-item__inner-container',
      getColorSignalClassnames( attributes, true )
    )
  } );

  if ( sourceType === 'fields' ) {
    return (
      <div className={ containerClassname }>
        {
          showMeta &&
          <RichText
            className={ `nb-card__meta block-editor-block-list__block is-style-meta` }
            placeholder={ `Meta` }
            tagName={ 'div' }
            value={ metaAboveTitle }
            onChange={ metaAboveTitle => {
              setAttributes( { metaAboveTitle } )
            } }
            allowedFormats={ [] }
          />
        }
        {
          showTitle &&
          <RichText
            className={ `nb-card__title block-editor-block-list__block` }
            placeholder={ `Title` }
            tagName={ TitleTagName }
            value={ title }
            onChange={ title => {
              setAttributes( { title } )
            } }
            allowedFormats={ [] }
          />
        }
        {
          showSubtitle &&
          <RichText
            className={ `nb-card__subtitle block-editor-block-list__block` }
            placeholder={ `Subtitle` }
            tagName={ SubTitleTagName }
            value={ subtitle }
            onChange={ subtitle => {
              setAttributes( { subtitle } )
            } }
            allowedFormats={ [] }
          />
        }
        {
          showMeta &&
          <RichText
            className={ 'nb-card__meta block-editor-block-list__block is-style-meta' }
            placeholder={ `Meta` }
            tagName={ 'p' }
            value={ metaBelowTitle }
            onChange={ metaBelowTitle => {
              setAttributes( { metaBelowTitle } )
            } }
            allowedFormats={ [] }
          />
        }
        {
          showDescription &&
            <RichText
              className={ `nb-card__description block-editor-block-list__block` }
              placeholder={ `Content` }
              tagName={ 'p' }
              value={ description }
              onChange={ description => {
                setAttributes( { description } )
              } }
            />
        }
        {
          showButtons &&
          <CardButton>
            <RichText
              placeholder={ `Button` }
              tagName={ 'span' }
              value={ buttonText }
              onChange={ buttonText => {
                setAttributes( { buttonText } )
              } }
              allowedFormats={ [] }
              unstableOnFocus={ () => {
                setShowPopover( true )
              } }
              onBlur={ () => {
                setShowPopover( false )
              } }
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
        }
      </div>
    )
  }

  return (
    displayInnerContent && <div { ...innerBlocksProps } />
  );
}

export default SuperNovaItemEdit;
