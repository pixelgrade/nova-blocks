/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import metadata from './block.json';

const { name: SUPERNOVA_BLOCK } = metadata;

/**
 * Transform static (content) supernova into query supernova (with posts as content).
 */
const transforms = {
	from: [
		{
			type: 'block',
			blocks: [ SUPERNOVA_BLOCK ],
			isMatch: ( attributes, block ) => {
        return true;
      },
			transform: ( { url, caption }, innerBlocks ) => {
				let value = `<a href="${ url }">${ url }</a>`;
				if ( caption?.trim() ) {
					value += `<br />${ caption }`;
				}
				return createBlock(
          'core/query',
          {},
          innerBlocks
          );
			},
		},
	],
};

export default transforms;
