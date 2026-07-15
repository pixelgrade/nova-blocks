const fs = require( 'fs' );
const path = require( 'path' );

const readSource = relativePath => fs.readFileSync(
	path.join( __dirname, relativePath ),
	'utf8'
);

test( 'uses one Density class helper for saved markup and editor preview', () => {
	const saveSource = readSource( 'with-space-and-sizing-save-custom-props.js' );
	const wrapperSource = readSource( 'with-space-and-sizing-wrapper-props.js' );

	expect( saveSource ).toMatch( /getDensityClassName/ );
	expect( wrapperSource ).toMatch( /getDensityClassName/ );
} );

test( 'renders a core/group-only S/M/L/XL control in the Customize tab', () => {
	const controlsSource = readSource( 'controls/index.js' );
	const densityControlPath = path.join( __dirname, 'controls/density.js' );
	const densityControlSource = fs.existsSync( densityControlPath )
		? fs.readFileSync( densityControlPath, 'utf8' )
		: '';

	expect( controlsSource ).toMatch( /<DensityControl[^>]+\{ \.\.\.props \}/ );
	expect( densityControlSource ).toMatch( /props\.name !== 'core\/group'/ );
	expect( densityControlSource ).toMatch( /isDeselectable/ );
	expect( densityControlSource ).toMatch( /DENSITY_VALUES\.map/ );
	expect( densityControlSource ).toMatch( /density:\s*value/ );
	expect( densityControlSource ).toMatch( /Fine-tune spacing overrides this density/ );
	expect( densityControlSource ).toMatch( /Custom spacing is active/ );
} );
