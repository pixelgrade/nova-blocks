<?php
/**
 * Contract test for expression-aware pre-render card data hooks.
 *
 * Run with:
 * studio wp eval-file /Users/georgeolaru/Local Sites/style-manager/app/public/wp-content/plugins/nova-blocks/tests/wp-eval/post-expression-card-render-data-contract.php --path /Users/georgeolaru/Studio/hive-lt-starter
 */

if ( ! defined( 'ABSPATH' ) ) {
	fwrite( STDERR, "This script must run through wp eval-file.\n" );
	exit( 1 );
}

$post_id = wp_insert_post(
	[
		'post_title'   => 'Expression Contract Post',
		'post_content' => '<!-- wp:paragraph --><p>Body copy</p><!-- /wp:paragraph -->',
		'post_excerpt' => 'Excerpt copy',
		'post_status'  => 'publish',
		'post_type'    => 'post',
	]
);

if ( is_wp_error( $post_id ) || empty( $post_id ) ) {
	throw new RuntimeException( 'Expected the contract fixture post to be created.' );
}

$render_data_filter = static function ( array $render_data ) {
	$render_data['card_classes'][] = 'has-expression-contract';
	$render_data['content_markup'] = '<div class="contract-content">Contract content</div>';

	return $render_data;
};

add_filter( 'novablocks/post_card_render_data', $render_data_filter, 10, 4 );

$markup = novablocks_get_collection_card_markup_from_post(
	get_post( $post_id ),
	[
		'showMedia'             => true,
		'showMeta'              => false,
		'showTitle'             => true,
		'showSubtitle'          => false,
		'showDescription'       => true,
		'showButtons'           => false,
		'primaryMetadata'       => 'none',
		'secondaryMetadata'     => 'none',
		'metadataPosition'      => 'below-title',
		'cardTitleLevel'        => 3,
		'cardTitleFontSize'     => 'regular',
		'contentPosition'       => 'top left',
		'columns'               => 1,
		'cardLayout'            => 'vertical',
		'palette'               => 1,
		'contentColorSignal'    => 0,
		'contentPaletteVariation' => 1,
	]
);

remove_filter( 'novablocks/post_card_render_data', $render_data_filter, 10 );
wp_delete_post( $post_id, true );

if ( false === strpos( $markup, 'has-expression-contract' ) ) {
	throw new RuntimeException( 'Expected pre-render hook classes to reach final card markup.' );
}

if ( false === strpos( $markup, 'contract-content' ) ) {
	throw new RuntimeException( 'Expected pre-render hook content override to reach final card markup.' );
}

echo "post expression pre-render contract ok\n";
