import { useEffect, useMemo, useState } from '@wordpress/element';
import { Popover } from '@wordpress/components';
import { useSelect } from '@wordpress/data';

import {
  RichText,
  __experimentalLinkControl as LinkControl,
  useBlockProps,
} from '@wordpress/block-editor';

const useInnerBlocksProps = wp.blockEditor.useInnerBlocksProps || wp.blockEditor.__experimentalUseInnerBlocksProps;

import { useScrollingEffect, withScrollingEffect } from '@novablocks/scrolling-effect';

import { MediaCompositionPreview } from "@novablocks/media-composition";
import {
  Card,
  CardButton,
  CardMediaWrapper,
  useInnerBlocks,
  useSelectParent,
  withPreviewAttributes
} from "@novablocks/block-editor";
import { withShapeModelingDecoration } from "@novablocks/shape-modeling";

const SuperNovaItemEdit = props => {

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
    return innerBlocks.length === 1;
  }, [ innerBlocks ] );

  useSelectParent( props, selectParentCondition );

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
    <div { ...blockProps }>
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
      <img className={ `supernova-item__media` } src={ media.url } width={ media.width } height={ media.height }
           style={ scrollingEffect?.style } />
  )
} );

const normalizeMedia = ( mediaObject ) => {
  // We will refrain from using the full image size to avoid overloading the editor window.
  // The `novablocks_large` image size is sufficient, if present.

  return {
    type: mediaObject?.type,
    width: mediaObject?.sizes?.novablocks_large?.width || mediaObject?.width,
    height: mediaObject?.sizes?.novablocks_large?.height || mediaObject.height,
    url: mediaObject?.sizes?.novablocks_large?.url || mediaObject?.url,
  }
};

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
    cardTitleFontSize,
  } = attributes;

  const [ showPopover, setShowPopover ] = useState( false );
  const TitleTagName = `h${ cardTitleLevel }`;
  const titleClassName = `has-${ cardTitleFontSize }-font-size`;
  const SubTitleTagName = `h${ cardTitleLevel + 1 }`;

  const newProps = {
    className: 'supernova-item__inner-container'
  };

  const innerBlocksProps = useInnerBlocksProps( newProps );

  if ( sourceType === 'fields' ) {
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
        {
          showButtons &&
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
            }
          </CardButton>
        }
      </div>
    )
  }

  return (
    displayInnerContent && <div { ...innerBlocksProps } />
  );
};

export default withPreviewAttributes( SuperNovaItemEdit );
