<?php

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

	function get_reading_bar_markup(): string {

		ob_start();
		if ( has_nav_menu( 'primary' ) ) { ?>
			<div class="wp-block-buttons">
				<div class="wp-block-button">
					<a class="wp-block-button__link c-reading-bar__menu-trigger  js-sticky-menu-trigger">
						<span class="novablocks-menu__button-label"><?php esc_html_e( 'Menu', '__plugin_txtd' ); ?></span>
					</a>
				</div>
			</div>
		<?php }
		$menu_trigger = ob_get_clean();
		$social_trigger = do_blocks( '<!-- wp:novablocks/sharing-overlay {"buttonLabel":"Share", "useSourceColorAsReference":"1", "paletteVariation":"1"}  /-->' );

		ob_start(); ?>
		<div class="c-reading-bar__title  c-reading-bar__title--current">
			<label class="post-title__label"><?php esc_html_e( 'Reading:', '__plugin_txtd' ); ?></label>
			<?php the_title( '<span class="post-title__post-name">', '</span>' ); ?>
		</div><!-- .c-reading-bar__title -->
		<?php $current_post_title = ob_get_clean();

		$next_post = get_next_post();
		ob_start();
		if ( ! empty( $next_post ) && ! is_wp_error( $next_post ) ) { ?>
			<div class="c-reading-bar__title  c-reading-bar__title--next">
				<label class="post-title__label"><?php esc_html_e( 'Read Next:', '__plugin_txtd' ); ?></label>
				<a class="post-title__post-name" href="<?php the_permalink( $next_post ); ?>">
					<?php echo get_the_title( $next_post ); ?>
				</a>
			</div><!-- .c-reading-bar__title -->
		<?php }
		$next_post_title = ob_get_clean();


		ob_start(); ?>
		<!--Reading Bar-->
		<div class="c-reading-bar js-reading-bar">
			<div class="c-reading-bar__layer c-reading-bar__layer--current">
				<div class="c-reading-bar__layer-wrapper">
					<div class="c-reading-bar__wrapper-menu-trigger"><?php echo $menu_trigger; ?></div>
					<?php echo $current_post_title; ?>
					<div class="c-reading-bar__wrapper-social"><?php echo $social_trigger; ?></div>
				</div>
			</div>
			<?php if ( $next_post_title ) { ?>
			<div class="c-reading-bar__layer c-reading-bar__layer--next sm-color-signal-2 sm-palette-1 sm-variation-1 sm-palette--shifted">
				<div class="c-reading-bar__layer-wrapper">
					<?php echo $next_post_title; ?>
				</div>
			</div>
			<?php } ?>
		</div><!-- .c-reading-bar -->

		<!--Reading Progress Bar-->
		<div class="c-reading-progress  js-reading-progress"></div>
		<?php

		return ob_get_clean();
	}
}
