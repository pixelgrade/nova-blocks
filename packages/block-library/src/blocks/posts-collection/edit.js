import classnames from "classnames";

import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

import { getColorSignalClassnames } from '@novablocks/utils';

import {
  CarouselLayoutPreview,
  ClassicLayoutPreview,
  ParametricLayoutPreview,
} from "@novablocks/collection";

const PreviewEdit = ( props ) => {

  const {
    attributes,
    posts,
    className,
    isSelected,
  } = props;

  const {
    layoutStyle,
    contentAlign,
  } = attributes;

  if ( Array.isArray( posts ) && ! posts.length ) {
    return (
      <div className={ 'wp-block__inner-container' }>
        <p>{ __( 'There are no posts to be displayed in this block. Try changing the Content Filter settings.' ) }</p>
      </div>
    )
  }

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
