import classnames from 'classnames';

import {InnerBlocks} from '@wordpress/block-editor';
import {dispatch, select} from '@wordpress/data';

const {getBlockRootClientId} = select( 'core/block-editor' );
const {selectBlock} = dispatch( 'core/editor' );

const SidecarAreaEdit = function( props ) {

  const {
    attributes,
    className,
    clientId,
    isSelected
  } = props;

  const parentClientId = getBlockRootClientId( clientId );

  const {lastItemIsSticky} = attributes;

  if ( isSelected ) {
    selectBlock( parentClientId );
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
