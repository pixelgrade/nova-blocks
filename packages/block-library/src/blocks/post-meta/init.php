<?php
/**
 * Handle the Post Meta block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_post_meta_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/post-meta/attributes.json',
		'packages/block-editor/src/filters/with-space-and-sizing/attributes.json',
	] );

}

if ( ! function_exists( 'novablocks_render_post_meta_block' ) ) {

	/**
	 * Entry point to render the block with the given attributes, content, and context.
	 *
	 * @see \WP_Block::render()
	 *
	 * @param array    $attributes
	 * @param string   $content
	 * @param WP_Block $block
	 *
	 * @return false|string
	 */
	function novablocks_render_post_meta_block( array $attributes, string $content, WP_Block $block ) {

		// Maybe enqueue frontend-only scripts.
		novablocks_maybe_enqueue_block_frontend_scripts( $block );

		$attributes_config = novablocks_get_post_meta_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );
		$cssProps          = novablocks_get_space_and_sizing_css( $attributes );

		// We assume we are in some sort of preview context (like in the Site Editor).
		if ( empty( $block->context['postId'] ) ) {
			return esc_html__( 'Post meta', '__plugin_txtd' );
		}

		$post = get_post( $block->context['postId'] );
		if ( empty( $post ) ) {
			return '';
		}

		$author_id = get_the_author_meta( 'ID', $post->post_author );
		$author    = get_userdata( $author_id );
		if ( empty( $author ) ) {
			return '';
		}

		ob_start(); ?>

		<div class="c-meta" style="<?php echo join( '; ', $cssProps ); ?>">
			<?php
			$author_email     = $author->user_email;
			$avatar_url       = get_avatar_url( $author_email, [ 'size' => 100, 'default' => 'identicon' ] );
			$avatar           = get_avatar( $author_email, '80', 'identicon' );
			$min_reading_time = novablocks_get_post_reading_time_in_minutes( $post, 280 );

			$byline = sprintf(
				__( '%s', '__theme_txtd' ),
				'<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( $author_id ) ) . '">' . $author->display_name . '</a></span>'
			);

			?>
			<div class="c-meta__authorship">
				<div class="c-meta-author" itemscope="" itemtype="http://schema.org/Person">
					<?php if ( ! empty( $avatar_url ) ) { ?>
						<div class="c-meta-author__avatar">
							<meta itemprop="image" content="<?php echo esc_url( $avatar_url ); ?>"/>
							<div class="c-meta-author__avatar-wrapper">
								<?php echo $avatar; ?>
							</div>
						</div>
					<?php } ?>
					<div class="c-meta-author__body">
						<div class="c-meta__rows">
							<div class="c-meta__row">
								<div class="c-meta__row-item">
									<?php echo $byline ?>
								</div>
							</div>
							<div class="c-meta__row c-meta__row--secondary">
								<div class="c-meta__row-item"><?php echo get_the_date( '', $post ); ?></div>
								<div class="c-meta__row-item">
									<?php
									printf( __( '%s min read', '__theme_txtd' ), $min_reading_time );
									?>
								</div>
							</div> <!-- .c-meta__row--secondary -->
						</div>
					</div>  <!-- .c-meta-author__body -->
				</div> <!-- .c-meta-author -->
			</div> <!-- .c-meta__authorship -->

			<div class="c-meta__social">
				<div class="c-meta__rows">
					<div class="c-meta__row">
						<div class="c-meta__row-item">
							<?php echo do_blocks( '<!-- wp:novablocks/sharing-overlay { "buttonLabel":"' . esc_html__( 'Share', '__theme_txtd' ) . '", "useSourceColorAsReference":"1" } --><!-- /wp:novablocks/sharing-overlay -->' ); ?>
						</div>
						<?php
						// Only show the Discuss link if comments are open and the post comments block is present.
						global $_wp_current_template_content;
						if ( comments_open( $post->ID ) &&
						     ! empty( $_wp_current_template_content ) &&
				             has_block( 'novablocks/post-comments', $_wp_current_template_content )
						) {
							$comments_count = get_comments_number( $post->ID );
							?>
							<div class="c-meta__row-item">
								<div class="c-meta-comments">
									<div class="c-meta-comments__count">
										<div
											class="c-meta-comments__count-text"><?php echo $comments_count ? $comments_count : '&nbsp;'; ?></div>
										<div class="c-meta-comments__arrow"></div>
									</div>
									<div class="c-meta-comments__label">
										<a class="c-meta-comments__link"><?php echo esc_html__( 'Discuss', '__theme_txtd' ); ?></a>
									</div>
									<a class="c-button__link" href="#comments"></a>
								</div>
							</div>
						<?php } ?>
					</div>
				</div><!-- .c-meta__rows -->
			</div><!-- .c-meta__social -->

		</div> <!-- .c-meta -->

		<?php return ob_get_clean();
	}
}
