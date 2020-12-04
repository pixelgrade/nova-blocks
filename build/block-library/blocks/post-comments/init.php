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
				<?php echo NovaBlocks_Comments::conversation_starter_block();?>
				<h3 class="novablocks-conversations__header">
					<?php
						$comments_count = number_format_i18n( get_comments_number( $post->ID ) );
						$conversation_title = 'Start a conversation';

						if( $comments_count > 0 ) {
							$conversation_title = 'Conversations';
						}
					?>
					<span class="novablocks-conversations__title">
						<?php esc_html_e( $conversation_title, '__plugin_txtd') ?>
					</span>
					<?php if( $comments_count > 0 ) {  ?>
						<span class="novablocks-conversations__comments-count">
							<?php  printf( _nx( 'One Comment', '%1$s Comments', get_comments_number(), 'comments title', '__plugin_txtd' ), $comments_count ); ?>
						</span>
					<?php } ?>
				</h3>
				<?php echo $content; ?>
			</div>
		</div>
		<?php

		return ob_get_clean();
	}
}
