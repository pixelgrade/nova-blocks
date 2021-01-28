import classnames from "classnames";

/**
 * WordPress dependencies
 */

import { InnerBlocks } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';


const HeaderRowSave = function( props ) {
  const {
    attributes: {
      shouldBeSticky
    },
    className,
  } = props;

  const classNames = classnames(
    className,
    {
      'site-header-row--sticky' : shouldBeSticky === true
    }
  );

  return (
      <div className={classNames}>
          <InnerBlocks.Content/>
      </div>
  )
};

export default HeaderRowSave;
