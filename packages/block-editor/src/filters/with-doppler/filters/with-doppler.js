import { compose, createHigherOrderComponent } from '@wordpress/compose';

import withDopplerContext from "./with-doppler-context";
import withDopplerProvider from "./with-doppler-provider";
//import withDopplerPreview from "./with-doppler-preview";

const withDoppler = createHigherOrderComponent( compose( [
  withDopplerProvider,
  withDopplerContext,
//  withDopplerPreview,
] ), 'withDoppler' );

export default withDoppler;
