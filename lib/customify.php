<?php

//add_filter( 'customify_filter_fields', 'nova_add_customify_options', 21, 1 );
add_filter( 'customify_filter_fields', 'nova_add_customify_section', 30, 2 );
add_filter( 'customify_filter_fields', 'nova_add_customify_style_manager_section', 32, 1 );

function nova_add_customify_options( $options ) {
	$options['opt-name'] = 'nova_options';

	//start with a clean slate - no Customify default sections
	$options['sections'] = array();

	return $options;
}

define( 'THEME_COLOR_PRIMARY', '#203AB6' ); // nova blue
define( 'THEME_COLOR_SECONDARY', '#FFE42E' ); // nova yellow
define( 'THEME_COLOR_TERTIARY', '#FFE42E' ); // nova yellow

define( 'THEME_DARK_PRIMARY', '#000043' ); // nova blue darker
define( 'THEME_DARK_SECONDARY', '#272743' ); // nova text color
define( 'THEME_DARK_TERTIARY', '#323067' ); // nova blue dark

define( 'THEME_LIGHT_PRIMARY', '#FFFFFF' );
define( 'THEME_LIGHT_SECONDARY', '#EEF1F2' ); // nova gray
define( 'THEME_LIGHT_TERTIARY', '#EEF1F2' ); // nova gray

function nova_add_customify_section( $config ) {

	$nova_section = array(
		// Header
		'nova_section' => array(
			'title'   => esc_html__( 'Nova', '__components_txtd' ),
			'options' => array(
				'nova_color_1'       => array(
					'type'    => 'color',
					'live'    => true,
					'label'   => esc_html__( 'Nova Primary Color', '__plugin_txtd' ),
					'default' => THEME_COLOR_PRIMARY,
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
					'default' => THEME_COLOR_SECONDARY,
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
					'default' => THEME_COLOR_TERTIARY,
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
					'default' => THEME_DARK_PRIMARY,
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
					'default' => THEME_DARK_SECONDARY,
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
					'default' => THEME_DARK_TERTIARY,
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
					'default' => THEME_LIGHT_PRIMARY,
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
					'default' => THEME_LIGHT_SECONDARY,
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
					'default' => THEME_LIGHT_TERTIARY,
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

function nova_add_customify_style_manager_section( $options ) {

	if ( ! isset( $options['sections']['style_manager_section'] ) ) {
		$options['sections']['style_manager_section'] = array();
	}

	// The section might be already defined, thus we merge, not replace the entire section config.
	$options['sections']['style_manager_section'] = Pixelgrade_Config::merge( $options['sections']['style_manager_section'], array(
			'options' => array(
				'sm_color_primary'   => array(
					'default'          => THEME_COLOR_PRIMARY,
					'connected_fields' => array(
						'nova_color_1'
					),
				),
				'sm_color_secondary' => array(
					'default'          => THEME_COLOR_PRIMARY,
					'connected_fields' => array(
						'nova_color_2'
					),
				),
				'sm_color_tertiary'  => array(
					'default'          => THEME_COLOR_PRIMARY,
					'connected_fields' => array(
						'nova_color_3'
					),
				),
				'sm_dark_primary'    => array(
					'default'          => THEME_DARK_PRIMARY,
					'connected_fields' => array(
						'nova_color_dark_1'
					),
				),
				'sm_dark_secondary'  => array(
					'default'          => THEME_DARK_SECONDARY,
					'connected_fields' => array(
						'nova_color_dark_2'
					),
				),
				'sm_dark_tertiary'   => array(
					'default'          => THEME_DARK_TERTIARY,
					'connected_fields' => array(
						'nova_color_dark_3'
					),
				),
				'sm_light_primary'   => array(
					'default'          => THEME_LIGHT_PRIMARY,
					'connected_fields' => array(
						'nova_color_light_1'
					),
				),
				'sm_light_secondary' => array(
					'default'          => THEME_LIGHT_SECONDARY,
					'connected_fields' => array(
						'nova_color_light_2'
					),
				),
				'sm_light_tertiary'  => array(
					'default'          => THEME_LIGHT_TERTIARY,
					'connected_fields' => array(
						'nova_color_light_3'
					),
				),
			),
		)
	);

	return $options;
}
