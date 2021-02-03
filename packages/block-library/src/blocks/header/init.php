<?php
/**
 * Handle the Header block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_render_header_block' ) ) {

	function novablocks_render_header_block( $attributes, $content ) {

		ob_start();

		do_action( 'novablocks_header:before' );

		$attributes = novablocks_get_attributes_with_defaults( $attributes, novablocks_get_header_attributes() );

		$classes = array('site-header alignfull');

		$classes[] = 'site-header--' . $attributes['layout'];

		$header_is_simple = $attributes['layout'] === 'logo-left' ||  $attributes['layout'] === 'logo-center';

		// By default no row is set to sticky.
		$sticky_row = 'none';

		// Get the sticky row.
		if ( $attributes['shouldBeSticky'] === true ) {
			$sticky_row = $attributes['stickyRow'];
		}

		if ($header_is_simple ) {
			$classes[] = 'site-header--simple';
		}

		global $novablocks_responsive_navigation_outputted;

		if ( empty( $novablocks_responsive_navigation_outputted ) ) { ?>

            <input class="c-menu-toggle__checkbox" id="nova-menu-toggle" type="checkbox">

            <label class="c-menu-toggle" for="nova-menu-toggle">
                <span class="c-menu-toggle__wrap">
                    <span class="c-menu-toggle__icon">
                        <b class="c-menu-toggle__slice c-menu-toggle__slice--top"></b>
                        <b class="c-menu-toggle__slice c-menu-toggle__slice--middle"></b>
                        <b class="c-menu-toggle__slice c-menu-toggle__slice--bottom"></b>
                    </span>
                    <span class="c-menu-toggle__label screen-reader-text"><?php esc_html_e( 'Menu', '__plugin_txtd' ); ?></span>
                </span>
            </label>

			<?php $novablocks_responsive_navigation_outputted = true;

		} ?>

        <header id="masthead" class="<?php echo esc_attr( join( ' ', $classes ) ); ?>" data-sticky="<?php echo esc_attr($sticky_row); ?>">
	        <div class="site-header__wrapper">
	            <div class="site-header__inner-container">
	                <div class="site-header__content <?php echo esc_attr( 'align' . $attributes['align'] ); ?>">
	                    <?php echo $content; ?>
	                </div>
	            </div>
	        </div>
		</header>

		<?php

		// Get Sticky Row Block.
		$stickyRowBlock = getStickyRowBlock($attributes);

		// Get Primary Row Block to use it on hover if it's the case.
		$primaryRowBlock = getPrimaryBlock();

		if ( $attributes['shouldBeSticky'] === true && ! $header_is_simple ) { ?>
			<div class="site-header-sticky">
				<?php
					echo render_block($stickyRowBlock);

					if ( $attributes['stickyRow'] !== 'primary' ) {
						echo render_block($primaryRowBlock);
					}
				?>
			</div>
		<?php } ?>

		<?php do_action( 'novablocks_header:after' );

		return ob_get_clean();
	}
}

function getStickyRowBlock($attributes) {

	$saved_sticky_row = $attributes['stickyRow'];
	$post	= get_block_area_post( 'header' );

	$block = '';

	if ( ! empty( $post->post_content ) && has_blocks( $post->post_content ) ) {

		// Get all blocks inside Block Area;
		$header_block = ( parse_blocks( $post->post_content ) )[0];

		// Get InnerBlocks
		$innerBlocks = $header_block['innerBlocks'];

		foreach( $innerBlocks as $innerBlock) {

			// Select InnerBlock which match Sticky Row attribute.
			if ( $innerBlock['attrs']['headerRowType'] === $saved_sticky_row) {
				$block = $innerBlock;
			}
		}
	}

	return $block;
}

function get_block_area_post($slug) {

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
	$post          = get_post( $block_area_id );

	return $post;
}

function getPrimaryBlock() {

	$post	= get_block_area_post( 'header' );

	$block = '';

	if ( ! empty( $post->post_content ) && has_blocks( $post->post_content ) ) {

		// Get all blocks inside Block Area;
		$header_block = ( parse_blocks( $post->post_content ) )[0];

		// Get InnerBlocks
		$innerBlocks = $header_block['innerBlocks'];

		foreach( $innerBlocks as $innerBlock) {

			// Select InnerBlock which match Sticky Row attribute.
			if ( $innerBlock['attrs']['headerRowType'] === 'primary') {
				$block = $innerBlock;
			}
		}
	}

	return $block;
}
