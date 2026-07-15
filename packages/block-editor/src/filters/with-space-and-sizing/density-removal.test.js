import fs from 'fs';
import path from 'path';

import withSpaceAndSizingAttributes from './with-space-and-sizing-attributes';

const readSource = relativePath => fs.readFileSync(
	path.join( __dirname, relativePath ),
	'utf8'
);

test( 'keeps Density out of the core Group attribute schema', () => {
	const settings = withSpaceAndSizingAttributes( {
		name: 'core/group',
		attributes: {},
		supports: { novaBlocks: { spaceAndSizing: true } },
	} );

	expect( settings.attributes ).not.toHaveProperty( 'density' );
} );

test( 'keeps Density out of the Space and Sizing controls', () => {
	const controlsSource = readSource( './controls/index.js' );
	const densityControlPath = path.join( __dirname, 'controls/density.js' );

	expect( controlsSource ).not.toMatch( /DensityControl/ );
	expect( fs.existsSync( densityControlPath ) ).toBe( false );
} );

test( 'keeps Density classes out of the spacing runtime', () => {
	const utilsSource = readSource( '../../../../utils/src/space-and-sizing/index.js' );
	const spacingStyles = readSource( '../../../../core/src/scss/components/spacing/_style.scss' );

	expect( utilsSource ).not.toMatch( /DENSITY_VALUES|getDensityClassName|nb-density/ );
	expect( spacingStyles ).not.toMatch( /nb-density|nb-density-multipliers/ );
} );
