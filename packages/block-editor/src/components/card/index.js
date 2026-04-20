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
    `nb-supernova-item`,
    `nb-supernova-item--layout-${ cardLayout }`,
    `nb-supernova-item--scrolling-effect-${ scrollingEffect }`,
    `nb-supernova-item--aspect-ratio-${ thumbnailAspectRatioString }`,
    getColorSignalClassnames( attributes, true )
  );

  const isLandscape = [ 'horizontal', 'horizontal-reverse' ].includes( cardLayout );

  const extraClassNames = classnames(
    defaultClassNames,
    `nb-grid__area--${ isLandscape ? 'landscape' : 'portrait' }`,
    getAreaClassnameByWidthRatio( 1 / columns )
  );

  const classNames = layoutStyle !== 'parametric' ? extraClassNames : defaultClassNames;

  const children = Children.toArray( props.children );
  const mediaChildren = children.filter( child => child.type === CardMediaWrapper );
  const contentWrapperChildren = children.filter( child => child.type === CardContentWrapper );
  const passedChildren = children.filter( child => child.type !== CardMediaWrapper && child.type !== CardContentWrapper );

  // When the caller provides explicit CardContentWrapper children, render
  // children in source order so the caller controls media/content ordering
  // (e.g. mediaPosition: after-title). Otherwise fall back to the default
  // auto-wrap behavior: media first, then a single content wrapper around
  // the remaining children.
  const cardBody = contentWrapperChildren.length ? children : (
    <>
      { ! mediaChildren.length && media && <CardMediaWrapper media={ media } { ...props } /> }
      { !! mediaChildren.length && mediaChildren }
      <CardContentWrapper { ...props }>
        { passedChildren }
      </CardContentWrapper>
    </>
  );

  return (
    <div className={ classNames } style={ props.style }>
      { cardLayout === 'stacked'
        ? <div className="nb-supernova-item__frame">{ cardBody }</div>
        : cardBody }
    </div>
  );
};

export const CardContentWrapper = ( props ) => {

  const { attributes, extraClassName } = props;

  const align = getAlignFromMatrix( attributes?.contentPosition );

  const contentClassName = classnames(
    `nb-supernova-item__content`,
    `nb-supernova-item__content--valign-${ align[0] }`,
    `nb-supernova-item__content--halign-${ align[1] }`,
    extraClassName,
  );

  return (
    <div className={ contentClassName }>
      { props.children }
    </div>
  )
};

export const CardMediaWrapper = ( props ) => {

  return (
    <div className={ `nb-supernova-item__media-wrapper` }>
      <div className={ `nb-supernova-item__media-aspect-ratio` }>
        { props.children }
      </div>
    </div>
  );
};
