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
			showDescription,
			showPrices,
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

			{enableHighlightFoodItem &&
			 <div className="nova-food-menu-item__highlight-label">
			 <h5 className="nova-food-menu-item__label"> {highlightLabel} </h5>
			 </div>
			}

			<div className="nova-food-menu-item__title">
				<RichText.Content
					value={title}
					tagName="h4"
					className="item-title"
					onChange={title => setAttributes( {title} )}
					itemprop="name"
				/>
			</div>

			{ showPrices && <div className="nova-food-menu-item__prices" itemscope itemtype="http://schema.org/offers">
				<RichText.Content
					value={price}
					tagName="span"
					className="item-price"
					onChange={price => setAttributes( {price} )}
					itemprop="price"
				/>

				{enableSalePrice &&
				 <div className="nova-food-menu-item__price--sale">
				 <span className="item-price--sale"> {salePrice} </span>
				 </div>
				 }
			</div> }

			{ showDescription && <div className="nova-food-menu-item__description">
				<RichText.Content
					value={description}
					tagName="p"
					className="item-description"
					onChange={description => setAttributes( {description} )}
					itemprop="description"
				/>
			</div> }

		</div>
	);
};

export default FoodMenuItemSave;
