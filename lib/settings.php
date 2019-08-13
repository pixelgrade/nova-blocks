<?php

global $post;

function novablocks_settings_init() {

    $nova_editor_settings = array(
        'media' => array(
            'content-area-options' => array(
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
            'block-area-options' => array(
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
        )
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
