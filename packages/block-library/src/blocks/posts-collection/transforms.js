import { createBlock, createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';

const transforms = {
  to: [
    {
      type: 'block',
      blocks: [ 'core/query' ],
      isMatch( attributes, block ) {
        // We will only allow the transform if the contentType is auto and the loading is automated,
        // not specific posts since the core query block doesn't support specific post IDs.
        return attributes?.contentType === 'auto' && attributes?.loadingMode === 'automated';
      },
      transform: ( attributes, innerBlocks ) => {

        const commonAttributes = Object.assign( {}, attributes, {
          contentPosition: 'center left'
        } );

        // Use the same variation names as those used for query variations.
        // This way the proper variation name and icon will be show in the block list view.
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
            'novablocks/supernova',
            commonAttributes,
            [
              [
                'novablocks/supernova-item',
                commonAttributes
              ]
            ],
          ],
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
