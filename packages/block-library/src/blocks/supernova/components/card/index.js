import classnames from 'classnames';

import { compose, createHigherOrderComponent } from "@wordpress/compose";
import { withDopplerContext, withDopplerProvider } from "@novablocks/doppler";

export const Card = ( props ) => {

  const {
    media,
    attributes: {
      palette,
      paletteVariation,
      cardLayout,
    },
  } = props;

  const className = classnames(
    `supernova-card`,
    `supernova-card--layout-${ cardLayout }`,
    `sm-palette-${ palette }`,
    `sm-variation-${ paletteVariation }`,
  );

  const children = Array.isArray( props.children ) ? props.children : [];

  const mediaChildren = children.filter( child => child.type === CardMedia )
  const passedChildren = children.filter( child => child.type !== CardMedia && child.type !== CardContent );

  return (
    <div className={ className }>
      { ! mediaChildren.length && media && <CardMedia media={ media } { ...props } /> }
      { !! mediaChildren.length && mediaChildren }
      <CardContent>
        { passedChildren }
      </CardContent>
    </div>
  );
}

export const CardContent = ( props ) => {
  return (
    <div className={ `supernova-card__content` }>{ props.children }</div>
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
    <div className={ `novablocks-mask` }>
      <img className={ `supernova-card__media` } src={ src } width={ width } height={ height } style={ props?.parallax?.style } />
    </div>
  );
} );
