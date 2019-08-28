/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { RichText } = wp.blockEditor;

const { __ } = wp.i18n;


const FoodMenuItemPreview = function( props) {
	const {
		attributes: {
			enableFeaturedFoodItem,
			isFeatured,
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
			'is-featured': enableFeaturedFoodItem === true
		}
	);

	return (
		<div className={ classNames }>

			{enableFeaturedFoodItem &&  <span className="nova-item-menu__title"> { isFeatured } </span>}

			<RichText
				value={ title }
				tagName="p"
				wrapperClassName="nova-item-menu__title"
				placeholder={ __( 'Product Title' ) }
				onChange={ title => setAttributes( { title } ) }
			/>

			<RichText
				value={ description }
				tagName="p"
				wrapperClassName="nova-item-menu__description"
				placeholder={ __( 'Product Description' ) }
				onChange={ description => setAttributes( { description } ) }
			/>

			<RichText
				value={ price }
				tagName="p"
				wrapperClassName="nova-item-menu__price"
				placeholder={ __( '$0.00' ) }
				onChange={ price => setAttributes( { price } ) }
			/>

			{enableSalePrice && <span className="nova-item-menu__price--reduced"> { salePrice } </span>}

		</div>
	);
};

export default FoodMenuItemPreview;
