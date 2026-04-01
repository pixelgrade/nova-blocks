<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_contextual_post_card_attributes() {
	return novablocks_merge_attributes_from_array(
		[
			'packages/block-library/src/blocks/contextual-post-card/attributes.json',
			'packages/block-editor/src/filters/with-space-and-sizing/attributes.json',
		]
	);
}

if ( ! function_exists( 'novablocks_restore_contextual_post_card_global_post' ) ) {
	function novablocks_restore_contextual_post_card_global_post( $previous_post ): void {
		if ( $previous_post instanceof WP_Post ) {
			$GLOBALS['post'] = $previous_post;
			setup_postdata( $previous_post );
			return;
		}

		wp_reset_postdata();
	}
}

if ( ! function_exists( 'novablocks_get_contextual_post_card_loop_post' ) ) {
	function novablocks_get_contextual_post_card_loop_post( WP_Post $current_post, string $direction ) {
		$loop_order = $direction === 'previous' ? 'DESC' : 'ASC';
		$posts      = get_posts(
			[
				'post_type'      => $current_post->post_type,
				'post_status'    => 'publish',
				'posts_per_page' => 1,
				'orderby'        => 'date',
				'order'          => $loop_order,
				'post__not_in'   => [ $current_post->ID ],
			]
		);

		if ( empty( $posts ) ) {
			return null;
		}

		return $posts[0];
	}
}

if ( ! function_exists( 'novablocks_get_contextual_post_card_adjacent_post' ) ) {
	function novablocks_get_contextual_post_card_adjacent_post( WP_Post $current_post, string $direction ) {
		$previous_post = $GLOBALS['post'] ?? null;

		$GLOBALS['post'] = $current_post;
		setup_postdata( $current_post );

		$target_post = $direction === 'previous' ? get_previous_post() : get_next_post();

		novablocks_restore_contextual_post_card_global_post( $previous_post );

		return $target_post instanceof WP_Post ? $target_post : null;
	}
}

if ( ! function_exists( 'novablocks_resolve_contextual_post_card_post' ) ) {
	function novablocks_resolve_contextual_post_card_post( array $attributes, int $post_id = 0 ) {
		$source = $attributes['source'] ?? 'auto';

		if ( $source === 'manual' ) {
			$manual_post_id = absint( $attributes['manualPostId'] ?? 0 );
			if ( ! $manual_post_id ) {
				return null;
			}

			$manual_post = get_post( $manual_post_id );
			if ( ! $manual_post instanceof WP_Post ) {
				return null;
			}

			$post_status = get_post_status( $manual_post );
			if ( $post_status !== 'publish' && ! current_user_can( 'read_post', $manual_post->ID ) ) {
				return null;
			}

			return $manual_post;
		}

		$current_post = $post_id ? get_post( $post_id ) : get_post();
		if ( ! $current_post instanceof WP_Post ) {
			return null;
		}

		$direction  = $attributes['direction'] ?? 'next';
		$target_post = novablocks_get_contextual_post_card_adjacent_post( $current_post, $direction );

		if ( $target_post instanceof WP_Post ) {
			return $target_post;
		}

		if ( empty( $attributes['loopToFirst'] ) ) {
			return null;
		}

		return novablocks_get_contextual_post_card_loop_post( $current_post, $direction );
	}
}

if ( ! function_exists( 'novablocks_get_contextual_post_card_default_heading' ) ) {
	function novablocks_get_contextual_post_card_default_heading( WP_Post $target_post, array $attributes ): string {
		$source = $attributes['source'] ?? 'auto';

		if ( $source === 'manual' ) {
			return get_the_title( $target_post );
		}

		$direction        = $attributes['direction'] ?? 'next';
		$post_type_object = get_post_type_object( $target_post->post_type );
		$singular_name    = $post_type_object->labels->singular_name ?? esc_html__( 'Post', '__plugin_txtd' );

		if ( $direction === 'previous' ) {
			return sprintf(
				/* translators: %s: singular post type label. */
				esc_html__( 'Previous %s', '__plugin_txtd' ),
				$singular_name
			);
		}

		return sprintf(
			/* translators: %s: singular post type label. */
			esc_html__( 'Next %s', '__plugin_txtd' ),
			$singular_name
		);
	}
}

if ( ! function_exists( 'novablocks_get_contextual_post_card_project_color' ) ) {
	function novablocks_get_contextual_post_card_project_color( WP_Post $target_post ): string {
		$color = '';

		if ( function_exists( 'anima_get_project_color' ) ) {
			$color = (string) anima_get_project_color( $target_post->ID );
		}

		if ( $color === '' ) {
			$color = (string) get_post_meta( $target_post->ID, '_project_color', true );
		}

		if ( $color === '' ) {
			$color = (string) get_post_meta( $target_post->ID, '_project_color_auto', true );
		}

		$color = sanitize_hex_color( $color );

		return $color ?: '#333333';
	}
}

if ( ! function_exists( 'novablocks_get_contextual_post_card_media_markup' ) ) {
	function novablocks_get_contextual_post_card_media_markup( WP_Post $target_post, array $attributes ): string {
		if ( ! has_post_thumbnail( $target_post ) ) {
			return '<div class="nb-supernova-item__media-wrapper nb-contextual-post-card__media-wrapper"><div class="nb-supernova-item__media-aspect-ratio"></div></div>';
		}

		$thumbnail_id = get_post_thumbnail_id( $target_post );
		$media_markup = novablocks_get_collection_card_media_markup(
			[
				'id'  => $thumbnail_id,
				'url' => get_the_post_thumbnail_url( $target_post, 'full' ),
				'alt' => get_post_meta( $thumbnail_id, '_wp_attachment_image_alt', true ),
			],
			[
				'layoutStyle'       => 'classic',
				'columns'           => 1,
				'cardLayout'        => 'stacked',
				'minHeightFallback' => absint( $attributes['minHeight'] ?? 50 ),
			],
			[
				'companionContent' => true,
			]
		);

		$media_markup = novablocks_get_collection_card_media_markup_wrapped( $media_markup );
		$media_markup = str_replace(
			'class="nb-supernova-item__media-wrapper"',
			'class="nb-supernova-item__media-wrapper nb-contextual-post-card__media-wrapper"',
			$media_markup
		);
		$media_markup = str_replace(
			'class="nb-supernova-item__media ',
			'class="nb-contextual-post-card__media nb-supernova-item__media ',
			$media_markup
		);

		return $media_markup;
	}
}

if ( ! function_exists( 'novablocks_render_contextual_post_card_block' ) ) {
	function novablocks_render_contextual_post_card_block( array $attributes, string $content, WP_Block $block ): string {
		$attributes_config = novablocks_get_contextual_post_card_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$context_post_id = ! empty( $block->context['postId'] ) ? (int) $block->context['postId'] : 0;
		$target_post     = novablocks_resolve_contextual_post_card_post( $attributes, $context_post_id );

		if ( ! $target_post instanceof WP_Post ) {
			if ( empty( $context_post_id ) && ( $attributes['source'] ?? 'auto' ) === 'auto' ) {
				return esc_html__( 'Contextual Post Card', '__plugin_txtd' );
			}

			return '';
		}

		$align = preg_split( '/\b\s+/', $attributes['contentPosition'] ?? 'center center' );
		$valign = $align[0] ?? 'center';
		$halign = $align[1] ?? 'center';

		$heading_text = trim( (string) ( $attributes['headingText'] ?? '' ) );
		$button_text  = trim( (string) ( $attributes['buttonText'] ?? '' ) );
		$target_title = get_the_title( $target_post );
		$project_color = novablocks_get_contextual_post_card_project_color( $target_post );

		if ( $heading_text === '' ) {
			$heading_text = novablocks_get_contextual_post_card_default_heading( $target_post, $attributes );
		}

		$eyebrow_text = '';
		if ( $target_title && $heading_text !== $target_title ) {
			$eyebrow_text = $target_title;
		}

		$classes = [
			'nb-contextual-post-card',
			'nb-supernova',
			'nb-supernova--content-type-contextual',
			'nb-supernova--card-layout-stacked',
			'nb-supernova--layout-classic',
			'nb-supernova--1-columns',
			'nb-supernova--valign-' . sanitize_html_class( $valign ),
			'nb-supernova--halign-' . sanitize_html_class( $halign ),
			'nb-supernova--align-' . sanitize_html_class( $attributes['align'] ?? 'full' ),
			'align' . sanitize_html_class( $attributes['align'] ?? 'full' ),
			'nb-block-spacing-container',
		];

		if ( has_post_thumbnail( $target_post ) ) {
			$classes[] = 'nb-contextual-post-card--has-media';
		} else {
			$classes[] = 'nb-contextual-post-card--no-media';
		}

		if ( ! empty( $attributes['className'] ) ) {
			$custom_classes = array_map( 'sanitize_html_class', explode( ' ', $attributes['className'] ) );
			$classes        = array_merge( $classes, array_filter( $custom_classes ) );
		}

		$css_props = array_merge(
			novablocks_get_space_and_sizing_css( $attributes ),
			[
				'--nb-contextual-post-card-min-height: ' . absint( $attributes['minHeight'] ?? 50 ) . 'vh',
				'--nb-contextual-post-card-project-color: ' . $project_color,
			]
		);

		$anchor = '';
		if ( ! empty( $attributes['anchor'] ) ) {
			$anchor = 'id="' . esc_attr( $attributes['anchor'] ) . '" ';
		}

		$heading_level = 2;
		$heading_tag   = 'h' . $heading_level;
		$media_markup  = novablocks_get_contextual_post_card_media_markup( $target_post, $attributes );
		$content_classes = [
			'nb-supernova-item__content',
			'nb-supernova-item__content--valign-' . sanitize_html_class( $valign ),
			'nb-supernova-item__content--halign-' . sanitize_html_class( $halign ),
		];
		$aria_label    = $target_title
			? sprintf(
				/* translators: %s: target post title. */
				esc_attr__( 'Open %s', '__plugin_txtd' ),
				$target_title
			)
			: esc_attr__( 'Open linked post', '__plugin_txtd' );

		ob_start();
		?>
		<div class="<?php echo esc_attr( join( ' ', $classes ) ); ?>" style="<?php echo esc_attr( join( ';', $css_props ) ); ?>" <?php echo $anchor; ?>>
			<div class="nb-collection align<?php echo esc_attr( $attributes['align'] ?? 'full' ); ?>">
				<div class="nb-collection__body">
					<div class="nb-collection__layout nb-collection__layout--classic nb-collection__layout--content-width">
						<div class="nb-collection__layout-item">
							<div class="nb-contextual-post-card__surface nb-supernova-item nb-supernova-item--layout-stacked">
								<div class="nb-supernova-item__frame">
									<?php echo $media_markup; ?>
									<div class="<?php echo esc_attr( join( ' ', $content_classes ) ); ?>">
										<div class="nb-supernova-item__inner-container">
											<?php if ( $eyebrow_text ) { ?>
												<p class="nb-contextual-post-card__eyebrow nb-card__meta is-style-meta"><?php echo esc_html( $eyebrow_text ); ?></p>
											<?php } ?>
											<<?php echo esc_html( $heading_tag ); ?> class="nb-contextual-post-card__heading nb-card__title h1"><?php echo esc_html( $heading_text ); ?></<?php echo esc_html( $heading_tag ); ?>>
											<?php if ( $button_text !== '' ) { ?>
												<div class="nb-contextual-post-card__button-wrap wp-block-button is-style-text">
													<span class="nb-contextual-post-card__button wp-block-button__link"><?php echo esc_html( $button_text ); ?></span>
												</div>
											<?php } ?>
										</div>
									</div>
								</div>
								<a class="nb-supernova-item__link nb-contextual-post-card__link" href="<?php echo esc_url( get_permalink( $target_post ) ); ?>" aria-label="<?php echo esc_attr( $aria_label ); ?>" data-color="<?php echo esc_attr( $project_color ); ?>"></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php

		return trim( ob_get_clean() );
	}
}
