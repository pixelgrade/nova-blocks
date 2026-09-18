import { withFontSizeAttributes, withParagraphFontSizeCompatibility } from './with-font-size-attributes';

test( 'keeps the current paragraph font-size default', () => {
	const block = { name: 'core/paragraph', attributes: { fontSize: { type: 'string' } } };
	expect( withFontSizeAttributes( block, block.name, null ).attributes.fontSize ).toEqual( { type: 'string', default: 'normal' } );
} );

test( 'adds a compatibility definition for all current paragraph supports without the new default', () => {
	const native = { attributes: { fontSize: { type: 'string' } } };
	const fontSize = { type: 'string' };
	const content = { type: 'rich-text', source: 'rich-text', selector: 'p' };
	const supports = { anchor: true, color: { text: true }, typography: { fontSize: true } };
	const save = () => null;
	const block = { name: 'core/paragraph', apiVersion: 3, attributes: { content, fontSize }, supports, save, deprecated: [ native ] };
	withFontSizeAttributes( block, block.name, null );
	withParagraphFontSizeCompatibility( block, block.name, null );
	const [ compatibility, historical ] = block.deprecated;
	expect( historical ).toBe( native );
	expect( compatibility.apiVersion ).toBe( 3 );
	expect( compatibility.attributes.content ).toBe( content );
	expect( compatibility.attributes.fontSize ).toEqual( { type: 'string' } );
	expect( compatibility.supports ).toBe( supports );
	expect( compatibility.save ).toBe( save );
	expect( fontSize ).toEqual( { type: 'string' } );
	const attrs = { content: 'Address', anchor: 'contact', direction: 'rtl', style: { color: { text: '#123456' } } };
	expect( compatibility.migrate( attrs ) ).toEqual( { ...attrs, fontSize: 'normal' } );
	expect( compatibility.migrate( { ...attrs, fontSize: 'small' } ).fontSize ).toBe( 'small' );
	expect( attrs ).not.toHaveProperty( 'fontSize' );
} );

test.each( [
	{ type: 'string' },
	{ type: 'string', default: 'historical-size', enum: [ 'historical-size' ] },
] )( 'preserves the original historical paragraph font-size schema: %j', fontSize => {
	const attributes = { content: { type: 'string', source: 'html', selector: 'p' }, fontSize };
	const deprecation = { attributes };
	const block = { name: 'core/paragraph', attributes };
	expect( withFontSizeAttributes( block, block.name, deprecation ) ).toBe( block );
	expect( block.attributes ).toBe( attributes );
	expect( block.attributes.fontSize ).toBe( fontSize );
} );

test( 'does not add font-size attributes to a historical paragraph that did not have them', () => {
	const block = { name: 'core/paragraph', attributes: { content: { type: 'string', source: 'html', selector: 'p' } } };
	withFontSizeAttributes( block, block.name, { attributes: block.attributes } );
	expect( block.attributes ).not.toHaveProperty( 'fontSize' );
} );

test.each( [ 'core/heading', 'core/quote', 'core/pullquote', 'novablocks/headline' ] )( 'keeps existing font-size behavior for %s', name => {
	const block = { name };
	expect( withFontSizeAttributes( block, name, { attributes: {} } ).attributes.fontSize.default ).toBe( 'normal' );
} );

test( 'leaves unsupported blocks unchanged', () => {
	const block = { name: 'core/image' };
	expect( withFontSizeAttributes( block, block.name, null ) ).toBe( block );
	expect( block ).not.toHaveProperty( 'attributes' );
} );

test( 'does not prepend compatibility definitions when Core processes deprecations', () => {
	const historical = { attributes: { fontSize: { type: 'string' } } };
	const block = { name: 'core/paragraph', attributes: historical.attributes, save: () => null };
	expect( withParagraphFontSizeCompatibility( block, block.name, historical ) ).toBe( block );
	expect( block ).not.toHaveProperty( 'deprecated' );
} );
