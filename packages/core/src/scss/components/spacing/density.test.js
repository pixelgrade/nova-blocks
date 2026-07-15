const fs = require( 'fs' );
const path = require( 'path' );

const source = fs.readFileSync( path.join( __dirname, '_style.scss' ), 'utf8' );

test( 'maps S/M/L/XL Density tokens onto both Nova rhythm multipliers', () => {
	expect( source ).toMatch( /\$nb-density-multipliers:\s*\([\s\S]*s:\s*0\.5[\s\S]*m:\s*1[\s\S]*l:\s*1\.5[\s\S]*xl:\s*2[\s\S]*\);/ );
	expect( source ).toMatch( /\.wp-block-group\.nb-density-#\{\$density\}[\s\S]*--nb-spacing-modifier:\s*#\{\$multiplier\}[\s\S]*--nb-spacing-multiplier-override:\s*#\{\$multiplier\}/ );
} );

test( 'activates descendant spacing propagation for Density classes', () => {
	expect( source ).toMatch( /\.wp-block-group\.nb-density-s/ );
	expect( source ).toMatch( /\.wp-block-group\.nb-density-m/ );
	expect( source ).toMatch( /\.wp-block-group\.nb-density-l/ );
	expect( source ).toMatch( /\.wp-block-group\.nb-density-xl/ );
	expect( source ).toMatch( /@include block-spacing-modifier/ );
} );
