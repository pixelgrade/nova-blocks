/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { RichText } from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';


const FoodMenuItemPreview = function( props ) {
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
		<div className={classNames}>

			{enableHighlightFoodItem &&
			 <div className="nova-food-menu-item__highlight-label">
				 <RichText
					 tagName="h5"
					 className="nova-food-menu-item__label"
					 value={highlightLabel}
					 onChange={( highlightLabel ) => setAttributes( {highlightLabel} )}
					 allowedFormats={ [] }
				 />
			 </div>
			}

			<div className="nova-food-menu-item__title">
				<RichText
					value={title}
					tagName="h4"
					className="item-title"
					placeholder={__( 'Product Title', '__plugin_txtd' )}
					onChange={title => setAttributes( {title} )}
				/>
			</div>

			{showPrices && <div className="nova-food-menu-item__prices">
				<RichText
					value={price}
					tagName="span"
					className="item-price"
					placeholder={__( '$0.00', '__plugin_txtd' )}
					onChange={price => setAttributes( {price} )}
				/>

				{enableSalePrice &&
				 <div className="nova-food-menu-item__price--sale">
					 <RichText
						 tagName="span"
						 className="item-price--sale"
						 value={salePrice}
						 onChange={( salePrice ) => setAttributes( {salePrice} )}
						 allowedFormats={ [] }
					 />
				 </div>
				 }
			</div> }

			{ showDescription && <div className="nova-food-menu-item__description">
				<RichText
					value={description}
					tagName="p"
					className="item-description"
					placeholder={__( 'Product Description', '__plugin_txtd' )}
					onChange={description => setAttributes( {description} )}
				/>
			</div> }

		</div>
	);
};

export default FoodMenuItemPreview;
