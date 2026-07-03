<?php
/**
 * Pixelgrade Plus gating for Nova Blocks block features.
 *
 * Model (mirrors Style Manager's shipped playbook): a gentle live trial in the
 * editor — gated controls stay fully usable as a sandbox, everything updates
 * live — plus intrinsic server-side enforcement. Buying Plus is what makes the
 * refinements live on the site, not what makes the controls work.
 *
 * Two enforcement classes, decided per feature by whether free LT starters
 * ever shipped it:
 * - 'render': locked values are normalized at render time. Only used for
 *   features NO free starter content ships (the parametric layout engine,
 *   named motion presets), so nothing that was given away for free ever
 *   breaks. Saved trial tuning "comes alive" the moment Plus is activated.
 * - 'save-guard': locked attribute CHANGES are reverted at save time; values
 *   already persisted in the entity keep passing through untouched. Used for
 *   features free starters DO ship (3D Grid, grid parallax, Doppler), so
 *   imported starter content is grandfathered by construction and survives
 *   re-saves byte-for-byte at the value level.
 *
 * Fail direction: every gate stays OPEN while no `pixelgrade/has_entitlement`
 * bridge is hooked. These are long-shipped wp.org features — standalone
 * installs keep everything. Gates engage only when Pixelgrade Plus is present
 * and denies the entitlement. (This deliberately differs from Style Manager's
 * fail-closed trial helper: SM gated NEW controls, Nova gates existing ones.)
 *
 * @since   2.2.0
 * @license GPL-2.0-or-later
 * @package NovaBlocks
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Retrieves the Pixelgrade Plus upsell URL used by gated-control UI.
 */
function novablocks_plus_upsell_url(): string {
	return (string) apply_filters( 'novablocks/plus_upsell_url', 'https://pixelgrade.com/plus' );
}

/**
 * Determines whether a Plus entitlement is locked for gating purposes.
 *
 * Fails OPEN when the entitlement bridge is unavailable — see the file
 * docblock for why Nova's gates must not lock standalone installs.
 */
function novablocks_plus_entitlement_is_locked( string $entitlement ): bool {
	return ! novablocks_has_pixelgrade_plus_entitlement( $entitlement, true );
}

/**
 * Convenience twin of novablocks_motion_controls_are_unlocked() for the
 * layout-side gates (parametric engine, 3D Grid, grid parallax).
 */
function novablocks_advanced_block_controls_are_unlocked(): bool {
	return novablocks_has_pixelgrade_plus_entitlement( 'advanced_block_controls', true );
}

/**
 * Single source of truth for Plus-gated block features.
 *
 * Each gate maps one gated boundary to its entitlement, enforcement class,
 * target blocks, and gated attributes. 'defaults' pins the free fallback for
 * every gated attribute (contract-tested against the attribute JSON configs).
 *
 * Filterable so the next gated block/section is configuration, not redesign.
 */
function novablocks_get_plus_block_gates(): array {
	$supernova_blocks = [
		'novablocks/supernova',
		// Legacy names still present in older content and allow-lists.
		'novablocks/cards-collection',
		'novablocks/posts-collection',
	];

	$card_blocks = array_merge( $supernova_blocks, [ 'novablocks/supernova-item' ] );

	$gates = [
		'parametric-layout' => [
			'entitlement' => 'advanced_block_controls',
			'enforcement' => 'render',
			'blocks'      => $supernova_blocks,
			'attributes'  => [ 'layoutStyle' ],
			'defaults'    => [ 'layoutStyle' => 'classic' ],
		],
		'pile-3d-grid'      => [
			'entitlement' => 'advanced_block_controls',
			'enforcement' => 'save-guard',
			'blocks'      => $supernova_blocks,
			'attributes'  => [ 'pile3dEffect', 'pile3dTarget', 'pile3dTargetRule' ],
			'defaults'    => [
				'pile3dEffect'     => false,
				'pile3dTarget'     => 'item',
				'pile3dTargetRule' => 'odd',
			],
		],
		'pile-parallax'     => [
			'entitlement' => 'advanced_block_controls',
			'enforcement' => 'save-guard',
			'blocks'      => $supernova_blocks,
			'attributes'  => [ 'pileParallaxAmount' ],
			'defaults'    => [ 'pileParallaxAmount' => 0 ],
		],
		'doppler'           => [
			'entitlement' => 'motion_controls',
			'enforcement' => 'save-guard',
			'blocks'      => $card_blocks,
			'attributes'  => [ 'scrollingEffect' ],
			// Static and plain parallax stay free; only the doppler value is gated.
			'gated_values' => [ 'scrollingEffect' => [ 'doppler' ] ],
			'defaults'    => [ 'scrollingEffect' => 'static' ],
		],
		'motion-presets'    => [
			'entitlement' => 'motion_controls',
			'enforcement' => 'render',
			'blocks'      => $card_blocks,
			'attributes'  => [
				'motionPreset',
				'focalPoint',
				'finalFocalPoint',
				'initialBackgroundScale',
				'finalBackgroundScale',
				'followThroughStart',
				'followThroughEnd',
			],
			'defaults'    => [
				'focalPoint'             => [ 'x' => 0.5, 'y' => 0.5 ],
				'finalFocalPoint'        => [ 'x' => 0.5, 'y' => 0.5 ],
				'initialBackgroundScale' => 1,
				'finalBackgroundScale'   => 1,
				'followThroughStart'     => true,
				'followThroughEnd'       => true,
			],
		],
	];

	return (array) apply_filters( 'novablocks/plus_gated_block_attributes', $gates );
}

/**
 * Resolves the locked state for every entitlement referenced by the gates.
 *
 * @return array Map of entitlement key => locked bool.
 */
function novablocks_get_plus_locked_entitlements(): array {
	$locked = [];

	foreach ( novablocks_get_plus_block_gates() as $gate ) {
		if ( empty( $gate['entitlement'] ) || isset( $locked[ $gate['entitlement'] ] ) ) {
			continue;
		}

		$locked[ $gate['entitlement'] ] = novablocks_plus_entitlement_is_locked( $gate['entitlement'] );
	}

	return $locked;
}

/**
 * Loosely compares two attribute values (numbers, bools, focal-point arrays).
 */
function novablocks_plus_values_match( $a, $b ): bool {
	if ( is_array( $a ) && is_array( $b ) ) {
		if ( count( $a ) !== count( $b ) ) {
			return false;
		}

		foreach ( $a as $key => $value ) {
			if ( ! array_key_exists( $key, $b ) || ! novablocks_plus_values_match( $value, $b[ $key ] ) ) {
				return false;
			}
		}

		return true;
	}

	if ( is_bool( $a ) || is_bool( $b ) ) {
		return (bool) $a === (bool) $b;
	}

	if ( is_numeric( $a ) && is_numeric( $b ) ) {
		return abs( (float) $a - (float) $b ) < 0.0001;
	}

	return $a === $b;
}

/**
 * Render-time enforcement (enforcement class 'render').
 *
 * Called from the block render callbacks right after defaults are merged, so
 * it intrinsically covers every content path: the emitted data-* attributes
 * (which drive both the parametric layout engine and the scrolling-effect
 * frontend engine), classes, CSS custom properties, and markup.
 *
 * Pure over $attributes; pass $locked to make it deterministic in tests.
 *
 * @param array      $attributes Block attributes with defaults merged.
 * @param array|null $locked     Optional map of entitlement => locked bool.
 */
function novablocks_normalize_locked_block_attributes( array $attributes, ?array $locked = null ): array {
	if ( null === $locked ) {
		$locked = novablocks_get_plus_locked_entitlements();
	}

	// Parametric layouts: no free starter ever shipped layoutStyle "parametric",
	// so locked blocks render with the free default engine. All classic-grid
	// attributes (columns, gaps, counts) have sane values and stay authored.
	if ( ! empty( $locked['advanced_block_controls'] ) && ( $attributes['layoutStyle'] ?? '' ) === 'parametric' ) {
		$attributes['layoutStyle'] = 'classic';
	}

	// Named motion presets: gate the curated one-click bundles, not Doppler
	// itself (Doppler + hand-tuned "custom" frames ship in free starters).
	// Only frames that exactly match a named preset are classified as
	// preset-authored and reset; anything else passes untouched.
	if ( ! empty( $locked['motion_controls'] )
	     && ( $attributes['scrollingEffect'] ?? '' ) === 'doppler'
	     && ! empty( $attributes['motionPreset'] )
	     && 'custom' !== $attributes['motionPreset'] ) {

		foreach ( novablocks_get_motion_preset_options() as $option ) {
			if ( empty( $option['preset'] ) || $option['value'] !== $attributes['motionPreset'] ) {
				continue;
			}

			$frames_match_preset = true;
			foreach ( $option['preset'] as $key => $preset_value ) {
				if ( ! novablocks_plus_values_match( $attributes[ $key ] ?? null, $preset_value ) ) {
					$frames_match_preset = false;
					break;
				}
			}

			if ( $frames_match_preset ) {
				$gates = novablocks_get_plus_block_gates();
				foreach ( $gates['motion-presets']['defaults'] ?? [] as $key => $default_value ) {
					$attributes[ $key ] = $default_value;
				}
			}

			break;
		}
	}

	return $attributes;
}

/**
 * Collects the persisted values of save-guarded attributes from a parsed
 * block tree — the per-entity grandfather whitelist.
 *
 * @param array $blocks Parsed blocks (as returned by parse_blocks()).
 *
 * @return array Map of attribute name => array of persisted values.
 */
function novablocks_collect_plus_gated_attribute_values( array $blocks ): array {
	$gates  = novablocks_get_plus_block_gates();
	$values = [];

	$walk = function ( array $blocks ) use ( &$walk, &$values, $gates ) {
		foreach ( $blocks as $block ) {
			foreach ( $gates as $gate ) {
				if ( 'save-guard' !== ( $gate['enforcement'] ?? '' )
				     || ! in_array( $block['blockName'] ?? '', $gate['blocks'], true ) ) {
					continue;
				}

				foreach ( $gate['attributes'] as $attribute ) {
					if ( isset( $block['attrs'][ $attribute ] ) ) {
						$values[ $attribute ][] = $block['attrs'][ $attribute ];
					}
				}
			}

			if ( ! empty( $block['innerBlocks'] ) ) {
				$walk( $block['innerBlocks'] );
			}
		}
	};

	$walk( $blocks );

	return $values;
}

/**
 * Save-time enforcement (enforcement class 'save-guard').
 *
 * Diff-aware: a gated attribute value is allowed when it matches the gate's
 * free default OR any value already persisted in the entity's previous
 * content (the grandfather whitelist). Anything else — i.e. newly authored
 * gated values — is reverted to the free default by unsetting the attribute.
 * Imported starter content passes through untouched because its values are,
 * by definition, already persisted.
 *
 * Pure over parsed block trees; pass $locked for deterministic tests.
 *
 * @param array      $blocks    Parsed blocks of the INCOMING content.
 * @param array      $whitelist Attribute => persisted values, from the previous content.
 * @param array|null $locked    Optional map of entitlement => locked bool.
 *
 * @return array [ 'blocks' => array, 'changed' => bool ]
 */
function novablocks_apply_plus_save_guard_to_blocks( array $blocks, array $whitelist, ?array $locked = null ): array {
	if ( null === $locked ) {
		$locked = novablocks_get_plus_locked_entitlements();
	}

	$gates   = novablocks_get_plus_block_gates();
	$changed = false;

	$is_allowed = function ( string $attribute, $value, array $gate ) use ( $whitelist ): bool {
		// Values the gate does not classify as premium are always allowed
		// (e.g. scrollingEffect static/parallax under the doppler gate).
		if ( isset( $gate['gated_values'][ $attribute ] )
		     && ! in_array( $value, $gate['gated_values'][ $attribute ], true ) ) {
			return true;
		}

		if ( array_key_exists( $attribute, $gate['defaults'] )
		     && novablocks_plus_values_match( $value, $gate['defaults'][ $attribute ] ) ) {
			return true;
		}

		foreach ( $whitelist[ $attribute ] ?? [] as $persisted ) {
			if ( novablocks_plus_values_match( $value, $persisted ) ) {
				return true;
			}
		}

		return false;
	};

	$walk = function ( array $blocks ) use ( &$walk, &$changed, $gates, $locked, $is_allowed ) {
		foreach ( $blocks as $index => $block ) {
			foreach ( $gates as $gate ) {
				if ( 'save-guard' !== ( $gate['enforcement'] ?? '' )
				     || empty( $locked[ $gate['entitlement'] ] )
				     || ! in_array( $block['blockName'] ?? '', $gate['blocks'], true ) ) {
					continue;
				}

				foreach ( $gate['attributes'] as $attribute ) {
					if ( ! isset( $block['attrs'][ $attribute ] ) ) {
						continue;
					}

					if ( ! $is_allowed( $attribute, $block['attrs'][ $attribute ], $gate ) ) {
						unset( $blocks[ $index ]['attrs'][ $attribute ] );
						$changed = true;
					}
				}
			}

			if ( ! empty( $block['innerBlocks'] ) ) {
				$result = $walk( $block['innerBlocks'] );

				if ( $result['changed'] ) {
					$blocks[ $index ]['innerBlocks'] = $result['blocks'];
					// Keep innerContent in sync is unnecessary: only attrs changed.
				}
			}
		}

		return [
			'blocks'  => $blocks,
			'changed' => $changed,
		];
	};

	return $walk( $blocks );
}

/**
 * Applies the save guard to raw post content. Returns the content unchanged
 * unless a locked, newly-authored gated value actually had to be reverted.
 */
function novablocks_apply_plus_save_guard( string $new_content, string $previous_content, ?array $locked = null ): string {
	if ( null === $locked ) {
		$locked = novablocks_get_plus_locked_entitlements();
	}

	if ( ! in_array( true, $locked, true ) || false === strpos( $new_content, 'wp:novablocks/' ) ) {
		return $new_content;
	}

	$whitelist = novablocks_collect_plus_gated_attribute_values(
		'' === $previous_content ? [] : parse_blocks( $previous_content )
	);

	$result = novablocks_apply_plus_save_guard_to_blocks( parse_blocks( $new_content ), $whitelist, $locked );

	if ( ! $result['changed'] ) {
		return $new_content;
	}

	return serialize_blocks( $result['blocks'] );
}

/**
 * Guards REST editor saves for a post type.
 *
 * Deliberately REST-only: programmatic inserts (starter-content imports, WXR
 * imports, wp_insert_post()) must never be guarded — imported free starter
 * content is grandfathered (see the file docblock).
 *
 * @param stdClass        $prepared_post Post object about to be inserted.
 * @param WP_REST_Request $request       Request used to insert the post.
 *
 * @return stdClass
 */
function novablocks_plus_guard_rest_pre_insert( $prepared_post, $request ) {
	if ( defined( 'WP_IMPORTING' ) && WP_IMPORTING ) {
		return $prepared_post;
	}

	if ( ! is_object( $prepared_post ) || ! isset( $prepared_post->post_content ) || ! is_string( $prepared_post->post_content ) ) {
		return $prepared_post;
	}

	$previous_content = '';
	if ( ! empty( $prepared_post->ID ) ) {
		$previous = get_post( $prepared_post->ID );

		if ( $previous instanceof WP_Post ) {
			$previous_content = (string) $previous->post_content;
		}
	}

	$prepared_post->post_content = novablocks_apply_plus_save_guard( $prepared_post->post_content, $previous_content );

	return $prepared_post;
}

/**
 * Hooks the save guard into every REST-exposed post type.
 */
function novablocks_register_plus_save_guards(): void {
	foreach ( get_post_types( [ 'show_in_rest' => true ], 'names' ) as $post_type ) {
		add_filter( "rest_pre_insert_{$post_type}", 'novablocks_plus_guard_rest_pre_insert', 10, 2 );
	}
}
add_action( 'rest_api_init', 'novablocks_register_plus_save_guards' );

/**
 * The translatable `plus` payload merged into wp.novaBlocks.settings.
 *
 * Presentation data only — the editor trial UI reads it; enforcement never
 * trusts the client.
 */
function novablocks_get_plus_settings_payload(): array {
	$gate_copy = [
		'parametric-layout' => [
			'label'       => esc_html__( 'Parametric Grid layouts', '__plugin_txtd' ),
			'overlayNote' => esc_html__( 'The Parametric Grid composes whole layouts from a few dials — featured areas, fragmentation, rhythm — with twelve presets to start from.', '__plugin_txtd' ),
			'note'        => esc_html__( "Take the Parametric Grid for a spin — presets and dials reshape the layout live. Changes here aren't saved to your site; authoring parametric layouts is part of Pixelgrade Plus.", '__plugin_txtd' ),
		],
		'pile-3d-grid'      => [
			'label'       => esc_html__( '3D Grid', '__plugin_txtd' ),
			'overlayNote' => esc_html__( 'The 3D Grid lifts alternating cards toward the viewer for a sculpted, layered collection.', '__plugin_txtd' ),
			'note'        => esc_html__( "Try the 3D Grid live — the pattern updates as you flip the rules. Changes here aren't saved; the 3D Grid is part of Pixelgrade Plus.", '__plugin_txtd' ),
		],
		'pile-parallax'     => [
			'label'       => esc_html__( 'Grid Parallax', '__plugin_txtd' ),
			'overlayNote' => esc_html__( 'Grid parallax drifts cards at different speeds while visitors scroll, giving the collection gentle depth.', '__plugin_txtd' ),
			'note'        => esc_html__( "Try the grid parallax live in the preview. Changes here aren't saved; grid parallax is part of Pixelgrade Plus.", '__plugin_txtd' ),
		],
		'doppler'           => [
			'label'       => esc_html__( 'Doppler scrolling', '__plugin_txtd' ),
			'overlayNote' => esc_html__( 'Doppler moves your media between two framed moments — focal point and zoom — as visitors scroll.', '__plugin_txtd' ),
			'note'        => esc_html__( "Try Doppler live — frames and motion update as you preview the scroll. Changes here aren't saved; Doppler scrolling is part of Pixelgrade Plus.", '__plugin_txtd' ),
		],
		'motion-presets'    => [
			'label'       => esc_html__( 'Motion presets', '__plugin_txtd' ),
			'overlayNote' => esc_html__( 'Motion presets are curated Doppler moves — a start frame, an end frame, and the glide between them — applied in one click.', '__plugin_txtd' ),
			'note'        => esc_html__( "Try the motion presets live — each one re-frames the scroll cinematics instantly. Changes here aren't saved; one-click motion presets are part of Pixelgrade Plus.", '__plugin_txtd' ),
		],
	];

	$gates = [];
	foreach ( novablocks_get_plus_block_gates() as $gate_id => $gate ) {
		$gates[ $gate_id ] = [
			'entitlement' => $gate['entitlement'],
			'enforcement' => $gate['enforcement'],
			'blocks'      => $gate['blocks'],
			'attributes'  => $gate['attributes'],
			'label'       => $gate_copy[ $gate_id ]['label'] ?? '',
			'overlayNote' => $gate_copy[ $gate_id ]['overlayNote'] ?? '',
			'note'        => $gate_copy[ $gate_id ]['note'] ?? '',
		];
	}

	return [
		'locked'      => novablocks_get_plus_locked_entitlements(),
		'upsellUrl'   => novablocks_plus_upsell_url(),
		'productName' => esc_html__( 'Pixelgrade Plus', '__plugin_txtd' ),
		'badge'       => esc_html__( 'Plus', '__plugin_txtd' ),
		'learnMore'   => esc_html__( 'Learn more', '__plugin_txtd' ),
		'buttonLabel' => esc_html__( 'Play with these options', '__plugin_txtd' ),
		'bannerText'  => esc_html__( "Trying these out — if they fit, Pixelgrade Plus makes them live. If not, your design system's just as powerful without them.", '__plugin_txtd' ),
		'gates'       => $gates,
	];
}
