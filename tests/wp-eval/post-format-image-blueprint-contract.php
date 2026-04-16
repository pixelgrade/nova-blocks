<?php
/**
 * Contract test for Image blueprint collection cards.
 *
 * Run with:
 * studio wp eval-file /wordpress/wp-content/plugins/nova-blocks/tests/wp-eval/post-format-image-blueprint-contract.php --path /Users/georgeolaru/Studio/hive-lt-starter
 */

function novablocks_fail_post_format_image_blueprint_contract( string $message ): void {
	fwrite( STDERR, $message . PHP_EOL );
	exit( 1 );
}

if ( ! defined( 'ABSPATH' ) ) {
	novablocks_fail_post_format_image_blueprint_contract( 'This script must run through wp eval-file.' );
}

if ( ! function_exists( 'novablocks_get_collection_card_markup_from_post' ) ) {
	novablocks_fail_post_format_image_blueprint_contract( 'Expected Nova card helpers to be available.' );
}

$created_post_ids       = [];
$created_attachment_ids = [];
$active_blueprint_mode  = 'valid';

$attributes = [
	'showMedia'               => true,
	'showMeta'                => false,
	'showTitle'               => true,
	'showSubtitle'            => false,
	'showDescription'         => true,
	'showButtons'             => false,
	'primaryMetadata'         => 'none',
	'secondaryMetadata'       => 'none',
	'metadataPosition'        => 'below-title',
	'cardTitleLevel'          => 3,
	'cardTitleFontSize'       => 'regular',
	'contentPosition'         => 'top left',
	'contentPadding'          => 0,
	'blockTopSpacing'         => 0,
	'blockBottomSpacing'      => 0,
	'columns'                 => 1,
	'cardLayout'              => 'vertical',
	'palette'                 => 1,
	'colorSignal'             => 0,
	'contentColorSignal'      => 0,
	'contentPaletteVariation' => 1,
];

$create_post = static function ( array $args ) use ( &$created_post_ids ): int {
	$post_id = wp_insert_post(
		wp_parse_args(
			$args,
			[
				'post_status' => 'publish',
				'post_type'   => 'post',
			]
		)
	);

	if ( is_wp_error( $post_id ) || ! $post_id ) {
		novablocks_fail_post_format_image_blueprint_contract( 'Expected fixture post creation to succeed.' );
	}

	$created_post_ids[] = $post_id;

	return $post_id;
};

$create_attachment = static function ( string $title, int $width, int $height ) use ( &$created_attachment_ids ): int {
	$uploads = wp_upload_dir();

	if ( ! empty( $uploads['error'] ) ) {
		novablocks_fail_post_format_image_blueprint_contract( 'Expected uploads to be available for attachment fixtures.' );
	}

	$fixture_dir = trailingslashit( $uploads['path'] ) . 'contract-fixtures';
	wp_mkdir_p( $fixture_dir );

	$file_name = sanitize_title( $title ) . '-' . wp_generate_password( 6, false, false ) . '.jpg';
	$file_path = trailingslashit( $fixture_dir ) . $file_name;
	$image     = imagecreatetruecolor( $width, $height );

	if ( false === $image ) {
		novablocks_fail_post_format_image_blueprint_contract( 'Expected GD image creation to succeed for attachment fixtures.' );
	}

	$background = imagecolorallocate( $image, 120, 120, 120 );
	imagefill( $image, 0, 0, $background );
	imagejpeg( $image, $file_path, 85 );
	imagedestroy( $image );

	$attachment_id = wp_insert_attachment(
		[
			'post_mime_type' => 'image/jpeg',
			'post_title'     => $title,
			'post_status'    => 'inherit',
		],
		$file_path
	);

	if ( is_wp_error( $attachment_id ) || ! $attachment_id ) {
		novablocks_fail_post_format_image_blueprint_contract( 'Expected fixture attachment creation to succeed.' );
	}

	$relative_path = ltrim( str_replace( trailingslashit( $uploads['basedir'] ), '', $file_path ), '/' );
	update_attached_file( $attachment_id, $file_path );

	wp_update_attachment_metadata(
		$attachment_id,
		[
			'width'  => $width,
			'height' => $height,
			'file'   => $relative_path,
		]
	);

	$created_attachment_ids[] = $attachment_id;

	return $attachment_id;
};

$image_post_id = $create_post(
	[
		'post_title'   => 'Image Blueprint Fixture',
		'post_content' => '<!-- wp:paragraph --><p>Static body copy.</p><!-- /wp:paragraph -->',
	]
);

$no_media_image_post_id = $create_post(
	[
		'post_title'   => 'Image Blueprint No Media Fixture',
		'post_content' => '<!-- wp:paragraph --><p>Static body copy.</p><!-- /wp:paragraph -->',
	]
);

set_post_format( $image_post_id, 'image' );
set_post_format( $no_media_image_post_id, 'image' );

$image_attachment_id = $create_attachment( 'Image Blueprint Fixture', 1600, 900 );
set_post_thumbnail( $image_post_id, $image_attachment_id );

$valid_blueprint_content =
	'<!-- wp:novablocks/supernova {"contentType":"custom","palette":1,"paletteVariation":11,"colorSignal":3,"contentPaletteVariation":11,"contentColorSignal":3,"imagePadding":25,"blobSides":3,"blobPatternSeed":3,"blobComplexity":0,"blobSmoothness":33,"blobRotation":0,"blobMaskSides":3,"blobMaskPatternSeed":3,"blobMaskComplexity":0,"blobMaskSmoothness":33,"blobMaskRotation":0,"blobsSizeBalance":50,"blobsHorizontalDisplacement":50,"blobsVerticalDisplacement":50,"stylePreset":"the-cloud-atlas","sizeContrast":0,"positionShift":0,"elementsDistance":20,"placementVariation":25,"imageRotation":0,"objectPosition":50} -->' .
	'<!-- wp:novablocks/supernova-item {"contentType":"custom","cardLayout":"stacked","contentPosition":"bottom center","contentPadding":50,"imagePadding":25,"overlayFilterStrength":50,"minHeightFallback":66,"thumbnailAspectRatioString":"landscape","imageResizing":"cover","colorSignal":3,"paletteVariation":11,"contentPaletteVariation":11} -->' .
	'<!-- wp:heading {"level":3,"className":"is-style-default"} --><h3 class="wp-block-heading is-style-default">Blueprint image title</h3><!-- /wp:heading -->' .
	'<!-- /wp:novablocks/supernova-item -->' .
	'<!-- /wp:novablocks/supernova -->';

$invalid_blueprint_content =
	'<!-- wp:novablocks/supernova {"contentType":"custom","palette":1,"paletteVariation":11,"colorSignal":3,"contentPaletteVariation":11,"contentColorSignal":3} -->' .
	'<!-- wp:novablocks/supernova-item {"contentType":"custom","cardLayout":"stacked"} -->' .
	'<!-- wp:paragraph --><p>Missing heading block.</p><!-- /wp:paragraph -->' .
	'<!-- /wp:novablocks/supernova-item -->' .
	'<!-- /wp:novablocks/supernova -->';

$blueprint_filter = static function ( $template, $id, $template_type ) use ( &$active_blueprint_mode, $valid_blueprint_content, $invalid_blueprint_content ) {
	if ( 'wp_template_part' !== $template_type || get_stylesheet() . '//card-image' !== $id ) {
		return $template;
	}

	if ( 'missing' === $active_blueprint_mode ) {
		return false;
	}

	$block_template                 = new WP_Block_Template();
	$block_template->id             = $id;
	$block_template->theme          = get_stylesheet();
	$block_template->slug           = 'card-image';
	$block_template->type           = 'wp_template_part';
	$block_template->source         = 'custom';
	$block_template->origin         = 'theme';
	$block_template->title          = 'Card Image';
	$block_template->content        = 'invalid' === $active_blueprint_mode ? $invalid_blueprint_content : $valid_blueprint_content;
	$block_template->area           = WP_TEMPLATE_PART_AREA_UNCATEGORIZED;
	$block_template->has_theme_file = false;
	$block_template->is_custom      = true;

	return $block_template;
};

$profile_filter = static function ( array $profile, $post ) use ( $image_post_id, $no_media_image_post_id ) {
	$post = get_post( $post );

	if ( ! $post instanceof WP_Post ) {
		return $profile;
	}

	if ( ! in_array( $post->ID, [ $image_post_id, $no_media_image_post_id ], true ) ) {
		return $profile;
	}

	$has_thumbnail = has_post_thumbnail( $post );

	return array_merge(
		$profile,
		[
			'format'       => 'image',
			'traits'       => [
				'image_shape'   => $has_thumbnail ? 'landscape' : 'text',
				'has_thumbnail' => $has_thumbnail,
				'media_mode'    => 'image',
			],
			'card_variant' => 'image',
			'extracts'     => [
				'quote'          => '',
				'quote_citation' => '',
				'link'           => '',
			],
		]
	);
};

$render_data_filter = static function ( array $render_data, $post, array $attributes, array $profile ) {
	if ( empty( $profile['format'] ) ) {
		return $render_data;
	}

	$render_data['card_classes'] = array_values(
		array_unique(
			array_merge(
				$render_data['card_classes'] ?? [],
				[
					'format-' . $profile['format'],
					'card-trait-' . ( $profile['traits']['image_shape'] ?? 'text' ),
					'card-variant-' . ( $profile['card_variant'] ?? 'default' ),
				]
			)
		)
	);

	return $render_data;
};

add_filter( 'pre_get_block_template', $blueprint_filter, 10, 3 );
add_filter( 'novablocks/post_card_profile', $profile_filter, 10, 2 );
add_filter( 'novablocks/post_card_render_data', $render_data_filter, 10, 4 );

try {
	$direct_blueprint_template                 = new WP_Block_Template();
	$direct_blueprint_template->slug           = 'card-image';
	$direct_blueprint_template->content        = $valid_blueprint_content;
	$direct_blueprint_template->type           = 'wp_template_part';
	$direct_blueprint_template->theme          = get_stylesheet();
	$direct_blueprint_template->source         = 'custom';
	$direct_blueprint_template->origin         = 'theme';
	$direct_blueprint_template->area           = WP_TEMPLATE_PART_AREA_UNCATEGORIZED;
	$direct_blueprint_template->has_theme_file = false;
	$direct_blueprint_template->is_custom      = true;

	$direct_blueprint = novablocks_parse_post_format_card_blueprint( $direct_blueprint_template );

	if ( empty( $direct_blueprint ) ) {
		novablocks_fail_post_format_image_blueprint_contract( 'Expected the direct Image blueprint fixture to parse successfully.' );
	}

	$direct_root_attributes = novablocks_get_post_format_blueprint_root_attributes( $attributes, $direct_blueprint );
	$direct_root_css        = novablocks_get_space_and_sizing_css( $direct_root_attributes );

	if ( ! in_array( '--nb-card-media-padding-multiplier: 0.25', $direct_root_css, true ) ) {
		novablocks_fail_post_format_image_blueprint_contract( 'Expected Image blueprint roots to propagate media padding into the Supernova surface context.' );
	}

	$active_blueprint_mode = 'valid';
	$valid_markup          = novablocks_get_collection_card_markup_from_post( get_post( $image_post_id ), $attributes );

	if ( false === strpos( $valid_markup, 'format-image' ) ) {
		novablocks_fail_post_format_image_blueprint_contract( 'Expected Image cards to keep the semantic format class.' );
	}

	if ( false === strpos( $valid_markup, 'card-variant-image' ) ) {
		novablocks_fail_post_format_image_blueprint_contract( 'Expected Image cards to keep the Image card variant class.' );
	}

	if ( 1 !== preg_match( '/<div class="[^"]*\\bnb-supernova\\b[^"]*"/', $valid_markup ) ) {
		novablocks_fail_post_format_image_blueprint_contract( 'Expected Image blueprint cards to render inside a Supernova surface wrapper.' );
	}

	if ( false !== strpos( $valid_markup, 'nb-collection__body' ) ) {
		novablocks_fail_post_format_image_blueprint_contract( 'Expected Image blueprint cards to avoid nested collection wrappers.' );
	}

	if ( 1 !== substr_count( $valid_markup, 'nb-collection__layout-item' ) ) {
		novablocks_fail_post_format_image_blueprint_contract( 'Expected Image blueprint cards to keep exactly one parent collection layout item wrapper.' );
	}

	if ( 1 !== preg_match( '/<div class="[^"]*\\bnb-supernova\\b[^"]*"[^>]*data-color-signal=[\'"]3[\'"]/', $valid_markup ) ) {
		novablocks_fail_post_format_image_blueprint_contract( 'Expected Image blueprint root signal context to reach the rendered card.' );
	}

	if ( 1 !== preg_match( '/<div class="[^"]*\\bnb-supernova\\b[^"]*"[^>]*style="[^"]*--nb-card-media-padding-multiplier:\s*0\.25\b/', $valid_markup ) ) {
		novablocks_fail_post_format_image_blueprint_contract( 'Expected Image blueprint roots to carry the blueprint media padding multiplier.' );
	}

	if ( 1 !== preg_match( '/<div class="[^"]*\\bnb-supernova-item\\b[^"]*"[^>]*data-color-signal=[\'"]0[\'"]/', $valid_markup ) ) {
		novablocks_fail_post_format_image_blueprint_contract( 'Expected Image blueprint items to stay neutral relative to the blueprint root signal.' );
	}

	if ( false === strpos( $valid_markup, 'Image Blueprint Fixture' ) ) {
		novablocks_fail_post_format_image_blueprint_contract( 'Expected Image blueprint cards to inject the live post title.' );
	}

	if ( false !== strpos( $valid_markup, 'Blueprint image title' ) ) {
		novablocks_fail_post_format_image_blueprint_contract( 'Expected Image blueprint cards to replace the static blueprint heading copy.' );
	}

	if ( false === strpos( $valid_markup, 'wp-block-heading is-style-default' ) ) {
		novablocks_fail_post_format_image_blueprint_contract( 'Expected Image blueprint cards to preserve the heading block styling classes.' );
	}

	if ( false === strpos( $valid_markup, 'aria-label="Image Blueprint Fixture"' ) ) {
		novablocks_fail_post_format_image_blueprint_contract( 'Expected Image blueprint cards to bind the live permalink aria label.' );
	}

	$no_media_markup = novablocks_get_collection_card_markup_from_post( get_post( $no_media_image_post_id ), $attributes );

	if ( false === strpos( $no_media_markup, 'format-image' ) ) {
		novablocks_fail_post_format_image_blueprint_contract( 'Expected Image posts without thumbnails to keep the Image blueprint path.' );
	}

	if ( false !== strpos( $no_media_markup, 'nb-supernova-item__media-wrapper' ) ) {
		novablocks_fail_post_format_image_blueprint_contract( 'Expected Image blueprint cards without thumbnails to omit the media wrapper.' );
	}

	$active_blueprint_mode = 'invalid';
	$fallback_markup       = novablocks_get_collection_card_markup_from_post( get_post( $image_post_id ), $attributes );

	if ( false === strpos( $fallback_markup, 'nb-card__title' ) ) {
		novablocks_fail_post_format_image_blueprint_contract( 'Expected invalid Image blueprints to fall back to the normal collection-card renderer.' );
	}

	echo "post format image blueprint contract ok\n";
} finally {
	remove_filter( 'pre_get_block_template', $blueprint_filter, 10 );
	remove_filter( 'novablocks/post_card_profile', $profile_filter, 10 );
	remove_filter( 'novablocks/post_card_render_data', $render_data_filter, 10 );

	foreach ( array_reverse( $created_post_ids ) as $post_id ) {
		wp_delete_post( $post_id, true );
	}

	foreach ( array_reverse( $created_attachment_ids ) as $attachment_id ) {
		wp_delete_attachment( $attachment_id, true );
	}
}
