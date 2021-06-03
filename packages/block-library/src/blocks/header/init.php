<?php
/**
 * Handle the Header block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once dirname( __FILE__ ) . '/extras.php';

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
