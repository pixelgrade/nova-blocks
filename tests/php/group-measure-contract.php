<?php
/**
 * Contract for a Group's authored reading measure (GitHub #635).
 *
 * Nova's group stylesheet caps every default-aligned Group child at
 * `--nb-content-width` (and a Group passed through the layout grid clears
 * their max-width), which overrode WordPress's generated `layout.contentSize`
 * rule. The render filter now carries an authored contentSize as
 * `--nb-group-measure` plus a marker class the stylesheet consumes, through
 * the same helper Post Content uses (#650).
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

require dirname( __DIR__, 2 ) . '/packages/core/src/blocks/core/group/init.php';
// Post Content shares the helper: loading both must not redeclare anything.
require dirname( __DIR__, 2 ) . '/packages/core/src/blocks/core/post-content/init.php';

nb_measure_expect( in_array( 'novablocks_render_group_measure', array_filter( $GLOBALS['nb_measure_filters']['render_block_core/group'] ?? [], 'is_string' ), true ), 'The measure must be applied on render_block_core/group.' );
nb_measure_expect( function_exists( 'novablocks_get_authored_content_size' ), 'Group and Post Content share one authored-width helper.' );

$html   = '<div class="wp-block-group sm-color-signal-2 is-layout-constrained wp-container-core-group-is-layout-2ac10405" style="padding-top:1px"><p>Body</p></div>';
$render = static function ( array $layout = null ) use ( $html ) {
	$attrs = null === $layout ? [] : [ 'layout' => $layout ];
	return novablocks_render_group_measure( $html, [ 'blockName' => 'core/group', 'attrs' => $attrs ] );
};

// 1. An authored content width becomes the measure.
$out = $render( [ 'type' => 'constrained', 'contentSize' => '487px' ] );
nb_measure_expect( false !== strpos( $out, 'nb-group--measure' ), 'An authored contentSize adds the measure class: ' . $out );
nb_measure_expect( false !== strpos( $out, '--nb-group-measure:487px' ), 'An authored contentSize becomes --nb-group-measure: ' . $out );
nb_measure_expect( false !== strpos( $out, 'padding-top:1px;' ), 'Existing inline styles are kept.' );
nb_measure_expect( false !== strpos( $out, 'wp-block-group sm-color-signal-2 is-layout-constrained wp-container-core-group-is-layout-2ac10405' ), 'Existing classes are kept.' );
nb_measure_expect( false === strpos( $out, 'nb-post-content--measure' ), 'A Group never carries the Post Content marker.' );
nb_measure_expect( false !== strpos( $render( [ 'type' => 'constrained', 'contentSize' => '38rem', 'justifyContent' => 'left' ] ), '--nb-group-measure:38rem' ), 'Any length unit is kept; justification stays with core.' );
nb_measure_expect( false !== strpos( $render( [ 'contentSize' => '30ch' ] ), '--nb-group-measure:30ch' ), 'A legacy typeless contentSize (core renders it constrained) is honoured.' );
nb_measure_expect( false !== strpos( $render( [ 'type' => 'constrained', 'contentSize' => 'var(--wp--preset--spacing--80)' ] ), '--nb-group-measure:var(--wp--preset--spacing--80)' ), 'Preset variables are kept.' );

// 2. Inherited or absent widths leave the markup byte-identical.
nb_measure_expect( $html === $render(), 'No layout: unchanged.' );
nb_measure_expect( $html === $render( [ 'inherit' => true ] ), 'Inherited layout: unchanged.' );
nb_measure_expect( $html === $render( [ 'inherit' => true, 'contentSize' => '487px' ] ), 'Legacy inherit ignores contentSize, like core: unchanged.' );
nb_measure_expect( $html === $render( [ 'type' => 'constrained' ] ), 'Constrained without a size: unchanged.' );
nb_measure_expect( $html === $render( [ 'type' => 'constrained', 'contentSize' => '' ] ), 'Empty size: unchanged.' );
nb_measure_expect( $html === $render( [ 'type' => 'constrained', 'wideSize' => '900px' ] ), 'A wide size alone is not a measure: unchanged.' );
nb_measure_expect( $html === $render( [ 'type' => 'flex', 'orientation' => 'horizontal' ] ), 'Row/Stack groups: unchanged.' );
nb_measure_expect( '' === novablocks_render_group_measure( '', [ 'attrs' => [ 'layout' => [ 'contentSize' => '487px' ] ] ] ), 'Empty markup stays empty.' );

// 3. Unsafe values never reach the style attribute.
foreach ( [ '487px;color:red', '1px}body{x:y', '<b>', '"487px"' ] as $unsafe ) {
	nb_measure_expect( $html === $render( [ 'type' => 'constrained', 'contentSize' => $unsafe ] ), 'Unsafe value must be ignored: ' . $unsafe );
}

// 4. Post Content keeps its own marker and property through the shared helper.
$post_content = novablocks_render_post_content_measure( '<div class="wp-block-post-content"><p>x</p></div>', [ 'attrs' => [ 'layout' => [ 'type' => 'constrained', 'contentSize' => '640px' ] ] ] );
nb_measure_expect( '<div class="wp-block-post-content nb-post-content--measure" style="--nb-post-content-measure:640px"><p>x</p></div>' === $post_content, 'Post Content output is unchanged: ' . $post_content );

echo "group measure contract ok\n";
