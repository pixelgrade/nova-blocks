<?php
/**
 * Handle the Slideshow block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once dirname( __FILE__ ) . '/extras.php';

if ( ! function_exists( 'novablocks_announcement_bar_block_init' ) ) {

	function novablocks_announcement_bar_block_init() {
		register_block_type( 'novablocks/announcement-bar', array(
			'attributes'      => novablocks_get_announcement_bar_attributes(),
			'render_callback' => 'novablocks_render_announcement_bar_block'
		) );
	}
}
add_action( 'init', 'novablocks_announcement_bar_block_init' );

if ( ! function_exists( 'novablocks_render_announcement_bar_block' ) ) {

	function novablocks_render_announcement_bar_block( $attributes, $content ) {

		$classes = array();

		$attributes_config = novablocks_get_announcement_bar_attributes();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$classes = array( 'novablocks-announcement-bar', 'is-hidden', 'alignfull' );

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		$target = '';
		if ( ! empty( $attributes['opensInNewTab'] ) ) {
			$target = 'target="_blank"';
		}

		ob_start();

		do_action( 'novablocks_announcement_bar:before' ); ?>

		<?php if ( ! empty( $attributes['content'] ) ) { ?>

		<div class="<?php echo join( ' ', $classes ); ?>" data-id="<?php echo $attributes['blockId'] ;?>" >
			<div class="novablocks-announcement-bar__wrapper">
				<div class="novablocks-announcement-bar__content"><?php echo $attributes['content']; ?></div>
				<div class="novablocks-announcement-bar__close">
					<svg width="26" height="26" viewBox="0 0 26 26">
						<g fill="currentColor" fillRule="evenodd">
							<path d="M2.582-.003l23.287 23.287-2.451 2.452L.13 2.448z"></path>
							<path d="M.13 23.285L23.417-.002l2.452 2.451L2.582 25.736z"></path>
						</g>
					</svg>
				</div>
				<?php if ( ! empty( $attributes['url'] ) ) { ?>
					<a href="<?php echo $attributes['url']; ?>" <?php echo $target; ?> class="novablocks-announcement-bar__link"></a>
				<?php } ?>
			</div>
		</div>

		<?php }

		do_action( 'novablocks_announcement_bar:after' );

		return ob_get_clean();
	}
}
