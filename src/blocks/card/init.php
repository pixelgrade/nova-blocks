<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_card_block_init' ) ) {

	function novablocks_card_block_init() {
		register_block_type( 'novablocks/card', array(
			'render_callback' => 'novablocks_render_card_block',
			'attributes' => novablocks_get_card_attributes(),
		) );
	}
}
add_action( 'init', 'novablocks_card_block_init' );

if ( ! function_exists( 'novablocks_render_card_block' ) ) {

	function novablocks_render_card_block( $attributes, $content ) {

		$attributes_config = novablocks_get_card_attributes();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$hlevel = $attributes['level'];
		$titleTag = 'h' . ( $hlevel + 1 );
		$subtitleTag = 'h' . ( $hlevel + 2 );

		$classes = array( 'novablocks-card' );

		$classes[] = 'novablocks-block__content';
		$classes[] = 'novablocks-card__inner-container';

		if ( ! empty( $attributes['contentStyle'] ) ) {
			$classes[] = 'content-is-' . $attributes['contentStyle'];
		}

		$className = join( ' ', $classes );

		ob_start(); ?>

		<div>
		<div class="<?php echo $className; ?>">
        <?php if (false != $attributes['showMedia']) { ?>
			<div class="novablocks-card__media-wrap">
				<div class="novablocks-card__media">
					<?php if ( ! empty( $attributes['media'] )) { ?>
						<img class="novablocks-card__media-image" src="<?php echo $attributes['media']['url']; ?>" />
					<?php } else { ?>
						<div class="novablocks-card__media-placeholder">
							<svg width="100" height="67" viewBox="0 0 100 67" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M96.722 0H3.279C1.229 0 0 1.229 0 3.279V63.115C0 65.164 1.229 66.393 3.279 66.393H96.721C98.771 66.393 99.999 65.164 99.999 63.115V3.279C100 1.229 98.771 0 96.722 0ZM4.918 6.558C4.918 5.533 5.532 4.918 6.557 4.918H93.443C94.468 4.918 95.082 5.533 95.082 6.558V59.836C95.082 60.08 95.045 60.3 94.978 60.495C88.865 54.214 68.521 33.606 64.755 33.606C60.757 33.606 39.42 56.811 35.172 61.475H31.447C33.415 59.153 36.274 55.808 39.525 52.107C34.42 47.976 29.403 44.263 27.87 44.263C25.059 44.263 11.092 56.738 5.979 61.391C5.309 61.196 4.919 60.648 4.919 59.836V6.558H4.918Z" fill="#323067"/>
								<path d="M38.119 16.629C42.731 16.629 46.471 20.366 46.471 24.978C46.471 29.59 42.731 33.328 38.119 33.328C33.508 33.328 29.768 29.59 29.768 24.978C29.769 20.367 33.508 16.629 38.119 16.629Z" fill="#323067"/>
							</svg>
						</div>
					<?php } ?>
				</div>
			</div>
        <?php } ?>

			<?php if ( ! empty( $attributes['meta'] ) && false != $attributes['showMeta'] ) { ?>
				<div class="novablocks-card__meta is-style-meta"><?php echo $attributes['meta']; ?></div>
			<?php }

			if ( ! empty( $attributes['title'] ) && false != $attributes['showTitle'] ) {
				echo '<' . $titleTag . ' class="novablocks-card__title">' . $attributes['title'] . '</' . $titleTag . '>';
			}

			if ( ! empty( $attributes['subtitle'] ) && false != $attributes['showSubtitle'] ) {
				echo '<' . $subtitleTag . ' class="novablocks-card__subtitle">' . $attributes['subtitle'] . '</' . $subtitleTag . '>';
			}

			if ( ! empty( $attributes['description'] ) && false != $attributes['showDescription'] ) { ?>
				<div class="novablocks-card__description"><?php echo $attributes['description']; ?></div>
			<?php }

			if ( ! empty( $content ) && $attributes['showButtons'] ) {
				echo $content;
			} ?>

		</div>
		</div>

		<?php return ob_get_clean();
	}
}
