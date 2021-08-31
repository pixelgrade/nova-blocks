import classnames from 'classnames';

import { Children, Fragment } from '@wordpress/element';

import {
  getPaddingTopFromContainerHeight,
  getAlignFromMatrix,
  getColorSignalClassnames,
} from "@novablocks/utils";

//import { withDoppler } from "../../../../filters";

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
    className
  } = props;

  const classNames = classnames(
    `supernova-card`,
    `supernova-card--layout-${ cardLayout }`,
    `supernova-card--style-${ contentStyle }`,
    `supernova-card--aspect-ratio-${ thumbnailAspectRatioString }`,
    className
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
    <div className={ classNames } style={ style }>
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
  const align = getAlignFromMatrix( attributes?.contentPosition );

  const contentClassName = classnames(
    `supernova-card__content`,
    `supernova-card__content--valign-${ align[0] }`,
    `supernova-card__content--halign-${ align[1] }`,
  );

  const innerContainerClassName = classnames(
    `supernova-card__inner-container`,
    getColorSignalClassnames( attributes, true ),
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

//const CardMediaContentWithDoppler = withDoppler( ( props ) => {
//  return (
//    <div className={ `supernova-card__media-doppler novablocks-doppler__target` } style={ props?.doppler?.style }>
//      <CardMediaContent { ...props } />
//    </div>
//  )
//} );

export const CardMediaWrapper = ( props ) => {

  return (
    <div className={ `supernova-card__media-wrapper` }>
      <div className={ `supernova-card__media-aspect-ratio` }>
        <CardMediaContent { ...props } />
      </div>
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
    <img className={ `supernova-card__media` } src={ url } width={ width } height={ height } />
  )
}
