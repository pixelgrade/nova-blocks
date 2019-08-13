<?php

global $post;

function novablocks_settings_init() {

    $nova_editor_settings = array(
        'media' => array(
            'contentAreaOptions' => array(
                array(
                    'label' => __( 'Basic', '__plugin_txtd' ),
                    'value' => 'basic',
                ),
                array(
                    'label' => __( 'Moderate', '__plugin_txtd' ),
                    'value' => 'moderate',
                ),
                array(
                    'label' => __( 'Highlighted', '__plugin_txtd' ),
                    'value' => 'highlighted',
                ),
            ),
            'blockAreaOptions' => array(
                array(
                    'label' => __( 'Basic', '__plugin_txtd' ),
                    'value' => 'basic',
                ),
                array(
                    'label' => __( 'Moderate', '__plugin_txtd' ),
                    'value' => 'moderate',
                ),
                array(
                    'label' => __( 'Highlighted', '__plugin_txtd' ),
                    'value' => 'highlighted',
                ),
            )
        ),
	    'slideshow' => array(
	    	'minHeightOptions' => array(
				array(
					'label' => __( 'Auto', '__plugin_txtd' ),
					'value' => 0,
				),
				array(
					'label' => __( 'Half', '__plugin_txtd' ),
					'value' => 50,
				),
				array(
					'label' => __( 'Two Thirds', '__plugin_txtd' ),
					'value' => 66,
				),
				array(
					'label' => __( 'Three Quarters', '__plugin_txtd' ),
					'value' => 75,
				),
				array(
					'label' => __( 'Full Height', '__plugin_txtd' ),
					'value' => 100,
			    ),
			),
		),
    );

    $nova_editor_settings = apply_filters( 'novablocks_block_editor_settings', $nova_editor_settings, $post );

    $script = <<<JS
    ( function() {
        wp.domReady( function() {
            wp.novaBlocks.initialize( '%s' );
        } );
    } )();
JS;

    wp_add_inline_script( 'nova-blocks-js', sprintf( $script, json_encode( $nova_editor_settings ) ) );

}


add_action( 'admin_init', 'novablocks_settings_init', 11 );
