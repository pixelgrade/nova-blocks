<?php

if ( ! function_exists( 'novablocks_get_announcement_bar_attributes') ) {
	function novablocks_get_announcement_bar_attributes() {
		return array(
			'content' => array(
				'type' => 'string',
				'default' => '<b>Find me on Instagram!</b> New photos and interesting facts every day.',
			),
			'url' => array(
				'type' => 'string',
				'default' => '',
			),
			'opensInNewTab' => array(
				'type' => 'boolean',
				'default' => false,
			),
		);
	}
}
