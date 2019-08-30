<?php

function novablocks_settings_init() {
	global $post;

    $nova_editor_settings = array(
    	'hero' => array(
    		'template' => array(
			    array(
			        'core/heading',
				    array(
				        'content' => 'This is a catchy title',
					    'align' => 'center',
					    'level' => 1,
				    ),
			    ),
				array(
					'core/paragraph',
					array(
						'content' => 'A brilliant subtitle to explain its catchiness',
						'align' => 'center',
					),
				),
				array(
					'core/button',
					array(
						'text' => 'Discover more',
						'align' => 'center',
					),
			    ),
			),
	    ),
        'media' => array(
        	'template' => array(
		        array(
		        	'core/heading',
			        array(
			        	'content' => 'Shoot for the moon, Even if You Miss it',
				        'level' => 4,
					),
		        ),
				array(
					'core/heading',
					array(
						'content' => 'Welcome to our planet, look and feel matters!',
						'level' => 2,
					),
		        ),
				array(
					'core/paragraph',
					array(
						'content' => "We've always defined ourselves by the ability to overcome the impossible. And we count these moments. These moments when we dare to aim higher, to break barriers, to reach for the stars, to make the unknown known.",
					),
				),
				array(
					'core/button',
					array(
						'text' => 'Discover More'
					),
				),
	        ),
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
	    	'defaultImages' => array(
				array(
					'url' => 'https://source.unsplash.com/_nqApgG-QrY/1600x900',
					'id' => - 1,
					'sizes' => array(
						'thumbnail' => array(
							'url' => 'https://source.unsplash.com/_nqApgG-QrY/150x150',
						),
						'large' => array(
							'url' => 'https://source.unsplash.com/_nqApgG-QrY/1600x900',
							"width" => 1600,
							"height" => 900
						),
					),
				),
				array(
					'url' => 'https://source.unsplash.com/Gt_4iMB7hY0/1600x900',
					'alt' => 'This is a catchy image title',
					'caption' => 'A brilliant caption to explain its catchiness',
					'id' => - 2,
					'sizes' => array(
						'thumbnail' => array(
							'url' => 'https://source.unsplash.com/Gt_4iMB7hY0/150x150',
						),
						'large' => array(
							'url' => 'https://source.unsplash.com/Gt_4iMB7hY0/1600x900',
							'width' => 1600,
							'height' => 900,
						),
					),
				),
				array(
					'url' => 'https://source.unsplash.com/1vKTnwLMdqs/1600x900',
					'id' => - 3,
					'sizes' => array(
						'thumbnail' => array(
							'url' => 'https://source.unsplash.com/1vKTnwLMdqs/150x150',
						),
						'large' => array(
							'url' => 'https://source.unsplash.com/1vKTnwLMdqs/1600x900',
							'width' => 1600,
							'height' => 900,
						),
					),
				),
			),
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
	    'applyMinimumHeightOptions' => array(
            array(
            	'label' => __( 'None', '__plugin_txtd' ),
	            'value' => 'none',
            ),
			array(
				'label' => __( 'First Hero Block Only', '__plugin_txtd' ),
				'value' => 'first',
			),
			array(
				'label' => __( 'All Hero Blocks', '__plugin_txtd' ),
				'value' => 'all',
			),
	    ),
	    'minimumHeightOptions' => array(
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
				'label' => __( 'Full', '__plugin_txtd' ),
				'value' => 100,
			),
	    ),
	    'contentPaddingOptions' => array(
			array(
				'label' => __( 'Small', '__plugin_txtd' ),
				'value' => 'small',
			),
			array(
				'label' => __( 'Medium', '__plugin_txtd' ),
				'value' => 'medium',
			),
			array(
				'label' => __( 'Large', '__plugin_txtd' ),
				'value' => 'large',
			),
			array(
				'label' => __( 'Custom', '__plugin_txtd' ),
				'value' => 'custom',
			),
	    ),
	    'contentWidthOptions' => array(
            array(
            	'label' => __( 'Full', '__plugin_txtd' ),
	            'value' => 'full',
            ),
			array(
				'label' => __( 'Large', '__plugin_txtd' ),
				'value' => 'large',
			),
			array(
				'label' => __( 'Narrow', '__plugin_txtd' ),
				'value' => 'narrow',
			),
			array(
				'label' => __( 'Custom', '__plugin_txtd' ),
				'value' => 'custom',
			),
	    ),
	    'parallaxOptions' => array(
			array(
				'label' => __( 'Fast as Mercure', '__plugin_txtd' ),
				'value' => '20'
			),
			array(
				'label' => __( 'Natural as Earth', '__plugin_txtd' ),
				'value' => '50'
			),
			array(
				'label' => __( 'Slow as Neptune', '__plugin_txtd' ),
				'value' => '70'
			),
			array(
				'label' => __( 'Custom', '__plugin_txtd' ),
				'value' => 'custom'
			),
		),
    );

	list( $color_palette, ) = (array) get_theme_support( 'editor-color-palette' );

	if ( false !== $color_palette ) {
		$nova_editor_settings['colors'] = $color_palette;
	}

    $nova_editor_settings = apply_filters( 'novablocks_block_editor_settings', $nova_editor_settings, $post );

    $script = <<<JS
    ( function() {
        wp.domReady( function() {
            wp.novaBlocks.initialize( %s );
        } );
    } )();
JS;

    wp_add_inline_script( 'nova-blocks-js', sprintf( $script, wp_json_encode( $nova_editor_settings ) ) );

}


add_action( 'admin_init', 'novablocks_settings_init', 11 );
