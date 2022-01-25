import { addFilter } from "@wordpress/hooks";

const withCustomDefaultClassName = ( className, blockName ) => {
  return `${ className } break-align-left break-align-right`;
};

addFilter( 'blocks.getBlockDefaultClassName', 'my-plugin/set-block-custom-class-name', withCustomDefaultClassName );
