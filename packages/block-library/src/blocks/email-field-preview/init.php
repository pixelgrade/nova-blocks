<?php
/** Presentation-only email field. No provider, data collection or transport. */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_render_email_field_preview_block( $attributes = [] ): string {
	// Recheck at render time: imported content must never expose this on production.
	if ( ! function_exists( 'wp_get_environment_type' ) || ! in_array( wp_get_environment_type(), [ 'local', 'staging' ], true ) ) {
		return '';
	}
	$field_id = wp_unique_id( 'nb-email-preview-' );
	$compact  = true === ( $attributes['compact'] ?? false );
	$label    = esc_html__( 'Email address', 'nova-blocks' );
	$label_ui = $compact ? '' : '<p class="h5"><label for="' . esc_attr( $field_id ) . '">' . $label . '</label></p>';
	$aria     = $compact ? ' aria-label="' . esc_attr( $label ) . '"' : '';
	return '<div ' . get_block_wrapper_attributes( [ 'class' => $compact ? 'form-column is-compact' : 'form-column' ] ) . '>'
		. $label_ui
		. '<div class="form-inline"><input id="' . esc_attr( $field_id ) . '" type="email" value="" placeholder="you@mail.com" readonly autocomplete="off"' . $aria . ' />'
		. '<div class="wp-block-button"><button class="wp-block-button__link wp-element-button" type="button" aria-disabled="true">' . esc_html__( 'Subscribe', 'nova-blocks' ) . '</button></div></div>'
		. '</div>';
}
