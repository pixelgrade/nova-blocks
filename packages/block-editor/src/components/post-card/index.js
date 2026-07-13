import { __ } from "@wordpress/i18n";
import { withSelect } from "@wordpress/data";
const stripHTML = ( html ) => {
  const doc = document.implementation.createHTMLDocument( '' );
  doc.body.innerHTML = html;
  return doc.body.textContent || '';
};

export const getPostFormatClass = post => {
  const format = String( post?.format || 'standard' )
    .toLowerCase()
    .replace( /[^a-z0-9_-]/g, '' );

  return `format-${ format || 'standard' }`;
};

export const extractPostQuote = post => {
  const html = post?.content?.raw || post?.content?.rendered || '';
  if ( ! html ) {
    return { quote: '', citation: '' };
  }

  const doc = document.implementation.createHTMLDocument( '' );
  doc.body.innerHTML = html;
  const blockquote = doc.querySelector( 'blockquote' );

  if ( ! blockquote ) {
    return { quote: '', citation: '' };
  }

  return {
    quote: blockquote.querySelector( 'p' )?.textContent?.trim() || '',
    citation: blockquote.querySelector( 'cite' )?.textContent?.trim() || '',
  };
};
import { Fragment, useEffect, useRef } from '@wordpress/element';

import {
  Card,
  CardMeta,
  CardTitle,
  CardDescription,
  CardFooter,
  CardButton,
  CardContentWrapper,
  CardMediaWrapper,
} from "../index";

import {
  getCardExpressionClassesFromValues,
  getColorSignalClassnames,
  getOverlayFilterCSSProps,
  getSpacingCSSProps,
  resizeDropcap,
} from "@novablocks/utils";

import {
  ELEMENT,
  getVisibleOrder,
  metasAreAdjacent,
} from "../../filters/with-card-details/components/element-order-utils";

import { getMetadata, sanitizeMediaResponse } from './utils';

const joinClassNames = ( ...classNames ) => classNames.filter( Boolean ).join( ' ' );

const getPostFormatBlueprintStyle = attributes => ( {
  '--nb-media-composition-gap': `${ attributes?.elementsDistance || 0 }px`,
  ...getOverlayFilterCSSProps( attributes ),
  ...getSpacingCSSProps( attributes ),
  '--nb-collection-columns-count': attributes?.columns,
  '--nb-grid-spacing-modifier': attributes?.gridGap,
  '--nb-grid-spacing-multiplier': 1,
  '--nb-grid-row-spacing-multiplier': attributes?.verticalGapModifier,
  '--nb-pile-3d-scale': 1,
} );

const withMedia = withSelect( ( select, ownProps ) => {
  const { getMedia } = select( 'core' );
  const { post, attributes } = ownProps;
  const { showMedia } = attributes;
  const { featured_media } = post;

  if ( ! featured_media || ! showMedia ) {
    return null;
  }

  const mediaObject = getMedia( featured_media );

  if ( ! mediaObject ) {
    return null;
  }

  return {
    media: sanitizeMediaResponse( mediaObject )
  }
} );

export const PostCardMedia = ( props ) => {
  const { media } = props;

  if ( ! media ) {
    return null;
  }

  return (
    <img className={ `nb-supernova-item__media` }
         src={ media.url }
         width={ media.width }
         height={ media.height }
         alt={ media?.alt }
      />
  )
};

export const PostCardLetter = props => {
  const { attributes, collectionLayoutRecipes, post } = props;
  const postTitle = post?.title?.raw || '';
  const ref = useRef( null );
  const activeRecipe = Array.isArray( collectionLayoutRecipes )
    ? collectionLayoutRecipes.find( recipe => recipe?.id === attributes?.layoutRecipe && recipe?.baseLayout === attributes?.layoutStyle )
    : null;
  const showReadMoreAffordance = !! activeRecipe?.capabilities?.readMoreAffordance;

  if ( ! postTitle ) {
    return null;
  }

  useEffect( () => {
    if ( ref.current ) {
      resizeDropcap( ref.current );
    }
  }, [ ref ] );

  return (
    <div className="nb-supernova-item__dropcap-wrapper sm-variation-11">
      <span className="nb-supernova-item__dropcap" ref={ ref }>{ postTitle.substring(0, 1) }</span>
      { showReadMoreAffordance && (
        <span className="nb-card__read-more nb-supernova-item__dropcap-more">{ __( 'Read More', '__plugin_txtd' ) }</span>
      ) }
    </div>
  )
}

export const PostCardComponent = props => {

  const {
    attributes,
    post,
  } = props;

  const {
    showMeta,
    showTitle,
    showDescription,
    showButtons,
    showMedia,
    primaryMetadata,
    secondaryMetadata,
  } = attributes;

  const Media = props.Media || PostCardMedia;

  // Drive the card structure from the shared element order so reordering in
  // the Content Details panel is reflected live in the editor, not just on
  // the frontend. Real post data replaces the static RichText fields used
  // in the fields-mode renderer.
  const order          = getVisibleOrder( attributes );
  const mediaIndex     = order.indexOf( ELEMENT.MEDIA );
  const beforeMediaIds = mediaIndex >= 0
    ? order.slice( 0, mediaIndex ).filter( id => id !== ELEMENT.MEDIA )
    : [];
  const afterMediaIds  = mediaIndex >= 0
    ? order.slice( mediaIndex + 1 ).filter( id => id !== ELEMENT.MEDIA )
    : order.filter( id => id !== ELEMENT.MEDIA );
  const splitAroundMedia = showMedia && props.media && mediaIndex > 0 && mediaIndex < order.length - 1;

  const primaryMeta   = getMetadata( post, primaryMetadata );
  const secondaryMeta = getMetadata( post, secondaryMetadata );

  // Mirror the frontend's card expression classes (media ratio + content
  // length) so ratio-adaptive theme styling matches editor and frontend.
  const expressionClasses = [ ...getCardExpressionClassesFromValues( {
    mediaWidth: showMedia ? props.media?.originalWidth : 0,
    mediaHeight: showMedia ? props.media?.originalHeight : 0,
    title: post?.title?.raw || '',
    description: stripHTML( post?.excerpt?.rendered || '' ),
  } ), getPostFormatClass( post ) ].join( ' ' );

  const quoteParts = post?.format === 'quote' ? extractPostQuote( post ) : null;

  const renderMediaWrapper = () => (
    showMedia && props.media
      ? (
        <CardMediaWrapper { ...props } key={ 'card_post_mediawrapper_' + post.id }>
          <PostCardLetter { ...props } />
          <Media { ...props } key={ 'card_post_media_' + post.id } />
        </CardMediaWrapper>
      )
      : null
  );

  const renderContentItems = ( ids ) => {
    const adjacent = metasAreAdjacent( ids );
    const elements = [];

    for ( let i = 0; i < ids.length; i++ ) {
      const id  = ids[ i ];
      const key = 'card_post_' + post.id + '_' + id + '_' + i;

      // Adjacent primary + secondary → one combined meta row, mirroring the
      // frontend's `<p class="nb-card__meta-combined">` output.
      if ( adjacent && (
        ( id === ELEMENT.META_PRIMARY   && ids[ i + 1 ] === ELEMENT.META_SECONDARY ) ||
        ( id === ELEMENT.META_SECONDARY && ids[ i + 1 ] === ELEMENT.META_PRIMARY   )
      ) ) {
        const primaryFirst = id === ELEMENT.META_PRIMARY;
        const first  = primaryFirst ? primaryMeta  : secondaryMeta;
        const second = primaryFirst ? secondaryMeta : primaryMeta;
        if ( first || second ) {
          elements.push(
            <CardMeta show={ showMeta } key={ key }>
              <Fragment>
                { first && <span className={ 'nb-card__meta--' + ( primaryFirst ? 'primary' : 'secondary' ) } key={ key + '_a' }>{ first }</span> }
                { first && second && <span className="nb-card__meta-separator" aria-hidden="true" key={ key + '_sep' } /> }
                { second && <span className={ 'nb-card__meta--' + ( primaryFirst ? 'secondary' : 'primary' ) } key={ key + '_b' }>{ second }</span> }
              </Fragment>
            </CardMeta>
          );
        }
        i++;
        continue;
      }

      if ( id === ELEMENT.META_PRIMARY ) {
        if ( primaryMeta ) {
          elements.push( <CardMeta show={ showMeta } key={ key }>{ primaryMeta }</CardMeta> );
        }
        continue;
      }

      if ( id === ELEMENT.META_SECONDARY ) {
        if ( secondaryMeta ) {
          elements.push( <CardMeta show={ showMeta } key={ key }>{ secondaryMeta }</CardMeta> );
        }
        continue;
      }

      if ( id === ELEMENT.TITLE ) {
        elements.push(
          <CardTitle show={ showTitle } attributes={ attributes } key={ key }>
            <span className="nb-supernova-item__link">
              { post?.title?.raw || '' }
            </span>
          </CardTitle>
        );
        continue;
      }

      if ( id === ELEMENT.DESCRIPTION ) {
        elements.push(
          <CardDescription show={ showDescription } key={ key }>
            { stripHTML( post?.excerpt?.rendered || '' ) }
          </CardDescription>
        );
        continue;
      }

      if ( id === ELEMENT.BUTTONS ) {
        elements.push(
          <CardFooter show={ showButtons } key={ key }>
            <CardButton { ...props } key={ key + '_btn' }>{ __( 'Read More', '__plugin_txtd' ) }</CardButton>
          </CardFooter>
        );
        continue;
      }

      // Subtitle is skipped for post-driven cards (no equivalent post field).
    }

    return elements;
  };

  const renderContentWrapper = ( ids, extraClassName, contentAttributes = attributes ) => (
    <CardContentWrapper { ...props } attributes={ contentAttributes } extraClassName={ extraClassName } key={ 'card_post_content_' + post.id + '_' + extraClassName }>
      <div className="nb-supernova-item__inner-container" key={ 'card_post_inner_' + post.id + '_' + extraClassName }>
        { renderContentItems( ids ) }
      </div>
    </CardContentWrapper>
  );

  // PHP renders format-specific cards through the active theme's template
  // part. Mirror that resolved blueprint in the editor so masonry measures the
  // same surface, media and quote layers instead of a media-less approximation.
  const postFormatBlueprint = quoteParts?.quote
    ? props.postFormatCardBlueprints?.quote
    : null;
  if ( quoteParts?.quote && postFormatBlueprint ) {
    const rootBlueprintAttributes = postFormatBlueprint.rootAttributes || {};
    const itemBlueprintAttributes = postFormatBlueprint.itemAttributes || {};
    const rootAttributes = {
      ...attributes,
      ...rootBlueprintAttributes,
      className: joinClassNames( attributes.className, rootBlueprintAttributes.className ),
    };
    const itemAttributes = {
      ...attributes,
      ...itemBlueprintAttributes,
      className: joinClassNames( attributes.className, itemBlueprintAttributes.className ),
      colorSignal: 0,
    };
    const rootAlign = String( rootAttributes.contentPosition || 'center center' ).split( /\s+/ );
    const rootClassName = joinClassNames(
      'nb-supernova',
      'nb-post-format-card-blueprint',
      'nb-post-format-card-blueprint--quote',
      `nb-supernova--content-type-${ rootAttributes.contentType || 'custom' }`,
      `nb-supernova--card-layout-${ itemAttributes.cardLayout || 'stacked' }`,
      'nb-supernova--1-columns',
      `nb-supernova--valign-${ rootAlign[0] || 'center' }`,
      `nb-supernova--halign-${ rootAlign[1] || 'center' }`,
      expressionClasses,
      rootAttributes.className,
      getColorSignalClassnames( rootAttributes, true )
    );
    const itemClassName = joinClassNames(
      'nb-supernova-item',
      `nb-supernova-item--layout-${ itemAttributes.cardLayout || 'stacked' }`,
      `nb-supernova-item--scrolling-effect-${ itemAttributes.scrollingEffect || 'static' }`,
      `nb-supernova-item--aspect-ratio-${ itemAttributes.thumbnailAspectRatioString || 'landscape' }`,
      expressionClasses,
      itemAttributes.className,
      getColorSignalClassnames( itemAttributes, true )
    );

    return (
      <div className={ rootClassName } style={ { ...getPostFormatBlueprintStyle( rootAttributes ), display: 'block' } } key={ 'card_post_blueprint_' + post.id }>
        <div className={ itemClassName } style={ getPostFormatBlueprintStyle( itemAttributes ) }>
          <div className="nb-supernova-item__frame">
            { beforeMediaIds.length > 0 && renderContentWrapper( beforeMediaIds, 'nb-supernova-item__content--before-media', itemAttributes ) }
            { showMedia && props.media && (
              <CardMediaWrapper { ...props } attributes={ itemAttributes } key={ 'card_post_blueprint_media_' + post.id }>
                <PostCardLetter { ...props } attributes={ itemAttributes } />
                <Media { ...props } attributes={ itemAttributes } key={ 'card_post_blueprint_image_' + post.id } />
              </CardMediaWrapper>
            ) }
            <CardContentWrapper { ...props } attributes={ itemAttributes } extraClassName="nb-supernova-item__content--after-media">
              <div className="nb-supernova-item__inner-container">
                <blockquote className="wp-block-quote is-style-plain">
                  <p>{ quoteParts.quote }</p>
                  { quoteParts.citation && <cite>{ quoteParts.citation }</cite> }
                </blockquote>
              </div>
            </CardContentWrapper>
          </div>
        </div>
      </div>
    );
  }

  // Themes without a valid Quote blueprint keep a semantic, non-media
  // fallback rather than dropping the post from the editor preview.
  if ( quoteParts?.quote ) {
    return (
      <Card
        { ...props }
        attributes={ { ...attributes, cardLayout: 'stacked' } }
        media={ null }
        className={ expressionClasses }
        key={ 'card_post_' + post.id }
      >
        <blockquote className="wp-block-quote is-style-plain">
          <p>{ quoteParts.quote }</p>
          { quoteParts.citation && <cite>{ quoteParts.citation }</cite> }
        </blockquote>
      </Card>
    );
  }

  if ( splitAroundMedia ) {
    return (
      <Card { ...props } className={ expressionClasses } key={ 'card_post_' + post.id }>
        { renderContentWrapper( beforeMediaIds, 'nb-supernova-item__content--before-media' ) }
        { renderMediaWrapper() }
        { renderContentWrapper( afterMediaIds,  'nb-supernova-item__content--after-media' ) }
      </Card>
    );
  }

  // No middle-media split: render all non-media items in a single content
  // block. Media sits before it (default), after it (trailing), or not at
  // all (e.g., post has no featured image on a Quote post format).
  const allContentIds = order.filter( id => id !== ELEMENT.MEDIA );
  const hasMedia      = showMedia && props.media;
  const trailingMedia = hasMedia && mediaIndex === order.length - 1;

  return (
    <Card { ...props } className={ expressionClasses } key={ 'card_post_' + post.id }>
      { hasMedia && ! trailingMedia && renderMediaWrapper() }
      <div className="nb-supernova-item__inner-container" key={ 'card_post_innercontainer_' + post.id }>
        { renderContentItems( allContentIds ) }
      </div>
      { trailingMedia && renderMediaWrapper() }
    </Card>
  );
};

export const PostCard = withMedia( PostCardComponent );

export default PostCard;
