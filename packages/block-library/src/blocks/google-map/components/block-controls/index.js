import { BlockAlignmentToolbar, BlockControls } from "@wordpress/block-editor";

const MapBlockControls = props => {
  const { attributes, setAttributes } = props;
  return (
    <BlockControls>
      <BlockAlignmentToolbar
        value={ attributes.align }
        onChange={ align => setAttributes( { align } ) }
        controls={ [ 'wide', 'full' ] }
      />
    </BlockControls>
  )
}

export default MapBlockControls;
