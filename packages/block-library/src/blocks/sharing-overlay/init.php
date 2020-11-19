<?php
/**
 * Handle the Sharing Overlay block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_render_sharing_overlay_block' ) ) {

	function novablocks_render_sharing_overlay_block( $attributes, $content ) {

		ob_start(); ?>

		<div class="wp-block-buttons">
			<div class="wp-block-button">
				<a class="wp-block-button__link js-sharing-overlay-trigger">
					<?php _e( 'View sharing options', '__plugin_txtd' ); ?>
				</a>
			</div>
		</div>

		<div class="js-sharing">

		</div>

		<?php return ob_get_clean();

	}
}
