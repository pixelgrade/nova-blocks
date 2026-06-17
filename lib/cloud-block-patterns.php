<?php
/**
 * Cloud block patterns.
 *
 * @since   2.1.19
 * @license GPL-2.0-or-later
 * @package NovaBlocks
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Retrieves the cloud block patterns cache option name.
 *
 * @return string Cache option name.
 */
function novablocks_get_cloud_block_patterns_cache_key(): string {
	return 'novablocks_cloud_block_patterns';
}

/**
 * Retrieves the Pixelgrade Cloud block-pattern endpoint URL.
 *
 * @return string Endpoint URL.
 */
function novablocks_get_cloud_block_patterns_endpoint_url(): string {
	defined( 'PIXELGRADE_CLOUD__API_BASE' ) || define( 'PIXELGRADE_CLOUD__API_BASE', 'https://cloud.pixelgrade.com/' );

	$url = trailingslashit( PIXELGRADE_CLOUD__API_BASE ) . 'wp-json/pixcloud/v1/front/asset';

	/**
	 * Filters the Pixelgrade Cloud block patterns endpoint URL.
	 *
	 * @param string $url Endpoint URL.
	 */
	return apply_filters( 'novablocks/cloud_block_patterns_endpoint_url', $url );
}

/**
 * Retrieves the allowed cloud block pattern tiers.
 *
 * @return string[] Allowed tiers.
 */
function novablocks_get_allowed_cloud_block_pattern_tiers(): array {
	$tiers = [ 'free' ];

	/**
	 * Filters the cloud block pattern tiers Nova Blocks may request and register.
	 *
	 * Pixelgrade Plus appends `pro` here only when its entitlement model allows it.
	 *
	 * @param string[] $tiers Allowed tiers.
	 */
	$tiers = apply_filters( 'novablocks/cloud_block_patterns_allowed_tiers', $tiers );

	if ( ! is_array( $tiers ) ) {
		return [ 'free' ];
	}

	$allowed_tiers = [];
	foreach ( $tiers as $tier ) {
		if ( ! is_scalar( $tier ) ) {
			continue;
		}

		$tier = sanitize_key( (string) $tier );
		if ( in_array( $tier, [ 'free', 'pro' ], true ) ) {
			$allowed_tiers[ $tier ] = true;
		}
	}

	if ( empty( $allowed_tiers ) ) {
		$allowed_tiers['free'] = true;
	}

	return array_keys( $allowed_tiers );
}

/**
 * Determines whether the current request may fetch cloud block patterns.
 *
 * @return bool Whether remote fetching is allowed.
 */
function novablocks_should_fetch_cloud_block_patterns(): bool {
	$should_fetch = is_admin() || wp_doing_ajax() || ( defined( 'REST_REQUEST' ) && REST_REQUEST );

	/**
	 * Filters whether Nova Blocks may fetch cloud block patterns in the current request.
	 *
	 * @param bool $should_fetch Whether remote fetching is allowed.
	 */
	return (bool) apply_filters( 'novablocks/should_fetch_cloud_block_patterns', $should_fetch );
}

/**
 * Builds the active theme data sent to Pixelgrade Cloud.
 *
 * @return array Theme data.
 */
function novablocks_get_cloud_block_patterns_theme_data(): array {
	$theme = wp_get_theme( get_template() );

	$theme_data = [
		'slug'            => basename( get_template_directory() ),
		'stylesheet_slug' => function_exists( 'get_stylesheet' ) ? get_stylesheet() : '',
		'name'            => '',
		'themeuri'        => '',
		'version'         => '',
		'textdomain'      => '',
	];

	if ( ! empty( $theme ) && ! is_wp_error( $theme ) ) {
		$theme_data['name']       = $theme->get( 'Name' );
		$theme_data['themeuri']   = $theme->get( 'ThemeURI' );
		$theme_data['version']    = $theme->get( 'Version' );
		$theme_data['textdomain'] = $theme->get( 'TextDomain' );
	}

	/**
	 * Filters the active theme data sent with cloud block-pattern requests.
	 *
	 * @param array $theme_data Theme data.
	 */
	return apply_filters( 'novablocks/cloud_block_patterns_theme_data', $theme_data );
}

/**
 * Builds the site data sent to Pixelgrade Cloud.
 *
 * @return array Site data.
 */
function novablocks_get_cloud_block_patterns_site_data(): array {
	$site_data = [
		'url'         => home_url( '/' ),
		'is_ssl'      => is_ssl(),
		'wp'          => [
			'version' => get_bloginfo( 'version' ),
		],
		'nova-blocks' => [
			'version' => defined( 'Pixelgrade\NovaBlocks\VERSION' ) ? constant( 'Pixelgrade\NovaBlocks\VERSION' ) : '',
		],
	];

	if ( defined( 'Pixelgrade\StyleManager\VERSION' ) ) {
		$site_data['style-manager'] = [
			'version' => constant( 'Pixelgrade\StyleManager\VERSION' ),
		];
	}

	/**
	 * Filters the site data sent with cloud block-pattern requests.
	 *
	 * @param array $site_data Site data.
	 */
	return apply_filters( 'novablocks/cloud_block_patterns_site_data', $site_data );
}

/**
 * Builds the request data sent to Pixelgrade Cloud for block patterns.
 *
 * @return array Request data.
 */
function novablocks_get_cloud_block_patterns_request_data(): array {
	$request_data = [
		'site_url'    => home_url( '/' ),
		'theme_data'  => novablocks_get_cloud_block_patterns_theme_data(),
		'site_data'   => novablocks_get_cloud_block_patterns_site_data(),
		'post_status' => [],
		'type'        => 'block_pattern',
		'tiers'       => novablocks_get_allowed_cloud_block_pattern_tiers(),
	];

	/**
	 * Filters request data sent to Pixelgrade Cloud for block patterns.
	 *
	 * Pixelgrade Plus may add non-secret entitlement intent here.
	 *
	 * @param array $request_data Request data.
	 */
	return apply_filters( 'novablocks/cloud_block_patterns_request_data', $request_data );
}

/**
 * Retrieves the cloud block patterns cache TTL.
 *
 * @return int Cache TTL in seconds.
 */
function novablocks_get_cloud_block_patterns_cache_ttl(): int {
	/**
	 * Filters the cloud block patterns cache TTL.
	 *
	 * @param int $ttl Cache TTL in seconds.
	 */
	$ttl = apply_filters( 'novablocks/cloud_block_patterns_cache_ttl', 6 * HOUR_IN_SECONDS );

	return max( MINUTE_IN_SECONDS, absint( $ttl ) );
}

/**
 * Fetches block pattern data from Pixelgrade Cloud.
 *
 * @return array|false Response data on success, false on failure.
 */
function novablocks_fetch_cloud_block_patterns() {
	$request_data = novablocks_get_cloud_block_patterns_request_data();

	/**
	 * Short-circuits the raw cloud block-pattern response.
	 *
	 * Return an array shaped like the cloud response, or false to force failure.
	 *
	 * @param array|false|null $response     Short-circuit response.
	 * @param array            $request_data Request data.
	 */
	$pre_response = apply_filters( 'pre_novablocks_cloud_block_patterns_response', null, $request_data );
	if ( null !== $pre_response ) {
		return novablocks_parse_cloud_block_patterns_response( $pre_response );
	}

	$response = wp_remote_request(
		novablocks_get_cloud_block_patterns_endpoint_url(),
		[
			'method'    => 'GET',
			'timeout'   => 5,
			'blocking'  => true,
			'body'      => $request_data,
			'sslverify' => false,
		]
	);

	return novablocks_parse_cloud_block_patterns_response( $response );
}

/**
 * Parses a Pixelgrade Cloud block-pattern response.
 *
 * @param mixed $response HTTP or short-circuit response.
 * @return array|false Response data on success, false on failure.
 */
function novablocks_parse_cloud_block_patterns_response( $response ) {
	if ( false === $response || ( function_exists( 'is_wp_error' ) && is_wp_error( $response ) ) ) {
		return false;
	}

	if ( isset( $response['code'], $response['data'] ) ) {
		$response_data = $response;
	} else {
		if ( function_exists( 'wp_remote_retrieve_response_code' ) && 400 <= wp_remote_retrieve_response_code( $response ) ) {
			return false;
		}

		$response_data = json_decode( wp_remote_retrieve_body( $response ), true );
	}

	if ( null === $response_data || empty( $response_data['data'] ) || empty( $response_data['code'] ) || 'success' !== $response_data['code'] ) {
		return false;
	}

	if ( empty( $response_data['data'] ) || ! is_array( $response_data['data'] ) ) {
		return false;
	}

	return $response_data['data'];
}

/**
 * Retrieves raw cloud block pattern data, using stale-safe caching.
 *
 * @param bool $skip_cache Whether to bypass the cache.
 * @return array Cloud block pattern data.
 */
function novablocks_get_cloud_block_patterns_data( bool $skip_cache = false ): array {
	$cache_key        = novablocks_get_cloud_block_patterns_cache_key();
	$data             = get_option( $cache_key );
	$expire_timestamp = get_option( $cache_key . '_timestamp' );

	if ( false === $skip_cache && false !== $data && false !== $expire_timestamp && time() <= (int) $expire_timestamp ) {
		return is_array( $data ) ? $data : [];
	}

	if ( ! novablocks_should_fetch_cloud_block_patterns() ) {
		return is_array( $data ) ? $data : [];
	}

	$fetched_data = novablocks_fetch_cloud_block_patterns();
	if ( false !== $fetched_data ) {
		$data = $fetched_data;

		update_option( $cache_key, $data, false );
		update_option( $cache_key . '_timestamp', time() + novablocks_get_cloud_block_patterns_cache_ttl(), false );
	}

	return is_array( $data ) ? $data : [];
}

/**
 * Retrieves raw cloud block pattern items.
 *
 * @param bool $skip_cache Whether to bypass the cache.
 * @return array Cloud block pattern items.
 */
function novablocks_get_cloud_block_patterns_config( bool $skip_cache = false ): array {
	$data  = novablocks_get_cloud_block_patterns_data( $skip_cache );
	$items = [];

	if ( ! empty( $data['items'] ) && is_array( $data['items'] ) ) {
		$items = $data['items'];
	}

	/**
	 * Filters raw cloud block pattern items.
	 *
	 * @param array $items Cloud block pattern items keyed by pattern name.
	 */
	return apply_filters( 'novablocks/cloud_block_patterns_raw_items', $items );
}

/**
 * Registers cloud block pattern categories.
 *
 * @return void
 */
function novablocks_register_cloud_block_patterns_categories(): void {
	if ( ! function_exists( 'register_block_pattern_category' ) || ! class_exists( 'WP_Block_Pattern_Categories_Registry' ) ) {
		return;
	}

	$block_pattern_categories = novablocks_extract_cloud_block_patterns_categories( novablocks_get_cloud_block_patterns_config() );

	/**
	 * Filters normalized cloud block pattern categories.
	 *
	 * @param array[] $block_pattern_categories Cloud block pattern categories.
	 */
	$block_pattern_categories = apply_filters( 'novablocks/cloud_block_patterns_categories', $block_pattern_categories );

	foreach ( $block_pattern_categories as $block_pattern_category ) {
		if ( empty( $block_pattern_category['name'] ) || empty( $block_pattern_category['properties'] ) ) {
			continue;
		}

		if ( ! WP_Block_Pattern_Categories_Registry::get_instance()->is_registered( $block_pattern_category['name'] ) ) {
			register_block_pattern_category(
				$block_pattern_category['name'],
				$block_pattern_category['properties']
			);
		}
	}
}

add_action( 'init', 'novablocks_register_cloud_block_patterns_categories', 11 );

/**
 * Registers cloud block patterns.
 *
 * @return void
 */
function novablocks_register_cloud_block_patterns(): void {
	if ( ! function_exists( 'register_block_pattern' ) || ! class_exists( 'WP_Block_Patterns_Registry' ) ) {
		return;
	}

	$block_patterns = novablocks_convert_cloud_block_patterns_config( novablocks_get_cloud_block_patterns_config() );

	/**
	 * Filters normalized cloud block patterns.
	 *
	 * @param array[] $block_patterns Cloud block patterns.
	 */
	$block_patterns = apply_filters( 'novablocks/cloud_block_patterns', $block_patterns );

	if ( empty( $block_patterns ) || ! is_array( $block_patterns ) ) {
		return;
	}

	foreach ( $block_patterns as $block_pattern ) {
		if ( empty( $block_pattern['name'] ) || empty( $block_pattern['properties'] ) ) {
			continue;
		}

		if ( WP_Block_Patterns_Registry::get_instance()->is_registered( $block_pattern['name'] ) ) {
			continue;
		}

		register_block_pattern(
			$block_pattern['name'],
			$block_pattern['properties']
		);
	}
}

add_action( 'init', 'novablocks_register_cloud_block_patterns', 30 );

/**
 * Extracts cloud block pattern categories.
 *
 * @param array $block_patterns_config Cloud block pattern config.
 * @return array Normalized categories.
 */
function novablocks_extract_cloud_block_patterns_categories( array $block_patterns_config ): array {
	$block_patterns_categories = [];

	foreach ( $block_patterns_config as $block_pattern_config ) {
		if ( empty( $block_pattern_config['categories'] ) || ! is_array( $block_pattern_config['categories'] ) ) {
			continue;
		}

		foreach ( $block_pattern_config['categories'] as $category ) {
			if ( ! is_array( $category ) ) {
				continue;
			}

			if ( ! empty( $category['slug'] ) ) {
				$slug = sanitize_title( (string) $category['slug'] );
			} elseif ( ! empty( $category['name'] ) ) {
				$slug = sanitize_title_with_dashes( (string) $category['name'] );
			} else {
				continue;
			}

			if ( '' === $slug ) {
				continue;
			}

			$block_patterns_categories[ $slug ] = [
				'name'       => $slug,
				'properties' => [
					'label' => esc_html( (string) ( $category['name'] ?? $slug ) ),
				],
			];
		}
	}

	ksort( $block_patterns_categories );

	return $block_patterns_categories;
}

/**
 * Converts cloud block pattern items to register-ready descriptors.
 *
 * @param array $block_patterns_config Cloud block pattern config.
 * @return array Normalized block patterns.
 */
function novablocks_convert_cloud_block_patterns_config( array $block_patterns_config ): array {
	$block_patterns = [];
	$allowed_tiers  = novablocks_get_allowed_cloud_block_pattern_tiers();

	foreach ( $block_patterns_config as $block_pattern_config ) {
		if ( ! is_array( $block_pattern_config ) || empty( $block_pattern_config['name'] ) || empty( $block_pattern_config['properties'] ) ) {
			continue;
		}

		$tier = novablocks_get_cloud_block_pattern_tier( $block_pattern_config );
		if ( ! in_array( $tier, $allowed_tiers, true ) ) {
			continue;
		}

		$properties = novablocks_parse_cloud_block_pattern_properties( $block_pattern_config['properties'] );
		if ( empty( $properties ) ) {
			continue;
		}

		if ( empty( $properties['categories'] ) && ! empty( $block_pattern_config['categories'] ) && is_array( $block_pattern_config['categories'] ) ) {
			$properties['categories'] = [];
			foreach ( $block_pattern_config['categories'] as $category ) {
				if ( ! empty( $category['slug'] ) ) {
					$properties['categories'][] = sanitize_title( (string) $category['slug'] );
				} elseif ( ! empty( $category['name'] ) ) {
					$properties['categories'][] = sanitize_title_with_dashes( (string) $category['name'] );
				}
			}

			$properties['categories'] = array_values( array_unique( array_filter( $properties['categories'] ) ) );
		}

		if ( empty( $properties['keywords'] ) && ! empty( $block_pattern_config['tags'] ) && is_array( $block_pattern_config['tags'] ) ) {
			$properties['keywords'] = [];
			foreach ( $block_pattern_config['tags'] as $tag ) {
				if ( ! empty( $tag['name'] ) ) {
					$properties['keywords'][] = strip_tags( (string) $tag['name'] );
				} elseif ( ! empty( $tag['slug'] ) ) {
					$properties['keywords'][] = sanitize_title( (string) $tag['slug'] );
				}
			}

			$properties['keywords'] = array_values( array_unique( array_filter( $properties['keywords'] ) ) );
		}

		$block_patterns[ $block_pattern_config['name'] ] = [
			'name'       => (string) $block_pattern_config['name'],
			'properties' => $properties,
		];
	}

	return $block_patterns;
}

/**
 * Retrieves a cloud block pattern tier.
 *
 * @param array $block_pattern_config Cloud block pattern config.
 * @return string Pattern tier.
 */
function novablocks_get_cloud_block_pattern_tier( array $block_pattern_config ): string {
	$tier = $block_pattern_config['tier'] ?? ( $block_pattern_config['properties']['tier'] ?? 'free' );

	if ( ! is_scalar( $tier ) ) {
		return 'free';
	}

	$tier = sanitize_key( (string) $tier );

	return '' === $tier ? 'free' : $tier;
}

/**
 * Parses cloud block pattern properties.
 *
 * @param array $properties Raw cloud pattern properties.
 * @return array|false Parsed properties, or false when invalid.
 */
function novablocks_parse_cloud_block_pattern_properties( array $properties ) {
	$defaults = [
		'title'       => '',
		'blockTypes'  => [],
		'content'     => '',
		'description' => '',
		'categories'  => [],
		'keywords'    => [],
	];

	$properties = wp_parse_args( $properties, $defaults );
	unset( $properties['tier'] );

	if ( isset( $properties['viewportWidth'] ) && 0 < intval( $properties['viewportWidth'] ) ) {
		$properties['viewportWidth'] = absint( $properties['viewportWidth'] );
	} else {
		unset( $properties['viewportWidth'] );
	}

	foreach ( $properties as $key => $value ) {
		switch ( $key ) {
			case 'title':
			case 'description':
				if ( ! is_string( $value ) ) {
					return false;
				}

				$properties[ $key ] = wp_kses( wp_unslash( $value ), wp_kses_allowed_html( 'data' ) );
				break;
			case 'blockTypes':
				if ( ! is_string( $value ) && ! is_array( $value ) ) {
					return false;
				}

				$properties[ $key ] = array_values( array_unique( wp_parse_list( $value ) ) );
				break;
			case 'content':
				if ( ! is_string( $value ) || '' === trim( $value ) ) {
					return false;
				}

				$properties[ $key ] = novablocks_parse_cloud_block_pattern_content_tags( $value );
				break;
			case 'keywords':
			case 'categories':
				if ( ! is_string( $value ) && ! is_array( $value ) ) {
					return false;
				}

				if ( is_string( $value ) ) {
					$value = wp_parse_list( $value );
				}

				$properties[ $key ] = array_values(
					array_unique(
						array_filter(
							array_map(
								static function( $item ): string {
									return trim( strip_tags( (string) $item ) );
								},
								$value
							)
						)
					)
				);
				break;
			default:
				break;
		}
	}

	return $properties;
}

/**
 * Parses dynamic tags inside cloud block pattern content.
 *
 * @param string $content Pattern content.
 * @return string Parsed content.
 */
function novablocks_parse_cloud_block_pattern_content_tags( string $content ): string {
	$original_content = $content;

	/**
	 * Filters cloud block pattern content before Nova Blocks replaces dynamic tags.
	 *
	 * @param string $content Pattern content.
	 */
	$content = apply_filters( 'novablocks/cloud_block_patterns/parse_content_tags:before', $content );

	$replacements = [
		'%year%'             => date( 'Y' ),
		'%site-title%'       => get_bloginfo( 'name' ),
		'%site_title%'       => get_bloginfo( 'name' ),
		'%site-tagline%'     => get_bloginfo( 'description' ),
		'%site_tagline%'     => get_bloginfo( 'description' ),
		'%site-description%' => get_bloginfo( 'description' ),
		'%site_description%' => get_bloginfo( 'description' ),
		'%home_url%'         => home_url(),
	];

	$content = str_replace( array_keys( $replacements ), array_values( $replacements ), $content );

	/**
	 * Filters cloud block pattern content after Nova Blocks replaces dynamic tags.
	 *
	 * @param string $content          Parsed pattern content.
	 * @param string $original_content Original pattern content.
	 */
	return apply_filters( 'novablocks/cloud_block_patterns/parse_content_tags:after', $content, $original_content );
}
