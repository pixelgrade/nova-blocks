/**
 * WordPress dependencies
 */

import { Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import HeaderRowPreview from "./preview";
import InspectorControls from "./inspector-controls";

const HeaderRowEdit = function( props ) {
  return (
    <Fragment>
      <HeaderRowPreview {...props} />
      <InspectorControls {...props} />
    </Fragment>
  );
};

export default HeaderRowEdit;
