/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies.
 */
import attributes from './attributes.json';

/*
 * Frozen historical save outputs of `novablocks/menu-food`. Do not edit them:
 * each entry must keep reproducing markup that shipped in a release.
 *
 * - 2.0.2 – 2.0.4: API v2 (block.json) wrapper, `http://schema.org` item type.
 * - 1.1.0 – 2.0.1: API v1 wrapper, so WordPress added the generated
 *   `wp-block-novablocks-menu-food` class (and any custom class) through the
 *   `blocks.getSaveContent.extraProps` hook; `http://schema.org` item type.
 *
 * 2.1.0 switched the item type to `https://schema.org`, which is today's output.
 */
const createSave = schemaOrigin => props => {
	const {
		attributes: {
			enableTwoColumns,
			showPrices,
		},
		className,
	} = props;

	const classNames = classnames(
		className,
		'nova-food-menu',
		{
			'nova-food-menu--layout': true === enableTwoColumns,
			'price--is-hidden': false === showPrices,
		}
	);

	return (
		<div className={ classNames } itemScope itemType={ `${ schemaOrigin }/Menu` }>
			<InnerBlocks.Content />
		</div>
	);
};

const supports = {
	html: false,
};

const deprecated = [
	{
		apiVersion: 2,
		attributes,
		supports,
		save: createSave( 'http://schema.org' ),
	},
	{
		apiVersion: 1,
		attributes,
		supports,
		save: createSave( 'http://schema.org' ),
	},
];

export default deprecated;
