<?php

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Load the custom comments logic.
require_once 'class-novablocks-comments.php';

if ( ! function_exists('novablocks_render_post_comments_list_block' ) ) {
	/**
	 * @param array $attributes
	 * @param string $content
	 * @param WP_Block $block
	 *
	 * @return false|string
	 */
	function novablocks_render_post_comments_list_block( $attributes, $content, $block ) {
		// Bail if we don't have a post ID.
		if ( empty( $block->context[ 'postId' ] ) ) {
			return '';
		}

		$post = get_post( absint( $block->context[ 'postId' ] ) );
		// Bail if we couldn't find the post.
		if ( empty( $post ) ) {
			return '';
		}

		$post_id = $post->ID;

		// Handle the block attributes by merging them with the defaults.
		$attributes = wp_parse_args( $attributes, [
			'threadComments' => get_option( 'thread_comments' ) ? 'threaded' : false,
			'maxThreadDepth' => get_option( 'thread_comments' ) ? get_option( 'thread_comments_depth' ) : -1,

			'reverseTopLevelCommentsOrder' => ( 'desc' === get_option( 'comment_order' ) ), // True to display the newest comments first.

			'pageComments' => get_option( 'page_comments' ),
			'commentsPerPage' => (int) get_option( 'comments_per_page' ),
			'defaultCommentsPage' => get_option( 'default_comments_page' ), // 'oldest', 'newest'

			'displayCommenterBackground' => true,
			'displayAvatarSize' => 100, // Double the actual size for high dpi displays.

			// The message to use in the comments list when a comment is not approved.
			'moderationMessage' => '', // Fallback to core's default.
			'commentsClosedMessage' => esc_html__( 'Comments are closed.', '__plugin_txtd' ),

			'scrollRelocateCommentFormAfterNumComments' => 7, // If this is 0 or false, no relocation will take place.

			'commentPreviewTime' => 5, // In minutes. How long should the commenter see his unapproved comment. 0 for no preview.

		] );

		/**
		 * Code taken from @see comments_template() to allow for uniform behavior.
		 */
		$comment_args = array(
			'orderby'                   => 'comment_date_gmt',
			'order'                     => 'ASC',
			'status'                    => 'approve',
			'post_id'                   => $post_id,
			'hierarchical'              => $attributes['threadComments'],
			'no_found_rows'             => false,
			'update_comment_meta_cache' => false, // We lazy-load comment meta for performance.
		);

		if ( is_user_logged_in() ) {
			$comment_args['include_unapproved'] = array( get_current_user_id() );

			// If the current user is capable of moderating comments, we will show all comments.
			if ( current_user_can( 'moderate_comments' ) && current_user_can( 'edit_posts' ) ) {
				$comment_args['status'] = 'all';

				// No need for this since we include all.
				unset( $comment_args['include_unapproved'] );

				// Also change the moderation message.
				/* translators: Moderation message shown only to moderators.  */
				$attributes['moderationMessage'] = esc_html__( '⚠️ This comment is waiting for your moderation. ⚠️', '__plugin_txtd' );
			}
		} else {
			/**
			 * Code taken from @see wp_get_unapproved_comment_author_email()
			 * We want to control the time the user gets to see it's own comment, since the core restricts it to 1 minute.
			 */
			$unapproved_email = '';

			if ( ! empty( $_GET['unapproved'] ) && ! empty( $_GET['moderation-hash'] ) ) {
				$comment_id = (int) $_GET['unapproved'];
				$comment    = get_comment( $comment_id );

				if ( $comment && hash_equals( $_GET['moderation-hash'], wp_hash( $comment->comment_date_gmt ) ) ) {
					/**
					 * Filters the period of time the comment will be viewable to the comment author.
					 *
					 * @param int The time in minutes the comment should be visible to the author.
					 * @param WP_Comment $comment
					 */
					$comment_preview_time = apply_filters( 'novablocks_comments_list_preview_time', $attributes['commentPreviewTime'], $comment );
					$comment_preview_expires = strtotime( $comment->comment_date_gmt . '+' . absint( $comment_preview_time ) . ' minute' );

					if ( time() < $comment_preview_expires ) {
						$unapproved_email = $comment->comment_author_email;
					}
				}
			}

			if ( ! $unapproved_email ) {
				$commenter       = wp_get_current_commenter();
				$unapproved_email = $commenter['comment_author_email'];
			}

			if ( $unapproved_email ) {
				$comment_args['include_unapproved'] = array( $unapproved_email );
			}
		}

		if ( $attributes['pageComments'] ) {
			$per_page = (int) get_query_var( 'comments_per_page' );
			if ( 0 === $per_page ) {
				$per_page = $attributes['commentsPerPage'];
			}

			$comment_args['number'] = $per_page;
			$page                   = (int) get_query_var( 'cpage' );

			if ( $page ) {
				$comment_args['offset'] = ( $page - 1 ) * $per_page;
			} elseif ( 'oldest' === $attributes['defaultCommentsPage'] ) {
				$comment_args['offset'] = 0;
			} else {
				// If fetching the first page of 'newest', we need a top-level comment count.
				$top_level_query = new WP_Comment_Query();
				$top_level_args  = array(
						'count'   => true,
						'orderby' => false,
						'post_id' => $post_id,
						'status'  => 'approve',
				);

				if ( $comment_args['hierarchical'] ) {
					$top_level_args['parent'] = 0;
				}

				if ( isset( $comment_args['include_unapproved'] ) ) {
					$top_level_args['include_unapproved'] = $comment_args['include_unapproved'];
				}

				$top_level_count = $top_level_query->query( $top_level_args );

				$comment_args['offset'] = ( ceil( $top_level_count / $per_page ) - 1 ) * $per_page;
			}
		}

		/**
		 * Filters the arguments used to query comments in @see comments_template().
		 *
		 * @since 4.5.0
		 *
		 * @see WP_Comment_Query::__construct()
		 *
		 * @param array $comment_args {
		 *     Array of WP_Comment_Query arguments.
		 *
		 *     @type string|array $orderby                   Field(s) to order by.
		 *     @type string       $order                     Order of results. Accepts 'ASC' or 'DESC'.
		 *     @type string       $status                    Comment status.
		 *     @type array        $include_unapproved        Array of IDs or email addresses whose unapproved comments
		 *                                                   will be included in results.
		 *     @type int          $post_id                   ID of the post.
		 *     @type bool         $no_found_rows             Whether to refrain from querying for found rows.
		 *     @type bool         $update_comment_meta_cache Whether to prime cache for comment meta.
		 *     @type bool|string  $hierarchical              Whether to query for comments hierarchically.
		 *     @type int          $offset                    Comment offset.
		 *     @type int          $number                    Number of comments to fetch.
		 * }
		 */
		$comment_args  = apply_filters( 'comments_template_query_args', $comment_args );
		$comment_args  = apply_filters( 'novablocks_comments_list_query_args', $comment_args );

		$comment_query = new WP_Comment_Query( $comment_args );
		$_comments     = $comment_query->comments;

		// Trees must be flattened before they're passed to the walker.
		if ( $comment_args['hierarchical'] ) {
			$comments_flat = array();
			foreach ( $_comments as $_comment ) {
				$comments_flat[]  = $_comment;
				$comment_children = $_comment->get_children(
					array(
						'format'  => 'flat',
						'status'  => $comment_args['status'],
						'orderby' => $comment_args['orderby'],
					)
				);

				foreach ( $comment_children as $comment_child ) {
					$comments_flat[] = $comment_child;
				}
			}
		} else {
			$comments_flat = $_comments;
		}

		/**
		 * Filters the comments array.
		 *
		 * @param array $comments Array of comments supplied to the comments template.
		 * @param int   $post_ID  Post ID.
		 */
		$comments = apply_filters( 'comments_array', $comments_flat, $post_id );

		$comment_count         = count( $comments );
		$max_num_comment_pages = $comment_query->max_num_pages;

		if ( '' == get_query_var( 'cpage' ) && $max_num_comment_pages > 1 ) {
			set_query_var( 'cpage', 'newest' === $attributes['defaultCommentsPage'] ? get_comment_pages_count() : 1 );
		}

		if ( empty( $comments ) ) {
			return '';
		}

		ob_start(); ?>
		<div class="comment-list">
			<?php wp_list_comments( array(
					'walker'             => new NovaBlocks_Walker_Comment(),
					'max_depth'          => $attributes['maxThreadDepth'],
					'reverse_top_level'  => $attributes['reverseTopLevelCommentsOrder'],
					'avatar_size'        => $attributes['displayAvatarSize'],
					'moderation_message' => $attributes['moderationMessage'],
					'style'              => 'div',
					'short_ping'         => true,

					// Extra args of our own. These will also be passed along to the walker.
					'display_commenter_background' => $attributes['displayCommenterBackground'],
			), $comments ); ?>
		</div><!-- .comment-list -->

		<?php
		// Add another form at the bottom when we have a certain number of comments.
		if ( comments_open( $post_id )
		     && ! empty( $attributes['scrollRelocateCommentFormAfterNumComments'] )
		     && get_comments_number( $post_id ) >= absint( $attributes['scrollRelocateCommentFormAfterNumComments'] ) ) {

			// This is just a marker to use to move the only form on the page!
			// We will move the comment form on scroll.
			echo '<div id="second-comment-form-marker"></div>';
		}

		if ( ! comments_open( $post_id ) ) { ?>
			<p class="comments-closed"><?php echo $attributes['commentsClosedMessage']; ?></p>
		<?php }

		return ob_get_clean();
	}
}
