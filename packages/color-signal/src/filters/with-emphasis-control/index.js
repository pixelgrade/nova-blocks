import { addFilter } from "@wordpress/hooks";

import withEmphasisAreaControl from "./with-emphasis-area-control";
import withEmphasisAreaAttributes from "./with-emphasis-area-attributes";
import withEmphasisAreaCustomProps from "./with-emphasis-area-edit-custom-props";
import withEmphasisAreaSaveCustomProps from "./with-emphasis-area-save-custom-props";

addFilter( 'editor.BlockEdit', 'novablocks/with-emphasis-area-control', withEmphasisAreaControl );
addFilter( 'blocks.registerBlockType', 'novablocks/with-emphasis-area-attributes', withEmphasisAreaAttributes );
addFilter( 'editor.BlockEdit', 'novablocks/with-emphasis-area-edit-custom-props', withEmphasisAreaCustomProps );
addFilter( 'blocks.getSaveElement', 'novablocks/with-emphasis-area-save-custom-props', withEmphasisAreaSaveCustomProps );

