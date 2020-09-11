<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_posts_collection_block_init' ) ) {

	function novablocks_posts_collection_block_init() {
		register_block_type( 'novablocks/posts-collection', array(
			'render_callback' => 'novablocks_render_posts_collection_block',
			'attributes'      => novablocks_get_posts_collection_attributes_config(),
		) );
	}
}
add_action( 'init', 'novablocks_posts_collection_block_init' );

function novablocks_get_posts_collection_attributes_config() {
	$grid_generator_attributes   = novablocks_get_attributes_from_json( 'src/filters/with-grid-generator/attributes.json' );
	$posts_collection_attributes = novablocks_get_posts_collection_attributes();

	return array_merge( $posts_collection_attributes, $grid_generator_attributes );
}

if ( ! function_exists( 'novablocks_render_posts_collection_block' ) ) {

	function novablocks_render_posts_collection_block( $attributes, $content ) {
		global $novablocks_rendered_posts_ids;

		$attributes_config = novablocks_get_posts_collection_attributes_config();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$args  = novablocks_build_articles_query( $attributes );
		$posts = get_posts( $args );

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
			'imagePadding',
			'imageResizing',
			'containerHeight',
			'headerPosition',

			'layoutStyle',
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

function novablocks_get_post_card_markup( $post, $attributes ) {

	$media        = get_the_post_thumbnail_url( $post );
	$date         = esc_attr( get_the_date( 'c', $post ) );
	$dateReadable = esc_html( get_the_date( '', $post ) );
	$title        = get_the_title( $post );
	$postLink     = esc_url( get_permalink( $post ) );
	$excerpt      = get_the_excerpt( $post );

	$hlevel      = $attributes['level'];
	$titleTag    = 'h' . ( $hlevel + 1 );

	$classes = array(
		'novablocks-card',
		'novablocks-card--' . ( $attributes['isLandscape'] ? 'landscape' : 'portrait' ),
		'novablocks-block__content'
	);

	$className = join( ' ', $classes );

	ob_start(); ?>

	<div class="<?php echo $className; ?>" style="--columns: <?php echo $attributes['columns']; ?>">

		<div class="novablocks-card__layout">

			<?php if ( ! empty( $attributes['showMedia'] ) ) { ?>
				<div class="novablocks-card__layout-media novablocks-grid__item-media">
					<?php echo novablocks_get_card_media_markup( $media, $attributes ); ?>
				</div>
			<?php } ?>

			<?php if ( ! empty( $attributes['showMeta'] ) ||
			           ! empty( $attributes['showTitle'] ) ||
			           ! empty( $attributes['showDescription'] ) ||
			           ! empty( $attributes['showButtons'] ) ) { ?>

				<div class="novablocks-card__layout-content">
					<div class="novablocks-card__inner-container">

						<?php if ( ! empty( $dateReadable ) && ! empty( $attributes['showMeta'] ) ) { ?>
							<div class="novablocks-grid__item-meta novablocks-card__meta is-style-meta">
								<div class="novablocks-card__meta-size-modifier">
								<?php
								echo $dateReadable;

								$categories = wp_get_post_categories( $post->ID );

								if ( ! empty( $categories ) && ! is_wp_error( $categories ) ) {
									$category_id  = $categories[0];
									$category     = get_the_category_by_ID( $category_id );
									$category_url = get_category_link( $category_id );

									if ( ! is_wp_error( $category ) ) {
										echo ' &mdash; ' . $category;
									}
								}
								?>
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
												Read More
											</span>
										</a>
									</div>
								</div>
							</div>
						<?php } ?>

					</div>
				</div>

			<?php } ?>

		</div>

		<a class="novablocks-card__link" href="<?php echo get_permalink( $post ); ?>"></a>

	</div>

	<?php return ob_get_clean();
}
