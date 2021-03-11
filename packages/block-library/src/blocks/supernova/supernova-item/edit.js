import { Card, CardMedia } from '../components/card';
import AdvancedGallery from "@novablocks/advanced-gallery";
import { BlockControls, InnerBlocks } from '@wordpress/block-editor';
import { __experimentalBlockAlignmentMatrixToolbar as BlockAlignmentMatrixToolbar } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

const SuperNovaItemEdit = ( props ) => {

  const {
    attributes: {
      cardContentAlign
    },
    setAttributes,
  } = props;

  return (
    <Card { ...props }>
      <CardMedia { ...props }>
        <AdvancedGallery.Component { ...props } />
      </CardMedia>
      <InnerBlocks />
      <BlockControls>
        <BlockAlignmentMatrixToolbar
          label={ __( 'Change content position' ) }
          value={ cardContentAlign }
          onChange={ ( cardContentAlign ) => {
            setAttributes( { cardContentAlign } )
          } }
        />
      </BlockControls>
    </Card>
  )
}

export default SuperNovaItemEdit;
