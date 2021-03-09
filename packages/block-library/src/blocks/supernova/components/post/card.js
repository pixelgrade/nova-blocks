import { withSelect } from "@wordpress/data";
import { PostContent } from "./index";
import { Card } from "../card";

const sanitizeMediaResponse = ( mediaObject ) => {

  return {
    type: mediaObject?.media_type,
    width: mediaObject?.media_details?.width,
    height: mediaObject?.media_details?.height,
    src: mediaObject?.source_url,
  }
};


const withMedia = withSelect( ( select, ownProps ) => {
  const { getMedia } = select( 'core' );
  const { featured_media } = ownProps.post;

  if ( ! featured_media ) {
    return null;
  }

  const mediaObject = getMedia( featured_media );

  if ( ! mediaObject ) {
    return {};
  }

  return {
    media: sanitizeMediaResponse( mediaObject )
  }
} );


export const PostCard = withMedia( ( props ) => {

  return (
    <Card layout={ props?.attributes?.cardLayout } { ...props }>
      <PostContent { ...props } />
    </Card>
  )
} );
