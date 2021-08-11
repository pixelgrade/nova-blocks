import { __ } from '@wordpress/i18n';
import { BlockControls } from '@wordpress/block-editor';

const BlockAlignmentMatrixToolbar = wp.blockEditor.__experimentalBlockAlignmentMatrixToolbar;
const BlockAlignmentMatrixControl = wp.blockEditor.__experimentalBlockAlignmentMatrixControl || wp.blockEditor.BlockAlignmentMatrixControl;

const Controls = ( props ) => {

  const {
    attributes: {
      contentPosition,
    },
    setAttributes,
  } = props;

  if ( ! BlockAlignmentMatrixControl ) {
    return (
      <ControlsFallback { ...props } />
    );
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

const ControlsFallback = ( props ) => {

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
    <BlockControls group="block">
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
