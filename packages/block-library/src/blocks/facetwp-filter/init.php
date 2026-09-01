<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_facetwp_filter_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/facetwp-filter/attributes.json',
		'packages/block-editor/src/filters/with-space-and-sizing/attributes.json',
	] );

}

if ( ! function_exists( 'novablocks_render_facetwp_filter_block' ) ) {

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
	function novablocks_render_facetwp_filter_block( array $attributes, string $content, WP_Block $block ) {
		if ( ! novablocks_is_facetwp_available() ) {
			return '';
		}

		wp_enqueue_script( 'novablocks/facetwp-filter/frontend' );

		$attributes_config = novablocks_get_facetwp_filter_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );
		$mobile_title      = trim( (string) ( $attributes['mobileTitle'] ?? '' ) );

		if ( '' === $mobile_title ) {
			$mobile_title = function_exists( '__' ) ? __( 'Filters', '__plugin_txtd' ) : 'Filters';
		}

		$classes = [
			'nb-facetwp-filter',
			'nb-facetwp-filter--section-type-' . $attributes[ 'sectionType' ],
			'nb-facetwp-filter--orientation-' . $attributes[ 'orientation' ],
			'align' . $attributes['align']
		];

		$panel_id = '';
		$title_id = '';

		if ( $attributes['mobilePanel'] ) {
			$classes[] = 'nb-facetwp-filter--mobile-panel';
			$panel_id  = wp_unique_id( 'nb-facetwp-mobile-panel-' );
			$title_id  = $panel_id . '-title';
		}

		$cssProps = array_merge(
			novablocks_get_space_and_sizing_css( $attributes ),
		);

		ob_start(); ?>

		<div <?php if ( $panel_id ) : ?>id="<?php echo esc_attr( $panel_id ); ?>" data-mobile-title-id="<?php echo esc_attr( $title_id ); ?>"<?php endif; ?> class="<?php echo esc_attr( join( ' ', $classes ) ); ?>" style="<?php echo esc_attr( join( ';', $cssProps ) ); ?>">
			<?php if ( $attributes['mobilePanel'] ) : ?>
				<div class="nb-facetwp-filter__mobile-header">
					<div id="<?php echo esc_attr( $title_id ); ?>" class="nb-facetwp-filter__mobile-title">
						<?php echo esc_html( $mobile_title ); ?>
					</div>
					<button type="button" class="nb-facetwp-filter__mobile-close" aria-label="<?php esc_attr_e( 'Close filters', '__plugin_txtd' ); ?>">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
			<?php endif; ?>
			<?php echo $content; ?>
		</div> <!-- .nb-facetwp-filter -->

		<?php return ob_get_clean();
	}
}
