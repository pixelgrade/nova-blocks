<?php
/**
 * Handle the Header block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_render_header_block' ) ) {

	/**
	 * Entry point to render the block with the given attributes, content, and context.
	 *
	 * @param array $attributes
	 * @param string $content
	 *
	 * @return string
	 */

	function novablocks_render_header_block( $attributes, $content ) {

		ob_start();

		do_action( 'novablocks_header:before' );

		$attributes = novablocks_get_attributes_with_defaults( $attributes, novablocks_get_header_attributes() );

		$classes = array( 'site-header site-header--main alignfull' );

		$classes[] = 'site-header--' . $attributes['layout'];

		// Logo Center and Logo Left layout are considered as simple,
		// because they are on only one row.
		$header_is_simple = $attributes['layout'] === 'logo-left' || $attributes['layout'] === 'logo-center';

		// Get Sticky Row Block.
		$sticky_row_block = get_sticky_row_block();

		// Get Primary Row Block to use it on hover if it's the case.
		$primary_row_block = get_primary_block();

		// We need that class to style header block,
		// if the user didn't hit save yet.
		if ( ! header_block_updated() ) {
			$classes[] = 'site-header--is-old';
		}

		$header_row_markup_start = '<!-- wp:novablocks/header-row {"name":"primary", label="Primary Navigation" isPrimary":true,"className":"site-header__row--primary"} -->';
		$header_row_markup_end = '<!-- /wp:novablocks/header-row -->';

		global $novablocks_responsive_navigation_outputted;

		if ( empty( $novablocks_responsive_navigation_outputted ) ) { ?>

			<input class="c-menu-toggle__checkbox" id="nova-menu-toggle" type="checkbox" autocomplete="off">

			<label class="c-menu-toggle" for="nova-menu-toggle">
                <span class="c-menu-toggle__wrap">
                    <span class="c-menu-toggle__icon">
                        <b class="c-menu-toggle__slice c-menu-toggle__slice--top"></b>
                        <b class="c-menu-toggle__slice c-menu-toggle__slice--middle"></b>
                        <b class="c-menu-toggle__slice c-menu-toggle__slice--bottom"></b>
                    </span>
                    <span
						class="c-menu-toggle__label screen-reader-text"><?php esc_html_e( 'Menu', '__plugin_txtd' ); ?></span>
                </span>
			</label>

			<?php $novablocks_responsive_navigation_outputted = true;

		} ?>

		<header id="masthead"
				class="<?php echo esc_attr( join( ' ', $classes ) ); ?>"
				<?php if ( $header_is_simple && ! empty( $sticky_row_block ) )  { ?>
					data-sticky="true"
				<?php } ?>
		>
			<div class="site-header__wrapper">
				<div class="site-header__inner-container">
					<div class="site-header__content <?php echo esc_attr( 'align' . $attributes['align'] ); ?>">
						<?php

						if ( ! header_block_updated() ) {
							$content = do_blocks( $header_row_markup_start . $content . $header_row_markup_end );
						}
						echo $content;
						?>
					</div>
				</div>

				<?php if ( $header_is_simple ) {
					echo get_reading_bar_markup();
				} ?>
			</div>
		</header>

		<?php

		// We will output the sticky header mark-up only
		// when the layout used is on at least two rows.
		if ( ! empty( $sticky_row_block ) && ! $header_is_simple ) { ?>
			<div class="site-header site-header--secondary site-header-sticky site-header--sticky">
				<?php

				// On all pages except articles,
				// show sticky row and primary row,
				// if primary is not sticky.
				if ( ! is_single() ) {

					echo render_block( $sticky_row_block );

					if ( $sticky_row_block['attrs']['isPrimary']  !== true ) {
						echo render_block( $primary_row_block );
					}
				}

				// On articles always show primary row,
				// reading bar and reading progress.
				if( is_single() && ! is_attachment() ) { ?>

					<?php
						echo render_block( $primary_row_block );
					  	echo get_reading_bar_markup();
					?>
				<?php } ?>
			</div>
		<?php } ?>

		<?php do_action( 'novablocks_header:after' );

		return ob_get_clean();
	}
}

/**
 * Get the Header Row that has been marked as sticky.
 *
 * @return array
 */

function get_sticky_row_block() {

	$post             = get_block_area_post( 'header' );

	$block = [];

	if ( ! empty( $post->post_content ) && has_blocks( $post->post_content ) ) {

		// Get all blocks inside Block Area;
		$header_block = ( parse_blocks( $post->post_content ) )[0];

		// Get InnerBlocks
		$inner_blocks = $header_block['innerBlocks'];

		foreach ( $inner_blocks as $inner_block ) {

			// Select InnerBlock which match Sticky Row attribute.
			if ( $inner_block['attrs']['isSticky'] === true ) {
				$block = $inner_block;
			}
		}
	}

	return $block;
}

/**
 * Helper function to get Block Area Post.
 *
 * @param string $slug
 *
 * @return object;
 */

function get_block_area_post( $slug ) {

	$block_area = get_posts( array(
		'name'        => $slug,
		'post_type'   => 'block_area',
		'post_status' => 'publish',
		'numberposts' => 1,
		'fields'      => 'ids',
	) );

	// Header Block Area ID.
	$block_area_id = $block_area[0];

	// Header Block Area Post.
	$post = get_post( $block_area_id );

	return $post;
}

/**
 * Used to select Primary Header Row and use it
 * for sticky header when it's needed.
 *
 * @return array
 */

function get_primary_block() {

	$post = get_block_area_post( 'header' );

	$block = [];

	if ( ! empty( $post->post_content ) && has_blocks( $post->post_content ) ) {

		// Get all blocks inside Block Area;
		$header_block = ( parse_blocks( $post->post_content ) )[0];

		// Get InnerBlocks
		$inner_blocks = $header_block['innerBlocks'];

		foreach ( $inner_blocks as $inner_block ) {

			// Select InnerBlock which match Sticky Row attribute.
			if ( $inner_block['attrs']['isPrimary'] === true ) {
				$block = $inner_block;
			}
		}
	}

	return $block;
}

/**
 * Check if Header Blocks is using Header Rows.
 *
 * @return boolean
 */

function header_block_updated() {

	$post = get_block_area_post( 'header' );

	if ( ! empty( $post->post_content ) && has_blocks( $post->post_content ) ) {

		if ( has_block( 'novablocks/header-row', $post ) ) {
			return true;
		}
	}

	return false;
}

/**
 * Render Reading Bar and Reading Progress
 */

function get_reading_bar_markup() {

	// We want to show Reading Bar
	// only on Posts.
	if ( ! is_singular('post') ) {
		return;
	}

	?>
	<!--Reading Bar-->
	<div class="c-reading-bar  js-reading-bar  u-header-sides-spacing">

		<!--Menu Button-->
		<div class="c-reading-bar__wrapper-menu-trigger">
			<?php if ( has_nav_menu( 'primary' ) ) { ?>
				<div class="wp-block-buttons">
					<div class="wp-block-button">
						<a class="wp-block-button__link c-reading-bar__menu-trigger  js-sticky-menu-trigger">
							<span class="novablocks-menu__button-label"><?php esc_html_e( 'Menu', '__theme_txtd' ); ?></span>
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
				<label class="post-title__label"><?php esc_html_e( 'Next:', '__theme_txtd' ); ?></label>
				<a class="post-title__post-name" href="<?php the_permalink( $next_post ); ?>">
					<?php echo get_the_title( $next_post ); ?>
				</a>
			</div><!-- .c-reading-bar__wrapper-title -->
		<?php endif; ?>
		<div class="c-reading-bar__wrapper-title  c-reading-bar__wrapper-title--current">
			<label class="post-title__label"><?php esc_html_e( 'Reading:', '__theme_txtd' ); ?></label>
			<?php the_title( '<span class="post-title__post-name">', '</span>' ); ?>
		</div><!-- .c-reading-bar__wrapper-title -->

		<!--Share Button-->
		<div class="c-reading-bar__wrapper-social">
			<?php echo do_blocks( '<!-- wp:novablocks/sharing-overlay {"buttonLabel":"Share"} --><!-- /wp:novablocks/sharing-overlay -->' ); ?>
		</div><!-- .c-reading-bar__wrapper-social -->
	</div><!-- .c-reading-bar -->

	<!--Reading Progress Bar-->
	<progress class="c-reading-progress  js-reading-progress"></progress>
<?php }
