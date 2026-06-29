<?php
/**
 * Contract test for current item featured image media source rendering.
 *
 * Run with:
 * wp eval-file wp-content/plugins/nova-blocks/tests/wp-eval/current-item-featured-image-media-source-contract.php
 */

function novablocks_fail_current_item_featured_image_media_source_contract( string $message ): void {
	fwrite( STDERR, $message . PHP_EOL );
	exit( 1 );
}

if ( ! defined( 'ABSPATH' ) ) {
	novablocks_fail_current_item_featured_image_media_source_contract( 'This script must run through wp eval-file.' );
}

if ( ! function_exists( 'novablocks_render_supernova_block' ) || ! function_exists( 'novablocks_render_supernova_item_block' ) ) {
	novablocks_fail_current_item_featured_image_media_source_contract( 'Expected Nova Supernova render helpers to be available.' );
}

$created_post_ids       = [];
$created_attachment_ids = [];
$previous_post          = null;
$replaced_global_post   = false;

register_shutdown_function(
	static function () use ( &$created_post_ids, &$created_attachment_ids, &$previous_post, &$replaced_global_post ): void {
		if ( $replaced_global_post ) {
			if ( $previous_post instanceof WP_Post ) {
				$GLOBALS['post'] = $previous_post;
				setup_postdata( $previous_post );
			} else {
				wp_reset_postdata();
			}
		}

		foreach ( $created_post_ids as $post_id ) {
			wp_delete_post( $post_id, true );
		}

		foreach ( $created_attachment_ids as $attachment_id ) {
			wp_delete_attachment( $attachment_id, true );
		}
	}
);

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
		novablocks_fail_current_item_featured_image_media_source_contract( 'Expected fixture post creation to succeed.' );
	}

	$created_post_ids[] = $post_id;

	return $post_id;
};

$create_attachment = static function ( string $title, int $width, int $height, string $alt ) use ( &$created_attachment_ids ): int {
	$uploads = wp_upload_dir();

	if ( ! empty( $uploads['error'] ) ) {
		novablocks_fail_current_item_featured_image_media_source_contract( 'Expected uploads to be available for attachment fixtures.' );
	}

	$fixture_dir = trailingslashit( $uploads['path'] ) . 'contract-fixtures';
	wp_mkdir_p( $fixture_dir );

	$file_name = sanitize_title( $title ) . '-' . wp_generate_password( 6, false, false ) . '.jpg';
	$file_path = trailingslashit( $fixture_dir ) . $file_name;
	$image     = imagecreatetruecolor( $width, $height );

	if ( false === $image ) {
		novablocks_fail_current_item_featured_image_media_source_contract( 'Expected GD image creation to succeed for attachment fixtures.' );
	}

	$background = imagecolorallocate( $image, 90, 120, 160 );
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
		novablocks_fail_current_item_featured_image_media_source_contract( 'Expected fixture attachment creation to succeed.' );
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

	update_post_meta( $attachment_id, '_wp_attachment_image_alt', $alt );
	$created_attachment_ids[] = $attachment_id;

	return $attachment_id;
};

$target_post_id = $create_post(
	[
		'post_title'   => 'Current Item Featured Image Target',
		'post_excerpt' => 'This excerpt should not be auto-rendered.',
	]
);
$decoy_post_id = $create_post(
	[
		'post_title'   => 'Decoy Global Post',
		'post_excerpt' => 'Decoy excerpt.',
	]
);

$featured_attachment_id = $create_attachment( 'Current Item Featured Image', 1600, 900, 'Current item featured image alt' );
$manual_attachment_id   = $create_attachment( 'Manual Card Image', 1200, 800, 'Manual image alt' );
set_post_thumbnail( $target_post_id, $featured_attachment_id );

$previous_post        = $GLOBALS['post'] ?? null;
$GLOBALS['post']      = get_post( $decoy_post_id );
$replaced_global_post = true;
setup_postdata( $GLOBALS['post'] );

$base_attributes = [
	'contentType'            => 'custom',
	'mediaSource'            => 'current-item-featured-image',
	'postsToShow'            => 1,
	'showCollectionTitle'    => false,
	'showCollectionSubtitle' => false,
	'showMedia'              => true,
	'showMeta'               => false,
	'showTitle'              => true,
	'showSubtitle'           => false,
	'showDescription'        => false,
	'showButtons'            => false,
	'displayInnerContent'    => true,
	'cardLayout'             => 'horizontal',
	'layoutStyle'            => 'classic',
	'columns'                => 1,
	'contentPosition'        => 'center left',
	'images'                 => [
		[
			'type' => 'image',
			'id'   => $manual_attachment_id,
			'url'  => wp_get_attachment_url( $manual_attachment_id ),
			'alt'  => 'Manual image alt',
		],
	],
];

$block_context = [
	'postId'   => $target_post_id,
	'postType' => 'post',
];

$item_block = new WP_Block(
	[
		'blockName'    => 'novablocks/supernova-item',
		'attrs'        => $base_attributes,
		'innerBlocks'  => [],
		'innerHTML'    => '',
		'innerContent' => [],
	],
	$block_context
);

$item_markup = novablocks_render_supernova_item_block(
	$item_block->attributes,
	'<p>Static custom content survives.</p>',
	$item_block
);

$parent_block = new WP_Block(
	[
		'blockName'    => 'novablocks/supernova',
		'attrs'        => $base_attributes,
		'innerBlocks'  => [],
		'innerHTML'    => '',
		'innerContent' => [],
	],
	$block_context
);

$markup = novablocks_render_supernova_block(
	$parent_block->attributes,
	$item_markup,
	$parent_block
);

if ( false === strpos( $markup, 'nb-supernova--content-type-custom' ) ) {
	novablocks_fail_current_item_featured_image_media_source_contract( 'Expected the custom content type class to be rendered.' );
}

if ( false === strpos( $markup, 'Static custom content survives.' ) ) {
	novablocks_fail_current_item_featured_image_media_source_contract( 'Expected custom inner block content to remain rendered.' );
}

if ( false !== strpos( $markup, 'Current Item Featured Image Target' ) ) {
	novablocks_fail_current_item_featured_image_media_source_contract( 'Expected the card not to auto-render the current item title.' );
}

if ( false !== strpos( $markup, 'This excerpt should not be auto-rendered.' ) ) {
	novablocks_fail_current_item_featured_image_media_source_contract( 'Expected the card not to auto-render the current item excerpt.' );
}

$featured_url = wp_get_attachment_url( $featured_attachment_id );
if ( ! $featured_url || false === strpos( $markup, $featured_url ) ) {
	novablocks_fail_current_item_featured_image_media_source_contract( 'Expected the card media to use the block context post featured image URL.' );
}

$manual_url = wp_get_attachment_url( $manual_attachment_id );
if ( $manual_url && false !== strpos( $markup, $manual_url ) ) {
	novablocks_fail_current_item_featured_image_media_source_contract( 'Expected the manual image to be replaced by the current item featured image.' );
}

if ( false === strpos( $markup, 'Current item featured image alt' ) ) {
	novablocks_fail_current_item_featured_image_media_source_contract( 'Expected the featured image alt text to be preserved.' );
}

echo "current item featured image media source contract ok\n";
