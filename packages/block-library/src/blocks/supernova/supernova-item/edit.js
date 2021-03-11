import { Card, CardMedia } from '../components/card';
import AdvancedGallery from "@novablocks/advanced-gallery";
import { InnerBlocks } from '@wordpress/block-editor';
import { withPreviewAttributes } from "../with-preview-attributes";

const SuperNovaItemEdit = withPreviewAttributes( props => {

  return (
    <Card { ...props }>
      <CardMedia { ...props }>
        <AdvancedGallery.Component { ...props } />
      </CardMedia>
      <InnerBlocks />
    </Card>
  )
} )

export default SuperNovaItemEdit;
