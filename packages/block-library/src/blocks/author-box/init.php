<?php

/**
 * Handle the Logo block server logic.
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function novablocks_get_author_box_attributes() {

	return novablocks_merge_attributes_from_array( [
		'packages/block-library/src/blocks/author-box/attributes.json',
		'packages/block-editor/src/filters/with-space-and-sizing/attributes.json',
	] );

}

if ( ! function_exists( 'novablocks_render_author_box_block' ) ) {

	/**
	 * Entry point to render the block with the given attributes, content, and context.
	 *
	 * @param array $attributes
	 * @param string $content
	 * @param WP_Block $block
	 *
	 * @return false|string
	 * @see \WP_Block::render()
	 *
	 */
	function novablocks_render_author_box_block( array $attributes, string $content, WP_Block $block ) {
		$attributes_config = novablocks_get_author_box_attributes();
		$attributes        = novablocks_get_attributes_with_defaults( $attributes, $attributes_config );

		if ( empty( $block->context[ 'postId' ] ) ) {
			return '';
		}

		return novablocks_get_the_author_info_box( $block->context[ 'postId' ], $attributes );
	}
}


if ( ! function_exists( 'novablocks_get_the_author_info_box' ) ) {

	/**
	 * Get the HTML of the author info box
	 *
	 * @return string
	 */
	function novablocks_get_the_author_info_box( $post_id, $attributes ): string {

		// Get the current post for easy use
		$post = get_post( $post_id );

		// Bail if no post
		if ( empty( $post ) ) {
			return '';
		}

		// If we aren't on a single post or it's a single post without author, don't continue.
		if ( ! isset( $post->post_author ) ) {
			return '';
		}

		// Get author's biographical information or description
		$user_description = get_the_author_meta( 'user_description', $post->post_author );

		// If an author doesn't have a description, don't display the author info box
//		if ( empty( $user_description ) ) {
//			return '';
//		}

		$author_details = '';

		// Get author's display name
		$display_name = get_the_author_meta( 'display_name', $post->post_author );

		// If display name is not available then use nickname as display name
		if ( empty( $display_name ) ) {
			$display_name = get_the_author_meta( 'nickname', $post->post_author );
		}

		$spacingProps = array_merge(
			novablocks_get_spacing_css( $attributes ),
			novablocks_get_sizing_css( $attributes ),
		);

		$style = join( '; ', $spacingProps ) . '; ';

		$author_details .= '<div 
			class="nb-author-box has-description"
			style="' . $style . '"  
			itemscope itemtype="https://schema.org/Person"
			>';

		// The author avatar
		$author_avatar = get_avatar( get_the_author_meta( 'user_email' ), 100 );
		if ( ! empty( $author_avatar ) ) {
			$author_details .= '<div class="nb-author-box__avatar">' . $author_avatar . '</div>';
		}

		$author_details .= '<div class="nb-author-box__details">';

		if ( ! empty( $display_name ) ) {
			$author_details .= '<span class="nb-author-box__name h3">' . esc_html( $display_name ) . '</span>';
		}

		// The author bio
		$author_details .= '<p class="nb-author-box__description" itemprop="description">' . nl2br( $user_description ) . '</p>';

		$author_details .= '<footer class="nb-author-box__footer">';

		$author_details .= novablocks_get_author_bio_links( $post->ID );

		$author_details .= '</footer>';
		$author_details .= '</div><!-- .nb-author-box__details -->';
		$author_details .= '</div><!-- .nb-author-box -->';

		return $author_details;
	}
}

if ( ! function_exists( 'novablocks_get_author_bio_links' ) ) {
	/**
	 * Return the markup for the author bio links.
	 * These are the links/websites added by one to it's Gravatar profile
	 *
	 * @param int|WP_Post $post_id Optional. Post ID or post object.
	 *
	 * @return string The HTML markup of the author bio links list.
	 */
	function novablocks_get_author_bio_links( $post_id = null ): string {
		$post   = get_post( $post_id );
		$markup = '';
		if ( empty( $post ) ) {
			return $markup;
		}

		// Get author's website URL.
		$user_website = get_the_author_meta( 'url', $post->post_author );

		// Get link to the author archive page.
		$user_posts = get_author_posts_url( get_the_author_meta( 'ID', $post->post_author ) );

		$str     = wp_remote_fopen( 'https://www.gravatar.com/' . md5( strtolower( trim( get_the_author_meta( 'user_email' ) ) ) ) . '.php' );
		$profile = unserialize( $str );

		$markup .= "<div class=\"nb-author-box__links h6\">\n";

		/* translators: %s: the author name */
		$markup .= '<a class="nb-author-box__social-link" href="' . esc_url( $user_posts ) . '" rel="author" title="' . esc_attr( sprintf( esc_html__( 'View all posts by %s', '__components_txtd' ), get_the_author() ) ) . '">' . esc_html__( 'All articles', '__components_txtd' ) . '</a><span class="nb-author-box__separator"></span>';

		if ( is_array( $profile ) && ! empty( $profile['entry'][0]['urls'] ) ) {
			foreach ( $profile['entry'][0]['urls'] as $link ) {
				if ( ! empty( $link['value'] ) && ! empty( $link['title'] ) ) {
					$markup .= '<a class="nb-author-box__social-link" href="' . esc_url( $link['value'] ) . '" target="_blank">' . $link['title'] . "</a><span class='nb-author-box__separator'></span>\n";
				}
			}
		}

		if ( ! empty( $user_website ) ) {
			$markup .= '<a class="nb-author-box__social-link" href="' . esc_url( $user_website ) . '" target="_blank">' . esc_html__( 'Website', '__components_txtd' ) . "</a><span class='nb-author-box__separator'></span>\n";
		}
		$markup .= "</div>\n";

		return $markup;
	}
}
