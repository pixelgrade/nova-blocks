import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';

import { getPostContentMeasure } from './measure';

// Editor twin of init.php: an authored Post Content width becomes the reading
// measure inside a Nova layout grid (GitHub #650).
const withPostContentMeasure = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		const measure = 'core/post-content' === props.name ? getPostContentMeasure( props.attributes ) : '';

		if ( ! measure ) {
			return <BlockListBlock { ...props } />;
		}

		return (
			<BlockListBlock
				{ ...props }
				className={ [ props.className, 'nb-post-content--measure' ].filter( Boolean ).join( ' ' ) }
				wrapperProps={ {
					...props.wrapperProps,
					style: {
						...props.wrapperProps?.style,
						'--nb-post-content-measure': measure,
					},
				} }
			/>
		);
	};
}, 'withPostContentMeasure' );

addFilter( 'editor.BlockListBlock', 'novablocks/post-content/measure', withPostContentMeasure );
