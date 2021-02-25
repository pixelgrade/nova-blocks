import {Fragment} from "@wordpress/element";

import {PostCard} from "@novablocks/block-editor";

const Slide = function( props ) {
  return (
    <Fragment>
      <div className="novablocks-slideshow__slide-wrap">
        <SliderBackground {...props}/>
        <SliderContent {...props} />
      </div>
    </Fragment>
  )
};

export default Slide;

const SliderBackground = ( props ) => {
  const {
    attributes,
    image,
    type
  } = props;

  const {
    overlayFilterStyle,
    overlayFilterStrength,
  } = attributes;

  const focalPoint = image?.focalPoint || {x: 0.5, y: 0.5};

  const styles = {
    ...props.parallax.style,
    opacity: 1,
    objectPosition: focalPoint.x * 100 + '% ' + focalPoint.y * 100 + '%',
  };

  if ( overlayFilterStyle !== 'none' ) {
    styles.opacity = 1 - (
      overlayFilterStrength / 100
    );
  }

  let imageURL = image?.sizes?.novablocks_large?.url ||
                 image?.sizes?.novablocks_huge?.url ||
                 image?.sizes?.large?.url ||
                 image?.sizes?.full?.url ||
                 image?.url;

  let mediaType = image?.type;
  let videoURL = image?.url;


  if ( type === 'post' ) {
    let imageURLPost = image?.media_details?.sizes?.novablocks_large?.source_url ||
                       image?.media_details?.sizes?.novablocks_huge?.source_url ||
                       image?.media_details?.sizes?.large?.source_url ||
                       image?.media_details?.sizes?.full?.source_url ||
                       image?.media_details?.source_url;

    let mediaTypePost = image?.mediaType;
    let videoURLPost = image?.source_url;

    imageURL = imageURLPost;
    mediaType = mediaTypePost;
    videoURL = videoURLPost;
  }

  return (
    <div className="novablocks-mask">
      <div className="novablocks-slideshow__background">
        {mediaType !== 'video' && <img className="novablocks-slideshow__media" src={imageURL} alt="" style={styles}/>}
        {mediaType === 'video' &&
         <video className="novablocks-slideshow__media" src={videoURL} muted autoPlay loop playsInline style={styles}/>}
      </div>
    </div>
  );
};

const SliderContent = ( props ) => {
  const {
    attributes,
    post,
    type,
    image,
  } = props;

  return (
    <div
      className="novablocks-slideshow__foreground novablocks-foreground novablocks-u-content-padding novablocks-u-content-align">
      {type === 'post' && !!post && <div className="novablocks-slideshow__inner-container novablocks-u-content-width">
        <PostCard post={post} attributes={attributes}/>
      </div>
      }

      {
        type === 'custom' && <div
          className="novablocks-slideshow__inner-container novablocks-u-content-width"
          dangerouslySetInnerHTML={{
            __html:
              (
                typeof image.title === 'string' && `<h2>${image.title}</h2>` || ''
              ) +
              (
                typeof image.caption === 'string' && image.caption || ''
              )
          }}
        >
        </div>
      }
    </div>
  )
}
