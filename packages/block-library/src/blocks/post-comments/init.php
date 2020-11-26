<?php
/**
 * Handle Post Comments block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists ('novablocks_render_post_comments_block' ) ) {
	function novablocks_render_post_comments_block($attributes, $content, $block) {
		global $post;

		ob_start();
		?>
		<div class="novablocks-conversations">
			<div class="novablocks-conversations__container">
				<div class="novablocks-conversations__title">
					<?php _e('Conversations', '__plugin_txtd') ?>
					<sup><?php echo get_comments_number($post->ID); ?></sup>
				</div>
				<?php echo $content; ?>
			</div>
		</div>
		<?php

		return ob_get_clean();
	}
}
