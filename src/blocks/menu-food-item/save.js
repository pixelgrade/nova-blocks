import classnames from "classnames";

/**
 * WordPress dependencies.
 */
const {__} = wp.i18n;
const {RichText} = wp.blockEditor;

const FoodMenuItemSave = function( props ) {
	const {
		attributes: {
			enableHighlightFoodItem,
			highlightLabel,
			enableSalePrice,
			salePrice,
			price,
			description,
			title
		},
		setAttributes,
		className
	} = props;

	const classNames = classnames(
		className,
		`nova-food-menu-item`,
		{
			'nova-food-menu-item--highlighted': enableHighlightFoodItem === true,
			'has-sale-price': enableSalePrice === true
		}
	);

	return (
		<div className={classNames} itemscope itemtype="http://schema.org/MenuItem">

			{enableHighlightFoodItem && <span className="nova-food-menu-item--highlight"> {highlightLabel} </span>}

			<div className="nova-food-menu-item__title">
				<RichText.Content
					value={title}
					tagName="h4"
					className="item-title"
					onChange={title => setAttributes( {title} )}
					itemprop="name"
				/>

				<span className="dots"></span>
			</div>

			<div className="nova-food-menu-item__prices">
				<RichText.Content
					value={price}
					tagName="span"
					className="item-price"
					onChange={price => setAttributes( {price} )}
					itemprop="price"
				/>

				{enableSalePrice && <span className="item-price--sale"> {salePrice} </span>}

			</div>

			<div className="nova-food-menu-item__description">
				<RichText.Content
					value={description}
					tagName="p"
					className="item-description"
					onChange={description => setAttributes( {description} )}
					itemprop="description"
				/>
			</div>


		</div>
	);
};

export default FoodMenuItemSave;
