/**
 * WordPress dependencies
 */
import { createBlock, createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import metadata from './block.json';

const { name: SUPERNOVA_BLOCK } = metadata;

/**
 * Transform static (content) supernova into query supernova (with posts as content).
 */
const transforms = {
	to: [
		{
			type: 'block',
			blocks: [ 'core/query' ],
      isMatch( attributes, block ) {
        // We should determine if we are already wrapped by a query.
        return true;
      },
			transform: ( attributes, innerBlocks ) => {
        // Use the same variation names as those used for query variations.
        let variation = 'novablocks-posts-grid';
        if ( attributes.layoutStyle === 'parametric' ) {
          variation = 'novablocks-posts-parametric';
        } else if ( attributes.layoutStyle === 'carrousel' ) {
          variation = 'novablocks-posts-slideshow';
        }
        const queryAttributes = {
          variation,
          query: {
            perPage: attributes?.postsToShow || 6,
            pages: 1,
            offset: 0,
            postType: 'post',
            order: 'desc',
            orderBy: 'date',
            author: '',
            search: '',
            sticky: 'exclude',
            inherit: false,
          },
        };

        const innerBlocksTemplate = [
          [
            SUPERNOVA_BLOCK,
            attributes,
            innerBlocks,
          ],
          [ 'core/query-pagination' ],
        ];

				return createBlock(
          'core/query',
          queryAttributes,
          createBlocksFromInnerBlocksTemplate( innerBlocksTemplate )
        );
			},
		},
	],
};

export default transforms;
