/**
 * WordPress dependencies
 */

import { Fragment } from '@wordpress/element';

import SidecarAreaPreview from "./preview";

const SidecarAreaEdit = function (props) {
  return (
    <Fragment>
      <SidecarAreaPreview {...props} />
    </Fragment>
  )
}

export default SidecarAreaEdit;
