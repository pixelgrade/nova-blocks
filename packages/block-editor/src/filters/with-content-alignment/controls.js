import { BlockControls, BlockAlignmentControl } from '@wordpress/block-editor';

const Controls = (props) => {

  const {
    attributes: {
      align,
    },
    setAttributes
  } = props;

  function updateAlignment( nextAlign ) {
    const extraUpdatedAttributes = [ 'wide', 'full' ].includes( nextAlign )
      ? { width: undefined, height: undefined }
      : {};
    setAttributes( {
      ...extraUpdatedAttributes,
      align: nextAlign,
    } );
  }

  return (
    <BlockControls group="block">
      <BlockAlignmentControl
        value={ align }
        onChange={ updateAlignment }
        controls={['wide', 'full']}
      />
    </BlockControls>
  )
}

export default Controls;
