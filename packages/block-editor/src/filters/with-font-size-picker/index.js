import { __ } from '@wordpress/i18n';
import { SelectControl } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';

import { BLOCKS_WITH_FONT_SIZE_CONTROL } from "./utils";
import { withFontSizeAttributes } from "./with-font-size-attributes";
import { withFontSizeControl } from "./with-font-size-control";

addFilter( 'editor.BlockEdit', 'novablocks/with-inspector-controls', withFontSizeControl );
addFilter( 'blocks.registerBlockType', 'novablocks/with-font-size-attribute', withFontSizeAttributes );
