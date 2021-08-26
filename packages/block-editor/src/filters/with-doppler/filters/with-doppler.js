import { compose, createHigherOrderComponent } from '@wordpress/compose';

import withDopplerProvider from "./with-doppler-provider";
//import withDopplerContext from "./with-doppler-context";
//import withDopplerPreview from "./with-doppler-preview";

const withDoppler = createHigherOrderComponent( compose( [
  withDopplerProvider,
//  withDopplerContext,
//  withDopplerPreview,
] ), 'withDoppler' );

export default withDoppler;
