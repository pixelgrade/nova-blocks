import { compose, createHigherOrderComponent } from '@wordpress/compose';

import withScrollingEffectProvider from "./with-scrolling-effect-provider";
import withScrollingEffectPreview from "./with-scrolling-effect-preview";

const withScrollingEffect = createHigherOrderComponent( compose( [
  withScrollingEffectProvider,
  withScrollingEffectPreview,
] ), 'withScrollingEffect' );

export default withScrollingEffect;
