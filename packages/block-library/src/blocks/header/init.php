<?php
/**
 * Handle the Header block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_header_attributes() {

	return novablocks_merge_attributes_from_array( array(
		"packages/block-library/src/blocks/header/attributes.json",
		"packages/block-editor/src/hooks/with-color-signal/attributes.json",
	) );

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

		$attributes_config = novablocks_get_header_attributes();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$classes = array(
			'novablocks-header',
			'novablocks-header--main',
			'novablocks-header-shadow',
			'novablocks-header-background',
			'alignfull'
		);

		$blockPaletteClasses = novablocks_get_palette_classes( $attributes );
		$classes = array_merge( $classes, $blockPaletteClasses );

		// Logo Center and Logo Left layout are considered as simple,
		// because they are on only one row.
		$header_is_simple = $attributes['layout'] === 'logo-left' || $attributes['layout'] === 'logo-center';

		// Get Sticky Row Block.
		$stickyRowBlock = getStickyRowBlock();

		// Get Primary Row Block to use it on hover if it's the case.
		$primaryRowBlock = getPrimaryBlock();

		$header_row_markup_start = '<!-- wp:novablocks/header-row {"name":"primary", label="Primary Navigation" isPrimary":true,"className":"novablocks-header-row--primary"} -->';
		$header_row_markup_end = '<!-- /wp:novablocks/header-row -->';

		global $novablocks_responsive_navigation_outputted;

		$toggleClasses = array(
			'c-menu-toggle',
		);

		$toggleClasses = array_merge( $toggleClasses, $blockPaletteClasses );


		if ( empty( $novablocks_responsive_navigation_outputted ) ) { ?>

			<input class="c-menu-toggle__checkbox" id="nova-menu-toggle" type="checkbox" autocomplete="off">

			<label class="<?php echo esc_attr( join( ' ', $toggleClasses ) ); ?>" for="nova-menu-toggle">
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

		}

		?>

		<header id="masthead"
				class="<?php echo esc_attr( join( ' ', $classes ) ); ?>"
				<?php if ( $header_is_simple && ! empty( $stickyRowBlock ) )  { ?>
					data-sticky="true"
				<?php } ?>
		>
			<div class="novablocks-header__inner-container">
				<?php

				if ( ! headerBlockUpdated() ) {
					$content = do_blocks( $header_row_markup_start . $content . $header_row_markup_end );
				}
				echo $content;
				?>
			</div>
		</header>

		<?php

		// We will output the sticky header mark-up only
		// when the layout used is on at least two rows.
		if ( ! empty( $stickyRowBlock ) && ! $header_is_simple ) { ?>
			<div class="novablocks-header novablocks-header--secondary novablocks-header--sticky novablocks-header-shadow">
				<div class="novablocks-header__inner-container">
					<?php
					echo render_block( $stickyRowBlock );

					if ( $stickyRowBlock['attrs']['isPrimary']  !== true ) {
						echo render_block( $primaryRowBlock );
					}
					?>
				</div>
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

function getStickyRowBlock() {

	$post             = get_block_area_post( 'header' );

	$block = [];

	if ( ! empty( $post->post_content ) && has_blocks( $post->post_content ) ) {

		// Get all blocks inside Block Area;
		$header_block = ( parse_blocks( $post->post_content ) )[0];

		// Get InnerBlocks
		$innerBlocks = $header_block['innerBlocks'];

		foreach ( $innerBlocks as $innerBlock ) {

			// Select InnerBlock which match Sticky Row attribute.
			if ( $innerBlock['attrs']['isSticky'] === true ) {
				$block = $innerBlock;
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

function getPrimaryBlock() {

	$post = get_block_area_post( 'header' );

	$block = [];

	if ( ! empty( $post->post_content ) && has_blocks( $post->post_content ) ) {

		// Get all blocks inside Block Area;
		$header_block = ( parse_blocks( $post->post_content ) )[0];

		// Get InnerBlocks
		$innerBlocks = $header_block['innerBlocks'];

		foreach ( $innerBlocks as $innerBlock ) {

			// Select InnerBlock which match Sticky Row attribute.
			if ( $innerBlock['attrs']['isPrimary'] === true ) {
				$block = $innerBlock;
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

function headerBlockUpdated() {

	$post = get_block_area_post( 'header' );

	if ( ! empty( $post->post_content ) && has_blocks( $post->post_content ) ) {

		if ( has_block( 'novablocks/header-row', $post ) ) {
			return true;
		}
	}

	return false;
}
