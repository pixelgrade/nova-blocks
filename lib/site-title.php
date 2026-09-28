<?php
/**
 * Site Title design-system integrations.
 *
 * @package Nova_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const NOVABLOCKS_SITE_TITLE_DEFAULT_FIT_WIDTH = 395;
const NOVABLOCKS_SITE_TITLE_MIN_FIT_WIDTH     = 80;
const NOVABLOCKS_SITE_TITLE_MAX_FIT_WIDTH     = 800;
const NOVABLOCKS_SITE_TITLE_MIN_FIT_RATIO     = 0.3;
const NOVABLOCKS_SITE_TITLE_MAX_FIT_RATIO     = 200;

/**
 * Enable core Fit Text and register Nova's durable width setting on Site Title.
 *
 * @param array $metadata Block type metadata.
 * @return array
 */
function novablocks_filter_site_title_metadata( array $metadata ): array {
	if ( 'core/site-title' !== ( $metadata['name'] ?? '' ) ) {
		return $metadata;
	}

	if ( ! isset( $metadata['supports'] ) || ! is_array( $metadata['supports'] ) ) {
		$metadata['supports'] = [];
	}

	if ( ! isset( $metadata['supports']['typography'] ) || ! is_array( $metadata['supports']['typography'] ) ) {
		$metadata['supports']['typography'] = [];
	}

	$metadata['supports']['typography']['fitText'] = true;

	if ( ! isset( $metadata['attributes'] ) || ! is_array( $metadata['attributes'] ) ) {
		$metadata['attributes'] = [];
	}

	$metadata['attributes']['fitText'] = [
		'type' => 'boolean',
	];

	$metadata['attributes']['fitTextWidth'] = [
		'type'    => 'number',
		'default' => NOVABLOCKS_SITE_TITLE_DEFAULT_FIT_WIDTH,
	];

	// `{ text, ratio }` measured by the editor; see novablocks_get_site_title_fit_ratio().
	$metadata['attributes']['fitTextMetrics'] = [
		'type' => 'object',
	];

	return $metadata;
}
add_filter( 'block_type_metadata', 'novablocks_filter_site_title_metadata' );

/**
 * Normalize a Site Title Fit Text width to Nova's supported pixel range.
 *
 * @param mixed $width Width supplied by block attributes.
 * @return int|null
 */
function novablocks_normalize_site_title_fit_width( $width ): ?int {
	if ( null === $width ) {
		return NOVABLOCKS_SITE_TITLE_DEFAULT_FIT_WIDTH;
	}

	if ( ! is_numeric( $width ) ) {
		return null;
	}

	$width = (int) round( (float) $width );

	return max(
		NOVABLOCKS_SITE_TITLE_MIN_FIT_WIDTH,
		min( NOVABLOCKS_SITE_TITLE_MAX_FIT_WIDTH, $width )
	);
}

/**
 * Normalize a Site Title for comparison between the editor and the server.
 *
 * The site name is stored with HTML entities, while the editor measures the
 * rendered text.
 *
 * @param mixed $text Site name or measured text.
 * @return string
 */
function novablocks_normalize_site_title_fit_text( $text ): string {
	if ( ! is_string( $text ) ) {
		return '';
	}

	return trim( preg_replace( '/\s+/u', ' ', html_entity_decode( $text, ENT_QUOTES | ENT_HTML5, 'UTF-8' ) ) );
}

/**
 * Estimate a title's width per pixel of font size without font metrics.
 *
 * Used when the editor has not measured the current site name (for example
 * markup written by WP-CLI, or a site name changed in Settings); a stored
 * measurement of another name then calibrates it for the face. The
 * advances are Helvetica Bold's, which is wider than most wordmark faces, so
 * the estimate errs toward a slightly small title rather than an overflowing
 * one; the fit-text script refines it whenever it runs.
 *
 * @param string $text       Site name.
 * @param array  $attributes Site Title block attributes.
 * @return float|null Ratio, or null for empty text.
 */
function novablocks_estimate_site_title_fit_ratio( string $text, array $attributes ): ?float {
	static $upper = [
		'A' => 722, 'B' => 722, 'C' => 722, 'D' => 722, 'E' => 667, 'F' => 611, 'G' => 778,
		'H' => 722, 'I' => 278, 'J' => 556, 'K' => 722, 'L' => 611, 'M' => 833, 'N' => 722,
		'O' => 778, 'P' => 667, 'Q' => 778, 'R' => 722, 'S' => 667, 'T' => 611, 'U' => 722,
		'V' => 667, 'W' => 944, 'X' => 667, 'Y' => 667, 'Z' => 611,
	];
	static $lower = [
		'a' => 556, 'b' => 611, 'c' => 556, 'd' => 611, 'e' => 556, 'f' => 333, 'g' => 611,
		'h' => 611, 'i' => 278, 'j' => 278, 'k' => 556, 'l' => 278, 'm' => 889, 'n' => 611,
		'o' => 611, 'p' => 611, 'q' => 611, 'r' => 389, 's' => 556, 't' => 333, 'u' => 611,
		'v' => 556, 'w' => 778, 'x' => 556, 'y' => 556, 'z' => 500,
	];
	static $other = [
		' ' => 278, '.' => 278, ',' => 278, ':' => 333, ';' => 333, '!' => 333, '?' => 611,
		'\'' => 238, '"' => 474, '-' => 333, '&' => 722, '(' => 333, ')' => 333, '/' => 278,
		'0' => 556, '1' => 556, '2' => 556, '3' => 556, '4' => 556, '5' => 556, '6' => 556,
		'7' => 556, '8' => 556, '9' => 556,
	];

	$text = novablocks_normalize_site_title_fit_text( $text );
	if ( '' === $text ) {
		return null;
	}

	$typography = $attributes['style']['typography'] ?? [];
	$transform  = is_array( $typography ) ? ( $typography['textTransform'] ?? null ) : null;

	$characters = preg_split( '//u', $text, -1, PREG_SPLIT_NO_EMPTY );
	$width      = 0;

	foreach ( $characters as $index => $character ) {
		if ( 'uppercase' === $transform || ( 'capitalize' === $transform && ( 0 === $index || ' ' === $characters[ $index - 1 ] ) ) ) {
			$character = strtoupper( $character );
		} elseif ( 'lowercase' === $transform ) {
			$character = strtolower( $character );
		}

		$upper_width = $upper[ strtoupper( $character ) ] ?? null;
		$lower_width = $lower[ strtolower( $character ) ] ?? null;

		if ( isset( $other[ $character ] ) ) {
			$width += $other[ $character ];
		} elseif ( null === $upper_width ) {
			// Accented, non-Latin or unknown glyphs: assume a full em.
			$width += 1000;
		} elseif ( null === $transform || 'none' === $transform ) {
			// The theme may still transform the title; assume the wider case.
			$width += 'none' === $transform ? ( $upper[ $character ] ?? $lower[ $character ] ) : max( $upper_width, $lower_width );
		} else {
			$width += $upper[ $character ] ?? $lower[ $character ];
		}
	}

	$ratio = $width / 1000;

	$letter_spacing = is_array( $typography ) ? ( $typography['letterSpacing'] ?? null ) : null;
	if ( is_string( $letter_spacing ) && preg_match( '/^(-?\d*\.?\d+)em$/', trim( $letter_spacing ), $match ) ) {
		$ratio += count( $characters ) * (float) $match[1];
	}

	return max( NOVABLOCKS_SITE_TITLE_MIN_FIT_RATIO, min( NOVABLOCKS_SITE_TITLE_MAX_FIT_RATIO, $ratio ) );
}

/**
 * Resolve the width-per-font-size ratio of a fitted Site Title.
 *
 * The editor stores the ratio it measured together with the site name it
 * measured; it is exact for that name. When the name changed since (Settings,
 * WP-CLI, or a Site Editor save that left the header untouched), the stored
 * measurement still describes the face: it calibrates the estimate for the
 * new name. Without any measurement, the raw estimate applies.
 *
 * @param array $attributes Site Title block attributes.
 * @return float|null
 */
function novablocks_get_site_title_fit_ratio( array $attributes ): ?float {
	$site_name = novablocks_normalize_site_title_fit_text( get_bloginfo( 'name' ) );
	$estimate  = novablocks_estimate_site_title_fit_ratio( $site_name, $attributes );
	$metrics   = $attributes['fitTextMetrics'] ?? null;

	if ( null === $estimate || ! is_array( $metrics ) || ! is_numeric( $metrics['ratio'] ?? null ) ) {
		return $estimate;
	}

	$ratio = (float) $metrics['ratio'];
	if ( $ratio < NOVABLOCKS_SITE_TITLE_MIN_FIT_RATIO || $ratio > NOVABLOCKS_SITE_TITLE_MAX_FIT_RATIO ) {
		return $estimate;
	}

	$measured_text = novablocks_normalize_site_title_fit_text( $metrics['text'] ?? null );
	if ( $measured_text === $site_name ) {
		return $ratio;
	}

	$measured_estimate = novablocks_estimate_site_title_fit_ratio( $measured_text, $attributes );
	if ( null === $measured_estimate ) {
		return $estimate;
	}

	return max(
		NOVABLOCKS_SITE_TITLE_MIN_FIT_RATIO,
		min( NOVABLOCKS_SITE_TITLE_MAX_FIT_RATIO, $estimate * $ratio / $measured_estimate )
	);
}

/**
 * Format a ratio for CSS, rounding up so the fallback never oversizes.
 *
 * @param float $ratio Ratio.
 * @return string
 */
function novablocks_format_site_title_fit_ratio( float $ratio ): string {
	return rtrim( rtrim( sprintf( '%.3F', ceil( $ratio * 1000 - 1e-6 ) / 1000 ), '0' ), '.' );
}

/**
 * Add the fitted wordmark width to the dynamic Site Title wrapper.
 *
 * WordPress core owns font-size calculation. Nova only constrains the available
 * inline measure, which keeps the derived value stable across editor/frontend.
 *
 * @param string $block_content Rendered Site Title markup.
 * @param array  $block         Parsed block data.
 * @return string
 */
function novablocks_render_site_title_fit_width( string $block_content, array $block ): string {
	$attributes = $block['attrs'] ?? [];

	if ( true !== ( $attributes['fitText'] ?? false ) ) {
		return $block_content;
	}

	$has_explicit_width = array_key_exists( 'fitTextWidth', $attributes );
	$width              = novablocks_normalize_site_title_fit_width(
		$has_explicit_width ? $attributes['fitTextWidth'] : null
	);

	$processor = new WP_HTML_Tag_Processor( $block_content );
	if ( ! $processor->next_tag() ) {
		return $block_content;
	}

	$processor->add_class( 'has-fit-text' );
	$site_title = $processor->get_updated_html();

	// The ratio lets CSS size the title from its container when core's
	// fit-text script does not run (issue #680); the script still refines it.
	$ratio        = novablocks_get_site_title_fit_ratio( $attributes );
	$declarations = [];
	if ( null !== $width ) {
		$declarations[] = '--nb-site-title-fit-width:' . $width . 'px';
	}
	if ( null !== $ratio ) {
		$declarations[] = '--nb-site-title-fit-ratio:' . novablocks_format_site_title_fit_ratio( $ratio );
	}

	$class = null === $ratio ? 'nb-site-title-fit-container' : 'nb-site-title-fit-container has-fit-ratio';
	$style = empty( $declarations ) ? '' : ' style="' . implode( ';', $declarations ) . '"';

	return '<div class="' . $class . '"' . $style . '>' . $site_title . '</div>';
}
add_filter( 'render_block_core/site-title', 'novablocks_render_site_title_fit_width', 10, 2 );
