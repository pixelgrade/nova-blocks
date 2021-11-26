import { BlockControls, BlockAlignmentControl } from '@wordpress/block-editor';
import { useSupports } from "../../index";

const Controls = ( props ) => {

  const { attributes, setAttributes } = props;
  const { align } = attributes;

  const supports = useSupports( props.name );

  return (
    <BlockControls group="block">
      <BlockAlignmentControl
        value={ align }
        onChange={ ( nextAlign ) => {
          setAttributes( { align: nextAlign ? nextAlign : 'none' } );
        } }
        controls={ supports.novaBlocks.align }
      />
    </BlockControls>
  )
}

export default Controls;
