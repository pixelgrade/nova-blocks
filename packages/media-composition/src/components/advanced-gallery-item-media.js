import { Fragment } from "@wordpress/element";
import { withShapeModelingDecoration } from "@novablocks/shape-modeling";

const AdvancedGalleryItemMedia = ( props ) => {
  const { gridItem } = props;
  const image = gridItem?.image;
  const imageURL = image?.sizes?.novablocks_medium?.url || image?.url;
  const styles = gridItem.getImageStyle();

  return (
    <Fragment>
      { image.type !== 'video' &&
        <img className={ `novablocks-media-composition__image` } src={ imageURL } alt={ image?.alt } style={ styles } /> }
      { image.type === 'video' &&
        <video muted autoPlay loop playsInline className={ `novablocks-media-composition__image` } style={ styles } src={ image.url } /> }
    </Fragment>
  )
};

export default withShapeModelingDecoration( AdvancedGalleryItemMedia );
