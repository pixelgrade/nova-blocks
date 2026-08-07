global.CSS = global.CSS || {
	escape: value => value,
	supports: () => false,
};

const {
	getBlockType,
	parse,
	registerBlockType,
	serialize,
	unregisterBlockType,
} = require( '@wordpress/blocks' );

const menuAttributes = require( './attributes.json' );
const menuSave = require( './save' ).default;
const sectionDeprecated = require( './menu-food-section/deprecated' ).default;
const sectionSave = require( './menu-food-section/save' ).default;
const itemDeprecated = require( './menu-food-item/deprecated' ).default;
const itemSave = require( './menu-food-item/save' ).default;

const blockNames = [
	'novablocks/menu-food',
	'novablocks/menu-food-section',
	'novablocks/menu-food-item',
];

const sectionAttributes = {
	sectionTitle: {
		type: 'string',
		default: 'Drinks',
	},
};

const itemAttributes = {
	title: {
		type: 'string',
		default: 'Sweet Shrimp Salad',
	},
	description: {
		type: 'string',
		default: 'Tomatillo, Baja Crema, Cabbage, Fried Okra',
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
		default: 'Our top pick',
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

// The content values and DOM shape come from the first section and item on the
// reporting site's public REST response. The canonical API-v3 serialization and
// block comments are reconstructed because that endpoint intentionally does not
// expose raw post_content.
const currentClasslessMarkup = `<!-- wp:novablocks/menu-food -->
<div class="nova-food-menu nova-food-menu--layout" itemscope itemtype="https://schema.org/Menu"><!-- wp:novablocks/menu-food-section {"sectionTitle":"\\u003cstrong\\u003eUno – Enkelt med råvarorna i centrum\\u003c/strong\\u003e"} -->
<div class="nova-food-menu__section" itemscope itemtype="https://schema.org/MenuSection"><header class="nova-food-menu__header"><h3 class="section-title" itemprop="name"><strong>Uno – Enkelt med råvarorna i centrum</strong></h3></header><div class="nova-food-menu__items"><!-- wp:novablocks/menu-food-item {"title":"Baguette \\u0026 olivolja","description":"1-2 pers  / 2-4 pers (G)","price":"48/78:-"} -->
<div class="nova-food-menu-item" itemscope itemtype="https://schema.org/MenuItem"><div class="nova-food-menu-item__title"><h4 class="item-title" itemprop="name">Baguette & olivolja</h4></div><div class="nova-food-menu-item__prices" itemscope itemtype="https://schema.org/offers"><span class="item-price" itemprop="price">48/78:-</span></div><div class="nova-food-menu-item__description"><p class="item-description" itemprop="description">1-2 pers  / 2-4 pers (G)</p></div></div>
<!-- /wp:novablocks/menu-food-item --></div></div>
<!-- /wp:novablocks/menu-food-section --></div>
<!-- /wp:novablocks/menu-food -->`;

// API-v1 generated wrapper classes are reconstructed from Nova's historical
// registration and WordPress's generated-class-name save hook.
const apiV1ClassfulMarkup = currentClasslessMarkup
	.replace(
		'class="nova-food-menu__section"',
		'class="wp-block-novablocks-menu-food-section nova-food-menu__section"'
	)
	.replace(
		'class="nova-food-menu-item"',
		'class="wp-block-novablocks-menu-food-item nova-food-menu-item"'
	);

const unregisterFoodMenuBlocks = () => {
	blockNames.forEach( blockName => {
		if ( getBlockType( blockName ) ) {
			unregisterBlockType( blockName );
		}
	} );
};

const registerCurrentFoodMenuBlocks = ( includeDeprecated = true ) => {
	registerBlockType( 'novablocks/menu-food', {
		apiVersion: 3,
		title: 'Food Menu',
		category: 'text',
		attributes: menuAttributes,
		edit: () => null,
		save: menuSave,
	} );
	registerBlockType( 'novablocks/menu-food-section', {
		apiVersion: 3,
		title: 'Food Menu Section',
		category: 'text',
		attributes: sectionAttributes,
		edit: () => null,
		save: sectionSave,
		deprecated: includeDeprecated ? sectionDeprecated : undefined,
	} );
	registerBlockType( 'novablocks/menu-food-item', {
		apiVersion: 3,
		title: 'Menu Item',
		category: 'text',
		attributes: itemAttributes,
		edit: () => null,
		save: itemSave,
		deprecated: includeDeprecated ? itemDeprecated : undefined,
	} );
};

const parseWithoutMigrationLogs = markup => {
	const info = jest.spyOn( console, 'info' ).mockImplementation( () => {} );

	try {
		return parse( markup );
	} finally {
		info.mockRestore();
	}
};

const parseKnownInvalidMarkup = markup => {
	const info = jest.spyOn( console, 'info' ).mockImplementation( () => {} );
	const warn = jest.spyOn( console, 'warn' ).mockImplementation( () => {} );
	const error = jest.spyOn( console, 'error' ).mockImplementation( () => {} );

	try {
		return parse( markup );
	} finally {
		info.mockRestore();
		warn.mockRestore();
		error.mockRestore();
	}
};

const expectFoodMenuContentPreserved = menuBlock => {
	expect( menuBlock.isValid ).toBe( true );
	expect( menuBlock.innerBlocks ).toHaveLength( 1 );

	const sectionBlock = menuBlock.innerBlocks[ 0 ];
	expect( sectionBlock.isValid ).toBe( true );
	expect( sectionBlock.attributes.sectionTitle ).toBe( '<strong>Uno – Enkelt med råvarorna i centrum</strong>' );
	expect( sectionBlock.innerBlocks ).toHaveLength( 1 );

	const itemBlock = sectionBlock.innerBlocks[ 0 ];
	expect( itemBlock.isValid ).toBe( true );
	expect( itemBlock.attributes ).toEqual( expect.objectContaining( {
		title: 'Baguette & olivolja',
		description: '1-2 pers  / 2-4 pers (G)',
		price: '48/78:-',
	} ) );
};

beforeEach( () => {
	unregisterFoodMenuBlocks();
	registerCurrentFoodMenuBlocks();
} );

afterAll( unregisterFoodMenuBlocks );

test( 'API v1 classful Food Menu children validate and migrate under API v3', () => {
	unregisterFoodMenuBlocks();
	registerCurrentFoodMenuBlocks( false );

	const [ incompatibleMenuBlock ] = parseKnownInvalidMarkup( apiV1ClassfulMarkup );
	expect( incompatibleMenuBlock.innerBlocks[ 0 ].isValid ).toBe( false );
	expect( incompatibleMenuBlock.innerBlocks[ 0 ].innerBlocks[ 0 ].isValid ).toBe( false );

	unregisterFoodMenuBlocks();
	registerCurrentFoodMenuBlocks();

	const [ menuBlock ] = parseWithoutMigrationLogs( apiV1ClassfulMarkup );

	expectFoodMenuContentPreserved( menuBlock );
	expect( serialize( [ menuBlock ] ) ).toBe( currentClasslessMarkup );
} );

test( 'the canonical classless API v3 serialization remains byte-exact', () => {
	const [ menuBlock ] = parseWithoutMigrationLogs( currentClasslessMarkup );

	expectFoodMenuContentPreserved( menuBlock );
	expect( serialize( [ menuBlock ] ) ).toBe( currentClasslessMarkup );
} );
