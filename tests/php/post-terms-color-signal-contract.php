<?php
/**
 * Contract: dynamic core/post-terms Color Signal registration and rendering.
 */

define( 'ABSPATH', dirname( __DIR__, 2 ) . '/' );

$GLOBALS['__novablocks_test_filters'] = [];

function add_filter( string $hook, callable $callback, int $priority = 10, int $accepted_args = 1 ) {
	$GLOBALS['__novablocks_test_filters'][ $hook ][] = $callback;
	return true;
}

function apply_filters( string $hook, $value, ...$args ) {
	foreach ( $GLOBALS['__novablocks_test_filters'][ $hook ] ?? [] as $callback ) {
		$value = call_user_func( $callback, $value, ...$args );
	}

	return $value;
}

function novablocks_merge_attributes_from_array( array $paths ): array {
	$attributes = [];

	foreach ( $paths as $path ) {
		$decoded    = json_decode( file_get_contents( ABSPATH . $path ), true );
		$attributes = array_merge( $attributes, $decoded );
	}

	return $attributes;
}

function novablocks_get_attributes_with_defaults( array $attributes, array $config ): array {
	foreach ( $config as $name => $schema ) {
		if ( ! array_key_exists( $name, $attributes ) && array_key_exists( 'default', $schema ) ) {
			$attributes[ $name ] = $schema['default'];
		}
	}

	return $attributes;
}

function novablocks_get_color_signal_classes( array $attributes ): array {
	return [
		'sm-palette-' . $attributes['palette'],
		'sm-variation-' . $attributes['paletteVariation'],
	];
}

class WP_HTML_Tag_Processor {
	private string $html;
	private string $opening_tag = '';
	private string $tag_name = '';
	private array $attributes = [];

	public function __construct( string $html ) {
		$this->html = $html;
	}

	public function next_tag(): bool {
		if ( ! preg_match( '/<([a-z][a-z0-9-]*)([^>]*)>/i', $this->html, $match ) ) {
			return false;
		}

		$this->opening_tag = $match[0];
		$this->tag_name    = $match[1];
		preg_match_all( '/([a-z][a-z0-9-]*)="([^"]*)"/i', $match[2], $attribute_matches, PREG_SET_ORDER );

		foreach ( $attribute_matches as $attribute_match ) {
			$this->attributes[ $attribute_match[1] ] = $attribute_match[2];
		}

		return true;
	}

	public function add_class( string $class_name ): void {
		$classes = preg_split( '/\s+/', trim( $this->attributes['class'] ?? '' ) );
		$classes = array_filter( $classes );

		if ( ! in_array( $class_name, $classes, true ) ) {
			$classes[] = $class_name;
		}

		$this->attributes['class'] = implode( ' ', $classes );
	}

	public function set_attribute( string $name, string $value ): void {
		$this->attributes[ $name ] = $value;
	}

	public function get_updated_html(): string {
		$attributes = '';

		foreach ( $this->attributes as $name => $value ) {
			$attributes .= ' ' . $name . '="' . $value . '"';
		}

		$replacement = '<' . $this->tag_name . $attributes . '>';

		return preg_replace( '/' . preg_quote( $this->opening_tag, '/' ) . '/', $replacement, $this->html, 1 );
	}
}

require_once __DIR__ . '/../../packages/core/src/blocks/core/post-terms/init.php';

function novablocks_post_terms_assert( bool $condition, string $message ): void {
	if ( ! $condition ) {
		throw new RuntimeException( $message );
	}
}

$registered = apply_filters(
	'register_block_type_args',
	[
		'attributes' => [],
		'supports'   => [],
	],
	'core/post-terms'
);

novablocks_post_terms_assert(
	false === ( $registered['attributes']['useColorSignal']['default'] ?? null ),
	'The server must register Post Terms as explicitly opt-in.'
);
novablocks_post_terms_assert(
	true === ( $registered['supports']['novaBlocks']['colorSignal']['inheritParentPalette'] ?? false ),
	'The server support map must mirror inherited-palette editor behavior.'
);
novablocks_post_terms_assert(
	'boolean' === ( $registered['attributes']['useParentPalette']['type'] ?? null ),
	'The server must register the explicit parent-palette ownership attribute.'
);

$legacy_content = '<div class="taxonomy-category" style="padding-top:1rem">Categories</div>';
$legacy_block   = [
	'blockName' => 'core/post-terms',
	'attrs'     => [
		'backgroundColor' => 'primary',
		'textColor'       => 'base',
	],
];

novablocks_post_terms_assert(
	$legacy_content === novablocks_render_dynamic_core_color_signal_block( $legacy_content, $legacy_block ),
	'Legacy Post Terms markup must remain byte-identical before explicit adoption.'
);

$active_content = '<div class="taxonomy-category" style="padding-top:1rem">Categories</div>';
$active_block   = [
	'blockName' => 'core/post-terms',
	'attrs'     => [
		'useColorSignal' => true,
		'palette'        => '2',
		'paletteVariation' => 8,
		'colorSignal'    => 3,
		'useParentPalette' => false,
	],
];
$rendered       = novablocks_render_dynamic_core_color_signal_block( $active_content, $active_block );

foreach ( [
	'taxonomy-category',
	'sm-palette-2',
	'sm-variation-8',
	'sm-color-signal-3',
	'style="padding-top:1rem"',
	'data-palette="2"',
	'data-palette-variation="8"',
	'data-color-signal="3"',
	'data-inherit-parent-palette="true"',
	'data-palette-inheritance-attribute="useParentPalette"',
	'data-use-parent-palette="false"',
] as $expected_fragment ) {
	novablocks_post_terms_assert(
		str_contains( $rendered, $expected_fragment ),
		'Active Post Terms markup is missing: ' . $expected_fragment
	);
}

echo "post terms Color Signal contract ok\n";
