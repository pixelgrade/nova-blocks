<?php
/**
 * Contract for frontend Site Identity fluid-width rendering.
 */

define( 'ABSPATH', dirname( __DIR__, 2 ) . '/' );

$GLOBALS['novablocks_site_identity_filters'] = [];

function add_filter( string $hook, callable $callback, int $priority = 10, int $accepted_args = 1 ) {
	$GLOBALS['novablocks_site_identity_filters'][ $hook ][] = [
		'callback'      => $callback,
		'accepted_args' => $accepted_args,
	];

	return true;
}

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

function novablocks_site_identity_assert( bool $condition, string $message ): void {
	if ( ! $condition ) {
		throw new RuntimeException( $message );
	}
}

function novablocks_site_identity_assert_same( $expected, $actual, string $message ): void {
	if ( $expected !== $actual ) {
		throw new RuntimeException(
			$message . ' Expected ' . var_export( $expected, true ) . ', got ' . var_export( $actual, true ) . '.'
		);
	}
}

$integration_file = dirname( __DIR__, 2 ) . '/lib/site-identity.php';
novablocks_site_identity_assert( file_exists( $integration_file ), 'The Site Identity render integration must exist.' );
require_once $integration_file;

novablocks_site_identity_assert_same( 80, novablocks_normalize_site_identity_width( 1 ), 'Identity width must clamp low.' );
novablocks_site_identity_assert_same( 800, novablocks_normalize_site_identity_width( 2000 ), 'Identity width must clamp high.' );
novablocks_site_identity_assert_same( 395, novablocks_normalize_site_identity_width( 'wide' ), 'Invalid identity width must use the default.' );

$markup = '<div class="wp-block-novablocks-site-identity nb-site-identity c-branding" style="--nb-site-identity-width:420px"><div class="nb-site-identity__inner">Hive</div></div>';
$rendered = novablocks_render_site_identity_fluid_width(
	$markup,
	[ 'attrs' => [ 'identityWidth' => 420 ] ]
);

novablocks_site_identity_assert(
	false !== strpos( $rendered, '--nb-site-identity-width:420px;--nb-site-identity-width-value:420' ),
	'The frontend wrapper must preserve its serialized width and receive the numeric fluid-width input.'
);
novablocks_site_identity_assert(
	false !== strpos( $rendered, '<div class="nb-site-identity__inner">Hive</div>' ),
	'The render integration must preserve inner block markup.'
);
novablocks_site_identity_assert(
	isset( $GLOBALS['novablocks_site_identity_filters']['render_block_novablocks/site-identity'] ),
	'The frontend Site Identity render filter must be registered.'
);

$bootstrap = file_get_contents( dirname( __DIR__, 2 ) . '/nova-blocks.php' );
novablocks_site_identity_assert(
	false !== strpos( $bootstrap, "'/lib/site-identity.php'" ),
	'The plugin bootstrap must load the Site Identity render integration.'
);

echo "site identity fluid width contract ok\n";
