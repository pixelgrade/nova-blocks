import classnames from 'classnames';

import { InnerBlocks } from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';


const SidecarAreaEdit = function( props ) {

  const {
    attributes,
    className,
    clientId,
    isSelected
  } = props;

  const parentClientId = useSelect( select => select( 'core/block-editor' ).getBlockRootClientId( clientId ), [ clientId ] );
  const { selectBlock, clearSelectedBlock } = useDispatch( 'core/editor' );

  const { lastItemIsSticky } = attributes;

  if ( isSelected ) {
    clearSelectedBlock().then(() => {
      selectBlock( parentClientId );
    });
  }

  const classNames = classnames(
    className,
    {
      'last-block-is-sticky': lastItemIsSticky === true
    }
  )

  return (
    <div className={classNames}>
      <InnerBlocks
        templateLock={false}
        renderAppender={InnerBlocks.ButtonBlockAppender}
      />
    </div>
  )
}

export default SidecarAreaEdit;
