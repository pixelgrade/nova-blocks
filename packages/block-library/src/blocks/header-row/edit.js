/**
 * WordPress dependencies
 */

import {Fragment} from '@wordpress/element';

/**
 * Internal dependencies
 */
import HeaderRowPreview from "./preview";

const HeaderRowEdit = function( props ) {
  return (
    <Fragment>
      <HeaderRowPreview {...props} />
    </Fragment>
  );
};

export default HeaderRowEdit;
