import classnames from 'classnames';

import { Children, Fragment } from '@wordpress/element';

import { getAlignFromMatrix } from "@novablocks/utils";

//import { withDoppler } from "../../../../filters";

export * from './contents';

export const Card = ( props ) => {

  const {
    media,
    attributes: {
      cardLayout,
      contentAreaWidth,
      thumbnailAspectRatioString,
    },
  } = props;

  const classNames = classnames(
    `supernova-item`,
    `supernova-item--layout-${ cardLayout }`,
    `supernova-item--aspect-ratio-${ thumbnailAspectRatioString }`,
  );

  const style = Object.assign( {}, props.style, {
    '--collection-card-content-area-width': `${ contentAreaWidth }%`,
  } );

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
    `supernova-item__content`,
    `supernova-item__content--valign-${ align[0] }`,
    `supernova-item__content--halign-${ align[1] }`,
  );

  return (
    <div className={ contentClassName }>
      <div className={ 'supernova-item__inner-container' }>
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
//    <div className={ `supernova-item__media-doppler novablocks-doppler__target` } style={ props?.doppler?.style }>
//      <CardMediaContent { ...props } />
//    </div>
//  )
//} );

export const CardMediaWrapper = ( props ) => {

  return (
    <div className={ `supernova-item__media-wrapper` }>
      <div className={ `supernova-item__media-aspect-ratio` }>
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
    <img className={ `supernova-item__media` } src={ url } width={ width } height={ height } />
  )
}
