<?php
/**
 * Contract: public and runtime release versions stay aligned.
 *
 * Run standalone: php tests/php/release-metadata-contract.php
 */

$plugin_source = file_get_contents( __DIR__ . '/../../nova-blocks.php' );
$readme_source = file_get_contents( __DIR__ . '/../../readme.txt' );
$pot_source    = file_get_contents( __DIR__ . '/../../languages/nova-blocks.pot' );

preg_match( '/^\s*\*\s+Version:\s*([^\s]+)/m', $plugin_source, $header_match );
preg_match( "/define\(\s*'Pixelgrade\\\\NovaBlocks\\\\VERSION'\s*,\s*'([^']+)'\s*\)/", $plugin_source, $constant_match );
preg_match( '/^Stable tag:\s*([^\s]+)/m', $readme_source, $stable_tag_match );

$versions = [
	'plugin header'    => $header_match[1] ?? '',
	'runtime constant' => $constant_match[1] ?? '',
	'readme stable tag' => $stable_tag_match[1] ?? '',
];

if ( in_array( '', $versions, true ) || 1 !== count( array_unique( $versions ) ) ) {
	throw new RuntimeException( sprintf(
		'Release metadata must match: %s.',
		implode( ', ', array_map(
			static fn ( string $label, string $version ): string => $label . '=' . ( '' === $version ? '<missing>' : $version ),
			array_keys( $versions ),
			$versions
		) )
	) );
}

if ( false !== strpos( $readme_source, 'FacetWP' ) ) {
	throw new RuntimeException( 'The public readme must use Pixelgrade Filters terminology.' );
}

$required_pot_strings = [
	'Mobile filter panel',
	'Close filters',
	'%d active filter',
	'Pixelgrade Filters listings need a Pager facet',
];

foreach ( $required_pot_strings as $required_pot_string ) {
	if ( false === strpos( $pot_source, $required_pot_string ) ) {
		throw new RuntimeException( sprintf( 'The translation template is missing: %s.', $required_pot_string ) );
	}
}

if ( false !== strpos( $pot_source, 'using the FacetWP plugin' ) ) {
	throw new RuntimeException( 'The translation template contains stale customer-facing FacetWP copy.' );
}

echo "release metadata contract ok\n";
