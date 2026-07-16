<?php
/**
 * Contract for the global Site Title Fit Text and wordmark-width integration.
 */

define( 'ABSPATH', dirname( __DIR__, 2 ) . '/' );

$GLOBALS['novablocks_site_title_filters'] = [];

function add_filter( string $hook, callable $callback, int $priority = 10, int $accepted_args = 1 ) {
	$GLOBALS['novablocks_site_title_filters'][ $hook ][] = [
		'callback'      => $callback,
		'accepted_args' => $accepted_args,
	];

	return true;
}

function apply_filters( string $hook, $value, ...$args ) {
	foreach ( $GLOBALS['novablocks_site_title_filters'][ $hook ] ?? [] as $filter ) {
		$value = call_user_func_array(
			$filter['callback'],
			array_slice( [ $value, ...$args ], 0, $filter['accepted_args'] )
		);
	}

	return $value;
}

/**
 * Small test double for the WordPress HTML API used by the integration.
 */
class WP_HTML_Tag_Processor {
	private string $html;
	private array $attributes = [];
	private string $opening_tag = '';

	public function __construct( string $html ) {
		$this->html = $html;
	}

	public function next_tag(): bool {
		if ( ! preg_match( '/<([a-z][a-z0-9-]*)([^>]*)>/i', $this->html, $match ) ) {
			return false;
		}

		$this->opening_tag = $match[0];
		preg_match_all( '/([a-z0-9:-]+)=("|\')(.*?)\2/i', $match[2], $attributes, PREG_SET_ORDER );
		foreach ( $attributes as $attribute ) {
			$this->attributes[ strtolower( $attribute[1] ) ] = $attribute[3];
		}

		return true;
	}

	public function get_attribute( string $name ) {
		return $this->attributes[ strtolower( $name ) ] ?? null;
	}

	public function set_attribute( string $name, string $value ): void {
		$this->attributes[ strtolower( $name ) ] = $value;
	}

	public function add_class( string $class_name ): void {
		$classes = preg_split( '/\s+/', trim( (string) $this->get_attribute( 'class' ) ) );
		$classes = array_filter( $classes );

		if ( ! in_array( $class_name, $classes, true ) ) {
			$classes[] = $class_name;
		}

		$this->set_attribute( 'class', implode( ' ', $classes ) );
	}

	public function get_updated_html(): string {
		$tag_name = 'div';
		preg_match( '/<([a-z][a-z0-9-]*)/i', $this->opening_tag, $match );
		if ( ! empty( $match[1] ) ) {
			$tag_name = $match[1];
		}

		$attribute_html = '';
		foreach ( $this->attributes as $name => $value ) {
			$attribute_html .= sprintf( ' %s="%s"', $name, htmlspecialchars( $value, ENT_QUOTES, 'UTF-8' ) );
		}

		return preg_replace( '/<([a-z][a-z0-9-]*)([^>]*)>/i', '<' . $tag_name . $attribute_html . '>', $this->html, 1 );
	}
}

require_once dirname( __DIR__, 2 ) . '/lib/site-title.php';

function novablocks_site_title_assert( bool $condition, string $message ): void {
	if ( ! $condition ) {
		throw new RuntimeException( $message );
	}
}

function novablocks_site_title_assert_same( $expected, $actual, string $message ): void {
	if ( $expected !== $actual ) {
		throw new RuntimeException(
			$message . ' Expected ' . var_export( $expected, true ) . ', got ' . var_export( $actual, true ) . '.'
		);
	}
}

$other_metadata = [
	'name'     => 'core/paragraph',
	'supports' => [ 'typography' => [] ],
];
novablocks_site_title_assert_same(
	$other_metadata,
	novablocks_filter_site_title_metadata( $other_metadata ),
	'Other core blocks must remain untouched.'
);

$site_title_metadata = novablocks_filter_site_title_metadata(
	[
		'name'       => 'core/site-title',
		'supports'   => [ 'typography' => [ 'fontSize' => true ] ],
		'attributes' => [],
	]
);

novablocks_site_title_assert_same(
	true,
	$site_title_metadata['supports']['typography']['fitText'] ?? null,
	'Site Title must advertise native Fit Text support.'
);
novablocks_site_title_assert_same(
	[ 'type' => 'boolean' ],
	$site_title_metadata['attributes']['fitText'] ?? null,
	'Site Title must accept the native Fit Text attribute even when core support filters ran earlier.'
);
novablocks_site_title_assert_same(
	[
		'type'    => 'number',
		'default' => 395,
	],
	$site_title_metadata['attributes']['fitTextWidth'] ?? null,
	'Site Title must expose the durable wordmark width attribute.'
);

novablocks_site_title_assert_same( 80, novablocks_normalize_site_title_fit_width( 1 ), 'Widths must clamp to the lower bound.' );
novablocks_site_title_assert_same( 800, novablocks_normalize_site_title_fit_width( 2000 ), 'Widths must clamp to the upper bound.' );
novablocks_site_title_assert_same( 395, novablocks_normalize_site_title_fit_width( null ), 'Missing widths must use the default.' );
novablocks_site_title_assert_same( null, novablocks_normalize_site_title_fit_width( 'wide' ), 'Non-numeric widths must be rejected.' );

$original_markup = '<h1 class="wp-block-site-title has-fit-text" style="color:red"><a href="/">Hive</a></h1>';
$rendered_markup = novablocks_render_site_title_fit_width(
	$original_markup,
	[
		'attrs' => [
			'fitText'      => true,
			'fitTextWidth' => 420,
		],
	]
);

novablocks_site_title_assert(
	false !== strpos( $rendered_markup, '<div class="nb-site-title-fit-container" style="--nb-site-title-fit-width:420px">' ),
	'Rendering the width must create the flex measurement container.'
);
novablocks_site_title_assert(
	false !== strpos( $rendered_markup, 'class="wp-block-site-title has-fit-text"' ),
	'Rendering the width must preserve the existing Site Title class.'
);
novablocks_site_title_assert(
	false !== strpos( $rendered_markup, 'style="color:red"' ),
	'Rendering the width must preserve existing Site Title inline styles.'
);
novablocks_site_title_assert(
	false !== strpos( $rendered_markup, '<a href="/">Hive</a>' ),
	'Rendering the width must preserve the title contents.'
);

$default_width_markup = novablocks_render_site_title_fit_width(
	'<h1 class="wp-block-site-title">Hive</h1>',
	[ 'attrs' => [ 'fitText' => true ] ]
);
novablocks_site_title_assert(
	false !== strpos( $default_width_markup, 'class="wp-block-site-title has-fit-text"' ),
	'Dynamic Site Title markup must receive the class consumed by fitted-width CSS.'
);
novablocks_site_title_assert(
	false !== strpos( $default_width_markup, '--nb-site-title-fit-width:395px' ),
	'Fit Text without a serialized width must use the server default.'
);

novablocks_site_title_assert_same(
	$original_markup,
	novablocks_render_site_title_fit_width( $original_markup, [ 'attrs' => [ 'fitText' => false, 'fitTextWidth' => 420 ] ] ),
	'Width output must stay inactive when Fit Text is disabled.'
);

$invalid_width_markup = novablocks_render_site_title_fit_width(
	'<h1 class="wp-block-site-title">Hive</h1>',
	[ 'attrs' => [ 'fitText' => true, 'fitTextWidth' => 'wide' ] ]
);
novablocks_site_title_assert(
	false !== strpos( $invalid_width_markup, '<div class="nb-site-title-fit-container">' ),
	'Invalid serialized widths must retain the measurement container without outputting unsafe CSS.'
);
novablocks_site_title_assert(
	false !== strpos( $invalid_width_markup, 'class="wp-block-site-title has-fit-text"' ),
	'Invalid serialized widths must still activate Fit Text styling.'
);
novablocks_site_title_assert(
	false === strpos( $invalid_width_markup, '--nb-site-title-fit-width' ),
	'Invalid serialized widths must not reach frontend CSS.'
);

novablocks_site_title_assert(
	isset( $GLOBALS['novablocks_site_title_filters']['block_type_metadata'] ),
	'The metadata integration must be registered.'
);
novablocks_site_title_assert(
	isset( $GLOBALS['novablocks_site_title_filters']['render_block_core/site-title'] ),
	'The frontend render integration must be registered.'
);

echo "site title wordmark contract ok\n";
