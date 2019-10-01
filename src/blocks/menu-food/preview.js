/**
 * External dependencies
 */
import classnames from 'classnames';

const {__} = wp.i18n;
const {InnerBlocks} = wp.blockEditor;
const {createBlock} = wp.blocks;

const {IconButton} = wp.components;

const ALLOWED_BLOCKS = ['novablocks/menu-food-section'];
const TEMPLATE = [
	['novablocks/menu-food-section', {sectionTitle: 'Starters'},
		[
			['novablocks/menu-food-item', {title: 'Pea & Mint Soup', description: 'Server with focaccia bread', price: '$8.00', enableSalePrice: true, salePrice: '$5.00'}],
			['novablocks/menu-food-item', {title: 'Beaf Meatballs', description: 'In a spicy tomato sauce', price: '$10.50'}],
			['novablocks/menu-food-item', {title: 'Hummus & Baba Ganoush Dip', description: 'Olive & grilled flatbread', price: '$12.00'}],
		]
	],

	['novablocks/menu-food-section', {sectionTitle: 'Desserts'},
		[
			['novablocks/menu-food-item', {title: 'Dark Chocolate & Brownie Delice', description: 'Fudge bits & salted caramel ice cream', price: '$6.50'}],
			['novablocks/menu-food-item', {title: 'Berry Cheesecake Trifle', description: 'Fresh raspberries & strawberries, sable cookie', price: '$6.50', enableHighlightFoodItem: true, highlightLabel: 'New'}],
			['novablocks/menu-food-item', {title: 'Caramelised Lemon Tart', description: 'Meringue crisps, gin & tonic ice cream', price: '$6.50'}],
		]
	],

	['novablocks/menu-food-section', {sectionTitle: 'Main Course'},
		[
			['novablocks/menu-food-item', {title: 'The Classic Burger', description: 'Chargrilled, with or without bacon, on a brioche bun & fries', price: '$15.50'}],
			['novablocks/menu-food-item', {title: 'Roast Salmon', description: 'Hollandaise sauce, green beans & potato galette', price: '$19.50'}],
			['novablocks/menu-food-item', {title: 'Tagliatelle Pesto Chicken', description: 'Roasted Mediterranean vegetables, tomato and herb sauce', price: '$15.00', enableHighlightFoodItem: true, highlightLabel: 'Chef Selection'}],
			['novablocks/menu-food-item', {title: 'Confit de Canard ', description: 'Duck confit, white bean & ham cassoulet, wilted spinach', price: '$12.15'}],
			['novablocks/menu-food-item', {title: 'Roasted Steak Roulade', description: 'Mint parsley with apple cider vinegar, salt, sugar & spices', price: '$14.95'}],
			['novablocks/menu-food-item', {title: 'Cornish-mackerel', description: 'Marinated tomatoes, fragrant curry, tamarillo', price: '$10.45'}],
			['novablocks/menu-food-item', {title: 'Lobster & Cucumber Soup', description: 'Lobster salad, smoked onion, rock samphire & sorrel', price: '$24.95'}],
		]
	],
];


const FoodMenuPreview = function( props ) {
	const {
		attributes: {
			enableTwoColumns
		},
		clientId,
		className,
	} = props;

	const addFoodMenuSection = () => {
		const block = createBlock( 'novablocks/menu-food-section' );
		const index = wp.data.select( 'core/block-editor' ).getBlocksByClientId( clientId )[0].innerBlocks.length;
		wp.data.dispatch( 'core/block-editor' ).insertBlock( block, index, clientId );
	};

	const classNames = classnames(
		className,
		`nova-food-menu`,
		{
			'nova-food-menu--layout' : enableTwoColumns === true
		}
	);

	return (
		<div className={classNames}>
			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
				template={TEMPLATE}
				renderAppender={false}
			/>

			<IconButton
				className="components-button block-editor-button-block-appender nova-blocks-appender"
				label={__( 'Add New Menu Section', '__plugin_txtd' )}
				icon="insert"
				onClick={addFoodMenuSection}
				>
				{ __( 'Add Menu Section', '__plugin_txtd' ) }
			</IconButton>
		</div>
	);
};

export default FoodMenuPreview;
