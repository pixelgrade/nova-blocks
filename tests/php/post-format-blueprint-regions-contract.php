<?php
/**
 * Contract: a post-format blueprint card renders only its own content (#676).
 *
 * From the collection's card anatomy a blueprint card keeps only the metadata
 * ordered before Media (e.g. Patch LT's category/byline above a Quote card).
 * The collection's title, subtitle, description and buttons belong to the
 * regular card; the blueprint's own heading/quote replaces them, so they must
 * never leak into the blueprint surface. The blueprint content is one region
 * after the media (or content-only without media), independent of where the
 * collection places its title.
 */

define( 'ABSPATH', __DIR__ );

require_once dirname( __DIR__, 2 ) . '/lib/post-format-card-blueprints.php';

function assert_blueprint_regions( array $expected, array $order, bool $has_media, string $message ): void {
	$actual = novablocks_get_post_format_blueprint_content_regions( $order, $has_media );

	if ( $expected !== $actual ) {
		throw new RuntimeException(
			$message . "\nExpected: " . var_export( $expected, true ) . "\nActual: " . var_export( $actual, true )
		);
	}
}

$blueprint_after_media = [
	'placement'  => 'after-media',
	'items'      => [],
	'classNames' => [
		'nb-supernova-item__content--after-media',
		'nb-supernova-item__content--trailing-boundary',
	],
];

assert_blueprint_regions(
	[ $blueprint_after_media ],
	[ 'title', 'media', 'description', 'meta-primary', 'meta-secondary' ],
	true,
	'A title placed before Media must not open a before-media region on a blueprint card (#676).'
);

assert_blueprint_regions(
	[ $blueprint_after_media ],
	[ 'subtitle', 'description', 'buttons', 'media', 'title' ],
	true,
	'Only metadata may precede the blueprint media; subtitle, description and buttons belong to the regular card.'
);

assert_blueprint_regions(
	[
		[
			'placement'  => 'before-media',
			'items'      => [ 'meta-primary', 'meta-secondary' ],
			'classNames' => [
				'nb-supernova-item__content--before-media',
				'nb-supernova-item__content--details-only',
				'nb-supernova-item__content--leading-boundary',
			],
		],
		$blueprint_after_media,
	],
	[ 'meta-primary', 'title', 'meta-secondary', 'media', 'description' ],
	true,
	'Metadata ordered before Media stays on the blueprint card, without the title between them.'
);

assert_blueprint_regions(
	[
		[
			'placement'  => 'content-only',
			'items'      => [],
			'classNames' => [
				'nb-supernova-item__content--content-only',
				'nb-supernova-item__content--leading-boundary',
				'nb-supernova-item__content--trailing-boundary',
			],
		],
	],
	[ 'meta-primary', 'title', 'media', 'description' ],
	false,
	'A blueprint card without media is one content-only region with no collection content.'
);

$blueprint_source = file_get_contents( dirname( __DIR__, 2 ) . '/lib/post-format-card-blueprints.php' );

if ( ! preg_match( '/novablocks_get_collection_card_surface_markup\(\s*\$media_markup,\s*\$content_markup,\s*\$item_attributes,\s*\$leading_markup,\s*\$blueprint_regions\s*\)/', $blueprint_source ) ) {
	throw new RuntimeException( 'The blueprint surface must render its own regions, not the collection\'s content_before_media (#676).' );
}

echo "post-format blueprint regions contract ok\n";
