import { addFilter } from "@wordpress/hooks";

const withCustomDefaultClassName = ( className, blockName ) => {
  return `${ className } break-align-left break-align-right`;
};

addFilter( 'blocks.getBlockDefaultClassName', 'novablocks/default-block-break-align-classname', withCustomDefaultClassName );
