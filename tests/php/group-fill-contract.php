<?php
/**
 * Contract for a Group whose nested blocks fill it (GitHub #657).
 *
 * Core's "Inner blocks use content width" OFF writes `layout.type: default`
 * and renders a flow layout whose nested blocks fill the Group. Nova's
 * content-width cap (and, inside the layout grid, the content track) overrode
 * it, so a Wide header Group capped its meta row short of its Wide title and
 * image. The render filter marks only that explicit choice with
 * `nb-group--fill`; legacy Groups without a layout (also flow in core) and
 * every other layout stay byte-identical.
 */

define( 'ABSPATH', dirname( __DIR__, 2 ) . '/' );

$GLOBALS['nb_fill_filters'] = [];

function add_filter( string $hook, $callback, int $priority = 10, int $accepted_args = 1 ) {
	$GLOBALS['nb_fill_filters'][ $hook ][] = $callback;
	return true;
}

class WP_HTML_Tag_Processor {
	private string $html;
	private array $classes = [];
	private bool $found = false;

	public function __construct( string $html ) {
		$this->html = $html;
	}

	public function next_tag(): bool {
		$this->found = (bool) preg_match( '/<[a-z][a-z0-9-]*[^>]*>/i', $this->html );
		return $this->found;
	}

	public function add_class( string $class_name ): bool {
		$this->classes[] = $class_name;
		return true;
	}

	public function get_updated_html(): string {
		if ( ! $this->found || ! $this->classes ) {
			return $this->html;
		}
		$add = implode( ' ', $this->classes );
		return preg_replace_callback(
			'/<([a-z][a-z0-9-]*)([^>]*)>/i',
			static function ( $m ) use ( $add ) {
				if ( preg_match( '/\sclass="([^"]*)"/', $m[2] ) ) {
					return '<' . $m[1] . preg_replace( '/\sclass="([^"]*)"/', ' class="$1 ' . $add . '"', $m[2], 1 ) . '>';
				}
				return '<' . $m[1] . ' class="' . $add . '"' . $m[2] . '>';
			},
			$this->html,
			1
		);
	}
}

function nb_fill_expect( $condition, string $message ): void {
	if ( ! $condition ) {
		fwrite( STDERR, $message . PHP_EOL );
		exit( 1 );
	}
}

require dirname( __DIR__, 2 ) . '/packages/core/src/blocks/core/group/init.php';

nb_fill_expect( in_array( 'novablocks_render_group_fill', array_filter( $GLOBALS['nb_fill_filters']['render_block_core/group'] ?? [], 'is_string' ), true ), 'The fill marker must be applied on render_block_core/group.' );

$html   = '<div class="wp-block-group alignwide is-layout-flow wp-block-group-is-layout-flow" style="padding-top:1px"><h1 class="wp-block-post-title">T</h1></div>';
$render = static function ( $layout = null ) use ( $html ) {
	$attrs = null === $layout ? [] : [ 'layout' => $layout ];
	return novablocks_render_group_fill( $html, [ 'blockName' => 'core/group', 'attrs' => $attrs ] );
};

// 1. "Inner blocks use content width" OFF marks the Group.
$out = $render( [ 'type' => 'default' ] );
nb_fill_expect( false !== strpos( $out, 'class="wp-block-group alignwide is-layout-flow wp-block-group-is-layout-flow nb-group--fill"' ), 'An authored flow layout adds nb-group--fill: ' . $out );
nb_fill_expect( false !== strpos( $out, 'style="padding-top:1px"' ), 'Inline styles are kept: ' . $out );
nb_fill_expect( 1 === substr_count( $out, 'nb-group--fill' ), 'Only the wrapper is marked: ' . $out );

// 2. Everything else is byte-identical.
nb_fill_expect( $html === $render(), 'No layout (legacy flow): unchanged.' );
nb_fill_expect( $html === $render( [] ), 'Empty layout: unchanged.' );
nb_fill_expect( $html === $render( [ 'type' => 'constrained' ] ), 'Constrained: unchanged.' );
nb_fill_expect( $html === $render( [ 'type' => 'constrained', 'contentSize' => '487px' ] ), 'Measured constrained: unchanged.' );
nb_fill_expect( $html === $render( [ 'type' => 'flex', 'orientation' => 'vertical' ] ), 'Stack / Row: unchanged.' );
nb_fill_expect( $html === $render( [ 'type' => 'grid' ] ), 'Grid: unchanged.' );
nb_fill_expect( $html === $render( [ 'type' => 'default', 'inherit' => true ] ), 'Legacy inherit (core renders constrained): unchanged.' );
nb_fill_expect( $html === $render( [ 'type' => 'default', 'contentSize' => '487px' ] ), 'Legacy contentSize (core renders constrained): unchanged.' );
nb_fill_expect( $html === $render( 'default' ), 'A malformed layout: unchanged.' );
nb_fill_expect( '' === novablocks_render_group_fill( '', [ 'attrs' => [ 'layout' => [ 'type' => 'default' ] ] ] ), 'Empty markup stays empty.' );

echo "group fill contract ok\n";
