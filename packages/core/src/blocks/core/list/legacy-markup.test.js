global.CSS = global.CSS || {
	escape: value => value,
	supports: () => false,
};

const { InnerBlocks, useBlockProps } = require( '@wordpress/block-editor' );
const {
	getBlockType,
	parse,
	registerBlockType,
	serialize,
	unregisterBlockType,
} = require( '@wordpress/blocks' );
const { createElement } = require( '@wordpress/element' );
const { addFilter, removeFilter } = require( '@wordpress/hooks' );

const { withAlteredSettings } = require( './components/with-altered-settings' );
const { withSaveExtraProps } = require( './components/with-save-extra-props' );

const FILTER_NAMESPACE = 'novablocks/list/legacy-markup-test';

const saveListItem = ( { attributes } ) => createElement(
	'li',
	useBlockProps.save(),
	attributes.content
);

const saveList = ( { attributes } ) => createElement(
	attributes.ordered ? 'ol' : 'ul',
	useBlockProps.save( {
		reversed: attributes.reversed,
		start: attributes.start,
	} ),
	createElement( InnerBlocks.Content )
);

beforeAll( () => {
	if ( getBlockType( 'core/list-item' ) ) {
		unregisterBlockType( 'core/list-item' );
	}
	if ( getBlockType( 'core/list' ) ) {
		unregisterBlockType( 'core/list' );
	}

	registerBlockType( 'core/list-item', {
		apiVersion: 2,
		title: 'List Item',
		category: 'text',
		parent: [ 'core/list' ],
		attributes: {
			content: {
				type: 'string',
				source: 'html',
				selector: 'li',
				default: '',
			},
		},
		supports: { className: false },
		edit: () => null,
		save: saveListItem,
	} );

	registerBlockType( 'core/list', withAlteredSettings( {
		apiVersion: 2,
		name: 'core/list',
		title: 'List',
		category: 'text',
		attributes: {
			ordered: { type: 'boolean', default: false },
			start: { type: 'number' },
			reversed: { type: 'boolean' },
		},
		supports: { className: false },
		edit: () => null,
		save: saveList,
		deprecated: [],
	} ) );

	addFilter(
		'blocks.getSaveContent.extraProps',
		FILTER_NAMESPACE,
		withSaveExtraProps,
		1
	);
} );

afterAll( () => {
	removeFilter( 'blocks.getSaveContent.extraProps', FILTER_NAMESPACE );
	unregisterBlockType( 'core/list' );
	unregisterBlockType( 'core/list-item' );
} );

test( 'parses legacy NaN/reversed markup and migrates it to current output', () => {
	const legacyMarkup = `<!-- wp:list {"ordered":true,"reversed":true,"listConnection":"is-style-divider","listItemsCount":2} -->
<ol class="wp-block-list nb-list list-bullet-style is-style-divider" style="--nb-list-start-at:NaN;--nb-list-items-count:3"><!-- wp:list-item -->
<li>First item</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Second item</li>
<!-- /wp:list-item --></ol>
<!-- /wp:list -->`;

	const info = jest.spyOn( console, 'info' ).mockImplementation( () => {} );
	const [ block ] = parse( legacyMarkup );
	info.mockRestore();
	const migratedMarkup = serialize( [ block ] );

	expect( block.isValid ).toBe( true );
	expect( block.innerBlocks ).toHaveLength( 2 );
	expect( block.attributes.novaBlocksLegacyListCounter ).toBeUndefined();
	expect( migratedMarkup ).toContain( '<ol reversed' );
	expect( migratedMarkup ).toContain( '--nb-list-start-at:0' );
	expect( migratedMarkup ).toContain( '<li>First item</li>' );
	expect( migratedMarkup ).toContain( '<li>Second item</li>' );
	expect( migratedMarkup ).not.toContain( '--nb-list-start-at:NaN' );
} );
