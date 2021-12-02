import classnames from 'classnames';

import { Children } from '@wordpress/element';

import { getColorSignalClassnames } from "@novablocks/utils";

import {
  getAlignFromMatrix,
  getAreaClassnameByWidthRatio
} from "@novablocks/utils";

export * from './contents';

export const Card = ( props ) => {

  const { media, attributes } = props;

  const {
    cardLayout,
    thumbnailAspectRatioString,
    layoutStyle,
    columns,
    scrollingEffect,
  } = attributes;

  const defaultClassNames = classnames(
    `supernova-item`,
    `supernova-item--layout-${ cardLayout }`,
    `supernova-item--scrolling-effect-${ scrollingEffect }`,
    `supernova-item--aspect-ratio-${ thumbnailAspectRatioString }`,
    getColorSignalClassnames( attributes, true )
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

export const CardMediaWrapper = ( props ) => {

  return (
    <div className={ `supernova-item__media-wrapper` }>
      <div className={ `supernova-item__media-aspect-ratio` }>
        { props.children }
      </div>
    </div>
  );
}
