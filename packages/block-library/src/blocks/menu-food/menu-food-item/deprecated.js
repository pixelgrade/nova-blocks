/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * WordPress dependencies.
 */
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/*
 * Frozen historical save outputs of `novablocks/menu-food-item`. Do not edit
 * them: each entry must keep reproducing markup that shipped in a release.
 * Before 2.1.18 the block was implicitly API v1, so WordPress added the
 * generated `wp-block-novablocks-menu-food-item` class on save.
 *
 * - 2.1.0 – 2.1.17: `https://schema.org` item types.
 * - 1.1.0 – 2.0.4: `http://schema.org` item types. Releases before 1.5.0 had
 *   no `showPrices` / `showDescription` attributes and always rendered both
 *   parts, which is this save's output under those attributes' defaults.
 */
const createSave = schemaOrigin => props => {
	const {
		attributes: {
			enableHighlightFoodItem,
			highlightLabel,
			enableSalePrice,
			showDescription,
			showPrices,
			salePrice,
			price,
			description,
			title,
		},
		setAttributes,
		className,
	} = props;

	const classNames = classnames(
		className,
		'nova-food-menu-item',
		{
			'nova-food-menu-item--highlighted': true === enableHighlightFoodItem,
			'has-sale-price': true === enableSalePrice,
		}
	);

	return (
		<div className={ classNames } itemscope itemtype={ `${ schemaOrigin }/MenuItem` }>
			{ enableHighlightFoodItem && (
				<div className="nova-food-menu-item__highlight-label">
					<h5 className="nova-food-menu-item__label"> { highlightLabel } </h5>
				</div>
			) }

			<div className="nova-food-menu-item__title">
				<RichText.Content
					value={ title }
					tagName="h4"
					className="item-title"
					onChange={ nextTitle => setAttributes( { title: nextTitle } ) }
					itemprop="name"
				/>
			</div>

			{ showPrices && (
				<div className="nova-food-menu-item__prices" itemscope itemtype={ `${ schemaOrigin }/offers` }>
					<RichText.Content
						value={ price }
						tagName="span"
						className="item-price"
						onChange={ nextPrice => setAttributes( { price: nextPrice } ) }
						itemprop="price"
					/>

					{ enableSalePrice && (
						<div className="nova-food-menu-item__price--sale">
							<span className="item-price--sale"> { salePrice } </span>
						</div>
					) }
				</div>
			) }

			{ showDescription && (
				<div className="nova-food-menu-item__description">
					<RichText.Content
						value={ description }
						tagName="p"
						className="item-description"
						onChange={ nextDescription => setAttributes( { description: nextDescription } ) }
						itemprop="description"
					/>
				</div>
			) }
		</div>
	);
};

const attributes = {
	title: {
		type: 'string',
		default: __( 'Sweet Shrimp Salad', '__plugin_txtd' ),
	},
	description: {
		type: 'string',
		default: __( 'Tomatillo, Baja Crema, Cabbage, Fried Okra', '__plugin_txtd' ),
	},
	price: {
		type: 'string',
		default: '$7.95',
	},
	salePrice: {
		type: 'string',
		default: '$9.50',
	},
	highlightLabel: {
		type: 'string',
		default: __( 'Our top pick', '__plugin_txtd' ),
	},
	enableHighlightFoodItem: {
		type: 'boolean',
		default: false,
	},
	enableSalePrice: {
		type: 'boolean',
		default: false,
	},
	showPrices: {
		type: 'boolean',
		default: true,
	},
	showDescription: {
		type: 'boolean',
		default: true,
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
