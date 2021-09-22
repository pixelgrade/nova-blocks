import classnames from "classnames";

import { Card } from "@novablocks/components";
import { PostCard } from "@novablocks/block-editor";

import { getContentVariationBySignal } from "@novablocks/color-signal";

import {
  CollectionHeader,
  GridGenerator,
} from "@novablocks/collection";

const {
  ClassicLayoutPreview,
  ParametricLayoutPreview,
  CarouselLayoutPreview
} = GridGenerator;

import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { isSpecificPostModeActive } from "@novablocks/block-editor/src/filters/with-latest-posts/utils";
import { STORE_NAME } from "@novablocks/block-editor/src/filters/with-latest-posts/store";

const PreviewEdit = ( props ) => {

  const {
    attributes,
    posts,
    clientId,
    className,
    isSelected,
    colorSignal: {
      utils: {
        getColorSignalClassnames
      }
    }
  } = props;

  const {
    showMedia,
    showMeta,
    showTitle,
    showDescription,
    showButtons,

    layoutStyle,
    contentAlign,

    headerPosition,
  } = attributes;

  const markPostsAsDisplayed = useDispatch( dispatch => {
    return isSpecificPostModeActive( attributes )
    ? dispatch( STORE_NAME ).markSpecificPostsAsDisplayed
    : dispatch( STORE_NAME ).markPostsAsDisplayed;
  }, [ attributes ] );

  markPostsAsDisplayed( clientId, posts );

  if ( Array.isArray( posts ) && ! posts.length ) {
    return (
      <div className={ 'wp-block__inner-container' }>
        <p>{ __( 'There are no posts to be displayed in this block. Try changing the Content Filter settings.' ) }</p>
      </div>
    )
  }

  const getContent = ( index, props, isLandscape ) => {
    const post = posts?.[ index ];

    const contentVariation = getContentVariationBySignal( props.attributes );

    const cardProps = {
      placeholder: true,
      hasFixedAspectRatio: true,
      isLandscape,
      showMedia,
      showMeta,
      showTitle,
      showContent: showDescription,
      showButtons,
      className: `sm-variation-${ contentVariation }`
    };

    return (
      <Fragment>
        {
          headerPosition - 1 === index &&
          <div className="novablocks-grid__item">
            <CollectionHeader { ...props } />
          </div>
        }
        {
          post &&
          <div className="novablocks-grid__item">
            <PostCard { ...props } post={ post } isLandscape={ isLandscape } />
          </div>
        }
        {
          ! post &&
          <div className="novablocks-grid__item">
            <Card { ...cardProps } />
          </div>
        }
      </Fragment>
    )
  };

  const classname = classnames(
    'novablocks-block',
    'novablocks-block-spacing',

    `novablocks-collection`,
    `novablocks-collection--align-${ contentAlign }`,

    getColorSignalClassnames( attributes, true ),
    className
  );

  return (
    <Fragment>
      {
        layoutStyle === 'classic' &&
        <ClassicLayoutPreview { ...props } />
      }
      {
        layoutStyle === 'carousel' &&
        <CarouselLayoutPreview { ...props } />
      }
      {
        layoutStyle === 'parametric' &&
        <div className={ classname }>
          <ParametricLayoutPreview
            { ...props }
            getContent={ getContent }
            cardsCount={ posts?.length || attributes?.postsToShow || 0 }
            posts={ posts }
            isSelected={ isSelected }
          />
        </div>
      }
    </Fragment>
  )
};

export default PreviewEdit;
