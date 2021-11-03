import classnames from 'classnames';

import { Children } from '@wordpress/element';

import {
  getAlignFromMatrix,
  getAreaClassnameByWidthRatio
} from "@novablocks/utils";

//import { withDoppler } from "../../../../filters";

export * from './contents';

export const Card = ( props ) => {

  const {
    media,
    attributes: {
      cardLayout,
      thumbnailAspectRatioString,
      layoutStyle,
      columns,
    },
  } = props;

  const defaultClassNames = classnames(
    `supernova-item`,
    `supernova-item--layout-${ cardLayout }`,
    `supernova-item--aspect-ratio-${ thumbnailAspectRatioString }`,
  );

  const isLandscape = [ 'horizontal', 'horizontal-reverse' ].includes( cardLayout );

  const extraClassNames = classnames(
    defaultClassNames,
    `nb-grid__area--${ isLandscape ? 'landscape' : 'portrait' }`,
    getAreaClassnameByWidthRatio( 1 / columns )
  )

  const classNames = layoutStyle !== 'parametric' ? extraClassNames : defaultClassNames;

  const children = Children.toArray( props.children );
  const mediaChildren = children.filter( child => child.type === CardMediaWrapper )
  const passedChildren = children.filter( child => child.type !== CardMediaWrapper && child.type !== CardContentWrapper );

  return (
    <div className={ classNames } style={ props.style }>
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
      { props.children }
    </div>
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
        { props.children }
      </div>
    </div>
  );
}
