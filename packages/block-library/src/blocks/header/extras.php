<?php

if ( ! function_exists('get_header_row_block' ) ) {

	/**
	 * Get the Header Row based on attributes.
	 *
	 * @param $row_type
	 * @param $row_type_value
	 *
	 * @return array
	 */

	function get_header_row_block( $row_type, $row_type_value ): array {

		$post = get_block_area_post( 'header' );

		$block = [];

		if ( empty( $post->post_content ) || ! has_blocks( $post->post_content ) ) {
			return $block;
		}

		// Get all blocks inside Block Area;
		$blocks = parse_blocks( $post->post_content );
		$header_block = reset( $blocks );
		if ( empty( $header_block['innerBlocks'] ) ) {
			return $block;
		}

		// Get InnerBlocks
		foreach ( $header_block['innerBlocks'] as $inner_block ) {

			// Select InnerBlock which match Sticky Row attribute.
			// Stop at first.
			if ( isset( $inner_block['attrs'][$row_type] ) && $inner_block['attrs'][$row_type] === $row_type_value ) {
				return $inner_block;
			}
		}

		return $block;
	}
}

if ( ! function_exists('header_block_updated') ) {

	/**
	 * Check if Header Blocks is using Header Rows.
	 *
	 * @return bool
	 */

	function header_block_updated(): bool {

		$post = get_block_area_post( 'header' );

		if ( ! empty( $post->post_content ) && has_blocks( $post->post_content ) ) {

			if ( has_block( 'novablocks/header-row', $post ) ) {
				return true;
			}
		}

		return false;
	}
}

if ( ! function_exists('get_block_area_post') ) {

	/**
	 * Helper function to get Block Area Post.
	 *
	 * @param string $slug
	 *
	 * @return object
	 */

	function get_block_area_post( string $slug ) {

		$block_area = get_posts( [
			'name'        => $slug,
			'post_type'   => 'block_area',
			'post_status' => 'publish',
			'numberposts' => 1,
			'fields'      => 'ids',
		] );

		// Header Block Area ID.
		$block_area_id = $block_area[0];

		// Header Block Area Post.
		return get_post( $block_area_id );
	}
}

if ( ! function_exists('render_reading_bar') ) {

	/**
	 * Render Reading Bar and Reading Progress
	 */

	function render_reading_bar(): string {

		// We want to show Reading Bar
		// only on Posts.
		if ( ! is_singular('post') ) {
			return '';
		}

		ob_start(); ?>
		<!--Reading Bar-->
		<div class="c-reading-bar  js-reading-bar  u-header-sides-spacing">

			<!--Menu Button-->
			<div class="c-reading-bar__wrapper-menu-trigger">
				<?php if ( has_nav_menu( 'primary' ) ) { ?>
					<div class="wp-block-buttons">
						<div class="wp-block-button">
							<a class="wp-block-button__link c-reading-bar__menu-trigger  js-sticky-menu-trigger">
								<span class="novablocks-menu__button-label"><?php esc_html_e( 'Menu', '__plugin_txtd' ); ?></span>
							</a>
						</div>
					</div>
				<?php } ?>
			</div>

			<!--Reading/Next Article-->
			<?php
			$next_post = get_next_post();
			if ( ! empty( $next_post ) && ! is_wp_error( $next_post ) ): ?>
				<div class="c-reading-bar__wrapper-title  c-reading-bar__wrapper-title--next">
					<label class="post-title__label"><?php esc_html_e( 'Next:', '__plugin_txtd' ); ?></label>
					<a class="post-title__post-name" href="<?php the_permalink( $next_post ); ?>">
						<?php echo get_the_title( $next_post ); ?>
					</a>
				</div><!-- .c-reading-bar__wrapper-title -->
			<?php endif; ?>
			<div class="c-reading-bar__wrapper-title  c-reading-bar__wrapper-title--current">
				<label class="post-title__label"><?php esc_html_e( 'Reading:', '__plugin_txtd' ); ?></label>
				<?php the_title( '<span class="post-title__post-name">', '</span>' ); ?>
			</div><!-- .c-reading-bar__wrapper-title -->

			<!--Share Button-->
			<div class="c-reading-bar__wrapper-social">
				<?php echo do_blocks( '<!-- wp:novablocks/sharing-overlay {"buttonLabel":"Share", "useSourceColorAsReference":"1", "paletteVariation":"1"}  /-->' ); ?>
			</div><!-- .c-reading-bar__wrapper-social -->
		</div><!-- .c-reading-bar -->

		<!--Reading Progress Bar-->
		<progress class="c-reading-progress  js-reading-progress"></progress>
		<?php

		return ob_get_clean();
	}
}
