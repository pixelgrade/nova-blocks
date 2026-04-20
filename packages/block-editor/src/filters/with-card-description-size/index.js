import { addFilter } from "@wordpress/hooks";

import withCardDescriptionSizeAttributes from './with-card-description-size-attributes';

// Only the attribute filter remains registered. Rendering is now handled
// directly inside with-card-details' Typography group so the Description
// Size control sits alongside Card Title Heading / Font Size / Buttons
// Style instead of slot-filling a separate ControlsGroup.
addFilter( 'blocks.registerBlockType', 'novablocks/with-card-description-size-attributes', withCardDescriptionSizeAttributes );
