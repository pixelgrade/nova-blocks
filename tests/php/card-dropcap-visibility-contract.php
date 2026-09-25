<?php
/**
 * Contract for #636: a query-driven collection can drop its card dropcap and
 * the Read More label that rides with it, while every existing card keeps its
 * exact markup.
 */

function add_filter() {}
function apply_filters( $hook, $value ) {
	if ( 'novablocks_collection_layout_recipes' === $hook ) {
		return [
			[
				'id'           => 'anima-collage',
				'label'        => 'Collage Grid',
				'baseLayout'   => 'masonry',
				'capabilities' => [
					'readMoreAffordance' => true,
				],
			],
		];
	}

	return $value;
}
function esc_html( $value ) { return htmlspecialchars( (string) $value, ENT_QUOTES, 'UTF-8' ); }
function esc_attr( $value ) { return esc_html( $value ); }
function esc_url( $value ) { return esc_attr( $value ); }
function esc_html__( $value ) { return $value; }
function __( $value ) { return $value; }

require_once dirname( __DIR__, 2 ) . '/lib/block-rendering.php';

function novablocks_636_assert( bool $condition, string $message ): void {
	if ( ! $condition ) {
		throw new RuntimeException( $message );
	}
}

$root = dirname( __DIR__, 2 );

// The attribute is registered beside the other card visibility toggles and
// defaults to today's rendering.
$visibility_attributes = json_decode( file_get_contents( $root . '/packages/block-editor/src/filters/with-card-elements-visibility/attributes.json' ), true );
novablocks_636_assert(
	isset( $visibility_attributes['showDropcap'] )
	&& 'boolean' === $visibility_attributes['showDropcap']['type']
	&& true === $visibility_attributes['showDropcap']['default'],
	'showDropcap must be a boolean card visibility attribute that defaults to true.'
);

$link  = 'https://example.test/post/';
$media = '<img alt="">';

foreach ( [ 'legacy' => [], 'collage recipe' => [ 'layoutRecipe' => 'anima-collage' ] ] as $label => $attributes ) {
	$untouched = novablocks_get_collection_card_media_markup_wrapped( $media, $link, 'P', 'Post Title', $attributes );
	$shown     = novablocks_get_collection_card_media_markup_wrapped( $media, $link, 'P', 'Post Title', $attributes + [ 'showDropcap' => true ] );
	$hidden    = novablocks_get_collection_card_media_markup_wrapped( $media, $link, 'P', 'Post Title', $attributes + [ 'showDropcap' => false ] );

	novablocks_636_assert( false !== strpos( $untouched, 'nb-supernova-item__dropcap-wrapper' ), "$label: untouched cards keep the dropcap." );
	novablocks_636_assert( $untouched === $shown, "$label: the default must render byte-identical markup." );

	novablocks_636_assert( false === strpos( $hidden, 'dropcap' ), "$label: showDropcap false must drop the dropcap markup." );
	novablocks_636_assert( false === strpos( $hidden, 'Read More' ), "$label: showDropcap false must drop the Read More label." );
	novablocks_636_assert(
		false !== strpos( $hidden, '<a class="nb-supernova-item__media-wrapper" href="https://example.test/post/">' )
		&& false !== strpos( $hidden, $media ),
		"$label: the linked media must survive without the dropcap."
	);
	novablocks_636_assert(
		str_replace( [ "\t", "\n" ], '', $hidden ) === str_replace( [ "\t", "\n" ], '', preg_replace( '#<div class="nb-supernova-item__dropcap-wrapper.*?nb-supernova-item__dropcap-line--bottom"></div>\s*</div>#s', '', $untouched ) ),
		"$label: only the dropcap block may change."
	);
}

// The collection root must not grow a data-show-dropcap attribute: existing
// frontend DOM stays byte-compatible whatever the value.
$names = novablocks_get_supernova_data_attribute_names( [ 'showDropcap' => true, 'showButtons' => true ] );
novablocks_636_assert( ! in_array( 'showDropcap', $names, true ), 'showDropcap must not serialize as a collection data attribute.' );
novablocks_636_assert( in_array( 'showButtons', $names, true ), 'Other card toggles keep their data attributes.' );

echo "card dropcap visibility contract ok\n";
