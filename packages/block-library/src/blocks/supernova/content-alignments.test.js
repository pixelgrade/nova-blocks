const fs = require( 'fs' );
const path = require( 'path' );
const postcss = require( 'postcss' );
const sass = require( 'sass' );
const selectorParser = require( 'postcss-selector-parser' );

const alignmentStyles = fs.readFileSync(
	path.join( __dirname, 'scss', '_content-alignments.scss' ),
	'utf8'
);

const compiledAlignmentStyles = sass.compileString( `
	@mixin below( $breakpoint ) {
		@media ( max-width: 1px ) {
			@content;
		}
	}

	${ alignmentStyles }
` ).css;

const stylesheet = postcss.parse( compiledAlignmentStyles );

const getSpecificity = selector => {
	const specificity = [ 0, 0, 0 ];

	selectorParser( selectors => {
		selectors.first.walk( node => {
			if ( node.type === 'id' ) {
				specificity[ 0 ] += 1;
			} else if ( [ 'class', 'attribute', 'pseudo' ].includes( node.type ) ) {
				specificity[ 1 ] += 1;
			} else if ( node.type === 'tag' ) {
				specificity[ 2 ] += 1;
			}
		} );
	} ).processSync( selector );

	return specificity;
};

const compareSpecificity = ( left, right ) => {
	for ( let index = 0; index < left.length; index++ ) {
		if ( left[ index ] !== right[ index ] ) {
			return left[ index ] - right[ index ];
		}
	}

	return 0;
};

const genericContentWidthSpecificity = [ 0, 3, 0 ];

describe( 'Cards Collection content alignment', () => {
	it.each( [
		[ 'left', 'marginLeft' ],
		[ 'right', 'marginRight' ],
	] )( 'keeps %s alignment anchored after the generic content-width rule loads', ( alignment, marginProperty ) => {
		const cssProperty = marginProperty.replace( /[A-Z]/g, match => `-${ match.toLowerCase() }` );
		const rule = stylesheet.nodes.find( node =>
			node.type === 'rule' &&
			node.selector.includes( `.nb-supernova--halign-${ alignment }` ) &&
			node.selector.includes( '.nb-supernova-item__inner-container' )
		);
		const declaration = rule?.nodes.find( node => node.prop === cssProperty );

		expect( declaration?.value ).toBe( '0' );
		expect( compareSpecificity( getSpecificity( rule.selector ), genericContentWidthSpecificity ) ).toBeGreaterThan( 0 );
	} );
} );
