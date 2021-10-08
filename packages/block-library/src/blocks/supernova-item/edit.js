import classnames from 'classnames';
import { Fragment, useState } from '@wordpress/element';

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

  const blockProps = useBlockProps( {
    className: classnames(
      props.className,
      'nb-collection__layout-item'
    )
  } );

  return (
    <div { ...blockProps }>
      <Card { ...props }>
        <CardMediaWrapper { ...props }>
          <CardMedia { ...props } />
        </CardMediaWrapper>
        <SuperNovaItemContent { ...props } />
      </Card>
    </div>
  )
};

const CardMedia = withScrollingEffect( ( props ) => {

  const scrollingEffect = useScrollingEffect();

  // @todo at some point preview should be available in specific conditions
  return <MediaCompositionPreview { ...props } />

  return (
    <div style={ scrollingEffect?.style }>
      <MediaCompositionPreview { ...props } />
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
    level,
    metaAboveTitle,
    metaBelowTitle,
    title,
    subtitle,
    description,
    buttonText,
    buttonUrl,
    buttonOpensInNewTab,
  } = attributes;

  const [ showPopover, setShowPopover ] = useState( false );
  const TitleTagName = `h${ level + 1 }`;
  const SubTitleTagName = `h${ level + 2 }`;

  const containerClassname = classnames(
    `supernova-item__inner-container`,
    getColorSignalClassnames( attributes, true )
  );

  if ( sourceType === 'fields' ) {
    return (
      <div className={ containerClassname }>
        <div className={ `novablocks-card__meta block-editor-block-list__block is-style-meta` }>
          <RichText
            className={ `novablocks-card__meta-size-modifier` }
            placeholder={ `Meta` }
            tagName={ 'div' }
            value={ metaAboveTitle }
            onChange={ metaAboveTitle => { setAttributes( { metaAboveTitle } ) } }
            allowedFormats={ [] }
          />
        </div>
        <TitleTagName className={ `novablocks-card__title block-editor-block-list__block` }>
          <RichText
            className={ `novablocks-card__title-size-modifier` }
            placeholder={ `Title` }
            tagName={ 'div' }
            value={ title }
            onChange={ title => { setAttributes( { title } ) } }
            allowedFormats={ [] }
          />
        </TitleTagName>
        <div className={ 'novablocks-card__meta block-editor-block-list__block is-style-meta' }>
          <RichText
            className={ `novablocks-card__meta-size-modifier` }
            placeholder={ `Meta` }
            tagName={ 'p' }
            value={ metaBelowTitle }
            onChange={ metaBelowTitle => { setAttributes( { metaBelowTitle } ) } }
            allowedFormats={ [] }
          />
        </div>
        <SubTitleTagName className={ `novablocks-card__subtitle block-editor-block-list__block` }>
          <RichText
            className={ `novablocks-card__subtitle-size-modifier` }
            placeholder={ `Subtitle` }
            tagName= {'span'}
            value={ subtitle }
            onChange={ subtitle => { setAttributes( { subtitle } ) } }
            allowedFormats={ [] }
          />
        </SubTitleTagName>

        <p className={ `novablocks-card__description block-editor-block-list__block` }>
          <RichText
            className={ `novablocks-card__description-size-modifier` }
            placeholder={ `Content` }
            tagName={ 'span' }
            value={ description }
            onChange={ description => { setAttributes( { description } ) } }
          />
        </p>
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
      </div>
    )
  }

  const innerBlocksProps = useInnerBlocksProps( {
    className: classnames(
      'supernova-item__inner-container',
      getColorSignalClassnames( attributes, true )
    )
  } );

  return (
    <div { ...innerBlocksProps } />
  )
}

export default SuperNovaItemEdit;
