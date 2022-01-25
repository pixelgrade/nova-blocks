import {
  PostCard as DefaultPostCard,
  PostCardMedia as DefaultPostCardMedia
} from "@novablocks/block-editor";

import { withShapeModelingDecoration } from "@novablocks/shape-modeling";

const Media = withShapeModelingDecoration( DefaultPostCardMedia );

const PostCard = ( props ) => {
  return (
    <DefaultPostCard { ...props } Media={ Media } />
  )
};

export default PostCard;
