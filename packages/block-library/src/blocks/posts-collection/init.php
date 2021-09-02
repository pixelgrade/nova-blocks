<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_posts_collection_attributes() {

	return novablocks_merge_attributes_from_array( array(
		'packages/collection/src/grid-generator-attributes.json',
		'packages/collection/src/collection-attributes.json',
		'packages/color-signal/src/filters/attributes.json',
		'packages/block-editor/src/filters/with-card-elements-display/attributes.json',
		'packages/block-editor/src/filters/with-card-details/attributes.json',
		'packages/block-editor/src/filters/with-latest-posts/attributes.json',
		'packages/block-library/src/blocks/posts-collection/attributes.json',
	) );

}

if ( ! function_exists( 'novablocks_render_posts_collection_block' ) ) {

	function novablocks_render_posts_collection_block( $attributes, $content ) {
		global $novablocks_rendered_posts_ids;

		$attributes_config = novablocks_get_posts_collection_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$args  = novablocks_build_articles_query( $attributes );
		$posts = get_posts( $args );

		if ( empty( $posts ) ) {
			if ( is_user_logged_in() ) {
				return '<p>' . esc_html__( 'There are no posts to be displayed in this block. Try changing the Content Filter settings.', '__plugin_txtd' ) . '</p>';
			} else {
				return '';
			}
		}

		$cssProps = novablocks_get_spacing_css( $attributes );

		$cssProps[] = '--card-content-padding: ' . $attributes['contentPadding'];
		$cssProps[] = '--card-media-padding: ' . $attributes['imagePadding'];
		$cssProps[] = '--card-media-padding-top: ' . novablocks_get_card_media_padding_top( $attributes['containerHeight'] ) . '%';
		$cssProps[] = '--card-media-object-fit: ' . ( $attributes['imageResizing'] === 'cropped' ? 'cover' : 'scale-down' );

		$style = join( '; ', $cssProps );

		$classes = array(
			'novablocks-block',
			'novablocks-collection',
			'novablocks-collection--align-left',
			'alignfull',
		);

		$blockPaletteClasses = novablocks_get_color_signal_classes( $attributes );
		$classes = array_merge( $classes, $blockPaletteClasses );

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		if ( ! empty( $attributes['layoutStyle'] ) ) {
			$classes[] = 'novablocks-collection--' . $attributes['layoutStyle'];
		}

		if ( ! empty( $attributes['layoutStyle'] ) &&  $attributes['carouselLayout'] === 'variable' ) {
			$classes[] = 'novablocks-collection-carousel--variable';
		}

		$classes = array_merge( $classes, novablocks_get_color_classes( $attributes ) );
		$className = join( ' ', $classes );

		ob_start();

		$data_attributes_array = array_map( 'novablocks_camel_case_to_kebab_case', array_keys( $attributes ) );
		$data_attributes = novablocks_get_data_attributes( $data_attributes_array, $attributes );

		echo '<div class="' . $className . '" ' . 'style="'. $style . '">';
		echo '<div class="wp-block-group__inner-container">';
		echo novablocks_get_collection_header_output( $attributes );
		echo '<div class="novablocks-collection__cards alignwide">';
		echo '<div class="novablocks-grid" ' . join( ' ', $data_attributes ) . '>';

		foreach ( $posts as $post ) {
			array_push( $novablocks_rendered_posts_ids, $post->ID );
			$card_markup = novablocks_get_post_card_markup( $post, $attributes );
			echo apply_filters( 'novablocks_post_card_markup', $card_markup, $post, $attributes );
		}

		echo '</div>';
		echo '</div>';
		echo '</div>';
		echo '</div>';

		return ob_get_clean();
	}
}

function novablocks_get_meta( $post, $meta ) {

	if ( $meta === 'author' ) {
		return get_the_author_meta( 'display_name', $post->post_author );
	}

	if ( $meta === 'category' ) {
		$categories = wp_get_post_categories( $post->ID );

		if ( ! empty( $categories ) && ! is_wp_error( $categories ) ) {
			$category_id  = $categories[0];
			$category     = get_the_category_by_ID( $category_id );

			return $category;
		}
	}

	if ( $meta === 'comments' ) {
		$comments_number = absint( get_comments_number( $post->ID ) );

		if ( $comments_number === 0 ) {
			return esc_html__( 'No Comments', '__plugin_txtd' );
		}

		return esc_html(
			sprintf(
				_nx(
					'%1$s Comment',
					'%1$s Comments',
					$comments_number,
					'comments title',
					'__plugin_txtd'
				),
				number_format_i18n( $comments_number )
			)
		);
	}

	if ( $meta === 'date' ) {
		return esc_html( get_the_date( '', $post ) );
	}

	if ( $meta === 'tags' ) {
		$tags = get_the_tags( $post->ID );

		if ( ! empty( $tags ) && ! is_wp_error( $tags ) ) {
			$tag_names = array_map( 'novablocks_get_tag_name', $tags );

			return join( ', ', $tag_names );
		}
	}

	if ( $meta == 'reading-time' ) {
		return sprintf( __( '%s min read', '__plugin_txtd' ), novablocks_get_post_reading_time_in_minutes( $post ) );
	}

	return '';
}

function novablocks_get_tag_name( $tag ) {
	return $tag->name;
}

function novablocks_show_card_contents( $attributes ) {
	return ! empty( $attributes['showMeta'] ) ||
		   ! empty( $attributes['showTitle'] ) ||
		   ! empty( $attributes['showDescription'] ) ||
		   ! empty( $attributes['showButtons'] );
}

function novablocks_get_post_card_contents( $post, $attributes ) {


	ob_start();

	$title = get_the_title( $post );
	$postMeta       = novablocks_get_card_post_meta( $post, $attributes );
	$aboveTitleMeta = $postMeta[0];
	$belowTitleMeta = $postMeta[1];
	echo novablocks_get_card_item_meta( $aboveTitleMeta, $attributes );
	echo novablocks_get_card_item_title( $title, $attributes );
	echo novablocks_get_card_item_meta( $belowTitleMeta, $attributes );

	$excerpt        = get_the_excerpt( $post );
	echo novablocks_get_card_item_description( $excerpt, $attributes );

	echo novablocks_get_card_item_buttons( array(
		array(
			'text' => 'Read More',
			'url' => get_permalink( $post )
		)
	), $attributes );

	return ob_get_clean();
}

function novablocks_get_post_card_markup( $post, $attributes ) {
	$media_url = get_the_post_thumbnail_url( $post, 'novablocks_medium' );

	$classes = array(
		'novablocks-card',
		'novablocks-card--' . ( $attributes['isLandscape'] ? 'landscape' : 'portrait' ),
		'novablocks-block__content'
	);

	$contentPaletteClasses = novablocks_get_content_palette_classes( $attributes );
	$classes = array_merge( $classes, $contentPaletteClasses );

	if ( $attributes['thumbnailAspectRatioString'] !== 'auto' ) {
		$classes[] = 'novablocks-card--fixed-media-aspect-ratio';
	}

	$className = join( ' ', $classes );

	ob_start(); ?>

	<div class="<?php echo $className; ?>" style="--columns: <?php echo $attributes['columns']; ?>">

		<div class="novablocks-card__layout">

			<?php if ( ! empty( $attributes['showMedia'] ) ) { ?>
				<div class="novablocks-card__layout-media novablocks-grid__item-media">
					<div class="novablocks-card__media-wrap">
						<div class="novablocks-card__media">
							<?php echo novablocks_get_card_media_markup( array(
								'type' => 'image',
								'url'  => $media_url,
							) ); ?>
						</div>
					</div>
				</div>
			<?php } ?>

			<?php if ( novablocks_show_card_contents( $attributes ) ) { ?>
				<div class="novablocks-card__layout-content">
					<div class="novablocks-card__inner-container">
						<?php echo novablocks_get_post_card_contents( $post, $attributes ); ?>
					</div>
				</div>
			<?php } ?>

		</div>

		<a class="novablocks-card__link" href="<?php echo get_permalink( $post ); ?>"></a>

	</div>

	<?php return ob_get_clean();
}
