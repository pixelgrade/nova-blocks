<?php

if ( ! function_exists( 'sm_build_contextual_palette_from_color' ) ) {
	throw new RuntimeException( 'Expected sm_build_contextual_palette_from_color() to exist.' );
}

$palette = sm_build_contextual_palette_from_color( '#123456', 'contextual-post', 'Contextual Post' );

if ( ! is_object( $palette ) ) {
	throw new RuntimeException( 'Expected contextual palette builder to return an object.' );
}

if ( 'contextual-post' !== (string) $palette->id ) {
	throw new RuntimeException( 'Expected contextual palette id to match the requested id.' );
}

if ( 'Contextual Post' !== (string) $palette->label ) {
	throw new RuntimeException( 'Expected contextual palette label to match the requested label.' );
}

if ( empty( $palette->source ) || ! is_array( $palette->source ) ) {
	throw new RuntimeException( 'Expected contextual palette source colors to be preserved.' );
}

if ( '#123456' !== strtolower( (string) $palette->source[0] ) ) {
	throw new RuntimeException( 'Expected contextual palette source to start with the requested color.' );
}

if ( ! isset( $palette->sourceIndex ) || ! is_int( $palette->sourceIndex ) ) {
	throw new RuntimeException( 'Expected contextual palette to expose an integer sourceIndex.' );
}

if ( ! isset( $palette->variations ) || ! is_array( $palette->variations ) || count( $palette->variations ) !== 12 ) {
	throw new RuntimeException( 'Expected contextual palette to expose 12 light variations.' );
}

if ( ! isset( $palette->darkVariations ) || ! is_array( $palette->darkVariations ) || count( $palette->darkVariations ) !== 12 ) {
	throw new RuntimeException( 'Expected contextual palette to expose 12 dark variations.' );
}

foreach ( [ 'variations', 'darkVariations' ] as $key ) {
	foreach ( $palette->{$key} as $index => $variation ) {
		if ( ! is_object( $variation ) ) {
			throw new RuntimeException( sprintf( 'Expected %s[%d] to be an object.', $key, $index ) );
		}

		foreach ( [ 'bg', 'accent', 'fg1', 'fg2' ] as $required_key ) {
			if ( empty( $variation->{$required_key} ) ) {
				throw new RuntimeException( sprintf( 'Expected %s[%d] to expose %s.', $key, $index, $required_key ) );
			}
		}
	}
}

echo "contextual color palette style manager contract ok\n";
