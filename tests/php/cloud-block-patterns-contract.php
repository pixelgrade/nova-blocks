<?php

define( 'ABSPATH', dirname( __DIR__, 2 ) . '/' );
defined( 'HOUR_IN_SECONDS' ) || define( 'HOUR_IN_SECONDS', 3600 );
defined( 'MINUTE_IN_SECONDS' ) || define( 'MINUTE_IN_SECONDS', 60 );
defined( 'Pixelgrade\NovaBlocks\VERSION' ) || define( 'Pixelgrade\NovaBlocks\VERSION', '2.1.18-test' );
defined( 'Pixelgrade\StyleManager\VERSION' ) || define( 'Pixelgrade\StyleManager\VERSION', '2.3.0-test' );

$GLOBALS['novablocks_cloud_pattern_filters']            = [];
$GLOBALS['novablocks_cloud_pattern_options']            = [];
$GLOBALS['novablocks_cloud_pattern_remote_response']    = null;
$GLOBALS['novablocks_cloud_pattern_remote_requests']    = [];
$GLOBALS['novablocks_cloud_pattern_registered_patterns'] = [];
$GLOBALS['novablocks_cloud_pattern_registered_categories'] = [];
$GLOBALS['novablocks_cloud_pattern_is_admin']           = true;
$GLOBALS['novablocks_cloud_pattern_doing_ajax']         = false;

class Novablocks_Cloud_Pattern_Test_Theme {
	public function get( string $header ): string {
		$headers = [
			'Name'       => 'Anima LT',
			'ThemeURI'   => 'https://pixelgrade.com/themes/anima-lt/',
			'Version'    => '1.0.0',
			'TextDomain' => 'anima-lt',
		];

		return $headers[ $header ] ?? '';
	}
}

class Novablocks_Cloud_Pattern_Test_Registry {
	private static ?self $instance = null;
	private array $registered = [];

	public static function get_instance(): self {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	public function is_registered( string $name ): bool {
		return isset( $this->registered[ $name ] );
	}

	public function register( string $name, array $properties ): void {
		$this->registered[ $name ] = $properties;
	}

	public function get_all_registered(): array {
		return $this->registered;
	}

	public function reset(): void {
		$this->registered = [];
	}
}

class WP_Block_Patterns_Registry extends Novablocks_Cloud_Pattern_Test_Registry {}
class WP_Block_Pattern_Categories_Registry extends Novablocks_Cloud_Pattern_Test_Registry {}

function add_filter( string $hook_name, callable $callback, int $priority = 10, int $accepted_args = 1 ): bool {
	$GLOBALS['novablocks_cloud_pattern_filters'][ $hook_name ][ $priority ][] = [
		'callback'      => $callback,
		'accepted_args' => $accepted_args,
	];

	return true;
}

function apply_filters( string $hook_name, $value, ...$args ) {
	if ( empty( $GLOBALS['novablocks_cloud_pattern_filters'][ $hook_name ] ) ) {
		return $value;
	}

	ksort( $GLOBALS['novablocks_cloud_pattern_filters'][ $hook_name ] );

	foreach ( $GLOBALS['novablocks_cloud_pattern_filters'][ $hook_name ] as $callbacks ) {
		foreach ( $callbacks as $callback_data ) {
			$callback_args = array_slice(
				array_merge( [ $value ], $args ),
				0,
				$callback_data['accepted_args']
			);
			$value         = call_user_func_array( $callback_data['callback'], $callback_args );
		}
	}

	return $value;
}

function add_action(): bool {
	return true;
}

function get_option( string $option, $default = false ) {
	return $GLOBALS['novablocks_cloud_pattern_options'][ $option ] ?? $default;
}

function update_option( string $option, $value, bool $autoload = true ): bool {
	$GLOBALS['novablocks_cloud_pattern_options'][ $option ] = $value;
	$GLOBALS['novablocks_cloud_pattern_options'][ $option . '__autoload' ] = $autoload;

	return true;
}

function is_admin(): bool {
	return $GLOBALS['novablocks_cloud_pattern_is_admin'];
}

function wp_doing_ajax(): bool {
	return $GLOBALS['novablocks_cloud_pattern_doing_ajax'];
}

function home_url( string $path = '' ): string {
	return 'https://example.test/' . ltrim( $path, '/' );
}

function get_template_directory(): string {
	return '/tmp/themes/anima-lt';
}

function get_template(): string {
	return 'anima-lt';
}

function get_stylesheet(): string {
	return 'anima-lt-child';
}

function wp_get_theme(): Novablocks_Cloud_Pattern_Test_Theme {
	return new Novablocks_Cloud_Pattern_Test_Theme();
}

function is_ssl(): bool {
	return true;
}

function get_bloginfo( string $show = '' ): string {
	return 'version' === $show ? '7.0-test' : 'Test Site';
}

function trailingslashit( string $value ): string {
	return rtrim( $value, '/' ) . '/';
}

function wp_remote_request( string $url, array $args ) {
	$GLOBALS['novablocks_cloud_pattern_remote_requests'][] = [
		'url'  => $url,
		'args' => $args,
	];

	return $GLOBALS['novablocks_cloud_pattern_remote_response'];
}

function is_wp_error( $value ): bool {
	return $value instanceof Exception;
}

function wp_remote_retrieve_response_code( $response ): int {
	return is_array( $response ) ? (int) ( $response['response']['code'] ?? 0 ) : 0;
}

function wp_remote_retrieve_body( $response ): string {
	return is_array( $response ) ? (string) ( $response['body'] ?? '' ) : '';
}

function wp_json_encode( $data, int $options = 0, int $depth = 512 ) {
	return json_encode( $data, $options, $depth );
}

function wp_parse_args( $args, array $defaults = [] ): array {
	return array_merge( $defaults, is_array( $args ) ? $args : [] );
}

function wp_parse_list( $input ): array {
	if ( is_array( $input ) ) {
		return $input;
	}

	return array_filter( array_map( 'trim', explode( ',', (string) $input ) ) );
}

function sanitize_title( string $value ): string {
	return strtolower( preg_replace( '/[^a-z0-9]+/', '-', trim( strip_tags( $value ) ) ) );
}

function sanitize_key( string $value ): string {
	return strtolower( preg_replace( '/[^a-z0-9_\-]/', '', $value ) );
}

function sanitize_title_with_dashes( string $value ): string {
	return sanitize_title( $value );
}

function wp_unslash( $value ) {
	return $value;
}

function wp_kses( string $value, array $allowed_html = [] ): string {
	return strip_tags( $value, '<strong><em><span><div><p><a><br><!-- -->' );
}

function wp_kses_allowed_html(): array {
	return [];
}

function esc_html( string $value ): string {
	return htmlspecialchars( $value, ENT_QUOTES, 'UTF-8' );
}

function absint( $value ): int {
	return abs( (int) $value );
}

function register_block_pattern( string $name, array $properties ): void {
	WP_Block_Patterns_Registry::get_instance()->register( $name, $properties );
	$GLOBALS['novablocks_cloud_pattern_registered_patterns'][ $name ] = $properties;
}

function register_block_pattern_category( string $name, array $properties ): void {
	WP_Block_Pattern_Categories_Registry::get_instance()->register( $name, $properties );
	$GLOBALS['novablocks_cloud_pattern_registered_categories'][ $name ] = $properties;
}

require_once __DIR__ . '/../../lib/cloud-block-patterns.php';

function novablocks_cloud_patterns_assert_same( $expected, $actual, string $message ): void {
	if ( $expected !== $actual ) {
		throw new RuntimeException(
			$message . ' Expected ' . var_export( $expected, true ) . ', got ' . var_export( $actual, true ) . '.'
		);
	}
}

function novablocks_cloud_patterns_reset(): void {
	$GLOBALS['novablocks_cloud_pattern_filters']             = [];
	$GLOBALS['novablocks_cloud_pattern_options']             = [];
	$GLOBALS['novablocks_cloud_pattern_remote_response']     = null;
	$GLOBALS['novablocks_cloud_pattern_remote_requests']     = [];
	$GLOBALS['novablocks_cloud_pattern_registered_patterns'] = [];
	$GLOBALS['novablocks_cloud_pattern_registered_categories'] = [];
	$GLOBALS['novablocks_cloud_pattern_is_admin']            = true;
	$GLOBALS['novablocks_cloud_pattern_doing_ajax']          = false;
	WP_Block_Patterns_Registry::get_instance()->reset();
	WP_Block_Pattern_Categories_Registry::get_instance()->reset();
}

function novablocks_cloud_patterns_success_response(): array {
	return [
		'response' => [ 'code' => 200 ],
		'body'     => wp_json_encode(
			[
				'code' => 'success',
				'data' => [
					'items' => [
						'pixelgrade/free-pattern' => [
							'name'       => 'pixelgrade/free-pattern',
							'properties' => [
								'title'         => 'Free <strong>Pattern</strong>',
								'blockTypes'    => 'core/post-content, core/template-part/header',
								'content'       => '<!-- wp:paragraph --><p>%site-title% %year%</p><!-- /wp:paragraph -->',
								'description'   => 'Free description',
								'viewportWidth' => 1200,
							],
							'categories' => [
								[
									'slug' => 'heroes',
									'name' => 'Heroes',
								],
							],
							'tags'       => [
								[
									'name' => 'Landing',
								],
							],
						],
						'pixelgrade/pro-pattern'  => [
							'name'       => 'pixelgrade/pro-pattern',
							'tier'       => 'pro',
							'properties' => [
								'title'   => 'Pro Pattern',
								'content' => '<!-- wp:paragraph --><p>Pro</p><!-- /wp:paragraph -->',
							],
							'categories' => [
								[
									'slug' => 'premium',
									'name' => 'Premium',
								],
							],
						],
						'pixelgrade/top-level-pro-wins' => [
							'name'       => 'pixelgrade/top-level-pro-wins',
							'tier'       => 'pro',
							'properties' => [
								'tier'    => 'free',
								'title'   => 'Top Level Pro Wins',
								'content' => '<!-- wp:paragraph --><p>Top level pro</p><!-- /wp:paragraph -->',
							],
						],
						'pixelgrade/top-level-free-wins' => [
							'name'       => 'pixelgrade/top-level-free-wins',
							'tier'       => 'free',
							'properties' => [
								'tier'    => 'pro',
								'title'   => 'Top Level Free Wins',
								'content' => '<!-- wp:paragraph --><p>Top level free</p><!-- /wp:paragraph -->',
							],
						],
					],
				],
			]
		),
	];
}

novablocks_cloud_patterns_reset();
$GLOBALS['novablocks_cloud_pattern_remote_response'] = novablocks_cloud_patterns_success_response();

novablocks_register_cloud_block_patterns_categories();
novablocks_register_cloud_block_patterns();

$request = $GLOBALS['novablocks_cloud_pattern_remote_requests'][0] ?? null;
novablocks_cloud_patterns_assert_same( 'GET', $request['args']['method'] ?? null, 'Cloud pattern request must use the existing GET endpoint contract.' );
novablocks_cloud_patterns_assert_same( 'block_pattern', $request['args']['body']['type'] ?? null, 'Cloud pattern request must ask for block_pattern assets.' );
novablocks_cloud_patterns_assert_same( [ 'free' ], $request['args']['body']['tiers'] ?? null, 'Nova Blocks must request the free tier by default.' );
novablocks_cloud_patterns_assert_same( false, $request['args']['sslverify'] ?? null, 'Cloud pattern request must preserve Care-compatible SSL behavior.' );
novablocks_cloud_patterns_assert_same( false, $GLOBALS['novablocks_cloud_pattern_options']['novablocks_cloud_block_patterns__autoload'] ?? null, 'Cloud pattern cache must not autoload.' );

novablocks_cloud_patterns_assert_same( true, isset( $GLOBALS['novablocks_cloud_pattern_registered_categories']['heroes'] ), 'Cloud pattern categories must be registered.' );
novablocks_cloud_patterns_assert_same( false, isset( $GLOBALS['novablocks_cloud_pattern_registered_categories']['premium'] ), 'Pro-only cloud pattern categories must stay locked by default.' );
novablocks_cloud_patterns_assert_same( true, isset( $GLOBALS['novablocks_cloud_pattern_registered_patterns']['pixelgrade/free-pattern'] ), 'Free cloud pattern must register.' );
novablocks_cloud_patterns_assert_same( false, isset( $GLOBALS['novablocks_cloud_pattern_registered_patterns']['pixelgrade/pro-pattern'] ), 'Pro cloud pattern must stay locked by default.' );
novablocks_cloud_patterns_assert_same( false, isset( $GLOBALS['novablocks_cloud_pattern_registered_patterns']['pixelgrade/top-level-pro-wins'] ), 'Top-level pro tier must stay locked even when properties.tier says free.' );
novablocks_cloud_patterns_assert_same( true, isset( $GLOBALS['novablocks_cloud_pattern_registered_patterns']['pixelgrade/top-level-free-wins'] ), 'Top-level free tier must register even when properties.tier says pro.' );

$free_pattern = $GLOBALS['novablocks_cloud_pattern_registered_patterns']['pixelgrade/free-pattern'];
novablocks_cloud_patterns_assert_same( 'Free <strong>Pattern</strong>', $free_pattern['title'], 'Pattern title should preserve safe inline markup.' );
novablocks_cloud_patterns_assert_same( [ 'core/post-content', 'core/template-part/header' ], $free_pattern['blockTypes'], 'Block types should be parsed from cloud strings.' );
novablocks_cloud_patterns_assert_same( [ 'heroes' ], $free_pattern['categories'], 'Categories should be derived from cloud terms.' );
novablocks_cloud_patterns_assert_same( [ 'Landing' ], $free_pattern['keywords'], 'Keywords should be derived from cloud tags.' );
novablocks_cloud_patterns_assert_same( true, false !== strpos( $free_pattern['content'], 'Test Site' ), 'Content tags should be expanded.' );

novablocks_cloud_patterns_reset();
add_filter(
	'novablocks/cloud_block_patterns_allowed_tiers',
	static function( array $tiers ): array {
		$tiers[] = 'pro';
		return $tiers;
	}
);
$GLOBALS['novablocks_cloud_pattern_remote_response'] = novablocks_cloud_patterns_success_response();

novablocks_register_cloud_block_patterns_categories();
novablocks_register_cloud_block_patterns();
novablocks_cloud_patterns_assert_same( true, isset( $GLOBALS['novablocks_cloud_pattern_registered_categories']['premium'] ), 'Pro-only cloud pattern categories should register when a trusted integration unlocks the pro tier.' );
novablocks_cloud_patterns_assert_same( true, isset( $GLOBALS['novablocks_cloud_pattern_registered_patterns']['pixelgrade/pro-pattern'] ), 'Pro cloud pattern should register when a trusted integration unlocks the pro tier.' );
novablocks_cloud_patterns_assert_same( true, isset( $GLOBALS['novablocks_cloud_pattern_registered_patterns']['pixelgrade/top-level-pro-wins'] ), 'Top-level pro tier should register when a trusted integration unlocks the pro tier.' );

novablocks_cloud_patterns_reset();
WP_Block_Patterns_Registry::get_instance()->register( 'pixelgrade/free-pattern', [ 'title' => 'Existing' ] );
$GLOBALS['novablocks_cloud_pattern_remote_response'] = novablocks_cloud_patterns_success_response();

novablocks_register_cloud_block_patterns();
novablocks_cloud_patterns_assert_same( false, isset( $GLOBALS['novablocks_cloud_pattern_registered_patterns']['pixelgrade/free-pattern'] ), 'Already registered patterns must win collisions.' );

novablocks_cloud_patterns_reset();
$GLOBALS['novablocks_cloud_pattern_options']['novablocks_cloud_block_patterns'] = [
	'items' => [
		'pixelgrade/stale-pattern' => [
			'name'       => 'pixelgrade/stale-pattern',
			'properties' => [
				'title'   => 'Stale Pattern',
				'content' => '<!-- wp:paragraph --><p>Stale</p><!-- /wp:paragraph -->',
			],
		],
	],
];
$GLOBALS['novablocks_cloud_pattern_options']['novablocks_cloud_block_patterns_timestamp'] = time() - HOUR_IN_SECONDS;
$GLOBALS['novablocks_cloud_pattern_remote_response'] = new RuntimeException( 'Cloud unavailable.' );

novablocks_register_cloud_block_patterns();
novablocks_cloud_patterns_assert_same( true, isset( $GLOBALS['novablocks_cloud_pattern_registered_patterns']['pixelgrade/stale-pattern'] ), 'Expired cache must be used when the cloud fetch fails.' );

novablocks_cloud_patterns_reset();
$GLOBALS['novablocks_cloud_pattern_is_admin']        = false;
$GLOBALS['novablocks_cloud_pattern_remote_response'] = novablocks_cloud_patterns_success_response();

novablocks_register_cloud_block_patterns();
novablocks_cloud_patterns_assert_same( [], $GLOBALS['novablocks_cloud_pattern_remote_requests'], 'Frontend requests without cache must not fetch cloud patterns.' );
novablocks_cloud_patterns_assert_same( [], $GLOBALS['novablocks_cloud_pattern_registered_patterns'], 'Frontend requests without cache should leave bundled patterns alone.' );

echo "cloud block patterns contract ok\n";
