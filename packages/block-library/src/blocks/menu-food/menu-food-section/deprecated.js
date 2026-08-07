/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const save = ( props ) => {
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
		<div className={ classNames } itemScope itemType="https://schema.org/MenuSection">
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

const deprecated = [
	{
		apiVersion: 1,
		attributes: {
			sectionTitle: {
				type: 'string',
				default: __( 'Drinks', '__plugin_txtd' ),
			},
		},
		save,
	},
];

export default deprecated;
