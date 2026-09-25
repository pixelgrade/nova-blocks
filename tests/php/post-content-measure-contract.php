<?php
/**
 * Contract for Post Content's authored reading measure (GitHub #650, ask 2).
 *
 * Inside a Nova layout grid (a Sidecar content area) Post Content's children
 * sit on the content track and Nova clears their max-width, so an authored
 * `layout.contentSize` was ignored. The render filter now carries it as
 * `--nb-post-content-measure` plus a marker class the stylesheet consumes.
 */

define( 'ABSPATH', dirname( __DIR__, 2 ) . '/' );

$GLOBALS['nb_measure_filters'] = [];

function add_filter( string $hook, $callback, int $priority = 10, int $accepted_args = 1 ) {
	$GLOBALS['nb_measure_filters'][ $hook ][] = $callback;
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


function nb_measure_expect( $condition, string $message ): void {
	if ( ! $condition ) {
		fwrite( STDERR, $message . PHP_EOL );
		exit( 1 );
	}
}

require dirname( __DIR__, 2 ) . '/packages/core/src/blocks/core/post-content/init.php';

nb_measure_expect( in_array( 'novablocks_render_post_content_measure', array_map( 'strval', array_filter( $GLOBALS['nb_measure_filters']['render_block_core/post-content'] ?? [], 'is_string' ) ), true ), 'The measure must be applied on render_block_core/post-content.' );

$html   = '<div class="entry-content wp-block-post-content is-layout-constrained" style="padding-top:1px"><p>Body</p></div>';
$render = static function ( array $layout = null ) use ( $html ) {
	$attrs = null === $layout ? [] : [ 'layout' => $layout ];
	return novablocks_render_post_content_measure( $html, [ 'blockName' => 'core/post-content', 'attrs' => $attrs ] );
};

// 1. An authored content width becomes the measure.
$out = $render( [ 'type' => 'constrained', 'contentSize' => '640px' ] );
nb_measure_expect( false !== strpos( $out, 'nb-post-content--measure' ), 'An authored contentSize adds the measure class.' );
nb_measure_expect( false !== strpos( $out, '--nb-post-content-measure:640px' ), 'An authored contentSize becomes --nb-post-content-measure: ' . $out );
nb_measure_expect( false !== strpos( $out, 'padding-top:1px' ), 'Existing inline styles are kept.' );
nb_measure_expect( false !== strpos( $out, 'entry-content wp-block-post-content is-layout-constrained' ), 'Existing classes are kept.' );
nb_measure_expect( false !== strpos( $render( [ 'type' => 'constrained', 'contentSize' => '38rem' ] ), '--nb-post-content-measure:38rem' ), 'Any length unit is kept.' );
nb_measure_expect( false !== strpos( $render( [ 'type' => 'constrained', 'contentSize' => 'var(--wp--preset--spacing--80)' ] ), '--nb-post-content-measure:var(--wp--preset--spacing--80)' ), 'Preset variables are kept.' );

// 2. Inherited or absent widths leave the markup byte-identical (the Anima templates' case).
nb_measure_expect( $html === $render(), 'No layout: unchanged.' );
nb_measure_expect( $html === $render( [ 'inherit' => true ] ), 'Inherited layout: unchanged.' );
nb_measure_expect( $html === $render( [ 'inherit' => true, 'contentSize' => '640px' ] ), 'Legacy inherit ignores contentSize, like core: unchanged.' );
nb_measure_expect( $html === $render( [ 'type' => 'constrained' ] ), 'Constrained without a size: unchanged.' );
nb_measure_expect( $html === $render( [ 'type' => 'constrained', 'contentSize' => '' ] ), 'Empty size: unchanged.' );

// 3. Unsafe values never reach the style attribute.
foreach ( [ '640px;color:red', '1px}body{x:y', '<b>', '"640px"' ] as $unsafe ) {
	nb_measure_expect( $html === $render( [ 'type' => 'constrained', 'contentSize' => $unsafe ] ), 'Unsafe value must be ignored: ' . $unsafe );
}

echo "post content measure contract ok\n";
