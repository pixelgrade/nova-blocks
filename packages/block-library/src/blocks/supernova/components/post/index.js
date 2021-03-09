import {
  Fragment,
  RawHTML
} from '@wordpress/element';

import { __ } from '@wordpress/i18n';
import { TextPlaceholder } from "@novablocks/components";

import { getMeta } from './utils';

export const PostContent = ( props ) => {

  const {
    attributes: {
      showTitle,
      showMeta,
      showDescription,
      showButtons,
    },
    post,
  } = props;

  const {
    metaAboveTitle,
    metaBelowTitle,
  } = getMeta( props );

  return (
    <Fragment>
      <PostMeta show={ true } content={ metaAboveTitle } />
      <PostTitle show={ true } content={ post.title.raw } />
      <PostMeta show={ true } content={ metaBelowTitle } />
      <PostExcerpt show={ true } content={ post.excerpt.rendered } />
      <PostFooter show={ true } { ...props } />
    </Fragment>
  );
};

const withVisibilityAndPlaceholder = ( WrappedComponent ) => {
   return ( props ) => {
     const { show, placeholder } = props;

     if ( ! show && ! placeholder ) {
       return null;
     }

     return <WrappedComponent { ...props } />
   }
}

const PostTitle = withVisibilityAndPlaceholder( ( props ) => {

  const {
    content,
    placeholder
  } = props;

  const TitleTagName = props.titleTagName || 'h3';

  return (
    <TitleTagName className={ 'wp-block novablocks-grid__item-title novablocks-card__title' }>
      <div className="novablocks-card__title-size-modifier">
        { ! placeholder ? content : <TextPlaceholder/> }
      </div>
    </TitleTagName>
  );
} );

const PostMeta = withVisibilityAndPlaceholder( ( props ) => {

  const {
    meta,
    placeholder
  } = props;

  return (
    <div className="wp-block novablocks-grid__item-meta">
      <div className="novablocks-card__meta is-style-meta">
        <div className="novablocks-card__meta-size-modifier">
          { ! placeholder ? meta : <TextPlaceholder rows={ 1 } /> }
        </div>
      </div>
    </div>
  )
} );

const PostExcerpt = withVisibilityAndPlaceholder( ( props ) => {

  const {
    content,
    placeholder
  } = props;

  const wrapperClassName = 'wp-block novablocks-grid__item-content novablocks-card__description';
  const fontSizeClassName = 'novablocks-card__content-size-modifier';

  if ( placeholder ) {
    return (
      <div className={ wrapperClassName }>
        <div className={ fontSizeClassName }>
          <TextPlaceholder rows={ 3 } />
        </div>
      </div>
    );
  }

  return (
    <div className={ wrapperClassName }>
      <RawHTML className={ fontSizeClassName }>
        { content }
      </RawHTML>
    </div>
  );
} );

const PostFooter = withVisibilityAndPlaceholder( ( props ) => {

  const {
    placeholder
  } = props;

  const buttons = (
    <div className="wp-block-buttons">
      <div className="wp-block-button is-style-text">
        <div className="wp-block-button__link">
          <div className="novablocks-buttons-size-modifier">
            { __( 'Read More' ) }
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="wp-block novablocks-grid__item-buttons novablocks-card__buttons">
      { ! placeholder ? buttons : <TextPlaceholder rows={ 1 } /> }
    </div>
  );
} );
