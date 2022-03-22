import { __ } from '@wordpress/i18n';
import { BlockAlignmentControl, BlockControls } from "@wordpress/block-editor";
import { Button, Toolbar } from '@wordpress/components';

import { getIconSvg } from "@novablocks/block-editor";
import { needsPreview } from "@novablocks/utils";

import PreviewModeControls from './controls/preview-mode-controls';
import FlipMediaControls from './controls/flip-media-controls';

const Controls = ( props ) => {

  const { attributes, setAttributes, inQuery } = props;
  const { align } = attributes;


  return (

    <BlockControls group={ 'block' }>
      <BlockAlignmentControl value={ align } onChange={ nextAlign => {
        setAttributes( { align: nextAlign ?? 'none' } );
      } } />
      <FlipMediaControls { ...props } />
      <PreviewModeControls { ...props } />
    </BlockControls>
  )
};



export default Controls;
