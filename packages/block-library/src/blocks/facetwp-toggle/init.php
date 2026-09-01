<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_facetwp_toggle_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/facetwp-toggle/attributes.json',
	] );

}

if ( ! function_exists( 'novablocks_render_facetwp_toggle_block' ) ) {

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
	function novablocks_render_facetwp_toggle_block( array $attributes, string $content, WP_Block $block ) {
		if ( ! novablocks_is_facetwp_available() ) {
			return '';
		}

		$attributes_config = novablocks_get_facetwp_toggle_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );
		$behavior          = in_array( $attributes['behavior'], [ 'more-filters', 'mobile-panel' ], true ) ? $attributes['behavior'] : 'more-filters';
		$visibility        = in_array( $attributes['visibility'], [ 'always', 'mobile' ], true ) ? $attributes['visibility'] : 'always';
		$wrapper_classes   = [
			'wp-block-buttons',
			'nb-facetwp-toggle-wrap',
			'nb-facetwp-toggle-wrap--visibility-' . $visibility,
		];
		$button_classes    = [
			'wp-block-button__link',
			'nb-facetwp-toggle',
			'nb-facetwp-toggle--' . $behavior,
		];

		ob_start(); ?>

		<div class="<?php echo esc_attr( join( ' ', $wrapper_classes ) ); ?>">
			<div class="wp-block-button">
				<button type="button" class="<?php echo esc_attr( join( ' ', $button_classes ) ); ?>" aria-expanded="false">
					<span class="nb-facetwp-toggle__label"><?php echo esc_html( $attributes['text'] ); ?></span>
					<?php if ( 'mobile-panel' === $behavior ) : ?>
						<span class="nb-facetwp-toggle__count" aria-hidden="true" hidden></span>
						<span class="screen-reader-text nb-facetwp-toggle__count-label" data-singular="<?php echo esc_attr__( '%d active filter', '__plugin_txtd' ); ?>" data-plural="<?php echo esc_attr__( '%d active filters', '__plugin_txtd' ); ?>" hidden></span>
					<?php endif; ?>
				</button>
			</div>
		</div>

		<?php return ob_get_clean();
	}
}
