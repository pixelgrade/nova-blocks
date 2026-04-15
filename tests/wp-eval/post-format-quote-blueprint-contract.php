<?php
/**
 * Contract test for Quote blueprint collection cards.
 *
 * Run with:
 * studio wp eval-file /wordpress/wp-content/plugins/nova-blocks/tests/wp-eval/post-format-quote-blueprint-contract.php --path /Users/georgeolaru/Studio/hive-lt-starter
 */

function novablocks_fail_post_format_quote_blueprint_contract( string $message ): void {
	fwrite( STDERR, $message . PHP_EOL );
	exit( 1 );
}

if ( ! defined( 'ABSPATH' ) ) {
	novablocks_fail_post_format_quote_blueprint_contract( 'This script must run through wp eval-file.' );
}

if ( ! function_exists( 'novablocks_get_collection_card_markup_from_post' ) ) {
	novablocks_fail_post_format_quote_blueprint_contract( 'Expected Nova card helpers to be available.' );
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
		novablocks_fail_post_format_quote_blueprint_contract( 'Expected fixture post creation to succeed.' );
	}

	$created_post_ids[] = $post_id;

	return $post_id;
};

$create_attachment = static function ( string $title, int $width, int $height ) use ( &$created_attachment_ids ): int {
	$uploads = wp_upload_dir();

	if ( ! empty( $uploads['error'] ) ) {
		novablocks_fail_post_format_quote_blueprint_contract( 'Expected uploads to be available for attachment fixtures.' );
	}

	$fixture_dir = trailingslashit( $uploads['path'] ) . 'contract-fixtures';
	wp_mkdir_p( $fixture_dir );

	$file_name = sanitize_title( $title ) . '-' . wp_generate_password( 6, false, false ) . '.jpg';
	$file_path = trailingslashit( $fixture_dir ) . $file_name;
	$image     = imagecreatetruecolor( $width, $height );

	if ( false === $image ) {
		novablocks_fail_post_format_quote_blueprint_contract( 'Expected GD image creation to succeed for attachment fixtures.' );
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
		novablocks_fail_post_format_quote_blueprint_contract( 'Expected fixture attachment creation to succeed.' );
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

$quote_post_id = $create_post(
	[
		'post_title'   => 'Quote Blueprint Fixture',
		'post_content' => '<!-- wp:quote --><blockquote class="wp-block-quote"><!-- wp:paragraph --><p>Static fallback copy.</p><!-- /wp:paragraph --></blockquote><!-- /wp:quote -->',
	]
);

$no_media_quote_post_id = $create_post(
	[
		'post_title'   => 'Quote Blueprint No Media Fixture',
		'post_content' => '<!-- wp:quote --><blockquote class="wp-block-quote"><!-- wp:paragraph --><p>Static fallback copy.</p><!-- /wp:paragraph --></blockquote><!-- /wp:quote -->',
	]
);

$no_extract_quote_post_id = $create_post(
	[
		'post_title'   => 'Quote Blueprint No Extract Fixture',
		'post_content' => '<!-- wp:paragraph --><p>No quote block here.</p><!-- /wp:paragraph -->',
	]
);

set_post_format( $quote_post_id, 'quote' );
set_post_format( $no_media_quote_post_id, 'quote' );
set_post_format( $no_extract_quote_post_id, 'quote' );

$quote_attachment_id = $create_attachment( 'Quote Blueprint Fixture', 1600, 900 );
set_post_thumbnail( $quote_post_id, $quote_attachment_id );

$valid_blueprint_content =
	'<!-- wp:novablocks/supernova {"contentType":"custom","colorSignal":3,"paletteVariation":11,"palette":1} -->' .
	'<!-- wp:novablocks/supernova-item {"contentType":"custom","cardLayout":"stacked","contentPosition":"bottom right","contentPadding":50,"overlayFilterStrength":80,"minHeightFallback":66,"thumbnailAspectRatioString":"landscape","imageResizing":"cover","colorSignal":3,"paletteVariation":11,"contentPaletteVariation":11} -->' .
	'<!-- wp:quote --><blockquote class="wp-block-quote is-style-plain"><!-- wp:paragraph --><p>Blueprint quote copy.</p><!-- /wp:paragraph --><cite>Blueprint cite</cite></blockquote><!-- /wp:quote -->' .
	'<!-- /wp:novablocks/supernova-item -->' .
	'<!-- /wp:novablocks/supernova -->';

$invalid_blueprint_content =
	'<!-- wp:novablocks/supernova {"contentType":"custom","colorSignal":3,"paletteVariation":11,"palette":1} -->' .
	'<!-- wp:novablocks/supernova-item {"contentType":"custom","cardLayout":"stacked"} -->' .
	'<!-- wp:paragraph --><p>Missing quote block.</p><!-- /wp:paragraph -->' .
	'<!-- /wp:novablocks/supernova-item -->' .
	'<!-- /wp:novablocks/supernova -->';

$blueprint_filter = static function ( $template, $id, $template_type ) use ( &$active_blueprint_mode, $valid_blueprint_content, $invalid_blueprint_content ) {
	if ( 'wp_template_part' !== $template_type || get_stylesheet() . '//card-quote' !== $id ) {
		return $template;
	}

	if ( 'missing' === $active_blueprint_mode ) {
		return false;
	}

	$block_template                 = new WP_Block_Template();
	$block_template->id             = $id;
	$block_template->theme          = get_stylesheet();
	$block_template->slug           = 'card-quote';
	$block_template->type           = 'wp_template_part';
	$block_template->source         = 'custom';
	$block_template->origin         = 'theme';
	$block_template->title          = 'Card Quote';
	$block_template->content        = 'invalid' === $active_blueprint_mode ? $invalid_blueprint_content : $valid_blueprint_content;
	$block_template->area           = WP_TEMPLATE_PART_AREA_UNCATEGORIZED;
	$block_template->has_theme_file = false;
	$block_template->is_custom      = true;

	return $block_template;
};

$profile_filter = static function ( array $profile, $post ) use ( $quote_post_id, $no_media_quote_post_id, $no_extract_quote_post_id ) {
	$post = get_post( $post );

	if ( ! $post instanceof WP_Post ) {
		return $profile;
	}

	if ( ! in_array( $post->ID, [ $quote_post_id, $no_media_quote_post_id, $no_extract_quote_post_id ], true ) ) {
		return $profile;
	}

	$base_profile = [
		'format'       => 'quote',
		'traits'       => [
			'image_shape'   => has_post_thumbnail( $post ) ? 'landscape' : 'text',
			'has_thumbnail' => has_post_thumbnail( $post ),
			'media_mode'    => has_post_thumbnail( $post ) ? 'image' : 'text',
		],
		'card_variant' => 'quote',
		'extracts'     => [
			'quote'          => 'It is a purely lyrical process. A kind of musical shriving of the soul, in which there is an encrustation of material.',
			'quote_citation' => 'Paul Graham',
		],
	];

	if ( $post->ID === $no_extract_quote_post_id ) {
		$base_profile['extracts']['quote']          = '';
		$base_profile['extracts']['quote_citation'] = '';
	}

	return array_merge( $profile, $base_profile );
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
	$active_blueprint_mode = 'valid';
	$valid_markup          = novablocks_get_collection_card_markup_from_post( get_post( $quote_post_id ), $attributes );

	if ( false === strpos( $valid_markup, 'format-quote' ) ) {
		novablocks_fail_post_format_quote_blueprint_contract( 'Expected Quote cards to keep the semantic format class.' );
	}

	if ( false === strpos( $valid_markup, 'card-variant-quote' ) ) {
		novablocks_fail_post_format_quote_blueprint_contract( 'Expected Quote cards to keep the Quote card variant class.' );
	}

	if ( 1 !== preg_match( '/<div class="[^"]*\bnb-supernova\b[^"]*"/', $valid_markup ) ) {
		novablocks_fail_post_format_quote_blueprint_contract( 'Expected Quote blueprint cards to render inside a Supernova surface wrapper.' );
	}

	if ( false !== strpos( $valid_markup, 'nb-collection__body' ) ) {
		novablocks_fail_post_format_quote_blueprint_contract( 'Expected Quote blueprint cards to avoid nested collection wrappers.' );
	}

	if ( 1 !== substr_count( $valid_markup, 'nb-collection__layout-item' ) ) {
		novablocks_fail_post_format_quote_blueprint_contract( 'Expected Quote blueprint cards to keep exactly one parent collection layout item wrapper.' );
	}

	if ( false !== strpos( $valid_markup, 'nb-supernova--layout-masonry' ) || false !== strpos( $valid_markup, 'alignfull' ) ) {
		novablocks_fail_post_format_quote_blueprint_contract( 'Expected Quote blueprint roots to avoid collection layout classes.' );
	}

	if ( false === strpos( $valid_markup, 'nb-supernova--1-columns' ) ) {
		novablocks_fail_post_format_quote_blueprint_contract( 'Expected Quote blueprint roots to keep the single-card Supernova context.' );
	}

	if ( false === strpos( $valid_markup, 'display: block' ) ) {
		novablocks_fail_post_format_quote_blueprint_contract( 'Expected Quote blueprint roots to force block flow so the bound card can fill its slot.' );
	}

	if ( false === strpos( $valid_markup, 'aspect-ratio: auto' ) ) {
		novablocks_fail_post_format_quote_blueprint_contract( 'Expected Quote blueprint items to opt out of the outer collection aspect-ratio utility.' );
	}

	if ( 1 !== preg_match( '/<div class="[^"]*\bnb-supernova\b[^"]*"[^>]*data-color-signal=[\'"]3[\'"]/', $valid_markup ) ) {
		novablocks_fail_post_format_quote_blueprint_contract( 'Expected Quote blueprint root signal context to reach the rendered card.' );
	}

	if ( false === strpos( $valid_markup, 'Paul Graham' ) ) {
		novablocks_fail_post_format_quote_blueprint_contract( 'Expected Quote blueprint cards to inject the live citation.' );
	}

	if ( false !== strpos( $valid_markup, 'Blueprint quote copy.' ) ) {
		novablocks_fail_post_format_quote_blueprint_contract( 'Expected Quote blueprint cards to replace the static blueprint quote copy.' );
	}

	$active_blueprint_mode = 'valid';
	$no_media_markup       = novablocks_get_collection_card_markup_from_post( get_post( $no_media_quote_post_id ), $attributes );

	if ( false !== strpos( $no_media_markup, 'nb-supernova-item__media-wrapper' ) ) {
		novablocks_fail_post_format_quote_blueprint_contract( 'Expected Quote blueprint cards without thumbnails to omit the media wrapper.' );
	}

	$active_blueprint_mode = 'invalid';
	$fallback_markup       = novablocks_get_collection_card_markup_from_post( get_post( $quote_post_id ), $attributes );

	if ( false === strpos( $fallback_markup, 'nb-card__title' ) ) {
		novablocks_fail_post_format_quote_blueprint_contract( 'Expected invalid Quote blueprints to fall back to the normal collection-card renderer.' );
	}

	$active_blueprint_mode = 'valid';
	$no_extract_markup     = novablocks_get_collection_card_markup_from_post( get_post( $no_extract_quote_post_id ), $attributes );

	if ( false === strpos( $no_extract_markup, 'nb-card__title' ) ) {
		novablocks_fail_post_format_quote_blueprint_contract( 'Expected Quote posts without extractable quote text to fall back to the normal collection-card renderer.' );
	}

	echo "post format quote blueprint contract ok\n";
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
