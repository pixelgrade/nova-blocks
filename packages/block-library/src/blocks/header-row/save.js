import classnames from "classnames";

/**
 * WordPress dependencies
 */

import {InnerBlocks} from '@wordpress/block-editor';

const HeaderRowSave = function( props ) {
  const {
    attributes: {
      headerRowType,
      headerRowLabel
    },
    className,
  } = props;

  const classNames = classnames(
    className,
  );

  return (
    <div className={classNames}>
      <InnerBlocks.Content/>
    </div>
  )
};

export default HeaderRowSave;
