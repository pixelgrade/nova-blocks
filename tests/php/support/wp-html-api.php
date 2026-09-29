<?php
/**
 * Loads WordPress's real HTML API (WP_HTML_Tag_Processor, WP_HTML_Processor)
 * into a standalone PHP contract, from a local WordPress install:
 * `NB_WP_INCLUDES`, else the style-manager.local site, else the first Studio
 * site. Returns false when none is found; the caller decides to skip.
 */

function nb_load_wp_html_api(): bool {
	if ( class_exists( 'WP_HTML_Processor' ) ) {
		return true;
	}

	$home       = getenv( 'HOME' ) ?: '';
	$candidates = array_filter( array_merge(
		[ getenv( 'NB_WP_INCLUDES' ) ?: '', $home . '/Local Sites/style-manager/app/public/wp-includes' ],
		glob( $home . '/Studio/*/wp-includes' ) ?: []
	) );

	foreach ( $candidates as $includes ) {
		if ( ! is_file( $includes . '/html-api/class-wp-html-processor.php' ) ) {
			continue;
		}
		if ( ! function_exists( '__' ) ) {
			function __( $text ) { return $text; }
		}
		if ( ! function_exists( '_doing_it_wrong' ) ) {
			function _doing_it_wrong() {}
		}
		if ( ! function_exists( 'esc_html' ) ) {
			function esc_html( $text ) { return htmlspecialchars( (string) $text, ENT_QUOTES, 'UTF-8' ); }
		}
		if ( ! function_exists( 'wp_has_noncharacters' ) ) {
			function wp_has_noncharacters( $text ) { return (bool) preg_match( '/[\x{FDD0}-\x{FDEF}\x{FFFE}\x{FFFF}]/u', (string) $text ); }
		}
		if ( ! function_exists( 'wp_kses_uri_attributes' ) ) {
			function wp_kses_uri_attributes() { return [ 'href', 'src', 'action', 'cite', 'poster', 'srcset', 'data', 'formaction', 'longdesc', 'usemap', 'xmlns' ]; }
		}
		if ( ! function_exists( 'esc_url' ) ) {
			function esc_url( $url ) { return (string) $url; }
		}
		require_once $includes . '/class-wp-token-map.php';
		foreach ( [
			'html5-named-character-references',
			'class-wp-html-attribute-token',
			'class-wp-html-span',
			'class-wp-html-text-replacement',
			'class-wp-html-decoder',
			'class-wp-html-tag-processor',
			'class-wp-html-unsupported-exception',
			'class-wp-html-active-formatting-elements',
			'class-wp-html-open-elements',
			'class-wp-html-token',
			'class-wp-html-stack-event',
			'class-wp-html-processor-state',
			'class-wp-html-doctype-info',
			'class-wp-html-processor',
		] as $file ) {
			require_once $includes . '/html-api/' . $file . '.php';
		}
		return true;
	}

	return false;
}
