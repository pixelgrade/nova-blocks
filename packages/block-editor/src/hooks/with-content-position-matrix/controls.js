import { __ } from '@wordpress/i18n';
import { BlockControls } from '@wordpress/block-editor';

const BlockAlignmentMatrixControl = wp.blockEditor.__experimentalBlockAlignmentMatrixControl;

const Controls = ( props ) => {

  const {
    attributes: {
      contentPosition,
    },
    setAttributes,
  } = props;

  if ( ! BlockAlignmentMatrixControl ) {
    return null;
  }

  return (
    <BlockControls group={ "block" }>
      <BlockAlignmentMatrixControl
        label={ __( 'Change content position' ) }
        value={ contentPosition }
        onChange={ ( nextPosition ) =>
          setAttributes( { contentPosition: nextPosition } )
        }
      />
    </BlockControls>
  )
}

export default Controls;
