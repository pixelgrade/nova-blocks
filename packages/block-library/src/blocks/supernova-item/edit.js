/**
 * WordPress dependencies
 */
import { Fragment, useEffect, useMemo, useState } from '@wordpress/element';
import { Popover } from '@wordpress/components';
import { useSelect } from '@wordpress/data';

import {
  LinkControl,
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
  CardContentWrapper,
  CardMediaWrapper,
  ELEMENT,
  getVisibleOrder,
  metasAreAdjacent,
  useInnerBlocks,
  useSelectParent,
  useCustomDefaults,
} from "@novablocks/block-editor";

import { withShapeModelingDecoration } from "@novablocks/shape-modeling";

import { getNewDefaults } from "./utils";
import BlockControls from './block-controls';

const SupernovaItemEdit = props => {
  const { attributes, setControlsVisibility, clientId } = props;
  const { showMedia, mediaPosition, cardLayout, contentType } = attributes;
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

  // Walk the effective element order (either the saved elementOrder attribute
  // or the legacy derivation when it hasn't been touched yet) and split the
  // content around media based on where Media sits in the list.
  //
  // The reorder UI applies to both the predefined fields content and the
  // post-driven 'auto' mode (where SupernovaItemContent renders placeholders
  // so the editor reflects the reorder even though real post data only
  // appears on the frontend). Custom inner-block cards keep their
  // single-wrapper layout so authors can drop arbitrary blocks inside.
  const useElementOrder = contentType === 'fields' || contentType === 'auto';
  const order           = useElementOrder ? getVisibleOrder( attributes ) : [];
  const mediaIndex      = order.indexOf( ELEMENT.MEDIA );
  const contentItems    = order.filter( id => id !== ELEMENT.MEDIA );
  const beforeMediaItems = mediaIndex > 0 ? order.slice( 0, mediaIndex ).filter( id => id !== ELEMENT.MEDIA ) : [];
  const afterMediaItems  = mediaIndex >= 0 ? order.slice( mediaIndex + 1 ).filter( id => id !== ELEMENT.MEDIA ) : contentItems;

  // Media sits between two content halves only when it's not first in the
  // order and not last — otherwise the whole card renders as
  // [media → content] or [content → media].
  const splitAroundMedia = useElementOrder && showMedia && mediaIndex > 0 && mediaIndex < order.length - 1;

  const renderMedia = () => (
    <CardMediaWrapper { ...props }>
      <CardMedia { ...props } />
    </CardMediaWrapper>
  );

  return (
    <Fragment>
      <div { ...blockProps }>
        <Card { ...props }>
          { useElementOrder ? (
            splitAroundMedia ? (
              <>
                <CardContentWrapper { ...props } extraClassName="nb-supernova-item__content--before-media">
                  <SupernovaItemContent { ...props } items={ beforeMediaItems } />
                </CardContentWrapper>
                { renderMedia() }
                <CardContentWrapper { ...props } extraClassName="nb-supernova-item__content--after-media">
                  <SupernovaItemContent { ...props } items={ afterMediaItems } />
                </CardContentWrapper>
              </>
            ) : (
              <>
                { showMedia && mediaIndex === 0 && renderMedia() }
                <SupernovaItemContent { ...props } items={ contentItems } />
                { showMedia && mediaIndex === order.length - 1 && renderMedia() }
              </>
            )
          ) : (
            <>
              { showMedia && renderMedia() }
              <SupernovaItemContent { ...props } />
            </>
          ) }
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
    items,
  } = props;

  const {
    contentType,
    metaAboveTitle,
    metaBelowContent,
    title,
    subtitle,
    description,

    showMeta,
    displayInnerContent,

    cardTitleLevel,
    cardTitleFontSize,
  } = attributes;

  const TitleTagName    = `h${ cardTitleLevel }`;
  const titleClassName  = `has-${ cardTitleFontSize }-font-size`;
  const SubTitleTagName = `h${ cardTitleLevel + 1 }`;

  const newProps = {
    className: 'nb-supernova-item__inner-container'
  };

  const innerBlocksProps = useInnerBlocksProps( newProps, {
    renderAppender: InnerBlocks.ButtonBlockAppender
  } );

  if ( 'fields' === contentType ) {

    // `items` is the ordered list of element ids to render in this content
    // block. supernova-item's edit fn splits the visible element order around
    // Media and passes the halves in as `items`.
    const list = Array.isArray( items ) ? items : null;
    if ( ! list ) {
      return <div { ...newProps } />;
    }

    const adjacent = metasAreAdjacent( list );

    const elements = [];
    for ( let i = 0; i < list.length; i++ ) {
      const id = list[ i ];

      // Collapse meta-primary + meta-secondary into a single RichText row
      // when they're neighbours — matches the frontend render where the two
      // metas appear on the same line inside one <p>.
      if ( adjacent && showMeta && (
        ( id === ELEMENT.META_PRIMARY   && list[ i + 1 ] === ELEMENT.META_SECONDARY ) ||
        ( id === ELEMENT.META_SECONDARY && list[ i + 1 ] === ELEMENT.META_PRIMARY   )
      ) ) {
        const primaryFirst = id === ELEMENT.META_PRIMARY;
        elements.push(
          <div key={ `meta-combined-${ i }` } className="nb-card__meta-combined">
            <RichText
              className="nb-card__meta is-style-meta"
              placeholder={ primaryFirst ? 'Primary metadata' : 'Secondary metadata' }
              tagName="span"
              value={ primaryFirst ? metaAboveTitle : metaBelowContent }
              onChange={ value => setAttributes( primaryFirst ? { metaAboveTitle: value } : { metaBelowContent: value } ) }
              allowedFormats={ [] }
            />
            <span className="nb-card__meta-separator" aria-hidden="true" />
            <RichText
              className="nb-card__meta is-style-meta"
              placeholder={ primaryFirst ? 'Secondary metadata' : 'Primary metadata' }
              tagName="span"
              value={ primaryFirst ? metaBelowContent : metaAboveTitle }
              onChange={ value => setAttributes( primaryFirst ? { metaBelowContent: value } : { metaAboveTitle: value } ) }
              allowedFormats={ [] }
            />
          </div>
        );
        i++; // skip the secondary we just consumed
        continue;
      }

      if ( id === ELEMENT.META_PRIMARY && showMeta ) {
        elements.push(
          <RichText
            key={ `meta-primary-${ i }` }
            className="nb-card__meta is-style-meta"
            placeholder="Primary metadata"
            tagName="p"
            value={ metaAboveTitle }
            onChange={ metaAboveTitle => setAttributes( { metaAboveTitle } ) }
            allowedFormats={ [] }
          />
        );
        continue;
      }

      if ( id === ELEMENT.META_SECONDARY && showMeta ) {
        elements.push(
          <RichText
            key={ `meta-secondary-${ i }` }
            className="nb-card__meta is-style-meta"
            placeholder="Secondary metadata"
            tagName="p"
            value={ metaBelowContent }
            onChange={ metaBelowContent => setAttributes( { metaBelowContent } ) }
            allowedFormats={ [] }
          />
        );
        continue;
      }

      if ( id === ELEMENT.TITLE ) {
        elements.push(
          <RichText
            key={ `title-${ i }` }
            className={ `nb-card__title ${ titleClassName }` }
            placeholder="Title"
            tagName={ TitleTagName }
            value={ title }
            onChange={ title => setAttributes( { title } ) }
            allowedFormats={ [] }
          />
        );
        continue;
      }

      if ( id === ELEMENT.SUBTITLE ) {
        elements.push(
          <RichText
            key={ `subtitle-${ i }` }
            className="nb-card__subtitle"
            placeholder="Subtitle"
            tagName={ SubTitleTagName }
            value={ subtitle }
            onChange={ subtitle => setAttributes( { subtitle } ) }
            allowedFormats={ [] }
          />
        );
        continue;
      }

      if ( id === ELEMENT.DESCRIPTION ) {
        elements.push(
          <RichText
            key={ `description-${ i }` }
            className="nb-card__description"
            placeholder="Content"
            tagName="p"
            value={ description }
            onChange={ description => setAttributes( { description } ) }
          />
        );
        continue;
      }

      if ( id === ELEMENT.BUTTONS ) {
        elements.push( <SupernovaItemButton key={ `buttons-${ i }` } { ...props } /> );
        continue;
      }
    }

    return <div { ...newProps }>{ elements }</div>;
  }

  // Auto mode (Query Loop / Posts Collection): the editor has no real post
  // data to render, so each element renders as a static placeholder in its
  // current position. Authors still see their reorder reflected in the
  // editor; the frontend replaces placeholders with actual post data.
  if ( 'auto' === contentType ) {
    const list = Array.isArray( props.items ) ? props.items : null;
    if ( ! list ) {
      return <div { ...newProps } />;
    }

    const { primaryMetadata, secondaryMetadata } = attributes;
    const adjacent = metasAreAdjacent( list );

    const metaPlaceholder = ( source ) => {
      switch ( source ) {
        case 'author':       return 'Author name';
        case 'category':     return 'Category';
        case 'comments':     return '0 comments';
        case 'date':         return 'Jan 1, 2026';
        case 'tags':         return 'tag, tag';
        case 'reading-time': return '3 min read';
        default:             return '';
      }
    };

    const elements = [];
    for ( let i = 0; i < list.length; i++ ) {
      const id = list[ i ];
      const key = `${ id }-${ i }`;

      // Adjacent primary + secondary → combined placeholder row
      if ( adjacent && (
        ( id === ELEMENT.META_PRIMARY   && list[ i + 1 ] === ELEMENT.META_SECONDARY ) ||
        ( id === ELEMENT.META_SECONDARY && list[ i + 1 ] === ELEMENT.META_PRIMARY   )
      ) ) {
        const primaryFirst = id === ELEMENT.META_PRIMARY;
        const firstText  = metaPlaceholder( primaryFirst ? primaryMetadata : secondaryMetadata );
        const secondText = metaPlaceholder( primaryFirst ? secondaryMetadata : primaryMetadata );
        if ( firstText || secondText ) {
          elements.push(
            <p key={ `meta-combined-${ i }` } className="nb-card__meta is-style-meta nb-card__meta-combined is-placeholder">
              { firstText && <span className="nb-card__meta--primary">{ firstText }</span> }
              { firstText && secondText && <span className="nb-card__meta-separator" aria-hidden="true" /> }
              { secondText && <span className="nb-card__meta--secondary">{ secondText }</span> }
            </p>
          );
        }
        i++;
        continue;
      }

      if ( id === ELEMENT.META_PRIMARY ) {
        const text = metaPlaceholder( primaryMetadata );
        if ( text ) {
          elements.push( <p key={ key } className="nb-card__meta is-style-meta is-placeholder">{ text }</p> );
        }
        continue;
      }

      if ( id === ELEMENT.META_SECONDARY ) {
        const text = metaPlaceholder( secondaryMetadata );
        if ( text ) {
          elements.push( <p key={ key } className="nb-card__meta is-style-meta is-placeholder">{ text }</p> );
        }
        continue;
      }

      if ( id === ELEMENT.TITLE ) {
        elements.push(
          <TitleTagName key={ key } className={ `nb-card__title ${ titleClassName } is-placeholder` }>Post title</TitleTagName>
        );
        continue;
      }

      if ( id === ELEMENT.SUBTITLE ) {
        // Post-driven cards do not have a subtitle — skip entirely in the editor too.
        continue;
      }

      if ( id === ELEMENT.DESCRIPTION ) {
        elements.push(
          <p key={ key } className="nb-card__description is-placeholder">A brief excerpt from the post appears here, giving readers a preview of what's inside.</p>
        );
        continue;
      }

      if ( id === ELEMENT.BUTTONS ) {
        elements.push(
          <p key={ key } className="nb-card__buttons is-placeholder">
            <span className="wp-block-button is-style-outline">
              <span className="wp-block-button__link">Read more</span>
            </span>
          </p>
        );
        continue;
      }
    }

    return <div { ...newProps }>{ elements }</div>;
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
