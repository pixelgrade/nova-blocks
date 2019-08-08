<?php
/**
 * Handle the Customify integration logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_filter( 'customify_filter_fields', 'novablocks_add_customify_section', 20, 1 );
add_filter( 'customify_filter_fields', 'novablocks_add_customify_style_manager_section', 20, 1 );

define( 'NOVABLOCKS_THEME_COLOR_PRIMARY', '#203AB6' ); // blue
define( 'NOVABLOCKS_THEME_COLOR_SECONDARY', '#FFE42E' ); // yellow
define( 'NOVABLOCKS_THEME_COLOR_TERTIARY', '#FFE42E' ); // yellow

define( 'NOVABLOCKS_THEME_DARK_PRIMARY', '#000043' ); // blue darker
define( 'NOVABLOCKS_THEME_DARK_SECONDARY', '#272743' ); // text color
define( 'NOVABLOCKS_THEME_DARK_TERTIARY', '#323067' ); // blue dark

define( 'NOVABLOCKS_THEME_LIGHT_PRIMARY', '#FFFFFF' ); // white
define( 'NOVABLOCKS_THEME_LIGHT_SECONDARY', '#EEF1F2' ); // gray
define( 'NOVABLOCKS_THEME_LIGHT_TERTIARY', '#EEF1F2' ); // gray

function novablocks_add_customify_section( $config ) {

	$nova_section = array(
		// Header
		'nova_section' => array(
			'title'   => esc_html__( 'Nova', '__plugin_txtd' ),
			'options' => array(
				'nova_color_1'       => array(
					'type'    => 'color',
					'live'    => true,
					'label'   => esc_html__( 'Nova Primary Color', '__plugin_txtd' ),
					'default' => NOVABLOCKS_THEME_COLOR_PRIMARY,
					'css'     => array(
						array(
							'selector' => ':root',
							'property' => '--nova-color-1',
						),
					),
				),
				'nova_color_2'       => array(
					'type'    => 'color',
					'live'    => true,
					'label'   => esc_html__( 'Nova Primary Color', '__plugin_txtd' ),
					'default' => NOVABLOCKS_THEME_COLOR_SECONDARY,
					'css'     => array(
						array(
							'selector' => ':root',
							'property' => '--nova-color-2',
						),
					),
				),
				'nova_color_3'       => array(
					'type'    => 'color',
					'live'    => true,
					'label'   => esc_html__( 'Nova Primary Color', '__plugin_txtd' ),
					'default' => NOVABLOCKS_THEME_COLOR_TERTIARY,
					'css'     => array(
						array(
							'selector' => ':root',
							'property' => '--nova-color-3',
						),
					),
				),
				'nova_color_dark_1'  => array(
					'type'    => 'color',
					'live'    => true,
					'label'   => esc_html__( 'Nova Primary Dark Color', '__plugin_txtd' ),
					'default' => NOVABLOCKS_THEME_DARK_PRIMARY,
					'css'     => array(
						array(
							'selector' => ':root',
							'property' => '--nova-dark-1',
						),
					),
				),
				'nova_color_dark_2'  => array(
					'type'    => 'color',
					'live'    => true,
					'label'   => esc_html__( 'Nova Secondary Dark Color', '__plugin_txtd' ),
					'default' => NOVABLOCKS_THEME_DARK_SECONDARY,
					'css'     => array(
						array(
							'selector' => ':root',
							'property' => '--nova-dark-2',
						),
					),
				),
				'nova_color_dark_3'  => array(
					'type'    => 'color',
					'live'    => true,
					'label'   => esc_html__( 'Nova Tertiary Dark Color', '__plugin_txtd' ),
					'default' => NOVABLOCKS_THEME_DARK_TERTIARY,
					'css'     => array(
						array(
							'selector' => ':root',
							'property' => '--nova-dark-3',
						),
					),
				),
				'nova_color_light_1' => array(
					'type'    => 'color',
					'live'    => true,
					'label'   => esc_html__( 'Nova Primary Light Color', '__plugin_txtd' ),
					'default' => NOVABLOCKS_THEME_LIGHT_PRIMARY,
					'css'     => array(
						array(
							'selector' => ':root',
							'property' => '--nova-light-1',
						),
					),
				),
				'nova_color_light_2' => array(
					'type'    => 'color',
					'live'    => true,
					'label'   => esc_html__( 'Nova Secondary Light Color', '__plugin_txtd' ),
					'default' => NOVABLOCKS_THEME_LIGHT_SECONDARY,
					'css'     => array(
						array(
							'selector' => ':root',
							'property' => '--nova-light-2',
						),
					),
				),
				'nova_color_light_3' => array(
					'type'    => 'color',
					'live'    => true,
					'label'   => esc_html__( 'Nova Tertiary Light Color', '__plugin_txtd' ),
					'default' => NOVABLOCKS_THEME_LIGHT_TERTIARY,
					'css'     => array(
						array(
							'selector' => ':root',
							'property' => '--nova-light-3',
						),
					),
				),
			),
		),
	);


	// make sure we are in good working order
	if ( empty( $config['sections'] ) ) {
		$config['sections'] = array();
	}

	// append the header section
	$config['sections'] = $config['sections'] + $nova_section;

	return $config;
}

function novablocks_add_customify_style_manager_section( $options ) {

	if ( ! isset( $options['sections']['style_manager_section'] ) ) {
		$options['sections']['style_manager_section'] = array();
	}

	// The section might be already defined, thus we merge, not replace the entire section config.
	$options['sections']['style_manager_section'] = Customify_Array::array_merge_recursive_distinct( $options['sections']['style_manager_section'], array(
			'options' => array(
				'sm_color_primary'   => array(
					'default'          => NOVABLOCKS_THEME_COLOR_PRIMARY,
					'connected_fields' => array(
						'nova_color_1'
					),
				),
				'sm_color_secondary' => array(
					'default'          => NOVABLOCKS_THEME_COLOR_PRIMARY,
					'connected_fields' => array(
						'nova_color_2'
					),
				),
				'sm_color_tertiary'  => array(
					'default'          => NOVABLOCKS_THEME_COLOR_PRIMARY,
					'connected_fields' => array(
						'nova_color_3'
					),
				),
				'sm_dark_primary'    => array(
					'default'          => NOVABLOCKS_THEME_DARK_PRIMARY,
					'connected_fields' => array(
						'nova_color_dark_1'
					),
				),
				'sm_dark_secondary'  => array(
					'default'          => NOVABLOCKS_THEME_DARK_SECONDARY,
					'connected_fields' => array(
						'nova_color_dark_2'
					),
				),
				'sm_dark_tertiary'   => array(
					'default'          => NOVABLOCKS_THEME_DARK_TERTIARY,
					'connected_fields' => array(
						'nova_color_dark_3'
					),
				),
				'sm_light_primary'   => array(
					'default'          => NOVABLOCKS_THEME_LIGHT_PRIMARY,
					'connected_fields' => array(
						'nova_color_light_1'
					),
				),
				'sm_light_secondary' => array(
					'default'          => NOVABLOCKS_THEME_LIGHT_SECONDARY,
					'connected_fields' => array(
						'nova_color_light_2'
					),
				),
				'sm_light_tertiary'  => array(
					'default'          => NOVABLOCKS_THEME_LIGHT_TERTIARY,
					'connected_fields' => array(
						'nova_color_light_3'
					),
				),
			),
		)
	);

	return $options;
}
