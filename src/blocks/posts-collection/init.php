<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_posts_collection_block_init' ) ) {

	function novablocks_posts_collection_block_init() {
		register_block_type( 'novablocks/posts-collection', array(
			'render_callback' => 'novablocks_render_posts_collection_block',
			'attributes' => novablocks_get_posts_collection_attributes(),
		) );
	}
}
add_action( 'init', 'novablocks_posts_collection_block_init' );

if ( ! function_exists( 'novablocks_render_posts_collection_block' ) ) {

	function novablocks_render_posts_collection_block( $attributes, $content ) {

		$attributes_config = novablocks_get_posts_collection_attributes();
		$attributes = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		$args = array(
			'posts_per_page'   => $attributes['numberOfPosts'],
			'post_status'      => 'publish',
			'order'            => $attributes['order'],
			'orderby'          => $attributes['orderBy'],
			'suppress_filters' => false,
			'post__not_in'     => array( get_the_ID() ),
		);

		if ( isset( $attributes['categories'] ) ) {
			$args['category'] = $attributes['categories'];
		}

		$posts = get_posts( $args );

		ob_start();

		foreach ( $posts as $post ) {
			$card_markup = novablocks_get_post_card_markup( $post, $attributes );
			echo apply_filters( 'novablocks_post_card_markup', $card_markup, $post, $attributes );
		}

		$content = ob_get_clean();
		$content = apply_filters( 'novablocks_posts_collection_markup', $content, $attributes );

		return novablocks_get_collection_output( $attributes, $content );
	}
}

function novablocks_get_post_card_markup( $post, $attributes ) {

	$media = get_the_post_thumbnail_url( $post );
	$date = esc_attr( get_the_date( 'c', $post ) );
	$dateReadable = esc_html( get_the_date( '', $post ) );
	$title = get_the_title( $post );
	$postLink = esc_url( get_permalink( $post ) );
	$excerpt = $post->post_excerpt;

	if ( ! ( $excerpt ) ) {
		$excerpt = $post->post_content;
	}

	$hlevel = $attributes['level'];
	$titleTag = 'h' . ( $hlevel + 1 );
	$subtitleTag = 'h' . ( $hlevel + 2 );

	ob_start(); ?>

	<div class="novablocks-card novablocks-block__content novablocks-card__inner-container">

		<?php

		if ( false != $attributes['showMedia'] ) {
			echo novablocks_get_card_media_markup( $media, $attributes );
		}

		if ( false != $attributes['showMeta'] && ! empty( $dateReadable ) ) { ?>
			<div class="novablocks-card__meta is-style-meta"><?php echo $dateReadable; ?></div>
		<?php }

		if ( false != $attributes['showTitle'] && ! empty( $title ) ) {
			echo '<' . $titleTag . ' class="novablocks-card__title">' . $title . '</' . $titleTag . '>';
		}

		if ( false != $attributes['showSubtitle'] ) {
			echo '<' . $subtitleTag . ' class="novablocks-card__subtitle">' . 'Category' . '</' . $subtitleTag . '>';
		}

		if ( false != $attributes['showDescription'] && ! empty( $excerpt ) ) { ?>
			<div class="novablocks-card__description"><?php echo $excerpt; ?></div>
		<?php } ?>

		<?php if ( false != $attributes['showButtons'] ) { ?>

			<div class="novablocks-card__buttons">
				<div class="wp-block-button">
					<a href="<?php echo get_permalink( $post ); ?>" class="wp-block-button__link">Read More</a>
				</div>
			</div>

		<?php } ?>

	</div>

	<?php return ob_get_clean();
}
