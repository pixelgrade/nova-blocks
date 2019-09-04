/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const {RichText} = wp.blockEditor;

const {__} = wp.i18n;


const FoodMenuItemPreview = function( props ) {
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
		<div className={classNames}>

			{enableHighlightFoodItem &&
			 <div className="nova-food-menu-item__highlight-label">
				 <RichText
					 tagName="h5"
					 className="nova-food-menu-item__label"
					 value={highlightLabel}
					 onChange={( highlightLabel ) => setAttributes( {highlightLabel} )}
					 formattingControls={ [] }
				 />
			 </div>
			}

			<div className="nova-food-menu-item__title">
				<RichText
					value={title}
					tagName="h4"
					className="item-title"
					placeholder={__( 'Product Title' )}
					onChange={title => setAttributes( {title} )}
				/>
			</div>

			<div className="nova-food-menu-item__prices">
				<RichText
					value={price}
					tagName="span"
					className="item-price"
					placeholder={__( '$0.00' )}
					onChange={price => setAttributes( {price} )}
				/>

				{enableSalePrice &&
				 <div className="nova-food-menu-item__price--sale">
					 <RichText
						 tagName="span"
						 className="item-price--sale"
						 value={salePrice}
						 onChange={( salePrice ) => setAttributes( {salePrice} )}
						 formattingControls={ [] }
					 />
				 </div>
				 }
			</div>

			<div className="nova-food-menu-item__description">
				<RichText
					value={description}
					tagName="p"
					className="item-description"
					placeholder={__( 'Product Description' )}
					onChange={description => setAttributes( {description} )}
				/>
			</div>

		</div>
	);
};

export default FoodMenuItemPreview;
