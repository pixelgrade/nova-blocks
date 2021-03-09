import { Card, CardMedia } from '../components/card';
import AdvancedGallery from "@novablocks/advanced-gallery";
import { InnerBlocks } from '@wordpress/block-editor';

const SuperNovaItemEdit = ( props ) => {

  return (
    <Card { ...props }>
      <CardMedia { ...props }>
        <AdvancedGallery.Component { ...props } />
      </CardMedia>
      <InnerBlocks />
    </Card>
  )
}

export default SuperNovaItemEdit;
