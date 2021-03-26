import classnames from 'classnames';

import { compose } from '@wordpress/compose';
import { Children, Fragment, forwardRef } from '@wordpress/element';

import {
  getContentVariation,
  getPaddingTopFromContainerHeight,
  getAlignFromMatrix,
} from "@novablocks/utils";

import { withDoppler } from "../../../../hooks";

export * from './contents';

export const Card = ( props ) => {

  const {
    media,
    attributes: {
      cardLayout,
      cardMediaOpacity,
      containerHeight,
      contentStyle,
      contentAreaWidth,
      thumbnailAspectRatioString,
    },
  } = props;

  const className = classnames(
    `supernova-card`,
    `supernova-card--layout-${ cardLayout }`,
    `supernova-card--style-${ contentStyle }`,
    `supernova-card--aspect-ratio-${ thumbnailAspectRatioString }`,
  );

  const style = {
    '--collection-card-media-opacity': cardMediaOpacity / 100,
    '--collection-card-media-aspect-ratio': getPaddingTopFromContainerHeight( containerHeight ),
    '--collection-card-content-area-width': `${ contentAreaWidth }%`,
  }

  const children = Children.toArray( props.children );
  const mediaChildren = children.filter( child => child.type === CardMediaWrapper )
  const passedChildren = children.filter( child => child.type !== CardMediaWrapper && child.type !== CardContentWrapper );

  return (
    <div className={ className } style={ style }>
      { ! mediaChildren.length && media && <CardMediaWrapper media={ media } { ...props } /> }
      { !! mediaChildren.length && mediaChildren }
      <CardContentWrapper { ...props }>
        { passedChildren }
      </CardContentWrapper>
    </div>
  );
}

export const CardContentWrapper = ( props ) => {

  const { attributes } = props;

  const align = getAlignFromMatrix( attributes?.cardContentAlign );

  const contentClassName = classnames(
    `supernova-card__content`,
    `supernova-card__content--valign-${ align[0] }`,
    `supernova-card__content--halign-${ align[1] }`,
  );

  const innerContainerClassName = classnames(
    `supernova-card__inner-container`,
    `sm-variation-${ getContentVariation( attributes ) }`,
  );

  return (
    <div className={ contentClassName }>
      <div className={ innerContainerClassName }>
        { props.children }
      </div>
    </div>
  )
}

const CardMediaContent = props => {
  const { media } = props;

  return (
    <Fragment>
      { media && <CardMediaItem { ...props } /> }
      { ! media && props.children }
    </Fragment>
  )
}

const CardMediaContentWithDoppler = withDoppler( ( props ) => {
  return (
    <div style={ props?.parallax?.style }>
      <CardMediaContent { ...props } />
    </div>
  )
} );

export const CardMediaWrapper = ( props ) => {

  return (
    <div className={ `supernova-card__media-wrapper` }>
      <CardMediaContent { ...props } />
    </div>
  );
}

const CardMediaItemContent = withDoppler( ( props ) => {

  const {
    media: {
      type,
      width,
      height,
      url,
    },
  } = props;

  return (
    <img className={ `supernova-card__media` } src={ url } width={ width } height={ height } style={ props?.parallax?.style } />
  )
} );

const CardMediaItem = ( props ) => {

  return (
    <div className={ `supernova-card__media-aspect-ratio` }>
      <CardMediaItemContent { ...props } />
    </div>
  );
}
