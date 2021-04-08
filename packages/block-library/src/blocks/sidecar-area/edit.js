/**
 * WordPress dependencies
 */

import { Fragment } from '@wordpress/element';

import LayoutAreaPreview from "./preview";

const LayoutAreaEdit = function (props) {
  return (
    <Fragment>
      <LayoutAreaPreview {...props} />
    </Fragment>
  )
}

export default LayoutAreaEdit;
