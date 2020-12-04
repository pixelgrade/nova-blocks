<?php

require_once __DIR__ . '/vendor/autoload.php';

use Heise\Shariff\Backend;

/**
 * Demo Application using Shariff Backend
 */
class NovaBlocks_Shariff_Backend {
	/**
	 * Sample configuration
	 *
	 * @var array
	 */
	private static $configuration = [
		'cache'    => [
			'ttl' => 60
		],
		'domains' => [

		],
		'services' => [
//			'Facebook',
			'Reddit',
			'StumbleUpon',
			'Flattr',
			'Pinterest',
			'Xing',
			'AddThis',
			'Buffer',
			'Vk'
		]
	];

	public static function init() {
		add_action( 'wp_ajax_handle_shariff_request', 'NovaBlocks_Shariff_Backend::handle_shariff_ajax_call' );
		add_action( 'wp_ajax_nopriv_handle_shariff_request', 'NovaBlocks_Shariff_Backend::handle_shariff_ajax_call' );
	}

	public static function handle_shariff_ajax_call() {
		$url = isset( $_POST['url'] ) ? $_POST['url'] : '';

		if ( $url ) {
			$shariff = new Backend( self::$configuration );
			$response = $shariff->get( $url );
		} else {
			$response = null;
		}

		echo json_encode( $response );

		die;
	}
}

NovaBlocks_Shariff_Backend::init();
