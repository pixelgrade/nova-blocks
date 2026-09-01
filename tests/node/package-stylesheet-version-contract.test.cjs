const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );
const test = require( 'node:test' );

const clientAssetsSource = fs.readFileSync(
	path.resolve( __dirname, '../../lib/client-assets.php' ),
	'utf8'
);

const packageStylesSource = clientAssetsSource.match(
	/\/\/ Register styles for the current package[\s\S]*?\$nova_editor_settings\s*=/
)?.[ 0 ] || '';

const blockStylesSource = clientAssetsSource.match(
	/\/\/ Possible stylesheets to be registered for each block\.[\s\S]*?\/\/ If the current block is supported by the theme/
)?.[ 0 ] || '';

test( 'package stylesheets version themselves independently from JavaScript assets', () => {
	assert.match(
		packageStylesSource,
		/\$style_version\s*=\s*filemtime\(\s*\$style_path\s*\);/
	);
	assert.match(
		packageStylesSource,
		/wp_register_style\([\s\S]*?\$handle\s*\.\s*'-style'[\s\S]*?\$style_version,[\s\S]*?'screen'/
	);
	assert.match(
		packageStylesSource,
		/\$editor_style_version\s*=\s*filemtime\(\s*\$editor_styles_path\s*\);/
	);
	assert.match(
		packageStylesSource,
		/wp_register_style\([\s\S]*?\$handle\s*\.\s*'-editor_style'[\s\S]*?\$editor_style_version\s*\)/
	);
} );

test( 'block stylesheets version themselves independently from JavaScript assets', () => {
	assert.match(
		blockStylesSource,
		/\$version\s*=\s*filemtime\(\s*\$style_path\s*\);/
	);
	assert.doesNotMatch(
		blockStylesSource,
		/\$version\s*=\s*\$asset_config\['version'\]/
	);
} );
