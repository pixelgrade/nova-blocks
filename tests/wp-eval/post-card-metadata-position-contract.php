<?php

require_once __DIR__ . '/../../lib/block-rendering.php';

$attributes = [
	'showMeta'         => true,
	'showTitle'        => true,
	'showSubtitle'     => false,
	'showDescription'  => true,
	'showButtons'      => true,
	'buttonText'       => 'Read More',
	'buttonUrl'        => 'https://example.com/read-more',
	'contentPosition'  => 'center left',
	'buttonsStyle'     => 'text',
	'cardTitleLevel'   => 3,
	'cardTitleFontSize'=> 'normal',
	'title'            => 'Maira Kalman',
	'subtitle'         => '',
	'description'      => 'Excerpt copy',
	'metaAboveTitle'   => '',
	'metaBelowTitle'   => '',
	'metaBelowContent' => 'July 27, 2018 / Lifestyle',
];

$markup = novablocks_get_card_contents( $attributes );

$description_position   = strpos( $markup, 'Excerpt copy' );
$below_content_position = strpos( $markup, 'July 27, 2018 / Lifestyle' );
$button_position        = strpos( $markup, 'Read More' );

if ( false === $description_position ) {
	throw new RuntimeException( 'Expected card contents output to include the description text.' );
}

if ( false === $below_content_position ) {
	throw new RuntimeException( 'Expected card contents output to include the below-content metadata text.' );
}

if ( false === $button_position ) {
	throw new RuntimeException( 'Expected card contents output to include the card button text.' );
}

if ( ! ( $description_position < $below_content_position && $below_content_position < $button_position ) ) {
	throw new RuntimeException( 'Expected below-content metadata to render after the description and before the button.' );
}

echo "post-card metadata position contract ok\n";
