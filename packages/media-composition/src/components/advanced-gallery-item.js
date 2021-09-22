import { AdvancedGalleryItemMedia } from "../components";

const AdvancedGalleryItem = ( props ) => {

  const { gridItem } = props;

  const image = gridItem?.image;
  const imageCaption = image?.caption;
  const imageDescription = image?.description;

  if ( ! image ) {
    return;
  }

  const hasCaption = typeof imageCaption === 'string' && !! imageCaption;
  const hasDescription = typeof imageDescription === 'string' && !! imageDescription;

  return (
    <div className={ `novablocks-media-composition__grid-item` } style={ gridItem.getStyle() }>
      <div className={ `novablocks-media-composition__grid-item-media` }>
        <AdvancedGalleryItemMedia { ...props } seedOffset={ props?.index } />
      </div>
      {
        ( hasCaption || hasDescription ) &&
        <div className="novablocks-media-composition__grid-item-info">
          {
            hasCaption &&
            <div className={ `novablocks-media-composition__grid-item-caption` }
                 dangerouslySetInnerHTML={ { __html: imageCaption } }>
            </div>
          }
          {
            typeof hasDescription &&
            <div className={ `novablocks-media-composition__grid-item-description` }
                 dangerouslySetInnerHTML={ { __html: imageDescription } }>
            </div>
          }
        </div>
      }
    </div>
  );
};

export default AdvancedGalleryItem;
