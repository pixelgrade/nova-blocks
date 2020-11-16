<?php
/**
 * Handle Post Comments block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists ('novablocks_render_post_comments_block' ) ) {
	function novablocks_render_post_comments_block($attributes, $content, $block) { ?>
		<div class="novablocks-conversations">
			<div class="novablocks-conversations__container">
				<div class="novablocks-conversations__title"><?php _e('Conversations', '__plugin_txtd') ?></div>
				<?php return $content; ?>
			</div>
		</div>
	<?php }
}
