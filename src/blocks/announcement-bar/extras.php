<?php

if ( ! function_exists( 'novablocks_get_announcement_bar_attributes') ) {
	function novablocks_get_announcement_bar_attributes() {
		return array(
			'align' => array(
				'type' => 'string',
				'default' => 'full',
			),
			'url' => array(
				'type' => 'string',
				'default' => '',
			),
			'opensInNewTab' => array(
				'type' => 'boolean',
				'default' => false,
			)
		);
	}
}
