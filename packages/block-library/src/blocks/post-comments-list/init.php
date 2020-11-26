<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists('novablocks_render_post_comments_list_block' ) ) {
	function novablocks_render_post_comments_list_block( $attributes, $content, $block ) {

		if ( empty( $block->context[ 'postId' ] ) ) {
			return '';
		}

		$comments = get_comments( array(
			'post_id' => absint( $block->context[ 'postId' ] ),
		) );

		if ( empty( $comments ) ) {
			return '';
		}

		ob_start(); ?>
		<div class="comment-list">
			<?php wp_list_comments( array(
				'walker'      => new NovaBlocks_Walker_Comment(),
				'avatar_size' => 120,
				'style'      	=> 'div',
				'short_ping' 	=> true,
			), $comments ); ?>
		</div>

		<?php if ( comments_open() && get_comments_number() >= 5 ) {
			comment_form( NovaBlocks_Comments::get_comment_form_args() );
		}

		return ob_get_clean();
	}
}
