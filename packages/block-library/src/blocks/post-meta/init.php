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

if ( ! function_exists( 'novablocks_post_meta_discuss_anchor' ) ) {

	/**
	 * The anchor Discuss should link to for the current template, or '' when
	 * the template renders nothing Discuss can point at (#665, follow-up
	 * #666-style fix, #673 follow-up).
	 *
	 * Nova's own `novablocks/post-comments` wraps unconditionally in
	 * `id="comments"` whenever it renders anything at all — the only case it
	 * renders nothing is comments closed with zero comments and no custom
	 * "closed" message, which is covered below. Core's Comments Title (nested
	 * in `core/comments`) is different: it prints `id="comments"` only when
	 * `get_comments_number()` is non-zero (see core's
	 * `render_block_core_comments_title()`) — with zero comments that anchor
	 * simply doesn't exist on the page (#673).
	 *
	 * When there are no comments yet, Discuss should target the comment
	 * form's own `id="respond"` instead (`comment_form()`'s `comment-respond`
	 * container), but only when that form will actually render — `comment_form()`
	 * prints nothing at all when comments are closed.
	 *
	 * @param string       $template_content
	 * @param WP_Post|null $post
	 *
	 * @return string 'comments', 'respond', or '' when neither target exists.
	 */
	function novablocks_post_meta_discuss_anchor( $template_content, $post ) {

		if ( empty( $template_content ) || empty( $post ) ) {
			return '';
		}

		$is_open        = comments_open( $post->ID );
		$comments_count = (int) get_comments_number( $post->ID );

		if ( has_block( 'novablocks/post-comments', $template_content ) ) {
			return ( $is_open || $comments_count > 0 ) ? 'comments' : '';
		}

		$has_core_comments = has_block( 'core/comments', $template_content );

		if ( $has_core_comments && $comments_count > 0 ) {
			return 'comments';
		}

		if ( $is_open && ( $has_core_comments || has_block( 'core/post-comments-form', $template_content ) ) ) {
			return 'respond';
		}

		return '';
	}
}

if ( ! function_exists( 'novablocks_get_post_meta_avatar_size_css' ) ) {

	/**
	 * Build the avatar-size CSS custom properties for the given attributes
	 * (#665). The `medium` step is the pre-existing 2em / 2.6em size, so it
	 * emits nothing — the SCSS fallback already renders it, keeping existing
	 * blocks byte-identical.
	 *
	 * @param array $attributes
	 *
	 * @return string[]
	 */
	function novablocks_get_post_meta_avatar_size_css( array $attributes ) {

		$sizes = [
			'small' => [ '1.5em', '2em' ],
			'large' => [ '3em', '4.1em' ],
		];

		$avatar_size = $attributes['avatarSize'] ?? 'medium';

		if ( ! is_string( $avatar_size ) || ! isset( $sizes[ $avatar_size ] ) ) {
			return [];
		}

		[ $base, $above_lap ] = $sizes[ $avatar_size ];

		return [
			'--nb-meta-avatar-size: ' . $base,
			'--nb-meta-avatar-size--lap: ' . $above_lap,
		];
	}
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
		$cssProps          = array_merge(
			novablocks_get_space_and_sizing_css( $attributes ),
			novablocks_get_post_meta_avatar_size_css( $attributes )
		);

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

		<div <?php echo get_block_wrapper_attributes( [
			'class' => 'c-meta',
			'style' => join( '; ', $cssProps ),
		] ); ?>>
			<?php
			$author_email     = $author->user_email;
			$avatar_url       = get_avatar_url( $author_email, [ 'size' => 96, 'default' => 'identicon' ] );
			$avatar           = get_avatar( $author_email, 80, 'identicon' );
			$min_reading_time = novablocks_get_post_reading_time_in_minutes( $post, 280 );

			$byline = sprintf(
				/* translators: %s: The post author name linked (byline).  */
				__( '%s', '__plugin_txtd' ),
				'<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( $author_id ) ) . '">' . esc_html( $author->display_name ) . '</a></span>'
			);

			?>
			<div class="c-meta__authorship">
				<div class="c-meta-author" itemscope="" itemtype="https://schema.org/Person">
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
									printf( __( '%s min read', '__plugin_txtd' ), $min_reading_time );
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
							<?php echo do_blocks( '<!-- wp:novablocks/sharing-overlay { "buttonLabel":"' . esc_html__( 'Share', '__plugin_txtd' ) . '", "useSourceColorAsReference":"1" } --><!-- /wp:novablocks/sharing-overlay -->' ); ?>
						</div>
						<?php
						// Only show the Discuss link if the template renders a comments
						// UI (Nova's own, or core's) it can actually link to (#665, #673),
						// pointing it at whichever anchor that UI actually renders —
						// comments_open() and the post's comment count are folded into
						// that decision already.
						global $_wp_current_template_content;
						$discuss_anchor = novablocks_post_meta_discuss_anchor( $_wp_current_template_content, $post );
						if ( '' !== $discuss_anchor ) {
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
										<a class="c-meta-comments__link"><?php echo esc_html__( 'Discuss', '__plugin_txtd' ); ?></a>
									</div>
									<a class="c-button__link" href="#<?php echo esc_attr( $discuss_anchor ); ?>"></a>
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
