import { Fragment } from "@wordpress/element";
import { getSvg } from "@novablocks/block-editor";
import placeholderSvg from "./card-media-placeholder.svg";

const CardMedia = ( props ) => {

  const {
    attributes: {
      media
    },
  } = props;

  const mediaURL = media?.sizes?.novablocks_medium?.url || media?.url;

  if ( !! mediaURL ) {
    return (
      <Fragment>
        { media.type !== 'video' &&
          <img className={ `nb-card__media-image` } src={ mediaURL } alt={ media?.alt } /> }
        { media.type === 'video' &&
          <video muted autoPlay loop playsInline className={ `nb-card__media-image` } src={ media?.url } /> }
      </Fragment>
    )
  }

  return (
    <div className={ `nb-card__media-placeholder` }>
      { getSvg( placeholderSvg ) }
    </div>
  );
};

export default CardMedia;
