/**
 * #631: the editor draws a card's (or, for query-driven cards, the
 * collection's) core border on the item slot, `.nb-collection__layout-item`,
 * the same element the frontend renders it on.
 */
import fs from 'fs';
import path from 'path';

const mockGetBorderClassesAndStyles = jest.fn( attributes => {
	const border = attributes?.style?.border || {};
	const style = {};

	if ( border.top?.width ) {
		style.borderTopWidth = border.top.width;
	}
	if ( border.top?.style ) {
		style.borderTopStyle = border.top.style;
	}
	if ( border.radius ) {
		style.borderRadius = border.radius;
	}

	return {
		className: attributes.borderColor ? `has-border-color has-${ attributes.borderColor }-border-color` : undefined,
		style,
	};
} );

jest.mock( '@wordpress/block-editor', () => ( {
	__experimentalGetBorderClassesAndStyles: attributes => mockGetBorderClassesAndStyles( attributes ),
} ) );

const { getCollectionLayoutItemProps } = require( './collection-layout-item-props' );

const TOP_RULE = { top: { width: '1px', style: 'solid' } };

describe( 'getCollectionLayoutItemProps', () => {
	beforeEach( () => mockGetBorderClassesAndStyles.mockClear() );

	it.each( [
		[ 'no attributes', undefined ],
		[ 'no style', {} ],
		[ 'colour-only style', { style: { color: {} } } ],
		[ 'empty border', { style: { border: {} } } ],
		[ 'empty border colour', { borderColor: '' } ],
	] )( 'keeps the plain item slot without a border (%s)', ( label, attributes ) => {
		expect( getCollectionLayoutItemProps( attributes ) ).toStrictEqual( { className: 'nb-collection__layout-item' } );
		expect( mockGetBorderClassesAndStyles ).not.toHaveBeenCalled();
	} );

	it( 'draws a per-side rule on the item slot', () => {
		expect( getCollectionLayoutItemProps( { style: { border: TOP_RULE } } ) ).toStrictEqual( {
			className: 'nb-collection__layout-item',
			style: { borderTopWidth: '1px', borderTopStyle: 'solid' },
		} );
	} );

	it( 'keeps core preset colour classes and never renders radius', () => {
		const props = getCollectionLayoutItemProps( {
			borderColor: 'ink',
			style: { border: { ...TOP_RULE, radius: '9px' } },
		} );

		expect( props.className ).toBe( 'nb-collection__layout-item has-border-color has-ink-border-color' );
		expect( props.style ).toStrictEqual( { borderTopWidth: '1px', borderTopStyle: 'solid' } );
	} );
} );

describe( 'editor item slots', () => {
	const read = file => fs.readFileSync( path.join( __dirname, '..', file ), 'utf8' );

	it( 'query-driven cards take the collection border', () => {
		const source = read( 'components/posts-collection-layout/index.js' );

		expect( source ).toMatch( /const layoutItemProps = getCollectionLayoutItemProps\( props\.attributes \);/ );
		expect( source ).toMatch( /<div \{ \.\.\.layoutItemProps \} key=\{ 'collection_layout_item_' \+ post\.id \}>/ );
		expect( source ).not.toMatch( /<div className=\{ 'nb-collection__layout-item' \}/ );
	} );

	it( 'the inserter preview takes each card border', () => {
		const source = read( 'components/not-posts-collection-layout/index.js' );

		expect( source ).toMatch( /<div \{ \.\.\.getCollectionLayoutItemProps\( innerBlock\.attributes \) \} key=\{ 'collection_layout_item_' \+ innerBlock\.clientId \}>/ );
	} );
} );
