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
		$classes[] = 'nova-u-valign-' . $attributes['verticalAlignment'];
	}

	if ( ! empty( $attributes['horizontalAlignment'] ) ) {
		$classes[] = 'nova-u-halign-' . $attributes['horizontalAlignment'];
	}

	if ( ! empty( $attributes['contentPadding'] ) ) {
		$classes[] = 'nova-u-spacing-' . $attributes['contentPadding'];
	}

	if ( ! empty( $attributes['contentWidth'] ) ) {
		$classes[] = 'nova-u-content-width-' . $attributes['contentWidth'];
	}

	$classes[] = 'nova-u-background';
	if ( ! empty( $attributes['overlayFilterStyle'] ) ) {
		$classes[] = 'nova-u-background-' . $attributes['overlayFilterStyle'];
	}

	if ( ! novablocks_is_parallax_enabled( $attributes ) ) {
		$classes[] = 'has-parallax';
	}

	return $classes;
}


