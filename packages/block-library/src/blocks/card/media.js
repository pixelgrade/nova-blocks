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
          <img className={ `supernova-item__media` } src={ mediaURL } alt={ media?.alt } /> }
        { media.type === 'video' &&
          <video muted autoPlay loop playsInline className={ `supernova-item__media` } src={ media?.url } /> }
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
