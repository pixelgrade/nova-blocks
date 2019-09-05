<?php

function novablocks_register_settings() {
	register_setting(
		'novablocks',
		'novablocks_google_maps_api_key',
		array(
			'type'              => 'string',
			'show_in_rest'      => true,
			'sanitize_callback' => 'sanitize_text_field',
		)
	);
}

add_action( 'admin_init', 'novablocks_register_settings' );
add_action( 'rest_api_init', 'novablocks_register_settings' );

function novablocks_get_parallax_attributes() {
	return array(
		'enableParallax'       => array(
			'type'    => 'boolean',
			'default' => true,
		),
		'parallaxAmount'       => array(
			'type'    => 'string',
			'default' => '50',
		),
		'parallaxCustomAmount' => array(
			'type'    => 'number',
			'default' => 50,
		),
	);
}

function novablocks_get_content_padding_attributes() {
	return array(
		'contentPadding'       => array(
			'type'    => 'string',
			'default' => 'medium',
		),
		'contentPaddingCustom' => array(
			'type'    => 'number',
			'default' => 75
		),
	);
}

function novablocks_get_content_width_attributes() {
	return array(
		'contentWidth'       => array(
			'type'    => 'string',
			'default' => 'large'
		),
		'contentWidthCustom' => array(
			'type'    => 'number',
			'default' => 100
		),
	);
}

function novablocks_get_color_attributes() {
	return array(
		'contentColor'          => array(
			'type'    => 'string',
			'default' => '#FFF'
		),
		'overlayFilterStyle'    => array(
			'type'    => 'string',
			'default' => 'dark'
		),
		'overlayFilterStrength' => array(
			'type'    => 'number',
			'default' => 30
		),
	);
}

function novablocks_get_alignment_attributes() {
	return array(
		'horizontalAlignment'  => array(
			'type'    => 'string',
			'default' => 'center',
		),
		'verticalAlignment'    => array(
			'type'    => 'string',
			'default' => 'center'
		),
	);
}

function novablocks_is_parallax_enabled( $attributes ) {
	$parallaxEnabled = $attributes[ 'parallaxEnabled' ];
	$parallaxAttributes = novablocks_get_parallax_attributes();

	if ( ! empty( $parallaxEnabled ) ) {
		return $parallaxEnabled;
	}

	if ( $parallaxEnabled === false ) {
		return false;
	}

	return $parallaxAttributes[ 'parallaxEnabled' ][ 'default' ];
}

function novablocks_get_parallax_amount( $attributes ) {
	$parallaxAmount = $attributes[ 'parallaxAmount' ];
	$parallaxAmount = ! empty( $parallaxAmount ) ? $parallaxAmount : '50';
	$customParallaxAmount = $attributes[ 'parallaxCustomAmount' ];
	$actualParallaxAmount = $parallaxAmount === 'custom' ? $customParallaxAmount : intval( $parallaxAmount );
	$actualParallaxAmount = max( min( 1, floatval( $actualParallaxAmount ) / 100 ), 0 );

	return esc_attr( $actualParallaxAmount );
}

function novablocks_get_block_extra_classes( $attributes ) {
	$classes = array();

	if ( ! empty( $attributes['verticalAlignment'] ) ) {
		$classes[] = 'novablocks-u-valign-' . $attributes['verticalAlignment'];
	}

	if ( ! empty( $attributes['horizontalAlignment'] ) ) {
		$classes[] = 'novablocks-u-halign-' . $attributes['horizontalAlignment'];
	}

	if ( ! empty( $attributes['contentPadding'] ) ) {
		$classes[] = 'novablocks-u-spacing-' . $attributes['contentPadding'];
	}

	if ( ! empty( $attributes['contentWidth'] ) ) {
		$classes[] = 'novablocks-u-content-width-' . $attributes['contentWidth'];
	}

	$classes[] = 'novablocks-u-background';
	if ( ! empty( $attributes['overlayFilterStyle'] ) ) {
		$classes[] = 'novablocks-u-background-' . $attributes['overlayFilterStyle'];
	}

	if ( ! novablocks_is_parallax_enabled( $attributes ) ) {
		$classes[] = 'has-parallax';
	}

	return $classes;
}

function novablocks_get_hero_attributes() {
	return array_merge(
		array(
			'blockIndex'              => array(
				'type'    => 'number',
				'default' => -1
			),
			'applyMinimumHeight'      => array(
				'type'   => 'string',
				'source' => 'meta',
				'meta'   => 'novablocks_hero_apply_minimum_height'
			),
			'minHeight'               => array(
				'type'   => 'number',
				'source' => 'meta',
				'meta'   => 'novablocks_hero_minimum_height'
			),
			'applyMinimumHeightBlock' => array(
				'type'    => 'boolean',
				'default' => false
			),
			'scrollIndicator'         => array(
				'type'   => 'boolean',
				'source' => 'meta',
				'meta'   => 'novablocks_hero_scroll_indicator'
			),
			'scrollIndicatorBlock'    => array(
				'type'    => 'boolean',
				'default' => false
			),
			'positionIndicators'      => array(
				'type'   => 'boolean',
				'source' => 'meta',
				'meta'   => 'novablocks_hero_position_indicators',
			),
			'backgroundType'          => array(
				'type'    => 'string',
				'default' => 'image'
			),
			'media'                   => array(
				'type'    => 'object',
				'default' => array(
					'type'  => 'image',
					'sizes' => array(
						'full' => array(
							'url' => 'https://images.unsplash.com/photo-1549631998-6d554b1402ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
						),
					),
				),
			),
		),
		novablocks_get_alignment_attributes(),
		novablocks_get_color_attributes(),
		novablocks_get_content_padding_attributes(),
		novablocks_get_content_width_attributes(),
		novablocks_get_parallax_attributes()
	);
}

function novablocks_get_slideshow_attributes() {
	return array_merge(
		array(
			'galleryImages'         => array(
				'type'    => 'array',
				'items'   => [
					'type' => 'object',
				],
				'default' => array()
			),
			'slideshowType'         => array(
				'type'    => 'string',
				'default' => 'gallery'
			),
			'minHeight'             => array(
				'type'    => 'number',
				'default' => 75,
			),
		),
		novablocks_get_alignment_attributes(),
		novablocks_get_color_attributes(),
		novablocks_get_content_padding_attributes(),
		novablocks_get_content_width_attributes(),
		novablocks_get_parallax_attributes()
	);
}

function novablocks_get_google_map_attributes() {
	return array_merge(
		array(
			'align' => array(
				'type' => 'string',
				'default' => 'center',
			),
			'markers' => array(
				'type' => 'array',
				'default' => array(),
				'items' => array(
					'type' => array(),
				),
			),
			'pinColor' => array(
				'type' => 'string',
				'default' => '#222222',
			),
			'showControls' => array(
				'type' => 'boolean',
				'default' => false,
			),
			'showIcons' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'showLabels' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'styleData' => array(
				'type' => 'array',
				'default' => array(),
				'items' => array(
					'type' => array(),
				),
			),
			'styleSlug' => array(
				'type' => 'string',
				'default' => 'regular',
			),
			'zoom' => array(
				'type' => 'number',
				'default' => 17,
			),
		),
		novablocks_get_parallax_attributes()
	);
}

function novablocks_get_attributes_with_defaults( $attributes, $attributes_config ) {

    foreach ( $attributes_config as $key => $value ) {
	    if ( ! isset( $attributes[ $key ] ) ) {
		    $attributes[ $key ] = $attributes_config[ $key ][ 'default' ];
	    }
    }

    return $attributes;
}

function nova_blocks_register_meta() {

	register_meta( 'post', 'novablocks_hero_minimum_height', array(
		'type'         => 'number',
		'single'       => true,
		'show_in_rest' => true,
	) );

	register_meta( 'post', 'novablocks_hero_apply_minimum_height', array(
		'type'         => 'string',
		'single'       => true,
		'show_in_rest' => true,
	) );

	register_meta( 'post', 'novablocks_hero_scroll_indicator', array(
		'type'         => 'boolean',
		'single'       => true,
		'show_in_rest' => true,
	) );

	register_meta( 'post', 'novablocks_hero_position_indicators', array(
		'type'         => 'boolean',
		'single'       => true,
		'show_in_rest' => true,
	) );
}
add_action( 'init', 'nova_blocks_register_meta' );
