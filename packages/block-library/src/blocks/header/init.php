<?php
/**
 * Handle the Header block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once dirname( __FILE__ ) . '/extras.php';

function novablocks_get_header_attributes(): array {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/header/attributes.json',
		'packages/color-signal/src/attributes.json',
		'packages/block-library/src/blocks/header/attributes-color-signal.json',
	] );
}

if ( ! function_exists( 'novablocks_render_header_block' ) ) {

	/**
	 * Entry point to render the block with the given attributes, content, and context.
	 *
	 * @see \WP_Block::render()
	 *
	 * @param array    $attributes
	 * @param string   $content
	 * @param WP_Block $block
	 *
	 * @return string
	 */

	function novablocks_render_header_block( array $attributes, string $content, WP_Block $block ): string {
		global $novablocks_responsive_navigation_outputted;

		// Maybe enqueue frontend-only scripts.
		novablocks_maybe_enqueue_block_frontend_scripts( $block );

		ob_start();

		do_action( 'novablocks_header:before' );

		$attributes_config     = novablocks_get_header_attributes();
		$attributes            = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );
		$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes ) );
		$data_attributes       = novablocks_get_data_attributes( $data_attributes_array, $attributes );

		$classes = [
			'novablocks-header',
			'novablocks-header--main',
			'novablocks-header-shadow',
			'novablocks-header-background',
			'alignfull',
		];

		$blockPaletteClasses = novablocks_get_color_signal_classes( $attributes );
		$classes             = array_merge( $classes, $blockPaletteClasses );

		$toggleClasses = [
			'c-menu-toggle',
		];

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
                    <span
	                    class="c-menu-toggle__label screen-reader-text"><?php esc_html_e( 'Menu', '__plugin_txtd' ); ?></span>
                </span>
			</label>

			<?php $novablocks_responsive_navigation_outputted = true;
		} ?>

		<div class="<?php echo esc_attr( join( ' ', $classes ) ); ?>" <?php echo join( ' ', $data_attributes ); ?> >
			<?php
				echo $content;
				echo render_reading_bar();
			?>
		</div>

		<?php

		do_action( 'novablocks_header:after' );

		return ob_get_clean();
	}
}
