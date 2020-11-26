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
				<h3 class="novablocks-conversations__header">
					<span class="novablocks-conversations__title">
						<?php _e('Conversations', '__plugin_txtd') ?>
					</span>
					<span class="novablocks-conversations__comments-count">
						<?php
						$comments_count = number_format_i18n( get_comments_number( $post->ID ) );
						if ( $comments_count > 0 ) {
							printf( _nx( 'One Comment', '%1$s Comments', get_comments_number(), 'comments title', '__plugin_txtd' ), $comments_count );
						} else {
							_e( 'No Comments' );
						}
						?>
					</span>
				</h3>
				<?php echo $content; ?>
			</div>
		</div>
		<?php

		return ob_get_clean();
	}
}
