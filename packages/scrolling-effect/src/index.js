import { addFilter } from "@wordpress/hooks";

import withScrollingEffectAttributes from "./filters/with-scrolling-effect-attributes";
import withScrollingEffectPreview from "./filters/with-scrolling-effect-preview";
import withScrollingEffectControls from "./filters/with-scrolling-effect-controls";
import withScrollingEffectWrapper from "./filters/with-scrolling-effect-wrapper";

addFilter( 'blocks.registerBlockType', 'novablocks/with-scrolling-effect-attributes', withScrollingEffectAttributes );
addFilter( 'editor.BlockEdit', 'novablocks/with-scrolling-effect-controls', withScrollingEffectControls );
addFilter( 'editor.BlockEdit', 'novablocks/with-scrolling-effect-wrapper', withScrollingEffectWrapper, 1 );

export { default as withScrollingEffect } from "./filters/with-scrolling-effect";
export { default as useScrollingEffect } from "./editor/use-scrolling-effect";

export * from'./utils';
