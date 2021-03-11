import classnames from 'classnames';

import { compose, createHigherOrderComponent } from "@wordpress/compose";
import { Children } from '@wordpress/element';

import { withDopplerContext, withDopplerProvider } from "@novablocks/doppler";
import AdvancedGallery from "@novablocks/advanced-gallery";
import { getAlignFromMatrix } from "@novablocks/block-editor";

export const Card = ( props ) => {

  const {
    media,
    attributes: {
      cardLayout,
      cardMediaOpacity,
      cardMediaAspectRatio,
    },
  } = props;

  const { getPaddingTopFromContainerHeight } = AdvancedGallery.utils;

  const className = classnames(
    `supernova-card`,
    `supernova-card--layout-${ cardLayout }`,
  );

  const style = {
    '--collection-card-media-opacity': cardMediaOpacity / 100,
    '--collection-card-media-aspect-ratio': getPaddingTopFromContainerHeight( cardMediaAspectRatio ),
  }

  const children = Children.toArray( props.children );
  const mediaChildren = children.filter( child => child.type === CardMedia )
  const passedChildren = children.filter( child => child.type !== CardMedia && child.type !== CardContent );

  return (
    <div className={ className } style={ style }>
      { ! mediaChildren.length && media && <CardMedia media={ media } { ...props } /> }
      { !! mediaChildren.length && mediaChildren }
      <CardContent { ...props }>
        { passedChildren }
      </CardContent>
    </div>
  );
}

export const CardContent = ( props ) => {

  const align = getAlignFromMatrix( props?.attributes?.cardContentAlign );

  const className = classnames(
    `supernova-card__content`,
    `supernova-card__content--valign-${ align[0] }`,
    `supernova-card__content--halign-${ align[1] }`,
  )

  return (
    <div className={ className }>
      <div className={ `supernova-card__inner-container` }>
        { props.children }
      </div>
    </div>
  )
}

const withDopplerContextAndProvider = createHigherOrderComponent( compose( [
  withDopplerProvider,
  withDopplerContext,
] ), 'CardMedia' );

export const CardMedia = ( props ) => {

  const { media } = props;

  return (
    <div className={ `supernova-card__media-wrapper` }>
      { media && <CardMediaItem { ...props } /> }
      { ! media && props.children }
    </div>
  );

}

const CardMediaItem = withDopplerContextAndProvider( ( props ) => {

  const {
    media: {
      type,
      width,
      height,
      src,
    },
  } = props;

  return (
    <div className={ `supernova-card__media-aspect-ratio` }>
      <div className={ `novablocks-mask` }>
        <img className={ `supernova-card__media` } src={ src } width={ width } height={ height } style={ props?.parallax?.style } />
      </div>
    </div>
  );
} );
