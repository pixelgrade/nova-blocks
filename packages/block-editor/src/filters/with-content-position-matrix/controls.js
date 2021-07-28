import { __ } from '@wordpress/i18n';
import { BlockControls } from '@wordpress/block-editor';

const BlockAlignmentMatrixToolbar = wp.blockEditor.__experimentalBlockAlignmentMatrixControl;

const Controls = ( props ) => {

  const {
    attributes: {
      contentPosition,
    },
    setAttributes,
  } = props;

  if ( ! BlockAlignmentMatrixToolbar ) {
    return null;
  }

  return (
    <BlockControls>
      <BlockAlignmentMatrixToolbar
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
