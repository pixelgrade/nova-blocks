<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_posts_collection_attributes() {
	$grid_generator_attributes = novablocks_get_attributes_from_json( 'packages/collection/src/grid-generator-attributes.json' );
	$posts_query_attributes = novablocks_get_attributes_from_json( 'packages/block-editor/src/hooks/with-latest-posts/attributes.json' );
	$collection_attributes = novablocks_get_collection_attributes();
	$posts_collection_attributes = novablocks_get_attributes_from_json( 'packages/block-library/src/blocks/posts-collection/attributes.json' );

	return array_merge( $posts_collection_attributes, $collection_attributes, $grid_generator_attributes, $posts_query_attributes );
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

		$cssProps[] = '--card-media-padding: ' . $attributes['imagePadding'];

		$style = join( '; ', $cssProps );

		$classes = array(
			'novablocks-block',
			'novablocks-collection',
			'novablocks-collection--align-left',
			'alignfull',
		);

		if ( ! empty( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		$classes = array_merge( $classes, novablocks_get_color_classes( $attributes ) );
		$className = join( ' ', $classes );

		ob_start();

		$posts_collection_attributes = array(
			'thumbnailAspectRatioString',
			'thumbnailAspectRatio',

			'imagePadding',
			'imageResizing',
			'headerPosition',

			'layoutStyle',
			'isLandscape',
			'columns',

			'postsToShow',
			'gridcolumns',
			'gridrows',
			'featuresize',
			'featureposition',
			'featureposition',
			'fragmentation',
			'imageweightleft',
			'imageweightright',
			'metadetailsleft',
			'metadetailsright',
			'boostfeature',
			'subfeature',
			'balancemdandiw',
			'hierarchycrossing',
			'flipcolsrows',
		);

		$data_attributes = array();

		foreach ( $posts_collection_attributes as $attribute ) {
			if ( empty( $attributes[ $attribute ] ) ) {
				$attributes[ $attribute ] = 0;
			}

			$data_attributes[] = 'data-' . $attribute . '="' . $attributes[ $attribute ] . '"';
		}

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

function novablocks_get_post_card_markup( $post, $attributes ) {


	$media_url = get_the_post_thumbnail_url( $post );
	$title     = get_the_title( $post );
	$excerpt   = get_the_excerpt( $post );

	$titleTag    = 'h' . $attributes['cardTitleLevel'];

	$classes = array(
		'novablocks-card',
		'novablocks-card--' . ( $attributes['isLandscape'] ? 'landscape' : 'portrait' ),
		'novablocks-block__content'
	);

	if ( $attributes['thumbnailAspectRatioString'] !== 'auto' ) {
		$classes[] = 'novablocks-card--fixed-media-aspect-ratio';
	}

	$primaryMeta = novablocks_get_meta( $post, $attributes[ 'primaryMetadata' ] );
	$secondaryMeta = novablocks_get_meta( $post, $attributes[ 'secondaryMetadata' ] );

	if ( ! empty( $primaryMeta ) && ! empty( $secondaryMeta ) ) {
		$combinedMeta = $primaryMeta . ' &mdash; ' . $secondaryMeta;
	} else {
		$combinedMeta = empty( $primaryMeta ) ? $secondaryMeta : $primaryMeta;
	}

	if ( 'above-title' === $attributes[ 'metadataPosition' ] ) {
		$aboveTitleMeta = $combinedMeta;
	}

	if ( 'below-title' === $attributes[ 'metadataPosition' ] ) {
		$belowTitleMeta = $combinedMeta;
	}

	if ( 'split' === $attributes[ 'metadataPosition' ] ) {
		$aboveTitleMeta = $primaryMeta;
		$belowTitleMeta = $secondaryMeta;
	}

	$className = join( ' ', $classes );

	ob_start(); ?>

	<div class="<?php echo $className; ?>" style="--columns: <?php echo $attributes['columns']; ?>">

		<div class="novablocks-card__layout">

			<?php if ( ! empty( $attributes['showMedia'] ) ) { ?>
				<div class="novablocks-card__layout-media novablocks-grid__item-media">
					<?php echo novablocks_get_card_media_markup( array(
						'type' => 'image',
						'url'  => $media_url,
					) ); ?>
				</div>
			<?php } ?>

			<?php if ( ! empty( $attributes['showMeta'] ) ||
			           ! empty( $attributes['showTitle'] ) ||
			           ! empty( $attributes['showDescription'] ) ||
			           ! empty( $attributes['showButtons'] ) ) { ?>

				<div class="novablocks-card__layout-content novablocks-card__inner-container">

					<?php if ( ! empty( $attributes['showMeta'] ) && ! empty( $aboveTitleMeta ) ) { ?>
						<div class="novablocks-grid__item-meta novablocks-card__meta is-style-meta">
							<div class="novablocks-card__meta-size-modifier">
								<?php echo $aboveTitleMeta; ?>
							</div>
						</div>
					<?php }

					if ( ! empty( $title ) && ! empty( $attributes['showTitle'] ) ) {
						echo '<' . $titleTag . ' class="novablocks-grid__item-title novablocks-card__title">';
						echo '<div class="novablocks-card__title-size-modifier">';
						echo $title;
						echo '</div>';
						echo '</' . $titleTag . '>';
					}

					if ( ! empty( $attributes['showMeta'] ) && ! empty( $belowTitleMeta ) ) { ?>
						<div class="novablocks-grid__item-meta novablocks-card__meta is-style-meta">
							<div class="novablocks-card__meta-size-modifier">
								<?php echo $belowTitleMeta; ?>
							</div>
						</div>
					<?php }

					if ( ! empty( $excerpt ) && ! empty( $attributes['showDescription'] ) ) { ?>
						<div class="novablocks-grid__item-content novablocks-card__description">
							<div class="novablocks-card__content-size-modifier">
								<?php echo $excerpt; ?>
							</div>
						</div>
					<?php } ?>

					<?php if ( ! empty( $attributes['showButtons'] ) ) { ?>
						<div class="novablocks-grid__item-buttons novablocks-card__buttons">
							<div class="wp-block-buttons alignleft">
								<div class="wp-block-button is-style-text">
									<a class="wp-block-button__link" href="<?php echo get_permalink( $post ); ?>">
										<span class="novablocks-buttons-size-modifier">
											<?php esc_html_e( 'Read More', '__plugin_txtd' ) ?>
										</span>
									</a>
								</div>
							</div>
						</div>
					<?php } ?>

				</div>

			<?php } ?>

		</div>

		<a class="novablocks-card__link" href="<?php echo get_permalink( $post ); ?>"></a>

	</div>

	<?php return ob_get_clean();
}
