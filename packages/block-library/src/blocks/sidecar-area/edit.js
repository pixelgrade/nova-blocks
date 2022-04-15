import classnames from 'classnames';

import { InnerBlocks } from '@wordpress/block-editor';
import { dispatch, select } from '@wordpress/data';
import { useSelectParent } from "@novablocks/block-editor";

const SidecarAreaEdit = function( props ) {

  const {
    attributes,
    className,
  } = props;

  useSelectParent( props );

  const { lastItemIsSticky } = attributes;

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
