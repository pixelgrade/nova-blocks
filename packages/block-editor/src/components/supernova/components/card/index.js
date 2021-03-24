import classnames from 'classnames';

import { Children } from '@wordpress/element';

import {
  getContentVariation,
  getPaddingTopFromContainerHeight,
  getAlignFromMatrix,
} from "@novablocks/utils";

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
    },
  } = props;

  const className = classnames(
    `supernova-card`,
    `supernova-card--layout-${ cardLayout }`,
    `supernova-card--style-${ contentStyle }`,
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

export const CardMediaWrapper = ( props ) => {

  const { media } = props;

  return (
    <div className={ `supernova-card__media-wrapper` }>
      { media && <CardMediaItem { ...props } /> }
      { ! media && props.children }
    </div>
  );

}

const CardMediaItem = ( props ) => {

  const {
    media: {
      type,
      width,
      height,
      url,
    },
  } = props;

  return (
    <div className={ `supernova-card__media-aspect-ratio` }>
      <div className={ `novablocks-mask` }>
        <img className={ `supernova-card__media` } src={ url } width={ width } height={ height } style={ props?.parallax?.style } />
      </div>
    </div>
  );
}
