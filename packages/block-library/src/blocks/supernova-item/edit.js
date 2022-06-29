/**
 * WordPress dependencies
 */
import { Fragment, useEffect, useMemo, useState } from '@wordpress/element';
import { Popover } from '@wordpress/components';
import { useSelect } from '@wordpress/data';

import {
  __experimentalLinkControl as LinkControl,
  InnerBlocks,
  RichText,
  useBlockProps,
  useInnerBlocksProps,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { useScrollingEffect, withScrollingEffect } from '@novablocks/scrolling-effect';
import { normalizeMedia } from '@novablocks/utils';

import { MediaCompositionPreview } from "@novablocks/media-composition";

import {
  Card,
  CardButton,
  CardMediaWrapper,
  useInnerBlocks,
  useSelectParent,
  useCustomDefaults,
} from "@novablocks/block-editor";

import { withShapeModelingDecoration } from "@novablocks/shape-modeling";

import { getNewDefaults } from "./utils";
import BlockControls from './block-controls';

const SupernovaItemEdit = props => {
  const { attributes, setControlsVisibility, clientId } = props;
  const { showMedia } = attributes;
  const parent = useSelect( select =>{
    const { getBlockParents } = select( 'core/block-editor' );
    const parents = getBlockParents( clientId ).slice();

    if ( parents.length ) {
      return parents[ parents.length - 1 ];
    }

    return null;
  }, [ clientId ] );

  const innerBlocks = useInnerBlocks( parent );
  const selectParentCondition = useMemo( () => {
    return 1 === innerBlocks.length;
  }, [ innerBlocks ] );

  useSelectParent( props, selectParentCondition );
  useCustomDefaults( clientId, attributes, getNewDefaults );

  useEffect( () => {
    setControlsVisibility( {
      // Media Composition
      'media-composition-block-controls': showMedia
    } );
  }, [ showMedia ] );

  const blockProps = useBlockProps( {
    className: 'nb-collection__layout-item'
  });

  return (
    <Fragment>
      <div { ...blockProps }>
        <Card { ...props }>
          { showMedia &&
            <CardMediaWrapper { ...props }>
              <CardMedia { ...props } />
            </CardMediaWrapper>
          }
          <SupernovaItemContent { ...props } />
        </Card>
      </div>
      <BlockControls { ...props } />
    </Fragment>
  )
};

const CardMedia = withScrollingEffect( props => {

  const { attributes } = props;
  const { images } = attributes;
  const scrollingEffect = useScrollingEffect();

  if ( Array.isArray( images ) && 1 === images.length ) {
    <CardMediaWithShapeDecoration { ...props } />
  }

  return (
    <div style={ scrollingEffect?.style }>
      <MediaCompositionPreview { ...props } />
    </div>
  );
} );

const CardMediaWithShapeDecoration = withShapeModelingDecoration( props => {
  const { attributes } = props;
  const { images } = attributes;
  const media = normalizeMedia( images[ 0 ] );
  const scrollingEffect = useScrollingEffect();

  return (
      <img className={ `nb-supernova-item__media` } src={ media.url } width={ media.width } height={ media.height }
           style={ scrollingEffect?.style } alt={ media.alt } />
  )
} );

const SupernovaItemContent = ( props ) => {

  const {
    attributes,
    setAttributes,
  } = props;

  const {
    contentType,
    metaAboveTitle,
    metaBelowTitle,
    title,
    subtitle,
    description,

    showTitle,
    showSubtitle,
    showDescription,
    showButtons,
    showMeta,
    displayInnerContent,

    cardTitleLevel,
    cardTitleFontSize,
  } = attributes;

  const TitleTagName = `h${ cardTitleLevel }`;
  const titleClassName = `has-${ cardTitleFontSize }-font-size`;
  const SubTitleTagName = `h${ cardTitleLevel + 1 }`;

  const newProps = {
    className: 'nb-supernova-item__inner-container'
  };

  const innerBlocksProps = useInnerBlocksProps( newProps, {
    renderAppender: InnerBlocks.ButtonBlockAppender
  } );

  if ( 'fields' === contentType ) {
    return (
      <div { ...newProps }>
        {
          showMeta &&
          <RichText
            className={ `nb-card__meta is-style-meta` }
            placeholder={ `Meta` }
            tagName={ 'p' }
            value={ metaAboveTitle }
            onChange={ metaAboveTitle => { setAttributes( { metaAboveTitle } ) } }
            allowedFormats={ [] }
          />
        }
        {
          showTitle &&
          <RichText
            className={ `nb-card__title ${ titleClassName }` }
            placeholder={ `Title` }
            tagName={ TitleTagName }
            value={ title }
            onChange={ title => { setAttributes( { title } ) } }
            allowedFormats={ [] }
          />
        }
        {
          showSubtitle &&
          <RichText
            className={ `nb-card__subtitle` }
            placeholder={ `Subtitle` }
            tagName={ SubTitleTagName }
            value={ subtitle }
            onChange={ subtitle => { setAttributes( { subtitle } ) } }
            allowedFormats={ [] }
          />
        }
        {
          showMeta &&
          <RichText
            className={ 'nb-card__meta is-style-meta' }
            placeholder={ `Meta` }
            tagName={ 'p' }
            value={ metaBelowTitle }
            onChange={ metaBelowTitle => { setAttributes( { metaBelowTitle } ) } }
            allowedFormats={ [] }
          />
        }
        {
          showDescription &&
            <RichText
              className={ `nb-card__description` }
              placeholder={ `Content` }
              tagName={ 'p' }
              value={ description }
              onChange={ description => { setAttributes( { description } ) } }
            />
        }
        <SupernovaItemButton { ...props } />
      </div>
    )
  }

  return (
    displayInnerContent && <div { ...innerBlocksProps } />
  );
};

const SupernovaItemButton = ( props ) => {
  const { attributes, setAttributes } = props;
  const [ showPopover, setShowPopover ] = useState( false );

  const {
    showButtons,
    buttonText,
  } = attributes;

  if ( ! showButtons ) {
    return null;
  }

  return (
    <CardButton { ...props }>
      <RichText
        placeholder={ `Button` }
        tagName={ 'span' }
        value={ buttonText }
        onChange={ buttonText => { setAttributes( { buttonText } ) } }
        allowedFormats={ [] }
        onClick={ () => { setShowPopover( ! showPopover ) } }
      />
      <SupernovaItemButtonPopover { ...props } show={ showPopover } />
    </CardButton>
  )
}

const SupernovaItemButtonPopover = props => {
  const { show, attributes, setAttributes } = props;

  const {
    buttonUrl,
    buttonOpensInNewTab,
  } = attributes;

  if ( ! show ) {
    return null;
  }

  return (
    <Popover position="bottom center" focusOnMount={ false }>
      <LinkControl
        className={ 'wp-block-navigation-link__inline-link-input' }
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
  )
}

export default SupernovaItemEdit;
