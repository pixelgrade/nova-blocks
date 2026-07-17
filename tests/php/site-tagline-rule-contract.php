<?php
/**
 * Contract: core Site Tagline semantic rule controls and render bridge.
 */

define( 'ABSPATH', dirname( __DIR__, 2 ) . '/' );

$GLOBALS['novablocks_site_tagline_filters'] = [];

function add_filter( string $hook, callable $callback, int $priority = 10, int $accepted_args = 1 ) {
	$GLOBALS['novablocks_site_tagline_filters'][ $hook ][] = [
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
		preg_match( '/<([a-z][a-z0-9-]*)/i', $this->opening_tag, $match );
		$tag_name       = $match[1] ?? 'p';
		$attribute_html = '';
		foreach ( $this->attributes as $name => $value ) {
			$attribute_html .= sprintf( ' %s="%s"', $name, htmlspecialchars( $value, ENT_QUOTES, 'UTF-8' ) );
		}

		return preg_replace( '/<([a-z][a-z0-9-]*)([^>]*)>/i', '<' . $tag_name . $attribute_html . '>', $this->html, 1 );
	}
}

function nb_site_tagline_expect( $condition, $message ) {
	if ( ! $condition ) {
		throw new RuntimeException( $message );
	}
}

require_once dirname( __DIR__, 2 ) . '/lib/rule-styles.php';

$integration_file = dirname( __DIR__, 2 ) . '/lib/site-tagline.php';
nb_site_tagline_expect( file_exists( $integration_file ), 'The Site Tagline render integration must exist.' );
require_once $integration_file;

$metadata = novablocks_filter_site_tagline_metadata( [
	'name'       => 'core/site-tagline',
	'attributes' => [],
] );
nb_site_tagline_expect(
	[ 'type' => 'number', 'default' => 1 ] === $metadata['attributes']['ruleWeight'],
	'Site Tagline must register the ruleWeight attribute server-side.'
);
nb_site_tagline_expect(
	[ 'type' => 'string', 'default' => 'strong' ] === $metadata['attributes']['ruleStrength'],
	'Site Tagline must register the strong rule role as its curated default.'
);

$markup = novablocks_render_site_tagline_rule_style(
	'<p class="wp-block-site-tagline is-style-ruled-label" style="letter-spacing:.2em">Magazine</p>',
	[
		'attrs' => [
			'className'    => 'is-style-ruled-label',
			'ruleWeight'  => 3,
			'ruleStrength' => 'subtle',
		],
	]
);
nb_site_tagline_expect(
	false !== strpos( $markup, '--nb-site-tagline-rule-weight:3px;' ),
	'Frontend markup must receive the authored rule weight.'
);
nb_site_tagline_expect(
	false !== strpos( $markup, '--nb-site-tagline-rule-color:var(--nb-rule-color);' ),
	'Frontend markup must receive the authored semantic strength.'
);
nb_site_tagline_expect(
	false !== strpos( $markup, 'letter-spacing:.2em;' ),
	'The render bridge must preserve existing inline styles.'
);

$plain_markup = '<p class="wp-block-site-tagline">Magazine</p>';
nb_site_tagline_expect(
	$plain_markup === novablocks_render_site_tagline_rule_style(
		$plain_markup,
		[ 'attrs' => [ 'ruleWeight' => 3, 'ruleStrength' => 'solid' ] ]
	),
	'Rule controls must not affect the default Site Tagline style.'
);

nb_site_tagline_expect(
	isset( $GLOBALS['novablocks_site_tagline_filters']['block_type_metadata'] ),
	'The Site Tagline metadata integration must be registered.'
);
nb_site_tagline_expect(
	isset( $GLOBALS['novablocks_site_tagline_filters']['render_block_core/site-tagline'] ),
	'The Site Tagline render integration must be registered.'
);

echo "site-tagline-rule-contract: all assertions passed\n";
