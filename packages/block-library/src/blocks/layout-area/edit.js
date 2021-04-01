/**
 * WordPress dependencies
 */

import { Fragment } from '@wordpress/element';

import LayoutAreaPreview from "./preview";
import InspectorControl from "./inspector-controls";

const LayoutAreaEdit = function (props) {
  return (
    <Fragment>
      <InspectorControl {...props}/>
      <LayoutAreaPreview {...props} />
    </Fragment>
  )
}

export default LayoutAreaEdit;
