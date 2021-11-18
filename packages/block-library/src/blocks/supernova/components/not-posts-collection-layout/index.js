import { useInnerBlocks, withPreviewAttributes } from "@novablocks/block-editor";
import { SupernovaItemPreview, SupernovaLayout } from "../index";

const NotPostsCollectionLayout = withPreviewAttributes( props => {
  const { clientId } = props;
  const innerBlocks = useInnerBlocks( clientId );

  return (
    <SupernovaLayout { ...props }>
      { innerBlocks.map( innerBlock => <SupernovaItemPreview { ...innerBlock } /> ) }
    </SupernovaLayout>
  )
} );

export default NotPostsCollectionLayout;
