<?php
/**
 * Handle the Posts block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'novablocks_posts_block_init' ) ) {
	function novablocks_posts_block_init() {
		register_block_type( 'novablocks/posts', array(
			'attributes'      => novablocks_get_posts_block_attributes(),
			'render_callback' => 'novablocks_render_posts_block'
		) );
	}
}

add_action( 'init', 'novablocks_posts_block_init' );

if ( ! function_exists( 'novablocks_render_posts_block' ) ) {
	function novablocks_render_posts_block( $attributes, $content ) {
		$attributes_config = novablocks_get_posts_block_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		global $post;

		$args = array(
			'posts_per_page'   => $attributes['numberOfPosts'],
			'post_status'      => 'publish',
			'order'            => $attributes['order'],
			'orderby'          => $attributes['orderBy'],
			'suppress_filters' => false,
			'post__not_in'     => array( $post->ID ),
		);

		if ( isset( $attributes['categories'] ) ) {
			$args['category'] = $attributes['categories'];
		}

		$recent_posts    = get_posts( $args );
		$formatted_posts = novablocks_get_post_info( $recent_posts );

		return novablocks_posts( $formatted_posts, $attributes );

	}
}


function novablocks_posts( $posts, $attributes ) {

	$posts_block    = '';
	$article_markup = '';

	foreach ( $posts as $post ) {

		$article_markup .= '<article class="novablocks-media novablocks-media--blog wp-block-group alignfull content-is-moderate block-is-moderate has-background">';
		$article_markup .= '<div class="wp-block-group__inner-container">';
		$article_markup .= '<div class="wp-block alignwide">';
		$article_markup .= '<div class="novablocks-media__layout">';
		$article_markup .= '<div class="novablocks-media__content">';
		$article_markup .= '<div class="novablocks-media__inner-container">';

		if ( isset( $attributes['displayDate'] ) && $attributes['displayDate'] ) {
			$article_markup .= sprintf(
				'<time datetime="%1$s">%2$s</time>',
				esc_url( $post['date'] ),
				esc_html( $post['dateReadable'] )
			);
		}

		$title = $post['title'];

		if ( ! $title ) {

			$title = _x( '(no title)', 'placeholder when a post has no title', 'nova-blocks' );

		}

		$article_markup .= sprintf(
			'<h2><a href="%1$s" alt="%2$s">%2$s</a></h2>',
			$post['postLink'],
			$title
		);

		if ( isset( $attributes['displayContent'] ) && $attributes['displayContent'] ) {
			$post_excerpt = $post['postExcerpt'];

			$article_markup .= sprintf(
				'<div class=>%1$s</div>',
				esc_html( $post_excerpt )
			);
		}

		if ( isset( $attributes['displayReadMore'] ) && $attributes['displayReadMore'] ) {
			$article_markup .= sprintf(
				'<div><a href="%1$s">%2$s</a></div>',
				esc_url( $post['postLink'] ),
				esc_html( $attributes['postLink'] )
			);

		}

		$article_markup .= '</div></div>';

		if ( null !== $post['thumbnailURL'] && $post['thumbnailURL'] && isset( $attributes['displayFeaturedImage'] ) && $attributes['displayFeaturedImage'] ) {
			$article_markup .= sprintf(
				'<div class="novablocks-media__aside"><div class="novablocks-media__image"><a class="post-thumbnail" style="background-image:url(%1$s)"></a><img src="%1$s"/></div></div>',
				esc_url( $post['thumbnailURL'] )
			);
		}

		$article_markup .= '</div></div></div></article>';
	}

	$posts_block .= $article_markup;

	return $posts_block;
}

function novablocks_get_post_info( $posts ) {

	$formatted_posts = array();

	foreach ( $posts as $post ) {

		$formatted_post = null;

		$formatted_post['thumbnailURL'] = get_the_post_thumbnail_url( $post );
		$formatted_post['date']         = esc_attr( get_the_date( 'c', $post ) );
		$formatted_post['dateReadable'] = esc_html( get_the_date( '', $post ) );
		$formatted_post['title']        = get_the_title( $post );
		$formatted_post['postLink']     = esc_url( get_permalink( $post ) );

		$post_excerpt = $post->post_excerpt;

		if ( ! ( $post_excerpt ) ) {

			$post_excerpt = $post->post_content;

		}

		$formatted_post['postExcerpt'] = $post_excerpt;

		$formatted_posts[] = $formatted_post;

	}

	return $formatted_posts;

}
