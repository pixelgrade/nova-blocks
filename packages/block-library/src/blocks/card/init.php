<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_card_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/card/attributes.json',

		'packages/color-signal/src/attributes.json',

		'packages/block-editor/src/filters/with-elements-visibility/attributes.json',
		'packages/block-editor/src/filters/with-card-details/attributes.json',

		'packages/block-library/src/blocks/card/attributes-overwrite.json',
	] );
}

if ( ! function_exists( 'novablocks_render_card_block' ) ) {

	function novablocks_render_card_block( array $attributes, string $content ): string {

		$attributes_config = novablocks_get_card_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );
		$card_media        = novablocks_get_collection_card_media_markup( $attributes['media'] );

		ob_start();

		if ( ! empty( $attributes['showMeta'] ) && ! empty( $attributes['meta'] ) ) {
			echo '<div class="nb-card__meta is-style-meta">' . $attributes['meta'] . '</div>';
		}

		echo novablocks_get_card_item_title( $attributes['title'], $attributes );
		echo novablocks_get_card_item_subtitle( $attributes['subtitle'], $attributes );
		echo novablocks_get_card_item_description( $attributes['description'], $attributes );

		if ( ! empty( $attributes['showButtons'] ) && ! empty( $content ) ) { ?>
			<div class="nb-card__buttons">
				<?php echo wp_kses_post( $content ); ?>
			</div>
		<?php }

		$card_content = ob_get_clean();

		return novablocks_get_collection_card_markup( $card_media, $card_content, $attributes );
	}
}
