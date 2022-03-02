import { useMemo } from "@wordpress/element";
import { BlockControls, BlockAlignmentControl } from '@wordpress/block-editor';

import { useSupports } from "../../index";

const Controls = ( props ) => {

  const { attributes, setAttributes } = props;
  const { align } = attributes;

  const supports = useSupports( props.name );
  const alignOptions = useMemo( () => supports?.novaBlocks?.align, [ supports ] );

  console.log( props.name, alignOptions );
//  if ( ! Array.isArray( alignOptions ) || ! alignOptions.length ) {
//    return null;
//  }

  return (
    <BlockControls group="block">
      <BlockAlignmentControl
        value={ align }
        onChange={ ( nextAlign ) => {
          setAttributes( { align: nextAlign ? nextAlign : 'none' } );
        } }
        controls={ alignOptions }
      />
    </BlockControls>
  )
};

export default Controls;
