import { compose, createHigherOrderComponent } from '@wordpress/compose';

import withScrollingEffectProvider from "./with-scrolling-effect-provider";
//import withScrollingEffectContext from "./with-scrolling-effect-context";
//import withScrollingEffectPreview from "./with-scrolling-effect-preview";

const withScrollingEffect = createHigherOrderComponent( compose( [
  withScrollingEffectProvider,
//  withScrollingEffectContext,
//  withScrollingEffectPreview,
] ), 'withScrollingEffect' );

export default withScrollingEffect;
