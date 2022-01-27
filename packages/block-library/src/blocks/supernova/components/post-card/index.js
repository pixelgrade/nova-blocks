import {
  PostCard as DefaultPostCard,
  PostCardMedia as DefaultPostCardMedia
} from "@novablocks/block-editor";

import { withShapeModelingDecoration } from "@novablocks/shape-modeling";

const Media = withShapeModelingDecoration( DefaultPostCardMedia );

const PostCard = ( props ) => {
  const { post } = props;
  return (
    <DefaultPostCard { ...props } Media={ Media } key={'default_post_card_post_' + post.id}/>
  )
};

export default PostCard;
