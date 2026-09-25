/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/*
 * Frozen historical save outputs of `novablocks/menu-food-section`. Do not edit
 * them: each entry must keep reproducing markup that shipped in a release.
 * Before 2.1.18 the block was implicitly API v1, so WordPress added the
 * generated `wp-block-novablocks-menu-food-section` class on save.
 *
 * - 2.1.0 – 2.1.17: `https://schema.org` item type.
 * - 1.1.0 – 2.0.4: `http://schema.org` item type.
 */
const createSave = schemaOrigin => props => {
	const {
		attributes: {
			sectionTitle,
		},
		setAttributes,
		className,
	} = props;

	const classNames = classnames(
		className,
		'nova-food-menu__section'
	);

	return (
		<div className={ classNames } itemScope itemType={ `${ schemaOrigin }/MenuSection` }>
			<header className="nova-food-menu__header">
				<RichText.Content
					tagName="h3"
					className="section-title"
					value={ sectionTitle }
					onChange={ nextSectionTitle => setAttributes( { sectionTitle: nextSectionTitle } ) }
					itemprop="name"
				/>
			</header>

			<div className="nova-food-menu__items">
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

const attributes = {
	sectionTitle: {
		type: 'string',
		default: __( 'Drinks', '__plugin_txtd' ),
	},
};

const deprecated = [
	{
		apiVersion: 1,
		attributes,
		save: createSave( 'https://schema.org' ),
	},
	{
		apiVersion: 1,
		attributes,
		save: createSave( 'http://schema.org' ),
	},
];

export default deprecated;
