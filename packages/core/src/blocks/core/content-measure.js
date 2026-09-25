import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';

/**
 * A block's authored content width as its reading measure (GitHub #650,
 * #635). Mirrors `novablocks_get_authored_content_size()` in
 * content-measure.php: inherited layouts (incl. the legacy `inherit: true`)
 * have none, and only a safe CSS size is returned.
 *
 * @param {Object} attributes Block attributes.
 * @return {string} CSS size, or '' when none is authored.
 */
export const getAuthoredContentSize = ( attributes = {} ) => {
	const layout = attributes?.layout;

	if ( ! layout || typeof layout !== 'object' || layout.inherit ) {
		return '';
	}

	const size = String( layout.contentSize ?? '' ).trim();

	return /^[a-z0-9.%(),\s+*\/-]+$/i.test( size ) ? size : '';
};

/**
 * Editor twin of `novablocks_add_content_measure()`: the BlockListBlock props
 * carrying the measure marker class and custom property, or null when the
 * block authors no width of its own.
 *
 * @param {Object} props                BlockListBlock props.
 * @param {Object} options
 * @param {string} options.blockName    Block the measure applies to.
 * @param {string} options.className    Marker class.
 * @param {string} options.property     Custom property carrying the measure.
 * @return {Object|null} Next props, or null to render unchanged.
 */
export const getContentMeasureProps = ( props, { blockName, className, property } ) => {
	const measure = blockName === props.name ? getAuthoredContentSize( props.attributes ) : '';

	if ( ! measure ) {
		return null;
	}

	return {
		...props,
		className: [ props.className, className ].filter( Boolean ).join( ' ' ),
		wrapperProps: {
			...props.wrapperProps,
			style: {
				...props.wrapperProps?.style,
				[ property ]: measure,
			},
		},
	};
};

/**
 * Register the editor twin for one block.
 *
 * @param {string} namespace Filter namespace.
 * @param {Object} options   See getContentMeasureProps().
 */
export const addContentMeasureFilter = ( namespace, options ) => {
	const withContentMeasure = createHigherOrderComponent( ( BlockListBlock ) => {
		return ( props ) => {
			const next = getContentMeasureProps( props, options );

			return <BlockListBlock { ...( next || props ) } />;
		};
	}, 'withContentMeasure' );

	addFilter( 'editor.BlockListBlock', namespace, withContentMeasure );
};
