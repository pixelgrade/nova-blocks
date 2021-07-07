import { compose } from '@wordpress/compose';

import withDopplerProvider from "./with-doppler-provider";
import withDopplerContext from "./with-doppler-context";

const withDoppler = compose( [
  withDopplerProvider,
  withDopplerContext,
] );

export default withDoppler;
